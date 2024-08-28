

# File GpioHAL.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**GpioHAL.cpp**](GpioHAL_8cpp.md)

[Go to the source code of this file](GpioHAL_8cpp_source.md)
























## Public Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \*const | [**GPIO\_A**](#variable-gpio_a)   = = DEVICE\_DT\_GET(DT\_NODELABEL(gpioa))<br>_Owntech GPIO API._  |
|  const struct device \*const | [**GPIO\_B**](#variable-gpio_b)   = = DEVICE\_DT\_GET(DT\_NODELABEL(gpiob))<br> |
|  const struct device \*const | [**GPIO\_C**](#variable-gpio_c)   = = DEVICE\_DT\_GET(DT\_NODELABEL(gpioc))<br> |
|  const struct device \*const | [**GPIO\_D**](#variable-gpio_d)   = = DEVICE\_DT\_GET(DT\_NODELABEL(gpiod))<br> |
|  const gpio\_flags\_t | [**INPUT**](#variable-input)   = = GPIO\_INPUT<br> |
|  const gpio\_flags\_t | [**INPUT\_PULLUP**](#variable-input_pullup)   = = GPIO\_INPUT \| GPIO\_PULL\_UP<br> |
|  const gpio\_flags\_t | [**OUTPUT**](#variable-output)   = = GPIO\_OUTPUT<br> |












































## Public Attributes Documentation




### variable GPIO\_A 

_Owntech GPIO API._ 
```C++
const struct device* const GPIO_A;
```





**Date:**

2023




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 





        

<hr>



### variable GPIO\_B 

```C++
const struct device* const GPIO_B;
```




<hr>



### variable GPIO\_C 

```C++
const struct device* const GPIO_C;
```




<hr>



### variable GPIO\_D 

```C++
const struct device* const GPIO_D;
```




<hr>



### variable INPUT 

```C++
const gpio_flags_t INPUT;
```




<hr>



### variable INPUT\_PULLUP 

```C++
const gpio_flags_t INPUT_PULLUP;
```




<hr>



### variable OUTPUT 

```C++
const gpio_flags_t OUTPUT;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/GpioHAL.cpp`

