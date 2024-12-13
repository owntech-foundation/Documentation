

# Class AnalogCommunication



[**ClassList**](annotated.md) **>** [**AnalogCommunication**](classAnalogCommunication.md)












































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  float32\_t | [**getAnalogCommValue**](#function-getanalogcommvalue) () <br>_Get the analog value._  |
|  void | [**init**](#function-init) () <br>_Initializing analog communication (ADC and DAC)_  |
|  void | [**setAnalogCommValue**](#function-setanalogcommvalue) (uint32\_t analog\_bus\_value) <br>_Set the analog value, the DAC output._  |


























## Public Static Functions Documentation




### function getAnalogCommValue 

_Get the analog value._ 
```C++
static float32_t AnalogCommunication::getAnalogCommValue () 
```





**Returns:**

Analog value (A value between 0 and 4096) 





        

<hr>



### function init 

_Initializing analog communication (ADC and DAC)_ 
```C++
static void AnalogCommunication::init () 
```




<hr>



### function setAnalogCommValue 

_Set the analog value, the DAC output._ 
```C++
static void AnalogCommunication::setAnalogCommValue (
    uint32_t analog_bus_value
) 
```





**Parameters:**


* `analog_bus_value` A value between 0 and 4096 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/AnalogCommunication.h`

