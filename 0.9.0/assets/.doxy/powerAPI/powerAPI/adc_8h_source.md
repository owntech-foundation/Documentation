

# File adc.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_adc\_driver**](dir_e0b0ebd8181eadf56b45f70b679dd6ce.md) **>** [**zephyr**](dir_fc55e1a77480d908ce2594a494dae021.md) **>** [**public\_api**](dir_1a23096fc67cd9ffce086a2218b577f7.md) **>** [**adc.h**](adc_8h.md)

[Go to the documentation of this file](adc_8h.md)


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

#ifndef ADC_H_
#define ADC_H_


// Stdlib
#include <stdint.h>
#include <stdbool.h>


#ifdef __cplusplus
extern "C" {
#endif


// Public enums

typedef enum
{
    software  = 0,
    hrtim_ev1 = 1,
    hrtim_ev2 = 2,
    hrtim_ev3 = 3,
    hrtim_ev4 = 4,
} adc_ev_src_t;


// Public API

void adc_configure_trigger_source(uint8_t adc_number, adc_ev_src_t trigger_source);

void adc_configure_discontinuous_mode(uint8_t adc_number, uint32_t discontinuous_count);

void adc_add_channel(uint8_t adc_number, uint8_t channel);

void adc_remove_channel(uint8_t adc_number, uint8_t channel);

uint32_t adc_get_enabled_channels_count(uint8_t adc_number);

void adc_configure_use_dma(uint8_t adc_number, bool use_dma);


void adc_start();

void adc_stop();

void adc_trigger_software_conversion(uint8_t adc_number, uint8_t number_of_acquisitions);


#ifdef __cplusplus
}
#endif

#endif // ADC_H_
```


