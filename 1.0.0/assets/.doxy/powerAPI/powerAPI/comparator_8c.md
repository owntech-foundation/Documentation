

# File comparator.c



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_comparator\_driver**](dir_5e1fc12cba5504c19e6728f660c9416f.md) **>** [**zephyr**](dir_d1334978536d898e33969dcd9ce58335.md) **>** [**public\_api**](dir_cd6387a1b9260a1118a1ac8d0c26218a.md) **>** [**comparator.c**](comparator_8c.md)

[Go to the source code of this file](comparator_8c_source.md)








































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**comparator1\_init**](#function-comparator1_init) () <br>_Initialize comparator_ `COMP1` _with predefined settings._ |
|  void | [**comparator3\_init**](#function-comparator3_init) () <br>_Initialize comparator_ `COMP3` _with predefined settings._ |




























## Public Functions Documentation




### function comparator1\_init 

_Initialize comparator_ `COMP1` _with predefined settings._
```C++
void comparator1_init () 
```



This function configures `GPIO` and comparator settings for `COMP1`:



* Sets `PA1` as the positive input (`COMP1_INP`) in analog mode.
* Routes `DAC3` Channel 1 as the negative input.
* Configures non-inverting output, no hysteresis, and no blanking source.
* Disables related EXTI line (line 21) events and interrupts.
* Applies voltage scaler stabilization delay.
* Enables the comparator. 




        

<hr>



### function comparator3\_init 

_Initialize comparator_ `COMP3` _with predefined settings._
```C++
void comparator3_init () 
```



This function configures `GPIO` and comparator settings for `COMP3`:



* Sets `PC1` as the positive input (`COMP3_INP`) in analog mode.
* Routes `DAC1` Channel 1 as the negative input.
* Configures non-inverting output, no hysteresis, and no blanking source.
* Disables related EXTI line (line 29) events and interrupts.
* Applies voltage scaler stabilization delay.
* Enables the comparator. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_comparator_driver/zephyr/public_api/comparator.c`

