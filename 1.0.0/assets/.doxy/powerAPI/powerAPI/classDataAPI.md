

# Class DataAPI



[**ClassList**](annotated.md) **>** [**DataAPI**](classDataAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configureDiscontinuousMode**](#function-configurediscontinuousmode) (adc\_t adc\_number, uint32\_t dicontinuous\_count) <br>_Set the discontinuous count for an ADC. By default, ADCs are not in discontinuous mode._  |
|  void | [**configureTriggerSource**](#function-configuretriggersource) (adc\_t adc\_number, trigger\_source\_t trigger\_source) <br>_Change the trigger source of an ADC. By default, triggger source for ADC 1/2 is on HRTIM1, and ADC 3/4 is software-triggered._  |
|  float32\_t | [**convertValue**](#function-convertvalue) (uint8\_t pin\_number, uint16\_t raw\_value) <br>_Use this function to convert values obtained using matching data.getRawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._  |
|  int8\_t | [**enableAcquisition**](#function-enableacquisition) (uint8\_t pin\_number, adc\_t adc\_number=DEFAULT\_ADC) <br>_This function is used to enable acquisition on a Spin PIN with a given ADC._  |
|  conversion\_type\_t | [**getConversionParameterType**](#function-getconversionparametertype) (uint8\_t pin\_number) <br>_Use this function to get the current conversion type for the chosen channel._  |
|  float32\_t | [**getConversionParameterValue**](#function-getconversionparametervalue) (uint8\_t pin\_number, parameter\_t parameter\_name) <br>_Use this function to get the current conversion parameteres for the chosen channel ._  |
|  float32\_t | [**getLatestValue**](#function-getlatestvalue) (uint8\_t pin\_number, uint8\_t \* dataValid=nullptr) <br>_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._  |
|  uint16\_t \* | [**getRawValues**](#function-getrawvalues) (uint8\_t pin\_number, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified pin. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._  |
|  float32\_t \* | [**getValues**](#function-getvalues) (uint8\_t pin\_number, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified pin. This function converts all values that have been acquired since last call are stored and provide an array containing all of them. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._  |
|  float32\_t | [**peekLatestValue**](#function-peeklatestvalue) (uint8\_t pin\_number) <br>_Function to access the latest value available from a pin, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._  |
|  int8\_t | [**retrieveConversionParametersFromMemory**](#function-retrieveconversionparametersfrommemory) (uint8\_t pin\_number) <br>_Retrieved previously configured conversion parameters from persistent memory._  |
|  void | [**setConversionParametersLinear**](#function-setconversionparameterslinear) (uint8\_t pin\_number, float32\_t gain, float32\_t offset) <br>_Use this function to tweak the conversion values for the channel if default values are not accurate enough._  |
|  void | [**setConversionParametersNtcThermistor**](#function-setconversionparametersntcthermistor) (uint8\_t pin\_num, float32\_t r0, float32\_t b, float32\_t rdiv, float32\_t t0) <br>_Use this function to set the conversion values for any NTC thermistor sensor if default values are not accurate enough._  |
|  int8\_t | [**start**](#function-start) () <br>_This functions manually starts the acquisition chain._  |
|  bool | [**started**](#function-started) () <br>_Checks if the module is already started._  |
|  int8\_t | [**stop**](#function-stop) () <br>_Stops the module if it is started._  |
|  int8\_t | [**storeConversionParametersInMemory**](#function-storeconversionparametersinmemory) (uint8\_t pin\_number) <br>_Store the currently configured conversion parameters of a given channel in persistent memory._  |
|  void | [**triggerAcquisition**](#function-triggeracquisition) (adc\_t adc\_number) <br>_Triggers an acquisition on a given ADC. Each channel configured on this ADC will be acquired one after the other until all configured channels have been acquired._  |




























## Public Functions Documentation




### function configureDiscontinuousMode 

_Set the discontinuous count for an ADC. By default, ADCs are not in discontinuous mode._ 
```C++
void DataAPI::configureDiscontinuousMode (
    adc_t adc_number,
    uint32_t dicontinuous_count
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Note:**

This is an advanced function that requires to understand the way the ADC work. Only for use if you explicitely requires it.




**Parameters:**


* `adc_number` Number of the ADC to configure. 
* `discontinuous_count` Number of channels to acquire on each trigger event. 0 to disable discontinuous mode (default). 




        

<hr>



### function configureTriggerSource 

_Change the trigger source of an ADC. By default, triggger source for ADC 1/2 is on HRTIM1, and ADC 3/4 is software-triggered._ 
```C++
void DataAPI::configureTriggerSource (
    adc_t adc_number,
    trigger_source_t trigger_source
) 
```



Applied configuration will only be set when ADC is started. If ADC is already started, it must be stopped then started again.




**Parameters:**


* `adc_number` Number of the ADC to configure 
* `trigger_source` Source of the trigger 




        

<hr>



### function convertValue 

_Use this function to convert values obtained using matching data.getRawValues() function to relevant unit for the data: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::convertValue (
    uint8_t pin_number,
    uint16_t raw_value
) 
```





**Note:**

This function can't be called before the pin is enabled.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `raw_value` Raw value obtained from the channel buffer.



**Returns:**

Converted value in the relevant unit. If there is an error, returns -5000. 





        

<hr>



### function enableAcquisition 

_This function is used to enable acquisition on a Spin PIN with a given ADC._ 
```C++
int8_t DataAPI::enableAcquisition (
    uint8_t pin_number,
    adc_t adc_number=DEFAULT_ADC
) 
```





**Note:**

Not any pin can be used for acquisiton: the pin must be linked to a channel of the given ADC. Refer to Spin pinout image for PIN/ADC relations.




**Note:**

This function must be called _before_ Data API is started.




**Parameters:**


* `pin_number` Number of the Spin pin on which to enable acquisition. 
* `adc_number` Number of the ADC on which acquisition is to be done. This parameter can be omitted, in which case:
  * If only one ADC is linked to the given pin, it will be selected.
  * If two ADCs are available for acquisition on the given pin, the ADC with the lowest number will be selected.





**Returns:**

0 if acquisition was correctly enabled, -1 if there was an error. Errors generally indicate that the given pin is not linked to and ADC, and thus can not be used for acquisition. If the adc\_number parameter was explicitely provided, it can also indicate that the given ADC is not available for acquisition on the provided pin. 





        

<hr>



### function getConversionParameterType 

_Use this function to get the current conversion type for the chosen channel._ 
```C++
conversion_type_t DataAPI::getConversionParameterType (
    uint8_t pin_number
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values.



**Returns:**

Returns the type of convertion of the given pin. Returns -5 if the channel is not active. 





        

<hr>



### function getConversionParameterValue 

_Use this function to get the current conversion parameteres for the chosen channel ._ 
```C++
float32_t DataAPI::getConversionParameterValue (
    uint8_t pin_number,
    parameter_t parameter_name
) 
```





**Note:**

This function can't be called before the channel is enabled.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `parameter_name` Paramater to be retreived: `gain` or `offset`.



**Returns:**

Returns the value of the parameter. Returns -5000 if the channel is not active. 





        

<hr>



### function getLatestValue 

_This function returns the latest acquired measure expressed in the relevant unit for the channel: Volts, Amperes, or Degree Celcius._ 
```C++
float32_t DataAPI::getLatestValue (
    uint8_t pin_number,
    uint8_t * dataValid=nullptr
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Note:**

When using this functions, you loose the ability to access raw values using data.getRawValues() function for the matching channel, as data.getLatestValue() function clears the buffer on each call.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `dataValid` Pointer to an uint8\_t variable. This parameter is facultative. If this parameter is provided, it will be updated to indicate information about data. Possible values for this parameter will be:
  * DATA\_IS\_OK if returned data is a newly acquired data,
  * DATA\_IS\_OLD if returned data has already been provided before (no new data available since latest time this function was called),
  * DATA\_IS\_MISSING if returned data is NO\_VALUE.





**Returns:**

Latest acquired measure for the channel. If no value was acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function getRawValues 

_Function to access the acquired data for specified pin. This function provides a buffer in which all data that have been acquired since last call are stored. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._ 
```C++
uint16_t * DataAPI::getRawValues (
    uint8_t pin_number,
    uint32_t & number_of_values_acquired
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Note:**

When calling this function, it invalidates the buffer returned by a previous call to the same function. However, different channels buffers are independent from each other.




**Note:**

When using this functions, the user is responsible for data conversion. Use data.convertValue() function for this purpose.




**Note:**

When using this function, DO NOT use the function to get the latest converted value for the same channel as this function will clear the buffer and disregard all values but the latest.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `number_of_values_acquired` Pass an uint32\_t variable. This variable will be updated with the number of values that are present in the returned buffer.



**Returns:**

Pointer to a buffer in which the acquired values are stored. If number\_of\_values\_acquired is 0, do not try to access the buffer as it may be nullptr. 





        

<hr>



### function getValues 

_Function to access the acquired data for specified pin. This function converts all values that have been acquired since last call are stored and provide an array containing all of them. The count of these values is returned as an output parameter: the user has to define a variable and pass it as the parameter of the function. The variable will be updated with the number of values that are available in the buffer._ 
```C++
float32_t * DataAPI::getValues (
    uint8_t pin_number,
    uint32_t & number_of_values_acquired
) 
```





**Warning:**

This is an expensive function. Calling this function trigger the conversion of all values acquired since the last call. If only the lastet value is required, it is advised to call [**getLatestValue()**](classDataAPI.md#function-getlatestvalue) instead. If multiple values are required, but not all, it is advised to call [**getRawValues()**](classDataAPI.md#function-getrawvalues) instead, then explicitely convert required values using [**convertValue()**](classDataAPI.md#function-convertvalue).




**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Note:**

When calling this function, it invalidates the array returned by a previous call to the same function. However, different channels buffers are independent from each other.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `number_of_values_acquired` Pass an uint32\_t variable. This variable will be updated with the number of values that are present in the returned buffer.



**Returns:**

Pointer to an array in which the acquired values are stored. If number\_of\_values\_acquired is 0, do not try to access the buffer as it may be nullptr. 





        

<hr>



### function peekLatestValue 

_Function to access the latest value available from a pin, expressed in the relevant unit for the data: Volts, Amperes, or Degree Celcius. This function will not touch anything in the buffer, and thus can be called safely at any time after the module has been started._ 
```C++
float32_t DataAPI::peekLatestValue (
    uint8_t pin_number
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must have been started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values.



**Returns:**

Latest available value available from the given channel. If there was no value acquired in this channel yet, return value is NO\_VALUE. 





        

<hr>



### function retrieveConversionParametersFromMemory 

_Retrieved previously configured conversion parameters from persistent memory._ 
```C++
int8_t DataAPI::retrieveConversionParametersFromMemory (
    uint8_t pin_number
) 
```





**Parameters:**


* `pin_number` SPIN pin number



**Returns:**

0 if parameters were correcly retrieved, negative value if there was an error: -1: persistent memory is empty -2: persistent memory contains data, but its version doesn't match current version -3: data in persistent memory is corrupted -4: persistent memory contains data, but not for the requested pin -5000: pin not found. 





        

<hr>



### function setConversionParametersLinear 

_Use this function to tweak the conversion values for the channel if default values are not accurate enough._ 
```C++
void DataAPI::setConversionParametersLinear (
    uint8_t pin_number,
    float32_t gain,
    float32_t offset
) 
```





**Note:**

This function can't be called before the pin is enabled. The [**DataAPI**](classDataAPI.md) module must not have been started, neither explicitly nor by starting the Uninterruptible task.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `gain` Gain to be applied (multiplied) to the channel raw value. 
* `offset` Offset to be applied (added) to the channel value after gain has been applied. 




        

<hr>



### function setConversionParametersNtcThermistor 

_Use this function to set the conversion values for any NTC thermistor sensor if default values are not accurate enough._ 
```C++
void DataAPI::setConversionParametersNtcThermistor (
    uint8_t pin_num,
    float32_t r0,
    float32_t b,
    float32_t rdiv,
    float32_t t0
) 
```





**Note:**

This function can't be called before the sensor is enabled. The [**DataAPI**](classDataAPI.md) must not have been started, neither explicitly nor by starting the Uninterruptible task.




**Parameters:**


* `pin_number` Number of the pin from which to obtain values. 
* `r0` The NTC resistance at a reference temperature. 
* `b` The sensibility coefficient of the resistance to temperature. 
* `rdiv` The bridge dividor resistance used to condition the NTC. 
* `t0` The reference temperature of the thermistor. 




        

<hr>



### function start 

_This functions manually starts the acquisition chain._ 
```C++
int8_t DataAPI::start () 
```





**Note:**

If your code uses an uninterruptible task, you do not need to start Data Acquisition manually, it will automatically be started at the same time as the task as their internal behavior are intrinsically linked. If for some reason you have an uninterruptible task in your code, but do not want the Scheduling module to be in charge of Data Acquisition, you need to indicate it when starting the uninterruptible task. In that case, Data Acquisition must be manually started using this function. Note that in taht case, dispatch will use DMA interrupts which consumes a non-negligible amount of processor time and it is not advised.




**Note:**

Data Acquisition must be started only after ADC module configuration has been fully carried out. No ADC configuration change is allowed after module has been started. If you're using a power shield and are not sure how to initialize ADCs, you can use data.enableShieldDefaultChannels() for that purpose.




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



### function stop 

_Stops the module if it is started._ 
```C++
int8_t DataAPI::stop () 
```





**Returns:**

0 if everything went well, -1 if there was an error. Error is triggered when trying to stop Data API while it was not started. 





        

<hr>



### function storeConversionParametersInMemory 

_Store the currently configured conversion parameters of a given channel in persistent memory._ 
```C++
int8_t DataAPI::storeConversionParametersInMemory (
    uint8_t pin_number
) 
```





**Parameters:**


* `pin_number` SPIN pin number



**Returns:**

0 if parameters were correctly stored, negative value if there was an error: -1: There was an error, -5000: pin not found. 





        

<hr>



### function triggerAcquisition 

_Triggers an acquisition on a given ADC. Each channel configured on this ADC will be acquired one after the other until all configured channels have been acquired._ 
```C++
void DataAPI::triggerAcquisition (
    adc_t adc_number
) 
```





**Note:**

This function can't be called before the at least one channel is enabled on the ADC and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `adc_number` Number of the ADC on which to acquire channels. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/DataAPI.h`

