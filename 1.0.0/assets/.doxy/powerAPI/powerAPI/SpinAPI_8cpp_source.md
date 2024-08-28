

# File SpinAPI.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**public\_api**](dir_9feddb36ca121fb6172e0f3e47b6ec72.md) **>** [**SpinAPI.cpp**](SpinAPI_8cpp.md)

[Go to the documentation of this file](SpinAPI_8cpp.md)


```C++
/*
 * Copyright (c) 2024 LAAS-CNRS
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

// Current class header
#include "SpinAPI.h"


SpinAPI spin;

#ifdef CONFIG_OWNTECH_GPIO_API
GpioHAL SpinAPI::gpio;
#endif

LedHAL SpinAPI::led;

DacHAL SpinAPI::dac;

CompHAL SpinAPI::comp;

PwmHAL SpinAPI::pwm;

#ifdef CONFIG_OWNTECH_UART_API
UartHAL SpinAPI::uart;
#endif

TimerHAL SpinAPI::timer;

#ifdef CONFIG_OWNTECH_DATA_API
DataAPI SpinAPI::data;
#endif
```


