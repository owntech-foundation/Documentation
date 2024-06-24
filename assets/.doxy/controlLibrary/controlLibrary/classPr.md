

# Class Pr



[**ClassList**](annotated.md) **>** [**Pr**](classPr.md)








Inherits the following classes: [Controller](classController.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Pr**](#function-pr) () <br> |
| virtual void | [**calculate**](#function-calculate) (void) <br>_calculate a new command value according to a reference fixed using_ `set_reference` _method and a measuremnt fixed using_`set_measurement` _._ |
| virtual int8\_t | [**init**](#function-init) ([**PrParams**](structPrParams.md) parameters) <br>_initialize the controller._  |
| virtual void | [**reset**](#function-reset) (void) <br>_calculate a new command value according the argument values_  |


## Public Functions inherited from Controller

See [Controller](classController.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**calculate**](classController.md#function-calculate) (void) = 0<br>_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._ |
| virtual outputs\_T | [**calculateWithReturn**](classController.md#function-calculatewithreturn) (refs\_T yref, meas\_T y) <br>_calculate a new command value according the argument values_  |
| virtual outputs\_T | [**getOutput**](classController.md#function-getoutput) () <br>_retrieve the last command value calculated._  |
| virtual int8\_t | [**init**](classController.md#function-init) (params\_T parameters) = 0<br>_initialize the controller._  |
| virtual void | [**reset**](classController.md#function-reset) (void) = 0<br>_reset internal states and the last command of the controller._  |
| virtual outputs\_T | [**saturate**](classController.md#function-saturate) (outputs\_T u) <br>_limit the argument_ `u` _between_`upper_bound` _and_`lower_bound` _it is called by the_`calculate` _method._ |
| virtual void | [**setMeasurement**](classController.md#function-setmeasurement) (meas\_T measure) <br>_capture a new measurement._  |
| virtual void | [**setReference**](classController.md#function-setreference) (refs\_T reference) <br>_capture a new reference._  |
















## Protected Attributes inherited from Controller

See [Controller](classController.md)

| Type | Name |
| ---: | :--- |
|  float32\_t | [**\_Ts**](classController.md#variable-_ts)  <br> |
|  outputs\_T | [**\_lower\_bound**](classController.md#variable-_lower_bound)  <br> |
|  meas\_T | [**\_measure**](classController.md#variable-_measure)  <br> |
|  outputs\_T | [**\_output**](classController.md#variable-_output)  <br> |
|  refs\_T | [**\_reference**](classController.md#variable-_reference)  <br> |
|  outputs\_T | [**\_upper\_bound**](classController.md#variable-_upper_bound)  <br> |






































## Public Functions Documentation




### function Pr 

```C++
inline Pr::Pr () 
```




<hr>



### function calculate 

_calculate a new command value according to a reference fixed using_ `set_reference` _method and a measuremnt fixed using_`set_measurement` _._
```C++
virtual void Pr::calculate (
    void
) 
```



The new command value can be captured using the `get_output` method. 


        
Implements [*Controller::calculate*](classController.md#function-calculate)


<hr>



### function init 

_initialize the controller._ 
```C++
virtual int8_t Pr::init (
    PrParams parameters
) 
```





**Parameters:**


* `parameters` 



**Returns:**

0 if ok -EINVAL else. 





        
Implements [*Controller::init*](classController.md#function-init)


<hr>



### function reset 

_calculate a new command value according the argument values_ 
```C++
virtual void Pr::reset (
    void
) 
```





**Parameters:**


* `yrefs` reference 
* `y` measure 



**Returns:**

new command value. 





        
Implements [*Controller::reset*](classController.md#function-reset)


<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/pr.h`

