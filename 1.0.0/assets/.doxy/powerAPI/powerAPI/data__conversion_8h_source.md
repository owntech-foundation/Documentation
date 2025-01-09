

# File data\_conversion.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**data\_conversion.h**](data__conversion_8h.md)

[Go to the documentation of this file](data__conversion_8h.md)


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
 * SPDX-License-Identifier: LGPL-2.1
 */


#ifndef DATA_CONVERSION_H_
#define DATA_CONVERSION_H_

#include <arm_math.h>   // adds all the CMSIS library


// Type definitions

typedef enum : int8_t
{
    conversion_linear = 0,
    conversion_therm  = 1,
    no_channel_error  = -5

} conversion_type_t;


// API

void data_conversion_init();

float32_t data_conversion_convert_raw_value(uint8_t adc_num, uint8_t channel_num, uint16_t raw_value);

void data_conversion_set_conversion_parameters_linear(uint8_t adc_num, uint8_t channel_num, float32_t gain, float32_t offset);

void data_conversion_set_conversion_parameters_therm(uint8_t adc_num, uint8_t channel_num, float32_t r0, float32_t b, float32_t rdiv, float32_t t0);

conversion_type_t data_conversion_get_conversion_type(uint8_t adc_num, uint8_t channel_num);

float32_t data_conversion_get_parameter(uint8_t adc_num, uint8_t channel_num, uint8_t parameter_num);

int8_t data_conversion_store_channel_parameters_in_nvs(uint8_t adc_num, uint8_t channel_num);

int8_t data_conversion_retrieve_channel_parameters_from_nvs(uint8_t adc_num, uint8_t channel_num);


#endif // DATA_CONVERSION_H_
```


