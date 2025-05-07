

# File data\_conversion.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**data**](dir_5931dfac2e1245380efda5ad202dc380.md) **>** [**data\_conversion.h**](data__conversion_8h.md)

[Go to the source code of this file](data__conversion_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum int8\_t | [**conversion\_type\_t**](#enum-conversion_type_t)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  float32\_t | [**data\_conversion\_convert\_raw\_value**](#function-data_conversion_convert_raw_value) (uint8\_t adc\_num, uint8\_t channel\_num, uint16\_t raw\_value) <br>_Converts the values of the given raw\_value into a physical unit._  |
|  conversion\_type\_t | [**data\_conversion\_get\_conversion\_type**](#function-data_conversion_get_conversion_type) (uint8\_t adc\_num, uint8\_t channel\_num) <br>_Get the conversion type for a given channel._  |
|  float32\_t | [**data\_conversion\_get\_parameter**](#function-data_conversion_get_parameter) (uint8\_t adc\_num, uint8\_t channel\_num, uint8\_t parameter\_num) <br>_Get a conversion parameter for a given channel._  |
|  void | [**data\_conversion\_init**](#function-data_conversion_init) () <br>_Initialize data conversion._  |
|  int8\_t | [**data\_conversion\_retrieve\_channel\_parameters\_from\_nvs**](#function-data_conversion_retrieve_channel_parameters_from_nvs) (uint8\_t adc\_num, uint8\_t channel\_num) <br>_Retrieved previously configured conversion parameters from NVS._  |
|  void | [**data\_conversion\_set\_conversion\_parameters\_linear**](#function-data_conversion_set_conversion_parameters_linear) (uint8\_t adc\_num, uint8\_t channel\_num, float32\_t gain, float32\_t offset) <br>_Set the conversion type for a given channel to linear and set parameters values._  |
|  void | [**data\_conversion\_set\_conversion\_parameters\_therm**](#function-data_conversion_set_conversion_parameters_therm) (uint8\_t adc\_num, uint8\_t channel\_num, float32\_t r0, float32\_t b, float32\_t rdiv, float32\_t t0) <br>_Set the conversion type for a given channel to therm and set parameters values._  |
|  int8\_t | [**data\_conversion\_store\_channel\_parameters\_in\_nvs**](#function-data_conversion_store_channel_parameters_in_nvs) (uint8\_t adc\_num, uint8\_t channel\_num) <br>_Store the currently configured conversion parameters of a given channel in NVS._  |




























## Public Types Documentation




### enum conversion\_type\_t 

```C++
enum conversion_type_t {
    conversion_linear = 0,
    conversion_therm = 1,
    no_channel_error = -5
};
```



Type definitions 


        

<hr>
## Public Functions Documentation




### function data\_conversion\_convert\_raw\_value 

_Converts the values of the given raw\_value into a physical unit._ 
```C++
float32_t data_conversion_convert_raw_value (
    uint8_t adc_num,
    uint8_t channel_num,
    uint16_t raw_value
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number 
* `raw_value` Value to convert



**Returns:**

A float32\_t value representing the value in the physical unit of the given channel. 





        

<hr>



### function data\_conversion\_get\_conversion\_type 

_Get the conversion type for a given channel._ 
```C++
conversion_type_t data_conversion_get_conversion_type (
    uint8_t adc_num,
    uint8_t channel_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number



**Returns:**

Currently configured conversion type. 





        

<hr>



### function data\_conversion\_get\_parameter 

_Get a conversion parameter for a given channel._ 
```C++
float32_t data_conversion_get_parameter (
    uint8_t adc_num,
    uint8_t channel_num,
    uint8_t parameter_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number 
* `parameter_num` Number of the parameter to retrieve. E.g. for linear parameters, gain is param 1 and offset is param 2.



**Returns:**

Current value of the given parameter. 





        

<hr>



### function data\_conversion\_init 

_Initialize data conversion._ 
```C++
void data_conversion_init () 
```



API 


        

<hr>



### function data\_conversion\_retrieve\_channel\_parameters\_from\_nvs 

_Retrieved previously configured conversion parameters from NVS._ 
```C++
int8_t data_conversion_retrieve_channel_parameters_from_nvs (
    uint8_t adc_num,
    uint8_t channel_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number



**Returns:**

0 if parameters were correctly retrieved, negative value if there was an error:



* `-1`: NVS is empty
* `-2`: NVS contains data, but their version doesn't match current version
* `-3`: NVS data is corrupted
* `-4`: NVS contains data, but not for the requested channel 




        

<hr>



### function data\_conversion\_set\_conversion\_parameters\_linear 

_Set the conversion type for a given channel to linear and set parameters values._ 
```C++
void data_conversion_set_conversion_parameters_linear (
    uint8_t adc_num,
    uint8_t channel_num,
    float32_t gain,
    float32_t offset
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number 
* `gain` Gain of the channel 
* `offset` Offset of the channel 




        

<hr>



### function data\_conversion\_set\_conversion\_parameters\_therm 

_Set the conversion type for a given channel to therm and set parameters values._ 
```C++
void data_conversion_set_conversion_parameters_therm (
    uint8_t adc_num,
    uint8_t channel_num,
    float32_t r0,
    float32_t b,
    float32_t rdiv,
    float32_t t0
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number 
* `r0` Parameter R0 for the channel 
* `b` Parameter B for the channel 
* `rdiv` Parameter RDIV for the channel 
* `t0` Parameter T0 for the channel 




        

<hr>



### function data\_conversion\_store\_channel\_parameters\_in\_nvs 

_Store the currently configured conversion parameters of a given channel in NVS._ 
```C++
int8_t data_conversion_store_channel_parameters_in_nvs (
    uint8_t adc_num,
    uint8_t channel_num
) 
```





**Parameters:**


* `adc_num` ADC number 
* `channel_num` Channel number



**Returns:**

0 if parameters were correctly stored, -1 if there was an error. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/data/data_conversion.h`

