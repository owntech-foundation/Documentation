

# Class PowerAPI



[**ClassList**](annotated.md) **>** [**PowerAPI**](classPowerAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**connectCapacitor**](#function-connectcapacitor) (leg\_t leg) <br>_Connect the electrolytic capacitor._  |
|  void | [**connectDriver**](#function-connectdriver) (leg\_t leg) <br>_Turns the driver of the leg ON. This enables control over the power switches._  |
|  void | [**disconnectCapacitor**](#function-disconnectcapacitor) (leg\_t leg) <br>_Disconnect the electrolytic capacitor._  |
|  void | [**disconnectDriver**](#function-disconnectdriver) (leg\_t leg) <br>_Turns the driver of the leg OFF._  |
|  float32\_t | [**getDutyCycleMax**](#function-getdutycyclemax) (leg\_t leg) <br>_gets the Maximum Duty Cycle Limit as a float_  |
|  uint16\_t | [**getDutyCycleMaxRaw**](#function-getdutycyclemaxraw) (leg\_t leg) <br>_gets the Maximum Duty Cycle Limit as an unsigned integer._  |
|  float32\_t | [**getDutyCycleMin**](#function-getdutycyclemin) (leg\_t leg) <br>_gets the Minimum Duty Cycle Limit as a float_  |
|  uint16\_t | [**getDutyCycleMinRaw**](#function-getdutycycleminraw) (leg\_t leg) <br>_gets the Minimum Duty Cycle Limit as an unsigned integer._  |
|  uint16\_t | [**getPeriod**](#function-getperiod) (leg\_t leg) <br>_returns the value of the leg period as an unsigned integer_  |
|  void | [**initBoost**](#function-initboost) (leg\_t leg) <br>_Initialise all the legs for boost topology, current mode is not supported for boost._  |
|  void | [**initBuck**](#function-initbuck) (leg\_t leg, hrtim\_pwm\_mode\_t leg\_mode=VOLTAGE\_MODE) <br>_Initialise a leg for buck topology._  |
|  void | [**initMode**](#function-initmode) (leg\_t leg, hrtim\_switch\_convention\_t leg\_convention, hrtim\_pwm\_mode\_t leg\_mode) <br>_Initialize the power mode for a given leg._  |
|  void | [**setAdcDecim**](#function-setadcdecim) (leg\_t leg, uint16\_t adc\_decim) <br>_Sets ADC decimator for a leg._  |
|  void | [**setDeadTime**](#function-setdeadtime) (leg\_t leg, uint16\_t ns\_rising\_dt, uint16\_t ns\_falling\_dt) <br>_set the dead time value for a leg_  |
|  void | [**setDutyCycle**](#function-setdutycycle) (leg\_t leg, float32\_t duty\_value) <br>_Set the duty cycle for a specific leg's power control._  |
|  void | [**setDutyCycleMax**](#function-setdutycyclemax) (leg\_t leg, float32\_t duty\_cycle) <br>_sets the Maximum Duty Cycle Limit_  |
|  void | [**setDutyCycleMaxRaw**](#function-setdutycyclemaxraw) (leg\_t leg, uint16\_t duty\_cycle) <br>_sets the Maximum Duty Cycle Limit as an unsigned int_  |
|  void | [**setDutyCycleMin**](#function-setdutycyclemin) (leg\_t leg, float32\_t duty\_cycle) <br>_sets the Minimum Duty Cycle Limit_  |
|  void | [**setDutyCycleMinRaw**](#function-setdutycycleminraw) (leg\_t leg, uint16\_t duty\_cycle) <br>_sets the Minimum Duty Cycle Limit as an unsigned int_  |
|  void | [**setDutyCycleRaw**](#function-setdutycycleraw) (leg\_t leg, uint16\_t duty\_value) <br>_Set the duty cycle for a specific leg's power control._  |
|  void | [**setPhaseShift**](#function-setphaseshift) (leg\_t leg, int16\_t phase\_shift) <br>_Set the phase shift value for a specific leg's power control._  |
|  void | [**setSlopeCompensation**](#function-setslopecompensation) (leg\_t leg, float32\_t set\_voltage, float32\_t reset\_voltage) <br>_Set the slope compensation in current mode for a leg._  |
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


* `leg` The selected leg for which the capacitor will be connected: `LEG1` to `ALL`



**Warning:**

This function can only be called AFTER initializing the `LEG`. 





        

<hr>



### function connectDriver 

_Turns the driver of the leg ON. This enables control over the power switches._ 
```C++
void PowerAPI::connectDriver (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which the driver will be turned on: `LEG1` to `ALL`



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


* `leg` The selected leg for which the capacitor will be disconnected: `LEG1` to `ALL`



**Warning:**

This function can only be called AFTER initializing the `LEG`. 





        

<hr>



### function disconnectDriver 

_Turns the driver of the leg OFF._ 
```C++
void PowerAPI::disconnectDriver (
    leg_t leg
) 
```








**Parameters:**


* `leg` The leg for which the driver will be turned off: `LEG1` to `ALL`



**Warning:**

This function can only be called AFTER initializing the LEG. 





        

<hr>



### function getDutyCycleMax 

_gets the Maximum Duty Cycle Limit as a float_ 
```C++
float32_t PowerAPI::getDutyCycleMax (
    leg_t leg
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `LEG5`. 



**Warning:**

`ALL` is NOT supported ! 





        

<hr>



### function getDutyCycleMaxRaw 

_gets the Maximum Duty Cycle Limit as an unsigned integer._ 
```C++
uint16_t PowerAPI::getDutyCycleMaxRaw (
    leg_t leg
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `LEG5`. 



**Warning:**

`ALL` is NOT supported ! 





        

<hr>



### function getDutyCycleMin 

_gets the Minimum Duty Cycle Limit as a float_ 
```C++
float32_t PowerAPI::getDutyCycleMin (
    leg_t leg
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `LEG5`. 



**Warning:**

`ALL` is NOT supported ! 





        

<hr>



### function getDutyCycleMinRaw 

_gets the Minimum Duty Cycle Limit as an unsigned integer._ 
```C++
uint16_t PowerAPI::getDutyCycleMinRaw (
    leg_t leg
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `LEG5`. 



**Warning:**

`ALL` is NOT supported ! 





        

<hr>



### function getPeriod 

_returns the value of the leg period as an unsigned integer_ 
```C++
uint16_t PowerAPI::getPeriod (
    leg_t leg
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `LEG5`. 



**Warning:**

`ALL` is NOT supported ! 





        

<hr>



### function initBoost 

_Initialise all the legs for boost topology, current mode is not supported for boost._ 
```C++
void PowerAPI::initBoost (
    leg_t leg
) 
```





**Parameters:**


* `leg` Leg to initialize: `LEG1` to `ALL` 




        

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


* `leg` Leg to initialize: `LEG1` to `ALL` 
* `leg_mode` PWM mode - `VOLTAGE_MODE` or `CURRENT_MODE`



**Note:**

`CURRENT_MODE` only available to `LEG1` and `LEG2` for the Twist board 





        

<hr>



### function initMode 

_Initialize the power mode for a given leg._ 
```C++
void PowerAPI::initMode (
    leg_t leg,
    hrtim_switch_convention_t leg_convention,
    hrtim_pwm_mode_t leg_mode
) 
```



This function configures modulation, frequency, phase shift, dead time, and other parameters for power control of a specified leg.




**Parameters:**


* `leg` The leg to initialize:`LEG1` to `ALL` 
* `leg_convention` PWM Switch to be driven by the duty cycle: `PWMx1`, `PWMx2` 
* `leg_mode` PWM mode: `VOLTAGE_MODE`, `CURRENT_MODE` 




        

<hr>



### function setAdcDecim 

_Sets ADC decimator for a leg._ 
```C++
void PowerAPI::setAdcDecim (
    leg_t leg,
    uint16_t adc_decim
) 
```



This function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period.


For example if adc\_decim = 1, nothing changes but with adc\_decims = 2 you have twice less adc trigger.




**Parameters:**


* `leg` leg for which to set adc decimator value: `LEG1` to `ALL` 
* `adc_decim` adc decimator, a number between 1 and 32 




        

<hr>



### function setDeadTime 

_set the dead time value for a leg_ 
```C++
void PowerAPI::setDeadTime (
    leg_t leg,
    uint16_t ns_rising_dt,
    uint16_t ns_falling_dt
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `ALL` 
* `ns_rising_dt` rising dead time value in nanoseconds 
* `ns_falling_dt` falling dead time value in nanoseconds 




        

<hr>



### function setDutyCycle 

_Set the duty cycle for a specific leg's power control._ 
```C++
void PowerAPI::setDutyCycle (
    leg_t leg,
    float32_t duty_value
) 
```



This function sets the duty cycle for the power control of a specified leg.


The duty cycle determines the ON/OFF ratio of the power signal for the leg.




**Parameters:**


* `leg` The leg for which to set the duty cycle: `LEG1` to `ALL` 
* `duty_value` The duty cycle value to set (a floating-point number between `0.1` and `0.9`). 




        

<hr>



### function setDutyCycleMax 

_sets the Maximum Duty Cycle Limit_ 
```C++
void PowerAPI::setDutyCycleMax (
    leg_t leg,
    float32_t duty_cycle
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `ALL` 
* `duty_cycle` - new maximum duty cycle value between 0.0 and 1.0 




        

<hr>



### function setDutyCycleMaxRaw 

_sets the Maximum Duty Cycle Limit as an unsigned int_ 
```C++
void PowerAPI::setDutyCycleMaxRaw (
    leg_t leg,
    uint16_t duty_cycle
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `ALL` 
* `duty_cycle` - new minimum duty cycle value between `0` and `period` 




        

<hr>



### function setDutyCycleMin 

_sets the Minimum Duty Cycle Limit_ 
```C++
void PowerAPI::setDutyCycleMin (
    leg_t leg,
    float32_t duty_cycle
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `ALL` 
* `duty_cycle` - new minimum duty cycle value between 0.0 and 1.0 




        

<hr>



### function setDutyCycleMinRaw 

_sets the Minimum Duty Cycle Limit as an unsigned int_ 
```C++
void PowerAPI::setDutyCycleMinRaw (
    leg_t leg,
    uint16_t duty_cycle
) 
```





**Parameters:**


* `leg` the leg for which to set dead time value: `LEG1` to `ALL` 
* `duty_cycle` - new minimum duty cycle value between `0` and `period` 




        

<hr>



### function setDutyCycleRaw 

_Set the duty cycle for a specific leg's power control._ 
```C++
void PowerAPI::setDutyCycleRaw (
    leg_t leg,
    uint16_t duty_value
) 
```



This function sets the duty cycle for the power control of a specified leg.


The duty cycle determines the ON/OFF time ratio of the power signal for the leg.




**Parameters:**


* `leg` The leg for which to set the duty cycle: `LEG1` to `ALL` 
* `duty_value` The duty cycle value to set an unsigned integer number between `duty_cycle_min_raw` and `duty_cycle_max_raw`. 




        

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


* `leg` The leg for which to set the phase shift value: `LEG1` to `ALL` 
* `phase_shift` phase shift value in degrees between `-360` and `360` 




        

<hr>



### function setSlopeCompensation 

_Set the slope compensation in current mode for a leg._ 
```C++
void PowerAPI::setSlopeCompensation (
    leg_t leg,
    float32_t set_voltage,
    float32_t reset_voltage
) 
```





**Parameters:**


* `leg` The leg to initialize: `LEG1` to `ALL` 
* `set_voltage` in volt, the DAC peak voltage for slope compensation (value between `0` and `2.048`) 
* `reset_voltage` in volt, the DAC lowest voltage for slope compensation (value between `0` and `2.048`)



**Warning:**

Be sure that `set_voltage > reset_voltage` 





        

<hr>



### function setTriggerValue 

_Set the trigger value for a specific leg's ADC trigger._ 
```C++
void PowerAPI::setTriggerValue (
    leg_t leg,
    float32_t trigger_value
) 
```



This function sets the trigger value for the ADC trigger of a specified leg.


The trigger value determines the level at which the ADC trigger is activated.




**Parameters:**


* `leg` The leg for which to set the ADC trigger value: `LEG1` to `ALL` 
* `trigger_value` The trigger value to set between 0.05 and 0.95. 




        

<hr>



### function start 

_Start power output for a specific leg._ 
```C++
void PowerAPI::start (
    leg_t leg
) 
```



This function initiates the power output for a specified leg by starting the PWM subunits associated with the leg's output pins.


If the leg's output pins are not declared inactive in the device tree, the corresponding subunits are started. eg.


If output1 is declared inactive in the device tree, PWMA1 will not start.




**Parameters:**


* `leg` The leg for which to start the power output: `LEG1` to `ALL` 




        

<hr>



### function stop 

_Stop power output for a specific leg._ 
```C++
void PowerAPI::stop (
    leg_t leg
) 
```





**Parameters:**


* `leg` The leg for which to stop the power output: `LEG1` to `ALL` 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_shield_api/zephyr/src/Power.h`

