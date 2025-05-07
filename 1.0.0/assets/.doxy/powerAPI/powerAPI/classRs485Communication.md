

# Class Rs485Communication



[**ClassList**](annotated.md) **>** [**Rs485Communication**](classRs485Communication.md)



[More...](#detailed-description)

* `#include <Rs485Communication.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configure**](#function-configure) (uint8\_t \* transmission\_buffer, uint8\_t \* reception\_buffer, uint16\_t data\_size, void(\*)() user\_function, rs485\_speed\_t data\_speed=SPEED\_10M) <br>_Configuration for RS485 communication using a 10Mbit/s speed._  |
|  void | [**configureCustom**](#function-configurecustom) (uint8\_t \* transmission\_buffer, uint8\_t \* reception\_buffer, uint16\_t data\_size, void(\*)(void) user\_function, uint32\_t baudrate, bool oversampling\_8) <br>_Custom configuration for RS485 communication to choose the communication speed._  |
|  void | [**startTransmission**](#function-starttransmission) () <br>_Start a transmission i.e. you send what is contained in the transmission buffer._  |
|  void | [**turnOffCommunication**](#function-turnoffcommunication) () <br>_Turn off the RS485._  |
|  void | [**turnOnCommunication**](#function-turnoncommunication) () <br>_Turn on the RS485 communication._  |




























## Detailed Description


Static class definition 


    
## Public Functions Documentation




### function configure 

_Configuration for RS485 communication using a 10Mbit/s speed._ 
```C++
void Rs485Communication::configure (
    uint8_t * transmission_buffer,
    uint8_t * reception_buffer,
    uint16_t data_size,
    void(*)() user_function,
    rs485_speed_t data_speed=SPEED_10M
) 
```





**Parameters:**


* `transmission_buffer` Pointer to the transmitted buffer 
* `reception_buffer` Pointer to the received buffer 
* `data_size` Size of the sent and received data (in byte) 
* `user_function` Callback function called when we received data 
* `data_speed` Transmission speed (by default to 10Mbits/s) `SPEED_2M`,`SPEED_5M`,`SPEED_10M`,`SPEED_20M`



**Warning:**

The size of transmission\_buffer and reception\_buffer must be the same 





        

<hr>



### function configureCustom 

_Custom configuration for RS485 communication to choose the communication speed._ 
```C++
void Rs485Communication::configureCustom (
    uint8_t * transmission_buffer,
    uint8_t * reception_buffer,
    uint16_t data_size,
    void(*)(void) user_function,
    uint32_t baudrate,
    bool oversampling_8
) 
```





**Parameters:**


* `transmission_buffer` Pointer to the transmitted buffer 
* `reception_buffer` Pointer to the received buffer 
* `data_size` Size of the sent and received data (in byte) 
* `user_function` Callback function called when we received data 
* `baudrate` Communication speed in bit/s 
* `oversampling_8` True for oversampling (and multiply communication speed by 2), False if you want to keep the normal speed communication



**Warning:**

The size of transmission\_buffer and reception\_buffer must be the same 





        

<hr>



### function startTransmission 

_Start a transmission i.e. you send what is contained in the transmission buffer._ 
```C++
void Rs485Communication::startTransmission () 
```




<hr>



### function turnOffCommunication 

_Turn off the RS485._ 
```C++
void Rs485Communication::turnOffCommunication () 
```




<hr>



### function turnOnCommunication 

_Turn on the RS485 communication._ 
```C++
void Rs485Communication::turnOnCommunication () 
```





**Warning:**

The RS485 is automatically turned on when initializing with configureDefault or configure, no need to call this function 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/Rs485Communication.h`

