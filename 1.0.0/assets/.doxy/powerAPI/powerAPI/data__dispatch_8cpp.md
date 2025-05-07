

# File data\_dispatch.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**data\_dispatch.cpp**](data__dispatch_8cpp.md)

[Go to the source code of this file](data__dispatch_8cpp_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  uint16\_t \*\*\*\* | [**adc\_channel\_buffers**](#variable-adc_channel_buffers)   = `nullptr`<br> |
|  uint32\_t \*\* | [**buffers\_data\_count**](#variable-buffers_data_count)   = `nullptr`<br> |
|  uint8\_t \*\* | [**current\_buffer**](#variable-current_buffer)   = `nullptr`<br> |
|  uint8\_t | [**current\_dma\_buffer**](#variable-current_dma_buffer)   = `{0}`<br> |
|  dispatch\_t | [**dispatch\_type**](#variable-dispatch_type)  <br> |
|  size\_t | [**dma\_buffer\_sizes**](#variable-dma_buffer_sizes)   = `{0}`<br> |
|  uint16\_t \* | [**dma\_main\_buffers**](#variable-dma_main_buffers)   = `{0}`<br> |
|  uint16\_t \* | [**dma\_secondary\_buffers**](#variable-dma_secondary_buffers)   = `{0}`<br> |
|  uint8\_t \* | [**enabled\_channels\_count**](#variable-enabled_channels_count)   = `nullptr`<br> |
|  uint16\_t \*\* | [**peek\_memory**](#variable-peek_memory)   = `nullptr`<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  \_\_STATIC\_INLINE uint16\_t \* | [**\_data\_dispatch\_get\_buffer**](#function-_data_dispatch_get_buffer) (uint8\_t adc\_index, uint8\_t channel\_index) <br> |
|  \_\_STATIC\_INLINE uint32\_t | [**\_data\_dispatch\_get\_count**](#function-_data_dispatch_get_count) (uint8\_t adc\_index, uint8\_t channel\_index) <br> |
|  \_\_STATIC\_INLINE void | [**\_data\_dispatch\_increment\_count**](#function-_data_dispatch_increment_count) (uint8\_t adc\_index, uint8\_t channel\_index) <br> |
|  \_\_STATIC\_INLINE void | [**\_data\_dispatch\_swap\_buffers**](#function-_data_dispatch_swap_buffers) (uint8\_t adc\_index, uint8\_t channel\_index) <br> |
|  void | [**data\_dispatch\_do\_dispatch**](#function-data_dispatch_do_dispatch) (uint8\_t adc\_number) <br>_Dispatch function: gets the readings and store them in per-channel arrays. This function is called by DMA callback when the DMA has filled one of its buffers._  |
|  void | [**data\_dispatch\_do\_full\_dispatch**](#function-data_dispatch_do_full_dispatch) () <br>_Function to proceed to all chanels dispatch when it is done at uninterruptible task start._  |
|  uint16\_t \* | [**data\_dispatch\_get\_acquired\_values**](#function-data_dispatch_get_acquired_values) (uint8\_t adc\_number, uint8\_t channel\_rank, uint32\_t & number\_of\_values\_acquired) <br>_Obtain data for a specific channel. The data is provided as an array of values and the count of data in this buffer is returned as an output parameter._  |
|  void | [**data\_dispatch\_init**](#function-data_dispatch_init) (dispatch\_t dispatch\_method, uint32\_t repetitions) <br>_Init function to be called first._  |
|  uint16\_t | [**data\_dispatch\_peek\_acquired\_value**](#function-data_dispatch_peek_acquired_value) (uint8\_t adc\_number, uint8\_t channel\_rank) <br>_Peek data for a specific channel: obtain the latest value from the channel without removing it from the buffer._  |




























## Public Static Attributes Documentation




### variable adc\_channel\_buffers 

```C++
uint16_t**** adc_channel_buffers;
```



Array of per-adc/per-channel buffers. adc\_channel\_buffers[x][y][z][] is ADC x+1 channel y buffer z with z either 0 or 1 as there are two buffers per channel (double buffering) 


        

<hr>



### variable buffers\_data\_count 

```C++
uint32_t** buffers_data_count;
```



Number of readings stored in each channel. buffers\_data\_count[x][y] is the current number of values stored in the currently written buffer of ADC x+1 Channel y 


        

<hr>



### variable current\_buffer 

```C++
uint8_t** current_buffer;
```



Currently written buffer for each channel. Either 0 or 1. If current\_buffer[x][y] is 0, the currently written buffer for ADC x+1 Channel y is buffer 0 and the user buffer is buffer 1 


        

<hr>



### variable current\_dma\_buffer 

```C++
uint8_t current_dma_buffer[ADC_COUNT];
```




<hr>



### variable dispatch\_type 

```C++
dispatch_t dispatch_type;
```




<hr>



### variable dma\_buffer\_sizes 

```C++
size_t dma_buffer_sizes[ADC_COUNT];
```




<hr>



### variable dma\_main\_buffers 

```C++
uint16_t* dma_main_buffers[ADC_COUNT];
```



DMA buffers: data from the ADC 1/2 are stored in these buffers until dispatch is done (ADC 3/4 won't use DMA). Main buffers are always used, while secondary buffers will only be used when double-buffering is activated. Double buffering is activated in Interrupt mode, while Task mode doesn't need it. 


        

<hr>



### variable dma\_secondary\_buffers 

```C++
uint16_t* dma_secondary_buffers[ADC_COUNT];
```




<hr>



### variable enabled\_channels\_count 

```C++
uint8_t* enabled_channels_count;
```



Local variables 


        

<hr>



### variable peek\_memory 

```C++
uint16_t** peek_memory;
```



Small memory to retain latest value available to the peek() function after a buffer swap. 


        

<hr>
## Public Functions Documentation




### function \_data\_dispatch\_get\_buffer 

```C++
__STATIC_INLINE uint16_t * _data_dispatch_get_buffer (
    uint8_t adc_index,
    uint8_t channel_index
) 
```



Private Functions 


        

<hr>



### function \_data\_dispatch\_get\_count 

```C++
__STATIC_INLINE uint32_t _data_dispatch_get_count (
    uint8_t adc_index,
    uint8_t channel_index
) 
```




<hr>



### function \_data\_dispatch\_increment\_count 

```C++
__STATIC_INLINE void _data_dispatch_increment_count (
    uint8_t adc_index,
    uint8_t channel_index
) 
```




<hr>



### function \_data\_dispatch\_swap\_buffers 

```C++
__STATIC_INLINE void _data_dispatch_swap_buffers (
    uint8_t adc_index,
    uint8_t channel_index
) 
```




<hr>



### function data\_dispatch\_do\_dispatch 

_Dispatch function: gets the readings and store them in per-channel arrays. This function is called by DMA callback when the DMA has filled one of its buffers._ 
```C++
void data_dispatch_do_dispatch (
    uint8_t adc_number
) 
```





**Parameters:**


* `adc_number` Number of the ADC from which data comes. 




        

<hr>



### function data\_dispatch\_do\_full\_dispatch 

_Function to proceed to all chanels dispatch when it is done at uninterruptible task start._ 
```C++
void data_dispatch_do_full_dispatch () 
```




<hr>



### function data\_dispatch\_get\_acquired\_values 

_Obtain data for a specific channel. The data is provided as an array of values and the count of data in this buffer is returned as an output parameter._ 
```C++
uint16_t * data_dispatch_get_acquired_values (
    uint8_t adc_number,
    uint8_t channel_rank,
    uint32_t & number_of_values_acquired
) 
```



Accessors 


        

<hr>



### function data\_dispatch\_init 

_Init function to be called first._ 
```C++
void data_dispatch_init (
    dispatch_t dispatch_method,
    uint32_t repetitions
) 
```



Public API 


        

<hr>



### function data\_dispatch\_peek\_acquired\_value 

_Peek data for a specific channel: obtain the latest value from the channel without removing it from the buffer._ 
```C++
uint16_t data_dispatch_peek_acquired_value (
    uint8_t adc_number,
    uint8_t channel_rank
) 
```





**Parameters:**


* `adc_number` Number of the ADC from which to obtain data. 
* `channel_rank` Rank of the channel from which to obtain data. 



**Returns:**

Latest available value from the buffer. Note that if no value has been acquired, returned value will be 0. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/data/data_dispatch.cpp`

