

# File dac.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_dac\_driver**](dir_0abf48445921be3f7255b53ec13b4b20.md) **>** [**zephyr**](dir_d911d2f35409edfb85ce6db3facf1635.md) **>** [**public\_api**](dir_a3b70d2e2f59c7f0c24476313fdba7da.md) **>** [**dac.h**](dac_8h.md)

[Go to the source code of this file](dac_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**dac\_driver\_api**](structdac__driver__api.md) <br> |
| struct | [**dac\_function\_config\_t**](structdac__function__config__t.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| typedef void(\* | [**dac\_api\_fn\_upd\_reset**](#typedef-dac_api_fn_upd_reset)  <br> |
| typedef void(\* | [**dac\_api\_fn\_upd\_step**](#typedef-dac_api_fn_upd_step)  <br> |
| typedef void(\* | [**dac\_api\_pinconfigure**](#typedef-dac_api_pinconfigure)  <br> |
| typedef void(\* | [**dac\_api\_setconstvalue**](#typedef-dac_api_setconstvalue)  <br> |
| typedef void(\* | [**dac\_api\_setfunction**](#typedef-dac_api_setfunction)  <br> |
| typedef void(\* | [**dac\_api\_start**](#typedef-dac_api_start)  <br> |
| typedef void(\* | [**dac\_api\_stop**](#typedef-dac_api_stop)  <br> |
| enum  | [**dac\_function\_t**](#enum-dac_function_t)  <br> |
| enum  | [**dac\_pin\_config\_t**](#enum-dac_pin_config_t)  <br> |
| enum  | [**dac\_polarity\_t**](#enum-dac_polarity_t)  <br> |
| enum  | [**dac\_trigger\_t**](#enum-dac_trigger_t)  <br> |






















## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**dac\_function\_update\_reset**](#function-dac_function_update_reset) (const struct device \* dev, uint8\_t channel, uint32\_t reset\_data) <br> |
|  void | [**dac\_function\_update\_step**](#function-dac_function_update_step) (const struct device \* dev, uint8\_t channel, uint32\_t step\_data) <br> |
|  void | [**dac\_pin\_configure**](#function-dac_pin_configure) (const struct device \* dev, uint8\_t channel, dac\_pin\_config\_t pin\_config) <br> |
|  void | [**dac\_set\_const\_value**](#function-dac_set_const_value) (const struct device \* dev, uint8\_t channel, uint32\_t value) <br> |
|  void | [**dac\_set\_function**](#function-dac_set_function) (const struct device \* dev, uint8\_t channel, const [**dac\_function\_config\_t**](structdac__function__config__t.md) \* function\_config) <br> |
|  void | [**dac\_start**](#function-dac_start) (const struct device \* dev, uint8\_t channel) <br> |
|  void | [**dac\_stop**](#function-dac_stop) (const struct device \* dev, uint8\_t channel) <br> |


























## Public Types Documentation




### typedef dac\_api\_fn\_upd\_reset 

```C++
typedef void(* dac_api_fn_upd_reset) (const struct device *dev, uint8_t channel, uint32_t reset_data);
```




<hr>



### typedef dac\_api\_fn\_upd\_step 

```C++
typedef void(* dac_api_fn_upd_step) (const struct device *dev, uint8_t channel, uint32_t step_data);
```




<hr>



### typedef dac\_api\_pinconfigure 

```C++
typedef void(* dac_api_pinconfigure) (const struct device *dev, uint8_t channel, dac_pin_config_t config);
```




<hr>



### typedef dac\_api\_setconstvalue 

```C++
typedef void(* dac_api_setconstvalue) (const struct device *dev, uint8_t channel, uint32_t value);
```




<hr>



### typedef dac\_api\_setfunction 

```C++
typedef void(* dac_api_setfunction) (const struct device *dev, uint8_t channel, const dac_function_config_t *config);
```




<hr>



### typedef dac\_api\_start 

```C++
typedef void(* dac_api_start) (const struct device *dev, uint8_t channel);
```




<hr>



### typedef dac\_api\_stop 

```C++
typedef void(* dac_api_stop) (const struct device *dev, uint8_t channel);
```




<hr>



### enum dac\_function\_t 

```C++
enum dac_function_t {
    dac_function_noise,
    dac_function_triangle,
    dac_function_sawtooth
};
```




<hr>



### enum dac\_pin\_config\_t 

```C++
enum dac_pin_config_t {
    dac_pin_internal,
    dac_pin_external,
    dac_pin_internal_and_external
};
```




<hr>



### enum dac\_polarity\_t 

```C++
enum dac_polarity_t {
    dac_polarity_decrement,
    dac_polarity_increment
};
```




<hr>



### enum dac\_trigger\_t 

```C++
enum dac_trigger_t {
    hrtim_trig1,
    hrtim_trig2,
    hrtim_trig3,
    hrtim_trig4,
    hrtim_trig5,
    hrtim_trig6
};
```




<hr>
## Public Static Functions Documentation




### function dac\_function\_update\_reset 

```C++
static inline void dac_function_update_reset (
    const struct device * dev,
    uint8_t channel,
    uint32_t reset_data
) 
```




<hr>



### function dac\_function\_update\_step 

```C++
static inline void dac_function_update_step (
    const struct device * dev,
    uint8_t channel,
    uint32_t step_data
) 
```




<hr>



### function dac\_pin\_configure 

```C++
static inline void dac_pin_configure (
    const struct device * dev,
    uint8_t channel,
    dac_pin_config_t pin_config
) 
```




<hr>



### function dac\_set\_const\_value 

```C++
static inline void dac_set_const_value (
    const struct device * dev,
    uint8_t channel,
    uint32_t value
) 
```




<hr>



### function dac\_set\_function 

```C++
static inline void dac_set_function (
    const struct device * dev,
    uint8_t channel,
    const dac_function_config_t * function_config
) 
```




<hr>



### function dac\_start 

```C++
static inline void dac_start (
    const struct device * dev,
    uint8_t channel
) 
```




<hr>



### function dac\_stop 

```C++
static inline void dac_stop (
    const struct device * dev,
    uint8_t channel
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_dac_driver/zephyr/public_api/dac.h`

