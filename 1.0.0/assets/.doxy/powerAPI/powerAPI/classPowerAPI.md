

# Class PowerAPI



[**ClassList**](annotated.md) **>** [**PowerAPI**](classPowerAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**connectCapacitor**](#function-connectcapacitor) (leg\_t leg) <br>_Connect the electrolytic capacitor._  |
|  void | [**connectDriver**](#function-connectdriver) (leg\_t leg) <br>_Turns the driver of the leg ON. This enables control over the power switches._  |
|  void | [**disconnectCapacitor**](#function-disconnectcapacitor) (leg\_t leg) <br>_Disconnect the electrolytic capacitor._  |
|  void | [**disconnectDriver**](#function-disconnectdriver) (leg\_t leg) <br>_Turns the driver of the leg ON. This disenables control over the power switches._  |
|  void | [**initBoost**](#function-initboost) (leg\_t leg) <br>_Initialise all the legs for boost topology, current mode is not supported for boost._  |
|  void | [**initBuck**](#function-initbuck) (leg\_t leg, hrtim\_pwm\_mode\_t leg\_mode=VOLTAGE\_MODE) <br>_Initialise a leg for buck topology._  |
|  void | [**initMode**](#function-initmode) (leg\_t leg, \ hrtim\_switch\_convention\_t leg\_convention, \ hrtim\_pwm\_mode\_t leg\_mode) <br>_Initialize the power mode for a given leg._  |
|  void | [**setAdcDecim**](#function-setadcdecim) (leg\_t leg, uint16\_t adc\_decim) <br>_set ADC decimator for a leg_  |
|  void | [**setDeadTime**](#function-setdeadtime) (leg\_t leg, \ uint16\_t ns\_rising\_dt, \ uint16\_t ns\_falling\_dt) <br>_set the dead time value for a leg_  |
|  void | [**setDutyCycle**](#function-setdutycycle) (leg\_t leg, float32\_t duty\_leg) <br>_Set the duty cycle for a specific leg's power control._  |
|  void | [**setPhaseShift**](#function-setphaseshift) (leg\_t leg, int16\_t phase\_shift) <br>_Set the phase shift value for a specific leg's power control._  |
|  void | [**setSlopeCompensation**](#function-setslopecompensation) (leg\_t leg, \ float32\_t set\_voltage, \ float32\_t reset\_voltage) <br>_Set the slope compensation in current mode for a leg._  |
|  void | [**setTriggerValue**](#function-settriggervalue) (leg\_t leg, float32\_t trigger\_value) <br>_Set the trigger value for a specific leg's ADC trigger._  |
|  void | [**start**](#function-start) (leg\_t leg) <br>_Start power output for a specific leg._  |
|  void | [**stop**](#function-stop) (leg\_t leg) <br>_Stop power output for a specific leg._  |




























## Public Functions Documentation




### function connectCapacitor 

_Connect the electrolytic capacitor._ 
```C++
void PowerAPI::connectCapacitor (
    leg_t leg
) 
```





**Parameters:**


* `leg` The selected leg for which the capacitor will be connected.



**Warning:**

This function can only be called AFTER initializing the LEG. 





        

<hr>



### function connectDriver 

_Turns the driver of the leg ON. This enables control over the power switches._ 
```C++
void PowerAPI::connectDriver (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which the driver will be turned on.



**Warning:**

This function can only be called AFTER initializing the LEG. 





        

<hr>



### function disconnectCapacitor 

_Disconnect the electrolytic capacitor._ 
```C++
void PowerAPI::disconnectCapacitor (
    leg_t leg
) 
```





**Parameters:**


* `leg` The selected leg for which the capacitor will be disconnected.



**Warning:**

This function can only be called AFTER initializing the LEG. 





        

<hr>



### function disconnectDriver 

_Turns the driver of the leg ON. This disenables control over the power switches._ 
```C++
void PowerAPI::disconnectDriver (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which the driver will be turned off.



**Warning:**

This function can only be called AFTER initializing the LEG. 





        

<hr>



### function initBoost 

_Initialise all the legs for boost topology, current mode is not supported for boost._ 
```C++
void PowerAPI::initBoost (
    leg_t leg
) 
```





**Parameters:**


* `leg` Leg to initialize 




        

<hr>



### function initBuck 

_Initialise a leg for buck topology._ 
```C++
void PowerAPI::initBuck (
    leg_t leg,
    hrtim_pwm_mode_t leg_mode=VOLTAGE_MODE
) 
```





**Parameters:**


* `leg` Leg to initialize 
* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function initMode 

_Initialize the power mode for a given leg._ 
```C++
void PowerAPI::initMode (
    leg_t leg,
    \ hrtim_switch_convention_t leg_convention,
    \ hrtim_pwm_mode_t leg_mode
) 
```



This function configures modulation, frequency, phase shift, dead time, and other parameters for power control of a specified leg.




**Parameters:**


* `leg` The leg to initialize 
* `leg_convention` PWM Switch to be driven by the duty cycle. The other will be complementary - PWMx1 or PWMx2 
* `leg_mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE 




        

<hr>



### function setAdcDecim 

_set ADC decimator for a leg_ 
```C++
void PowerAPI::setAdcDecim (
    leg_t leg,
    uint16_t adc_decim
) 
```



this function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period. For example if adc\_decim = 1, nothing changes but with adc\_decims = 2 you have twice less adc trigger.




**Parameters:**


* `leg` - leg for which to set adc decimator value 
* `adc_decim` - adc decimator, a number between 1 and 32 




        

<hr>



### function setDeadTime 

_set the dead time value for a leg_ 
```C++
void PowerAPI::setDeadTime (
    leg_t leg,
    \ uint16_t ns_rising_dt,
    \ uint16_t ns_falling_dt
) 
```





**Parameters:**


* `leg` - the leg for which to set dead time value 
* `ns_rising_dt` - rising dead time value in ns 
* `ns_falling_dt` - falling dead time value in ns 




        

<hr>



### function setDutyCycle 

_Set the duty cycle for a specific leg's power control._ 
```C++
void PowerAPI::setDutyCycle (
    leg_t leg,
    float32_t duty_leg
) 
```



This function sets the duty cycle for the power control of a specified leg. The duty cycle determines the ON/OFF ratio of the power signal for the leg.




**Parameters:**


* `leg` The leg for which to set the duty cycle. 
* `duty_leg` The duty cycle value to set (a floating-point number between 0.1 and 0.9). 




        

<hr>



### function setPhaseShift 

_Set the phase shift value for a specific leg's power control._ 
```C++
void PowerAPI::setPhaseShift (
    leg_t leg,
    int16_t phase_shift
) 
```





**Parameters:**


* `leg` The leg for which to set the phase shift value. 
* `phase_shift` phase shift value in degrees between -360 and 360 




        

<hr>



### function setSlopeCompensation 

_Set the slope compensation in current mode for a leg._ 
```C++
void PowerAPI::setSlopeCompensation (
    leg_t leg,
    \ float32_t set_voltage,
    \ float32_t reset_voltage
) 
```





**Parameters:**


* `leg` The leg to initialize 
* `set_voltage` in volt, the DAC peak voltage for slope compensation (value between 0 and 2.048) 
* `reset_voltage` in volt, the DAC lowest voltage for slope compensation (value between 0 and 2.048)



**Warning:**

Be sure that set\_voltage &gt; reset\_voltage 





        

<hr>



### function setTriggerValue 

_Set the trigger value for a specific leg's ADC trigger._ 
```C++
void PowerAPI::setTriggerValue (
    leg_t leg,
    float32_t trigger_value
) 
```



This function sets the trigger value for the ADC trigger of a specified leg. The trigger value determines the level at which the ADC trigger is activated.




**Parameters:**


* `leg` The leg for which to set the ADC trigger value. 
* `trigger_value` The trigger value to set between 0.05 and 0.95. 




        

<hr>



### function start 

_Start power output for a specific leg._ 
```C++
void PowerAPI::start (
    leg_t leg
) 
```



This function initiates the power output for a specified leg by starting the PWM subunits associated with the leg's output pins. If the leg's output pins are not declared inactive in the device tree, the corresponding subunits are started. eg. If output1 is declared inactive in the device tree, PWMA1 will not start




**Parameters:**


* `leg` The leg for which to start the power output. 




        

<hr>



### function stop 

_Stop power output for a specific leg._ 
```C++
void PowerAPI::stop (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which to stop the power output. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_shield_api/zephyr/src/Power.h`

