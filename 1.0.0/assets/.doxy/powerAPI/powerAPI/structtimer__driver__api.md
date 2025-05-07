

# Struct timer\_driver\_api



[**ClassList**](annotated.md) **>** [**timer\_driver\_api**](structtimer__driver__api.md)



_Driver API structure for timer devices._ [More...](#detailed-description)

* `#include <timer.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  timer\_api\_config | [**config**](#variable-config)  <br> |
|  timer\_api\_get\_count | [**get\_count**](#variable-get_count)  <br> |
|  timer\_api\_start | [**start**](#variable-start)  <br> |
|  timer\_api\_stop | [**stop**](#variable-stop)  <br> |












































## Detailed Description


This structure defines the interface that a timer driver must implement to integrate with the OwnTech timer subsystem.



* `config` is the function used to configure the timer.
* `start` starts the timer operation.
* `stop` stops the timer operation.
* `get_count` retrieves the current timer counter value.




This structure is registered as a Zephyr subsystem using the `__subsystem` keyword. 


    
## Public Attributes Documentation




### variable config 

```C++
timer_api_config timer_driver_api::config;
```




<hr>



### variable get\_count 

```C++
timer_api_get_count timer_driver_api::get_count;
```




<hr>



### variable start 

```C++
timer_api_start timer_driver_api::start;
```




<hr>



### variable stop 

```C++
timer_api_stop timer_driver_api::stop;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_timer_driver/zephyr/public_api/timer.h`

