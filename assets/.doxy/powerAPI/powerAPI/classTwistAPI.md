

# Class TwistAPI



[**ClassList**](annotated.md) **>** [**TwistAPI**](classTwistAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**initAllBoost**](#function-initallboost) () <br>_Initialise all the legs for boost topology, current mode is not supported for boost._  |
|  void | [**initAllBuck**](#function-initallbuck) (hrtim\_pwm\_mode\_t leg\_mode=VOLTAGE\_MODE) <br>_Initialise all the legs for buck topology._  |
|  void | [**initAllMode**](#function-initallmode) (hrtim\_switch\_convention\_t leg\_convention, hrtim\_pwm\_mode\_t leg\_mode) <br>_Initialize power modes for all legs._  |
|  void | [**initLegBoost**](#function-initlegboost) (leg\_t leg) <br>_Initialise all the legs for boost topology, current mode is not supported for boost._  |
|  void | [**initLegBuck**](#function-initlegbuck) (leg\_t leg, hrtim\_pwm\_mode\_t leg\_mode=VOLTAGE\_MODE) <br>_Initialise a leg for buck topology._  |
|  void | [**initLegMode**](#function-initlegmode) (leg\_t leg, hrtim\_switch\_convention\_t leg\_convention, hrtim\_pwm\_mode\_t leg\_mode) <br>_Initialize the power mode for a given leg._  |
|  void | [**setAllAdcDecim**](#function-setalladcdecim) (uint16\_t adc\_decim) <br>_set ADC decimator for all legs_  |
|  void | [**setAllDeadTime**](#function-setalldeadtime) (uint16\_t ns\_rising\_dt, uint16\_t ns\_falling\_dt) <br>_set the dead time value for all legs_  |
|  void | [**setAllDutyCycle**](#function-setalldutycycle) (float32\_t duty\_all) <br>_Set the duty cycle for power control of all the legs._  |
|  void | [**setAllPhaseShift**](#function-setallphaseshift) (int16\_t phase\_shift) <br>_Set the phase shift value for all the legs._  |
|  void | [**setAllSlopeCompensation**](#function-setallslopecompensation) (float32\_t set\_voltage, float32\_t reset\_voltage) <br>_Set the slope compensation in current mode for all the leg._  |
|  void | [**setAllTriggerValue**](#function-setalltriggervalue) (float32\_t trigger\_value) <br>_Set the trigger value for the ADC trigger of all the legs._  |
|  void | [**setLegAdcDecim**](#function-setlegadcdecim) (leg\_t leg, uint16\_t adc\_decim) <br>_set ADC decimator for a leg_  |
|  void | [**setLegDeadTime**](#function-setlegdeadtime) (leg\_t leg, uint16\_t ns\_rising\_dt, uint16\_t ns\_falling\_dt) <br>_set the dead time value for a leg_  |
|  void | [**setLegDutyCycle**](#function-setlegdutycycle) (leg\_t leg, float32\_t duty\_leg) <br>_Set the duty cycle for a specific leg's power control._  |
|  void | [**setLegPhaseShift**](#function-setlegphaseshift) (leg\_t leg, int16\_t phase\_shift) <br>_Set the phase shift value for a specific leg's power control._  |
|  void | [**setLegSlopeCompensation**](#function-setlegslopecompensation) (leg\_t leg, float32\_t set\_voltage, float32\_t reset\_voltage) <br>_Set the slope compensation in current mode for a leg._  |
|  void | [**setLegTriggerValue**](#function-setlegtriggervalue) (leg\_t leg, float32\_t trigger\_value) <br>_Set the trigger value for a specific leg's ADC trigger._  |
|  void | [**setVersion**](#function-setversion) (twist\_version\_t twist\_ver) <br>_Set the hardware version of the board._  |
|  void | [**startAll**](#function-startall) () <br>_Start power output for all legs._  |
|  void | [**startLeg**](#function-startleg) (leg\_t leg) <br>_Start power output for a specific leg._  |
|  void | [**stopAll**](#function-stopall) () <br>_Stop power output for all legs._  |
|  void | [**stopLeg**](#function-stopleg) (leg\_t leg) <br>_Stop power output for a specific leg._  |




























## Public Functions Documentation




### function initAllBoost 

```C++
void TwistAPI::initAllBoost () 
```




<hr>



### function initAllBuck 

_Initialise all the legs for buck topology._ 
```C++
void TwistAPI::initAllBuck (
    hrtim_pwm_mode_t leg_mode=VOLTAGE_MODE
) 
```





**Parameters:**


* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function initAllMode 

_Initialize power modes for all legs._ 
```C++
void TwistAPI::initAllMode (
    hrtim_switch_convention_t leg_convention,
    hrtim_pwm_mode_t leg_mode
) 
```



This function initializes the power modes for each leg with the specified 'buck' and 'voltage\_mode' settings.




**Parameters:**


* `leg_convention` PWM Switch to be driven by the duty cycle. The other will be complementary - PWMx1 or PWMx2 
* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function initLegBoost 

_Initialise all the legs for boost topology, current mode is not supported for boost._ 
```C++
void TwistAPI::initLegBoost (
    leg_t leg
) 
```





**Parameters:**


* `leg` Leg to initialize 




        

<hr>



### function initLegBuck 

_Initialise a leg for buck topology._ 
```C++
void TwistAPI::initLegBuck (
    leg_t leg,
    hrtim_pwm_mode_t leg_mode=VOLTAGE_MODE
) 
```





**Parameters:**


* `leg` Leg to initialize 
* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function initLegMode 

_Initialize the power mode for a given leg._ 
```C++
void TwistAPI::initLegMode (
    leg_t leg,
    hrtim_switch_convention_t leg_convention,
    hrtim_pwm_mode_t leg_mode
) 
```



This function configures modulation, frequency, phase shift, dead time, and other parameters for power control of a specified leg.




**Parameters:**


* `leg` The leg to initialize 
* `leg_convention` PWM Switch to be driven by the duty cycle. The other will be complementary - PWMx1 or PWMx2 
* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function setAllAdcDecim 

_set ADC decimator for all legs_ 
```C++
void TwistAPI::setAllAdcDecim (
    uint16_t adc_decim
) 
```



this function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period. For example if adc\_decim = 1, nothing changes but with adc\_decims = 2 you have twice less adc trigger.




**Parameters:**


* `adc_decim` - adc decimator, a number between 1 and 32 




        

<hr>



### function setAllDeadTime 

_set the dead time value for all legs_ 
```C++
void TwistAPI::setAllDeadTime (
    uint16_t ns_rising_dt,
    uint16_t ns_falling_dt
) 
```





**Parameters:**


* `ns_rising_dt` - rising dead time value in ns 
* `ns_falling_dt` - falling dead time value in ns 




        

<hr>



### function setAllDutyCycle 

_Set the duty cycle for power control of all the legs._ 
```C++
void TwistAPI::setAllDutyCycle (
    float32_t duty_all
) 
```



This function sets the same duty cycle for power control of all the legs. The duty cycle determines the ON/OFF ratio of the power signal for all legs.




**Parameters:**


* `duty_all` The duty cycle value to set (a floating-point number between 0.1 and 0.9). 




        

<hr>



### function setAllPhaseShift 

_Set the phase shift value for all the legs._ 
```C++
void TwistAPI::setAllPhaseShift (
    int16_t phase_shift
) 
```





**Parameters:**


* `phase_shift` The phase shift value to set. 




        

<hr>



### function setAllSlopeCompensation 

_Set the slope compensation in current mode for all the leg._ 
```C++
void TwistAPI::setAllSlopeCompensation (
    float32_t set_voltage,
    float32_t reset_voltage
) 
```





**Parameters:**


* `set_voltage` in volt, the DAC peak voltage for slope compensation (value between 0 and 2.048) 
* `reset_voltage` in volt, the DAC lowest voltage for slope compensation (value between 0 and 2.048)



**Warning:**

Be sure that set\_voltage &gt; reset\_voltage 





        

<hr>



### function setAllTriggerValue 

_Set the trigger value for the ADC trigger of all the legs._ 
```C++
void TwistAPI::setAllTriggerValue (
    float32_t trigger_value
) 
```



This function sets the same trigger value for the ADC trigger of all the legs. The trigger value determines the level at which the ADC trigger is activated for all legs.




**Parameters:**


* `trigger_value` The trigger value to set for all the legs between 0.0 and 1.0. 




        

<hr>



### function setLegAdcDecim 

_set ADC decimator for a leg_ 
```C++
void TwistAPI::setLegAdcDecim (
    leg_t leg,
    uint16_t adc_decim
) 
```



this function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period. For example if adc\_decim = 1, nothing changes but with adc\_decims = 2 you have twice less adc trigger.




**Parameters:**


* `leg` - leg for which to set adc decimator value 
* `adc_decim` - adc decimator, a number between 1 and 32 




        

<hr>



### function setLegDeadTime 

_set the dead time value for a leg_ 
```C++
void TwistAPI::setLegDeadTime (
    leg_t leg,
    uint16_t ns_rising_dt,
    uint16_t ns_falling_dt
) 
```





**Parameters:**


* `leg` - the leg for which to set dead time value 
* `ns_rising_dt` - rising dead time value in ns 
* `ns_falling_dt` - falling dead time value in ns 




        

<hr>



### function setLegDutyCycle 

_Set the duty cycle for a specific leg's power control._ 
```C++
void TwistAPI::setLegDutyCycle (
    leg_t leg,
    float32_t duty_leg
) 
```



This function sets the duty cycle for the power control of a specified leg. The duty cycle determines the ON/OFF ratio of the power signal for the leg.




**Parameters:**


* `leg` The leg for which to set the duty cycle. 
* `duty_leg` The duty cycle value to set (a floating-point number between 0.1 and 0.9). 




        

<hr>



### function setLegPhaseShift 

_Set the phase shift value for a specific leg's power control._ 
```C++
void TwistAPI::setLegPhaseShift (
    leg_t leg,
    int16_t phase_shift
) 
```





**Parameters:**


* `leg` The leg for which to set the phase shift value. 
* `phase_shift` The phase shift value to set. 




        

<hr>



### function setLegSlopeCompensation 

_Set the slope compensation in current mode for a leg._ 
```C++
void TwistAPI::setLegSlopeCompensation (
    leg_t leg,
    float32_t set_voltage,
    float32_t reset_voltage
) 
```





**Parameters:**


* `leg` The leg to initialize 
* `set_voltage` in volt, the DAC peak voltage for slope compensation (value between 0 and 2.048) 
* `reset_voltage` in volt, the DAC lowest voltage for slope compensation (value between 0 and 2.048)



**Warning:**

Be sure that set\_voltage &gt; reset\_voltage 





        

<hr>



### function setLegTriggerValue 

_Set the trigger value for a specific leg's ADC trigger._ 
```C++
void TwistAPI::setLegTriggerValue (
    leg_t leg,
    float32_t trigger_value
) 
```



This function sets the trigger value for the ADC trigger of a specified leg. The trigger value determines the level at which the ADC trigger is activated.




**Parameters:**


* `leg` The leg for which to set the ADC trigger value. 
* `trigger_value` The trigger value to set between 0.05 and 0.95. 




        

<hr>



### function setVersion 

_Set the hardware version of the board._ 
```C++
void TwistAPI::setVersion (
    twist_version_t twist_ver
) 
```





**Parameters:**


* `shield` shield version - shield\_TWIST\_V1\_2, shield\_TWIST\_V1\_3, shield\_ownverter or shield\_other



**Warning:**

You need to call this function BEFORE initializing a leg, after that it is not possible to change the shield version 





        

<hr>



### function startAll 

```C++
void TwistAPI::startAll () 
```




<hr>



### function startLeg 

_Start power output for a specific leg._ 
```C++
void TwistAPI::startLeg (
    leg_t leg
) 
```



This function initiates the power output for a specified leg by starting the PWM subunits associated with the leg's output pins. If the leg's output pins are not declared inactive in the device tree, the corresponding subunits are started. eg. If output1 is declared inactive in the device tree, PWMA1 will not start




**Parameters:**


* `leg` The leg for which to start the power output. 




        

<hr>



### function stopAll 

```C++
void TwistAPI::stopAll () 
```




<hr>



### function stopLeg 

_Stop power output for a specific leg._ 
```C++
void TwistAPI::stopLeg (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which to stop the power output. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_power_api/zephyr/public_api/TwistAPI.h`

