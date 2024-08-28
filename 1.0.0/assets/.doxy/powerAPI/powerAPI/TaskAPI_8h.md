

# File TaskAPI.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_task\_api**](dir_a6ca33c2a6633efd563e2ff2336e2b96.md) **>** [**zephyr**](dir_930c8fa1e893c2939a58a9ccd4e9adcb.md) **>** [**public\_api**](dir_2b522af08cf9fc57ee593ce08ec33342.md) **>** [**TaskAPI.h**](TaskAPI_8h.md)

[Go to the source code of this file](TaskAPI_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**TaskAPI**](classTaskAPI.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**scheduling\_interrupt\_source\_t**](#enum-scheduling_interrupt_source_t)  <br> |
| typedef void(\* | [**task\_function\_t**](#typedef-task_function_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**TaskAPI**](classTaskAPI.md) | [**task**](#variable-task)  <br> |












































## Public Types Documentation




### enum scheduling\_interrupt\_source\_t 

```C++
enum scheduling_interrupt_source_t {
    source_uninitialized,
    source_hrtim,
    source_tim6
};
```




<hr>



### typedef task\_function\_t 

```C++
typedef void(* task_function_t) ();
```




<hr>
## Public Attributes Documentation




### variable task 

```C++
TaskAPI task;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_task_api/zephyr/public_api/TaskAPI.h`

