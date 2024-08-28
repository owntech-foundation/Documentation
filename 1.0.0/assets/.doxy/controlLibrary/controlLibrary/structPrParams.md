

# Class PrParams



[**ClassList**](annotated.md) **>** [**PrParams**](structPrParams.md)



_all parameters to define the proportional resonant controller._ [More...](#detailed-description)

* `#include <pr.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float32\_t | [**Kp**](#variable-kp)  <br> |
|  float32\_t | [**Kr**](#variable-kr)  <br> |
|  float32\_t | [**Ts**](#variable-ts)  <br> |
|  float32\_t | [**lower\_bound**](#variable-lower_bound)  <br> |
|  float32\_t | [**phi\_prime**](#variable-phi_prime)  <br> |
|  float32\_t | [**upper\_bound**](#variable-upper_bound)  <br> |
|  float32\_t | [**w0**](#variable-w0)  <br> |












































# Detailed Description




**Date:**

2024 




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr) 




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr)







**Parameters:**


* `Ts` sample time
* `Kp` proportional gain
* `Kr` resonant gain
* `w0` pulsation [rad/s]
* `phi_prime` angle in rad to compensate delays
* `lower_bound` min value of the output
* `upper_bound` max value of the output 




    
## Public Attributes Documentation




### variable Kp 

```C++
float32_t PrParams::Kp;
```




<hr>



### variable Kr 

```C++
float32_t PrParams::Kr;
```




<hr>



### variable Ts 

```C++
float32_t PrParams::Ts;
```




<hr>



### variable lower\_bound 

```C++
float32_t PrParams::lower_bound;
```




<hr>



### variable phi\_prime 

```C++
float32_t PrParams::phi_prime;
```




<hr>



### variable upper\_bound 

```C++
float32_t PrParams::upper_bound;
```




<hr>



### variable w0 

```C++
float32_t PrParams::w0;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/pr.h`

