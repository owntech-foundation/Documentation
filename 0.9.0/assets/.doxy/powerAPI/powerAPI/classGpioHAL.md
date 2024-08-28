

# Class GpioHAL



[**ClassList**](annotated.md) **>** [**GpioHAL**](classGpioHAL.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configurePin**](#function-configurepin) (uint8\_t pin, gpio\_flags\_t flags) <br>_Configure an I/O pin. This must be done prior to accessing any other function from this API on the pin._  |
|  uint8\_t | [**readPin**](#function-readpin) (uint8\_t pin) <br>_Get the current value of a pin configured as input._  |
|  void | [**resetPin**](#function-resetpin) (uint8\_t pin) <br>_Reset the value of a pin configured as output to 0._  |
|  void | [**setPin**](#function-setpin) (uint8\_t pin) <br>_Set the value of a pin configured as output to 1._  |
|  void | [**togglePin**](#function-togglepin) (uint8\_t pin) <br>_Toggle the value of a pin configured as output:_  |
|  void | [**writePin**](#function-writepin) (uint8\_t pin, uint8\_t value) <br>_Set the value of a pin configured as output to a given value._  |




























## Public Functions Documentation




### function configurePin 

_Configure an I/O pin. This must be done prior to accessing any other function from this API on the pin._ 
```C++
void GpioHAL::configurePin (
    uint8_t pin,
    gpio_flags_t flags
) 
```





**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 
* `flags` Pin configuration flags. Authorized values:
  * INPUT
  * INPUT\_PULLUP
  * OUTPUT 






        

<hr>



### function readPin 

_Get the current value of a pin configured as input._ 
```C++
uint8_t GpioHAL::readPin (
    uint8_t pin
) 
```





**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 



**Returns:**

Current value (0 or 1) of the pin. 





        

<hr>



### function resetPin 

_Reset the value of a pin configured as output to 0._ 
```C++
void GpioHAL::resetPin (
    uint8_t pin
) 
```





**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 




        

<hr>



### function setPin 

_Set the value of a pin configured as output to 1._ 
```C++
void GpioHAL::setPin (
    uint8_t pin
) 
```





**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 




        

<hr>



### function togglePin 

_Toggle the value of a pin configured as output:_ 
```C++
void GpioHAL::togglePin (
    uint8_t pin
) 
```




* if pin value is 1, it will be set to 0
* if pin value is 0, it will be set to 1.






**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 




        

<hr>



### function writePin 

_Set the value of a pin configured as output to a given value._ 
```C++
void GpioHAL::writePin (
    uint8_t pin,
    uint8_t value
) 
```





**Parameters:**


* `pin` Number of the Spin pin OR STM32-style name of the pin, e.g. PA1, PB10, etc. See pin\_t type for the full list of available STM32-style pins on Spin board. 
* `value` Value (0 or 1) to assign to the pin. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/GpioHAL.h`

