

# File Rs485.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**Rs485.cpp**](Rs485_8cpp.md)

[Go to the source code of this file](Rs485_8cpp_source.md)
























## Public Attributes

| Type | Name |
| ---: | :--- |
|  struct uart\_event | [**evt**](#variable-evt)  <br> |
|  struct uart\_config | [**uart\_cfg**](#variable-uart_cfg)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**baud**](#variable-baud)   = = 21250000 / (2)<br> |
|  const struct device \* | [**dma1**](#variable-dma1)   = = DEVICE\_DT\_GET(DT\_NODELABEL(dma1))<br> |
|  uint16\_t | [**dma\_buffer\_size**](#variable-dma_buffer_size)  <br> |
|  uint8\_t \* | [**rx\_usart\_val**](#variable-rx_usart_val)  <br> |
|  uint8\_t \* | [**tx\_usart\_val**](#variable-tx_usart_val)  <br> |
|  const struct device \* | [**uart\_dev**](#variable-uart_dev)   = = DEVICE\_DT\_GET(DT\_NODELABEL(usart3))<br> |
|  dma\_callbackRXfunc\_t | [**user\_fnc**](#variable-user_fnc)   = = NULL<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**dma\_channel\_init\_rx**](#function-dma_channel_init_rx) () <br>_initialize dma 1 channel 7 for receiving data in circular mode_  |
|  void | [**dma\_channel\_init\_tx**](#function-dma_channel_init_tx) () <br>_initialize dma 1 channel 6 for sending data via USART3._  |
|  void | [**init\_DEmode**](#function-init_demode) (void) <br>_initialize Driver Enable mode for RS485 hardware flowcontrol. pin B14 is set to level high when data is transmitted._  |
|  void | [**init\_usrBaudrate**](#function-init_usrbaudrate) (uint32\_t usr\_baud) <br>_initialize baudrate with user choice._  |
|  void | [**init\_usrBuffer**](#function-init_usrbuffer) (uint8\_t \* tx\_buffer, uint8\_t \* rx\_buffer) <br>_initialize user transmission and reception buffer_  |
|  void | [**init\_usrDataSize**](#function-init_usrdatasize) (uint16\_t size) <br>_initialize DMA data size to send and receive_  |
|  void | [**init\_usrFunc**](#function-init_usrfunc) (dma\_callbackRXfunc\_t fnc\_callback) <br>_initialize user function called every RX callback_  |
|  void | [**oversamp\_set**](#function-oversamp_set) (usart\_oversampling\_t oversampling) <br>_set oversampling which is by default oversampling\_16. With oversampling\_8 we increase speed by 2 but decrease USART sampling by half making it more sensitive to noise._  |
|  void | [**serial\_init**](#function-serial_init) (void) <br>_initialize USART3_  |
|  void | [**serial\_start**](#function-serial_start) () <br>_enable usart_  |
|  void | [**serial\_stop**](#function-serial_stop) () <br>_disable usart_  |
|  void | [**serial\_tx\_on**](#function-serial_tx_on) () <br>_reload dma buffer TX_  |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**\_dma\_callback\_rx**](#function-_dma_callback_rx) () <br> |
|  void | [**\_dma\_callback\_tx**](#function-_dma_callback_tx) (const struct device \* dev, void \* user\_data, uint32\_t channel, int status) <br> |


























## Public Attributes Documentation




### variable evt 

```C++
struct uart_event evt;
```




<hr>



### variable uart\_cfg 

```C++
struct uart_config uart_cfg;
```




<hr>
## Public Static Attributes Documentation




### variable baud 

```C++
uint32_t baud;
```




<hr>



### variable dma1 

```C++
const struct device* dma1;
```




<hr>



### variable dma\_buffer\_size 

```C++
uint16_t dma_buffer_size;
```




<hr>



### variable rx\_usart\_val 

```C++
uint8_t* rx_usart_val;
```




<hr>



### variable tx\_usart\_val 

```C++
uint8_t* tx_usart_val;
```




<hr>



### variable uart\_dev 

```C++
const struct device* uart_dev;
```




<hr>



### variable user\_fnc 

```C++
dma_callbackRXfunc_t user_fnc;
```




<hr>
## Public Functions Documentation




### function dma\_channel\_init\_rx 

_initialize dma 1 channel 7 for receiving data in circular mode_ 
```C++
void dma_channel_init_rx () 
```



DMA channel RX initialization, this channel is set on circular mode. 


        

<hr>



### function dma\_channel\_init\_tx 

_initialize dma 1 channel 6 for sending data via USART3._ 
```C++
void dma_channel_init_tx () 
```



This is the TX dma channel initialization. The channel is not enabled here to avoid sending data unexpectedly, this channel is enabled only with serial\_tx\_on when data must be sent. 


        

<hr>



### function init\_DEmode 

_initialize Driver Enable mode for RS485 hardware flowcontrol. pin B14 is set to level high when data is transmitted._ 
```C++
void init_DEmode (
    void
) 
```



Initialize driver enable mode for RS485 flowcontrol. See RM0440 37.5.20 for more details. 


        

<hr>



### function init\_usrBaudrate 

_initialize baudrate with user choice._ 
```C++
void init_usrBaudrate (
    uint32_t usr_baud
) 
```



Initialize baudrate by user 


        

<hr>



### function init\_usrBuffer 

_initialize user transmission and reception buffer_ 
```C++
void init_usrBuffer (
    uint8_t * tx_buffer,
    uint8_t * rx_buffer
) 
```



Initialize RX and TX buffer by user 


        

<hr>



### function init\_usrDataSize 

_initialize DMA data size to send and receive_ 
```C++
void init_usrDataSize (
    uint16_t size
) 
```



Set the size of data we send ie. the number of bytes. eg. : size = 5 means that we send 5 byte (40 bits) of data to USART 3. 


        

<hr>



### function init\_usrFunc 

_initialize user function called every RX callback_ 
```C++
void init_usrFunc (
    dma_callbackRXfunc_t fnc_callback
) 
```



Initialize usr function to use in the RX callback 


        

<hr>



### function oversamp\_set 

_set oversampling which is by default oversampling\_16. With oversampling\_8 we increase speed by 2 but decrease USART sampling by half making it more sensitive to noise._ 
```C++
void oversamp_set (
    usart_oversampling_t oversampling
) 
```



Set the oversampling. See RM0440 37.5.7 for more details. 


        

<hr>



### function serial\_init 

_initialize USART3_ 
```C++
void serial_init (
    void
) 
```



This function initialise USART3 peripheral 


        

<hr>



### function serial\_start 

_enable usart_ 
```C++
void serial_start () 
```



to start or restart communication 


        

<hr>



### function serial\_stop 

_disable usart_ 
```C++
void serial_stop () 
```



to stop communication 


        

<hr>



### function serial\_tx\_on 

_reload dma buffer TX_ 
```C++
void serial_tx_on () 
```



Reload DMA TX buffer. This functions enable TX channel to start sending the datas 


        

<hr>
## Public Static Functions Documentation




### function \_dma\_callback\_rx 


```C++
static void _dma_callback_rx () 
```



DMA callback RX clear reception flag, then call user functions 


        

<hr>



### function \_dma\_callback\_tx 


```C++
static void _dma_callback_tx (
    const struct device * dev,
    void * user_data,
    uint32_t channel,
    int status
) 
```



DMA callback TX clear transmission flag, and disabled DMA channel TX. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/Rs485.cpp`

