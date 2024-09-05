

# Class UartHAL



[**ClassList**](annotated.md) **>** [**UartHAL**](classUartHAL.md)



_Handles usart 1 for the SPIN board._ [More...](#detailed-description)

* `#include <UartHAL.h>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**usart1Init**](#function-usart1init) () <br>_Library initialization function for the usart communication. This function is declared on the private section of the .c file._  |
|  char | [**usart1ReadChar**](#function-usart1readchar) () <br>_This function sends back a single character waiting to be treated from the usart1._  |
|  void | [**usart1SwapRxTx**](#function-usart1swaprxtx) () <br>_This function swaps the usart RX and TX pins. It should be called in conjunction with a board version setup._  |
|  void | [**usart1WriteChar**](#function-usart1writechar) (char data) <br>_This function transmits a single character through the usart 1._  |




























# Detailed Description




**Note:**

Use this element to initialize and send messages via usart 1 





    
## Public Functions Documentation




### function usart1Init 

```C++
void UartHAL::usart1Init () 
```




<hr>



### function usart1ReadChar 

_This function sends back a single character waiting to be treated from the usart1._ 
```C++
char UartHAL::usart1ReadChar () 
```





**Returns:**

This function returns a single char which is waiting to be treated if no char is waiting it returns an 'x' which should be treated as an error 





        

<hr>



### function usart1SwapRxTx 

```C++
void UartHAL::usart1SwapRxTx () 
```




<hr>



### function usart1WriteChar 

_This function transmits a single character through the usart 1._ 
```C++
void UartHAL::usart1WriteChar (
    char data
) 
```





**Parameters:**


* `data` single char to be sent out 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_spin_api/zephyr/src/UartHAL.h`
