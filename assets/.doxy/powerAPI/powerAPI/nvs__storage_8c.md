

# File nvs\_storage.c



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_flash\_driver**](dir_47b8019f52d29447200a9fe029247d2f.md) **>** [**zephyr**](dir_b20d16dae1dc20106d56014478318b72.md) **>** [**public\_api**](dir_ce5a725b60c8953eacf539a6c77604d3.md) **>** [**nvs\_storage.c**](nvs__storage_8c.md)

[Go to the source code of this file](nvs__storage_8c_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const uint16\_t | [**current\_storage\_version**](#variable-current_storage_version)   = = 0x0001<br> |
|  struct nvs\_fs | [**fs**](#variable-fs)   = =
{
	.offset       = FIXED\_PARTITION\_OFFSET(NVS\_PARTITION),
	.flash\_device = FIXED\_PARTITION\_DEVICE(NVS\_PARTITION)
}<br> |
|  bool | [**initialized**](#variable-initialized)   = = false<br> |
|  uint16\_t | [**storage\_version\_in\_nvs**](#variable-storage_version_in_nvs)   = = 0<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**nvs\_storage\_clear\_all\_stored\_data**](#function-nvs_storage_clear_all_stored_data) () <br> |
|  uint16\_t | [**nvs\_storage\_get\_current\_version**](#function-nvs_storage_get_current_version) () <br> |
|  uint16\_t | [**nvs\_storage\_get\_version\_in\_nvs**](#function-nvs_storage_get_version_in_nvs) () <br> |
|  int8\_t | [**nvs\_storage\_retrieve\_data**](#function-nvs_storage_retrieve_data) (uint16\_t data\_id, void \* data\_buffer, uint8\_t data\_buffer\_size) <br> |
|  int8\_t | [**nvs\_storage\_store\_data**](#function-nvs_storage_store_data) (uint16\_t data\_id, const void \* data, uint8\_t data\_size) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**\_nvs\_storage\_init**](#function-_nvs_storage_init) () <br> |
|  int8\_t | [**\_nvs\_storage\_store\_version**](#function-_nvs_storage_store_version) () <br> |


























## Public Static Attributes Documentation




### variable current\_storage\_version 


```C++
const uint16_t current_storage_version;
```





**Date:**

2023




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Jean Alinei [jean.alinei@laas.fr](mailto:jean.alinei@laas.fr) 





        

<hr>



### variable fs 

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
## Public Static Functions Documentation




### function \_nvs\_storage\_init 

```C++
static int8_t _nvs_storage_init () 
```




<hr>



### function \_nvs\_storage\_store\_version 

```C++
static int8_t _nvs_storage_store_version () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_flash_driver/zephyr/public_api/nvs_storage.c`

