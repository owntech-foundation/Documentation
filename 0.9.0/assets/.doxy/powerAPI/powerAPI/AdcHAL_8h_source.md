

# File AdcHAL.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**AdcHAL.h**](AdcHAL_8h.md)

[Go to the documentation of this file](AdcHAL_8h.md)


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

#ifndef ADCHAL_H_
#define ADCHAL_H_

// Stdlib
#include <stdint.h>

// ARM lib
#include <arm_math.h>

// OwnTech API
#include "adc.h"




class AdcHAL
{
public:

    void configureTriggerSource(uint8_t adc_number, adc_ev_src_t trigger_source);

    void configureDiscontinuousMode(uint8_t adc_number, uint32_t dicontinuous_count);

    void enableDma(uint8_t adc_number, bool use_dma);

    void enableChannel(uint8_t adc_number, uint8_t channel);

    void disableChannel(uint8_t adc_number, uint8_t channel);

    uint32_t getEnabledChannelsCount(uint8_t adc_number);

    void triggerSoftwareConversion(uint8_t adc_number, uint8_t number_of_acquisitions);

    void startAllAdcs();

    void stopAllAdcs();

private:

    void initializeAllAdcs();

    static bool adcInitialized;


};



#endif // ADCHAL_H_
```


