

# Class Controller

**template &lt;typename refs\_T, typename meas\_T, typename outputs\_T, typename params\_T&gt;**



[**ClassList**](annotated.md) **>** [**Controller**](classController.md)



[_**Controller**_](classController.md) _interface for various inherited class like pid, rst, pr,..._[More...](#detailed-description)

* `#include <controller.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**calculate**](#function-calculate) (void) = 0<br>_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._ |
| virtual outputs\_T | [**calculateWithReturn**](#function-calculatewithreturn) (refs\_T yref, meas\_T y) <br>_calculate a new command value according the argument values_  |
| virtual outputs\_T | [**getOutput**](#function-getoutput) () <br>_retrieve the last command value calculated._  |
| virtual int8\_t | [**init**](#function-init) (params\_T parameters) = 0<br>_initialize the controller._  |
| virtual void | [**reset**](#function-reset) (void) = 0<br>_reset internal states and the last command of the controller._  |
| virtual outputs\_T | [**saturate**](#function-saturate) (outputs\_T u) <br>_limit the argument_ `u` _between_`upper_bound` _and_`lower_bound` _it is called by the_`calculate` _method._ |
| virtual void | [**setMeasurement**](#function-setmeasurement) (meas\_T measure) <br>_capture a new measurement._  |
| virtual void | [**setReference**](#function-setreference) (refs\_T reference) <br>_capture a new reference._  |








## Protected Attributes

| Type | Name |
| ---: | :--- |
|  float32\_t | [**\_Ts**](#variable-_ts)  <br> |
|  outputs\_T | [**\_lower\_bound**](#variable-_lower_bound)  <br> |
|  meas\_T | [**\_measure**](#variable-_measure)  <br> |
|  outputs\_T | [**\_output**](#variable-_output)  <br> |
|  refs\_T | [**\_reference**](#variable-_reference)  <br> |
|  outputs\_T | [**\_upper\_bound**](#variable-_upper_bound)  <br> |




















# Detailed Description




**Date:**

2024




**Author:**

Régis Ruelland [regis.ruelland@laas.fr](mailto:regis.ruelland@laas.fr) 




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 




**Author:**

Guillaume Arthaud. 




**Template parameters:**


* `refs_T` type of the reference 
* `meas_T` type of the measure 
* `outputs_T` type of the output 
* `params_T` type of the parameter 



**Parameters:**


* `parameters` structure including all parameters needs to make calculations.

we assume that outputs\_T has already an order relation implemented. 


    
## Public Functions Documentation




### function calculate 

_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._
```C++
virtual void Controller::calculate (
    void
) = 0
```



The new command value can be captured using the `get_output` method. 


        

<hr>



### function calculateWithReturn 

_calculate a new command value according the argument values_ 
```C++
inline virtual outputs_T Controller::calculateWithReturn (
    refs_T yref,
    meas_T y
) 
```





**Parameters:**


* `yrefs` reference 
* `y` measure 



**Returns:**

new command value. 





        

<hr>



### function getOutput 

_retrieve the last command value calculated._ 
```C++
inline virtual outputs_T Controller::getOutput () 
```





**Returns:**







        

<hr>



### function init 

_initialize the controller._ 
```C++
virtual int8_t Controller::init (
    params_T parameters
) = 0
```





**Parameters:**


* `parameters` 



**Returns:**

0 if ok -EINVAL else. 





        

<hr>



### function reset 

```C++
virtual void Controller::reset (
    void
) = 0
```




<hr>



### function saturate 

_limit the argument_ `u` _between_`upper_bound` _and_`lower_bound` _it is called by the_`calculate` _method._
```C++
inline virtual outputs_T Controller::saturate (
    outputs_T u
) 
```





**Parameters:**


* `u` should be a command value. 



**Returns:**







        

<hr>



### function setMeasurement 

_capture a new measurement._ 
```C++
inline virtual void Controller::setMeasurement (
    meas_T measure
) 
```





**Parameters:**


* `measure` 




        

<hr>



### function setReference 

_capture a new reference._ 
```C++
inline virtual void Controller::setReference (
    refs_T reference
) 
```





**Parameters:**


* `reference` 




        

<hr>
## Protected Attributes Documentation




### variable \_Ts 

```C++
float32_t Controller< refs_T, meas_T, outputs_T, params_T >::_Ts;
```




<hr>



### variable \_lower\_bound 

```C++
outputs_T Controller< refs_T, meas_T, outputs_T, params_T >::_lower_bound;
```




<hr>



### variable \_measure 

```C++
meas_T Controller< refs_T, meas_T, outputs_T, params_T >::_measure;
```




<hr>



### variable \_output 

```C++
outputs_T Controller< refs_T, meas_T, outputs_T, params_T >::_output;
```




<hr>



### variable \_reference 

```C++
refs_T Controller< refs_T, meas_T, outputs_T, params_T >::_reference;
```




<hr>



### variable \_upper\_bound 

```C++
outputs_T Controller< refs_T, meas_T, outputs_T, params_T >::_upper_bound;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/controller.h`

