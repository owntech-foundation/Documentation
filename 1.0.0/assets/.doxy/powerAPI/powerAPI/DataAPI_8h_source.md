

# File DataAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**DataAPI.h**](DataAPI_8h.md)

[Go to the documentation of this file](DataAPI_8h.md)


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



#ifndef DATAAPI_H_
#define DATAAPI_H_


// Stdlib
#include <stdint.h>

// Zephyr
#include <zephyr/kernel.h>

// ARM CMSIS library
#include <arm_math.h>

// Current module private functions
#include "./data/data_conversion.h"


// Type definitions

typedef enum : uint8_t
{
    gain   = 1,
    offset = 2,
    r0     = 3,
    b      = 4,
    rdiv   = 5,
    t0     = 6
} parameter_t;

typedef enum : int8_t
{
    UNKNOWN_ADC = -1,
    DEFAULT_ADC = 0,
    ADC_1 = 1,
    ADC_2 = 2,
    ADC_3 = 3,
    ADC_4 = 4,
    ADC_5 = 5
} adc_t;

typedef enum : uint8_t
{
    TRIG_SOFTWARE,
    TRIG_PWM
} trigger_source_t;

enum class DispatchMethod_t
{
    on_dma_interrupt,
    externally_triggered
};

// Constants definitions

static const uint8_t ADC_COUNT = 5;
static const uint8_t PIN_COUNT = 59;
static const uint8_t CHANNELS_PER_ADC = 19;

// Define "no value" as an impossible, out of range value
const float32_t NO_VALUE = -10000;
#define ERROR_CHANNEL_OFF -5
#define ERROR_CHANNEL_NOT_FOUND -2

const uint8_t DATA_IS_OK      = 0;
const uint8_t DATA_IS_OLD     = 1;
const uint8_t DATA_IS_MISSING = 2;

// Static class definition

class DataAPI
{
    // Allow specific extenal members to access private members of this class
    friend class SensorsAPI;
    friend void user_task_proxy();
    friend void scheduling_start_uninterruptible_synchronous_task(bool);

public:

    int8_t enableAcquisition(uint8_t pin_number, adc_t adc_number = DEFAULT_ADC);

    int8_t start();

    bool started();

    int8_t stop();

    void triggerAcquisition(adc_t adc_number);

    uint16_t* getRawValues(uint8_t pin_number, uint32_t& number_of_values_acquired);

    float32_t* getValues(uint8_t pin_number, uint32_t& number_of_values_acquired);

    float32_t peekLatestValue(uint8_t pin_number);

    float32_t getLatestValue(uint8_t pin_number, uint8_t* dataValid = nullptr);

    float32_t convertValue(uint8_t pin_number, uint16_t raw_value);

    void setConversionParametersLinear(uint8_t pin_number, float32_t gain, float32_t offset);

    void setConversionParametersNtcThermistor(uint8_t pin_num, float32_t r0, float32_t b, float32_t rdiv, float32_t t0);

    float32_t getConversionParameterValue(uint8_t pin_number, parameter_t parameter_name);

    conversion_type_t getConversionParameterType(uint8_t pin_number);

    int8_t storeConversionParametersInMemory(uint8_t pin_number);

    int8_t retrieveConversionParametersFromMemory(uint8_t pin_number);

    void configureDiscontinuousMode(adc_t adc_number, uint32_t dicontinuous_count);

    void configureTriggerSource(adc_t adc_number, trigger_source_t trigger_source);

private:
    static void initializeAllAdcs();
    static int8_t enableChannel(adc_t adc_number, uint8_t channel_num);
    static void disableChannel(adc_t adc_number, uint8_t channel);
    static uint16_t* getChannelRawValues(adc_t adc_number, uint8_t channel_num, uint32_t& number_of_values_acquired);
    static float32_t* getChannelValues(adc_t adc_number, uint8_t channel_num, uint32_t& number_of_values_acquired);
    static float32_t peekChannel(adc_t adc_number, uint8_t channel_num);
    static float32_t getChannelLatest(adc_t adc_number, uint8_t channel_num, uint8_t* dataValid = nullptr);
    static uint8_t getChannelRank(adc_t adc_number, uint8_t channel_num);
    static uint8_t getChannelNumber(adc_t adc_number, uint8_t shield_pin);
    static adc_t getDefaultAdcForPin(uint8_t pin_number);
    static adc_t getCurrentAdcForPin(uint8_t pin_number);

    // Private members accessed by external friend members
    static void setRepetitionsBetweenDispatches(uint32_t repetition);
    static void setDispatchMethod(DispatchMethod_t dispatch_method);
    static void doFullDispatch();

private:
    static bool is_started;
    static bool adcInitialized;
    static uint8_t channels_ranks[ADC_COUNT][CHANNELS_PER_ADC];
    static uint8_t current_rank[ADC_COUNT];
    static DispatchMethod_t dispatch_method;
    static uint32_t repetition_count_between_dispatches;
    static adc_t current_adc[PIN_COUNT];
    static float32_t*** converted_values_buffer;

};

#endif // DATAAPI_H_
```


