

# Class PllSinus



[**ClassList**](annotated.md) **>** [**PllSinus**](classPllSinus.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**PllSinus**](#function-pllsinus-12) () <br>_a software phase lock loop on a sinusoidal signal_  |
|   | [**PllSinus**](#function-pllsinus-22) (float32\_t Ts, float32\_t amplitude, float32\_t f0, float32\_t rt) <br> |
|  [**PllDatas**](structPllDatas.md) | [**calculateWithReturn**](#function-calculatewithreturn) (float32\_t signal) <br> |
|  uint8\_t | [**init**](#function-init) (float32\_t Ts, float32\_t amplitude, float32\_t f0, float32\_t rt) <br> |
|  void | [**reset**](#function-reset) (float32\_t f0) <br> |




























## Public Functions Documentation




### function PllSinus [1/2]

_a software phase lock loop on a sinusoidal signal_ 
```C++
inline PllSinus::PllSinus () 
```





**Parameters:**


* `Ts` sample time in [s] 
* `amplitude` amplitude of the signal to track. 
* `f0` mean frequency of the signal to track 
* `rt` rise time of the loop in [s]. 




        

<hr>



### function PllSinus [2/2]

```C++
PllSinus::PllSinus (
    float32_t Ts,
    float32_t amplitude,
    float32_t f0,
    float32_t rt
) 
```




<hr>



### function calculateWithReturn 

```C++
PllDatas PllSinus::calculateWithReturn (
    float32_t signal
) 
```




<hr>



### function init 

```C++
uint8_t PllSinus::init (
    float32_t Ts,
    float32_t amplitude,
    float32_t f0,
    float32_t rt
) 
```




<hr>



### function reset 

```C++
void PllSinus::reset (
    float32_t f0
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/filters.h`

