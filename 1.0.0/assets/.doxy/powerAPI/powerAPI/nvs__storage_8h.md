

# File nvs\_storage.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_flash\_driver**](dir_47b8019f52d29447200a9fe029247d2f.md) **>** [**zephyr**](dir_b20d16dae1dc20106d56014478318b72.md) **>** [**public\_api**](dir_ce5a725b60c8953eacf539a6c77604d3.md) **>** [**nvs\_storage.h**](nvs__storage_8h.md)

[Go to the source code of this file](nvs__storage_8h_source.md)




















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**nvs\_category\_t**](#enum-nvs_category_t)  <br>_Defines the NVS categories._  |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**nvs\_storage\_clear\_all\_stored\_data**](#function-nvs_storage_clear_all_stored_data) () <br>_Clear all data stored in the NVS partition._  |
|  uint16\_t | [**nvs\_storage\_get\_current\_version**](#function-nvs_storage_get_current_version) () <br>_Get the current in-code version of the NVS layout._  |
|  uint16\_t | [**nvs\_storage\_get\_version\_in\_nvs**](#function-nvs_storage_get_version_in_nvs) () <br>_Get the version stored in the NVS flash memory._  |
|  int8\_t | [**nvs\_storage\_retrieve\_data**](#function-nvs_storage_retrieve_data) (uint16\_t data\_id, void \* data\_buffer, uint8\_t data\_buffer\_size) <br>_Retrieve a data item from non-volatile storage (NVS)._  |
|  int8\_t | [**nvs\_storage\_store\_data**](#function-nvs_storage_store_data) (uint16\_t data\_id, const void \* data, uint8\_t data\_size) <br>_Store a data item in non-volatile storage (NVS)._  |




























## Public Types Documentation




### enum nvs\_category\_t 

_Defines the NVS categories._ 
```C++
enum nvs_category_t {
    VERSION = 0x0100,
    ADC_CALIBRATION = 0x0200,
    MEASURE_THRESHOLD = 0x0300
};
```




* `VERSION` = 0x0100
* `ADC_CALIBRATION` = 0x0200
* `MEASURE_THRESHOLD` = 0x0300






**Note:**

Must be on the upper half of the 2-bytes value, hence end with 00 





        

<hr>
## Public Functions Documentation




### function nvs\_storage\_clear\_all\_stored\_data 

_Clear all data stored in the NVS partition._ 
```C++
int8_t nvs_storage_clear_all_stored_data () 
```



Erases all key-value entries in the configured NVS area. Use with caution.




**Returns:**

0 on success, negative value on error. 





        

<hr>



### function nvs\_storage\_get\_current\_version 

_Get the current in-code version of the NVS layout._ 
```C++
uint16_t nvs_storage_get_current_version () 
```



This version corresponds to the structure of data expected by the firmware.


Used to detect incompatibility between NVS layout and firmware logic.




**Returns:**

Current version defined in code. 





        

<hr>



### function nvs\_storage\_get\_version\_in\_nvs 

_Get the version stored in the NVS flash memory._ 
```C++
uint16_t nvs_storage_get_version_in_nvs () 
```



Used to compare with the in-code version to validate compatibility.




**Returns:**

Stored version value from flash. 





        

<hr>



### function nvs\_storage\_retrieve\_data 

_Retrieve a data item from non-volatile storage (NVS)._ 
```C++
int8_t nvs_storage_retrieve_data (
    uint16_t data_id,
    void * data_buffer,
    uint8_t data_buffer_size
) 
```



Reads the stored data associated with the given identifier (data\_id) and copies it into the provided buffer.




**Parameters:**


* `data_id` Identifier for the stored data. 
* `data_buffer` Pointer to the buffer where data will be copied. 
* `data_buffer_size` Size of the buffer in bytes.



**Returns:**

Number of bytes read on success, negative value on error. 





        

<hr>



### function nvs\_storage\_store\_data 

_Store a data item in non-volatile storage (NVS)._ 
```C++
int8_t nvs_storage_store_data (
    uint16_t data_id,
    const void * data,
    uint8_t data_size
) 
```



Stores a block of data under a given identifier (data\_id) in flash memory.


If the data already exists, it is overwritten. Useful for persisting configuration.




**Parameters:**


* `data_id` Identifier for the data item. 
* `data` Pointer to the data to be stored. 
* `data_size` Size of the data in bytes.



**Returns:**

0 on success, negative value on error. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_flash_driver/zephyr/public_api/nvs_storage.h`

