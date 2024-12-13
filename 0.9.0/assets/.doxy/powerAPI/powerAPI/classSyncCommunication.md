

# Class SyncCommunication



[**ClassList**](annotated.md) **>** [**SyncCommunication**](classSyncCommunication.md)












































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**initMaster**](#function-initmaster) () <br>_initialization synchronization as MASTER, the master send the synchronization pulsle._  |
|  void | [**initSlave**](#function-initslave) (board\_version\_t board\_version) <br>_initialization synchronization as SLAVE, the slave receive the synchronization pulsle._  |


























## Public Static Functions Documentation




### function initMaster 

_initialization synchronization as MASTER, the master send the synchronization pulsle._ 
```C++
static void SyncCommunication::initMaster () 
```





**Date:**

2024




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 




**Author:**

Ayoub Farah Hassan [ayoub.farah-hassan@laas.fr](mailto:ayoub.farah-hassan@laas.fr) 





        

<hr>



### function initSlave 

_initialization synchronization as SLAVE, the slave receive the synchronization pulsle._ 
```C++
static void SyncCommunication::initSlave (
    board_version_t board_version
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/SyncCommunication.h`

