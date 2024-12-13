

# File TwistAPI.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_power\_api**](dir_cd4faed35847176dcc5b7bcd69c9a669.md) **>** [**zephyr**](dir_d7ae7ccaa158b4bef6f2317c7758639a.md) **>** [**public\_api**](dir_483dd9146a51f5f74f5a28f650628f05.md) **>** [**TwistAPI.h**](TwistAPI_8h.md)

[Go to the source code of this file](TwistAPI_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**TwistAPI**](classTwistAPI.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**leg\_t**](#enum-leg_t)  <br> |
| enum  | [**twist\_version\_t**](#enum-twist_version_t)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**TwistAPI**](classTwistAPI.md) | [**twist**](#variable-twist)  <br> |












































## Public Types Documentation




### enum leg\_t 

```C++
enum leg_t {
    DT_FOREACH_CHILD_STATUS_OKAY =(DT_NODELABEL(power_shield), LEG_TOKEN)
};
```




<hr>



### enum twist\_version\_t 

```C++
enum twist_version_t {
    shield_TWIST_V1_2 = 0,
    shield_TWIST_V1_3,
    shield_TWIST_V1_4,
    shield_ownverter,
    shield_other
};
```




<hr>
## Public Attributes Documentation




### variable twist 

```C++
TwistAPI twist;
```





**Date:**

2023




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_power_api/zephyr/public_api/TwistAPI.h`

