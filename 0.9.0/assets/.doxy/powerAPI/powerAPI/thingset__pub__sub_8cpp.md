

# File thingset\_pub\_sub.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**thingset\_pub\_sub.cpp**](thingset__pub__sub_8cpp.md)

[Go to the source code of this file](thingset__pub__sub_8cpp_source.md)
























## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint16\_t | [**broadcast\_time**](#variable-broadcast_time)   = `10`<br> |
|  uint16\_t | [**can\_node\_addr**](#variable-can_node_addr)  <br> |
|  uint16\_t | [**control\_time**](#variable-control_time)   = `10`<br> |
|  const struct can\_filter | [**ctrl\_filter**](#variable-ctrl_filter)   = `/* multi line expression */`<br> |
|  ThingSet | [**ts**](#variable-ts)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  const struct device \* | [**can\_dev**](#variable-can_dev)   = `DEVICE\_DT\_GET(DT\_NODELABEL(can1))`<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**CAN\_MSGQ\_DEFINE**](#function-can_msgq_define) (sub\_msgq, 10) <br> |
|   | [**K\_THREAD\_DEFINE**](#function-k_thread_define) (can\_pubsub, 1024, can\_pubsub\_thread, NULL, NULL, NULL, 6, 0, 1000) <br> |
|  void | [**can\_pub\_isr**](#function-can_pub_isr) (uint32\_t err\_flags, void \* arg) <br> |
|  void | [**can\_pub\_send**](#function-can_pub_send) (uint32\_t can\_id, uint8\_t can\_data, uint8\_t data\_len) <br> |
|  void | [**can\_pubsub\_thread**](#function-can_pubsub_thread) () <br> |
|  void | [**send\_ts\_can\_pub\_message**](#function-send_ts_can_pub_message) (uint16\_t tag) <br> |
|  void | [**update\_ts\_data\_nodes**](#function-update_ts_data_nodes) (struct can\_frame rx\_frame) <br> |




























## Public Attributes Documentation




### variable broadcast\_time 

```C++
uint16_t broadcast_time;
```





**Date:**

2024




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 





        

<hr>



### variable can\_node\_addr 

```C++
uint16_t can_node_addr;
```




<hr>



### variable control\_time 

```C++
uint16_t control_time;
```




<hr>



### variable ctrl\_filter 

```C++
const struct can_filter ctrl_filter;
```




<hr>



### variable ts 

```C++
ThingSet ts;
```




<hr>
## Public Static Attributes Documentation




### variable can\_dev 

```C++
const struct device* can_dev;
```




<hr>
## Public Functions Documentation




### function CAN\_MSGQ\_DEFINE 

```C++
CAN_MSGQ_DEFINE (
    sub_msgq,
    10
) 
```




<hr>



### function K\_THREAD\_DEFINE 

```C++
K_THREAD_DEFINE (
    can_pubsub,
    1024,
    can_pubsub_thread,
    NULL,
    NULL,
    NULL,
    6,
    0,
    1000
) 
```




<hr>



### function can\_pub\_isr 

```C++
void can_pub_isr (
    uint32_t err_flags,
    void * arg
) 
```




<hr>



### function can\_pub\_send 

```C++
void can_pub_send (
    uint32_t can_id,
    uint8_t can_data,
    uint8_t data_len
) 
```




<hr>



### function can\_pubsub\_thread 

```C++
void can_pubsub_thread () 
```




<hr>



### function send\_ts\_can\_pub\_message 

```C++
void send_ts_can_pub_message (
    uint16_t tag
) 
```




<hr>



### function update\_ts\_data\_nodes 

```C++
void update_ts_data_nodes (
    struct can_frame rx_frame
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/thingset_pub_sub.cpp`

