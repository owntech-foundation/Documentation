

# Class PidParams



[**ClassList**](annotated.md) **>** [**PidParams**](structPidParams.md)



_all parameters of a standard pid_ [More...](#detailed-description)

* `#include <pid.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float32\_t | [**Kp**](#variable-kp)  <br> |
|  float32\_t | [**N**](#variable-n)  <br> |
|  float32\_t | [**Td**](#variable-td)  <br> |
|  float32\_t | [**Ti**](#variable-ti)  <br> |
|  float32\_t | [**Ts**](#variable-ts)  <br> |
|  float32\_t | [**lower\_bound**](#variable-lower_bound)  <br> |
|  float32\_t | [**upper\_bound**](#variable-upper_bound)  <br> |












































## Detailed Description




**Date:**

2024 




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr)







**Parameters:**


* `Ts` sample time
* `Kp` proportional gain
* `Ti` integral time constant
* `Td` derivative time constant
* `N` derivative filter coefficient
* `lower_bound` min value of the output
* `upper_bound` max value of the output 




    
## Public Attributes Documentation




### variable Kp 

```C++
float32_t PidParams::Kp;
```




<hr>



### variable N 

```C++
float32_t PidParams::N;
```




<hr>



### variable Td 

```C++
float32_t PidParams::Td;
```




<hr>



### variable Ti 

```C++
float32_t PidParams::Ti;
```




<hr>



### variable Ts 

```C++
float32_t PidParams::Ts;
```




<hr>



### variable lower\_bound 

```C++
float32_t PidParams::lower_bound;
```




<hr>



### variable upper\_bound 

```C++
float32_t PidParams::upper_bound;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/pid.h`

