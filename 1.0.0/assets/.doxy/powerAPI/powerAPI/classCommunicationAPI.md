

# Class CommunicationAPI



[**ClassList**](annotated.md) **>** [**CommunicationAPI**](classCommunicationAPI.md)



_Main communication API interface._ [More...](#detailed-description)

* `#include <CommunicationAPI.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**AnalogCommunication**](classAnalogCommunication.md) | [**analog**](#variable-analog)  <br>_Contains all the functions for Analog communication._  |
|  [**CanCommunication**](classCanCommunication.md) | [**can**](#variable-can)  <br>_Contains all the functions for CAN communication._  |
|  [**Rs485Communication**](classRs485Communication.md) | [**rs485**](#variable-rs485)  <br>_Contains all the functions for RS485 communication._  |
|  [**SyncCommunication**](classSyncCommunication.md) | [**sync**](#variable-sync)  <br>_Contains all the functions for Real Time synchronization._  |












































## Detailed Description


This class provides access to all supported communication interfaces, including analog, CAN, RS485, and real-time synchronization protocols.



* `analog`: provides analog communication functions.
* `can`: provides CAN bus communication functions.
* `rs485`: provides RS485 serial communication functions.
* `sync`: provides real-time synchronization functions. 




    
## Public Attributes Documentation




### variable analog 

_Contains all the functions for Analog communication._ 
```C++
AnalogCommunication CommunicationAPI::analog;
```




<hr>



### variable can 

_Contains all the functions for CAN communication._ 
```C++
CanCommunication CommunicationAPI::can;
```




<hr>



### variable rs485 

_Contains all the functions for RS485 communication._ 
```C++
Rs485Communication CommunicationAPI::rs485;
```




<hr>



### variable sync 

_Contains all the functions for Real Time synchronization._ 
```C++
SyncCommunication CommunicationAPI::sync;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/public_api/CommunicationAPI.h`

