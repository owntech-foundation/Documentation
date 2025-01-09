

# File SpinAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**public\_api**](dir_9feddb36ca121fb6172e0f3e47b6ec72.md) **>** [**SpinAPI.h**](SpinAPI_8h.md)

[Go to the documentation of this file](SpinAPI_8h.md)


```C++
/*
 * Copyright (c) 2022-2024 LAAS-CNRS
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



#ifndef SPINAPI_H_
#define SPINAPI_H_

#include "../src/CompHAL.h"
#include "../src/DacHAL.h"
#include "../src/GpioHAL.h"
#include "../src/LedHAL.h"
#include "../src/PwmHAL.h"
#include "../src/TimerHAL.h"

#ifdef CONFIG_OWNTECH_DATA_API
#include "../src/DataAPI.h"
#endif

#ifdef CONFIG_OWNTECH_UART_API
#include "../src/UartHAL.h"
#endif

#ifdef CONFIG_OWNTECH_NGND_DRIVER
#include "../src/NgndHAL.h"
#endif



class SpinAPI
{
public:

#ifdef CONFIG_OWNTECH_GPIO_API
    static GpioHAL gpio;
#endif
    static LedHAL led;

    static DacHAL dac;

    static CompHAL comp;

    static PwmHAL pwm;

#ifdef CONFIG_OWNTECH_UART_API
    static UartHAL uart;
#endif

    static TimerHAL timer;

#ifdef CONFIG_OWNTECH_DATA_API
    static DataAPI data;
#endif

};


// Public object to interact with the class

extern SpinAPI spin;


#endif // SPINAPI_H_
```


