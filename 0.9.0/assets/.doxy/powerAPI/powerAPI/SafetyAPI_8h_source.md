

# File SafetyAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_safety\_api**](dir_6577260132b49845d494a112d8acd7c7.md) **>** [**zephyr**](dir_2f6071fc869091a6d1e6d7b806fecbf0.md) **>** [**public\_api**](dir_08eec7c34983a0acd3982b6352a40f84.md) **>** [**SafetyAPI.h**](SafetyAPI_8h.md)

[Go to the documentation of this file](SafetyAPI_8h.md)


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

#ifndef SAFETY_H_
#define SAFETY_H_

#include "arm_math.h"
#include "DataAPI.h"
#include "../src/safety_enum.h"


class safety{

    public:

    void init_shield();

    void init_shield(channel_t* channels_watch, uint8_t channels_watch_number);

    int8_t setChannelWatch(channel_t* channels_watch, uint8_t channels_watch_number);

    int8_t unsetChannelWatch(channel_t* channels_watch, uint8_t channels_watch_number);

    bool getChannelWatch(channel_t  channels_watch);

    void setChannelReaction(safety_reaction_t channels_reaction);

    safety_reaction_t getChannelReaction();

    int8_t setChannelThresholdMax(channel_t *channels_threshold, float32_t *threshold_max, uint8_t channels_threshold_number);

    int8_t setChannelThresholdMin(channel_t *channels_threshold, float32_t *threshold_min, uint8_t channels_threshold_number);

    float32_t getChannelThresholdMax(channel_t channels_threshold);

    float32_t getChannelThresholdMin(channel_t channels_threshold);

    bool getChannelError(channel_t channels_error);


    void enableSafetyApi();

    void disableSafetyApi();

    int8_t storeThreshold(channel_t channel_threshold_store);

    int8_t retrieveThreshold(channel_t channel_threshold_retrieve);
};

extern safety Safety;

#endif // SAFETY_H_
```


