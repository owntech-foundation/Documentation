

# File LedHAL.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**LedHAL.cpp**](LedHAL_8cpp.md)

[Go to the documentation of this file](LedHAL_8cpp.md)


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

// Zephyr
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

// Current file header
#include "LedHAL.h"


bool LedHAL::ledInitialized = false;

static struct gpio_dt_spec led_pin_spec = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);


void LedHAL::initialize()
{
    gpio_pin_configure_dt(&led_pin_spec, GPIO_OUTPUT_INACTIVE);
    ledInitialized = true;
}

void LedHAL::turnOn()
{
    if (ledInitialized == false)
    {
        initialize();
    }

    gpio_pin_set_dt(&led_pin_spec, 1);
}

void LedHAL::turnOff()
{
    if (ledInitialized == false)
    {
        initialize();
    }

    gpio_pin_set_dt(&led_pin_spec, 0);
}

void LedHAL::toggle()
{
    if (ledInitialized == false)
    {
        initialize();
    }

    gpio_pin_toggle_dt(&led_pin_spec);
}
```


