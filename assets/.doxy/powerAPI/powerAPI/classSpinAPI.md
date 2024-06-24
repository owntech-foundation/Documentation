

# Class SpinAPI



[**ClassList**](annotated.md) **>** [**SpinAPI**](classSpinAPI.md)



_Contains all the elements linked to peripherals of the spin board._ 

* `#include <SpinAPI.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**AdcHAL**](classAdcHAL.md) | [**adc**](#variable-adc)  <br>_Contains all the function of the STM32 ADC including configuration and synchronization with the HRTIM._  |
|  [**CompHAL**](classCompHAL.md) | [**comp**](#variable-comp)  <br>_Contains all the function of the STM32 comparator used with the current mode._  |
|  [**DacHAL**](classDacHAL.md) | [**dac**](#variable-dac)  <br>_Contains all the function of the STM32 DAC used to generate signals and handle the current mode._  |
|  [**GpioHAL**](classGpioHAL.md) | [**gpio**](#variable-gpio)  <br>_Contains all the functions for the spin gpio._  |
|  [**LedHAL**](classLedHAL.md) | [**led**](#variable-led)  <br>_Contains all the function of the embedded LED._  |
|  [**NgndHAL**](classNgndHAL.md) | [**ngnd**](#variable-ngnd)  <br>_Contains all the function of the NGND switch compatible with TWISTs prior to 1.4._  |
|  [**PwmHAL**](classPwmHAL.md) | [**pwm**](#variable-pwm)  <br>_Contains all the function of the STM32 hrtim PWM generator._  |
|  [**TimerHAL**](classTimerHAL.md) | [**timer**](#variable-timer)  <br>_Contains all the function of the STM32 Timer4 functions that handle the encoder._  |
|  [**UartHAL**](classUartHAL.md) | [**uart**](#variable-uart)  <br>_Contains all the function of the STM32 Usart1 functions._  |
|  [**VersionHAL**](classVersionHAL.md) | [**version**](#variable-version)  <br>_Contains all the function related to the versioning of the microcontroller boards._  |












































## Public Attributes Documentation




### variable adc 

```C++
AdcHAL SpinAPI::adc;
```




<hr>



### variable comp 

```C++
CompHAL SpinAPI::comp;
```




<hr>



### variable dac 

```C++
DacHAL SpinAPI::dac;
```




<hr>



### variable gpio 

```C++
GpioHAL SpinAPI::gpio;
```




<hr>



### variable led 

```C++
LedHAL SpinAPI::led;
```




<hr>



### variable ngnd 

```C++
NgndHAL SpinAPI::ngnd;
```




<hr>



### variable pwm 

```C++
PwmHAL SpinAPI::pwm;
```




<hr>



### variable timer 

```C++
TimerHAL SpinAPI::timer;
```




<hr>



### variable uart 

```C++
UartHAL SpinAPI::uart;
```




<hr>



### variable version 

```C++
VersionHAL SpinAPI::version;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/public_api/SpinAPI.h`

