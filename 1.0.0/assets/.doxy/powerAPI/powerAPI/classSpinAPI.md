

# Class SpinAPI



[**ClassList**](annotated.md) **>** [**SpinAPI**](classSpinAPI.md)



_Contains all the elements linked to peripherals of the spin board._ 

* `#include <SpinAPI.h>`























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  [**CompHAL**](classCompHAL.md) | [**comp**](#variable-comp)  <br>_Contains all the function of the STM32 comparator used with the current mode._  |
|  [**DacHAL**](classDacHAL.md) | [**dac**](#variable-dac)  <br>_Contains all the function of the STM32 DAC used to generate signals and handle the current mode._  |
|  [**DataAPI**](classDataAPI.md) | [**data**](#variable-data)  <br>_Data acquisition from SPIN ADCs._  |
|  [**GpioHAL**](classGpioHAL.md) | [**gpio**](#variable-gpio)  <br>_Contains all the functions for the spin gpio._  |
|  [**LedHAL**](classLedHAL.md) | [**led**](#variable-led)  <br>_Contains all the function of the embedded LED._  |
|  [**PwmHAL**](classPwmHAL.md) | [**pwm**](#variable-pwm)  <br>_Contains all the function of the STM32 hrtim PWM generator._  |
|  [**TimerHAL**](classTimerHAL.md) | [**timer**](#variable-timer)  <br>_Contains all the function of the STM32 Timer4 functions that handle the encoder._  |
|  [**UartHAL**](classUartHAL.md) | [**uart**](#variable-uart)  <br>_Contains all the function of the STM32 Usart1 functions._  |










































## Public Static Attributes Documentation




### variable comp 

_Contains all the function of the STM32 comparator used with the current mode._ 
```C++
CompHAL SpinAPI::comp;
```




<hr>



### variable dac 

_Contains all the function of the STM32 DAC used to generate signals and handle the current mode._ 
```C++
DacHAL SpinAPI::dac;
```




<hr>



### variable data 

_Data acquisition from SPIN ADCs._ 
```C++
DataAPI SpinAPI::data;
```




<hr>



### variable gpio 

_Contains all the functions for the spin gpio._ 
```C++
GpioHAL SpinAPI::gpio;
```




<hr>



### variable led 

_Contains all the function of the embedded LED._ 
```C++
LedHAL SpinAPI::led;
```




<hr>



### variable pwm 

_Contains all the function of the STM32 hrtim PWM generator._ 
```C++
PwmHAL SpinAPI::pwm;
```




<hr>



### variable timer 

_Contains all the function of the STM32 Timer4 functions that handle the encoder._ 
```C++
TimerHAL SpinAPI::timer;
```




<hr>



### variable uart 

_Contains all the function of the STM32 Usart1 functions._ 
```C++
UartHAL SpinAPI::uart;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/public_api/SpinAPI.h`

