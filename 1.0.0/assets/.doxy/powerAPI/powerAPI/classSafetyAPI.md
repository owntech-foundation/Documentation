

# Class SafetyAPI



[**ClassList**](annotated.md) **>** [**SafetyAPI**](classSafetyAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**disableSafetyApi**](#function-disablesafetyapi) () <br>_Disables the safety API fault detection task._  |
|  void | [**enableSafetyApi**](#function-enablesafetyapi) () <br>_Enables the safety API fault detection task._  |
|  bool | [**getChannelError**](#function-getchannelerror) (sensor\_t sensors\_error) <br>_Check if the sensor faced an error (went over/under threshold)_  |
|  safety\_reaction\_t | [**getChannelReaction**](#function-getchannelreaction) () <br>_returns the reaction to do when encountering an error._  |
|  float32\_t | [**getChannelThresholdMax**](#function-getchannelthresholdmax) (sensor\_t sensors\_threshold) <br>_Get the maximum threshold of the selected sensor._  |
|  float32\_t | [**getChannelThresholdMin**](#function-getchannelthresholdmin) (sensor\_t sensors\_threshold) <br>_Get the minimum threshold of the selected sensor._  |
|  bool | [**getChannelWatch**](#function-getchannelwatch) (sensor\_t sensors\_watch) <br>_check if a sensor is being monitored or not._  |
|  void | [**initShield**](#function-initshield-12) () <br>_Initializes thresholds min/max with the default value from the device tree._  |
|  void | [**initShield**](#function-initshield-22) (sensor\_t \* sensors\_watch, uint8\_t sensors\_watch\_number) <br>_Initializes thresholds min/max with the default value from the device tree._  |
|  int8\_t | [**retrieveThreshold**](#function-retrievethreshold) (sensor\_t sensor\_threshold\_retrieve) <br>_Retrieves the current minimum and maximum threshold stored in the flash (non volatile memory)_  |
|  void | [**setChannelReaction**](#function-setchannelreaction) (safety\_reaction\_t sensors\_reaction) <br>_Set the reaction to do if an error has been detected._  |
|  int8\_t | [**setChannelThresholdMax**](#function-setchannelthresholdmax) (sensor\_t \* sensors\_threshold, float32\_t \* threshold\_max, uint8\_t sensors\_threshold\_number) <br>_Set the maximum threshold for the sensors present in the list safety\_sensors._  |
|  int8\_t | [**setChannelThresholdMin**](#function-setchannelthresholdmin) (sensor\_t \* sensors\_threshold, float32\_t \* threshold\_min, uint8\_t sensors\_threshold\_number) <br>_Set the minimum threshold for the sensors present in the list safety\_sensors._  |
|  int8\_t | [**setChannelWatch**](#function-setchannelwatch) (sensor\_t \* sensors\_watch, uint8\_t sensors\_watch\_number) <br>_Enables the monitoring of the selected sensors for safety._  |
|  int8\_t | [**storeThreshold**](#function-storethreshold) (sensor\_t sensor\_threshold\_store) <br>_Store the current minimum and maximum threshold in the flash (non volatile memory)_  |
|  int8\_t | [**unsetChannelWatch**](#function-unsetchannelwatch) (sensor\_t \* sensors\_watch, uint8\_t sensors\_watch\_number) <br>_Disables the monitoring of the selected sensors for safety._  |




























## Public Functions Documentation




### function disableSafetyApi 

_Disables the safety API fault detection task._ 
```C++
void SafetyAPI::disableSafetyApi () 
```




<hr>



### function enableSafetyApi 

_Enables the safety API fault detection task._ 
```C++
void SafetyAPI::enableSafetyApi () 
```




<hr>



### function getChannelError 

_Check if the sensor faced an error (went over/under threshold)_ 
```C++
bool SafetyAPI::getChannelError (
    sensor_t sensors_error
) 
```





**Parameters:**


* `sensors_error` the sensor to check within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Returns:**

True if the sensor faced an error, false if not 





        

<hr>



### function getChannelReaction 

_returns the reaction to do when encountering an error._ 
```C++
safety_reaction_t SafetyAPI::getChannelReaction () 
```





**Returns:**

Open\_Circuit or Short\_Circuit 





        

<hr>



### function getChannelThresholdMax 

_Get the maximum threshold of the selected sensor._ 
```C++
float32_t SafetyAPI::getChannelThresholdMax (
    sensor_t sensors_threshold
) 
```





**Parameters:**


* `sensors_threshold` the sensor to check within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Returns:**

the maximum threshold 





        

<hr>



### function getChannelThresholdMin 

_Get the minimum threshold of the selected sensor._ 
```C++
float32_t SafetyAPI::getChannelThresholdMin (
    sensor_t sensors_threshold
) 
```





**Parameters:**


* `sensors_threshold` the sensor to check within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Returns:**

The minimum threshold 





        

<hr>



### function getChannelWatch 

_check if a sensor is being monitored or not._ 
```C++
bool SafetyAPI::getChannelWatch (
    sensor_t sensors_watch
) 
```





**Parameters:**


* `sensors_watch` the sensor to check within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Returns:**

`true` if the sensor is being monitored, `false` if not 





        

<hr>



### function initShield [1/2]

_Initializes thresholds min/max with the default value from the device tree._ 
```C++
void SafetyAPI::initShield () 
```



If values were stored and found in the flash they will be used instead.


All the sensors will be monitored to detect potential faults in voltage/current. 


        

<hr>



### function initShield [2/2]

_Initializes thresholds min/max with the default value from the device tree._ 
```C++
void SafetyAPI::initShield (
    sensor_t * sensors_watch,
    uint8_t sensors_watch_number
) 
```



If values were stored and found in the flash they will be used instead.


All the sensors will be monitored to detect potential faults in voltage/current.




**Parameters:**


* `sensors_watch` A list of the sensors to watch. The variables names can be: 


`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `sensors_watch_number` The number of sensors present in the list sensors\_watch. 




        

<hr>



### function retrieveThreshold 

_Retrieves the current minimum and maximum threshold stored in the flash (non volatile memory)_ 
```C++
int8_t SafetyAPI::retrieveThreshold (
    sensor_t sensor_threshold_retrieve
) 
```





**Parameters:**


* `sensor_threshold_retrieve` the sensor to retrieve the threshold stored in the NVS within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Returns:**

`0` if parameters were correctly retrieved, negative value if there was an error:



* `-1`: NVS is empty
* `-2`: NVS contains data, but their version doesn't match current version
* `-3`: NVS data is corrupted
* `-4`: NVS contains data, but not for the requested sensor 




        

<hr>



### function setChannelReaction 

_Set the reaction to do if an error has been detected._ 
```C++
void SafetyAPI::setChannelReaction (
    safety_reaction_t sensors_reaction
) 
```





**Parameters:**


* `sensors_reaction` the reaction to do:


* `Open_Circuit`: both switches are opened and no power flows to the output
* `Short_Circuit`: high-side switch is opened, and low-side is closed maintaining the output in short-circuit. Useful in motor control. 




        

<hr>



### function setChannelThresholdMax 

_Set the maximum threshold for the sensors present in the list safety\_sensors._ 
```C++
int8_t SafetyAPI::setChannelThresholdMax (
    sensor_t * sensors_threshold,
    float32_t * threshold_max,
    uint8_t sensors_threshold_number
) 
```





**Parameters:**


* `sensors_threshold` A list of the sensors to watch. The variables names can be: 


`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `threshold_max` A list of the maximum threshold to apply to the sensors in safety\_sensors.
* `sensors_threshold_number` the number of sensors present in the list sensor\_threshold



**Returns:**

`0` if successful, or `-1` if not. 





        

<hr>



### function setChannelThresholdMin 

_Set the minimum threshold for the sensors present in the list safety\_sensors._ 
```C++
int8_t SafetyAPI::setChannelThresholdMin (
    sensor_t * sensors_threshold,
    float32_t * threshold_min,
    uint8_t sensors_threshold_number
) 
```





**Parameters:**


* `sensors_threshold` A list of the sensors to watch. The variables names can be: 


`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `threshold_min` A list of the minimum threshold to apply to the sensors in safety\_sensors.
* `sensors_threshold_number` The number of sensors present in the list sensor\_threshold



**Returns:**

`0` if successful, or `-1` if not. 





        

<hr>



### function setChannelWatch 

_Enables the monitoring of the selected sensors for safety._ 
```C++
int8_t SafetyAPI::setChannelWatch (
    sensor_t * sensors_watch,
    uint8_t sensors_watch_number
) 
```





**Parameters:**


* `sensors_watch` A list of the sensors to watch. The variables names can be: 


`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `sensors_watch_number` The number of sensors present in the list sensors\_watch.



**Returns:**

`0` if successful, or `-1` if there was an error 





        

<hr>



### function storeThreshold 

_Store the current minimum and maximum threshold in the flash (non volatile memory)_ 
```C++
int8_t SafetyAPI::storeThreshold (
    sensor_t sensor_threshold_store
) 
```





**Parameters:**


* `sensor_threshold_store` the sensor to store the threshold in the NVS within the possible names:

`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `sensor_threshold_store` The sensor for which we store the threshold in the NVS



**Returns:**

`0` if parameters were correctly stored, `-1` if there was an error. 





        

<hr>



### function unsetChannelWatch 

_Disables the monitoring of the selected sensors for safety._ 
```C++
int8_t SafetyAPI::unsetChannelWatch (
    sensor_t * sensors_watch,
    uint8_t sensors_watch_number
) 
```





**Parameters:**


* `sensors_watch` A list of the sensors to watch. The variables names can be: 


`V1_LOW`,`V2_LOW`, `V_HIGH`, `I1_LOW`,`I2_LOW`,`I_HIGH`, `TEMP_SENSOR`, `EXTRA_MEAS`, `ANALOG_COMM`




**Parameters:**


* `sensors_watch_number` The number of sensors present in the list sensors\_watch.



**Returns:**

`0` if successful, or `-1` if there was an error 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_safety_api/zephyr/public_api/SafetyAPI.h`

