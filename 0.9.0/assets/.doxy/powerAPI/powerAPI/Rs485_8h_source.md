

# File Rs485.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**Rs485.h**](Rs485_8h.md)

[Go to the documentation of this file](Rs485_8h.md)


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

#ifndef RS485_H_
#define RS485_H_

#include <zephyr/kernel.h>

#include <stm32_ll_usart.h>

typedef void (*dma_callbackRXfunc_t)();

typedef enum{
    OVER8 = LL_USART_OVERSAMPLING_8,
    OVER16 = LL_USART_OVERSAMPLING_16
}usart_oversampling_t;

void init_usrBuffer(uint8_t* tx_buffer, uint8_t* rx_buffer);

void init_usrFunc(dma_callbackRXfunc_t fnc_callback);

void init_usrBaudrate(uint32_t usr_baud);

void init_usrDataSize(uint16_t size);

void serial_init(void);

void init_DEmode(void);

void oversamp_set(usart_oversampling_t oversampling);

void dma_channel_init_tx();

void dma_channel_init_rx();

void serial_tx_on();

void serial_stop();

void serial_start();

#endif // RS485_H_
```


