

# File hrtim.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_hrtim\_driver**](dir_9bdb70ffe78507e4a3f4bf6bbcfe5795.md) **>** [**zephyr**](dir_5726d3ce904599e290c14ea43bd5e0ac.md) **>** [**public\_api**](dir_f50115c0b0057abe0315b5e6b1574f35.md) **>** [**hrtim.h**](hrtim_8h.md)

[Go to the source code of this file](hrtim_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**timer\_hrtim\_t**](structtimer__hrtim__t.md) <br>_Timinig unit configuration - aggregates all the structures._  |






## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**timer\_hrtim\_t**](structtimer__hrtim__t.md) \* | [**tu\_channel**](#variable-tu_channel)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**DualDAC\_init**](#function-dualdac_init) (hrtim\_tu\_number\_t tu) <br>_Initializes dual DAC reset and trigger. The selected timing unit CMP2 will trigger the step (Decrement/Increment of sawtooth) and the reset (return to initial value)._  |
|  uint32\_t | [**hrtim\_PeriodicEvent\_GetRep**](#function-hrtim_periodicevent_getrep) (hrtim\_tu\_t tu) <br>_Gets the current value of the repetition counter._  |
|  void | [**hrtim\_PeriodicEvent\_SetRep**](#function-hrtim_periodicevent_setrep) (hrtim\_tu\_t tu, uint32\_t repetition) <br>_Changes the repetition counter value to control the ISR interrupt._  |
|  void | [**hrtim\_PeriodicEvent\_configure**](#function-hrtim_periodicevent_configure) (hrtim\_tu\_t tu, uint32\_t repetition, hrtim\_callback\_t callback) <br>_Configures interrupt on repetition counter for the chosen timing unit._  |
|  void | [**hrtim\_PeriodicEvent\_dis**](#function-hrtim_periodicevent_dis) (hrtim\_tu\_t tu) <br>_Disables interrupt on repetition counter for the chosen timing unit._  |
|  void | [**hrtim\_PeriodicEvent\_en**](#function-hrtim_periodicevent_en) (hrtim\_tu\_t tu) <br>_Enables interrupt on repetition counter for the chosen timing unit. The periodic event configuration must have been done previously._  |
|  hrtim\_adc\_edgetrigger\_t | [**hrtim\_adc\_rollover\_get**](#function-hrtim_adc_rollover_get) (hrtim\_tu\_number\_t tu\_number) <br>_Returns the adc rollover mode._  |
|  void | [**hrtim\_adc\_rollover\_set**](#function-hrtim_adc_rollover_set) (hrtim\_tu\_number\_t tu\_number, hrtim\_adc\_edgetrigger\_t adc\_rollover) <br>_Configures the adc rollover mode._  |
|  hrtim\_adc\_trigger\_t | [**hrtim\_adc\_triger\_get**](#function-hrtim_adc_triger_get) (hrtim\_tu\_number\_t tu\_number) <br>_Returns the adc trigger._  |
|  void | [**hrtim\_adc\_triger\_set**](#function-hrtim_adc_triger_set) (hrtim\_tu\_number\_t tu\_number, hrtim\_adc\_trigger\_t adc\_trig) <br>_Sets the adc trigger number for a timing unit._  |
|  void | [**hrtim\_adc\_trigger\_dis**](#function-hrtim_adc_trigger_dis) (hrtim\_tu\_number\_t tu\_number) <br>_Disbables a ADCx trigger event._  |
|  void | [**hrtim\_adc\_trigger\_en**](#function-hrtim_adc_trigger_en) (hrtim\_tu\_number\_t tu\_number) <br>_Configures and enables an ADC trigger event._  |
|  void | [**hrtim\_adc\_trigger\_set\_postscaler**](#function-hrtim_adc_trigger_set_postscaler) (hrtim\_tu\_number\_t tu\_number, uint32\_t ps\_ratio) <br>_Sets the HRTIM event postsaler. Postscaler ratio indicates how many potential events will be ignored between two events which are effectively generated._  |
|  void | [**hrtim\_burst\_dis**](#function-hrtim_burst_dis) (void) <br>_Disable burst mode._  |
|  void | [**hrtim\_burst\_mode\_init**](#function-hrtim_burst_mode_init) (void) <br>_Initialize burst mode This mode permits to skip one or multiple PWM periods by idling the output on a low state. It is used in light load conditions to minimize switching losses._  |
|  void | [**hrtim\_burst\_set**](#function-hrtim_burst_set) (int bm\_cmp, int bm\_per) <br>_Set burst mode parameters._  |
|  void | [**hrtim\_burst\_start**](#function-hrtim_burst_start) (void) <br>_Starts burst mode. Burst mode won't stop until hrtim\_burst\_stop is called._  |
|  void | [**hrtim\_burst\_stop**](#function-hrtim_burst_stop) (void) <br>_Stops burst mode._  |
|  void | [**hrtim\_change\_frequency**](#function-hrtim_change_frequency) (uint32\_t new\_frequency) <br>_Change the frequency/period after it has been initialized._  |
|  void | [**hrtim\_cmpl\_pwm\_out1**](#function-hrtim_cmpl_pwm_out1) (hrtim\_tu\_number\_t tu\_number) <br>_Activates OUT 1 (switch H) with a given switching convention._  |
|  void | [**hrtim\_cmpl\_pwm\_out2**](#function-hrtim_cmpl_pwm_out2) (hrtim\_tu\_number\_t tu\_number) <br>_Activates OUT 2 (switch L) with a given switching convention._  |
|  void | [**hrtim\_cnt\_dis**](#function-hrtim_cnt_dis) (hrtim\_tu\_number\_t tu\_number) <br>_Disables a timing unit counter._  |
|  void | [**hrtim\_cnt\_en**](#function-hrtim_cnt_en) (hrtim\_tu\_number\_t tu\_number) <br>_Enables a timing unit counter._  |
|  void | [**hrtim\_dt\_init**](#function-hrtim_dt_init) (hrtim\_tu\_number\_t tu\_number) <br>_Initialize the dead-time for the PWM._  |
|  void | [**hrtim\_dt\_set**](#function-hrtim_dt_set) (hrtim\_tu\_number\_t tu\_number, uint16\_t rise\_ns, uint16\_t fall\_ns) <br>_Sets up a dead time in nano second for given complementary outputs._  |
|  void | [**hrtim\_duty\_cycle\_set**](#function-hrtim_duty_cycle_set) (hrtim\_tu\_number\_t tu\_number, uint16\_t value) <br>_Updates the duty cycle of a timing unit._  |
|  hrtim\_external\_trigger\_t | [**hrtim\_eev\_get**](#function-hrtim_eev_get) (hrtim\_tu\_number\_t tu\_number) <br>_Returns the external event trigger used in current mode._  |
|  void | [**hrtim\_eev\_set**](#function-hrtim_eev_set) (hrtim\_tu\_number\_t tu\_number, hrtim\_external\_trigger\_t eev) <br>_Sets the external event used in current mode for a timing unit._  |
|  void | [**hrtim\_frequency\_set**](#function-hrtim_frequency_set) (uint32\_t frequency\_set, uint32\_t frequency\_min) <br>_Sets the frequency of a given timing unit in Hz._  |
|  int | [**hrtim\_get\_apb2\_clock**](#function-hrtim_get_apb2_clock) () <br>_Gets the APB2 clock._  |
|  uint32\_t | [**hrtim\_get\_max\_frequency**](#function-hrtim_get_max_frequency) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the minimum frequency of the timing unit in Hertz._  |
|  uint16\_t | [**hrtim\_get\_max\_period**](#function-hrtim_get_max_period) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the maximum period of the timing unit in number of clock cycles._  |
|  uint32\_t | [**hrtim\_get\_min\_frequency**](#function-hrtim_get_min_frequency) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the minimum frequency of the timing unit in Hertz._  |
|  uint16\_t | [**hrtim\_get\_min\_period**](#function-hrtim_get_min_period) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the minimum period of the timing unit in number of clock cycles._  |
|  hrtim\_cnt\_t | [**hrtim\_get\_modulation**](#function-hrtim_get_modulation) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the switching convention of a given timing unit._  |
|  uint32\_t | [**hrtim\_get\_resolution\_ps**](#function-hrtim_get_resolution_ps) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the time resolution for a given timing unit._  |
|  hrtim\_tu\_ON\_OFF\_t | [**hrtim\_get\_status**](#function-hrtim_get_status) (hrtim\_tu\_number\_t tu\_number) <br>_Returns if the timer was initialized with default value or not._  |
|  hrtim\_switch\_convention\_t | [**hrtim\_get\_switch\_convention**](#function-hrtim_get_switch_convention) (hrtim\_tu\_number\_t tu\_number) <br>_Gets the switching convention of a given timing unit._  |
|  void | [**hrtim\_init\_default\_all**](#function-hrtim_init_default_all) () <br>_this function initalize all the default parameters for each timing unit structure_  |
|  void | [**hrtim\_master\_cmp\_set**](#function-hrtim_master_cmp_set) (hrtim\_cmp\_t cmp, uint16\_t value) <br>_Sets one of the four comparators of the HRTIM master timer._  |
|  void | [**hrtim\_out\_dis**](#function-hrtim_out_dis) (hrtim\_tu\_number\_t tu\_number) <br>_Disables the output of a given timingg unit._  |
|  void | [**hrtim\_out\_dis\_single**](#function-hrtim_out_dis_single) (hrtim\_output\_units\_t PWM\_OUT) <br>_Disables only one output of a given timing unit._  |
|  void | [**hrtim\_out\_en**](#function-hrtim_out_en) (hrtim\_tu\_number\_t tu\_number) <br>_Enables the output of a given timing unit._  |
|  void | [**hrtim\_out\_en\_single**](#function-hrtim_out_en_single) (hrtim\_output\_units\_t PWM\_OUT) <br>_Enables only one output of a given timing unit._  |
|  uint16\_t | [**hrtim\_period\_Master\_get**](#function-hrtim_period_master_get) () <br>_Returns the period of a master timer in number of clock cycles._  |
|  uint32\_t | [**hrtim\_period\_Master\_get\_us**](#function-hrtim_period_master_get_us) () <br>_Returns the period of the master timer in microseconds._  |
|  uint16\_t | [**hrtim\_period\_get**](#function-hrtim_period_get) (hrtim\_tu\_number\_t tu\_number) <br>_Returns the period of a given timing unit in number of clock cycles._  |
|  uint32\_t | [**hrtim\_period\_get\_us**](#function-hrtim_period_get_us) (hrtim\_tu\_number\_t tu\_number) <br>_Returns the period of a given timing unit in microseconds._  |
|  void | [**hrtim\_phase\_shift\_set**](#function-hrtim_phase_shift_set) (hrtim\_tu\_number\_t tu\_number, uint16\_t shift) <br>_Shifts the PWM of a timing unit._  |
|  hrtim\_pwm\_mode\_t | [**hrtim\_pwm\_mode\_get**](#function-hrtim_pwm_mode_get) (hrtim\_tu\_number\_t tu\_number) <br>_Returns timing unit pwm mode._  |
|  void | [**hrtim\_pwm\_mode\_set**](#function-hrtim_pwm_mode_set) (hrtim\_tu\_number\_t tu\_number, hrtim\_pwm\_mode\_t mode) <br>_Sets the pwm mode : voltage or current mode._  |
|  void | [**hrtim\_rst\_evt\_dis**](#function-hrtim_rst_evt_dis) (hrtim\_tu\_number\_t tu\_number, hrtim\_reset\_trig\_t evt) <br>_Disables a timer counter reset event._  |
|  void | [**hrtim\_rst\_evt\_en**](#function-hrtim_rst_evt_en) (hrtim\_tu\_number\_t tu\_number, hrtim\_reset\_trig\_t evt) <br>_Enables a timer counter reset event._  |
|  void | [**hrtim\_set\_modulation**](#function-hrtim_set_modulation) (hrtim\_tu\_number\_t tu\_number, hrtim\_cnt\_t modulation) <br>_Sets the switching convention of a given timing unit._  |
|  void | [**hrtim\_set\_switch\_convention**](#function-hrtim_set_switch_convention) (hrtim\_tu\_number\_t tu\_number, hrtim\_switch\_convention\_t convention) <br>_Sets the switching convention of a given timing unit._  |
|  void | [**hrtim\_tu\_cmp\_set**](#function-hrtim_tu_cmp_set) (hrtim\_tu\_number\_t tu\_number, hrtim\_cmp\_t cmp, uint16\_t value) <br>_Sets one of the four comparators of the HRTIM master timer._  |
|  void | [**hrtim\_tu\_gpio\_init**](#function-hrtim_tu_gpio_init) (hrtim\_tu\_number\_t tu\_number) <br>_Initializes the gpio elements of a given timing unit._  |
|  uint16\_t | [**hrtim\_tu\_init**](#function-hrtim_tu_init) (hrtim\_tu\_number\_t tu\_number) <br>_Initializes a given timing unit._  |




























## Public Attributes Documentation




### variable tu\_channel 

```C++
timer_hrtim_t* tu_channel[HRTIM_STU_NUMOF];
```




<hr>
## Public Functions Documentation




### function DualDAC\_init 

_Initializes dual DAC reset and trigger. The selected timing unit CMP2 will trigger the step (Decrement/Increment of sawtooth) and the reset (return to initial value)._ 
```C++
void DualDAC_init (
    hrtim_tu_number_t tu
) 
```





**Parameters:**


* `tu` timing unit 




        

<hr>



### function hrtim\_PeriodicEvent\_GetRep 

_Gets the current value of the repetition counter._ 
```C++
uint32_t hrtim_PeriodicEvent_GetRep (
    hrtim_tu_t tu
) 
```





**Parameters:**


* `tu_src` timing unit which will be the source for the ISR 
  * MSTR 
  * TIMA 
  * TIMB 
  * TIMC 
  * TIMD 
  * TIME 
  * TIMF 





**Returns:**

Value between 1 and 256 for the repetition counter: period of the event wrt. periods of the HRTIM. 





        

<hr>



### function hrtim\_PeriodicEvent\_SetRep 

_Changes the repetition counter value to control the ISR interrupt._ 
```C++
void hrtim_PeriodicEvent_SetRep (
    hrtim_tu_t tu,
    uint32_t repetition
) 
```





**Parameters:**


* `tu_src` timing unit which will be the source for the ISR: 
  * MSTR 
  * TIMA 
  * TIMB 
  * TIMC 
  * TIMD 
  * TIME 
  * TIMF 


* `repetion` value between 1 and 256 for the repetition counter: period of the event wrt. periods of the HRTIM. E.g. when set to 10, one event will be triggered every 10 HRTIM period. 




        

<hr>



### function hrtim\_PeriodicEvent\_configure 

_Configures interrupt on repetition counter for the chosen timing unit._ 
```C++
void hrtim_PeriodicEvent_configure (
    hrtim_tu_t tu,
    uint32_t repetition,
    hrtim_callback_t callback
) 
```





**Parameters:**


* `tu_src` timing unit which will be the source for the ISR: 
  * MSTR 
  * TIMA 
  * TIMB 
  * TIMC 
  * TIMD 
  * TIME 
  * TIMF 


* `repetition` value between 1 and 256 for the repetition counter: period of the event wrt. periods of the HRTIM. E.g. when set to 10, one event will be triggered every 10 HRTIM period. 
* `callback` Pointer to a void(void) function that will be called when the event is triggerred. 




        

<hr>



### function hrtim\_PeriodicEvent\_dis 

_Disables interrupt on repetition counter for the chosen timing unit._ 
```C++
void hrtim_PeriodicEvent_dis (
    hrtim_tu_t tu
) 
```





**Parameters:**


* `tu_src` timing unit which will be the source for the ISR: 
  * MSTR 
  * TIMA 
  * TIMB 
  * TIMC 
  * TIMD 
  * TIME 
  * TIMF 






        

<hr>



### function hrtim\_PeriodicEvent\_en 

_Enables interrupt on repetition counter for the chosen timing unit. The periodic event configuration must have been done previously._ 
```C++
void hrtim_PeriodicEvent_en (
    hrtim_tu_t tu
) 
```





**Parameters:**


* `tu_src` timing unit which will be the source for the ISR: 
  * MSTR 
  * TIMA 
  * TIMB 
  * TIMC 
  * TIMD 
  * TIME 
  * TIMF 






        

<hr>



### function hrtim\_adc\_rollover\_get 

_Returns the adc rollover mode._ 
```C++
hrtim_adc_edgetrigger_t hrtim_adc_rollover_get (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF





**Returns:**

adc\_rollover rollover mode : 
* EdgeTrigger\_up 
* EdgeTrigger\_down 
* EdgeTrigger\_Both 







        

<hr>



### function hrtim\_adc\_rollover\_set 

_Configures the adc rollover mode._ 
```C++
void hrtim_adc_rollover_set (
    hrtim_tu_number_t tu_number,
    hrtim_adc_edgetrigger_t adc_rollover
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF


* `adc_rollover` rollover mode 
  * EdgeTrigger\_up 
  * EdgeTrigger\_down 
  * EdgeTrigger\_Both 






        

<hr>



### function hrtim\_adc\_triger\_get 

_Returns the adc trigger._ 
```C++
hrtim_adc_trigger_t hrtim_adc_triger_get (
    hrtim_tu_number_t tu_number
) 
```





**Returns:**


* ADCTRIG\_1 = ADC trigger 1, 
* ADCTRIG\_2 = ADC trigger 2, 
* ADCTRIG\_3 = ADC trigger 3, 
* ADCTRIG\_4 = ADC trigger 4 







        

<hr>



### function hrtim\_adc\_triger\_set 

_Sets the adc trigger number for a timing unit._ 
```C++
void hrtim_adc_triger_set (
    hrtim_tu_number_t tu_number,
    hrtim_adc_trigger_t adc_trig
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF


* `adc_trig` pwm mode: 
  * ADCTRIG\_1 
  * ADCTRIG\_2 
  * ADCTRIG\_3 
  * ADCTRIG\_4 






        

<hr>



### function hrtim\_adc\_trigger\_dis 

_Disbables a ADCx trigger event._ 
```C++
void hrtim_adc_trigger_dis (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_adc\_trigger\_en 

_Configures and enables an ADC trigger event._ 
```C++
void hrtim_adc_trigger_en (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_adc\_trigger\_set\_postscaler 

_Sets the HRTIM event postsaler. Postscaler ratio indicates how many potential events will be ignored between two events which are effectively generated._ 
```C++
void hrtim_adc_trigger_set_postscaler (
    hrtim_tu_number_t tu_number,
    uint32_t ps_ratio
) 
```





**Parameters:**


* `ps_ratio` Post scaler ratio (0 = no post scaler, default) 




        

<hr>



### function hrtim\_burst\_dis 

_Disable burst mode._ 
```C++
void hrtim_burst_dis (
    void
) 
```




<hr>



### function hrtim\_burst\_mode\_init 

_Initialize burst mode This mode permits to skip one or multiple PWM periods by idling the output on a low state. It is used in light load conditions to minimize switching losses._ 
```C++
void hrtim_burst_mode_init (
    void
) 
```




<hr>



### function hrtim\_burst\_set 

_Set burst mode parameters._ 
```C++
void hrtim_burst_set (
    int bm_cmp,
    int bm_per
) 
```





**Parameters:**


* `bm_cmp` number of periods idle: 
* `bm_per` total number of period during a cycle (idle and active) 




        

<hr>



### function hrtim\_burst\_start 

_Starts burst mode. Burst mode won't stop until hrtim\_burst\_stop is called._ 
```C++
void hrtim_burst_start (
    void
) 
```




<hr>



### function hrtim\_burst\_stop 

_Stops burst mode._ 
```C++
void hrtim_burst_stop (
    void
) 
```




<hr>



### function hrtim\_change\_frequency 

_Change the frequency/period after it has been initialized._ 
```C++
void hrtim_change_frequency (
    uint32_t new_frequency
) 
```





**Parameters:**


* `new_frequency` The new frequency in Hz 



**Warning:**

the new frequency can't be inferior to the the one set in the initialization step 





        

<hr>



### function hrtim\_cmpl\_pwm\_out1 

_Activates OUT 1 (switch H) with a given switching convention._ 
```C++
void hrtim_cmpl_pwm_out1 (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_cmpl\_pwm\_out2 

_Activates OUT 2 (switch L) with a given switching convention._ 
```C++
void hrtim_cmpl_pwm_out2 (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_cnt\_dis 

_Disables a timing unit counter._ 
```C++
void hrtim_cnt_dis (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_cnt\_en 

_Enables a timing unit counter._ 
```C++
void hrtim_cnt_en (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_dt\_init 

_Initialize the dead-time for the PWM._ 
```C++
void hrtim_dt_init (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_dt\_set 

_Sets up a dead time in nano second for given complementary outputs._ 
```C++
void hrtim_dt_set (
    hrtim_tu_number_t tu_number,
    uint16_t rise_ns,
    uint16_t fall_ns
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `rise_ns` The desired dead time of the rising edge in nano second 
* `fall_ns` The desired dead time of the falling edge in nano second 




        

<hr>



### function hrtim\_duty\_cycle\_set 

_Updates the duty cycle of a timing unit._ 
```C++
void hrtim_duty_cycle_set (
    hrtim_tu_number_t tu_number,
    uint16_t value
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `value` The desired duty cycle value 




        

<hr>



### function hrtim\_eev\_get 

_Returns the external event trigger used in current mode._ 
```C++
hrtim_external_trigger_t hrtim_eev_get (
    hrtim_tu_number_t tu_number
) 
```





**Returns:**


* EEV1 = external event 1, 
* EEV2 = external event 2, 
* EEV3 = external event 3, 
* EEV4 = external event 4, 
* EEV5 = external event 5, 
* EEV6 = external event 6, 
* EEV7 = external event 7, 
* EEV8 = external event 8, 
* EEV9 = external event 9 







        

<hr>



### function hrtim\_eev\_set 

_Sets the external event used in current mode for a timing unit._ 
```C++
void hrtim_eev_set (
    hrtim_tu_number_t tu_number,
    hrtim_external_trigger_t eev
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF


* `adc_trig` pwm mode: 
  * EEV1 
  * EEV2 
  * EEV3 
  * EEV4 
  * EEV5 
  * EEV6 
  * EEV7 
  * EEV8 
  * EEV9 






        

<hr>



### function hrtim\_frequency\_set 

_Sets the frequency of a given timing unit in Hz._ 
```C++
void hrtim_frequency_set (
    uint32_t frequency_set,
    uint32_t frequency_min
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `tu_number` Timing unit number: 




        

<hr>



### function hrtim\_get\_apb2\_clock 

_Gets the APB2 clock._ 
```C++
int hrtim_get_apb2_clock () 
```




<hr>



### function hrtim\_get\_max\_frequency 

_Gets the minimum frequency of the timing unit in Hertz._ 
```C++
uint32_t hrtim_get_max_frequency (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

frequency in Hertz 





        

<hr>



### function hrtim\_get\_max\_period 

_Gets the maximum period of the timing unit in number of clock cycles._ 
```C++
uint16_t hrtim_get_max_period (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

period in number of clock cycles 





        

<hr>



### function hrtim\_get\_min\_frequency 

_Gets the minimum frequency of the timing unit in Hertz._ 
```C++
uint32_t hrtim_get_min_frequency (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

frequency in Hertz 





        

<hr>



### function hrtim\_get\_min\_period 

_Gets the minimum period of the timing unit in number of clock cycles._ 
```C++
uint16_t hrtim_get_min_period (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

period in number of clock cycles 





        

<hr>



### function hrtim\_get\_modulation 

_Gets the switching convention of a given timing unit._ 
```C++
hrtim_cnt_t hrtim_get_modulation (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

modulation: 
* Lft\_aligned, 
* UpDwn 







        

<hr>



### function hrtim\_get\_resolution\_ps 

_Gets the time resolution for a given timing unit._ 
```C++
uint32_t hrtim_get_resolution_ps (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

resolution in picoseconds 





        

<hr>



### function hrtim\_get\_status 

_Returns if the timer was initialized with default value or not._ 
```C++
hrtim_tu_ON_OFF_t hrtim_get_status (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

true or false 





        

<hr>



### function hrtim\_get\_switch\_convention 

_Gets the switching convention of a given timing unit._ 
```C++
hrtim_switch_convention_t hrtim_get_switch_convention (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

Switching convention of the given time unit 
* HIGH = 0, 
* LOW = 1 







        

<hr>



### function hrtim\_init\_default\_all 

_this function initalize all the default parameters for each timing unit structure_ 
```C++
void hrtim_init_default_all () 
```





**Warning:**

this function must be called before changing any timing unit parameters (frequency, phase\_shift) 





        

<hr>



### function hrtim\_master\_cmp\_set 

_Sets one of the four comparators of the HRTIM master timer._ 
```C++
void hrtim_master_cmp_set (
    hrtim_cmp_t cmp,
    uint16_t value
) 
```





**Parameters:**


* `cmp` Master comparators: 
  * MCMP1R = 1, 
  * MCMP2R = 2 
  * MCMP3R = 3, 
  * MCMP4R = 4 


* `value` Comparator new value to set: 




        

<hr>



### function hrtim\_out\_dis 

_Disables the output of a given timingg unit._ 
```C++
void hrtim_out_dis (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_out\_dis\_single 

_Disables only one output of a given timing unit._ 
```C++
void hrtim_out_dis_single (
    hrtim_output_units_t PWM_OUT
) 
```





**Parameters:**


* `PWM_OUT` Output pin to be chosen: 
  * PWMA1 
  * PWMA2 
  * PWMB1 
  * PWMB2 
  * PWMC1 
  * PWMC2 
  * PWMD1 
  * PWMD2 
  * PWME1 
  * PWME2 
  * PWMF1 
  * PWMF2 






        

<hr>



### function hrtim\_out\_en 

_Enables the output of a given timing unit._ 
```C++
void hrtim_out_en (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_out\_en\_single 

_Enables only one output of a given timing unit._ 
```C++
void hrtim_out_en_single (
    hrtim_output_units_t PWM_OUT
) 
```





**Parameters:**


* `PWM_OUT` Output pin to be chosen: 
  * PWMA1 
  * PWMA2 
  * PWMB1 
  * PWMB2 
  * PWMC1 
  * PWMC2 
  * PWMD1 
  * PWMD2 
  * PWME1 
  * PWME2 
  * PWMF1 
  * PWMF2 






        

<hr>



### function hrtim\_period\_Master\_get 

_Returns the period of a master timer in number of clock cycles._ 
```C++
uint16_t hrtim_period_Master_get () 
```





**Returns:**

Period of the master timer 





        

<hr>



### function hrtim\_period\_Master\_get\_us 

_Returns the period of the master timer in microseconds._ 
```C++
uint32_t hrtim_period_Master_get_us () 
```





**Returns:**

Period of the timer master in microseconds 





        

<hr>



### function hrtim\_period\_get 

_Returns the period of a given timing unit in number of clock cycles._ 
```C++
uint16_t hrtim_period_get (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

Period of the timing unit 





        

<hr>



### function hrtim\_period\_get\_us 

_Returns the period of a given timing unit in microseconds._ 
```C++
uint32_t hrtim_period_get_us (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

Period of the timing unit in microseconds 





        

<hr>



### function hrtim\_phase\_shift\_set 

_Shifts the PWM of a timing unit._ 
```C++
void hrtim_phase_shift_set (
    hrtim_tu_number_t tu_number,
    uint16_t shift
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `shift` The desired phase shift value 




        

<hr>



### function hrtim\_pwm\_mode\_get 

_Returns timing unit pwm mode._ 
```C++
hrtim_pwm_mode_t hrtim_pwm_mode_get (
    hrtim_tu_number_t tu_number
) 
```





**Returns:**

CURRENT\_MODE or VOLTAGE\_MODE 





        

<hr>



### function hrtim\_pwm\_mode\_set 

_Sets the pwm mode : voltage or current mode._ 
```C++
void hrtim_pwm_mode_set (
    hrtim_tu_number_t tu_number,
    hrtim_pwm_mode_t mode
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF


* `mode` pwm mode: 
  * VOLTAGE\_MODE 
  * CURRENT\_MODE 






        

<hr>



### function hrtim\_rst\_evt\_dis 

_Disables a timer counter reset event._ 
```C++
void hrtim_rst_evt_dis (
    hrtim_tu_number_t tu_number,
    hrtim_reset_trig_t evt
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `evt` Reset EVent: 
  * MSTR\_PER = LL\_HRTIM\_RESETTRIG\_MASTER\_PER, 
  * MSTR\_CMP1 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP1, 
  * MSTR\_CMP2 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP2, 
  * MSTR\_CMP3 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP3, 
  * MSTR\_CMP4 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP4, 
  * PWMA\_CMP2 = LL\_HRTIM\_RESETTRIG\_OTHER1\_CMP2 






        

<hr>



### function hrtim\_rst\_evt\_en 

_Enables a timer counter reset event._ 
```C++
void hrtim_rst_evt_en (
    hrtim_tu_number_t tu_number,
    hrtim_reset_trig_t evt
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `evt` Reset EVent: 
  * MSTR\_PER = LL\_HRTIM\_RESETTRIG\_MASTER\_PER, 
  * MSTR\_CMP1 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP1, 
  * MSTR\_CMP2 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP2, 
  * MSTR\_CMP3 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP3, 
  * MSTR\_CMP4 = LL\_HRTIM\_RESETTRIG\_MASTER\_CMP4, 
  * PWMA\_CMP2 = LL\_HRTIM\_RESETTRIG\_OTHER1\_CMP2 






        

<hr>



### function hrtim\_set\_modulation 

_Sets the switching convention of a given timing unit._ 
```C++
void hrtim_set_modulation (
    hrtim_tu_number_t tu_number,
    hrtim_cnt_t modulation
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `modulation` modulation: 
  * Lft\_aligned = LL\_HRTIM\_COUNTING\_MODE\_UP, 
  * UpDwn = LL\_HRTIM\_COUNTING\_MODE\_UP\_DOWN 






        

<hr>



### function hrtim\_set\_switch\_convention 

_Sets the switching convention of a given timing unit._ 
```C++
void hrtim_set_switch_convention (
    hrtim_tu_number_t tu_number,
    hrtim_switch_convention_t convention
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 


* `convention` Switching convention: 
  * PWMx1 
  * PWMx2 






        

<hr>



### function hrtim\_tu\_cmp\_set 

_Sets one of the four comparators of the HRTIM master timer._ 
```C++
void hrtim_tu_cmp_set (
    hrtim_tu_number_t tu_number,
    hrtim_cmp_t cmp,
    uint16_t value
) 
```





**Parameters:**


* `cmp` Master comparators: 
  * CMP1xR = 1, 
  * CMP2xR = 2, 
  * CMP3xR = 3, 
  * CMP4xR = 4 


* `value` Comparator new value to set: 




        

<hr>



### function hrtim\_tu\_gpio\_init 

_Initializes the gpio elements of a given timing unit._ 
```C++
void hrtim_tu_gpio_init (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 






        

<hr>



### function hrtim\_tu\_init 

_Initializes a given timing unit._ 
```C++
uint16_t hrtim_tu_init (
    hrtim_tu_number_t tu_number
) 
```





**Parameters:**


* `tu_number` Timing unit number: 
  * PWMA 
  * PWMB 
  * PWMC 
  * PWMD 
  * PWME 
  * PWMF 





**Returns:**

timing unit period 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_hrtim_driver/zephyr/public_api/hrtim.h`

