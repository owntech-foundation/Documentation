

# File safety\_internal.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_safety\_api**](dir_6577260132b49845d494a112d8acd7c7.md) **>** [**zephyr**](dir_2f6071fc869091a6d1e6d7b806fecbf0.md) **>** [**public\_api**](dir_08eec7c34983a0acd3982b6352a40f84.md) **>** [**safety\_internal.h**](safety__internal_8h.md)

[Go to the source code of this file](safety__internal_8h_source.md)








































## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**safety\_task**](#function-safety_task) () <br>_This function first watches the measure from the monitored channels, and then compares it with the threshold values max/min to detect faults._  |




























## Public Functions Documentation




### function safety\_task 

_This function first watches the measure from the monitored channels, and then compares it with the threshold values max/min to detect faults._ 
```C++
int8_t safety_task () 
```



If an error was detected, the switches will either in open-circuit mode or in short-circuit mode.




**Returns:**

`0` if no error was detected, `-1` else 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_safety_api/zephyr/public_api/safety_internal.h`

