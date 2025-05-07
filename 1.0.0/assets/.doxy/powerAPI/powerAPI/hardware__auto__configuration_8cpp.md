

# File hardware\_auto\_configuration.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**hardware\_auto\_configuration.cpp**](hardware__auto__configuration_8cpp.md)

[Go to the source code of this file](hardware__auto__configuration_8cpp_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \* | [**cdc\_acm\_console**](#variable-cdc_acm_console)   = `DEVICE\_DT\_GET(CDC\_ACM\_DEVICE)`<br> |
|  const struct device \* | [**dac2**](#variable-dac2)   = `DEVICE\_DT\_GET(DAC2\_DEVICE)`<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**K\_WORK\_DEFINE**](#function-k_work_define) (reboot\_bootloader\_work, reboot\_bootloader\_task) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_vrefbuf\_init, PRE\_KERNEL\_1, CONFIG\_KERNEL\_INIT\_PRIORITY\_DEVICE) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_dac2\_init, PRE\_KERNEL\_2, CONFIG\_KERNEL\_INIT\_PRIORITY\_DEVICE) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_console\_init, APPLICATION, 89) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_img\_validation, APPLICATION, CONFIG\_APPLICATION\_INIT\_PRIORITY) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_register\_cdc\_rate\_callback, APPLICATION, CONFIG\_APPLICATION\_INIT\_PRIORITY) <br> |
|   | [**SYS\_INIT**](#function-sys_init) (\_swap\_usart1\_tx\_rx, PRE\_KERNEL\_1, CONFIG\_KERNEL\_INIT\_PRIORITY\_DEVICE) <br> |
|  void | [**\_cdc\_rate\_callback**](#function-_cdc_rate_callback) (const struct device \* dev, uint32\_t rate) <br>_Register the CDC ACM baud rate callback._  |
|  void | [**reboot\_bootloader\_task**](#function-reboot_bootloader_task) (struct k\_work \* work) <br>_Submit a warm reboot into bootloader mode._  |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  int | [**\_console\_init**](#function-_console_init) () <br>_Initialize the console backend (e.g., UART)._  |
|  int | [**\_dac2\_init**](#function-_dac2_init) () <br>_Initialize DAC2 in constant voltage mode._  |
|  int | [**\_img\_validation**](#function-_img_validation) () <br>_Validate and confirm the current firmware image in MCUBoot._  |
|  int | [**\_register\_cdc\_rate\_callback**](#function-_register_cdc_rate_callback) () <br>_Register the CDC ACM baud rate callback._  |
|  int | [**\_swap\_usart1\_tx\_rx**](#function-_swap_usart1_tx_rx) () <br>_Swap TX and RX lines for USART1 (LPUART1)._  |
|  int | [**\_vrefbuf\_init**](#function-_vrefbuf_init) () <br>_Initialize the internal voltage reference buffer (VREFBUF)._  |


























## Public Static Attributes Documentation




### variable cdc\_acm\_console 

```C++
const struct device* cdc_acm_console;
```




<hr>



### variable dac2 

```C++
const struct device* dac2;
```




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



Zephyr macros to automatically run above functions 


        

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



### function SYS\_INIT 

```C++
SYS_INIT (
    _swap_usart1_tx_rx,
    PRE_KERNEL_1,
    CONFIG_KERNEL_INIT_PRIORITY_DEVICE
) 
```




<hr>



### function \_cdc\_rate\_callback 

_Register the CDC ACM baud rate callback._ 
```C++
void _cdc_rate_callback (
    const struct device * dev,
    uint32_t rate
) 
```



Used in USB bootloader entry mechanism (e.g., Arduino-style 1200bps trick).




**Returns:**

Always returns 0 (success). 





        

<hr>



### function reboot\_bootloader\_task 

_Submit a warm reboot into bootloader mode._ 
```C++
void reboot_bootloader_task (
    struct k_work * work
) 
```



Called by the 1200 baud callback to initiate a soft reset into DFU mode.




**Parameters:**


* `work` Pointer to work item (unused). 




        

<hr>
## Public Static Functions Documentation




### function \_console\_init 

_Initialize the console backend (e.g., UART)._ 
```C++
static int _console_init () 
```



Calls the console\_init function defined elsewhere in the system.




**Returns:**

Always returns 0 (success). 





        

<hr>



### function \_dac2\_init 

_Initialize DAC2 in constant voltage mode._ 
```C++
static int _dac2_init () 
```



If DAC2 is ready, this function sets an output value of 2048 (mid-scale), configures it for external output, and starts the DAC.




**Returns:**

Always returns 0 (success). 





        

<hr>



### function \_img\_validation 

_Validate and confirm the current firmware image in MCUBoot._ 
```C++
static int _img_validation () 
```



If the image is not yet confirmed, this function writes the confirmation flag. Useful in MCUboot-based systems to prevent rollback after boot.




**Returns:**

Always returns 0 (success). 





        

<hr>



### function \_register\_cdc\_rate\_callback 

_Register the CDC ACM baud rate callback._ 
```C++
static int _register_cdc_rate_callback () 
```



Used in USB bootloader entry mechanism (e.g., Arduino-style 1200bps trick).




**Returns:**

Always returns 0 (success). 





        

<hr>



### function \_swap\_usart1\_tx\_rx 

_Swap TX and RX lines for USART1 (LPUART1)._ 
```C++
static int _swap_usart1_tx_rx () 
```



Disables the LPUART1 peripheral, swaps the TX/RX pins, and re-enables it.


Used with the O2 board.




**Returns:**

Always returns 0 (success). 





        

<hr>



### function \_vrefbuf\_init 

_Initialize the internal voltage reference buffer (VREFBUF)._ 
```C++
static int _vrefbuf_init () 
```



Enables the SYSCFG clock, configures the voltage scaling, disables high-impedance mode, and activates the VREFBUF output.




**Returns:**

Always returns 0 (success). 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/hardware_auto_configuration.cpp`

