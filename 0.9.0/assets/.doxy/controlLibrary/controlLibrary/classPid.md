

# Class Pid



[**ClassList**](annotated.md) **>** [**Pid**](classPid.md)



[_**Pid**_](classPid.md) _in a standard form taking into account saturation._[More...](#detailed-description)

* `#include <pid.h>`



Inherits the following classes: [Controller](classController.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Pid**](#function-pid) () <br> |
| virtual void | [**calculate**](#function-calculate) (void) override<br>_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._ |
| virtual int8\_t | [**init**](#function-init) ([**PidParams**](structPidParams.md) params) override<br>_initialize the standard pid_  |
| virtual void | [**reset**](#function-reset-12) () override<br>_reset internal states and the last command of the controller._  |
|  void | [**reset**](#function-reset-22) (float32\_t output) <br> |


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






































## Detailed Description


out = Kp \* (error + 1 / Ti \* error / s + 1 / (1 + Td / N \* s) \* Td \* s \* error )


It uses backward euler integration method.


Example of use:


[**Pid**](classPid.md) mypid; [**PidParams**](structPidParams.md) params(Ts, Kp, Ti, Td, N, lower\_bound, upper\_bound); mypid.init(params); mypid.setMeasurement(y); mypid.setReference(yref); mypid.calculate(); mypid.getOutput(); 


    
## Public Functions Documentation




### function Pid 

```C++
inline Pid::Pid () 
```




<hr>



### function calculate 

_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._
```C++
virtual void Pid::calculate (
    void
) override
```



The new command value can be captured using the `get_output` method. 


        
Implements [*Controller::calculate*](classController.md#function-calculate)


<hr>



### function init 

_initialize the standard pid_ 
```C++
virtual int8_t Pid::init (
    PidParams params
) override
```





**Parameters:**


* `params` is a [**PidParams**](structPidParams.md) structure with all the parameters of the [**Pid**](classPid.md). 



**Returns:**

0 if ok else -EINVAL 





        
Implements [*Controller::init*](classController.md#function-init)


<hr>



### function reset [1/2]

_reset internal states and the last command of the controller._ 
```C++
virtual void Pid::reset () override
```



Implements [*Controller::reset*](classController.md#function-reset)


<hr>



### function reset [2/2]

```C++
void Pid::reset (
    float32_t output
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/pid.h`

