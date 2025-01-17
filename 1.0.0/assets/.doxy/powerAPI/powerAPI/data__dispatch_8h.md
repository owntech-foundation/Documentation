

# File data\_dispatch.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**data\_dispatch.h**](data__dispatch_8h.md)

[Go to the source code of this file](data__dispatch_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**dispatch\_t**](#enum-dispatch_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**CHANNELS\_BUFFERS\_SIZE**](#variable-channels_buffers_size)   = `32`<br> |
|  const uint16\_t | [**PEEK\_NO\_VALUE**](#variable-peek_no_value)   = `0xFFFF`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**data\_dispatch\_do\_dispatch**](#function-data_dispatch_do_dispatch) (uint8\_t adc\_number) <br>_Dispatch function: gets the readings and store them in per-channel arrays. This functon is called by DMA callback when the DMA has filled one of its buffers._  |
|  void | [**data\_dispatch\_do\_full\_dispatch**](#function-data_dispatch_do_full_dispatch) () <br>_Function to proceed to all chanels dispatch when it is done at uninterruptible task start._  |
|  uint16\_t \* | [**data\_dispatch\_get\_acquired\_values**](#function-data_dispatch_get_acquired_values) (uint8\_t adc\_number, uint8\_t channel\_rank, uint32\_t & number\_of\_values\_acquired) <br>_Obtain data for a specific channel. The data is provided as an array of values and the count of data in this buffer is returned as an output parameter._  |
|  void | [**data\_dispatch\_init**](#function-data_dispatch_init) (dispatch\_t dispatch\_method, uint32\_t repetitions) <br>_Init function to be called first._  |
|  uint16\_t | [**data\_dispatch\_peek\_acquired\_value**](#function-data_dispatch_peek_acquired_value) (uint8\_t adc\_number, uint8\_t channel\_rank) <br>_Peek data for a specific channel: obtain the latest value from the channel without removing it from the buffer._  |




























## Public Types Documentation




### enum dispatch\_t 

```C++
enum dispatch_t {
    task,
    interrupt
};
```



Dispatch method 


        

<hr>
## Public Attributes Documentation




### variable CHANNELS\_BUFFERS\_SIZE 

```C++
const uint8_t CHANNELS_BUFFERS_SIZE;
```




<hr>



### variable PEEK\_NO\_VALUE 

```C++
const uint16_t PEEK_NO_VALUE;
```




<hr>
## Public Functions Documentation




### function data\_dispatch\_do\_dispatch 

_Dispatch function: gets the readings and store them in per-channel arrays. This functon is called by DMA callback when the DMA has filled one of its buffers._ 
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





**Parameters:**


* `adc_number` Number of the ADC from which to obtain data. 
* `channel_rank` Rank of the channel from which to obtain data. 
* `number_of_values_acquired` Output parameter: address to a variable that will be updated by the function with the data count. 



**Returns:**

Buffer containing the available data. Note that the returned buffer is invalidated by further calls to the function with same adc number/channel rank. 





        

<hr>



### function data\_dispatch\_init 

_Init function to be called first._ 
```C++
void data_dispatch_init (
    dispatch_t dispatch_method,
    uint32_t repetitions
) 
```





**Parameters:**


* `dispatch_method` Indicates when the dispatch should be done. 
* `repetitions` If dispatch is done at task start, this value represents the number of acquisitions that are done between two execution of the task. Ignored if dispatch is done on interrupt. 




        

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
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/data/data_dispatch.h`

