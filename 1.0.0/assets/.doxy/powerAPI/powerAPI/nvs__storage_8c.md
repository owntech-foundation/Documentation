

# File nvs\_storage.c



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_flash\_driver**](dir_47b8019f52d29447200a9fe029247d2f.md) **>** [**zephyr**](dir_b20d16dae1dc20106d56014478318b72.md) **>** [**public\_api**](dir_ce5a725b60c8953eacf539a6c77604d3.md) **>** [**nvs\_storage.c**](nvs__storage_8c.md)

[Go to the source code of this file](nvs__storage_8c_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint16\_t | [**current\_storage\_version**](#variable-current_storage_version)   = `0x0001`<br> |
|  struct nvs\_fs | [**fs**](#variable-fs)   = `/* multi line expression */`<br>_Flash memory file system._  |
|  bool | [**initialized**](#variable-initialized)   = `false`<br> |
|  uint16\_t | [**storage\_version\_in\_nvs**](#variable-storage_version_in_nvs)   = `0`<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**nvs\_storage\_clear\_all\_stored\_data**](#function-nvs_storage_clear_all_stored_data) () <br>_Clear all data stored in the NVS partition._  |
|  uint16\_t | [**nvs\_storage\_get\_current\_version**](#function-nvs_storage_get_current_version) () <br>_Get the current in-code version of the NVS layout._  |
|  uint16\_t | [**nvs\_storage\_get\_version\_in\_nvs**](#function-nvs_storage_get_version_in_nvs) () <br>_Get the version stored in the NVS flash memory._  |
|  int8\_t | [**nvs\_storage\_retrieve\_data**](#function-nvs_storage_retrieve_data) (uint16\_t data\_id, void \* data\_buffer, uint8\_t data\_buffer\_size) <br>_Retrieve a data item from non-volatile storage (NVS)._  |
|  int8\_t | [**nvs\_storage\_store\_data**](#function-nvs_storage_store_data) (uint16\_t data\_id, const void \* data, uint8\_t data\_size) <br>_Store a data item in non-volatile storage (NVS)._  |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**\_nvs\_storage\_init**](#function-_nvs_storage_init) () <br>_PRIVATE FUNCTION - Initialize the NVS (Non-Volatile Storage) subsystem._  |
|  int8\_t | [**\_nvs\_storage\_store\_version**](#function-_nvs_storage_store_version) () <br>_PRIVATE FUNCTION - Store the current NVS (Non-Volatile Storage) version if needed._  |


























## Public Static Attributes Documentation




### variable current\_storage\_version 

```C++
const uint16_t current_storage_version;
```



Includes 


        

<hr>



### variable fs 

_Flash memory file system._ 
```C++
struct nvs_fs fs;
```




<hr>



### variable initialized 

```C++
bool initialized;
```




<hr>



### variable storage\_version\_in\_nvs 

```C++
uint16_t storage_version_in_nvs;
```




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
## Public Static Functions Documentation




### function \_nvs\_storage\_init 

_PRIVATE FUNCTION - Initialize the NVS (Non-Volatile Storage) subsystem._ 
```C++
static int8_t _nvs_storage_init () 
```



This function sets up the flash storage environment used to store ADC parameters.



* Verifies if initialization has already been completed.
* Checks if the flash device is ready for operations.
* Retrieves flash page information to determine sector size and count.
* Mounts the NVS file system.
* Checks and validates the stored version against the current module version.






**Returns:**

`0` if initialization succeeds, `-1` if initialization fails, `-2` if a version mismatch is detected. 





        

<hr>



### function \_nvs\_storage\_store\_version 

_PRIVATE FUNCTION - Store the current NVS (Non-Volatile Storage) version if needed._ 
```C++
static int8_t _nvs_storage_store_version () 
```



This function ensures that the storage version recorded in NVS is consistent with the current API's storage version.



* If the stored version matches the current version, nothing is done.
* If no version exists in NVS (first use), it writes the current version into NVS.
* If a different version exists, it treats the mismatch as an error and signals that manual clearing is required.






**Returns:**

`0` if version is already correct or successfully written, `-1` on failure. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_flash_driver/zephyr/public_api/nvs_storage.c`

