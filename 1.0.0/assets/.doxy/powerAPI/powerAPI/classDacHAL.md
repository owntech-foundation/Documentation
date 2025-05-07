

# Class DacHAL



[**ClassList**](annotated.md) **>** [**DacHAL**](classDacHAL.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**currentModeInit**](#function-currentmodeinit) (uint8\_t dac\_number, hrtim\_tu\_t tu\_src) <br>_Update slope compensation settings on a DAC using voltage values._  |
|  void | [**initConstValue**](#function-initconstvalue) (uint8\_t dac\_number) <br>_Initialize a DAC device in constant output mode._  |
|  void | [**setConstValue**](#function-setconstvalue) (uint8\_t dac\_number, uint8\_t channel, uint32\_t const\_value) <br>_Set a constant analog output value on a DAC channel._  |
|  void | [**slopeCompensation**](#function-slopecompensation) (uint8\_t dac\_number, float32\_t peak\_voltage, float32\_t low\_voltage) <br>_Configure a DAC to operate in sawtooth waveform mode for current-mode control._  |




























## Public Functions Documentation




### function currentModeInit 

_Update slope compensation settings on a DAC using voltage values._ 
```C++
void DacHAL::currentModeInit (
    uint8_t dac_number,
    hrtim_tu_t tu_src
) 
```



Converts the given voltage values into digital DAC values and sets the DAC's sawtooth waveform reset and step parameters accordingly.




**Parameters:**


* `dac_number` The DAC number (1 or 3). 
* `peak_voltage` The peak voltage value for the sawtooth ramp (reset level). 
* `low_voltage` The valley (starting) voltage of the ramp. 




        

<hr>



### function initConstValue 

_Initialize a DAC device in constant output mode._ 
```C++
void DacHAL::initConstValue (
    uint8_t dac_number
) 
```



Configures the specified DAC (1, 2, or 3) to output a constant analog value.


This includes setting the value to 0, enabling external output, and starting the DAC.




**Parameters:**


* `dac_number` The DAC number (1, 2, or 3). 




        

<hr>



### function setConstValue 

_Set a constant analog output value on a DAC channel._ 
```C++
void DacHAL::setConstValue (
    uint8_t dac_number,
    uint8_t channel,
    uint32_t const_value
) 
```



Writes a raw 12-bit value to the selected DAC channel, provided the DAC is ready.




**Parameters:**


* `dac_number` The DAC number (1, 2, or 3). 
* `channel` The DAC output channel index (usually 1). 
* `const_value` The constant value to set (0–4095). 




        

<hr>



### function slopeCompensation 

_Configure a DAC to operate in sawtooth waveform mode for current-mode control._ 
```C++
void DacHAL::slopeCompensation (
    uint8_t dac_number,
    float32_t peak_voltage,
    float32_t low_voltage
) 
```



Initializes the DAC to produce a decrementing sawtooth waveform.


The DAC is triggered by the selected HRTIM timer unit to synchronize waveform generation with the PWM cycle.


Reset and step triggers are selected based on the `tu_src`.




**Parameters:**


* `dac_number` The DAC number (1 or 3). 
* `tu_src` The HRTIM timer unit (TIMB to TIMF) used for synchronization. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/DacHAL.h`

