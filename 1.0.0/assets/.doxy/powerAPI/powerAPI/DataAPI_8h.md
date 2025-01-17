

# File DataAPI.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**DataAPI.h**](DataAPI_8h.md)

[Go to the source code of this file](DataAPI_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**DataAPI**](classDataAPI.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**DispatchMethod\_t**](#enum-dispatchmethod_t)  <br> |
| enum int8\_t | [**adc\_t**](#enum-adc_t)  <br> |
| enum uint8\_t | [**parameter\_t**](#enum-parameter_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**DATA\_IS\_MISSING**](#variable-data_is_missing)   = `2`<br> |
|  const uint8\_t | [**DATA\_IS\_OK**](#variable-data_is_ok)   = `0`<br> |
|  const uint8\_t | [**DATA\_IS\_OLD**](#variable-data_is_old)   = `1`<br> |
|  const float32\_t | [**NO\_VALUE**](#variable-no_value)   = `-10000`<br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint8\_t | [**ADC\_COUNT**](#variable-adc_count)   = `5`<br> |
|  const uint8\_t | [**CHANNELS\_PER\_ADC**](#variable-channels_per_adc)   = `19`<br> |
|  const uint8\_t | [**PIN\_COUNT**](#variable-pin_count)   = `59`<br> |










































## Public Types Documentation




### enum DispatchMethod\_t 

```C++
enum DispatchMethod_t {
    on_dma_interrupt,
    externally_triggered
};
```




<hr>



### enum adc\_t 

```C++
enum adc_t {
    UNKNOWN_ADC = -1,
    DEFAULT_ADC = 0,
    ADC_1 = 1,
    ADC_2 = 2,
    ADC_3 = 3,
    ADC_4 = 4,
    ADC_5 = 5
};
```




<hr>



### enum parameter\_t 

```C++
enum parameter_t {
    gain = 1,
    offset = 2,
    r0 = 1,
    b = 2,
    rdiv =3,
    t0 =4
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



### variable PIN\_COUNT 

```C++
const uint8_t PIN_COUNT;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/DataAPI.h`

