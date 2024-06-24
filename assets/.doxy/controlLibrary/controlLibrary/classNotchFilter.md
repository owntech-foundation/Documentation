

# Class NotchFilter



[**ClassList**](annotated.md) **>** [**NotchFilter**](classNotchFilter.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**NotchFilter**](#function-notchfilter-12) () <br> |
|   | [**NotchFilter**](#function-notchfilter-22) (float32\_t Ts, float32\_t f0, float32\_t bandwidth) <br>_its a band stop filter_  |
|  float32\_t | [**calculateWithReturn**](#function-calculatewithreturn) (float32\_t signal) <br> |
|  uint8\_t | [**init**](#function-init) (float32\_t Ts, float32\_t f0, float32\_t bandwidth) <br>_initialize the band stop filter parameters_  |
|  void | [**reset**](#function-reset) () <br> |




























## Public Functions Documentation




### function NotchFilter [1/2]

```C++
inline NotchFilter::NotchFilter () 
```




<hr>



### function NotchFilter [2/2]

_its a band stop filter_ 
```C++
NotchFilter::NotchFilter (
    float32_t Ts,
    float32_t f0,
    float32_t bandwidth
) 
```





**Parameters:**


* `Ts` sample time [s] 
* `f0` central frequency to stop [Hz] 
* `bandwidth` frequency band [Hz] around f0 where gain &lt; -3dB 




        

<hr>



### function calculateWithReturn 

```C++
float32_t NotchFilter::calculateWithReturn (
    float32_t signal
) 
```




<hr>



### function init 

_initialize the band stop filter parameters_ 
```C++
uint8_t NotchFilter::init (
    float32_t Ts,
    float32_t f0,
    float32_t bandwidth
) 
```





**Parameters:**


* `Ts` sample time [s] 
* `f0` central frequency to stop in [Hz] 
* `bandwidth` frequency band [Hz] around f0 where gain &lt; -3dB 




        

<hr>



### function reset 

```C++
void NotchFilter::reset () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/filters.h`

