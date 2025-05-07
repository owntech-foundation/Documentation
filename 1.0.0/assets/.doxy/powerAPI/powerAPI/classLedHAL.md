

# Class LedHAL



[**ClassList**](annotated.md) **>** [**LedHAL**](classLedHAL.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**toggle**](#function-toggle) () <br>_Toggle the LED state._  |
|  void | [**turnOff**](#function-turnoff) () <br>_Turn the LED off._  |
|  void | [**turnOn**](#function-turnon) () <br>_Turn the LED on._  |




























## Public Functions Documentation




### function toggle 

_Toggle the LED state._ 
```C++
void LedHAL::toggle () 
```



Changes the LED state from on to off or vice versa.


Performs lazy initialization if not already done. 


        

<hr>



### function turnOff 

_Turn the LED off._ 
```C++
void LedHAL::turnOff () 
```



Ensures the LED is initialized, then sets the output state to inactive. 


        

<hr>



### function turnOn 

_Turn the LED on._ 
```C++
void LedHAL::turnOn () 
```



Ensures the LED is initialized, then sets the output state to active. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/LedHAL.h`

