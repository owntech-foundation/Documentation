

# Class LowPassFirstOrderFilter



[**ClassList**](annotated.md) **>** [**LowPassFirstOrderFilter**](classLowPassFirstOrderFilter.md)



[More...](#detailed-description)

* `#include <filters.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**LowPassFirstOrderFilter**](#function-lowpassfirstorderfilter) (float32\_t Ts, float32\_t tau) <br> |
|  float32\_t | [**calculateWithReturn**](#function-calculatewithreturn) (float32\_t signal) <br> |
|  uint8\_t | [**init**](#function-init) (float32\_t Ts, float32\_t tau) <br> |
|  void | [**reset**](#function-reset-12) () <br> |
|  void | [**reset**](#function-reset-22) (float32\_t value) <br> |




























## Detailed Description




**Date:**

2024 




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr) 





    
## Public Functions Documentation




### function LowPassFirstOrderFilter 

```C++
LowPassFirstOrderFilter::LowPassFirstOrderFilter (
    float32_t Ts,
    float32_t tau
) 
```




<hr>



### function calculateWithReturn 

```C++
float32_t LowPassFirstOrderFilter::calculateWithReturn (
    float32_t signal
) 
```




<hr>



### function init 

```C++
uint8_t LowPassFirstOrderFilter::init (
    float32_t Ts,
    float32_t tau
) 
```




<hr>



### function reset [1/2]

```C++
void LowPassFirstOrderFilter::reset () 
```




<hr>



### function reset [2/2]

```C++
void LowPassFirstOrderFilter::reset (
    float32_t value
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/filters.h`

