

# Class AdcHAL



[**ClassList**](annotated.md) **>** [**AdcHAL**](classAdcHAL.md)



_Handles the ADC for the spin board._ [More...](#detailed-description)

* `#include <AdcHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configureDiscontinuousMode**](#function-configurediscontinuousmode) (uint8\_t adc\_number, uint32\_t dicontinuous\_count) <br>_Set the discontinuous count for an ADC. By default, ADCs are not in discontinuous mode._  |
|  void | [**configureTriggerSource**](#function-configuretriggersource) (uint8\_t adc\_number, adc\_ev\_src\_t trigger\_source) <br>_Change the trigger source of an ADC. By default, triggger source for ADC 1/2 is on HRTIM1, and ADC 3/4 is software-triggered._  |
|  void | [**disableChannel**](#function-disablechannel) (uint8\_t adc\_number, uint8\_t channel) <br>_Removes a channel from the list of channels that are acquired by an ADC._  |
|  void | [**enableChannel**](#function-enablechannel) (uint8\_t adc\_number, uint8\_t channel) <br>_Add a channel to the list of channels to be acquired for an ADC. The order in which channels are acquired is determined by the order in which they are enabled._  |
|  void | [**enableDma**](#function-enabledma) (uint8\_t adc\_number, bool use\_dma) <br>_ADC DMA mode configuration. Enables DMA and circular mode on an ADC._  |
|  uint32\_t | [**getEnabledChannelsCount**](#function-getenabledchannelscount) (uint8\_t adc\_number) <br>_Returns the number of enabled channels for an ADC._  |
|  void | [**startAllAdcs**](#function-startalladcs) () <br>_Start all configured ADCs._  |
|  void | [**stopAllAdcs**](#function-stopalladcs) () <br>_Stop all configured ADCs._  |
|  void | [**triggerSoftwareConversion**](#function-triggersoftwareconversion) (uint8\_t adc\_number, uint8\_t number\_of\_acquisitions) <br>_Triggers a conversion on an ADC which is configured as software triggered._  |




























## Detailed Description




**Note:**

Use this element to call functions linked to the ADC for the SPIN board 





    
## Public Functions Documentation




### function configureDiscontinuousMode 

_Set the discontinuous count for an ADC. By default, ADCs are not in discontinuous mode._ 
```C++
void AdcHAL::configureDiscontinuousMode (
    uint8_t adc_number,
    uint32_t dicontinuous_count
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `discontinuous_count` Number of channels to acquire on each trigger event. 0 to disable discontinuous mode (default). 




        

<hr>



### function configureTriggerSource 

_Change the trigger source of an ADC. By default, triggger source for ADC 1/2 is on HRTIM1, and ADC 3/4 is software-triggered._ 
```C++
void AdcHAL::configureTriggerSource (
    uint8_t adc_number,
    adc_ev_src_t trigger_source
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure 
* `trigger_source` Source of the trigger 




        

<hr>



### function disableChannel 

_Removes a channel from the list of channels that are acquired by an ADC._ 
```C++
void AdcHAL::disableChannel (
    uint8_t adc_number,
    uint8_t channel
) 
```





**Note:**

If a channel has been enabled multiple times, then only the first occurence in the list will be removed.


Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `channel` Number of the channel to to no longer be acquired. 




        

<hr>



### function enableChannel 

_Add a channel to the list of channels to be acquired for an ADC. The order in which channels are acquired is determined by the order in which they are enabled._ 
```C++
void AdcHAL::enableChannel (
    uint8_t adc_number,
    uint8_t channel
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `channel` Number of the channel to to be acquired. 




        

<hr>



### function enableDma 

_ADC DMA mode configuration. Enables DMA and circular mode on an ADC._ 
```C++
void AdcHAL::enableDma (
    uint8_t adc_number,
    bool use_dma
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_num` Number of the ADC on which to enable DMA. 
* `use_dma` Set to true to use DMA for this ADC, false to not use it (default). 




        

<hr>



### function getEnabledChannelsCount 

_Returns the number of enabled channels for an ADC._ 
```C++
uint32_t AdcHAL::getEnabledChannelsCount (
    uint8_t adc_number
) 
```





**Parameters:**


* `adc_number` Number of the ADC to fetch. 



**Returns:**

Number of enabled channels on the given ADC. 





        

<hr>



### function startAllAdcs 

_Start all configured ADCs._ 
```C++
void AdcHAL::startAllAdcs () 
```




<hr>



### function stopAllAdcs 

_Stop all configured ADCs._ 
```C++
void AdcHAL::stopAllAdcs () 
```




<hr>



### function triggerSoftwareConversion 

_Triggers a conversion on an ADC which is configured as software triggered._ 
```C++
void AdcHAL::triggerSoftwareConversion (
    uint8_t adc_number,
    uint8_t number_of_acquisitions
) 
```





**Note:**

Software trigger is default for all ADCs unless configured differently by the user or another module.




**Parameters:**


* `adc_number` Number of the ADC to fetch. 
* `number_of_acquisitions` Number of channels to acquire. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/AdcHAL.h`

