

# Class CanCommunication



[**ClassList**](annotated.md) **>** [**CanCommunication**](classCanCommunication.md)












































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  bool | [**getBroadcastEnable**](#function-getbroadcastenable) () <br>_Get the Broadcasting enable status._  |
|  uint16\_t | [**getBroadcastPeriod**](#function-getbroadcastperiod) () <br>_Get the broadcast period._  |
|  uint16\_t | [**getCanNodeAddr**](#function-getcannodeaddr) () <br>_Get the CAN node address._  |
|  uint16\_t | [**getControlPeriod**](#function-getcontrolperiod) () <br>_Get the control period._  |
|  bool | [**getCtrlEnable**](#function-getctrlenable) () <br>_Get the control enable status._  |
|  float32\_t | [**getCtrlReference**](#function-getctrlreference) () <br>_Get the control reference value._  |
|  float32\_t | [**getStartStopState**](#function-getstartstopstate) () <br>_Get the start - stop current order._  |
|  void | [**setBroadcastEnable**](#function-setbroadcastenable) (bool enable) <br>_Set the Broadcasting enable status._  |
|  void | [**setBroadcastPeriod**](#function-setbroadcastperiod) (uint16\_t time\_s) <br>_Set the broadcast period._  |
|  void | [**setCanNodeAddr**](#function-setcannodeaddr) (uint16\_t addr) <br>_Set the CAN node address._  |
|  void | [**setControlPeriod**](#function-setcontrolperiod) (uint16\_t time\_ms) <br>_Set the control period._  |
|  void | [**setCtrlEnable**](#function-setctrlenable) (bool enable) <br>_Set the control enable status._  |
|  void | [**setCtrlReference**](#function-setctrlreference) (float32\_t reference) <br>_Set the control reference value._  |
|  void | [**startSlaveDevice**](#function-startslavedevice) () <br>_Set the order to start slave devices._  |
|  void | [**stopSlaveDevice**](#function-stopslavedevice) () <br>_Set the order to stop slave devices._  |


























## Public Static Functions Documentation




### function getBroadcastEnable 

_Get the Broadcasting enable status._ 
```C++
static bool CanCommunication::getBroadcastEnable () 
```





**Returns:**

True if broadcasting is enabled, false otherwise. 





        

<hr>



### function getBroadcastPeriod 

_Get the broadcast period._ 
```C++
static uint16_t CanCommunication::getBroadcastPeriod () 
```





**Returns:**

The broadcast period in seconds (s). 





        

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

The control period in milli seconds (ms). 





        

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



### function getStartStopState 

_Get the start - stop current order._ 
```C++
static float32_t CanCommunication::getStartStopState () 
```





**Returns:**

A boolean that is 1 is current order is start, 0 if stop. 





        

<hr>



### function setBroadcastEnable 

_Set the Broadcasting enable status._ 
```C++
static void CanCommunication::setBroadcastEnable (
    bool enable
) 
```





**Parameters:**


* `enable` True to enable broadcasting, false to disable it. 




        

<hr>



### function setBroadcastPeriod 

_Set the broadcast period._ 
```C++
static void CanCommunication::setBroadcastPeriod (
    uint16_t time_s
) 
```





**Parameters:**


* `time_s` The broadcast period in seconds (s). 




        

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
    uint16_t time_ms
) 
```





**Parameters:**


* `time_ms` The control period in milli seconds (ms). 




        

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



### function startSlaveDevice 

_Set the order to start slave devices._ 
```C++
static void CanCommunication::startSlaveDevice () 
```




<hr>



### function stopSlaveDevice 

_Set the order to stop slave devices._ 
```C++
static void CanCommunication::stopSlaveDevice () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/CanCommunication.h`

