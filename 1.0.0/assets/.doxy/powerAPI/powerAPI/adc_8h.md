

# File adc.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_adc\_driver**](dir_e0b0ebd8181eadf56b45f70b679dd6ce.md) **>** [**zephyr**](dir_fc55e1a77480d908ce2594a494dae021.md) **>** [**public\_api**](dir_1a23096fc67cd9ffce086a2218b577f7.md) **>** [**adc.h**](adc_8h.md)

[Go to the source code of this file](adc_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**adc\_ev\_src\_t**](#enum-adc_ev_src_t)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**adc\_add\_channel**](#function-adc_add_channel) (uint8\_t adc\_number, uint8\_t channel) <br>_Adds a channel to the list of channels to be acquired for an ADC. The order in which channels are added determine the order in which they will be acquired._  |
|  void | [**adc\_configure\_discontinuous\_mode**](#function-adc_configure_discontinuous_mode) (uint8\_t adc\_number, uint32\_t discontinuous\_count) <br>_Registers the discontinuous count for an ADC._  |
|  void | [**adc\_configure\_trigger\_source**](#function-adc_configure_trigger_source) (uint8\_t adc\_number, adc\_ev\_src\_t trigger\_source) <br>_Registers the triger source for an ADC._  |
|  void | [**adc\_configure\_use\_dma**](#function-adc_configure_use_dma) (uint8\_t adc\_number, bool use\_dma) <br>_Configures an ADC to use DMA._  |
|  uint32\_t | [**adc\_get\_enabled\_channels\_count**](#function-adc_get_enabled_channels_count) (uint8\_t adc\_number) <br>_Returns the number of enabled channels for an ADC._  |
|  void | [**adc\_remove\_channel**](#function-adc_remove_channel) (uint8\_t adc\_number, uint8\_t channel) <br>_Removes a channel from the list of channels that are acquired by an ADC. If a channel has been added multiple times, then only the first occurence in the list will be removed._  |
|  void | [**adc\_start**](#function-adc_start) () <br>_Starts all configured ADCs._  |
|  void | [**adc\_stop**](#function-adc_stop) () <br>_Stops all configured ADCs._  |
|  void | [**adc\_trigger\_software\_conversion**](#function-adc_trigger_software_conversion) (uint8\_t adc\_number, uint8\_t number\_of\_acquisitions) <br>_This function triggers a single conversion in the case of a software triggered ADC._  |




























## Public Types Documentation




### enum adc\_ev\_src\_t 

```C++
enum adc_ev_src_t {
    software = 0,
    hrtim_ev1 = 1,
    hrtim_ev2 = 2,
    hrtim_ev3 = 3,
    hrtim_ev4 = 4
};
```




<hr>
## Public Functions Documentation




### function adc\_add\_channel 

_Adds a channel to the list of channels to be acquired for an ADC. The order in which channels are added determine the order in which they will be acquired._ 
```C++
void adc_add_channel (
    uint8_t adc_number,
    uint8_t channel
) 
```



This will only be applied when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `channel` Number of the channel to to be acquired. 




        

<hr>



### function adc\_configure\_discontinuous\_mode 

_Registers the discontinuous count for an ADC._ 
```C++
void adc_configure_discontinuous_mode (
    uint8_t adc_number,
    uint32_t discontinuous_count
) 
```








**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `discontinuous_count` Number of channels to acquire on each trigger event. 0 to disable discontinuous mode (default). 




        

<hr>



### function adc\_configure\_trigger\_source 

_Registers the triger source for an ADC._ 
```C++
void adc_configure_trigger_source (
    uint8_t adc_number,
    adc_ev_src_t trigger_source
) 
```








**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `triggger_source` Source of the trigger. 




        

<hr>



### function adc\_configure\_use\_dma 

_Configures an ADC to use DMA._ 
```C++
void adc_configure_use_dma (
    uint8_t adc_number,
    bool use_dma
) 
```








**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `use_dma` Set to true to use DMA for this ADC, false to not use it (default). 




        

<hr>



### function adc\_get\_enabled\_channels\_count 

_Returns the number of enabled channels for an ADC._ 
```C++
uint32_t adc_get_enabled_channels_count (
    uint8_t adc_number
) 
```





**Parameters:**


* `adc_number` Number of the ADC to fetch. 



**Returns:**

Number of enabled channels on the given ADC. 





        

<hr>



### function adc\_remove\_channel 

_Removes a channel from the list of channels that are acquired by an ADC. If a channel has been added multiple times, then only the first occurence in the list will be removed._ 
```C++
void adc_remove_channel (
    uint8_t adc_number,
    uint8_t channel
) 
```



This will only be applied when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `channel` Number of the channel to to no longer be acquired. 




        

<hr>



### function adc\_start 

_Starts all configured ADCs._ 
```C++
void adc_start () 
```




<hr>



### function adc\_stop 

_Stops all configured ADCs._ 
```C++
void adc_stop () 
```




<hr>



### function adc\_trigger\_software\_conversion 

_This function triggers a single conversion in the case of a software triggered ADC._ 
```C++
void adc_trigger_software_conversion (
    uint8_t adc_number,
    uint8_t number_of_acquisitions
) 
```



This function must only be called after ADC has been started.




**Parameters:**


* `adc_number` Number of the ADC. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_adc_driver/zephyr/public_api/adc.h`

