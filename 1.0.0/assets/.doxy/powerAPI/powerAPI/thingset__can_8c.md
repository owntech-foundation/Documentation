

# File thingset\_can.c



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**thingset\_can.c**](thingset__can_8c.md)

[Go to the source code of this file](thingset__can_8c_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**can\_control\_work\_data**](structcan__control__work__data.md) <br> |






## Public Attributes

| Type | Name |
| ---: | :--- |
|  struct thingset\_context | [**ts**](#variable-ts)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  struct [**can\_control\_work\_data**](structcan__control__work__data.md) | [**can\_work\_data**](#variable-can_work_data)  <br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**LOG\_MODULE\_REGISTER**](#function-log_module_register) (ts\_can, CONFIG\_THINGSET\_SDK\_LOG\_LEVEL) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (can\_control\_init, APPLICATION, THINGSET\_INIT\_PRIORITY\_DEFAULT) <br> |
|  void | [**can\_control\_rx\_handler**](#function-can_control_rx_handler) (uint16\_t data\_id, const uint8\_t \* value, size\_t value\_len, uint8\_t source\_addr) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  int | [**can\_control\_init**](#function-can_control_init) () <br> |
|  void | [**can\_control\_work\_handler**](#function-can_control_work_handler) (struct k\_work \* item) <br> |


























## Public Attributes Documentation




### variable ts 

```C++
struct thingset_context ts;
```




<hr>
## Public Static Attributes Documentation




### variable can\_work\_data 

```C++
struct can_control_work_data can_work_data;
```




<hr>
## Public Functions Documentation




### function LOG\_MODULE\_REGISTER 

```C++
LOG_MODULE_REGISTER (
    ts_can,
    CONFIG_THINGSET_SDK_LOG_LEVEL
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    can_control_init,
    APPLICATION,
    THINGSET_INIT_PRIORITY_DEFAULT
) 
```




<hr>



### function can\_control\_rx\_handler 

```C++
void can_control_rx_handler (
    uint16_t data_id,
    const uint8_t * value,
    size_t value_len,
    uint8_t source_addr
) 
```




<hr>
## Public Static Functions Documentation




### function can\_control\_init 

```C++
static int can_control_init () 
```




<hr>



### function can\_control\_work\_handler 

```C++
static void can_control_work_handler (
    struct k_work * item
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/thingset_can.c`

