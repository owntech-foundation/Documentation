

# File DataAPI.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_data\_api**](dir_a549afb1504a6cae23e88efc51d50dd5.md) **>** [**zephyr**](dir_e68c454e5b7b38289ca5658bb88f5006.md) **>** [**public\_api**](dir_395e94c4eb2e271e16f52d3df300cdd3.md) **>** [**DataAPI.h**](DataAPI_8h.md)

[Go to the source code of this file](DataAPI_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**DataAPI**](classDataAPI.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**DispatchMethod\_t**](#enum-dispatchmethod_t)  <br> |
| enum  | [**channel\_t**](#enum-channel_t)  <br> |
| enum uint8\_t | [**parameter\_t**](#enum-parameter_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**DATA\_IS\_MISSING**](#variable-data_is_missing)   = = 2<br> |
|  const uint8\_t | [**DATA\_IS\_OK**](#variable-data_is_ok)   = = 0<br> |
|  const uint8\_t | [**DATA\_IS\_OLD**](#variable-data_is_old)   = = 1<br> |
|  const float32\_t | [**NO\_VALUE**](#variable-no_value)   = = -10000<br> |
|  [**DataAPI**](classDataAPI.md) | [**data**](#variable-data)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**ADC\_COUNT**](#variable-adc_count)   = = 5<br> |
|  const uint8\_t | [**CHANNELS\_PER\_ADC**](#variable-channels_per_adc)   = = 19<br> |










































## Public Types Documentation




### enum DispatchMethod\_t 

```C++
enum DispatchMethod_t {
    on_dma_interrupt,
    externally_triggered
};
```




<hr>



### enum channel\_t 

```C++
enum channel_t {
    UNDEFINED_CHANNEL = 0,
    DT_FOREACH_STATUS_OKAY =(adc_channels, CHANNEL_TOKEN)
};
```




<hr>



### enum parameter\_t 

```C++
enum parameter_t {
    gain = 1,
    offset = 2
};
```




<hr>
## Public Attributes Documentation




### variable DATA\_IS\_MISSING 

```C++
const uint8_t DATA_IS_MISSING;
```




<hr>



### variable DATA\_IS\_OK 

```C++
const uint8_t DATA_IS_OK;
```




<hr>



### variable DATA\_IS\_OLD 

```C++
const uint8_t DATA_IS_OLD;
```




<hr>



### variable NO\_VALUE 

```C++
const float32_t NO_VALUE;
```




<hr>



### variable data 


```C++
DataAPI data;
```





**Date:**

2024




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 




**Author:**

Thomas Walter [thomas.walter@laas.fr](mailto:thomas.walter@laas.fr) 





        

<hr>
## Public Static Attributes Documentation




### variable ADC\_COUNT 

```C++
const uint8_t ADC_COUNT;
```




<hr>



### variable CHANNELS\_PER\_ADC 

```C++
const uint8_t CHANNELS_PER_ADC;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_data_api/zephyr/public_api/DataAPI.h`

