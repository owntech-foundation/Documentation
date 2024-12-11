

# File dma.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**dma.cpp**](dma_8cpp.md)

[Go to the source code of this file](dma_8cpp_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**dma\_user\_data\_t**](structdma__user__data__t.md) <br> |








## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  size\_t | [**buffers\_sizes**](#variable-buffers_sizes)   = = {0}<br> |
|  const struct device \* | [**dma1**](#variable-dma1)   = = DEVICE\_DT\_GET(DT\_NODELABEL(dma1))<br> |
|  const uint32\_t | [**source\_registers**](#variable-source_registers)   = =
{
	(uint32\_t)(&(ADC1-&gt;DR)),
	(uint32\_t)(&(ADC2-&gt;DR)),
	(uint32\_t)(&(ADC3-&gt;DR)),
	(uint32\_t)(&(ADC4-&gt;DR)),
	(uint32\_t)(&(ADC5-&gt;DR))
}<br> |
|  const uint32\_t | [**source\_triggers**](#variable-source_triggers)   = =
{
	LL\_DMAMUX\_REQ\_ADC1,
	LL\_DMAMUX\_REQ\_ADC2,
	LL\_DMAMUX\_REQ\_ADC3,
	LL\_DMAMUX\_REQ\_ADC4,
	LL\_DMAMUX\_REQ\_ADC5
}<br> |
|  [**dma\_user\_data\_t**](structdma__user__data__t.md) | [**user\_data**](#variable-user_data)   = = {0}<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**dma\_configure\_adc\_acquisition**](#function-dma_configure_adc_acquisition) (uint8\_t adc\_number, bool disable\_interrupts, uint16\_t \* buffer, size\_t buffer\_size) <br>_This function configures a channel from DMA 1 to transfer measures from an ADC to buffers, then starts the channels. It must only be called after all the ADCs configuration has been carried out, as it uses its channels configuration to determine the size of the buffers._  |
|  uint32\_t | [**dma\_get\_retreived\_data\_count**](#function-dma_get_retreived_data_count) (uint8\_t adc\_number) <br>_Obtain the number of acquired data since last time this function was called._  |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**\_dma\_callback**](#function-_dma_callback) (const struct device \* dev, void \* user\_data, uint32\_t dma\_channel, int status) <br> |


























## Public Static Attributes Documentation




### variable buffers\_sizes 

```C++
size_t buffers_sizes[5];
```




<hr>



### variable dma1 

```C++
const struct device* dma1;
```





**Date:**

2024




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 





        

<hr>



### variable source\_registers 

```C++
const uint32_t source_registers[5];
```




<hr>



### variable source\_triggers 

```C++
const uint32_t source_triggers[5];
```




<hr>



### variable user\_data 

```C++
dma_user_data_t user_data[5];
```




<hr>
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
## Public Static Functions Documentation




### function \_dma\_callback 

```C++
static void _dma_callback (
    const struct device * dev,
    void * user_data,
    uint32_t dma_channel,
    int status
) 
```



DMA callback This callback is called on DMA interrupt. For ADCs with enabled interrupt, is will be called twice: when buffer is half-filled and when buffer is filled. For other ADCs, it will never be called. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/data/dma.cpp`

