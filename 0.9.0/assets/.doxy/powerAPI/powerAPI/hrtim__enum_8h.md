

# File hrtim\_enum.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_hrtim\_driver**](dir_9bdb70ffe78507e4a3f4bf6bbcfe5795.md) **>** [**zephyr**](dir_5726d3ce904599e290c14ea43bd5e0ac.md) **>** [**public\_api**](dir_f50115c0b0057abe0315b5e6b1574f35.md) **>** [**hrtim\_enum.h**](hrtim__enum_8h.md)

[Go to the source code of this file](hrtim__enum_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**adc\_hrtim\_conf\_t**](structadc__hrtim__conf__t.md) <br>_Structure containing information to setup adc events, adc source links and adc triggers._  |
| struct | [**comp\_usage\_conf\_t**](structcomp__usage__conf__t.md) <br>_Structure containing the status of the usage of comparators and their values._  |
| struct | [**gpio\_conf\_t**](structgpio__conf__t.md) <br>_Structure containing all the information of the gpio linked to a given timing unit._  |
| struct | [**phase\_shift\_conf\_t**](structphase__shift__conf__t.md) <br>_Structure containing all the data regarding phase shifting for a given timing unit._  |
| struct | [**pwm\_conf\_t**](structpwm__conf__t.md) <br>_Structure containing all the data regarding the pwm of a given timing unit._  |
| struct | [**switch\_conv\_conf\_t**](structswitch__conv__conf__t.md) <br>_Structure describing the switching convention of a given timing unit._  |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**hrtim\_adc\_edgetrigger\_t**](#enum-hrtim_adc_edgetrigger_t)  <br> |
| enum  | [**hrtim\_adc\_event\_t**](#enum-hrtim_adc_event_t)  <br>_HRTIM ADC event update._  |
| enum  | [**hrtim\_adc\_source\_t**](#enum-hrtim_adc_source_t)  <br>_HRTIM ADC Event Number and its associated source There are a huge number of possibilities, for now this code explores only a few._  |
| enum  | [**hrtim\_adc\_t**](#enum-hrtim_adc_t)  <br>_HRTIM ADC trigger registers definition._  |
| enum  | [**hrtim\_adc\_trigger\_t**](#enum-hrtim_adc_trigger_t)  <br>_HRTIM ADC trigger._  |
| typedef void(\* | [**hrtim\_callback\_t**](#typedef-hrtim_callback_t)  <br>_callback function_  |
| enum  | [**hrtim\_cmp\_t**](#enum-hrtim_cmp_t)  <br>_HRTIM comparators definition._  |
| enum  | [**hrtim\_cnt\_t**](#enum-hrtim_cnt_t)  <br>_HRTIM counting mode setting._  |
| enum  | [**hrtim\_comp\_usage\_t**](#enum-hrtim_comp_usage_t)  <br> |
| enum  | [**hrtim\_external\_trigger\_t**](#enum-hrtim_external_trigger_t)  <br>_External eventcoming from comparator used for current mode._  |
| enum  | [**hrtim\_gpio\_clock\_number\_t**](#enum-hrtim_gpio_clock_number_t)  <br>_HRTIM gpio clock units definition._  |
| enum  | [**hrtim\_out\_t**](#enum-hrtim_out_t)  <br>_timing unit output 1 or 2_  |
| enum  | [**hrtim\_output\_number\_t**](#enum-hrtim_output_number_t)  <br> |
| enum  | [**hrtim\_output\_reset\_t**](#enum-hrtim_output_reset_t)  <br>_HRTIM output reset units definition._  |
| enum  | [**hrtim\_output\_set\_t**](#enum-hrtim_output_set_t)  <br>_HRTIM output set units definition._  |
| enum  | [**hrtim\_output\_units\_t**](#enum-hrtim_output_units_t)  <br>_HRTIM output units definition._  |
| enum  | [**hrtim\_pwm\_mode\_t**](#enum-hrtim_pwm_mode_t)  <br>_Special PWM mode for current mode._  |
| enum  | [**hrtim\_reset\_trig\_t**](#enum-hrtim_reset_trig_t)  <br>_HRTIM reset trig source definitions._  |
| enum  | [**hrtim\_switch\_convention\_t**](#enum-hrtim_switch_convention_t)  <br>_HRTIM TU switch convention PWMx1 : control high-side mosfet PWMx2 : control low-side mosfet._  |
| enum  | [**hrtim\_tu\_ON\_OFF\_t**](#enum-hrtim_tu_on_off_t)  <br>_describe if a timing unit has been initialized_  |
| enum  | [**hrtim\_tu\_number\_t**](#enum-hrtim_tu_number_t)  <br>_HRTIM timing units number definition._  |
| enum  | [**hrtim\_tu\_t**](#enum-hrtim_tu_t)  <br>_HRTIM timing units definition._  |






## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**HRTIM\_CHANNELS**](#variable-hrtim_channels)   = `6`<br> |










































## Public Types Documentation




### enum hrtim\_adc\_edgetrigger\_t 

```C++
enum hrtim_adc_edgetrigger_t {
    EdgeTrigger_up = LL_HRTIM_ROLLOVER_MODE_PER,
    EdgeTrigger_down = LL_HRTIM_ROLLOVER_MODE_RST,
    EdgeTrigger_Both = LL_HRTIM_ROLLOVER_MODE_BOTH
};
```




<hr>



### enum hrtim\_adc\_event\_t 

_HRTIM ADC event update._ 
```C++
enum hrtim_adc_event_t {
    PWMA_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_A,
    PWMB_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_B,
    PWMC_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_C,
    PWMD_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_D,
    PWME_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_E,
    PWMF_UPDT = LL_HRTIM_ADCTRIG_UPDATE_TIMER_F
};
```




<hr>



### enum hrtim\_adc\_source\_t 

_HRTIM ADC Event Number and its associated source There are a huge number of possibilities, for now this code explores only a few._ 
```C++
enum hrtim_adc_source_t {
    TIMA_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMACMP3,
    TIMB_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMBCMP3,
    TIMC_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMCCMP3,
    TIMD_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMDCMP3,
    TIME_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMECMP3,
    TIMF_CMP3 = LL_HRTIM_ADCTRIG_SRC13_TIMFCMP3
};
```





**Warning:**

prioritize cmp3, cmp4 and cmp2 might be used for current mode, and cmp1 for duty cycle 





        

<hr>



### enum hrtim\_adc\_t 

_HRTIM ADC trigger registers definition._ 
```C++
enum hrtim_adc_t {
    ADC1R = 1,
    ADC2R = 2,
    ADC3R = 3,
    ADC4R = 4
};
```




<hr>



### enum hrtim\_adc\_trigger\_t 

_HRTIM ADC trigger._ 
```C++
enum hrtim_adc_trigger_t {
    ADCTRIG_1 = LL_HRTIM_ADCTRIG_1,
    ADCTRIG_2 = LL_HRTIM_ADCTRIG_2,
    ADCTRIG_3 = LL_HRTIM_ADCTRIG_3,
    ADCTRIG_4 = LL_HRTIM_ADCTRIG_4,
    ADCTRIG_NONE
};
```




<hr>



### typedef hrtim\_callback\_t 

_callback function_ 
```C++
typedef void(* hrtim_callback_t) ();
```




<hr>



### enum hrtim\_cmp\_t 

_HRTIM comparators definition._ 
```C++
enum hrtim_cmp_t {
    CMP1xR = 1,
    CMP2xR = 2,
    CMP3xR = 3,
    CMP4xR = 4,
    MCMP1R = 5,
    MCMP2R = 6,
    MCMP3R = 7,
    MCMP4R = 8,
    MCMPER = 10
};
```




<hr>



### enum hrtim\_cnt\_t 

_HRTIM counting mode setting._ 
```C++
enum hrtim_cnt_t {
    Lft_aligned = LL_HRTIM_COUNTING_MODE_UP,
    UpDwn = LL_HRTIM_COUNTING_MODE_UP_DOWN
};
```




<hr>



### enum hrtim\_comp\_usage\_t 

```C++
enum hrtim_comp_usage_t {
    USED = true,
    FREE = false
};
```



comparator usage for a timing unit 


        

<hr>



### enum hrtim\_external\_trigger\_t 

_External eventcoming from comparator used for current mode._ 
```C++
enum hrtim_external_trigger_t {
    EEV1 = LL_HRTIM_OUTPUTRESET_EEV_1,
    EEV2 = LL_HRTIM_OUTPUTRESET_EEV_2,
    EEV3 = LL_HRTIM_OUTPUTRESET_EEV_3,
    EEV4 = LL_HRTIM_OUTPUTRESET_EEV_4,
    EEV5 = LL_HRTIM_OUTPUTRESET_EEV_5,
    EEV6 = LL_HRTIM_OUTPUTRESET_EEV_6,
    EEV7 = LL_HRTIM_OUTPUTRESET_EEV_7,
    EEV8 = LL_HRTIM_OUTPUTRESET_EEV_8,
    EEV9 = LL_HRTIM_OUTPUTRESET_EEV_9
};
```




<hr>



### enum hrtim\_gpio\_clock\_number\_t 

_HRTIM gpio clock units definition._ 
```C++
enum hrtim_gpio_clock_number_t {
    CLK_GPIOA = LL_AHB2_GRP1_PERIPH_GPIOA,
    CLK_GPIOB = LL_AHB2_GRP1_PERIPH_GPIOB,
    CLK_GPIOC = LL_AHB2_GRP1_PERIPH_GPIOC
};
```




<hr>



### enum hrtim\_out\_t 

_timing unit output 1 or 2_ 
```C++
enum hrtim_out_t {
    OUT1 = 1,
    OUT2 = 2
};
```




<hr>



### enum hrtim\_output\_number\_t 

```C++
enum hrtim_output_number_t {
    TIMING_OUTPUT1,
    TIMING_OUTPUT2
};
```




<hr>



### enum hrtim\_output\_reset\_t 

_HRTIM output reset units definition._ 
```C++
enum hrtim_output_reset_t {
    RST_NONE = LL_HRTIM_OUTPUTRESET_NONE,
    RST_CMP1 = LL_HRTIM_OUTPUTRESET_TIMCMP1,
    RST_CMP2 = LL_HRTIM_OUTPUTRESET_TIMCMP2,
    RST_CMP3 = LL_HRTIM_OUTPUTRESET_TIMCMP3,
    RST_CMP4 = LL_HRTIM_OUTPUTRESET_TIMCMP4,
    RST_PER = LL_HRTIM_OUTPUTRESET_TIMPER
};
```




<hr>



### enum hrtim\_output\_set\_t 

_HRTIM output set units definition._ 
```C++
enum hrtim_output_set_t {
    SET_NONE = LL_HRTIM_OUTPUTSET_NONE,
    SET_CMP1 = LL_HRTIM_OUTPUTSET_TIMCMP1,
    SET_CMP2 = LL_HRTIM_OUTPUTSET_TIMCMP2,
    SET_CMP3 = LL_HRTIM_OUTPUTSET_TIMCMP3,
    SET_CMP4 = LL_HRTIM_OUTPUTSET_TIMCMP4,
    SET_PER = LL_HRTIM_OUTPUTSET_TIMPER
};
```




<hr>



### enum hrtim\_output\_units\_t 

_HRTIM output units definition._ 
```C++
enum hrtim_output_units_t {
    PWMA1 = LL_HRTIM_OUTPUT_TA1,
    PWMA2 = LL_HRTIM_OUTPUT_TA2,
    PWMB1 = LL_HRTIM_OUTPUT_TB1,
    PWMB2 = LL_HRTIM_OUTPUT_TB2,
    PWMC1 = LL_HRTIM_OUTPUT_TC1,
    PWMC2 = LL_HRTIM_OUTPUT_TC2,
    PWMD1 = LL_HRTIM_OUTPUT_TD1,
    PWMD2 = LL_HRTIM_OUTPUT_TD2,
    PWME1 = LL_HRTIM_OUTPUT_TE1,
    PWME2 = LL_HRTIM_OUTPUT_TE2,
    PWMF1 = LL_HRTIM_OUTPUT_TF1,
    PWMF2 = LL_HRTIM_OUTPUT_TF2
};
```




<hr>



### enum hrtim\_pwm\_mode\_t 

_Special PWM mode for current mode._ 
```C++
enum hrtim_pwm_mode_t {
    VOLTAGE_MODE = 0,
    CURRENT_MODE = 1
};
```




<hr>



### enum hrtim\_reset\_trig\_t 

_HRTIM reset trig source definitions._ 
```C++
enum hrtim_reset_trig_t {
    MSTR_PER = LL_HRTIM_RESETTRIG_MASTER_PER,
    MSTR_CMP1 = LL_HRTIM_RESETTRIG_MASTER_CMP1,
    MSTR_CMP2 = LL_HRTIM_RESETTRIG_MASTER_CMP2,
    MSTR_CMP3 = LL_HRTIM_RESETTRIG_MASTER_CMP3,
    MSTR_CMP4 = LL_HRTIM_RESETTRIG_MASTER_CMP4,
    PWMA_CMP2 = LL_HRTIM_RESETTRIG_OTHER1_CMP2
};
```




<hr>



### enum hrtim\_switch\_convention\_t 

_HRTIM TU switch convention PWMx1 : control high-side mosfet PWMx2 : control low-side mosfet._ 
```C++
enum hrtim_switch_convention_t {
    PWMx1 = 0,
    PWMx2 = 1
};
```




<hr>



### enum hrtim\_tu\_ON\_OFF\_t 

_describe if a timing unit has been initialized_ 
```C++
enum hrtim_tu_ON_OFF_t {
    UNIT_ON = true,
    UNIT_OFF = false
};
```




<hr>



### enum hrtim\_tu\_number\_t 

_HRTIM timing units number definition._ 
```C++
enum hrtim_tu_number_t {
    PWMA = 0,
    PWMB = 1,
    PWMC = 2,
    PWMD = 3,
    PWME = 4,
    PWMF = 5
};
```




<hr>



### enum hrtim\_tu\_t 

_HRTIM timing units definition._ 
```C++
enum hrtim_tu_t {
    TIMA = LL_HRTIM_TIMER_A,
    TIMB = LL_HRTIM_TIMER_B,
    TIMC = LL_HRTIM_TIMER_C,
    TIMD = LL_HRTIM_TIMER_D,
    TIME = LL_HRTIM_TIMER_E,
    TIMF = LL_HRTIM_TIMER_F,
    MSTR = LL_HRTIM_TIMER_MASTER
};
```




<hr>
## Public Static Attributes Documentation




### variable HRTIM\_CHANNELS 

```C++
const uint8_t HRTIM_CHANNELS;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_hrtim_driver/zephyr/public_api/hrtim_enum.h`

