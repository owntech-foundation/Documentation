

# Class RstParams



[**ClassList**](annotated.md) **>** [**RstParams**](structRstParams.md)



[More...](#detailed-description)






















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float32\_t | [**Ts**](#variable-ts)  <br> |
|  float32\_t | [**lower\_bound**](#variable-lower_bound)  <br> |
|  uint8\_t | [**nr**](#variable-nr)  <br> |
|  uint8\_t | [**ns**](#variable-ns)  <br> |
|  uint8\_t | [**nt**](#variable-nt)  <br> |
|  const float32\_t \* | [**r**](#variable-r)  <br> |
|  const float32\_t \* | [**s**](#variable-s)  <br> |
|  const float32\_t \* | [**t**](#variable-t)  <br> |
|  float32\_t | [**upper\_bound**](#variable-upper_bound)  <br> |












































## Detailed Description




**Date:**

2024 




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr) Rst parameters 




**Parameters:**


* `Ts` sample time
* `nr` number of R coefficients
* `r[]` array of R coefficients
* `ns` number of S coefficients
* `s[]` array of S coefficients
* `nt` number of t coefficients
* `t[]` array of T coefficients
* `lower_bound` minimal value of output
* `upper_bound` maximal value of output 




    
## Public Attributes Documentation




### variable Ts 

```C++
float32_t RstParams::Ts;
```




<hr>



### variable lower\_bound 

```C++
float32_t RstParams::lower_bound;
```




<hr>



### variable nr 

```C++
uint8_t RstParams::nr;
```




<hr>



### variable ns 

```C++
uint8_t RstParams::ns;
```




<hr>



### variable nt 

```C++
uint8_t RstParams::nt;
```




<hr>



### variable r 

```C++
const float32_t* RstParams::r;
```




<hr>



### variable s 

```C++
const float32_t* RstParams::s;
```




<hr>



### variable t 

```C++
const float32_t* RstParams::t;
```




<hr>



### variable upper\_bound 

```C++
float32_t RstParams::upper_bound;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/rst.h`

