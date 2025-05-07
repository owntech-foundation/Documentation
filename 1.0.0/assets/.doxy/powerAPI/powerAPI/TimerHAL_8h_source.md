

# File TimerHAL.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**TimerHAL.h**](TimerHAL_8h.md)

[Go to the documentation of this file](TimerHAL_8h.md)


```C++
/*
 * Copyright (c) 2022-present LAAS-CNRS
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

/*
 * @date   2023
 * @author Clément Foucher <clement.foucher@laas.fr>
 * @author Luiz Villa <luiz.villa@laas.fr>
 */

#ifndef TIMERHAL_H_
#define TIMERHAL_H_

/* Stdlib */
#include <stdint.h>

/* ARM lib */
#include <arm_math.h>

/* OwnTech API */
#include "timer.h"


typedef enum
{
     TIMER3,
     TIMER4
} timernumber_t;


class TimerHAL
{
public:

    void startLogIncrementalEncoder(timernumber_t timer_number);

    uint32_t getIncrementalEncoderValue(timernumber_t timer_number);



private:

    void Initialize(timernumber_t timer_number);

    /* Variables */
    static bool timer4init;
    static bool timer4started;
    static bool timer3init;
    static bool timer3started;


};



#endif /* TIMERHAL_H_ */
```


