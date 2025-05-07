

# File TaskAPI.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_task\_api**](dir_a6ca33c2a6633efd563e2ff2336e2b96.md) **>** [**zephyr**](dir_930c8fa1e893c2939a58a9ccd4e9adcb.md) **>** [**public\_api**](dir_2b522af08cf9fc57ee593ce08ec33342.md) **>** [**TaskAPI.cpp**](TaskAPI_8cpp.md)

[Go to the documentation of this file](TaskAPI_8cpp.md)


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



// OwnTech Power API
#include "../src/uninterruptible_synchronous_task.hpp"
#include "../src/asynchronous_tasks.hpp"


// Current class header
#include "TaskAPI.h"


// Static variables

const int TaskAPI::DEFAULT_PRIORITY = 5;


// Public object to interact with the class

TaskAPI task;


// Public API

// Non-interruptible control task

int8_t TaskAPI::createCritical(task_function_t periodic_task, uint32_t task_period_us, scheduling_interrupt_source_t int_source)
{
    scheduling_set_uninterruptible_synchronous_task_interrupt_source(int_source);
    return scheduling_define_uninterruptible_synchronous_task(periodic_task, task_period_us);
}

void TaskAPI::startCritical(bool manage_data_acquisition)
{
    scheduling_start_uninterruptible_synchronous_task(manage_data_acquisition);
}

void TaskAPI::stopCritical()
{
    scheduling_stop_uninterruptible_synchronous_task();
}


// Asynchronous tasks

#ifdef CONFIG_OWNTECH_TASK_ENABLE_ASYNCHRONOUS_TASKS

int8_t TaskAPI::createBackground(task_function_t routine)
{
    return scheduling_define_asynchronous_task(routine);
}

void TaskAPI::startBackground(uint8_t task_number)
{
    scheduling_start_asynchronous_task(task_number);
}

void TaskAPI::stopBackground(uint8_t task_number)
{
    scheduling_stop_asynchronous_task(task_number);
}

// Suspend asynchronous tasks

void TaskAPI::suspendBackgroundMs(uint32_t duration_ms)
{
    k_sleep(K_MSEC(duration_ms));
}

void TaskAPI::suspendBackgroundUs(uint32_t duration_us)
{
    k_sleep(K_USEC(duration_us));
}

#endif // CONFIG_OWNTECH_TASK_ENABLE_ASYNCHRONOUS_TASKS
```


