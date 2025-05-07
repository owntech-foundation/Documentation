

# File Power.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**src**](dir_cc8f80e4cf83a61a7635b2e9633862a2.md) **>** [**Power.h**](Power_8h.md)

[Go to the documentation of this file](Power_8h.md)


```C++
/*
 * Copyright (c) 2023-present LAAS-CNRS
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

/*
 * @date 2024
 *
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 * @author Jean Alinei <jean.alinei@owntech.org
 *
 * @brief This file is based on the device tree to initialize legs controlled
 *        by the HRTIM
 */

#ifndef POWER_H_
#define POWER_H_

#include <zephyr/kernel.h>
#include "arm_math.h"
#include "hrtim_enum.h"

#define LEG_TOKEN(node_id) DT_STRING_TOKEN(node_id, leg_name),

typedef enum
{
    DT_FOREACH_CHILD_STATUS_OKAY(DT_NODELABEL(powershield), LEG_TOKEN)
    ALL
} leg_t;

class PowerAPI
{
private:
    /* return timing unit from spin pin number */
    hrtim_tu_number_t spinNumberToTu(uint16_t spin_number);


public:
    void initMode(leg_t leg,
                  hrtim_switch_convention_t leg_convention,
                  hrtim_pwm_mode_t leg_mode);

    void setDutyCycle(leg_t leg, float32_t duty_value);

    void setDutyCycleRaw(leg_t leg, uint16_t duty_value);


    void start(leg_t leg);

    void stop(leg_t leg);

    void connectCapacitor(leg_t leg);

    void disconnectCapacitor(leg_t leg);

    void connectDriver(leg_t leg);

    void disconnectDriver(leg_t leg);

    void setTriggerValue(leg_t leg, float32_t trigger_value);

    void setPhaseShift(leg_t leg, int16_t phase_shift);

    void setSlopeCompensation(leg_t leg,
                              float32_t set_voltage,
                              float32_t reset_voltage);

    void setDeadTime(leg_t leg,
                     uint16_t ns_rising_dt,
                     uint16_t ns_falling_dt);

    void setDutyCycleMin(leg_t leg, float32_t duty_cycle);

    void setDutyCycleMinRaw(leg_t leg, uint16_t duty_cycle);

    void setDutyCycleMaxRaw(leg_t leg, uint16_t duty_cycle);

    void setDutyCycleMax(leg_t leg, float32_t duty_cycle);

    float32_t getDutyCycleMax(leg_t leg);

    uint16_t getDutyCycleMaxRaw(leg_t leg);

    float32_t getDutyCycleMin(leg_t leg);

    uint16_t getDutyCycleMinRaw(leg_t leg);

    uint16_t getPeriod(leg_t leg);


    void setAdcDecim(leg_t leg, uint16_t adc_decim);

    void initBuck(leg_t leg, hrtim_pwm_mode_t leg_mode = VOLTAGE_MODE);

    void initBoost(leg_t leg);

};

#endif /* POWER_H_ */
```


