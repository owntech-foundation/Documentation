

# Class Fir



[**ClassList**](annotated.md) **>** [**Fir**](classFir.md)



_a class to implement the Finite Impulse Response filter behaviour_ [More...](#detailed-description)

* `#include <fir.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Fir**](#function-fir-12) () <br> |
|   | [**Fir**](#function-fir-22) (const uint8\_t nc, const float32\_t \* coeffs) <br> |
|  uint8\_t | [**init**](#function-init) (uint8\_t nc, const float32\_t \* coeffs) <br>_method to initialize the_ [_**Fir**_](classFir.md) _with its coefficients_ |
|  void | [**reset**](#function-reset) () <br> |
|  void | [**setCoeff**](#function-setcoeff) (uint8\_t n, float32\_t value) <br> |
|  float32\_t | [**update**](#function-update) (float32\_t new\_data) <br> |
|   | [**~Fir**](#function-fir) () <br> |




























# Detailed Description




**Date:**

2024 




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr)







**Parameters:**


* `nc` number of coefficients
* `*coeffs` pointer to array of coefficients 




    
## Public Functions Documentation




### function Fir [1/2]

```C++
Fir::Fir () 
```




<hr>



### function Fir [2/2]

```C++
Fir::Fir (
    const uint8_t nc,
    const float32_t * coeffs
) 
```




<hr>



### function init 

_method to initialize the_ [_**Fir**_](classFir.md) _with its coefficients_
```C++
uint8_t Fir::init (
    uint8_t nc,
    const float32_t * coeffs
) 
```





**Parameters:**


* `nc` number of coefficients 
* `coeffs` pointer to array of coefficients 



**Returns:**







        

<hr>



### function reset 

```C++
void Fir::reset () 
```




<hr>



### function setCoeff 

```C++
void Fir::setCoeff (
    uint8_t n,
    float32_t value
) 
```




<hr>



### function update 

```C++
float32_t Fir::update (
    float32_t new_data
) 
```




<hr>



### function ~Fir 

```C++
Fir::~Fir () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/fir.h`

