

# File thingset\_isotp.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**thingset\_isotp.cpp**](thingset__isotp_8cpp.md)

[Go to the source code of this file](thingset__isotp_8cpp_source.md)
























## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint16\_t | [**can\_node\_addr**](#variable-can_node_addr)  <br> |
|  const struct isotp\_fc\_opts | [**fc\_opts**](#variable-fc_opts)   = `/* multi line expression */`<br> |
|  struct isotp\_msg\_id | [**rx\_addr**](#variable-rx_addr)   = `/* multi line expression */`<br> |
|  ThingSet | [**ts**](#variable-ts)  <br> |
|  struct isotp\_msg\_id | [**tx\_addr**](#variable-tx_addr)   = `/* multi line expression */`<br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \* | [**can\_dev**](#variable-can_dev)   = `DEVICE\_DT\_GET(DT\_NODELABEL(can1))`<br> |
|  struct isotp\_recv\_ctx | [**recv\_ctx**](#variable-recv_ctx)  <br> |
|  struct isotp\_send\_ctx | [**send\_ctx**](#variable-send_ctx)  <br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**K\_THREAD\_DEFINE**](#function-k_thread_define) (can\_isotp, RX\_THREAD\_STACK\_SIZE, can\_isotp\_thread, NULL, NULL, NULL, RX\_THREAD\_PRIORITY, 0, 1500) <br> |
|  void | [**can\_isotp\_thread**](#function-can_isotp_thread) () <br> |
|  void | [**send\_complete\_cb**](#function-send_complete_cb) (int error\_nr, void \* arg) <br> |




























## Public Attributes Documentation




### variable can\_node\_addr 

```C++
uint16_t can_node_addr;
```




<hr>



### variable fc\_opts 

```C++
const struct isotp_fc_opts fc_opts;
```




<hr>



### variable rx\_addr 

```C++
struct isotp_msg_id rx_addr;
```




<hr>



### variable ts 

```C++
ThingSet ts;
```





**Date:**

2024 




**Author:**

Martin Jäger [martin@libre.solar](mailto:martin@libre.solar) 




**Author:**

Jean Alinei [jean.alinei@laas.fr](mailto:jean.alinei@laas.fr) 




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 





        

<hr>



### variable tx\_addr 

```C++
struct isotp_msg_id tx_addr;
```




<hr>
## Public Static Attributes Documentation




### variable can\_dev 

```C++
const struct device* can_dev;
```




<hr>



### variable recv\_ctx 

```C++
struct isotp_recv_ctx recv_ctx;
```




<hr>



### variable send\_ctx 

```C++
struct isotp_send_ctx send_ctx;
```




<hr>
## Public Functions Documentation




### function K\_THREAD\_DEFINE 

```C++
K_THREAD_DEFINE (
    can_isotp,
    RX_THREAD_STACK_SIZE,
    can_isotp_thread,
    NULL,
    NULL,
    NULL,
    RX_THREAD_PRIORITY,
    0,
    1500
) 
```




<hr>



### function can\_isotp\_thread 

```C++
void can_isotp_thread () 
```




<hr>



### function send\_complete\_cb 

```C++
void send_complete_cb (
    int error_nr,
    void * arg
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/thingset_isotp.cpp`

