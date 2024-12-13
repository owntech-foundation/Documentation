

# File PwmHAL.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**PwmHAL.h**](PwmHAL_8h.md)

[Go to the source code of this file](PwmHAL_8h_source.md)


















## Classes

| Type | Name |
| ---: | :--- |
| class | [**PwmHAL**](classPwmHAL.md) <br>_Handles all pwm signals for the spin board._  |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**inverter\_modulation\_t**](#enum-inverter_modulation_t)  <br> |
| enum  | [**leg\_operation\_t**](#enum-leg_operation_t)  <br> |
















































## Public Types Documentation




### enum inverter\_modulation\_t 

```C++
enum inverter_modulation_t {
    unipolar,
    bipolar
};
```



Inverter leg operation type. 


        

<hr>



### enum leg\_operation\_t 

```C++
enum leg_operation_t {
    buck,
    boost
};
```



Switch leg operation type. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/PwmHAL.h`

