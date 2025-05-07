

# File CanCommunication.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**CanCommunication.cpp**](CanCommunication_8cpp.md)

[Go to the documentation of this file](CanCommunication_8cpp.md)


```C++
/*
 * Copyright (c) 2024-present LAAS-CNRS
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
 * @date   2024
 *
 * @author Clément Foucher <clement.foucher@laas.fr>
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 */


/* Header */
#include "CanCommunication.h"
#include "data_objects.h"
#include <thingset.h>
#include <thingset/can.h>
#include <thingset/sdk.h>

struct thingset_can *CanCommunication::ts_can_inst = thingset_can_get_inst();


#ifdef CONFIG_THINGSET_SUBSET_LIVE_METRICS
extern bool live_reporting_enable;
extern uint32_t live_reporting_period;
#endif

#ifdef CONFIG_THINGSET_CAN_CONTROL_REPORTING

extern bool      start_stop;
extern float32_t reference_value;

bool CanCommunication::getCtrlEnable()
{
    return ts_can_inst->control_enable;
}

float32_t CanCommunication::getCtrlReference()
{
    return reference_value;
}

float32_t CanCommunication::getStartStopState()
{
    return start_stop;
}

uint16_t CanCommunication::getControlPeriod()
{
    return ts_can_inst->control_period;
}

void CanCommunication::setCtrlEnable(bool enable)
{
    ts_can_inst->control_enable = enable;
}

void CanCommunication::setCtrlReference(float32_t reference)
{
    reference_value = reference;
}

void CanCommunication::stopSlaveDevice()
{
    start_stop = 0;
}

void CanCommunication::startSlaveDevice()
{
    start_stop = 1;
}

void CanCommunication::setControlPeriod(uint16_t time_ms)
{
    ts_can_inst->control_period = time_ms;
}

#endif /* CONFIG_THINGSET_CAN_CONTROL_REPORTING */

uint16_t CanCommunication::getCanNodeAddr()
{
    return ts_can_inst->node_addr;
}

void CanCommunication::setCanNodeAddr(uint16_t addr)
{
    ts_can_inst->node_addr = addr;
}

#ifdef CONFIG_THINGSET_SUBSET_LIVE_METRICS

bool CanCommunication::getBroadcastEnable()
{
    return live_reporting_enable;
}

uint16_t CanCommunication::getBroadcastPeriod()
{
    return live_reporting_period;
}

void CanCommunication::setBroadcastEnable(bool enable)
{
    live_reporting_enable = enable;
}

void CanCommunication::setBroadcastPeriod(uint16_t time_s)
{
    live_reporting_period = time_s;
}

#endif /* CONFIG_THINGSET_SUBSET_LIVE_METRICS */
```


