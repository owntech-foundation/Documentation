

# Class PwmHAL



[**ClassList**](annotated.md) **>** [**PwmHAL**](classPwmHAL.md)



_Handles all pwm signals for the spin board._ [More...](#detailed-description)

* `#include <PwmHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configurePeriodEvnt**](#function-configureperiodevnt) (hrtim\_tu\_t PWM\_tu, uint32\_t repetition, hrtim\_callback\_t callback) <br>_This function configures the interrupt on repetition counter._  |
|  void | [**deInitBurstMode**](#function-deinitburstmode) () <br>_This function deinit burst mode._  |
|  void | [**disableAdcTrigger**](#function-disableadctrigger) (hrtim\_tu\_number\_t tu\_number) <br>_This function disables the adc trigger for the selected timing unit._  |
|  void | [**disablePeriodEvnt**](#function-disableperiodevnt) (hrtim\_tu\_t PWM\_tu) <br>_This function disables the interrupt on repetition counter._  |
|  void | [**enableAdcTrigger**](#function-enableadctrigger) (hrtim\_tu\_number\_t tu\_number) <br>_This function enables the adc trigger for the selected timing unit._  |
|  void | [**enablePeriodEvnt**](#function-enableperiodevnt) (hrtim\_tu\_t PWM\_tu) <br>_This function enables the interrupt on repetition counter._  |
|  hrtim\_adc\_edgetrigger\_t | [**getAdcEdgeTrigger**](#function-getadcedgetrigger) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the adc trigger rollover mode for the selected timer._  |
|  hrtim\_adc\_trigger\_t | [**getAdcTrigger**](#function-getadctrigger) (hrtim\_tu\_number\_t pwmX, hrtim\_adc\_trigger\_t adc\_trig) <br>_This function returns the adc trigger linked to a timer unit._  |
|  hrtim\_external\_trigger\_t | [**getEev**](#function-geteev) (hrtim\_tu\_number\_t pwmX) <br>_This function sets the external event linked to the timing unit used for the current mode._  |
|  uint32\_t | [**getFrequencyMax**](#function-getfrequencymax) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the maximum frequency of the selected timer in Hz._  |
|  uint32\_t | [**getFrequencyMin**](#function-getfrequencymin) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the minimum frequency of the selected timer in Hz._  |
|  hrtim\_pwm\_mode\_t | [**getMode**](#function-getmode) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the PWM mode (voltage or current mode)_  |
|  hrtim\_cnt\_t | [**getModulation**](#function-getmodulation) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the modulation type of the selected timing unit._  |
|  uint16\_t | [**getPeriod**](#function-getperiod) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the period of the selected timing unit._  |
|  uint32\_t | [**getPeriodEvntRep**](#function-getperiodevntrep) (hrtim\_tu\_t PWM\_tu) <br>_This function returns the repetition counter value._  |
|  uint16\_t | [**getPeriodMax**](#function-getperiodmax) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the maximum period of the selected timing unit._  |
|  uint16\_t | [**getPeriodMin**](#function-getperiodmin) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the period of the selected timing unit._  |
|  uint32\_t | [**getPeriodUs**](#function-getperiodus) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the period in µs of the selected timer._  |
|  uint32\_t | [**getResolutionPs**](#function-getresolutionps) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the resolution of the timing unit in picoseconds._  |
|  hrtim\_switch\_convention\_t | [**getSwitchConvention**](#function-getswitchconvention) (hrtim\_tu\_number\_t pwmX) <br>_This function returns the switching convention of the selected timing unit._  |
|  void | [**initBurstMode**](#function-initburstmode) () <br>_This function initialize burst mode._  |
|  void | [**initFixedFrequency**](#function-initfixedfrequency) (uint32\_t fixed\_frequency) <br>_This function initialize the PWM for fixed frequency applications._  |
|  void | [**initUnit**](#function-initunit) (hrtim\_tu\_number\_t pwmX) <br>_This function initializes a timing unit._  |
|  void | [**initVariableFrequency**](#function-initvariablefrequency) (uint32\_t initial\_frequency, uint32\_t minimal\_frequency) <br>_This functions initializes the PWM for variable frequency applications._  |
|  void | [**setAdcDecimation**](#function-setadcdecimation) (hrtim\_tu\_number\_t pwmX, uint32\_t decimation) <br>_This function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period. For example if decimation = 1, nothing changes but with decimation = 2 you have twice less adc trigger._  |
|  void | [**setAdcEdgeTrigger**](#function-setadcedgetrigger) (hrtim\_tu\_number\_t pwmX, hrtim\_adc\_edgetrigger\_t adc\_edge\_trigger) <br>_This function sets the adc trig rollover mode for the selected timer._  |
|  void | [**setAdcTrigger**](#function-setadctrigger) (hrtim\_tu\_number\_t pwmX, hrtim\_adc\_trigger\_t adc\_trig) <br>_This function sets the adc trigger linked to a timer unit._  |
|  void | [**setAdcTriggerInstant**](#function-setadctriggerinstant) (hrtim\_tu\_number\_t pwmX, float32\_t trig\_val) <br>_This function sets the comparator value at which the ADC is trigered._  |
|  void | [**setAdcTriggerPostScaler**](#function-setadctriggerpostscaler) (hrtim\_tu\_number\_t pwmX, uint32\_t ps\_ratio) <br>_This function sets the PostScaler value for the selected timing unit._  |
|  void | [**setBurstMode**](#function-setburstmode) (int bm\_cmp, int bm\_per) <br>_This function sets burst mode parameters._  |
|  void | [**setDeadTime**](#function-setdeadtime) (hrtim\_tu\_number\_t pwmX, uint16\_t rise\_ns, uint16\_t fall\_ns) <br>_This function sets the dead time for the selected timing unit._  |
|  void | [**setDutyCycle**](#function-setdutycycle) (hrtim\_tu\_number\_t pwmX, float32\_t duty\_cycle) <br>_This function sets the duty cycle for the selected timing unit._  |
|  void | [**setEev**](#function-seteev) (hrtim\_tu\_number\_t pwmX, hrtim\_external\_trigger\_t eev) <br>_This function sets external event linked to the timing unit essential for the current mode._  |
|  void | [**setFrequency**](#function-setfrequency) (uint32\_t frequency\_update) <br>_Change the frequency/period after it has been initialized._  |
|  void | [**setMode**](#function-setmode) (hrtim\_tu\_number\_t pwmX, hrtim\_pwm\_mode\_t mode) <br>_This function sets a special pwm mode for voltage or current mode._  |
|  void | [**setModulation**](#function-setmodulation) (hrtim\_tu\_number\_t pwmX, hrtim\_cnt\_t modulation) <br>_This function sets the modulation mode for a given PWM unit._  |
|  void | [**setPeriodEvntRep**](#function-setperiodevntrep) (hrtim\_tu\_t PWM\_tu, uint32\_t repetition) <br>_This function sets the repetition counter to ISR period._  |
|  void | [**setPhaseShift**](#function-setphaseshift) (hrtim\_tu\_number\_t pwmX, int16\_t shift) <br>_This function sets the phase shift in respect to timer A for the selected timing unit._  |
|  void | [**setSwitchConvention**](#function-setswitchconvention) (hrtim\_tu\_number\_t pwmX, hrtim\_switch\_convention\_t convention) <br>_This function sets the switch convention for a given PWM unit i.e. you decide which one of the output of the timer can be controlled with duty cycle._  |
|  void | [**startBurstMode**](#function-startburstmode) () <br>_This function starts burst mode._  |
|  void | [**startDualOutput**](#function-startdualoutput) (hrtim\_tu\_number\_t pwmX) <br>_This fonction starts both outputs of the selected HRTIM channel._  |
|  void | [**startSingleOutput**](#function-startsingleoutput) (hrtim\_tu\_number\_t tu, hrtim\_output\_number\_t output) <br>_This function starts only one output of the selected HRTIM channel._  |
|  void | [**stopBurstMode**](#function-stopburstmode) () <br>_This function stops burst mode._  |
|  void | [**stopDualOutput**](#function-stopdualoutput) (hrtim\_tu\_number\_t pwmX) <br>_This function stops both outputs of the selected HRTIM channel._  |
|  void | [**stopSingleOutput**](#function-stopsingleoutput) (hrtim\_tu\_number\_t tu, hrtim\_output\_number\_t output) <br>_This function starts only one output of the selected HRTIM channel._  |




























## Detailed Description




**Note:**

Use this element to call functions related to the pwm. 





    
## Public Functions Documentation




### function configurePeriodEvnt 

_This function configures the interrupt on repetition counter._ 
```C++
void PwmHAL::configurePeriodEvnt (
    hrtim_tu_t PWM_tu,
    uint32_t repetition,
    hrtim_callback_t callback
) 
```





**Parameters:**


* `PWM_tu` PWM Unit - TIMA, TIMB, TIMC, TIMD, TIME or TIMF 
* `repetition` number of repetition before the interruption on repetition counter event 
* `callback` function to call each interupt 




        

<hr>



### function deInitBurstMode 

_This function deinit burst mode._ 
```C++
void PwmHAL::deInitBurstMode () 
```




<hr>



### function disableAdcTrigger 

_This function disables the adc trigger for the selected timing unit._ 
```C++
void PwmHAL::disableAdcTrigger (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function disablePeriodEvnt 

_This function disables the interrupt on repetition counter._ 
```C++
void PwmHAL::disablePeriodEvnt (
    hrtim_tu_t PWM_tu
) 
```





**Parameters:**


* `PWM_tu` PWM Unit - TIMA, TIMB, TIMC, TIMD, TIME or TIMF 




        

<hr>



### function enableAdcTrigger 

_This function enables the adc trigger for the selected timing unit._ 
```C++
void PwmHAL::enableAdcTrigger (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF



**Warning:**

call this function only AFTER setting the adc trigger and initializing the chosen timer 





        

<hr>



### function enablePeriodEvnt 

_This function enables the interrupt on repetition counter._ 
```C++
void PwmHAL::enablePeriodEvnt (
    hrtim_tu_t PWM_tu
) 
```





**Parameters:**


* `PWM_tu` PWM Unit - TIMA, TIMB, TIMC, TIMD, TIME or TIMF 




        

<hr>



### function getAdcEdgeTrigger 

_This function returns the adc trigger rollover mode for the selected timer._ 
```C++
hrtim_adc_edgetrigger_t PwmHAL::getAdcEdgeTrigger (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

Rollover mode - EdgeTrigger\_up, EdgeTrigger\_down, EdgeTrigger\_Both 





        

<hr>



### function getAdcTrigger 

_This function returns the adc trigger linked to a timer unit._ 
```C++
hrtim_adc_trigger_t PwmHAL::getAdcTrigger (
    hrtim_tu_number_t pwmX,
    hrtim_adc_trigger_t adc_trig
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

adc trigger - ADCTRIG\_1, ADCTRIG\_2, ADCTRIG\_3 et ADCTRIG\_4 





        

<hr>



### function getEev 

_This function sets the external event linked to the timing unit used for the current mode._ 
```C++
hrtim_external_trigger_t PwmHAL::getEev (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

external event trigger - EEV1,EEV2, EEV3, EEV3, EEV4, EEV5, EEV6, EEV7, EEV8, EEV9 





        

<hr>



### function getFrequencyMax 

_This function returns the maximum frequency of the selected timer in Hz._ 
```C++
uint32_t PwmHAL::getFrequencyMax (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function getFrequencyMin 

_This function returns the minimum frequency of the selected timer in Hz._ 
```C++
uint32_t PwmHAL::getFrequencyMin (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function getMode 

_This function returns the PWM mode (voltage or current mode)_ 
```C++
hrtim_pwm_mode_t PwmHAL::getMode (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

PWM mode - VOLTAGE\_MODE or CURRENT\_MODE




**Warning:**

this function must be called before initialiazing a timing unit 





        

<hr>



### function getModulation 

_This function returns the modulation type of the selected timing unit._ 
```C++
hrtim_cnt_t PwmHAL::getModulation (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

Lft\_aligned or UpDwn (center aligned) 





        

<hr>



### function getPeriod 

_This function returns the period of the selected timing unit._ 
```C++
uint16_t PwmHAL::getPeriod (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

the period value in number of clock cycles 





        

<hr>



### function getPeriodEvntRep 

_This function returns the repetition counter value._ 
```C++
uint32_t PwmHAL::getPeriodEvntRep (
    hrtim_tu_t PWM_tu
) 
```





**Parameters:**


* `PWM_tu` PWM Unit - TIMA, TIMB, TIMC, TIMD, TIME or TIMF 



**Returns:**

repetition counter value 





        

<hr>



### function getPeriodMax 

_This function returns the maximum period of the selected timing unit._ 
```C++
uint16_t PwmHAL::getPeriodMax (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

the period value in number of clock cycles 





        

<hr>



### function getPeriodMin 

_This function returns the period of the selected timing unit._ 
```C++
uint16_t PwmHAL::getPeriodMin (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

the period value in number of clock cycles 





        

<hr>



### function getPeriodUs 

_This function returns the period in µs of the selected timer._ 
```C++
uint32_t PwmHAL::getPeriodUs (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function getResolutionPs 

_This function returns the resolution of the timing unit in picoseconds._ 
```C++
uint32_t PwmHAL::getResolutionPs (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF



**Note:**

The resolution of the PWM depends on the prescaler that is automatically calculated when the master unit is initialized. For an HRTIM frequency of =170MHz: PRSCL = 0 : fHRTIM x 32 = 4.608 GHz - Res: 184 ps - Min PWM f: 83.0 kHz PRSCL = 1 : fHRTIM x 16 = 2.304 GHz - Res: 368 ps - Min PWM f: 41.5 kHz PRSCL = 2 : fHRTIM x 8 = 1.152 GHz - Res: 735 ps - Min PWM f: 20.8 kHz PRSCL = 3 : fHRTIM x 4 = 576 MHz - Res: 1470 ps - Min PWM f: 10.4 kHz PRSCL = 4 : fHRTIM x 2 = 288 MHz - Res: 2940 ps - Min PWM f: 5.2 kHz PRSCL = 5 : fHRTIM X 1 = 144 MHz - Res: 5880 ps - Min PWM f: 2.6 kHz PRSCL = 6 : fHRTIM / 2 = 72 MHz - Res:11760 ps - Min PWM f: 1.3 kHz PRSCL = 7 : fHRTIM / 4 = 36 MHz - Res:23530 ps - Min PWM f: 0.65 kHz 





        

<hr>



### function getSwitchConvention 

_This function returns the switching convention of the selected timing unit._ 
```C++
hrtim_switch_convention_t PwmHAL::getSwitchConvention (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 



**Returns:**

PWMx1 (high side convention) or PWMx2 (low-side convention) 





        

<hr>



### function initBurstMode 

_This function initialize burst mode._ 
```C++
void PwmHAL::initBurstMode () 
```




<hr>



### function initFixedFrequency 

_This function initialize the PWM for fixed frequency applications._ 
```C++
void PwmHAL::initFixedFrequency (
    uint32_t fixed_frequency
) 
```





**Parameters:**


* `fixed_frequency` frequency to be fixed in Hz



**Warning:**

This function must be called BEFORE initialiazing any timing unit. The frequency will not vary during the operation of the power device. Use it for fixed frequencies only. 





        

<hr>



### function initUnit 

_This function initializes a timing unit._ 
```C++
void PwmHAL::initUnit (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF



**Date:**

2023 




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 





        

<hr>



### function initVariableFrequency 

_This functions initializes the PWM for variable frequency applications._ 
```C++
void PwmHAL::initVariableFrequency (
    uint32_t initial_frequency,
    uint32_t minimal_frequency
) 
```





**Parameters:**


* `initial_frequency` The initial value of the frequency in Hz 
* `minimal_frequency` The minimal value of the frequency in Hz



**Warning:**

This function must be called BEFORE initialiazing any timing unit. The user can vary the frequency during the operation of the power device. This may compromise the resolution of the PWM. you can check your resolution with the getResolutionPS function. 





        

<hr>



### function setAdcDecimation 

_This function sets the number of event which will be ignored between two events. ie. you divide the number of trigger in a fixed period. For example if decimation = 1, nothing changes but with decimation = 2 you have twice less adc trigger._ 
```C++
void PwmHAL::setAdcDecimation (
    hrtim_tu_number_t pwmX,
    uint32_t decimation
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `decimation` decimation/post-scaler - a number between 1 and 32



**Warning:**

this function must be called AFTER initialiazing the selected timing unit 





        

<hr>



### function setAdcEdgeTrigger 

_This function sets the adc trig rollover mode for the selected timer._ 
```C++
void PwmHAL::setAdcEdgeTrigger (
    hrtim_tu_number_t pwmX,
    hrtim_adc_edgetrigger_t adc_edge_trigger
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `adc_edge_trigger` Rollover mode - EdgeTrigger\_up, EdgeTrigger\_down, EdgeTrigger\_Both



**Warning:**

this function must be called BEFORE initialiazing the selected timing unit 





        

<hr>



### function setAdcTrigger 

_This function sets the adc trigger linked to a timer unit._ 
```C++
void PwmHAL::setAdcTrigger (
    hrtim_tu_number_t pwmX,
    hrtim_adc_trigger_t adc_trig
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `adc_trig` adc trigger - ADCTRIG\_1, ADCTRIG\_2, ADCTRIG\_3 et ADCTRIG\_4



**Warning:**

Call this function BEFORE enabling the adc trigger and AFTER initializing the selected timer 





        

<hr>



### function setAdcTriggerInstant 

_This function sets the comparator value at which the ADC is trigered._ 
```C++
void PwmHAL::setAdcTriggerInstant (
    hrtim_tu_number_t pwmX,
    float32_t trig_val
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `trig_val` a value between 0 and 1 




        

<hr>



### function setAdcTriggerPostScaler 

_This function sets the PostScaler value for the selected timing unit._ 
```C++
void PwmHAL::setAdcTriggerPostScaler (
    hrtim_tu_number_t pwmX,
    uint32_t ps_ratio
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `ps_ratio` post scaler ratio



**Warning:**

this function must be called after initialiazing a timing unit, and before enabling the adc trigger 





        

<hr>



### function setBurstMode 

_This function sets burst mode parameters._ 
```C++
void PwmHAL::setBurstMode (
    int bm_cmp,
    int bm_per
) 
```





**Parameters:**


* `bm_cmp` Number of period of PWM off 
* `bm_per` Total number of PWM period 




        

<hr>



### function setDeadTime 

_This function sets the dead time for the selected timing unit._ 
```C++
void PwmHAL::setDeadTime (
    hrtim_tu_number_t pwmX,
    uint16_t rise_ns,
    uint16_t fall_ns
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `rise_ns` rising edge dead time in ns 
* `falling_ns` falling edge dead time in ns



**Warning:**

use this function BEFORE initializing the chosen timer 





        

<hr>



### function setDutyCycle 

_This function sets the duty cycle for the selected timing unit._ 
```C++
void PwmHAL::setDutyCycle (
    hrtim_tu_number_t pwmX,
    float32_t duty_cycle
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `value` duty cycle value 




        

<hr>



### function setEev 

_This function sets external event linked to the timing unit essential for the current mode._ 
```C++
void PwmHAL::setEev (
    hrtim_tu_number_t pwmX,
    hrtim_external_trigger_t eev
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `eev` external event trigger - EEV1,EEV2, EEV3, EEV3, EEV4, EEV5, EEV6, EEV7, EEV8, EEV9



**Warning:**

this function must be called before initialiazing a timing unit 





        

<hr>



### function setFrequency 

_Change the frequency/period after it has been initialized._ 
```C++
void PwmHAL::setFrequency (
    uint32_t frequency_update
) 
```





**Parameters:**


* `frequency_update` The new frequency in Hz 



**Warning:**

The new frequency can't be inferior to the the one set in the initialization step Use it AFTER the initialization of the timing unit. 





        

<hr>



### function setMode 

_This function sets a special pwm mode for voltage or current mode._ 
```C++
void PwmHAL::setMode (
    hrtim_tu_number_t pwmX,
    hrtim_pwm_mode_t mode
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `mode` PWM mode - VOLTAGE\_MODE or CURRENT\_MODE



**Warning:**

this function must be called BEFORE initialiazing the selected timing unit 





        

<hr>



### function setModulation 

_This function sets the modulation mode for a given PWM unit._ 
```C++
void PwmHAL::setModulation (
    hrtim_tu_number_t pwmX,
    hrtim_cnt_t modulation
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `modulation` PWM Modulation - Lft\_aligned or UpDwn



**Warning:**

this function must be called BEFORE initializing the selected timer 





        

<hr>



### function setPeriodEvntRep 

_This function sets the repetition counter to ISR period._ 
```C++
void PwmHAL::setPeriodEvntRep (
    hrtim_tu_t PWM_tu,
    uint32_t repetition
) 
```





**Parameters:**


* `PWM_tu` PWM Unit - TIMA, TIMB, TIMC, TIMD, TIME or TIMF 
* `repetition` number of repetition before the interruption on repetition counter event 




        

<hr>



### function setPhaseShift 

_This function sets the phase shift in respect to timer A for the selected timing unit._ 
```C++
void PwmHAL::setPhaseShift (
    hrtim_tu_number_t pwmX,
    int16_t shift
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `shift` phase shift value ° between -360 and 360



**Warning:**

use this function AFTER setting the frequency and initializing the chosen timer 





        

<hr>



### function setSwitchConvention 

_This function sets the switch convention for a given PWM unit i.e. you decide which one of the output of the timer can be controlled with duty cycle._ 
```C++
void PwmHAL::setSwitchConvention (
    hrtim_tu_number_t pwmX,
    hrtim_switch_convention_t convention
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 
* `convention` PWM Switch to be driven by the duty cycle. The other will be complementary - PWMx1 or PWMx2



**Warning:**

this function must be called before the timer initialization 





        

<hr>



### function startBurstMode 

_This function starts burst mode._ 
```C++
void PwmHAL::startBurstMode () 
```




<hr>



### function startDualOutput 

_This fonction starts both outputs of the selected HRTIM channel._ 
```C++
void PwmHAL::startDualOutput (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function startSingleOutput 

_This function starts only one output of the selected HRTIM channel._ 
```C++
void PwmHAL::startSingleOutput (
    hrtim_tu_number_t tu,
    hrtim_output_number_t output
) 
```





**Parameters:**


* `tu` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME, PWMF 
* `output` output to disable - TIMING\_OUTPUT1, TIMING\_OUTPUT2 




        

<hr>



### function stopBurstMode 

_This function stops burst mode._ 
```C++
void PwmHAL::stopBurstMode () 
```




<hr>



### function stopDualOutput 

_This function stops both outputs of the selected HRTIM channel._ 
```C++
void PwmHAL::stopDualOutput (
    hrtim_tu_number_t pwmX
) 
```





**Parameters:**


* `pwmX` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME or PWMF 




        

<hr>



### function stopSingleOutput 

_This function starts only one output of the selected HRTIM channel._ 
```C++
void PwmHAL::stopSingleOutput (
    hrtim_tu_number_t tu,
    hrtim_output_number_t output
) 
```





**Parameters:**


* `tu` PWM Unit - PWMA, PWMB, PWMC, PWMD, PWME, PWMF 
* `output` output to disable - TIMING\_OUTPUT1, TIMING\_OUTPUT2 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/PwmHAL.h`

