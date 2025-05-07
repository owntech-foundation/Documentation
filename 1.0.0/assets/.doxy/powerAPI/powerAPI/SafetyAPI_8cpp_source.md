

# File SafetyAPI.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_safety\_api**](dir_6577260132b49845d494a112d8acd7c7.md) **>** [**zephyr**](dir_2f6071fc869091a6d1e6d7b806fecbf0.md) **>** [**public\_api**](dir_08eec7c34983a0acd3982b6352a40f84.md) **>** [**SafetyAPI.cpp**](SafetyAPI_8cpp.md)

[Go to the documentation of this file](SafetyAPI_8cpp.md)


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
 * @date 2024
 *
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 *
 */

#include "SafetyAPI.h"
#include "../src/safety_shield.h"
#include "../src/safety_setting.h"

SafetyAPI safety;

void SafetyAPI::initShield()
{
    safety_init_shield(true);
}

void SafetyAPI::initShield(sensor_t* sensors_watch,
                           uint8_t sensors_watch_number)
{
    safety_init_shield(false);
    safety_set_sensor_watch(sensors_watch, sensors_watch_number);
}

int8_t SafetyAPI::setChannelWatch(sensor_t* sensors_watch,
                                  uint8_t sensors_watch_number)
{
    int8_t status =  safety_set_sensor_watch(sensors_watch, sensors_watch_number);
    return status;
}

int8_t SafetyAPI::unsetChannelWatch(sensor_t* sensors_watch,
                                    uint8_t sensors_watch_number)
{
    int8_t status =  safety_unset_sensor_watch(sensors_watch,
                                               sensors_watch_number);
    return status;
}

bool SafetyAPI::getChannelWatch(sensor_t  sensors_watch)
{
    bool Is_watched = safety_get_sensor_watch(sensors_watch);
    return Is_watched;
}

void SafetyAPI::setChannelReaction(safety_reaction_t sensors_reaction)
{
    safety_set_sensor_reaction(sensors_reaction);

}

safety_reaction_t SafetyAPI::getChannelReaction()
{
    safety_reaction_t sensors_reaction = safety_get_sensor_reaction();
    return sensors_reaction;
}

int8_t SafetyAPI::setChannelThresholdMax(sensor_t *sensors_threshold,
                                         float32_t *threshold_max,
                                         uint8_t sensors_threshold_number)
{
    uint8_t ret =  safety_set_sensor_threshold_max(sensors_threshold,
                                                   threshold_max,
                                                   sensors_threshold_number);
    return ret;
}

int8_t SafetyAPI::setChannelThresholdMin(sensor_t *sensors_threshold,
                                         float32_t *threshold_min,
                                         uint8_t sensors_threshold_number)
{
    uint8_t ret =  safety_set_sensor_threshold_min(sensors_threshold,
                                                   threshold_min,
                                                   sensors_threshold_number);
    return ret;
}

float32_t SafetyAPI::getChannelThresholdMax(sensor_t sensors_threshold)
{
    float32_t threshold = safety_get_sensor_threshold_max(sensors_threshold);
    return threshold;
}

float32_t SafetyAPI::getChannelThresholdMin(sensor_t sensors_threshold)
{
    float32_t threshold = safety_get_sensor_threshold_min(sensors_threshold);
    return threshold;
}

bool SafetyAPI::getChannelError(sensor_t sensors_error)
{
    bool error_status = safety_get_sensor_error(sensors_error);
    return error_status;
}

void SafetyAPI::enableSafetyApi()
{
    safety_enable_task();
}

void SafetyAPI::disableSafetyApi()
{
    safety_disable_task();
}

int8_t SafetyAPI::storeThreshold(sensor_t sensor_threshold_store)
{
    uint8_t ret = safety_store_threshold_in_nvs(sensor_threshold_store);
    return ret;
}
int8_t SafetyAPI::retrieveThreshold(sensor_t sensor_threshold_retrieve)
{
    uint8_t ret = safety_retrieve_threshold_in_nvs(sensor_threshold_retrieve);
    return ret;
}
```


