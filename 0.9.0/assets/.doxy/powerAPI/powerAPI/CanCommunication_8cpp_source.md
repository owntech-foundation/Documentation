

# File CanCommunication.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**CanCommunication.cpp**](CanCommunication_8cpp.md)

[Go to the documentation of this file](CanCommunication_8cpp.md)


```C++
/*
 * Copyright (c) 2022-2024 LAAS-CNRS
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
 * SPDX-License-Identifier: LGLPV2.1
 */

/* Header */
#include "CanCommunication.h"
#include "data_objects.h"

/* Zephyr driver*/
#include <zephyr/drivers/gpio.h>

// Extern variable defined in this module

extern uint16_t broadcast_time;
extern uint16_t control_time;


uint16_t CanCommunication::getCanNodeAddr()
{
    return can_node_addr;
}

bool CanCommunication::getCtrlEnable()
{
    return ctrl_enable;
}

float32_t CanCommunication::getCtrlReference()
{
    return reference_value;
}

uint16_t CanCommunication::getBroadcastPeriod()
{
    return broadcast_time;
}

uint16_t CanCommunication::getControlPeriod()
{
    return control_time;
}


void CanCommunication::setCanNodeAddr(uint16_t addr)
{
    can_node_addr = addr;
}

void CanCommunication::setCtrlEnable(bool enable)
{
    ctrl_enable = enable;
}

void CanCommunication::setCtrlReference(float32_t reference)
{
    reference_value = reference;
}

void CanCommunication::setBroadcastPeriod(uint16_t time_100_ms)
{
    broadcast_time = time_100_ms;
}

void CanCommunication::setControlPeriod(uint16_t time_100_ms)
{
    control_time = time_100_ms;
}

void CanCommunication::enableCan()
{
    const struct gpio_dt_spec can_standby_spec = GPIO_DT_SPEC_GET(CAN_STANDBY_DEVICE, gpios);
    gpio_pin_configure_dt(&can_standby_spec, GPIO_OUTPUT_INACTIVE);
}
```


