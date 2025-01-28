

# File power\_init.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**src**](dir_cc8f80e4cf83a61a7635b2e9633862a2.md) **>** [**power\_init.h**](power__init_8h.md)

[Go to the documentation of this file](power__init_8h.md)


```C++
/*
 * Copyright (c) 2023-2024 LAAS-CNRS
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


#ifndef POWER_INIT_H_
#define POWER_INIT_H_

#include <zephyr/kernel.h>
#include "hrtim.h"
#include "SpinAPI.h"

#define LEG_PWM_PIN(node_id)    DT_PROP_BY_IDX(node_id, pwm_pin_num, 0),

#define LEG_PWM_X1_HIGH(node_id)    DT_PROP_OR(node_id, pwm_x1_high, 1),

#define LEG_CURRENT_PIN(node_id)    DT_PROP_OR(node_id, current_pin_num, 0),

#define LEG_ADC(node_id)    DT_STRING_TOKEN(node_id, default_adc),

#define LEG_EDGE_TRIGGER(node_id)   DT_STRING_TOKEN(node_id, default_edge_trigger),

#define LEG_MODULATION(node_id) DT_STRING_TOKEN(node_id, default_modulation),

#define LEG_RISING_DT(node_id)  DT_PROP_BY_IDX(node_id, default_dead_time, 0),

#define LEG_FALLING_DT(node_id) DT_PROP_BY_IDX(node_id, default_dead_time, 1),

#define LEG_PHASE(node_id)  DT_PROP(node_id, default_phase_shift),

#define LEG_ADC_DECIM(node_id)  DT_PROP(node_id, default_adc_decim),

#define LEG_OUTPUT1(node_id) DT_PROP(node_id, output1_inactive),

#define LEG_OUTPUT2(node_id) DT_PROP(node_id, output2_inactive),

#define  LEG_HAS_DRIVER(node_id) DT_NODE_HAS_PROP(node_id, driver_pin_num),

#define  LEG_DRIVER_PIN(node_id) DT_PROP_OR(node_id, driver_pin_num, 0),


#define  LEG_HAS_CAPACITOR(node_id) DT_NODE_HAS_PROP(node_id, capa_pin_num),

#define LEG_CAPACITOR_PIN(node_id) DT_PROP_OR(node_id, capa_pin_num, 0),

#define LEG_COUNTER(node_id) +1

// the shield node identifier in the device tree
#define POWER_SHIELD_ID           DT_NODELABEL(powershield)

typedef enum{
    CM_DAC_NONE = 0,
    CM_DAC1 = 25,
    CM_DAC3 = 30,
}cm_dac_t;

extern uint32_t timer_frequency;

extern uint16_t dt_pwm_pin[];

extern uint16_t dt_pwm_x1_high[];

extern adc_t dt_adc[];

extern uint32_t dt_adc_decim[];

extern hrtim_cnt_t dt_modulation[];

extern hrtim_adc_edgetrigger_t dt_edge_trigger[];

extern uint16_t dt_rising_deadtime[];

extern uint16_t dt_falling_deadtime[];

extern int16_t dt_phase_shift[];

extern uint8_t dt_leg_count;

extern uint8_t dt_output1_inactive[];

extern uint8_t dt_output2_inactive[];

extern uint16_t dt_current_pin[];

extern uint16_t dt_pin_driver[];

extern uint16_t dt_pin_capacitor[];

#endif // POWER_H_
```


