

# File nvs\_storage.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_flash\_driver**](dir_47b8019f52d29447200a9fe029247d2f.md) **>** [**zephyr**](dir_b20d16dae1dc20106d56014478318b72.md) **>** [**public\_api**](dir_ce5a725b60c8953eacf539a6c77604d3.md) **>** [**nvs\_storage.h**](nvs__storage_8h.md)

[Go to the documentation of this file](nvs__storage_8h.md)


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
 * SPDX-License-Identifier: LGLPV2.1
 */

#ifndef NVS_STORAGE_H_
#define NVS_STORAGE_H_


#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

// Type definitions

// NVS categories must be on the upper half
// of the 2-bytes value, hence end with 00
typedef enum
{
    VERSION          = 0x0100,
    ADC_CALIBRATION  = 0x0200,
    MEASURE_THRESHOLD = 0x0300,
}nvs_category_t;

// API

int8_t nvs_storage_store_data(uint16_t data_id, const void* data, uint8_t data_size);
int8_t nvs_storage_retrieve_data(uint16_t data_id, void* data_buffer, uint8_t data_buffer_size);
int8_t nvs_storage_clear_all_stored_data();

uint16_t nvs_storage_get_current_version();
uint16_t nvs_storage_get_version_in_nvs();


#ifdef __cplusplus
}
#endif

#endif // NVS_STORAGE_H_
```


