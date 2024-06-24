

# Class DacHAL



[**ClassList**](annotated.md) **>** [**DacHAL**](classDacHAL.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**currentModeInit**](#function-currentmodeinit) (uint8\_t dac\_number, hrtim\_tu\_t tu\_src) <br> |
|  void | [**initConstValue**](#function-initconstvalue) (uint8\_t dac\_number) <br> |
|  void | [**setConstValue**](#function-setconstvalue) (uint8\_t dac\_number, uint8\_t channel, uint32\_t const\_value) <br> |
|  void | [**slopeCompensation**](#function-slopecompensation) (uint8\_t dac\_number, float32\_t peak\_voltage, float32\_t low\_voltage) <br> |




























## Public Functions Documentation




### function currentModeInit 

```C++
void DacHAL::currentModeInit (
    uint8_t dac_number,
    hrtim_tu_t tu_src
) 
```




<hr>



### function initConstValue 

```C++
void DacHAL::initConstValue (
    uint8_t dac_number
) 
```




<hr>



### function setConstValue 

```C++
void DacHAL::setConstValue (
    uint8_t dac_number,
    uint8_t channel,
    uint32_t const_value
) 
```




<hr>



### function slopeCompensation 

```C++
void DacHAL::slopeCompensation (
    uint8_t dac_number,
    float32_t peak_voltage,
    float32_t low_voltage
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/DacHAL.h`

