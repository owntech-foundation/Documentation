

# Class CompHAL



[**ClassList**](annotated.md) **>** [**CompHAL**](classCompHAL.md)



_Handles comparator 1 and 3 of the SPIN board._ [More...](#detailed-description)

* `#include <CompHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**initialize**](#function-initialize) (uint8\_t comparator\_number) <br>_Initializes a comparator for the current mode control._  |




























# Detailed Description




**Note:**

Use this element to call the initialization function of either comparator 





    
## Public Functions Documentation




### function initialize 

_Initializes a comparator for the current mode control._ 
```C++
void CompHAL::initialize (
    uint8_t comparator_number
) 
```





**Note:**

Current mode control deploys a comparator together with a DAC. This function must be called after setting up the DAC linked to the comparator. Note that comparator 1 is linked with DAC3 and comparator 3 with DAC1. Comparator 1 is linked with ilow1 and comparator 3 is linked with ilow2.




**Parameters:**


* `comparator_number` can be either 1 or 3



**Date:**

2023




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 




**Author:**

Clément Foucher [clement.foucher@laas.fr](mailto:clement.foucher@laas.fr) 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/CompHAL.h`

