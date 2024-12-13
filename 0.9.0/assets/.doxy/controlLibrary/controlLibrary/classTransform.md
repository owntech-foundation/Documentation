

# Class Transform



[**ClassList**](annotated.md) **>** [**Transform**](classTransform.md)



_static class to group methods helping translation between reference frames_ [More...](#detailed-description)

* `#include <transform.h>`







































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  [**clarke\_t**](structclarke__t.md) | [**clarke**](#function-clarke) ([**three\_phase\_t**](structthree__phase__t.md) Xabc) <br>_transform a_ [_**three\_phase\_t**_](structthree__phase__t.md) _vector to a_[_**clarke\_t**_](structclarke__t.md) _vector._ |
|  [**three\_phase\_t**](structthree__phase__t.md) | [**clarke\_inverse**](#function-clarke_inverse) ([**clarke\_t**](structclarke__t.md) Xabo) <br>_transform a_ [_**clarke\_t**_](structclarke__t.md) _vector to a_[_**three\_phase\_t**_](structthree__phase__t.md) _vector._ |
|  [**clarke\_t**](structclarke__t.md) | [**rotation\_to\_clarke**](#function-rotation_to_clarke) ([**dqo\_t**](structdqo__t.md) Xdqo, float32\_t theta) <br>_make a_  _rotation which transform a_[_**dqo\_t**_](structdqo__t.md) _vector to a_[_**clarke\_t**_](structclarke__t.md) _vector._ |
|  [**dqo\_t**](structdqo__t.md) | [**rotation\_to\_dqo**](#function-rotation_to_dqo) ([**clarke\_t**](structclarke__t.md) Xabo, float32\_t theta) <br>_make a -_  _rotation which transform a_[_**clarke\_t**_](structclarke__t.md) _vector to a_[_**dqo\_t**_](structdqo__t.md) _vector._ |
|  [**dqo\_t**](structdqo__t.md) | [**to\_dqo**](#function-to_dqo) ([**three\_phase\_t**](structthree__phase__t.md) Xabc, float32\_t theta) <br>_transform a_ [_**three\_phase\_t**_](structthree__phase__t.md) _vector to a_[_**dqo\_t**_](structdqo__t.md) _vector._ |
|  [**three\_phase\_t**](structthree__phase__t.md) | [**to\_threephase**](#function-to_threephase) ([**dqo\_t**](structdqo__t.md) Xdqo, float32\_t theta) <br>_transform a_ [_**dqo\_t**_](structdqo__t.md) _vector to a_[_**three\_phase\_t**_](structthree__phase__t.md) _vector._ |


























## Detailed Description


mainly 3 reference frames:
* abc :three phase
*  : clarke.
* d, q, o : direct-quadrature. 




    
## Public Static Functions Documentation




### function clarke 

_transform a_ [_**three\_phase\_t**_](structthree__phase__t.md) _vector to a_[_**clarke\_t**_](structclarke__t.md) _vector._
```C++
static clarke_t Transform::clarke (
    three_phase_t Xabc
) 
```




<hr>



### function clarke\_inverse 

_transform a_ [_**clarke\_t**_](structclarke__t.md) _vector to a_[_**three\_phase\_t**_](structthree__phase__t.md) _vector._
```C++
static three_phase_t Transform::clarke_inverse (
    clarke_t Xabo
) 
```




<hr>



### function rotation\_to\_clarke 

_make a_  _rotation which transform a_[_**dqo\_t**_](structdqo__t.md) _vector to a_[_**clarke\_t**_](structclarke__t.md) _vector._
```C++
static clarke_t Transform::rotation_to_clarke (
    dqo_t Xdqo,
    float32_t theta
) 
```




<hr>



### function rotation\_to\_dqo 

_make a -_  _rotation which transform a_[_**clarke\_t**_](structclarke__t.md) _vector to a_[_**dqo\_t**_](structdqo__t.md) _vector._
```C++
static dqo_t Transform::rotation_to_dqo (
    clarke_t Xabo,
    float32_t theta
) 
```




<hr>



### function to\_dqo 

_transform a_ [_**three\_phase\_t**_](structthree__phase__t.md) _vector to a_[_**dqo\_t**_](structdqo__t.md) _vector._
```C++
static dqo_t Transform::to_dqo (
    three_phase_t Xabc,
    float32_t theta
) 
```




<hr>



### function to\_threephase 

_transform a_ [_**dqo\_t**_](structdqo__t.md) _vector to a_[_**three\_phase\_t**_](structthree__phase__t.md) _vector._
```C++
static three_phase_t Transform::to_threephase (
    dqo_t Xdqo,
    float32_t theta
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/transform.h`

