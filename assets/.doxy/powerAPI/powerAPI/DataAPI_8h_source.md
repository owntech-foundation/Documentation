

# File DataAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_data\_api**](dir_a549afb1504a6cae23e88efc51d50dd5.md) **>** [**zephyr**](dir_e68c454e5b7b38289ca5658bb88f5006.md) **>** [**public\_api**](dir_395e94c4eb2e271e16f52d3df300cdd3.md) **>** [**DataAPI.h**](DataAPI_8h.md)

[Go to the documentation of this file](DataAPI_8h.md)


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
 * SPDX-License-Identifier: LGLPV2.1
 */

#ifndef DATAAPI_H_
#define DATAAPI_H_


// Stdlib
#include <stdint.h>

// Zephyr
#include <zephyr/kernel.h>

// ARM CMSIS library
#include <arm_math.h>

// Current module private functions
#include "../src/data_conversion.h"

#define ADC_1 1
#define ADC_2 2
#define ADC_3 3
#define ADC_4 4

// Device-tree related macro

#ifdef CONFIG_SHIELD_TWIST
#define CHANNEL_TOKEN(node_id) DT_STRING_TOKEN(node_id, channel_name),
#endif


// Type definitions

#ifdef CONFIG_SHIELD_TWIST
typedef enum
{
    UNDEFINED_CHANNEL = 0,
    DT_FOREACH_STATUS_OKAY(adc_channels, CHANNEL_TOKEN)
} channel_t;
#endif

enum class DispatchMethod_t
{
    on_dma_interrupt,
    externally_triggered
};


// Constants definitions

static const uint8_t ADC_COUNT        = 5;
static const uint8_t CHANNELS_PER_ADC = 19;

// Define "no value" as an impossible, out of range value
const float32_t NO_VALUE = -10000;

const uint8_t DATA_IS_OK      = 0;
const uint8_t DATA_IS_OLD     = 1;
const uint8_t DATA_IS_MISSING = 2;

// Static class definition

class DataAPI
{
public:

#ifdef CONFIG_SHIELD_TWIST

    int8_t enableShieldChannel(uint8_t adc_num, channel_t channel_name);

    void enableTwistDefaultChannels();

    uint16_t* getRawValues(channel_t channel, uint32_t& number_of_values_acquired);

    float32_t peek(channel_t channel);

    float32_t getLatest(channel_t channel, uint8_t* dataValid = nullptr);

    float32_t convert(channel_t channel, uint16_t raw_value);

    void setParameters(channel_t channel, float32_t gain, float32_t offset);

    void setTwistChannelsUserCalibrationFactors();

#endif

    int8_t enableAcquisition(uint8_t adc_num, uint8_t pin_num);

    int8_t start();

    bool started();

    void setDispatchMethod(DispatchMethod_t dispatch_method);

    DispatchMethod_t getDispatchMethod();

    void setRepetitionsBetweenDispatches(uint32_t repetition);

    void triggerAcquisition(uint8_t adc_num);


    // Accessor API

    uint16_t* getRawValues(uint8_t adc_num, uint8_t pin_num, uint32_t& number_of_values_acquired);

    float32_t peek(uint8_t adc_num, uint8_t pin_num);

    float32_t getLatest(uint8_t adc_num, uint8_t pin_num, uint8_t* dataValid = nullptr);

    float32_t convert(uint8_t adc_num, uint8_t pin_num, uint16_t raw_value);

    void setParameters(uint8_t adc_num, uint8_t pin_num, float32_t gain, float32_t offset);


private:
    int8_t enableChannel(uint8_t adc_num, uint8_t channel_num);
    uint16_t* getChannelRawValues(uint8_t adc_num, uint8_t channel_num, uint32_t& number_of_values_acquired);
    float32_t peekChannel(uint8_t adc_num, uint8_t channel_num);
    float32_t getChannelLatest(uint8_t adc_num, uint8_t channel_num, uint8_t* dataValid = nullptr);
    uint8_t getChannelRank(uint8_t adc_num, uint8_t channel_num);
    uint8_t getChannelNumber(uint8_t adc_num, uint8_t twist_pin);

private:
    bool is_started = false;
    uint8_t channels_ranks[ADC_COUNT][CHANNELS_PER_ADC] = {0};
    uint8_t current_rank[ADC_COUNT] = {0};
    DispatchMethod_t dispatch_method = DispatchMethod_t::on_dma_interrupt;
    uint32_t repetition_count_between_dispatches = 0;

};


// Public object to interact with the class

extern DataAPI data;


#endif // DATAAPI_H_
```


