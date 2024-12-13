

# Class TimerHAL



[**ClassList**](annotated.md) **>** [**TimerHAL**](classTimerHAL.md)



_Handles timer 4 for the SPIN board._ [More...](#detailed-description)

* `#include <TimerHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**getTimer4IncrementalEncoderValue**](#function-gettimer4incrementalencodervalue) () <br>_Gets the encoder step value._  |
|  void | [**startLogTimer4IncrementalEncoder**](#function-startlogtimer4incrementalencoder) () <br>_Launches the timer4 which is adapted for reading an encoder._  |




























## Detailed Description




**Note:**

Use this element to initialize timer 4 and use it with an incremental encoder 





    
## Public Functions Documentation




### function getTimer4IncrementalEncoderValue 

_Gets the encoder step value._ 
```C++
uint32_t TimerHAL::getTimer4IncrementalEncoderValue () 
```





**Returns:**

An uint32 value of the counter which corresponds to the step of the system. 





        

<hr>



### function startLogTimer4IncrementalEncoder 

_Launches the timer4 which is adapted for reading an encoder._ 
```C++
void TimerHAL::startLogTimer4IncrementalEncoder () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/TimerHAL.h`

