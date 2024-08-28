

# File data\_dispatch.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**data\_dispatch.h**](data__dispatch_8h.md)

[Go to the documentation of this file](data__dispatch_8h.md)


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

#ifndef DATA_DISPATCH_H_
#define DATA_DISPATCH_H_


// Stdlib
#include <stdint.h>


// Constants

const uint16_t PEEK_NO_VALUE = 0xFFFF;
const uint8_t CHANNELS_BUFFERS_SIZE = 32;

typedef enum {task, interrupt} dispatch_t;

void data_dispatch_init(dispatch_t dispatch_method, uint32_t repetitions);

void data_dispatch_do_dispatch(uint8_t adc_number);

void data_dispatch_do_full_dispatch();

uint16_t* data_dispatch_get_acquired_values(uint8_t adc_number, uint8_t channel_rank, uint32_t& number_of_values_acquired);

uint16_t data_dispatch_peek_acquired_value(uint8_t adc_number, uint8_t channel_rank);


#endif // DATA_DISPATCH_H_
```


