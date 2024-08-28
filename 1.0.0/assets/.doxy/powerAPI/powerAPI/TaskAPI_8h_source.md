

# File TaskAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_task\_api**](dir_a6ca33c2a6633efd563e2ff2336e2b96.md) **>** [**zephyr**](dir_930c8fa1e893c2939a58a9ccd4e9adcb.md) **>** [**public\_api**](dir_2b522af08cf9fc57ee593ce08ec33342.md) **>** [**TaskAPI.h**](TaskAPI_8h.md)

[Go to the documentation of this file](TaskAPI_8h.md)


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

#ifndef TASKAPI_H_
#define TASKAPI_H_


// Stdlib
#include <stdint.h>

// Zephyr
#include <zephyr/kernel.h>


// Public types

typedef void (*task_function_t)();

typedef enum { source_uninitialized, source_hrtim, source_tim6 } scheduling_interrupt_source_t;


// Static class definition

class TaskAPI
{
public:
    int8_t createCritical(task_function_t periodic_task, uint32_t task_period_us, scheduling_interrupt_source_t int_source = source_hrtim);

    void startCritical(bool manage_data_acquisition = true);

    void stopCritical();


#ifdef CONFIG_OWNTECH_TASK_ENABLE_ASYNCHRONOUS_TASKS

    int8_t createBackground(task_function_t routine);

    void startBackground(uint8_t task_number);

    void stopBackground(uint8_t task_number);

    void suspendBackgroundMs(uint32_t duration_ms);

    void suspendBackgroundUs(uint32_t duration_us);

#endif // CONFIG_OWNTECH_TASK_ENABLE_ASYNCHRONOUS_TASKS

private:
    static const int DEFAULT_PRIORITY;

};


// Public object to interact with the class

extern TaskAPI task;


#endif // TASKAPI_H_
```


