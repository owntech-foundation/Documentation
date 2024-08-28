

# Class DataAPI



[**ClassList**](annotated.md) **>** [**DataAPI**](classDataAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  float32\_t | [**convert**](#function-convert-12) (channel\_t channel, uint16\_t raw\_value) <br>_Use this function to convert values obtained using matching data.get\*RawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._  |
|  float32\_t | [**convert**](#function-convert-22) (uint8\_t adc\_num, uint8\_t pin\_num, uint16\_t raw\_value) <br>_Use this function to convert values obtained using matching data.get\*RawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._  |
|  int8\_t | [**enableAcquisition**](#function-enableacquisition) (uint8\_t adc\_num, uint8\_t pin\_num) <br>_This function is used to enable acquisition on a Spin PIN with a given ADC._  |
|  int8\_t | [**enableShieldChannel**](#function-enableshieldchannel) (uint8\_t adc\_num, channel\_t channel\_name) <br>_This function is used to enable a channel on a given ADC using its name on a shield, rather than the ADC channel number. This function requires the presence of an "adc-channels" node in the shield device-tree._  |
|  void | [**enableTwistDefaultChannels**](#function-enabletwistdefaultchannels) () <br>_This function is used to enable acquisition of all voltage/current channels on the Twist shield. Channels are attributed as follows: ADC1: - I1\_LOW ADC2: - I2\_LOW._  |
|  DispatchMethod\_t | [**getDispatchMethod**](#function-getdispatchmethod) () <br>_Gets the dispatch method of the module._  |
|  float32\_t | [**getLatest**](#function-getlatest-12) (channel\_t channel, uint8\_t \* dataValid=nullptr) <br>_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._  |
|  float32\_t | [**getLatest**](#function-getlatest-22) (uint8\_t adc\_num, uint8\_t pin\_num, uint8\_t \* dataValid=nullptr) <br>_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._  |
|  uint16\_t \* | [**getRawValues**](#function-getrawvalues-12) (channel\_t channel, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified channel. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._  |
|  uint16\_t \* | [**getRawValues**](#function-getrawvalues-22) (uint8\_t adc\_num, uint8\_t pin\_num, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified pin. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._  |
|  float32\_t | [**peek**](#function-peek-12) (channel\_t channel) <br>_Function to access the latest value available from the channel, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._  |
|  float32\_t | [**peek**](#function-peek-22) (uint8\_t adc\_num, uint8\_t pin\_num) <br>_Function to access the latest value available from a pin, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._  |
|  int8\_t | [**retrieveParametersFromMemory**](#function-retrieveparametersfrommemory-12) (channel\_t channel) <br>_Use this function to read the gain and offset parameters of the board to is non-volatile memory._  |
|  int8\_t | [**retrieveParametersFromMemory**](#function-retrieveparametersfrommemory-22) (uint8\_t adc\_num, uint8\_t pin\_num) <br>_Retreived previously configured conversion parameters from NVS._  |
|  conversion\_type\_t | [**retrieveStoredConversionType**](#function-retrievestoredconversiontype-12) (channel\_t channel) <br>_Use this function to get the current conversion type for the chosen channel._  |
|  conversion\_type\_t | [**retrieveStoredConversionType**](#function-retrievestoredconversiontype-22) (uint8\_t adc\_num, uint8\_t pin\_num) <br>_Use this function to get the current conversion type for the chosen channel._  |
|  float32\_t | [**retrieveStoredParameterValue**](#function-retrievestoredparametervalue-12) (channel\_t channel, parameter\_t parameter\_name) <br>_Use this function to get the current conversion parameteres for the chosen channel ._  |
|  float32\_t | [**retrieveStoredParameterValue**](#function-retrievestoredparametervalue-22) (uint8\_t adc\_num, uint8\_t pin\_num, parameter\_t parameter\_name) <br>_Use this function to get the current conversion parameteres for the chosen channel ._  |
|  void | [**setDispatchMethod**](#function-setdispatchmethod) (DispatchMethod\_t dispatch\_method) <br>_Sets the dispatch method of the module._  |
|  void | [**setParameters**](#function-setparameters-12) (channel\_t channel, float32\_t gain, float32\_t offset) <br>_Use this function to tweak the conversion values for the channel if default values are not accurate enough._  |
|  void | [**setParameters**](#function-setparameters-22) (uint8\_t adc\_num, uint8\_t pin\_num, float32\_t gain, float32\_t offset) <br>_Use this function to tweak the conversion values for the channel if default values are not accurate enough._  |
|  void | [**setRepetitionsBetweenDispatches**](#function-setrepetitionsbetweendispatches) (uint32\_t repetition) <br>_Indicates the repetition count between two external dispatches when it is handled externally by the Scheduling module. This value is used to calibrate buffers sizes._  |
|  void | [**setTwistChannelsUserCalibrationFactors**](#function-settwistchannelsusercalibrationfactors) () <br>_Retrieve stored parameters from Flash memory and configure ADC parameters._  |
|  int8\_t | [**start**](#function-start) () <br>_This functions manually starts the acquisition chain._  |
|  bool | [**started**](#function-started) () <br>_Checks if the module is already started._  |
|  int8\_t | [**storeParametersInMemory**](#function-storeparametersinmemory-12) (channel\_t channel) <br>_Use this function to write the gain and offset parameters of the board to is non-volatile memory._  |
|  int8\_t | [**storeParametersInMemory**](#function-storeparametersinmemory-22) (uint8\_t adc\_num, uint8\_t pin\_num) <br>_Store the currently configured conversion parameters of a given channel in NVS._  |
|  void | [**triggerAcquisition**](#function-triggeracquisition) (uint8\_t adc\_num) <br>_Triggers an acquisition on a given ADC. Each channel configured on this ADC will be acquired one after the other until all configured channels have been acquired._  |




























## Public Functions Documentation




### function convert [1/2]

_Use this function to convert values obtained using matching data.get\*RawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::convert (
    channel_t channel,
    uint16_t raw_value
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `channel` Name of the shield channel from which the value originates 
* `raw_value` Raw value obtained from which the value originates



**Returns:**

Converted value in the relevant unit. Returns -5000 if the channel is not active. 





        

<hr>



### function convert [2/2]

_Use this function to convert values obtained using matching data.get\*RawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::convert (
    uint8_t adc_num,
    uint8_t pin_num,
    uint16_t raw_value
) 
```





**Note:**

This function can't be called before the pin is enabled.




**Parameters:**


* `adc_num` Number of the ADC from which the value originates. 
* `pin_num` Number of the pin from which to obtain values. 
* `raw_value` Raw value obtained from the channel buffer.



**Returns:**

Converted value in the relevant unit. If there is an error, returns -5000. 





        

<hr>



### function enableAcquisition 

_This function is used to enable acquisition on a Spin PIN with a given ADC._ 
```C++
int8_t DataAPI::enableAcquisition (
    uint8_t adc_num,
    uint8_t pin_num
) 
```





**Note:**

Not any pin can be used for acquisiton: the pin must be linked to a channel of the given ADC. Refer to Spin pinout image for PIN/ADC relations.




**Note:**

This function must be called _before_ ADC is started.




**Parameters:**


* `adc_number` Number of the ADC on which acquisition is to be done. 
* `pin_num` Number of the Spin pin to acquire.



**Returns:**

0 if acquisition was correctly enabled, -1 if there was an error. 





        

<hr>



### function enableShieldChannel 

_This function is used to enable a channel on a given ADC using its name on a shield, rather than the ADC channel number. This function requires the presence of an "adc-channels" node in the shield device-tree._ 
```C++
int8_t DataAPI::enableShieldChannel (
    uint8_t adc_num,
    channel_t channel_name
) 
```





**Note:**

This function must be called _before_ ADC is started.




**Parameters:**


* `adc_number` Number of the ADC on which channel is to be enabled. 
* `channel_name` Name of the channel using enumeration channel\_t.



**Returns:**

0 if channel was correctly enabled, -1 if there was an error. 





        

<hr>



### function enableTwistDefaultChannels 

_This function is used to enable acquisition of all voltage/current channels on the Twist shield. Channels are attributed as follows: ADC1: - I1\_LOW ADC2: - I2\_LOW._ 
```C++
void DataAPI::enableTwistDefaultChannels () 
```




* V1\_LOW - V2\_LOW
* V\_HIGH - I\_HIGH






**Note:**

This function will configure ADC 1 and 2 to be automatically triggered by the HRTIM, so the board must be configured as a power converted to enable HRTIM events. All other ADCs remain software triggered, thus will only be acquired when [**triggerAcquisition()**](classDataAPI.md#function-triggeracquisition) is called.




**Note:**

This function must be called _before_ ADC is started. 





        

<hr>



### function getDispatchMethod 

_Gets the dispatch method of the module._ 
```C++
DispatchMethod_t DataAPI::getDispatchMethod () 
```





**Note:**

End-user should not worry about this function, which is used internally by the Scheduling module.




**Returns:**

Dispatch method indicatinng when the dispatch is done. 





        

<hr>



### function getLatest [1/2]

_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::getLatest (
    channel_t channel,
    uint8_t * dataValid=nullptr
) 
```





**Note:**

This function can't be called before the channel is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Note:**

When using this functions, you loose the ability to access raw values using data.get\*RawValues() function for the matching channel, as data.get\*() function clears the buffer on each call.




**Parameters:**


* `channel` Name of the shield channel from which to obtain value. 
* `dataValid` Pointer to an uint8\_t variable. This parameter is facultative. If this parameter is provided, it will be updated to indicate information about data. Possible values for this parameter will be:
  * DATA\_IS\_OK if returned data is a newly acquired data,
  * DATA\_IS\_OLD if returned data has already been provided before (no new data available since latest time this function was called),
  * DATA\_IS\_MISSING if returned data is NO\_VALUE.





**Returns:**

Latest acquired measure for the channel. If no value was acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function getLatest [2/2]

_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::getLatest (
    uint8_t adc_num,
    uint8_t pin_num,
    uint8_t * dataValid=nullptr
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Note:**

When using this functions, you loose the ability to access raw values using data.get\*RawValues() function for the matching channel, as data.get\*() function clears the buffer on each call.




**Parameters:**


* `adc_num` Number of the ADC from which to obtain value. 
* `pin_num` Number of the pin from which to obtain values. 
* `dataValid` Pointer to an uint8\_t variable. This parameter is facultative. If this parameter is provided, it will be updated to indicate information about data. Possible values for this parameter will be:
  * DATA\_IS\_OK if returned data is a newly acquired data,
  * DATA\_IS\_OLD if returned data has already been provided before (no new data available since latest time this function was called),
  * DATA\_IS\_MISSING if returned data is NO\_VALUE.





**Returns:**

Latest acquired measure for the channel. If no value was acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function getRawValues [1/2]

_Function to access the acquired data for specified channel. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._ 
```C++
uint16_t * DataAPI::getRawValues (
    channel_t channel,
    uint32_t & number_of_values_acquired
) 
```





**Note:**

This function can't be called before the channel is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Note:**

When calling this function, it invalidates the buffer returned by a previous call to the same function. However, different channels buffers are independent from each other.




**Note:**

When using this functions, the user is responsible for data conversion. Use matching data.convert\*() function for this purpose.




**Note:**

When using this function, DO NOT use the function to get the latest converted value for the same channel as this function will clear the buffer and disregard all values but the latest.




**Parameters:**


* `channel` Name of the shield channel from which to obtain values. 
* `number_of_values_acquired` Pass an uint32\_t variable. This variable will be updated with the number of values that are present in the returned buffer.



**Returns:**

Pointer to a buffer in which the acquired values are stored. If number\_of\_values\_acquired is 0, do not try to access the buffer as it may be nullptr. 





        

<hr>



### function getRawValues [2/2]

_Function to access the acquired data for specified pin. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._ 
```C++
uint16_t * DataAPI::getRawValues (
    uint8_t adc_num,
    uint8_t pin_num,
    uint32_t & number_of_values_acquired
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Note:**

When calling this function, it invalidates the buffer returned by a previous call to the same function. However, different channels buffers are independent from each other.




**Note:**

When using this functions, the user is responsible for data conversion. Use matching data.convert\*() function for this purpose.




**Note:**

When using this function, DO NOT use the function to get the latest converted value for the same channel as this function will clear the buffer and disregard all values but the latest.




**Parameters:**


* `adc_num` Number of the ADC from which to obtain values. 
* `pin_num` Number of the pin from which to obtain values. 
* `number_of_values_acquired` Pass an uint32\_t variable. This variable will be updated with the number of values that are present in the returned buffer.



**Returns:**

Pointer to a buffer in which the acquired values are stored. If number\_of\_values\_acquired is 0, do not try to access the buffer as it may be nullptr. 





        

<hr>



### function peek [1/2]

_Function to access the latest value available from the channel, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._ 
```C++
float32_t DataAPI::peek (
    channel_t channel
) 
```





**Note:**

This function can't be called before the channel is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `channel` Name of the shield channel from which to obtain value.



**Returns:**

Latest available value available from the given channel. If there was no value acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function peek [2/2]

_Function to access the latest value available from a pin, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._ 
```C++
float32_t DataAPI::peek (
    uint8_t adc_num,
    uint8_t pin_num
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `adc_num` Number of the ADC from which to obtain value. 
* `pin_num` Number of the pin from which to obtain values. 



**Returns:**

Latest available value available from the given channel. If there was no value acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function retrieveParametersFromMemory [1/2]

_Use this function to read the gain and offset parameters of the board to is non-volatile memory._ 
```C++
int8_t DataAPI::retrieveParametersFromMemory (
    channel_t channel
) 
```





**Parameters:**


* `channel` Name of the shield channel to save the values. 




        

<hr>



### function retrieveParametersFromMemory [2/2]

_Retreived previously configured conversion parameters from NVS._ 
```C++
int8_t DataAPI::retrieveParametersFromMemory (
    uint8_t adc_num,
    uint8_t pin_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `pin_num` SPIN pin number



**Returns:**

0 if parameters were correcly retreived, negative value if there was an error: -1: NVS is empty -2: NVS contains data, but their version doesn't match current version -3: NVS data is corrupted -4: NVS contains data, but not for the requested channel -5000: Channel not found. 





        

<hr>



### function retrieveStoredConversionType [1/2]

_Use this function to get the current conversion type for the chosen channel._ 
```C++
conversion_type_t DataAPI::retrieveStoredConversionType (
    channel_t channel
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `channel` Name of the shield channel to get a conversion parameter. 




        

<hr>



### function retrieveStoredConversionType [2/2]

_Use this function to get the current conversion type for the chosen channel._ 
```C++
conversion_type_t DataAPI::retrieveStoredConversionType (
    uint8_t adc_num,
    uint8_t pin_num
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `channel` Name of the shield channel to get a conversion parameter.



**Returns:**

Returns the type of convertion of the given pin. Returns -5 if the channel is not active. 





        

<hr>



### function retrieveStoredParameterValue [1/2]

_Use this function to get the current conversion parameteres for the chosen channel ._ 
```C++
float32_t DataAPI::retrieveStoredParameterValue (
    channel_t channel,
    parameter_t parameter_name
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `channel` Name of the shield channel to get a conversion parameter. 
* `parameter_name` Paramater to be retreived: `gain` or `offset`. 




        

<hr>



### function retrieveStoredParameterValue [2/2]

_Use this function to get the current conversion parameteres for the chosen channel ._ 
```C++
float32_t DataAPI::retrieveStoredParameterValue (
    uint8_t adc_num,
    uint8_t pin_num,
    parameter_t parameter_name
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `channel` Name of the shield channel to get a conversion parameter. 
* `parameter_name` Paramater to be retreived: `gain` or `offset`.



**Returns:**

Returns the value of the parameter. Returns -5000 if the channel is not active. 





        

<hr>



### function setDispatchMethod 

_Sets the dispatch method of the module._ 
```C++
void DataAPI::setDispatchMethod (
    DispatchMethod_t dispatch_method
) 
```








**Note:**

End-user should not worry about this function, which is used internally by the Scheduling module.




**Parameters:**


* `dispatch_method` Indicates when the dispatch should be done (default value: DispatchMethod\_t::on\_dma\_interrupt) 




        

<hr>



### function setParameters [1/2]

_Use this function to tweak the conversion values for the channel if default values are not accurate enough._ 
```C++
void DataAPI::setParameters (
    channel_t channel,
    float32_t gain,
    float32_t offset
) 
```





**Note:**

This function can't be called before the channel is enabled. The [**DataAPI**](classDataAPI.md) must not have been started, neither explicitly nor by starting the Uninterruptible task.




**Parameters:**


* `channel` Name of the shield channel to set conversion values. 
* `gain` Gain to be applied (multiplied) to the channel raw value. 
* `offset` Offset to be applied (added) to the channel value after gain has been applied. 




        

<hr>



### function setParameters [2/2]

_Use this function to tweak the conversion values for the channel if default values are not accurate enough._ 
```C++
void DataAPI::setParameters (
    uint8_t adc_num,
    uint8_t pin_num,
    float32_t gain,
    float32_t offset
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must not have been started, neither explicitly nor by starting the Uninterruptible task.




**Parameters:**


* `adc_num` Number of the ADC to set conversion values. 
* `pin_num` Number of the pin from which to obtain values. 
* `gain` Gain to be applied (multiplied) to the channel raw value. 
* `offset` Offset to be applied (added) to the channel value after gain has been applied. 




        

<hr>



### function setRepetitionsBetweenDispatches 

_Indicates the repetition count between two external dispatches when it is handled externally by the Scheduling module. This value is used to calibrate buffers sizes._ 
```C++
void DataAPI::setRepetitionsBetweenDispatches (
    uint32_t repetition
) 
```





**Note:**

End-user should not worry about this function, which is used internally by the Scheduling module.




**Parameters:**


* `repetition` Number of repetitions between two calls of dispatch. Used to calibrate buffers sizes. 




        

<hr>



### function setTwistChannelsUserCalibrationFactors 

_Retrieve stored parameters from Flash memory and configure ADC parameters._ 
```C++
void DataAPI::setTwistChannelsUserCalibrationFactors () 
```





**Note:**

This function requires Console to interact with the user. You must first call console\_init() before calling this function.




**Note:**

This function can't be called before _all_ Twist channels have been enabled (you can use [**enableTwistDefaultChannels()**](classDataAPI.md#function-enabletwistdefaultchannels) for that purpose). The [**DataAPI**](classDataAPI.md) must not have been started, neither explicitly nor by starting the Uninterruptible task. 





        

<hr>



### function start 

_This functions manually starts the acquisition chain._ 
```C++
int8_t DataAPI::start () 
```





**Note:**

If your code uses an uninterruptible task, you do not need to start Data Acquisition manually, it will automatically be started at the same time as the task as their internal behavior are intrinsically linked. If for some reason you have an uninterruptible task in your code, but do not want the Scheduling module to be in charge of Data Acquisition, you need to indicate it when starting the uninterruptible task. In that case, Data Acquisition must be manually started using this function. Note that in taht case, dispatch will use DMA interrupts which consumes a non-negligible amount of processor time and it is not advised.




**Note:**

Data Acquisition must be started only after ADC module configuration has been fully carried out. No ADC configuration change is allowed after module has been started. If you're using the Twist shield and are not sure how to initialize ADCs, you can use data.enableTwistDefaultChannels() for that purpose.




**Note:**

Data Acquisition must be started before accessing any data.get\*() or data.peek\*() function. Other Data Acquisition functions are safe to use before starting the module.




**Returns:**

0 if everything went well, -1 if there was an error. Error is triggered when dispatch method is set to be external, but the repetition value has not provided. Another source of error is trying to start Data Acquisition after it has already been started. 





        

<hr>



### function started 

_Checks if the module is already started._ 
```C++
bool DataAPI::started () 
```








**Returns:**

true is the module has been started, false otherwise. 





        

<hr>



### function storeParametersInMemory [1/2]

_Use this function to write the gain and offset parameters of the board to is non-volatile memory._ 
```C++
int8_t DataAPI::storeParametersInMemory (
    channel_t channel
) 
```





**Note:**

This function should be called after updating the parameters using setParameters.




**Parameters:**


* `channel` Name of the shield channel to save the values. 




        

<hr>



### function storeParametersInMemory [2/2]

_Store the currently configured conversion parameters of a given channel in NVS._ 
```C++
int8_t DataAPI::storeParametersInMemory (
    uint8_t adc_num,
    uint8_t pin_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `pin_num` SPIN pin number



**Returns:**

0 if parameters were correcly stored, negative value if there was an error: -1: There was an error, -5000: Channel not found. 





        

<hr>



### function triggerAcquisition 

_Triggers an acquisition on a given ADC. Each channel configured on this ADC will be acquired one after the other until all configured channels have been acquired._ 
```C++
void DataAPI::triggerAcquisition (
    uint8_t adc_num
) 
```





**Note:**

This function can't be called before the at least one channel is enabled on the ADC and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `adc_num` Number of the ADC on which to acquire channels. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_data_api/zephyr/public_api/DataAPI.h`

