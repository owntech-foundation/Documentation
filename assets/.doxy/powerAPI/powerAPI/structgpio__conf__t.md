

# Struct gpio\_conf\_t



[**ClassList**](annotated.md) **>** [**gpio\_conf\_t**](structgpio__conf__t.md)



_Structure containing all the information of the gpio linked to a given timing unit._ 

* `#include <hrtim_enum.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  hrtim\_output\_units\_t | [**OUT\_H**](#variable-out_h)  <br> |
|  hrtim\_output\_units\_t | [**OUT\_L**](#variable-out_l)  <br> |
|  LL\_GPIO\_InitTypeDef | [**switch\_H**](#variable-switch_h)  <br> |
|  LL\_GPIO\_InitTypeDef | [**switch\_L**](#variable-switch_l)  <br> |
|  hrtim\_gpio\_clock\_number\_t | [**tu\_gpio\_CLK**](#variable-tu_gpio_clk)  <br> |
|  GPIO\_TypeDef \* | [**unit**](#variable-unit)  <br> |












































## Public Attributes Documentation




### variable OUT\_H 

```C++
hrtim_output_units_t gpio_conf_t::OUT_H;
```




<hr>



### variable OUT\_L 

```C++
hrtim_output_units_t gpio_conf_t::OUT_L;
```




<hr>



### variable switch\_H 

```C++
LL_GPIO_InitTypeDef gpio_conf_t::switch_H;
```




<hr>



### variable switch\_L 

```C++
LL_GPIO_InitTypeDef gpio_conf_t::switch_L;
```




<hr>



### variable tu\_gpio\_CLK 

```C++
hrtim_gpio_clock_number_t gpio_conf_t::tu_gpio_CLK;
```




<hr>



### variable unit 

```C++
GPIO_TypeDef* gpio_conf_t::unit;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_hrtim_driver/zephyr/public_api/hrtim_enum.h`

