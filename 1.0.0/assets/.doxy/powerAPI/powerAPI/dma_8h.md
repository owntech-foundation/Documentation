

# File dma.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**dma.h**](dma_8h.md)

[Go to the source code of this file](dma_8h_source.md)








































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**dma\_configure\_adc\_acquisition**](#function-dma_configure_adc_acquisition) (uint8\_t adc\_number, bool disable\_interrupts, uint16\_t \* buffer, size\_t buffer\_size) <br>_This function configures a channel from DMA 1 to transfer measures from an ADC to buffers, then starts the channels. It must only be called after all the ADCs configuration has been carried out, as it uses its channels configuration to determine the size of the buffers._  |
|  uint32\_t | [**dma\_get\_retreived\_data\_count**](#function-dma_get_retreived_data_count) (uint8\_t adc\_number) <br>_Obtain the number of acquired data since last time this function was called._  |




























## Public Functions Documentation




### function dma\_configure\_adc\_acquisition 

_This function configures a channel from DMA 1 to transfer measures from an ADC to buffers, then starts the channels. It must only be called after all the ADCs configuration has been carried out, as it uses its channels configuration to determine the size of the buffers._ 
```C++
void dma_configure_adc_acquisition (
    uint8_t adc_number,
    bool disable_interrupts,
    uint16_t * buffer,
    size_t buffer_size
) 
```





**Parameters:**


* `adc_number` Number of the ADC to acquire measures from. 
* `disable_interrupts` Boolean indicating whether interrupts shoud be disabled. Warning: this override Zephyr DMA driver default behavior. 
* `buffer` Pointer to buffer. 
* `buffer_size` Number of uint16\_t words the buffer can contain. 




        

<hr>



### function dma\_get\_retreived\_data\_count 

_Obtain the number of acquired data since last time this function was called._ 
```C++
uint32_t dma_get_retreived_data_count (
    uint8_t adc_number
) 
```





**Parameters:**


* `adc_number` Number of the ADC.



**Returns:**

Number of acquired data modulo buffer size. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/data/dma.h`

