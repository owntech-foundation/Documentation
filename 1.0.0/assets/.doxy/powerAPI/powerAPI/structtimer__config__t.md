

# Struct timer\_config\_t



[**ClassList**](annotated.md) **>** [**timer\_config\_t**](structtimer__config__t.md)



[More...](#detailed-description)

* `#include <timer.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**timer\_enable\_encoder**](#variable-timer_enable_encoder)  <br> |
|  uint32\_t | [**timer\_enable\_irq**](#variable-timer_enable_irq)  <br> |
|  pin\_mode\_t | [**timer\_enc\_pin\_mode**](#variable-timer_enc_pin_mode)  <br> |
|  timer\_callback\_t | [**timer\_irq\_callback**](#variable-timer_irq_callback)  <br> |
|  uint32\_t | [**timer\_irq\_t\_usec**](#variable-timer_irq_t_usec)  <br> |
|  uint32\_t | [**timer\_use\_zero\_latency**](#variable-timer_use_zero_latency)  <br> |












































## Detailed Description


timer\_enable\_irq : set to 1 to enable interrupt on timer overflow. timer\_enable\_encoder: set to 1 for timer to act as an incremental coder counter.


\*\*\* IRQ mode (ignored if timer\_enable\_irq=0) \*\*\*
* timer\_irq\_callback : pointer to a void(void) function that will be called on timer overflow.
* timer\_irq\_t\_usec : period of the interrupt in microsecond (2 to 6553 µs)
* timer\_use\_zero\_latency: for tasks, use zero-latency interrupts. Only used by Task API, end-user should set this one to false.




\*\*\* Incremental encoder mode (ignored if timer\_enable\_encoder=0) \*\*\*
* timer\_pin\_mode : Pin mode for incremental coder interface.




NOTE: At this time, only irq mode is supported on TIM6/TIM7, and only incremental coder mode is suppported on TIM4, which makes this configuration structure almost pointless (except for callback definition). However, it is built this way with future evolutions of the driver in mind. 


    
## Public Attributes Documentation




### variable timer\_enable\_encoder 

```C++
uint32_t timer_config_t::timer_enable_encoder;
```




<hr>



### variable timer\_enable\_irq 

```C++
uint32_t timer_config_t::timer_enable_irq;
```




<hr>



### variable timer\_enc\_pin\_mode 

```C++
pin_mode_t timer_config_t::timer_enc_pin_mode;
```




<hr>



### variable timer\_irq\_callback 

```C++
timer_callback_t timer_config_t::timer_irq_callback;
```




<hr>



### variable timer\_irq\_t\_usec 

```C++
uint32_t timer_config_t::timer_irq_t_usec;
```




<hr>



### variable timer\_use\_zero\_latency 

```C++
uint32_t timer_config_t::timer_use_zero_latency;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_timer_driver/zephyr/public_api/timer.h`

