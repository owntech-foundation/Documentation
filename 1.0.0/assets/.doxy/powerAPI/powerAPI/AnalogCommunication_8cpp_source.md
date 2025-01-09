

# File AnalogCommunication.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**AnalogCommunication.cpp**](AnalogCommunication_8cpp.md)

[Go to the documentation of this file](AnalogCommunication_8cpp.md)


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



/* Header */
#include "AnalogCommunication.h"

/* OwnTech Power API */
#include "ShieldAPI.h"
#include "SpinAPI.h"

/* LL drivers */
#include "stm32_ll_gpio.h"

#define ADC_NUM ADC_2
#define DAC_NUM 2
#define DAC_CHAN 1

void AnalogCommunication::init()
{
    /* Initialize the GPIO PC4 (pin number 35) to analog mode
       to use the ADC */
    LL_GPIO_SetPinMode      (GPIOC, LL_GPIO_PIN_4, LL_GPIO_MODE_ANALOG);
    LL_GPIO_SetPinSpeed     (GPIOC, LL_GPIO_PIN_4, LL_GPIO_SPEED_FREQ_VERY_HIGH);
    LL_GPIO_SetPinOutputType(GPIOC, LL_GPIO_PIN_4, LL_GPIO_OUTPUT_PUSHPULL);
    LL_GPIO_SetPinPull      (GPIOC, LL_GPIO_PIN_4, LL_GPIO_PULL_NO);

    shield.sensors.enableSensor(ANALOG_COMM, ADC_NUM);

    /* Initialize the DAC */
    spin.dac.initConstValue(ADC_NUM);
    spin.dac.setConstValue(DAC_NUM, DAC_CHAN, 0);
}

float32_t AnalogCommunication::getAnalogCommValue()
{
    float32_t ret =  shield.sensors.getLatestValue(ANALOG_COMM);
    return ret;
}

void AnalogCommunication::setAnalogCommValue(uint32_t analog_bus_value)
{
    spin.dac.setConstValue(DAC_NUM, DAC_CHAN, analog_bus_value);
}
```


