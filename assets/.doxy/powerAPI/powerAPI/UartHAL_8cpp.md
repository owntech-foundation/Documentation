

# File UartHAL.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**UartHAL.cpp**](UartHAL_8cpp.md)

[Go to the source code of this file](UartHAL_8cpp_source.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  char | [**buf\_req**](#variable-buf_req)  <br> |
|  bool | [**command\_flag**](#variable-command_flag)   = = false<br> |
|  const struct device \* | [**uart\_dev**](#variable-uart_dev)   = = DEVICE\_DT\_GET(DT\_NODELABEL(usart1))<br> |
















## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**\_uart\_usart1\_process\_input**](#function-_uart_usart1_process_input) (const struct device \* dev, void \* user\_data) <br> |


























## Public Static Attributes Documentation




### variable buf\_req 

```C++
char buf_req[CONFIG_OWNTECH_SERIAL_RX_BUF_SIZE];
```




<hr>



### variable command\_flag 

```C++
bool command_flag;
```




<hr>



### variable uart\_dev 

```C++
const struct device* uart_dev;
```




<hr>
## Public Static Functions Documentation




### function \_uart\_usart1\_process\_input 

```C++
static void _uart_usart1_process_input (
    const struct device * dev,
    void * user_data
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/UartHAL.cpp`

