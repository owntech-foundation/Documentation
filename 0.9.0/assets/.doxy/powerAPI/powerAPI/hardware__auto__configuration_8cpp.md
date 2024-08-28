

# File hardware\_auto\_configuration.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**hardware\_auto\_configuration.cpp**](hardware__auto__configuration_8cpp.md)

[Go to the source code of this file](hardware__auto__configuration_8cpp_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \* | [**cdc\_acm\_console**](#variable-cdc_acm_console)   = = DEVICE\_DT\_GET(CDC\_ACM\_DEVICE)<br> |
|  const struct device \* | [**dac2**](#variable-dac2)   = = DEVICE\_DT\_GET(DAC2\_DEVICE)<br>_This file automatically performs some hardware configuration using Zephyr macros. Configuration done in this file is low-level peripheral configuration required for OwnTech board to operate, do not mess with it unless you are absolutely sure of what you're doing. This file does not contain any public function._  |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**K\_WORK\_DEFINE**](#function-k_work_define) (reboot\_bootloader\_work, reboot\_bootloader\_task) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_vrefbuf\_init, PRE\_KERNEL\_1, CONFIG\_KERNEL\_INIT\_PRIORITY\_DEVICE) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_dac2\_init, PRE\_KERNEL\_2, CONFIG\_KERNEL\_INIT\_PRIORITY\_DEVICE) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_console\_init, APPLICATION, 89) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_img\_validation, APPLICATION, CONFIG\_APPLICATION\_INIT\_PRIORITY) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_register\_cdc\_rate\_callback, APPLICATION, CONFIG\_APPLICATION\_INIT\_PRIORITY) <br> |
|  void | [**\_cdc\_rate\_callback**](#function-_cdc_rate_callback) (const struct device \* dev, uint32\_t rate) <br> |
|  void | [**reboot\_bootloader\_task**](#function-reboot_bootloader_task) (struct k\_work \* work) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  int | [**\_console\_init**](#function-_console_init) () <br> |
|  int | [**\_dac2\_init**](#function-_dac2_init) () <br> |
|  int | [**\_img\_validation**](#function-_img_validation) () <br> |
|  int | [**\_register\_cdc\_rate\_callback**](#function-_register_cdc_rate_callback) () <br> |
|  int | [**\_vrefbuf\_init**](#function-_vrefbuf_init) () <br> |


























## Public Static Attributes Documentation




### variable cdc\_acm\_console 

```C++
const struct device* cdc_acm_console;
```




<hr>



### variable dac2 

_This file automatically performs some hardware configuration using Zephyr macros. Configuration done in this file is low-level peripheral configuration required for OwnTech board to operate, do not mess with it unless you are absolutely sure of what you're doing. This file does not contain any public function._ 
```C++
const struct device* dac2;
```





**Date:**

2024 




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Jean Alinei [jean.alinei@laas.fr](mailto:jean.alinei@laas.fr) 





        

<hr>
## Public Functions Documentation




### function K\_WORK\_DEFINE 

```C++
K_WORK_DEFINE (
    reboot_bootloader_work,
    reboot_bootloader_task
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    _vrefbuf_init,
    PRE_KERNEL_1,
    CONFIG_KERNEL_INIT_PRIORITY_DEVICE
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    _dac2_init,
    PRE_KERNEL_2,
    CONFIG_KERNEL_INIT_PRIORITY_DEVICE
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    _console_init,
    APPLICATION,
    89
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    _img_validation,
    APPLICATION,
    CONFIG_APPLICATION_INIT_PRIORITY
) 
```




<hr>



### function SYS\_INIT 

```C++
SYS_INIT (
    _register_cdc_rate_callback,
    APPLICATION,
    CONFIG_APPLICATION_INIT_PRIORITY
) 
```




<hr>



### function \_cdc\_rate\_callback 

```C++
void _cdc_rate_callback (
    const struct device * dev,
    uint32_t rate
) 
```




<hr>



### function reboot\_bootloader\_task 

```C++
void reboot_bootloader_task (
    struct k_work * work
) 
```




<hr>
## Public Static Functions Documentation




### function \_console\_init 

```C++
static int _console_init () 
```




<hr>



### function \_dac2\_init 

```C++
static int _dac2_init () 
```




<hr>



### function \_img\_validation 

```C++
static int _img_validation () 
```




<hr>



### function \_register\_cdc\_rate\_callback 

```C++
static int _register_cdc_rate_callback () 
```




<hr>



### function \_vrefbuf\_init 

```C++
static int _vrefbuf_init () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/hardware_auto_configuration.cpp`

