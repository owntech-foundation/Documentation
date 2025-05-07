

# File CanCommunication.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**CanCommunication.h**](CanCommunication_8h.md)

[Go to the documentation of this file](CanCommunication_8h.md)


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



#ifndef CANCOMMUNICATION_H_
#define CANCOMMUNICATION_H_

#include <stdint.h>
#include <arm_math.h>

#define CAN_STANDBY_DEVICE DT_CHILD(DT_PATH(can_standby_switch), can_standby_gpio_pin)

// Static class definition

class CanCommunication
{

public:
    static uint16_t getCanNodeAddr();

    static bool getCtrlEnable();

    static float32_t getCtrlReference();

    static uint16_t getBroadcastPeriod();

    static uint16_t getControlPeriod();

    static void setCanNodeAddr(uint16_t addr);

    static void setCtrlEnable(bool enable);

    static void setCtrlReference(float32_t reference);

    static void setBroadcastPeriod(uint16_t time_100_ms);

    static void setControlPeriod(uint16_t time_100_ms);

    void enableCan();
};

#endif // CANCOMMUNICATION_H_
```


