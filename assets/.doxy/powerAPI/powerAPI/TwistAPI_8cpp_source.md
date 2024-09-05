

# File TwistAPI.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_power\_api**](dir_cd4faed35847176dcc5b7bcd69c9a669.md) **>** [**zephyr**](dir_d7ae7ccaa158b4bef6f2317c7758639a.md) **>** [**public\_api**](dir_483dd9146a51f5f74f5a28f650628f05.md) **>** [**TwistAPI.cpp**](TwistAPI_8cpp.md)

[Go to the documentation of this file](TwistAPI_8cpp.md)


```C++
/*
 * Copyright (c) 2023 LAAS-CNRS
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

#include "TwistAPI.h"
#include "../src/power_init.h"

#include "SpinAPI.h"

TwistAPI twist;

hrtim_tu_number_t TwistAPI::spinNumberToTu(uint16_t spin_number)
{
    if(spin_number == 12 || spin_number == 14)
    {
        return PWMA;
    }
    else if(spin_number == 15)
    {
        return PWMB;
    }
    else if(spin_number == 2 || spin_number == 4)
    {
        return PWMC;
    }
    else if(spin_number == 5 || spin_number == 6)
    {
        return PWMD;
    }
    else if(spin_number == 10 || spin_number == 11)
    {
        return PWME;
    }
    else if(spin_number == 7 || spin_number == 9)
    {
        return PWMF;
    }
    else
    {
        return PWMA;
    }
}

void TwistAPI::setVersion(twist_version_t twist_ver)
{
    if (twist_init == false)
    {
        twist_version = twist_ver;
        twist_init = true;
    }
}

void TwistAPI::initLegMode(leg_t leg, hrtim_switch_convention_t leg_convention, hrtim_pwm_mode_t leg_mode)
{

    spin.pwm.setFrequency(timer_frequency); // Configure PWM frequency

    spin.pwm.setModulation(spinNumberToTu(dt_pwm_pin[leg]), dt_modulation[leg]); // Set modulation

    spin.pwm.setAdcEdgeTrigger(spinNumberToTu(dt_pwm_pin[leg]), dt_edge_trigger[leg]); // Configure ADC rollover in center aligned mode


    if (leg_mode == CURRENT_MODE)
    {
        if (dt_current_pin[leg] == CM_DAC3)
            spin.pwm.setEev(spinNumberToTu(dt_pwm_pin[leg]), EEV4);
        else if (dt_current_pin[leg] == CM_DAC1)
            spin.pwm.setEev(spinNumberToTu(dt_pwm_pin[leg]), EEV5);

        /* Configure current mode */
        spin.pwm.setMode(spinNumberToTu(dt_pwm_pin[leg]), CURRENT_MODE);

    }

    spin.pwm.setSwitchConvention(spinNumberToTu(dt_pwm_pin[leg]), leg_convention); // choose which output of the timer unit to control whith duty cycle

    spin.pwm.initUnit(spinNumberToTu(dt_pwm_pin[leg])); // Initialize leg unit

    spin.pwm.setPhaseShift(spinNumberToTu(dt_pwm_pin[leg]), dt_phase_shift[leg]); // Configure PWM initial phase shift

    spin.pwm.setDeadTime(spinNumberToTu(dt_pwm_pin[leg]), dt_rising_deadtime[leg], dt_falling_deadtime[leg]); // Configure PWM dead time

    if (dt_adc[leg] != ADCTRIG_NONE)
    {
        spin.pwm.setAdcDecimation(spinNumberToTu(dt_pwm_pin[leg]), dt_adc_decim[leg]);

        spin.pwm.setAdcTrigger(spinNumberToTu(dt_pwm_pin[leg]), dt_adc[leg]);

        spin.pwm.enableAdcTrigger(spinNumberToTu(dt_pwm_pin[leg]));
    }

    if (leg_mode == CURRENT_MODE)
    {

        if (dt_current_pin[leg] == CM_DAC1)
        {
            spin.dac.currentModeInit( 1, tu_channel[spinNumberToTu(dt_pwm_pin[leg])]->pwm_conf.pwm_tu);
            spin.comp.initialize(3);
        }

        else if (dt_current_pin[leg] == CM_DAC3)
        {
            spin.dac.currentModeInit( 3, tu_channel[spinNumberToTu(dt_pwm_pin[leg])]->pwm_conf.pwm_tu);
            spin.comp.initialize(1);
        }
    }
    if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMA)
        spin.gpio.configurePin(PC12, OUTPUT);
    else if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMC)
        spin.gpio.configurePin(PC13, OUTPUT);
    else if (twist_version == shield_ownverter && spinNumberToTu(dt_pwm_pin[leg]) == PWME)
        spin.gpio.configurePin(PB7, OUTPUT);

    if (twist_init == false)
        twist_init = true; // When a leg has been initialized, shield version should not be modified
}

void TwistAPI::initAllMode(hrtim_switch_convention_t leg_convention, hrtim_pwm_mode_t leg_mode)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        initLegMode(static_cast<leg_t>(i), leg_convention, leg_mode);
    }
}

void TwistAPI::setLegDutyCycle(leg_t leg, float32_t duty_leg)
{
    if (duty_leg > 0.9)
        duty_leg = 0.9;
    else if (duty_leg < 0.1)
        duty_leg = 0.1;
    uint16_t value = duty_leg * tu_channel[spinNumberToTu(dt_pwm_pin[leg])]->pwm_conf.period;
    hrtim_duty_cycle_set(spinNumberToTu(dt_pwm_pin[leg]), value);
}

void TwistAPI::setAllDutyCycle(float32_t duty_all)
{
    if (duty_all > 0.9)
        duty_all = 0.9;
    else if (duty_all < 0.1)
        duty_all = 0.1;

    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegDutyCycle(static_cast<leg_t>(i), duty_all);
    }
}

void TwistAPI::startLeg(leg_t leg)
{
    if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMA)
        spin.gpio.setPin(PC12);
    else if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMC)
        spin.gpio.setPin(PC13);
    else if (twist_version == shield_ownverter && spinNumberToTu(dt_pwm_pin[leg]) == PWME)
        spin.gpio.setPin(PB7);

    /* start PWM*/
    if (!dt_output1_inactive[leg])
        spin.pwm.startSingleOutput(spinNumberToTu(dt_pwm_pin[leg]), TIMING_OUTPUT1);
    if (!dt_output2_inactive[leg])
        spin.pwm.startSingleOutput(spinNumberToTu(dt_pwm_pin[leg]), TIMING_OUTPUT2);
}

void TwistAPI::startAll()
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        startLeg(static_cast<leg_t>(i));
    }
}


void TwistAPI::stopLeg(leg_t leg)
{
    /* Stop PWM */
    spin.pwm.stopDualOutput(spinNumberToTu(dt_pwm_pin[leg]));


    if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMA)
        spin.gpio.resetPin(PC12);
    else if ((twist_version == shield_TWIST_V1_2 || twist_version == shield_ownverter || twist_version == shield_TWIST_V1_3) && spinNumberToTu(dt_pwm_pin[leg]) == PWMC)
        spin.gpio.resetPin(PC13);
    else if (twist_version == shield_ownverter && spinNumberToTu(dt_pwm_pin[leg]) == PWME)
        spin.gpio.resetPin(PB7);
}


void TwistAPI::stopAll()
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        stopLeg(static_cast<leg_t>(i));
    }
}

void TwistAPI::setLegSlopeCompensation(leg_t leg, float32_t set_voltage, float32_t reset_voltage)
{
    switch (dt_current_pin[leg])
    {
    case CM_DAC1:
        spin.dac.slopeCompensation(1, set_voltage, reset_voltage);
        break;
    case CM_DAC3:
        spin.dac.slopeCompensation(3, set_voltage, reset_voltage);
        break;
    default:
        break;
    }
}


void TwistAPI::setAllSlopeCompensation(float32_t set_voltage, float32_t reset_voltage)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegSlopeCompensation(static_cast<leg_t>(i), set_voltage, reset_voltage);
    }
}

void TwistAPI::setLegTriggerValue(leg_t leg, float32_t trigger_value)
{
    if (trigger_value > 0.95)
        trigger_value = 0.95;
    else if (trigger_value < 0.05)
        trigger_value = 0.05;
    spin.pwm.setAdcTriggerInstant(spinNumberToTu(dt_pwm_pin[leg]), trigger_value);

}

void TwistAPI::setAllTriggerValue(float32_t trigger_value)
{
    if (trigger_value > 0.95)
        trigger_value = 0.95;
    else if (trigger_value < 0.05)
        trigger_value = 0.05;
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegTriggerValue(static_cast<leg_t>(i), trigger_value);
    }
}

void TwistAPI::setLegPhaseShift(leg_t leg, int16_t phase_shift)
{
    spin.pwm.setPhaseShift(spinNumberToTu(dt_pwm_pin[leg]), phase_shift);

}

void TwistAPI::setAllPhaseShift(int16_t phase_shift)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegPhaseShift(static_cast<leg_t>(i), phase_shift);
    }
}

void TwistAPI::setLegDeadTime(leg_t leg, uint16_t ns_rising_dt, uint16_t ns_falling_dt)
{
    spin.pwm.setDeadTime(spinNumberToTu(dt_pwm_pin[leg]), ns_rising_dt, ns_falling_dt);
}

void TwistAPI::setAllDeadTime(uint16_t ns_rising_dt, uint16_t ns_falling_dt)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegDeadTime(static_cast<leg_t>(i), ns_rising_dt, ns_falling_dt);
    }
}

void TwistAPI::setLegAdcDecim(leg_t leg, uint16_t adc_decim)
{
    spin.pwm.setAdcDecimation(spinNumberToTu(dt_pwm_pin[leg]), adc_decim);
}


void TwistAPI::setAllAdcDecim(uint16_t adc_decim)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        setLegAdcDecim(static_cast<leg_t>(i), adc_decim);
    }
}


void TwistAPI::initLegBuck(leg_t leg, hrtim_pwm_mode_t leg_mode)
{
    if (spinNumberToTu(dt_pwm_pin[leg]) == PWMA && twist_version == shield_TWIST_V1_2)
        initLegMode(leg, PWMx2, leg_mode);
    else
        initLegMode(leg, PWMx1, leg_mode);
}

void TwistAPI::initAllBuck(hrtim_pwm_mode_t leg_mode)
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        initLegBuck(static_cast<leg_t>(i), leg_mode);
    }
}


void TwistAPI::initLegBoost(leg_t leg)
{
    if (spinNumberToTu(dt_pwm_pin[leg]) == PWMA && twist_version == shield_TWIST_V1_2)
        initLegMode(leg, PWMx1, VOLTAGE_MODE);
    else
        initLegMode(leg, PWMx2, VOLTAGE_MODE);
}

void TwistAPI::initAllBoost()
{
    for (int8_t i = 0; i < dt_leg_count; i++)
    {
        initLegBoost(static_cast<leg_t>(i));
    }
}
```

