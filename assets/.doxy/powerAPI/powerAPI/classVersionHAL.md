

# Class VersionHAL



[**ClassList**](annotated.md) **>** [**VersionHAL**](classVersionHAL.md)



_Handles the versioning for the spin board._ [More...](#detailed-description)

* `#include <VersionHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  board\_version\_t | [**getBoardVersion**](#function-getboardversion) () <br>_return board version_  |
|  void | [**setBoardVersion**](#function-setboardversion) (board\_version\_t board\_version) <br>_Sets the version of the microcontroller board. It can take the following values: nucleo\_G474RE, O2\_v\_0\_9, O2\_v\_1\_1\_2, SPIN\_v\_0\_1, SPIN\_v\_0\_9, SPIN\_v\_1\_0, TWIST\_v\_1\_1\_2 TWIST\_v\_1\_1\_3, TWIST\_v\_1\_1\_4._  |




























# Detailed Description




**Note:**

Use this element to defined your version of the SPIN board 





    
## Public Functions Documentation




### function getBoardVersion 

_return board version_ 
```C++
board_version_t VersionHAL::getBoardVersion () 
```





**Returns:**

Return one of these values : nucleo\_G474RE, O2\_v\_0\_9, O2\_v\_1\_1\_2, SPIN\_v\_0\_1, SPIN\_v\_0\_9, SPIN\_v\_1\_0, TWIST\_v\_1\_1\_2 TWIST\_v\_1\_1\_3, TWIST\_v\_1\_1\_4 





        

<hr>



### function setBoardVersion 

_Sets the version of the microcontroller board. It can take the following values: nucleo\_G474RE, O2\_v\_0\_9, O2\_v\_1\_1\_2, SPIN\_v\_0\_1, SPIN\_v\_0\_9, SPIN\_v\_1\_0, TWIST\_v\_1\_1\_2 TWIST\_v\_1\_1\_3, TWIST\_v\_1\_1\_4._ 
```C++
void VersionHAL::setBoardVersion (
    board_version_t board_version
) 
```



Stand alone versions such as SPIN\_v\_X comprise only the spin board itself. Legacy versions such as nucleo or O2\_X comprise the nucleo board or the old O2 boards. Twist versions comprise all the available Twist connected versions. 

**Parameters:**


* `board_version` Enum representing the microcontroller version. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/VersionHAL.h`

