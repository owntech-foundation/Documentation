

# File ngnd.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_ngnd\_driver**](dir_487909855ff81a58e51ecefcc10df3bb.md) **>** [**zephyr**](dir_c984519a7bdbe6c0d73dd876f54bf8c6.md) **>** [**public\_api**](dir_b84e60c9f86d8ee8d4badbb0cfc94e11.md) **>** [**ngnd.h**](ngnd_8h.md)

[Go to the source code of this file](ngnd_8h_source.md)








































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**ngnd\_set**](#function-ngnd_set) (const struct device \* dev, int value) <br>_Set the state of the NGND (Neutral Ground) switch._  |




























## Public Functions Documentation




### function ngnd\_set 

_Set the state of the NGND (Neutral Ground) switch._ 
```C++
void ngnd_set (
    const struct device * dev,
    int value
) 
```



This function controls the activation state of the NGND hardware line.


Passing a non-zero value activates (connects) NGND to the GND of the O2 board.


Zero disconnects the NGND from the GND.




**Parameters:**


* `dev` Pointer to the NGND device structure. 
* `value` Desired state: `1` to activate, `0` to deactivate. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_ngnd_driver/zephyr/public_api/ngnd.h`

