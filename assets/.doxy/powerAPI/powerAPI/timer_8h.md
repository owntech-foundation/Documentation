

# File timer.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_timer\_driver**](dir_2bcefd02aa22d158a7fee7f57088a2fe.md) **>** [**zephyr**](dir_62a68ad86a1f2ceff5c536793b75d59b.md) **>** [**public\_api**](dir_7b157175519ef7e5ecaa80a64fe5f6a3.md) **>** [**timer.h**](timer_8h.md)

[Go to the source code of this file](timer_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**timer\_config\_t**](structtimer__config__t.md) <br> |
| struct | [**timer\_driver\_api**](structtimer__driver__api.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**pin\_mode\_t**](#enum-pin_mode_t)  <br> |
| typedef void(\* | [**timer\_api\_config**](#typedef-timer_api_config)  <br> |
| typedef uint32\_t(\* | [**timer\_api\_get\_count**](#typedef-timer_api_get_count)  <br> |
| typedef void(\* | [**timer\_api\_start**](#typedef-timer_api_start)  <br> |
| typedef void(\* | [**timer\_api\_stop**](#typedef-timer_api_stop)  <br> |
| typedef void(\* | [**timer\_callback\_t**](#typedef-timer_callback_t)  <br> |






















## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**timer\_config**](#function-timer_config) (const struct device \* dev, const struct [**timer\_config\_t**](structtimer__config__t.md) \* config) <br> |
|  uint32\_t | [**timer\_get\_count**](#function-timer_get_count) (const struct device \* dev) <br> |
|  void | [**timer\_start**](#function-timer_start) (const struct device \* dev) <br> |
|  void | [**timer\_stop**](#function-timer_stop) (const struct device \* dev) <br> |


























## Public Types Documentation




### enum pin\_mode\_t 

```C++
enum pin_mode_t {
    no_pull,
    pull_up,
    pull_down
};
```




<hr>



### typedef timer\_api\_config 

```C++
typedef void(* timer_api_config) (const struct device *dev, const struct timer_config_t *config);
```




<hr>



### typedef timer\_api\_get\_count 

```C++
typedef uint32_t(* timer_api_get_count) (const struct device *dev);
```




<hr>



### typedef timer\_api\_start 

```C++
typedef void(* timer_api_start) (const struct device *dev);
```




<hr>



### typedef timer\_api\_stop 

```C++
typedef void(* timer_api_stop) (const struct device *dev);
```




<hr>



### typedef timer\_callback\_t 

```C++
typedef void(* timer_callback_t) ();
```




<hr>
## Public Static Functions Documentation




### function timer\_config 


```C++
static inline void timer_config (
    const struct device * dev,
    const struct timer_config_t * config
) 
```



Configure the timer dev using given configuration structure config.




**Parameters:**


* `dev` Zephyr device representing the timer. 
* `config` Configuration holding the timer configuration. 




        

<hr>



### function timer\_get\_count 


```C++
static inline uint32_t timer_get_count (
    const struct device * dev
) 
```



Get the current timer counter value.




**Parameters:**


* `dev` Zephyr device representing the timer. 



**Returns:**

Current value of the timer internal counter. 





        

<hr>



### function timer\_start 


```C++
static inline void timer_start (
    const struct device * dev
) 
```



Start the timer dev. If timer is configured to provide a perdiodic interrupt, it will also enable it.




**Parameters:**


* `dev` Zephyr device representing the timer. 




        

<hr>



### function timer\_stop 


```C++
static inline void timer_stop (
    const struct device * dev
) 
```



Stop the timer dev. If timer is configured to provide a perdiodic interrupt, it will also disable it.




**Parameters:**


* `dev` Zephyr device representing the timer. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_timer_driver/zephyr/public_api/timer.h`

