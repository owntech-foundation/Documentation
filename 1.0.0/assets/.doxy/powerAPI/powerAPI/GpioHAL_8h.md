

# File GpioHAL.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**GpioHAL.h**](GpioHAL_8h.md)

[Go to the source code of this file](GpioHAL_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**GpioHAL**](classGpioHAL.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum uint8\_t | [**pin\_t**](#enum-pin_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \*const | [**GPIO\_A**](#variable-gpio_a)  <br>_Owntech GPIO API._  |
|  const struct device \*const | [**GPIO\_B**](#variable-gpio_b)  <br> |
|  const struct device \*const | [**GPIO\_C**](#variable-gpio_c)  <br> |
|  const struct device \*const | [**GPIO\_D**](#variable-gpio_d)  <br> |
|  const gpio\_flags\_t | [**INPUT**](#variable-input)  <br> |
|  const gpio\_flags\_t | [**INPUT\_PULLUP**](#variable-input_pullup)  <br> |
|  const gpio\_flags\_t | [**OUTPUT**](#variable-output)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**P0**](#variable-p0)   = `0x0`<br> |
|  const uint8\_t | [**P1**](#variable-p1)   = `0x1`<br> |
|  const uint8\_t | [**P10**](#variable-p10)   = `0xA`<br> |
|  const uint8\_t | [**P11**](#variable-p11)   = `0xB`<br> |
|  const uint8\_t | [**P12**](#variable-p12)   = `0xC`<br> |
|  const uint8\_t | [**P13**](#variable-p13)   = `0xD`<br> |
|  const uint8\_t | [**P14**](#variable-p14)   = `0xE`<br> |
|  const uint8\_t | [**P15**](#variable-p15)   = `0xF`<br> |
|  const uint8\_t | [**P2**](#variable-p2)   = `0x2`<br> |
|  const uint8\_t | [**P3**](#variable-p3)   = `0x3`<br> |
|  const uint8\_t | [**P4**](#variable-p4)   = `0x4`<br> |
|  const uint8\_t | [**P5**](#variable-p5)   = `0x5`<br> |
|  const uint8\_t | [**P6**](#variable-p6)   = `0x6`<br> |
|  const uint8\_t | [**P7**](#variable-p7)   = `0x7`<br> |
|  const uint8\_t | [**P8**](#variable-p8)   = `0x8`<br> |
|  const uint8\_t | [**P9**](#variable-p9)   = `0x9`<br> |
|  const uint8\_t | [**PA**](#variable-pa)   = `0x80 \| 0x00`<br> |
|  const uint8\_t | [**PB**](#variable-pb)   = `0x80 \| 0x10`<br> |
|  const uint8\_t | [**PC**](#variable-pc)   = `0x80 \| 0x20`<br> |
|  const uint8\_t | [**PD**](#variable-pd)   = `0x80 \| 0x30`<br> |










































## Public Types Documentation




### enum pin\_t 

```C++
enum pin_t {
    PA0 = PA | P0,
    PA1 = PA | P1,
    PA2 = PA | P2,
    PA3 = PA | P3,
    PA4 = PA | P4,
    PA5 = PA | P5,
    PA6 = PA | P6,
    PA7 = PA | P7,
    PA8 = PA | P8,
    PA9 = PA | P9,
    PA10 = PA | P10,
    PA11 = PA | P11,
    PA12 = PA | P12,
    PA13 = PA | P13,
    PA14 = PA | P14,
    PA15 = PA | P15,
    PB0 = PB | P0,
    PB1 = PB | P1,
    PB2 = PB | P2,
    PB3 = PB | P3,
    PB4 = PB | P4,
    PB5 = PB | P5,
    PB6 = PB | P6,
    PB7 = PB | P7,
    PB8 = PB | P8,
    PB9 = PB | P9,
    PB10 = PB | P10,
    PB11 = PB | P11,
    PB12 = PB | P12,
    PB13 = PB | P13,
    PB14 = PB | P14,
    PB15 = PB | P15,
    PC0 = PC | P0,
    PC1 = PC | P1,
    PC2 = PC | P2,
    PC3 = PC | P3,
    PC4 = PC | P4,
    PC5 = PC | P5,
    PC6 = PC | P6,
    PC7 = PC | P7,
    PC8 = PC | P8,
    PC9 = PC | P9,
    PC10 = PC | P10,
    PC11 = PC | P11,
    PC12 = PC | P12,
    PC13 = PC | P13,
    PC14 = PC | P14,
    PC15 = PC | P15,
    PD0 = PD | P0,
    PD1 = PD | P1,
    PD2 = PD | P2,
    PD3 = PD | P3
};
```



Public types 


        

<hr>
## Public Attributes Documentation




### variable GPIO\_A 

_Owntech GPIO API._ 
```C++
const struct device* const GPIO_A;
```



Public constants




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
## Public Static Attributes Documentation




### variable P0 

```C++
const uint8_t P0;
```




<hr>



### variable P1 

```C++
const uint8_t P1;
```




<hr>



### variable P10 

```C++
const uint8_t P10;
```




<hr>



### variable P11 

```C++
const uint8_t P11;
```




<hr>



### variable P12 

```C++
const uint8_t P12;
```




<hr>



### variable P13 

```C++
const uint8_t P13;
```




<hr>



### variable P14 

```C++
const uint8_t P14;
```




<hr>



### variable P15 

```C++
const uint8_t P15;
```




<hr>



### variable P2 

```C++
const uint8_t P2;
```




<hr>



### variable P3 

```C++
const uint8_t P3;
```




<hr>



### variable P4 

```C++
const uint8_t P4;
```




<hr>



### variable P5 

```C++
const uint8_t P5;
```




<hr>



### variable P6 

```C++
const uint8_t P6;
```




<hr>



### variable P7 

```C++
const uint8_t P7;
```




<hr>



### variable P8 

```C++
const uint8_t P8;
```




<hr>



### variable P9 

```C++
const uint8_t P9;
```




<hr>



### variable PA 

```C++
const uint8_t PA;
```




<hr>



### variable PB 

```C++
const uint8_t PB;
```




<hr>



### variable PC 

```C++
const uint8_t PC;
```




<hr>



### variable PD 

```C++
const uint8_t PD;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/GpioHAL.h`

