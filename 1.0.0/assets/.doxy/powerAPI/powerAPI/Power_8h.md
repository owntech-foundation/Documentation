

# File Power.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**src**](dir_cc8f80e4cf83a61a7635b2e9633862a2.md) **>** [**Power.h**](Power_8h.md)

[Go to the source code of this file](Power_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**PowerAPI**](classPowerAPI.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**leg\_t**](#enum-leg_t)  <br>_Parses all the legs with okay status in the device tree and fills this type def._  |
















































## Public Types Documentation




### enum leg\_t 

_Parses all the legs with okay status in the device tree and fills this type def._ 
```C++
enum leg_t {
    DT_FOREACH_CHILD_STATUS_OKAY =(DT_NODELABEL(powershield), LEG_TOKEN)
	ALL
};
```




* `LEG1` to `LEG5` - values supported by the SPIN
* `ALL` - Applies the function to all legs in the list 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_shield_api/zephyr/src/Power.h`

