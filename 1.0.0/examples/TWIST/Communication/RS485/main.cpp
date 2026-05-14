/*
 * Copyright (c) 2021-present LAAS-CNRS
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 2.1 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: LGPL-2.1
 */

/* --------------OWNTECH APIs---------------------------------- */
#include "SpinAPI.h"
#include "TaskAPI.h"
#include "ShieldAPI.h"
#include "CommunicationAPI.h"


/*-- Zephyr includes --*/
#include "zephyr/console/console.h"


#define ROLE_MASTER 0
#define ROLE_FOLLOWER 1

#define IDLE 0
#define POWER 1

/* --------------SETUP FUNCTIONS DECLARATION------------------- */
void setup_routine();

/* --------------LOOP FUNCTIONS DECLARATION-------------------- */
void loop_background_task();
void loop_critical_task();
void loop_communication_task();

/* --------------USER VARIABLES DECLARATIONS------------------- */

// Select board role manually: set ROLE_MASTER on one board and ROLE_FOLLOWER on the other.
uint8_t role_id = ROLE_MASTER;

struct RS485_frame
{
    float voltage_ref;
    float voltage_meas;
    uint8_t sender_id;
    uint8_t status_code;
} __packed;

typedef RS485_frame RS485_frame_t;

static RS485_frame_t frame_tx;
static RS485_frame_t frame_rx;

constexpr size_t RS485_FRAME_SIZE = sizeof(RS485_frame_t);

// RS485 peripheral works with byte arrays; memcpy copies typed frame data into raw bytes.
uint8_t buffer_tx[RS485_FRAME_SIZE];
uint8_t buffer_rx[RS485_FRAME_SIZE];

uint8_t received_serial_char;
int8_t CommTask_num;

enum serial_interface_menu_mode
{
    IDLEMODE = 0,
    POWERMODE = 1,
};

serial_interface_menu_mode mode = IDLEMODE;

static uint32_t control_task_period = 100; // [us]
static bool send_idle = false;

static float voltage_ref = 32.0F;
static float voltage_meas = 0.0F;



static void update_measurements(void)
{
    float latest = shield.sensors.getLatestValue(V_HIGH);
    if (latest != NO_VALUE)
    {
        voltage_meas = latest;
    }
}

void reception_function(void)
{
    // buffer_rx contains raw bytes received from RS485. memcpy rebuilds a typed frame.
    memcpy(&frame_rx, buffer_rx, sizeof(frame_rx));

    if (role_id == ROLE_FOLLOWER)
    {
        // FOLLOWER flow: read master's command/status, then answer immediately with local measurement.
        if (frame_rx.sender_id == ROLE_MASTER)
        {
            if(frame_rx.status_code == POWER)
            {
                mode = POWERMODE;
            }
            else
            {
                mode = IDLEMODE;
            }

            frame_tx.sender_id = ROLE_FOLLOWER;
            frame_tx.voltage_meas = voltage_meas;

            memcpy(buffer_tx, &frame_tx, sizeof(frame_tx));

            // startTransmission() pushes buffer_tx to the RS485 driver and starts bus transmission.
            communication.rs485.startTransmission();
        }
    }
    else
    {
        // MASTER flow: store follower feedback when its reply is received.
        if (frame_rx.sender_id == ROLE_FOLLOWER)
        {
            voltage_meas = frame_rx.voltage_meas;
        }
    }
}

void setup_routine()
{
    shield.power.initBuck(ALL);
    shield.sensors.enableDefaultTwistSensors();

    uint32_t background_task_number = task.createBackground(loop_background_task);
    task.createCritical(loop_critical_task, control_task_period);

    task.startBackground(background_task_number);
    task.startCritical();

    CommTask_num = task.createBackground(loop_communication_task);
    task.startBackground(CommTask_num);

    communication.rs485.configure(buffer_tx, buffer_rx, sizeof(buffer_rx),
                                  reception_function,
                                  SPEED_20M);
}

void loop_communication_task()
{
    received_serial_char = console_getchar();

    switch (received_serial_char)
    {
    case 'h':
        printk(" ________________________________________ \n"
               "|      ---- RS485 MENU ----              |\n"
               "|     press i : idle mode                |\n"
               "|     press p : power mode               |\n"
               "|________________________________________|\n\n");
        break;
    case 'i':
        mode = IDLEMODE;
        break;
    case 'p':
        mode = POWERMODE;
        send_idle = false;
        break;
    default:
        break;
    }
}

void loop_background_task()
{
    printk("role=%u mode=%u vref=%0.2f vmeas=%0.2f rx=%u\n",
           role_id, mode, (double)voltage_ref, (double)voltage_meas);

    if (mode == POWERMODE)
    {
        spin.led.toggle();
    }
    else
    {
        spin.led.turnOff();
    }

    task.suspendBackgroundMs(2000);
}

void loop_critical_task()
{
    update_measurements();

    if (mode == POWERMODE)
    {
        if (role_id == ROLE_MASTER)
        {
            frame_tx.sender_id = ROLE_MASTER;
            frame_tx.status_code = POWER;
            frame_tx.voltage_ref = 32.0F;
            voltage_ref = frame_tx.voltage_ref;
            frame_tx.voltage_meas = 0.0F;

            memcpy(buffer_tx, &frame_tx, sizeof(frame_tx));
            communication.rs485.startTransmission();
        }
    }
    else if (mode == IDLEMODE)
    {
        if (!send_idle && role_id == ROLE_MASTER)
        {
            frame_tx.sender_id = ROLE_MASTER;
            frame_tx.status_code = IDLE;
            frame_tx.voltage_ref = voltage_ref;
            frame_tx.voltage_meas = 0.0F;

            memcpy(buffer_tx, &frame_tx, sizeof(frame_tx));
            communication.rs485.startTransmission();
            send_idle = true;
        }
    }
}

/**
 * This is the main function of this example
 * This function is generic and does not need editing.
 */
int main(void)
{
    setup_routine();

    return 0;
}