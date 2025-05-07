

# File power\_init.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**src**](dir_cc8f80e4cf83a61a7635b2e9633862a2.md) **>** [**power\_init.h**](power__init_8h.md)

[Go to the source code of this file](power__init_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**cm\_dac\_t**](#enum-cm_dac_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  adc\_t | [**dt\_adc**](#variable-dt_adc)  <br> |
|  uint32\_t | [**dt\_adc\_decim**](#variable-dt_adc_decim)  <br> |
|  uint16\_t | [**dt\_current\_pin**](#variable-dt_current_pin)  <br> |
|  hrtim\_adc\_edgetrigger\_t | [**dt\_edge\_trigger**](#variable-dt_edge_trigger)  <br> |
|  uint16\_t | [**dt\_falling\_deadtime**](#variable-dt_falling_deadtime)  <br> |
|  uint8\_t | [**dt\_leg\_count**](#variable-dt_leg_count)  <br> |
|  hrtim\_cnt\_t | [**dt\_modulation**](#variable-dt_modulation)  <br> |
|  uint8\_t | [**dt\_output1\_inactive**](#variable-dt_output1_inactive)  <br> |
|  uint8\_t | [**dt\_output2\_inactive**](#variable-dt_output2_inactive)  <br> |
|  int16\_t | [**dt\_phase\_shift**](#variable-dt_phase_shift)  <br> |
|  uint16\_t | [**dt\_pin\_capacitor**](#variable-dt_pin_capacitor)  <br> |
|  uint16\_t | [**dt\_pin\_driver**](#variable-dt_pin_driver)  <br> |
|  uint16\_t | [**dt\_pwm\_pin**](#variable-dt_pwm_pin)  <br> |
|  uint16\_t | [**dt\_pwm\_x1\_high**](#variable-dt_pwm_x1_high)  <br> |
|  uint16\_t | [**dt\_rising\_deadtime**](#variable-dt_rising_deadtime)  <br> |
|  uint32\_t | [**timer\_frequency**](#variable-timer_frequency)  <br> |
|  uint32\_t | [**timer\_min\_frequency**](#variable-timer_min_frequency)  <br> |












































## Public Types Documentation




### enum cm\_dac\_t 

```C++
enum cm_dac_t {
    CM_DAC_NONE = 0,
    CM_DAC1 = 25,
    CM_DAC3 = 30
};
```



Enum to define which DAC to use for current mode 


        

<hr>
## Public Attributes Documentation




### variable dt\_adc 

```C++
adc_t dt_adc[];
```



Define an array `dt_adc` of type `adc_t` and initialize it with an array of `adc` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_adc\_decim 

```C++
uint32_t dt_adc_decim[];
```



Define an array `dt_adc_decim` of type `uint32_t` and initialize it with an array of `adc_decim` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_current\_pin 

```C++
uint16_t dt_current_pin[];
```



Define an array `dt_current_pin` of type `uint16` and initialize it with an array of `curent_pin_num` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_edge\_trigger 

```C++
hrtim_adc_edgetrigger_t dt_edge_trigger[];
```



Define an array `dt_rollover` of type `hrtim_adc_rollover_t` and initialize it with an array of `roll_over` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_falling\_deadtime 

```C++
uint16_t dt_falling_deadtime[];
```



Define an array `dt_falling_deadtime` of type `uint16_t` and initialize it with an array of falling dead time values from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_leg\_count 

```C++
uint8_t dt_leg_count;
```



Define a variable `dt_leg_count` and initialize it with the count of children with status `OKAY` under the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_modulation 

```C++
hrtim_cnt_t dt_modulation[];
```



Define an array `dt_modulation` of type `hrtim_cnt_t` and initialize it with an array of `modulation` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_output1\_inactive 

```C++
uint8_t dt_output1_inactive[];
```



Define an array `dt_output1_inactive` of type `uint8_t` and initialize it with an array of `output1_inactive` values from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_output2\_inactive 

```C++
uint8_t dt_output2_inactive[];
```



Define an array `dt_output2_inactive` of type `uint8_t` and initialize it with an array of `output2_inactive` values from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_phase\_shift 

```C++
int16_t dt_phase_shift[];
```



Define an array `dt_phase_shift` of type `int16_t` and initialize it with an array of `phase_shift` property from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_pin\_capacitor 

```C++
uint16_t dt_pin_capacitor[];
```



Define an array `dt_pin_driver` of type `uint16` and initialize it with an array of `capa_pin_num` values from the children of the Device Tree node with ID `POWER_SHIELD_ID` 


        

<hr>



### variable dt\_pin\_driver 

```C++
uint16_t dt_pin_driver[];
```



Define an array `dt_pin_driver` of type `uint16` and initialize it with an array of `driver_pin_num` values from the children of the Device Tree node with ID `POWER_SHIELD_ID` 


        

<hr>



### variable dt\_pwm\_pin 

```C++
uint16_t dt_pwm_pin[];
```



Define an array `dt_pwm_pin` of type `hrtim_tu_number_t` and initialize it with an array containing the first element of `pwm_pin_num` properties from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_pwm\_x1\_high 

```C++
uint16_t dt_pwm_x1_high[];
```



Define an array `dt_pwm_x1_high` and initialize it with an array of `timing_unit` properties from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable dt\_rising\_deadtime 

```C++
uint16_t dt_rising_deadtime[];
```



Define an array `dt_rising_deadtime` of type `uint16_t` and initialize it with an array of rising dead time values from the children of the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable timer\_frequency 

```C++
uint32_t timer_frequency;
```



Define a variable `timer_frequency` and initialize it with the `frequency` property from the Device Tree node with the ID `POWER_SHIELD_ID`. 


        

<hr>



### variable timer\_min\_frequency 

```C++
uint32_t timer_min_frequency;
```



Define a variable 'timer\_min\_frequency' and initialize it with the 'min-frequency' property from the Device Tree node with the ID 'POWER\_SHIELD\_ID'. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_shield_api/zephyr/src/power_init.h`

