

# File TwistAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_power\_api**](dir_cd4faed35847176dcc5b7bcd69c9a669.md) **>** [**zephyr**](dir_d7ae7ccaa158b4bef6f2317c7758639a.md) **>** [**public\_api**](dir_483dd9146a51f5f74f5a28f650628f05.md) **>** [**TwistAPI.h**](TwistAPI_8h.md)

[Go to the documentation of this file](TwistAPI_8h.md)


```C++
/*
 * Copyright (c) 2023 LAAS-CNRS
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

#ifndef POWER_H_
#define POWER_H_

#include <zephyr/kernel.h>
#include "arm_math.h"
#include "hrtim_enum.h"

#define LEG_TOKEN(node_id) DT_STRING_TOKEN(node_id, leg_name),

/* All the leg with okay status in the device tree */
typedef enum
{
    DT_FOREACH_CHILD_STATUS_OKAY(DT_NODELABEL(power_shield), LEG_TOKEN)
} leg_t;

/* Enum to define the hardware version */
typedef enum
{
    shield_TWIST_V1_2 = 0,
    shield_TWIST_V1_3,
    shield_TWIST_V1_4,
    shield_ownverter,
    shield_other,
} twist_version_t;

class TwistAPI
{
private:
    twist_version_t twist_version = shield_other; // shield version
    bool twist_init = false;                        // check if shield version has been initalized or not

    hrtim_tu_number_t spinNumberToTu(uint16_t spin_number); // return timing unit from spin pin number

public:
    void setVersion(twist_version_t twist_ver);

    void initLegMode(leg_t leg, hrtim_switch_convention_t leg_convention, hrtim_pwm_mode_t leg_mode);

    void initAllMode(hrtim_switch_convention_t leg_convention, hrtim_pwm_mode_t leg_mode);

    void setLegDutyCycle(leg_t leg, float32_t duty_leg);

    void setAllDutyCycle(float32_t duty_all);

    void startLeg(leg_t leg);

    void connectLegCapacitor(leg_t leg);

    void startAll();

    void connectAllCapacitor();

    void stopLeg(leg_t leg);

    void disconnectLegCapacitor(leg_t leg);

    void stopAll();

    void disconnectAllCapacitor();

    void setLegTriggerValue(leg_t leg, float32_t trigger_value);

    void setAllTriggerValue(float32_t trigger_value);

    void setLegPhaseShift(leg_t leg, int16_t phase_shift);

    void setAllPhaseShift(int16_t phase_shift);

    void setLegSlopeCompensation(leg_t leg, float32_t set_voltage, float32_t reset_voltage);

    void setAllSlopeCompensation(float32_t set_voltage, float32_t reset_voltage);

    void setLegDeadTime(leg_t leg, uint16_t ns_rising_dt, uint16_t ns_falling_dt);

    void setAllDeadTime(uint16_t ns_rising_dt, uint16_t ns_falling_dt);

    void setLegAdcDecim(leg_t leg, uint16_t adc_decim);

    void setAllAdcDecim(uint16_t adc_decim);

    void initLegBuck(leg_t leg, hrtim_pwm_mode_t leg_mode = VOLTAGE_MODE);

    void initAllBuck(hrtim_pwm_mode_t leg_mode = VOLTAGE_MODE);

    void initLegBoost(leg_t leg);

    void initAllBoost();
};

// Public object to interact with the class
extern TwistAPI twist;

#endif // TWISTAPI_H_
```


