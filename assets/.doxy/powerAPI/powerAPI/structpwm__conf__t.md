

# Struct pwm\_conf\_t



[**ClassList**](annotated.md) **>** [**pwm\_conf\_t**](structpwm__conf__t.md)



_Structure containing all the data regarding the pwm of a given timing unit._ 

* `#include <hrtim_enum.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint8\_t | [**ckpsc**](#variable-ckpsc)  <br> |
|  uint16\_t | [**duty\_cycle**](#variable-duty_cycle)  <br> |
|  hrtim\_external\_trigger\_t | [**external\_trigger**](#variable-external_trigger)  <br> |
|  uint16\_t | [**fall\_dead\_time**](#variable-fall_dead_time)  <br> |
|  uint32\_t | [**frequency**](#variable-frequency)  <br> |
|  hrtim\_cnt\_t | [**modulation**](#variable-modulation)  <br> |
|  uint16\_t | [**period**](#variable-period)  <br> |
|  hrtim\_pwm\_mode\_t | [**pwm\_mode**](#variable-pwm_mode)  <br> |
|  hrtim\_tu\_t | [**pwm\_tu**](#variable-pwm_tu)  <br> |
|  uint16\_t | [**rise\_dead\_time**](#variable-rise_dead_time)  <br> |
|  hrtim\_tu\_ON\_OFF\_t | [**unit\_on**](#variable-unit_on)  <br> |












































## Public Attributes Documentation




### variable ckpsc 

```C++
uint8_t pwm_conf_t::ckpsc;
```




<hr>



### variable duty\_cycle 

```C++
uint16_t pwm_conf_t::duty_cycle;
```




<hr>



### variable external\_trigger 

```C++
hrtim_external_trigger_t pwm_conf_t::external_trigger;
```




<hr>



### variable fall\_dead\_time 

```C++
uint16_t pwm_conf_t::fall_dead_time;
```




<hr>



### variable frequency 

```C++
uint32_t pwm_conf_t::frequency;
```




<hr>



### variable modulation 

```C++
hrtim_cnt_t pwm_conf_t::modulation;
```




<hr>



### variable period 

```C++
uint16_t pwm_conf_t::period;
```




<hr>



### variable pwm\_mode 

```C++
hrtim_pwm_mode_t pwm_conf_t::pwm_mode;
```




<hr>



### variable pwm\_tu 

```C++
hrtim_tu_t pwm_conf_t::pwm_tu;
```




<hr>



### variable rise\_dead\_time 

```C++
uint16_t pwm_conf_t::rise_dead_time;
```




<hr>



### variable unit\_on 

```C++
hrtim_tu_ON_OFF_t pwm_conf_t::unit_on;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_hrtim_driver/zephyr/public_api/hrtim_enum.h`

