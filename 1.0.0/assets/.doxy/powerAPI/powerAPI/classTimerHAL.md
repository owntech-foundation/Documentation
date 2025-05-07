

# Class TimerHAL



[**ClassList**](annotated.md) **>** [**TimerHAL**](classTimerHAL.md)



_Handles timer 4 for the SPIN board._ [More...](#detailed-description)

* `#include <TimerHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**getIncrementalEncoderValue**](#function-getincrementalencodervalue) (timernumber\_t timer\_number) <br>_Gets the encoder step value._  |
|  void | [**startLogIncrementalEncoder**](#function-startlogincrementalencoder) (timernumber\_t timer\_number) <br>_Launches the timer4 which is adapted for reading an encoder._  |




























## Detailed Description




**Note:**

Use this element to initialize timer 4 and use it with an incremental encoder 





    
## Public Functions Documentation




### function getIncrementalEncoderValue 

_Gets the encoder step value._ 
```C++
uint32_t TimerHAL::getIncrementalEncoderValue (
    timernumber_t timer_number
) 
```





**Returns:**

An uint32 value of the counter which corresponds to the step of the system. 





        

<hr>



### function startLogIncrementalEncoder 

_Launches the timer4 which is adapted for reading an encoder._ 
```C++
void TimerHAL::startLogIncrementalEncoder (
    timernumber_t timer_number
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/TimerHAL.h`

