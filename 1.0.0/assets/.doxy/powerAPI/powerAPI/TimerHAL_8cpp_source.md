

# File TimerHAL.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**TimerHAL.cpp**](TimerHAL_8cpp.md)

[Go to the documentation of this file](TimerHAL_8cpp.md)


```C++
/*
 * Copyright (c) 2022-2023 LAAS-CNRS
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

// Current file header
#include "TimerHAL.h"


static const struct device* timer4 = DEVICE_DT_GET(TIMER4_DEVICE);

bool TimerHAL::timer4init    = false;
bool TimerHAL::timer4started = false;


void TimerHAL::timer4Initialize()
{
    if (device_is_ready(timer4) == true)
    {
        // Configure timer
        struct timer_config_t timer_cfg =
        {
            .timer_enable_irq = 0,
            .timer_enable_encoder = 1,
            .timer_enc_pin_mode = pull_up

        };
        timer_config(timer4, &timer_cfg);
        timer4init = true;
    }
}

void TimerHAL::startLogTimer4IncrementalEncoder()
{
    if (timer4init == false)
    {
        timer4Initialize();
    }

    if (timer4started == false)
    {
        if (device_is_ready(timer4) == true)
        {
            timer_start(timer4);
            timer4started = true;
        }
    }
}

uint32_t TimerHAL::getTimer4IncrementalEncoderValue()
{
    if (timer4started == true)
    {
        return timer_get_count(timer4);
    }
    else
    {
        return 0;
    }
}
```


