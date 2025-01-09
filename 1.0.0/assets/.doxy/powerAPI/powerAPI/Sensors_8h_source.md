

# File Sensors.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**src**](dir_cc8f80e4cf83a61a7635b2e9633862a2.md) **>** [**Sensors.h**](Sensors_8h.md)

[Go to the documentation of this file](Sensors_8h.md)


```C++
/*
 * Copyright (c) 2023-2024 LAAS-CNRS
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



#ifndef SENSORS_H_
#define SENSORS_H_


// Stdlib
#include <stdint.h>

// Zephyr
#include <zephyr/kernel.h>

// ARM CMSIS library
#include <arm_math.h>

// Other modules public API
#include "SpinAPI.h"


// Device-tree related macro

#define SENSOR_TOKEN(node_id) DT_STRING_TOKEN(node_id, sensor_name),


// Type definitions
typedef enum
{
    UNDEFINED_SENSOR = 0,
    DT_FOREACH_STATUS_OKAY(shield_sensors, SENSOR_TOKEN)
} sensor_t;

struct sensor_info_t
{
    sensor_info_t(adc_t adc_num, uint8_t channel_num, uint8_t pin_num)
    {
        this->adc_num     = adc_num;
        this->channel_num = channel_num;
        this->pin_num     = pin_num;
    }

    adc_t   adc_num;
    uint8_t channel_num;
    uint8_t pin_num;
};

#ifdef CONFIG_SHIELD_OWNVERTER
    typedef enum
    {
        TEMP_1 = 0,
        TEMP_2 = 1,
        TEMP_3 = 2
    } ownverter_temp_sensor_t;
#endif

// Static class definition

class SensorsAPI
{

    // Private types definitions

private:
    typedef union
    {
        uint32_t  raw_value;
        float32_t float_value;
    } int2float;

    enum conv_type_string_t
    {
        LINEAR,
        THERMISTANCE
    };

    typedef struct
    {
        sensor_t           name;
        uint8_t            adc_number;
        uint8_t            channel_number;
        uint8_t            pin_number;
        bool               is_differential;
        uint32_t           adc_reg_addr; // ADC addr is used to identify ADC
        conv_type_string_t conversion_type;
        // Default calibration parameters
        int2float default_gain;
        int2float default_offset;
        int2float default_r0;
        int2float default_b;
        int2float default_rdiv;
        int2float default_t0;
    } sensor_dt_data_t;


public:

    int8_t enableSensor(sensor_t sensor_name, adc_t adc_number);

    uint16_t* getRawValues(sensor_t sensor_name, uint32_t& number_of_values_acquired);

    float32_t* getValues(sensor_t sensor_name, uint32_t& number_of_values_acquired);

    float32_t peekLatestValue(sensor_t sensor_name);

    float32_t getLatestValue(sensor_t sensor_name, uint8_t* dataValid = nullptr);

    float32_t convertRawValue(sensor_t sensor_name, uint16_t raw_value);

    void setConversionParametersLinear(sensor_t sensor_name, float32_t gain, float32_t offset);

    void setConversionParametersNtcThermistor(sensor_t sensor_name, float32_t r0, float32_t b, float32_t rdiv, float32_t t0);

    float32_t retrieveStoredParameterValue(sensor_t sensor_name, parameter_t parameter_name);

    conversion_type_t retrieveStoredConversionType(sensor_t sensor_name);

    int8_t storeParametersInMemory(sensor_t sensor_name);

    int8_t retrieveParametersFromMemory(sensor_t sensor_name);

#ifdef CONFIG_SHIELD_OWNVERTER

    void enableDefaultOwnverterSensors();

    void setOwnverterTempMeas(ownverter_temp_sensor_t temperature_sensor);
#endif

#ifdef CONFIG_SHIELD_TWIST

    void enableDefaultTwistSensors();

    void setTwistSensorsUserCalibrationFactors();

    void triggerTwistTempMeas(sensor_t temperature_sensor);

#endif

private:


    sensor_info_t getEnabledSensorInfo(sensor_t sensor_name);

    void buildSensorListFromDeviceTree();

    void getLineFromConsole(char* buffer, uint8_t buffer_size);

    float32_t getCalibrationCoefficients(const char* physicalParameter, const char* gainOrOffset);

private:
    static sensor_dt_data_t dt_sensors_props[];
    static uint8_t available_sensors_count[ADC_COUNT];
    static sensor_dt_data_t** available_sensors_props[ADC_COUNT];
    static sensor_dt_data_t* enabled_sensors[];
    static bool initialized;

    #ifdef CONFIG_SHIELD_OWNVERTER
    static uint8_t   temp_mux_in_1;
    static uint8_t   temp_mux_in_2;

    #endif

};

#endif // SENSORS_H_
```


