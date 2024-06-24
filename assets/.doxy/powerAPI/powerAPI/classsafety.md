

# Class safety



[**ClassList**](annotated.md) **>** [**safety**](classsafety.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**disableSafetyApi**](#function-disablesafetyapi) () <br>_disable the safet API fault detection task_  |
|  void | [**enableSafetyApi**](#function-enablesafetyapi) () <br>_enable the safet API fault detection task_  |
|  bool | [**getChannelError**](#function-getchannelerror) (channel\_t channels\_error) <br>_check if the channel faced an error (went over/under threshold)_  |
|  safety\_reaction\_t | [**getChannelReaction**](#function-getchannelreaction) () <br>_returns the reaction to do when encoutering an error._  |
|  float32\_t | [**getChannelThresholdMax**](#function-getchannelthresholdmax) (channel\_t channels\_threshold) <br>_get the maximum threshold of the selected channel_  |
|  float32\_t | [**getChannelThresholdMin**](#function-getchannelthresholdmin) (channel\_t channels\_threshold) <br>_get the minimum threshold of the selected channel_  |
|  bool | [**getChannelWatch**](#function-getchannelwatch) (channel\_t channels\_watch) <br>_check if a channel is being monitored or not._  |
|  void | [**init\_shield**](#function-init_shield-12) () <br>_Initializes thresholds min/max with the default value from the device tree, if values were stored and found in the flash they will be used instead. All the channels will be monitored to detect potential faults in voltage/current._  |
|  void | [**init\_shield**](#function-init_shield-22) (channel\_t \* channels\_watch, uint8\_t channels\_watch\_number) <br>_Initializes thresholds min/max with the default value from the device tree, if values were stored and found in the flash they will be used instead. All the channels will be monitored to detect potential faults in voltage/current._  |
|  int8\_t | [**retrieveThreshold**](#function-retrievethreshold) (channel\_t channel\_threshold\_retrieve) <br>_store the current minimum and maximum threshold in the flash (non volatile memory)_  |
|  void | [**setChannelReaction**](#function-setchannelreaction) (safety\_reaction\_t channels\_reaction) <br>_Set the reaction to do if an error has been detected. Choose either open-circuit (both switches are opened and no power flows in the output) or short-circuit (high-side switch is opened, and low-side is closed maintaining the output in short-circuit)_  |
|  int8\_t | [**setChannelThresholdMax**](#function-setchannelthresholdmax) (channel\_t \* channels\_threshold, float32\_t \* threshold\_max, uint8\_t channels\_threshold\_number) <br>_set the maximum threshold for the channels present in the list safety\_channels._  |
|  int8\_t | [**setChannelThresholdMin**](#function-setchannelthresholdmin) (channel\_t \* channels\_threshold, float32\_t \* threshold\_min, uint8\_t channels\_threshold\_number) <br>_set the minimum threshold for the channels present in the list safety\_channels._  |
|  int8\_t | [**setChannelWatch**](#function-setchannelwatch) (channel\_t \* channels\_watch, uint8\_t channels\_watch\_number) <br>_Enables the monitoring of the selected channels for safety._  |
|  int8\_t | [**storeThreshold**](#function-storethreshold) (channel\_t channel\_threshold\_store) <br>_store the current minimum and maximum threshold in the flash (non volatile memory)_  |
|  int8\_t | [**unsetChannelWatch**](#function-unsetchannelwatch) (channel\_t \* channels\_watch, uint8\_t channels\_watch\_number) <br>_Disables the monitoring of the selected channels for safety._  |




























## Public Functions Documentation




### function disableSafetyApi 

_disable the safet API fault detection task_ 
```C++
void safety::disableSafetyApi () 
```





**Returns:**

none 





        

<hr>



### function enableSafetyApi 

_enable the safet API fault detection task_ 
```C++
void safety::enableSafetyApi () 
```





**Returns:**

none 





        

<hr>



### function getChannelError 

_check if the channel faced an error (went over/under threshold)_ 
```C++
bool safety::getChannelError (
    channel_t channels_error
) 
```





**Parameters:**


* `channels_error` the channel to check 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

true if the channel faced an error, false if not 





        

<hr>



### function getChannelReaction 

_returns the reaction to do when encoutering an error._ 
```C++
safety_reaction_t safety::getChannelReaction () 
```





**Returns:**

Open\_Circuit or Short\_Circuit 





        

<hr>



### function getChannelThresholdMax 

_get the maximum threshold of the selected channel_ 
```C++
float32_t safety::getChannelThresholdMax (
    channel_t channels_threshold
) 
```





**Parameters:**


* `channels_threshold` the channel to check 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

the maximum threshold 





        

<hr>



### function getChannelThresholdMin 

_get the minimum threshold of the selected channel_ 
```C++
float32_t safety::getChannelThresholdMin (
    channel_t channels_threshold
) 
```





**Parameters:**


* `channels_threshold` the channel to check 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

the minimum threshold 





        

<hr>



### function getChannelWatch 

_check if a channel is being monitored or not._ 
```C++
bool safety::getChannelWatch (
    channel_t channels_watch
) 
```





**Parameters:**


* `channels_watch` the channel to check 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

true if the channel is being monitored, false if not 





        

<hr>



### function init\_shield [1/2]

_Initializes thresholds min/max with the default value from the device tree, if values were stored and found in the flash they will be used instead. All the channels will be monitored to detect potential faults in voltage/current._ 
```C++
void safety::init_shield () 
```





**Returns:**

none 





        

<hr>



### function init\_shield [2/2]

_Initializes thresholds min/max with the default value from the device tree, if values were stored and found in the flash they will be used instead. All the channels will be monitored to detect potential faults in voltage/current._ 
```C++
void safety::init_shield (
    channel_t * channels_watch,
    uint8_t channels_watch_number
) 
```





**Parameters:**


* `channels_watch` A list of the channels to watch. The variables in the list can be : V1\_LOW, V2\_LOW, V\_HIGH, I1\_LOW, I2\_LOW, I\_HIGH, TEMP\_SENSOR, EXTRA\_MEAS, ANALOG\_COMM 
* `channels_watch_number` The number of channels present in the list channels\_watch.



**Returns:**

none 





        

<hr>



### function retrieveThreshold 

_store the current minimum and maximum threshold in the flash (non volatile memory)_ 
```C++
int8_t safety::retrieveThreshold (
    channel_t channel_threshold_retrieve
) 
```





**Parameters:**


* `channel_threshold_retrieve` the channel for which we store the threshold in the NVS 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

0 if parameters were correcly retreived, negative value if there was an error: -1: NVS is empty -2: NVS contains data, but their version doesn't match current version -3: NVS data is corrupted -4: NVS contains data, but not for the requested channel 





        

<hr>



### function setChannelReaction 

_Set the reaction to do if an error has been detected. Choose either open-circuit (both switches are opened and no power flows in the output) or short-circuit (high-side switch is opened, and low-side is closed maintaining the output in short-circuit)_ 
```C++
void safety::setChannelReaction (
    safety_reaction_t channels_reaction
) 
```





**Parameters:**


* `channels_reaction` the reaction to do 
  * Open\_Circuit 
  * Short\_Circuit





**Returns:**

none 





        

<hr>



### function setChannelThresholdMax 

_set the maximum threshold for the channels present in the list safety\_channels._ 
```C++
int8_t safety::setChannelThresholdMax (
    channel_t * channels_threshold,
    float32_t * threshold_max,
    uint8_t channels_threshold_number
) 
```





**Parameters:**


* `channels_threshold` A list of the channels to set the threshold. The variables in the list can be : V1\_LOW, V2\_LOW, V\_HIGH, I1\_LOW, I2\_LOW, I\_HIGH, TEMP\_SENSOR, EXTRA\_MEAS, ANALOG\_COMM 
* `threshold_max` A list of the maximum threshold to apply to the channels in safety\_channels. 
* `channels_threshold_number` the number of channels present in the list channel\_threshold



**Returns:**

0 if sucessfull, or -1 if not. 





        

<hr>



### function setChannelThresholdMin 

_set the minimum threshold for the channels present in the list safety\_channels._ 
```C++
int8_t safety::setChannelThresholdMin (
    channel_t * channels_threshold,
    float32_t * threshold_min,
    uint8_t channels_threshold_number
) 
```





**Parameters:**


* `channels_threshold` A list of the channels to set the threshold. The variables in the list can be : V1\_LOW, V2\_LOW, V\_HIGH, I1\_LOW, I2\_LOW, I\_HIGH, TEMP\_SENSOR, EXTRA\_MEAS, ANALOG\_COMM 
* `threshold_min` A list of the minimum threshold to apply to the channels in safety\_channels. 
* `channels_threshold_number` the number of channels present in the list channel\_threshold



**Returns:**

0 if sucessfull, or -1 if not. 





        

<hr>



### function setChannelWatch 

_Enables the monitoring of the selected channels for safety._ 
```C++
int8_t safety::setChannelWatch (
    channel_t * channels_watch,
    uint8_t channels_watch_number
) 
```





**Parameters:**


* `channels_watch` A list of the channels to watch. The variables in the list can be : V1\_LOW, V2\_LOW, V\_HIGH, I1\_LOW, I2\_LOW, I\_HIGH, TEMP\_SENSOR, EXTRA\_MEAS, ANALOG\_COMM 
* `channels_watch_number` The number of channels present in the list channels\_watch.



**Returns:**

0 if sucessfull, or -1 if there was an error 





        

<hr>



### function storeThreshold 

_store the current minimum and maximum threshold in the flash (non volatile memory)_ 
```C++
int8_t safety::storeThreshold (
    channel_t channel_threshold_store
) 
```





**Parameters:**


* `channel_threshold_store` the channel for which we store the threshold in the NVS 
  * V1\_LOW 
  * V2\_LOW 
  * V\_HIGH 
  * I1\_LOW 
  * I2\_LOW 
  * I\_HIGH 
  * TEMP\_SENSOR 
  * EXTRA\_MEAS 
  * ANALOG\_COMM





**Returns:**

0 if parameters were correcly stored, -1 if there was an error. 





        

<hr>



### function unsetChannelWatch 

_Disables the monitoring of the selected channels for safety._ 
```C++
int8_t safety::unsetChannelWatch (
    channel_t * channels_watch,
    uint8_t channels_watch_number
) 
```





**Parameters:**


* `channels_watch` A list of the channels to unwatch. The variables in the list can be : V1\_LOW, V2\_LOW, V\_HIGH, I1\_LOW, I2\_LOW, I\_HIGH, TEMP\_SENSOR, EXTRA\_MEAS, ANALOG\_COMM 
* `channels_watch_number` The number of channels present in the list channels\_watch.



**Returns:**

0 if sucessfull, or -1 if there was an error 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_safety_api/zephyr/public_api/SafetyAPI.h`

