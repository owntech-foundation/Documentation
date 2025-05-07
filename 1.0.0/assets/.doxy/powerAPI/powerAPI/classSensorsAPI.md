

# Class SensorsAPI



[**ClassList**](annotated.md) **>** [**SensorsAPI**](classSensorsAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  float32\_t | [**convertRawValue**](#function-convertrawvalue) (sensor\_t sensor\_name, uint16\_t raw\_value) <br>_Use this function to convert values obtained using matching spin.data.get\*RawValues() function._  |
|  void | [**enableDefaultOwnverterSensors**](#function-enabledefaultownvertersensors) () <br>_This function is used to enable acquisition of all voltage/current sensors on the OwnVerter shield._  |
|  void | [**enableDefaultTwistSensors**](#function-enabledefaulttwistsensors) () <br>_This function is used to enable acquisition of all voltage/current sensors on the Twist shield._  |
|  int8\_t | [**enableSensor**](#function-enablesensor) (sensor\_t sensor\_name, adc\_t adc\_number) <br>_This function is used to enable a shield sensor for acquisition by a given ADC._  |
|  float32\_t | [**getLatestValue**](#function-getlatestvalue) (sensor\_t sensor\_name, uint8\_t \* dataValid=nullptr) <br>_This function returns the latest acquired measure expressed in the relevant unit for the sensor: Volts, Amperes, or Degree Celsius._  |
|  uint16\_t \* | [**getRawValues**](#function-getrawvalues) (sensor\_t sensor\_name, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified sensor._  |
|  float32\_t \* | [**getValues**](#function-getvalues) (sensor\_t sensor\_name, uint32\_t & number\_of\_values\_acquired) <br>_Function to access the acquired data for specified pin._  |
|  float32\_t | [**peekLatestValue**](#function-peeklatestvalue) (sensor\_t sensor\_name) <br>_Function to access the latest value available from the sensor._  |
|  int8\_t | [**retrieveParametersFromMemory**](#function-retrieveparametersfrommemory) (sensor\_t sensor\_name) <br>_Use this function to read the gain and offset parameters of the board to is non-volatile memory._  |
|  conversion\_type\_t | [**retrieveStoredConversionType**](#function-retrievestoredconversiontype) (sensor\_t sensor\_name) <br>_Use this function to get the current conversion type for the chosen sensor._  |
|  float32\_t | [**retrieveStoredParameterValue**](#function-retrievestoredparametervalue) (sensor\_t sensor\_name, parameter\_t parameter\_name) <br>_Use this function to get the current conversion parameters for the chosen sensor._  |
|  void | [**setConversionParametersLinear**](#function-setconversionparameterslinear) (sensor\_t sensor\_name, float32\_t gain, float32\_t offset) <br>_Use this function to tweak the conversion values for any linear sensor if default values are not accurate enough._  |
|  void | [**setConversionParametersNtcThermistor**](#function-setconversionparametersntcthermistor) (sensor\_t sensor\_name, float32\_t r0, float32\_t b, float32\_t rdiv, float32\_t t0) <br>_Use this function to set the conversion values for any NTC thermistor sensor if default values are not accurate enough._  |
|  void | [**setOwnverterTempMeas**](#function-setownvertertempmeas) (ownverter\_temp\_sensor\_t temperature\_sensor) <br>_This function sets the GPIOs attached to the MUX to control which temperature sensor will be measured._  |
|  void | [**setTwistSensorsUserCalibrationFactors**](#function-settwistsensorsusercalibrationfactors) () <br>_Manually set parameters values using console. You will be directed via console to input the parameters of each sensor of the Twist board._  |
|  int8\_t | [**storeParametersInMemory**](#function-storeparametersinmemory) (sensor\_t sensor\_name) <br>_Use this function to write the gain and offset parameters of the board to is non-volatile memory._  |
|  void | [**triggerTwistTempMeas**](#function-triggertwisttempmeas) (sensor\_t temperature\_sensor) <br>_Manually triggers the temperature measurement of the Twist board._  |




























## Public Functions Documentation




### function convertRawValue 

_Use this function to convert values obtained using matching spin.data.get\*RawValues() function._ 
```C++
float32_t SensorsAPI::convertRawValue (
    sensor_t sensor_name,
    uint16_t raw_value
) 
```



Conversion will be done to relevant unit for the data: Volts, Amperes, or Degree Celsius.




**Note:**

This function can NOT be called before the sensor is enabled.




**Parameters:**


* `sensor_name` Name of the shield sensor from which the value originates 
* `raw_value` Raw value obtained from which the value originates



**Returns:**

Converted value in the relevant unit.


Returns `ERROR_CHANNEL_NOT_FOUND` if the sensor is not active. 


        

<hr>



### function enableDefaultOwnverterSensors 

_This function is used to enable acquisition of all voltage/current sensors on the OwnVerter shield._ 
```C++
void SensorsAPI::enableDefaultOwnverterSensors () 
```





**Note:**

ADCs are triggered simultaneously.




**Note:**

Sensors are attributed to ADC1 and ADC2 as follows:



* `ADC1_LIST[5]`: [`V1_LOW`,`V2_LOW`, `I3_LOW`, `V_HIGH`, `V_NEUTR` ] 

* `ADC2_LIST[5]`: [`I1_LOW`,`I2_LOW`, `V3_LOW`, `I_HIGH`, `TEMP_SENSOR`]




This function will configure ADC 1 and 2 to be automatically triggered by the HRTIM, so the board must be configured as a power converted to enable HRTIM events.


All other ADCs remain software triggered, thus will only be acquired when triggerAcquisition() is called.


It also configures the gpios that control the MUX that chooses which temperature will be measured.




**Note:**

This function must be called _before_ ADC is started. 





        

<hr>



### function enableDefaultTwistSensors 

_This function is used to enable acquisition of all voltage/current sensors on the Twist shield._ 
```C++
void SensorsAPI::enableDefaultTwistSensors () 
```





**Note:**

ADCs are triggered simultaneously.




**Note:**

Sensors are attributed to ADC1 and ADC2 as follows:



* `ADC1_LIST[3]`: [`V1_LOW`,`V2_LOW`,`V_HIGH`] 

* `ADC2_LIST[3]`: [`I1_LOW`,`I2_LOW`,`I_HIGH`]This function will configure ADC 1 and 2 to be automatically triggered by the HRTIM, so the board must be configured as a power converted to enable HRTIM events.All other ADCs remain software triggered, thus will only be acquired when triggerAcquisition() is called.






**Warning:**

This function must be called `before` ADC is started. 





        

<hr>



### function enableSensor 

_This function is used to enable a shield sensor for acquisition by a given ADC._ 
```C++
int8_t SensorsAPI::enableSensor (
    sensor_t sensor_name,
    adc_t adc_number
) 
```





**Note:**

This function requires the presence of an "shield-sensor" node in the shield device-tree.




**Note:**

This function must be called `before` ADC is started.




**Parameters:**


* `sensor_name` Name of the sensor using enumeration sensor\_t. 
* `adc_number` The ADC which should be used for acquisition.



**Returns:**

0 if the sensor was correctly enabled, negative value if there was an error.


Public functions accessible only when using a power shield 


        

<hr>



### function getLatestValue 

_This function returns the latest acquired measure expressed in the relevant unit for the sensor: Volts, Amperes, or Degree Celsius._ 
```C++
float32_t SensorsAPI::getLatestValue (
    sensor_t sensor_name,
    uint8_t * dataValid=nullptr
) 
```





**Note:**

This function can NOT be called before the sensor is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Note:**

When using this functions, you loose the ability to access raw values using spin.data.get\*RawValues() function for the matching sensor, as spin.data.get\*() function clears the buffer on each call.




**Parameters:**


* `sensor_name` Name of the shield sensor from which to obtain value. 
* `dataValid` Pointer to an `uint8_t` variable.

This parameter is optional.


If this parameter is provided, it will be updated to indicate information about spin.data.


Possible values for this parameter will be:



* `DATA_IS_OK` if returned data is a newly acquired data,
* `DATA_IS_OLD` if returned data has already been provided before (no new data available since latest time this function was called),
* `DATA_IS_MISSING` if returned data is `NO_VALUE`.






**Returns:**

Latest measure acquired by the sensor.


If no value was acquired by this sensor yet, return value is `NO_VALUE`. 


        

<hr>



### function getRawValues 

_Function to access the acquired data for specified sensor._ 
```C++
uint16_t * SensorsAPI::getRawValues (
    sensor_t sensor_name,
    uint32_t & number_of_values_acquired
) 
```








**Note:**

This function can NOT be called before the sensor is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Note:**

When calling this function, it invalidates the buffer returned by a previous call to the same function.


However, different sensors buffers are independent from each other.




**Note:**

When using this functions, the user is responsible for data conversion.


Use matching spin.data.convert\*() function for this purpose.




**Note:**

When using this function, DO NOT use the function to get the latest converted value for the same sensor as this function will clear the buffer and disregard all values but the latest.




**Parameters:**


* `sensor_name` Name of the shield sensor from which to obtain values. 
* `number_of_values_acquired` Pass an `uint32_t` variable. 



**Returns:**

Pointer to a buffer in which the acquired values are stored. If number\_of\_values\_acquired is 0, do not try to access the buffer as it may be nullptr. 





        

<hr>



### function getValues 

_Function to access the acquired data for specified pin._ 
```C++
float32_t * SensorsAPI::getValues (
    sensor_t sensor_name,
    uint32_t & number_of_values_acquired
) 
```








**Warning:**

This is an expensive function. 




**Note:**

This function can NOT be called before the pin is enabled. 




**Note:**

When calling this function, it invalidates the array returned by a previous call to the same function.


However, different channels buffers are independent from each other.




**Parameters:**


* `sensor_name` Name of the shield sensor from which to obtain values. 
* `number_of_values_acquired` Pass an `uint32_t` variable. This variable will be updated with the number of values that are present in the returned buffer.



**Returns:**

Pointer to an array in which the acquired values are stored.  





        

<hr>



### function peekLatestValue 

_Function to access the latest value available from the sensor._ 
```C++
float32_t SensorsAPI::peekLatestValue (
    sensor_t sensor_name
) 
```








**Note:**

This function can NOT be called before the sensor is enabled and the [**DataAPI**](classDataAPI.md) module is started, either explicitly or by starting the Uninterruptible task.




**Parameters:**


* `sensor_name` Name of the shield sensor from which to obtain value.



**Returns:**

Latest available value available from the given sensor. If there was no value acquired by this sensor yet, return value is `NO_VALUE`. 





        

<hr>



### function retrieveParametersFromMemory 

_Use this function to read the gain and offset parameters of the board to is non-volatile memory._ 
```C++
int8_t SensorsAPI::retrieveParametersFromMemory (
    sensor_t sensor_name
) 
```





**Parameters:**


* `sensor_name` Name of the shield sensor to save the values. 



**Returns:**

`0` if parameters were correctly retrieved,negative value if there was an error:



* `-1`: NVS is empty
* `-2`: NVS contains data, but their version doesn't match current version
* `-3`: NVS data is corrupted
* `-4`: NVS contains data, but not for the requested channel 




        

<hr>



### function retrieveStoredConversionType 

_Use this function to get the current conversion type for the chosen sensor._ 
```C++
conversion_type_t SensorsAPI::retrieveStoredConversionType (
    sensor_t sensor_name
) 
```





**Note:**

This function can NOT be called before the sensor is enabled.




**Parameters:**


* `sensor_name` Name of the shield sensor to get a conversion parameter. 




        

<hr>



### function retrieveStoredParameterValue 

_Use this function to get the current conversion parameters for the chosen sensor._ 
```C++
float32_t SensorsAPI::retrieveStoredParameterValue (
    sensor_t sensor_name,
    parameter_t parameter_name
) 
```





**Note:**

This function can NOT be called before the sensor is enabled.




**Parameters:**


* `sensor_name` Name of the shield sensor to get a conversion parameter. 
* `parameter_name` Paramater to be retrieved: `gain` or `offset`. 




        

<hr>



### function setConversionParametersLinear 

_Use this function to tweak the conversion values for any linear sensor if default values are not accurate enough._ 
```C++
void SensorsAPI::setConversionParametersLinear (
    sensor_t sensor_name,
    float32_t gain,
    float32_t offset
) 
```





**Note:**

This function can NOT be called before the sensor is enabled. 




**Parameters:**


* `sensor_name` Name of the shield sensor to set conversion values. 
* `gain` Gain to be applied (multiplied) to the sensor raw value. 
* `offset` Offset to be applied (added) to the sensor value after gain has been applied. 




        

<hr>



### function setConversionParametersNtcThermistor 

_Use this function to set the conversion values for any NTC thermistor sensor if default values are not accurate enough._ 
```C++
void SensorsAPI::setConversionParametersNtcThermistor (
    sensor_t sensor_name,
    float32_t r0,
    float32_t b,
    float32_t rdiv,
    float32_t t0
) 
```





**Note:**

This function can NOT be called before the sensor is enabled. 




**Parameters:**


* `sensor_name` Name of the shield sensor to set conversion values. 
* `r0` The NTC resistance at a reference temperature. 
* `b` The sensibility coefficient of the resistance to temperature. 
* `rdiv` The bridge divider resistance used to condition the NTC. 
* `t0` The reference temperature of the thermistor. 




        

<hr>



### function setOwnverterTempMeas 

_This function sets the GPIOs attached to the MUX to control which temperature sensor will be measured._ 
```C++
void SensorsAPI::setOwnverterTempMeas (
    ownverter_temp_sensor_t temperature_sensor
) 
```





**Parameters:**


* `temperature_sensor` Name of the temperature sensor to trigger: `TEMP_1`, `TEMP_2`, `TEMP_3`



**Note:**

This function will decide which value will be read automatically by the ADC2 to which the temperature of the Ownverter is linked.


The logic is:



* `TEMP_1: IN1 = T IN2 = F`
* `TEMP_2: IN1 = F IN2 = T`
* `TEMP_3: IN1 = T IN2 = T`




Please refer to the OwnVerter documentation and repository for more details 


        

<hr>



### function setTwistSensorsUserCalibrationFactors 

_Manually set parameters values using console. You will be directed via console to input the parameters of each sensor of the Twist board._ 
```C++
void SensorsAPI::setTwistSensorsUserCalibrationFactors () 
```



After the parameters have been set, they will be stored in Spin Non-Volatile memory so that they are automatically applied on subsequent boots.




**Note:**

This function requires a console to interact with the user. 




**Note:**

This function can NOT be called before _all_ Twist sensors have been enabled (you can use [**enableDefaultTwistSensors()**](classSensorsAPI.md#function-enabledefaulttwistsensors) for that purpose).


The [**DataAPI**](classDataAPI.md) must not have been started, neither explicitly nor by starting the Uninterruptible task. 


        

<hr>



### function storeParametersInMemory 

_Use this function to write the gain and offset parameters of the board to is non-volatile memory._ 
```C++
int8_t SensorsAPI::storeParametersInMemory (
    sensor_t sensor_name
) 
```





**Note:**

This function should be called after updating the parameters using setParameters.




**Parameters:**


* `sensor_name` Name of the shield sensor to save the values. 




        

<hr>



### function triggerTwistTempMeas 

_Manually triggers the temperature measurement of the Twist board._ 
```C++
void SensorsAPI::triggerTwistTempMeas (
    sensor_t temperature_sensor
) 
```





**Parameters:**


* `temperature_sensor` Name of the temperature sensor to trigger: `TEMP_SENSOR_1`, `TEMP_SENSOR_2`



**Note:**

This function must be called to trigger a conversion of the ADC to which the sensor is linked.


It must be called `BEFORE` reading a new measurement.


Account for delays in the measurement. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_shield_api/zephyr/src/Sensors.h`

