

# File AnalogCommunication.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**AnalogCommunication.h**](AnalogCommunication_8h.md)

[Go to the documentation of this file](AnalogCommunication_8h.md)


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

#ifndef ANALOGCOMMUNICATION_H_
#define ANALOGCOMMUNICATION_H_

#ifdef CONFIG_OWNTECH_COMMUNICATION_ENABLE_ANALOG

#include <stdint.h>
#include <arm_math.h>


// Static class definition

class AnalogCommunication
{

public:
    static void init();

    static float32_t getAnalogCommValue();

    static void setAnalogCommValue(uint32_t analog_bus_value);
};

#endif // CONFIG_OWNTECH_COMMUNICATION_ENABLE_ANALOG

#endif // ANALOGCOMMUNICATION_H_
```


