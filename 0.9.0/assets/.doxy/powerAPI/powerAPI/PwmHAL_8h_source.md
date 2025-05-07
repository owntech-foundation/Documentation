

# File PwmHAL.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**PwmHAL.h**](PwmHAL_8h.md)

[Go to the documentation of this file](PwmHAL_8h.md)


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


#ifndef PWMHAL_H_
#define PWMHAL_H_

// Stdlib
#include <stdint.h>

// ARM lib
#include <arm_math.h>

// OwnTech API
#include "adc.h"
#include "hrtim_enum.h"

typedef enum
{
     buck,
     boost
} leg_operation_t;

typedef enum
{
     unipolar,
     bipolar
} inverter_modulation_t;

class PwmHAL
{
public:
     // HRTIM configuration

     void initUnit(hrtim_tu_number_t pwmX);

     void startDualOutput(hrtim_tu_number_t pwmX);

     void stopDualOutput(hrtim_tu_number_t pwmX);

     void startSingleOutput(hrtim_tu_number_t tu, hrtim_output_number_t output);

     void stopSingleOutput(hrtim_tu_number_t tu, hrtim_output_number_t output);

     void setModulation(hrtim_tu_number_t pwmX, hrtim_cnt_t modulation);

     void setSwitchConvention(hrtim_tu_number_t pwmX, hrtim_switch_convention_t convention);

     void initFrequency(uint32_t init_frequency);

     void initFrequency(uint32_t init_frequency, uint32_t minimal_frequency);

     void setDeadTime(hrtim_tu_number_t pwmX, uint16_t rise_ns, uint16_t fall_ns);

     void setDutyCycle(hrtim_tu_number_t pwmX, float32_t duty_cycle);

     void setPhaseShift(hrtim_tu_number_t pwmX, int16_t shift);

     void setMode(hrtim_tu_number_t pwmX, hrtim_pwm_mode_t mode);

     hrtim_pwm_mode_t getMode(hrtim_tu_number_t pwmX);

     void setEev(hrtim_tu_number_t pwmX, hrtim_external_trigger_t eev);

     hrtim_external_trigger_t getEev(hrtim_tu_number_t pwmX);

     hrtim_cnt_t getModulation(hrtim_tu_number_t pwmX);

     hrtim_switch_convention_t getSwitchConvention(hrtim_tu_number_t pwmX);

     uint16_t getPeriod(hrtim_tu_number_t pwmX);

     void setAdcTriggerPostScaler(hrtim_tu_number_t pwmX, uint32_t ps_ratio);

     void setAdcTrigger(hrtim_tu_number_t pwmX, hrtim_adc_trigger_t adc_trig);

     hrtim_adc_trigger_t getAdcTrigger(hrtim_tu_number_t pwmX, hrtim_adc_trigger_t adc_trig);

     void enableAdcTrigger(hrtim_tu_number_t tu_number);

     void disableAdcTrigger(hrtim_tu_number_t tu_number);

     void setAdcTriggerInstant(hrtim_tu_number_t pwmX, float32_t trig_val);

     void setAdcEdgeTrigger(hrtim_tu_number_t pwmX, hrtim_adc_edgetrigger_t adc_edge_trigger);

     hrtim_adc_edgetrigger_t getAdcEdgeTrigger(hrtim_tu_number_t pwmX);

     void setAdcDecimation(hrtim_tu_number_t pwmX, uint32_t decimation);

     void disablePeriodEvnt(hrtim_tu_t PWM_tu);

     void setPeriodEvntRep(hrtim_tu_t PWM_tu, uint32_t repetition);

     uint32_t getPeriodEvntRep(hrtim_tu_t PWM_tu);

     void configurePeriodEvnt(hrtim_tu_t PWM_tu, uint32_t repetition, hrtim_callback_t callback);

     void enablePeriodEvnt(hrtim_tu_t PWM_tu);

     uint32_t getPeriodUs(hrtim_tu_number_t pwmX);

     void setFrequency(uint32_t frequency_update);
};

#endif // PWMHAL_H_
```


