

# File nvs\_storage.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_flash\_driver**](dir_47b8019f52d29447200a9fe029247d2f.md) **>** [**zephyr**](dir_b20d16dae1dc20106d56014478318b72.md) **>** [**public\_api**](dir_ce5a725b60c8953eacf539a6c77604d3.md) **>** [**nvs\_storage.h**](nvs__storage_8h.md)

[Go to the source code of this file](nvs__storage_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**nvs\_category\_t**](#enum-nvs_category_t)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**nvs\_storage\_clear\_all\_stored\_data**](#function-nvs_storage_clear_all_stored_data) () <br> |
|  uint16\_t | [**nvs\_storage\_get\_current\_version**](#function-nvs_storage_get_current_version) () <br> |
|  uint16\_t | [**nvs\_storage\_get\_version\_in\_nvs**](#function-nvs_storage_get_version_in_nvs) () <br> |
|  int8\_t | [**nvs\_storage\_retrieve\_data**](#function-nvs_storage_retrieve_data) (uint16\_t data\_id, void \* data\_buffer, uint8\_t data\_buffer\_size) <br> |
|  int8\_t | [**nvs\_storage\_store\_data**](#function-nvs_storage_store_data) (uint16\_t data\_id, const void \* data, uint8\_t data\_size) <br> |




























## Public Types Documentation




### enum nvs\_category\_t 

```C++
enum nvs_category_t {
    VERSION = 0x0100,
    ADC_CALIBRATION = 0x0200,
    MEASURE_THRESHOLD = 0x0300
};
```




<hr>
## Public Functions Documentation




### function nvs\_storage\_clear\_all\_stored\_data 

```C++
int8_t nvs_storage_clear_all_stored_data () 
```




<hr>



### function nvs\_storage\_get\_current\_version 

```C++
uint16_t nvs_storage_get_current_version () 
```




<hr>



### function nvs\_storage\_get\_version\_in\_nvs 

```C++
uint16_t nvs_storage_get_version_in_nvs () 
```




<hr>



### function nvs\_storage\_retrieve\_data 

```C++
int8_t nvs_storage_retrieve_data (
    uint16_t data_id,
    void * data_buffer,
    uint8_t data_buffer_size
) 
```




<hr>



### function nvs\_storage\_store\_data 

```C++
int8_t nvs_storage_store_data (
    uint16_t data_id,
    const void * data,
    uint8_t data_size
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_flash_driver/zephyr/public_api/nvs_storage.h`

