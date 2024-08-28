

# Class TaskAPI



[**ClassList**](annotated.md) **>** [**TaskAPI**](classTaskAPI.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  int8\_t | [**createBackground**](#function-createbackground) (task\_function\_t routine) <br>_Creates a background task. Background tasks are asynchronous tasks that run in the background when there is no critical task running._  |
|  int8\_t | [**createCritical**](#function-createcritical) (task\_function\_t periodic\_task, uint32\_t task\_period\_us, scheduling\_interrupt\_source\_t int\_source=source\_hrtim) <br>_Creates a time critial task. A critical task is an Uninterruptible Synchronous Task that uses a precise timer to execute a periodic, non-interruptible user task. Use this function to define such a task. Only one task of this kind can be defined. This function can be used to redefine (replace) a previously defined uninterruptible synchronous task, but the previously defined task must have been suspended (or never started). An error will be returned if the previously defined task is still running._  |
|  void | [**startBackground**](#function-startbackground) (uint8\_t task\_number) <br>_Use this function to start a previously defined background task using its task number._  |
|  void | [**startCritical**](#function-startcritical) (bool manage\_data\_acquisition=true) <br>_Use this function to start a previously defined a critical task._  |
|  void | [**stopBackground**](#function-stopbackground) (uint8\_t task\_number) <br>_Use this function to stop a previously started background task using its task number._  |
|  void | [**stopCritical**](#function-stopcritical) () <br>_Stop the previously started critical task. A critical task is an Uninterruptible Synchronous Task that uses a precise timer to execute a periodic, non-interruptible user task. The task can be then resumed by calling_ [_**startCritical()**_](classTaskAPI.md#function-startcritical) _again._ |
|  void | [**suspendBackgroundMs**](#function-suspendbackgroundms) (uint32\_t duration\_ms) <br>_This function allows to suspend a background task for a specified duration expressed in milliseconds. For example, you can call this function at the end of a background task function, when there is no need for the task to run permanently._  |
|  void | [**suspendBackgroundUs**](#function-suspendbackgroundus) (uint32\_t duration\_us) <br>_This function allows to suspend a background task for a specified duration expressed in microseconds. For example, you can call this function at the end of a background task function, when there is no need for the task to run permanently._  |




























## Public Functions Documentation




### function createBackground 

_Creates a background task. Background tasks are asynchronous tasks that run in the background when there is no critical task running._ 
```C++
int8_t TaskAPI::createBackground (
    task_function_t routine
) 
```





**Parameters:**


* `routine` Pointer to the void(void) function that will act as the task main function. 



**Returns:**

Number assigned to the task. Will be -1 if max number of asynchronous task has been reached. In such a case, the task definition is ignored. Increase maximum number of asynchronous tasks in prj.conf if required. 





        

<hr>



### function createCritical 

_Creates a time critial task. A critical task is an Uninterruptible Synchronous Task that uses a precise timer to execute a periodic, non-interruptible user task. Use this function to define such a task. Only one task of this kind can be defined. This function can be used to redefine (replace) a previously defined uninterruptible synchronous task, but the previously defined task must have been suspended (or never started). An error will be returned if the previously defined task is still running._ 
```C++
int8_t TaskAPI::createCritical (
    task_function_t periodic_task,
    uint32_t task_period_us,
    scheduling_interrupt_source_t int_source=source_hrtim
) 
```





**Parameters:**


* `periodic_task` Pointer to the void(void) function to be executed periodically. 
* `task_period_us` Period of the function in µs. Allowed range: 1 to 6553 µs. If interrupt source is HRTIM, this value MUST be an integer multiple of the HRTIM period. 
* `int_source` Interrupt source that triggers the task. By default, the HRTIM is the source, but this optional parameter can be provided to set TIM6 as the source in case the HRTIM is not used or if the task can't be correlated to an HRTIM event. Allowed values are source\_hrtim and source\_tim6. 



**Returns:**

0 if everything went well, -1 if there was an error defining the task. An error can occur notably when an uninterruptible task has already been defined previously. 





        

<hr>



### function startBackground 

_Use this function to start a previously defined background task using its task number._ 
```C++
void TaskAPI::startBackground (
    uint8_t task_number
) 
```



Background tasks are asynchronous tasks that run in the background when there is no critical task running.




**Parameters:**


* `task_number` Number of the task to start, obtained using the defineAsynchronousTask() function. 




        

<hr>



### function startCritical 

_Use this function to start a previously defined a critical task._ 
```C++
void TaskAPI::startCritical (
    bool manage_data_acquisition=true
) 
```



A critical task is an Uninterruptible Synchronous Task that uses a precise timer to execute a periodic, non-interruptible user task.


If no value is provided for the parameter and Data Acquisition has not been started yet, Scheduling will automatically start Data Acquisition. Thus, make sure all ADC configuration has been carried out before starting the uninterruptible task.




**Parameters:**


* `manage_data_acquisition` Set to false if you want the Scheduling module to not be in charge of Data Acquisition scheduling. If set to false, Data Acquisition has to be manually started if you want to use it. 




        

<hr>



### function stopBackground 

_Use this function to stop a previously started background task using its task number._ 
```C++
void TaskAPI::stopBackground (
    uint8_t task_number
) 
```



Background tasks are asynchronous tasks that run in the background when there is no critical task running. The task can be then resumed by calling startAsynchronousTask() again.




**Parameters:**


* `task_number` Number of the task to start, obtained using the defineAsynchronousTask() function. 




        

<hr>



### function stopCritical 

```C++
void TaskAPI::stopCritical () 
```




<hr>



### function suspendBackgroundMs 

_This function allows to suspend a background task for a specified duration expressed in milliseconds. For example, you can call this function at the end of a background task function, when there is no need for the task to run permanently._ 
```C++
void TaskAPI::suspendBackgroundMs (
    uint32_t duration_ms
) 
```



DO NOT use this function in a critical task! 


        

<hr>



### function suspendBackgroundUs 

_This function allows to suspend a background task for a specified duration expressed in microseconds. For example, you can call this function at the end of a background task function, when there is no need for the task to run permanently._ 
```C++
void TaskAPI::suspendBackgroundUs (
    uint32_t duration_us
) 
```



DO NOT use this function in a critical task! 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_task_api/zephyr/public_api/TaskAPI.h`

