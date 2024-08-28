

# File Rs485Communication.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**Rs485Communication.cpp**](Rs485Communication_8cpp.md)

[Go to the documentation of this file](Rs485Communication_8cpp.md)


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

#include "Rs485.h"
#include "Rs485Communication.h"

void Rs485Communication::configure(uint8_t *transmission_bufer, uint8_t *reception_buffer, uint16_t data_size, void (*user_function)(), rs485_speed_t data_speed)
{
    init_usrBuffer(transmission_bufer, reception_buffer);
    init_usrFunc(user_function);
    init_usrDataSize(data_size);

    switch(data_speed)
    {
        case SPEED_2M:
            init_usrBaudrate(2656250);
            break;
        case SPEED_5M:
            init_usrBaudrate(5312500);
            break;
        case SPEED_10M:
            init_usrBaudrate(10625000);
            break;
        default:
            init_usrBaudrate(10625000);
            break;
    }
    init_usrBaudrate(10625000);
    
    dma_channel_init_tx();
    dma_channel_init_rx();
    serial_init();
    init_DEmode();

    if(data_speed == SPEED_20M) oversamp_set(OVER8);
    else oversamp_set(OVER16);
}

void Rs485Communication::configureCustom(uint8_t* transmission_bufer, uint8_t* reception_buffer, uint16_t data_size, void (*user_function)(void), uint32_t baudrate, bool oversampling_8)
{
    init_usrBuffer(transmission_bufer, reception_buffer);
    init_usrFunc(user_function);
    init_usrDataSize(data_size);
    init_usrBaudrate(baudrate);
    dma_channel_init_tx();
    dma_channel_init_rx();
    serial_init();
    init_DEmode();
    if(oversampling_8 == true) oversamp_set(OVER8);
    else oversamp_set(OVER16);
}

void Rs485Communication::startTransmission()
{
    serial_tx_on();
}

void Rs485Communication::turnOnCommunication()
{
    serial_start();
}

void Rs485Communication::turnOffCommunication()
{
    serial_stop();
}
```


