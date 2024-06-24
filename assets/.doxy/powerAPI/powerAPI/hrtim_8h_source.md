

# File hrtim.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_hrtim\_driver**](dir_9bdb70ffe78507e4a3f4bf6bbcfe5795.md) **>** [**zephyr**](dir_5726d3ce904599e290c14ea43bd5e0ac.md) **>** [**public\_api**](dir_f50115c0b0057abe0315b5e6b1574f35.md) **>** [**hrtim.h**](hrtim_8h.md)

[Go to the documentation of this file](hrtim_8h.md)


```C++
/*
 * Copyright (c) 2021-2023 LAAS-CNRS
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

/*
 * @date   2023
 *
 * @author Clément Foucher <clement.foucher@laas.fr>
 * @author Luiz Villa <luiz.villa@laas.fr>
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 */

#ifndef HRTIM_H_
#define HRTIM_H_

#include <stdint.h>
#include "arm_math.h"
#include <zephyr/kernel.h>
#include "hrtim_enum.h"

#define TU_DEFAULT_DT (100U)       /* dead-time in ns */
#define TU_DEFAULT_FREQ (200000U)  /* frequency in Hz */
#define TU_DEFAULT_PERIOD (27200U) /* default period for 200kHz in bits */

#ifdef HRTIM_MCR_TFCEN
#define HRTIM_STU_NUMOF (6U) 
#else
#define HRTIM_STU_NUMOF (5U)
#endif

#ifdef __cplusplus
extern "C"
{
#endif

typedef struct
{
    pwm_conf_t pwm_conf;            /* Pulse Width Modulation Configuration */
    phase_shift_conf_t phase_shift; /* Phase shift configuration */
    gpio_conf_t gpio_conf;          /* Pulse width */
    switch_conv_conf_t switch_conv; /* Switch Convention */
    adc_hrtim_conf_t adc_hrtim;     /* ADC - HRTIM setup*/
    comp_usage_conf_t comp_usage;   /* Usage of comp1 to comp4 */
} timer_hrtim_t;

extern timer_hrtim_t *tu_channel[HRTIM_STU_NUMOF];


int hrtim_get_apb2_clock();

void hrtim_init_default_all();

uint16_t hrtim_tu_init(hrtim_tu_number_t tu_number);

hrtim_tu_ON_OFF_t hrtim_get_status(hrtim_tu_number_t tu_number);

void hrtim_tu_gpio_init(hrtim_tu_number_t tu_number);

void hrtim_out_dis(hrtim_tu_number_t tu_number);

void hrtim_out_en(hrtim_tu_number_t tu_number);

void hrtim_out_en_single(hrtim_output_units_t PWM_OUT);

void hrtim_out_dis_single(hrtim_output_units_t PWM_OUT);

void hrtim_set_modulation(hrtim_tu_number_t tu_number, hrtim_cnt_t modulation);

hrtim_cnt_t hrtim_get_modulation(hrtim_tu_number_t tu_number);

void hrtim_set_switch_convention(hrtim_tu_number_t tu_number, hrtim_switch_convention_t convention);

hrtim_switch_convention_t hrtim_get_switch_convention(hrtim_tu_number_t tu_number);

void hrtim_cmpl_pwm_out1(hrtim_tu_number_t tu_number);

void hrtim_cmpl_pwm_out2(hrtim_tu_number_t tu_number);

void hrtim_frequency_set(uint32_t value);

uint16_t hrtim_period_get(hrtim_tu_number_t tu_number);

uint16_t hrtim_period_Master_get();

uint32_t hrtim_period_get_us(hrtim_tu_number_t tu_number);

uint32_t hrtim_period_Master_get_us();

void hrtim_tu_cmp_set(hrtim_tu_number_t tu_number, hrtim_cmp_t cmp, uint16_t value);

void hrtim_master_cmp_set(hrtim_cmp_t cmp, uint16_t value);

void hrtim_dt_set(hrtim_tu_number_t tu_number, uint16_t rise_ns, uint16_t fall_ns);

void hrtim_duty_cycle_set(hrtim_tu_number_t tu_number, uint16_t value);

void hrtim_phase_shift_set(hrtim_tu_number_t tu_number, uint16_t shift);

void hrtim_dt_init(hrtim_tu_number_t tu_number);

void hrtim_cnt_en(hrtim_tu_number_t tu_number);

void hrtim_cnt_dis(hrtim_tu_number_t tu_number);

void hrtim_rst_evt_en(hrtim_tu_number_t tu_number, hrtim_reset_trig_t evt);

void hrtim_rst_evt_dis(hrtim_tu_number_t tu_number, hrtim_reset_trig_t evt);

void hrtim_adc_trigger_set_postscaler(hrtim_tu_number_t tu_number, uint32_t ps_ratio);

void hrtim_adc_trigger_en(hrtim_tu_number_t tu_number);

void hrtim_adc_trigger_dis(hrtim_tu_number_t tu_number);

void hrtim_adc_rollover_set(hrtim_tu_number_t tu_number, hrtim_adc_edgetrigger_t adc_rollover);

hrtim_adc_edgetrigger_t hrtim_adc_rollover_get(hrtim_tu_number_t tu_number);

void hrtim_PeriodicEvent_configure(hrtim_tu_t tu, uint32_t repetition, hrtim_callback_t callback);

void hrtim_PeriodicEvent_en(hrtim_tu_t tu);

void hrtim_PeriodicEvent_dis(hrtim_tu_t tu);

void hrtim_PeriodicEvent_SetRep(hrtim_tu_t tu, uint32_t repetition);

uint32_t hrtim_PeriodicEvent_GetRep(hrtim_tu_t tu);

void DualDAC_init(hrtim_tu_number_t tu);

void hrtim_pwm_mode_set(hrtim_tu_number_t tu_number, hrtim_pwm_mode_t mode);

hrtim_pwm_mode_t hrtim_pwm_mode_get(hrtim_tu_number_t tu_number);

void hrtim_adc_triger_set(hrtim_tu_number_t tu_number, hrtim_adc_trigger_t adc_trig);

hrtim_adc_trigger_t hrtim_adc_triger_get(hrtim_tu_number_t tu_number);

void hrtim_eev_set(hrtim_tu_number_t tu_number, hrtim_external_trigger_t eev);

hrtim_external_trigger_t hrtim_eev_get(hrtim_tu_number_t tu_number);

#ifdef __cplusplus
}
#endif

#endif // HRTIM_H_
```


