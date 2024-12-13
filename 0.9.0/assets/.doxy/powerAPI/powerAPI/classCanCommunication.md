

# Class CanCommunication



[**ClassList**](annotated.md) **>** [**CanCommunication**](classCanCommunication.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**enableCan**](#function-enablecan) () <br>_Enable can._  |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  uint16\_t | [**getBroadcastPeriod**](#function-getbroadcastperiod) () <br>_Get the broadcast period._  |
|  uint16\_t | [**getCanNodeAddr**](#function-getcannodeaddr) () <br>_Get the CAN node address._  |
|  uint16\_t | [**getControlPeriod**](#function-getcontrolperiod) () <br>_Get the control period._  |
|  bool | [**getCtrlEnable**](#function-getctrlenable) () <br>_Get the control enable status._  |
|  float32\_t | [**getCtrlReference**](#function-getctrlreference) () <br>_Get the control reference value._  |
|  void | [**setBroadcastPeriod**](#function-setbroadcastperiod) (uint16\_t time\_100\_ms) <br>_Set the broadcast period._  |
|  void | [**setCanNodeAddr**](#function-setcannodeaddr) (uint16\_t addr) <br>_Set the CAN node address._  |
|  void | [**setControlPeriod**](#function-setcontrolperiod) (uint16\_t time\_100\_ms) <br>_Set the control period._  |
|  void | [**setCtrlEnable**](#function-setctrlenable) (bool enable) <br>_Set the control enable status._  |
|  void | [**setCtrlReference**](#function-setctrlreference) (float32\_t reference) <br>_Set the control reference value._  |


























## Public Functions Documentation




### function enableCan 

_Enable can._ 
```C++
void CanCommunication::enableCan () 
```




<hr>
## Public Static Functions Documentation




### function getBroadcastPeriod 

_Get the broadcast period._ 
```C++
static uint16_t CanCommunication::getBroadcastPeriod () 
```





**Returns:**

The broadcast period in 100 ms units. 





        

<hr>



### function getCanNodeAddr 

_Get the CAN node address._ 
```C++
static uint16_t CanCommunication::getCanNodeAddr () 
```





**Returns:**

The CAN node address. 





        

<hr>



### function getControlPeriod 

_Get the control period._ 
```C++
static uint16_t CanCommunication::getControlPeriod () 
```





**Returns:**

The control period in 100 ms units. 





        

<hr>



### function getCtrlEnable 

_Get the control enable status._ 
```C++
static bool CanCommunication::getCtrlEnable () 
```





**Returns:**

True if control is enabled, false otherwise. 





        

<hr>



### function getCtrlReference 

_Get the control reference value._ 
```C++
static float32_t CanCommunication::getCtrlReference () 
```





**Returns:**

The control reference value. 





        

<hr>



### function setBroadcastPeriod 

_Set the broadcast period._ 
```C++
static void CanCommunication::setBroadcastPeriod (
    uint16_t time_100_ms
) 
```





**Parameters:**


* `time_100_ms` The broadcast period (in multiple of 100 ms) to set. 




        

<hr>



### function setCanNodeAddr 

_Set the CAN node address._ 
```C++
static void CanCommunication::setCanNodeAddr (
    uint16_t addr
) 
```





**Parameters:**


* `addr` The CAN node address to set. 




        

<hr>



### function setControlPeriod 

_Set the control period._ 
```C++
static void CanCommunication::setControlPeriod (
    uint16_t time_100_ms
) 
```





**Parameters:**


* `time_100_ms` The control period (in multiple of 100 ms) to set. 




        

<hr>



### function setCtrlEnable 

_Set the control enable status._ 
```C++
static void CanCommunication::setCtrlEnable (
    bool enable
) 
```





**Parameters:**


* `enable` True to enable control, false to disable it. 




        

<hr>



### function setCtrlReference 

_Set the control reference value._ 
```C++
static void CanCommunication::setCtrlReference (
    float32_t reference
) 
```





**Parameters:**


* `reference` The control reference value to set. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/CanCommunication.h`

