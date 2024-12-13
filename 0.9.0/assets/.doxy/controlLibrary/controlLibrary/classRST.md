

# Class RST



[**ClassList**](annotated.md) **>** [**RST**](classRST.md)



_discrete polynomial regulator taking into account saturations._ [More...](#detailed-description)

* `#include <rst.h>`



Inherits the following classes: [Controller](classController.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**RST**](#function-rst) () <br> |
| virtual void | [**calculate**](#function-calculate) (void) override<br>_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._ |
| virtual int8\_t | [**init**](#function-init) ([**RstParams**](structRstParams.md) p) override<br>_initialize the rst controller_  |
| virtual void | [**reset**](#function-reset) (void) override<br>_reset internal states and the last command of the controller._  |


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


It uses 3 [**Fir**](classFir.md) :
* one on the measurements called R(),
* one on the previous command, called S(),
* and the last on the reference called T()




It mainly allows to add some filtering action on reference or measurements. and sometimes to add some filtering poles which help stabilisation.


some classical regulators can be implemented by its way like pid and pr. 


    
## Public Functions Documentation




### function RST 

```C++
inline RST::RST () 
```




<hr>



### function calculate 

_calculate a new command value according to a reference fixed using_ `setReference` _method and a measuremnt fixed using_`setMeasurement` _._
```C++
virtual void RST::calculate (
    void
) override
```



The new command value can be captured using the `get_output` method. 


        
Implements [*Controller::calculate*](classController.md#function-calculate)


<hr>



### function init 

_initialize the rst controller_ 
```C++
virtual int8_t RST::init (
    RstParams p
) override
```





**Parameters:**


* `p` [**RstParams**](structRstParams.md) structure 



**Returns:**

0 if ok -EINVAL if not 





        
Implements [*Controller::init*](classController.md#function-init)


<hr>



### function reset 

_reset internal states and the last command of the controller._ 
```C++
virtual void RST::reset (
    void
) override
```



Implements [*Controller::reset*](classController.md#function-reset)


<hr>

------------------------------
The documentation for this class was generated from the following file `docs/controlLibrary/src/rst.h`

