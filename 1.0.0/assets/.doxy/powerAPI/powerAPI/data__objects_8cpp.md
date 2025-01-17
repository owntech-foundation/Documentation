

# File data\_objects.cpp



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**data\_objects.cpp**](data__objects_8cpp.md)

[Go to the source code of this file](data__objects_8cpp_source.md)
























## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint16\_t | [**can\_node\_addr**](#variable-can_node_addr)   = `0x60`<br> |
|  bool | [**ctrl\_enable**](#variable-ctrl_enable)   = `false`<br> |
|  char | [**device\_id**](#variable-device_id)   = `"Twist"`<br> |
|  const char | [**device\_type**](#variable-device_type)   = `"Synchronous Buck"`<br> |
|  const char | [**firmware\_version**](#variable-firmware_version)   = `"0.0.1"`<br> |
|  const char | [**hardware\_version**](#variable-hardware_version)   = `"0.9"`<br> |
|  float32\_t | [**i1\_low\_value**](#variable-i1_low_value)   = `0`<br> |
|  float32\_t | [**i2\_low\_value**](#variable-i2_low_value)   = `0`<br> |
|  float32\_t | [**i\_high\_value**](#variable-i_high_value)   = `0`<br> |
|  const char | [**manufacturer**](#variable-manufacturer)   = `"OwnTech"`<br> |
|  float32\_t | [**reference\_value**](#variable-reference_value)   = `0`<br> |
|  float32\_t | [**temp\_value**](#variable-temp_value)   = `0`<br> |
|  float32\_t | [**v1\_low\_value**](#variable-v1_low_value)   = `0`<br> |
|  float32\_t | [**v2\_low\_value**](#variable-v2_low_value)   = `0`<br> |
|  float32\_t | [**v\_high\_value**](#variable-v_high_value)   = `0`<br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  ThingSetDataObject | [**data\_objects**](#variable-data_objects)  <br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**dataObjectsUpdateMeasures**](#function-dataobjectsupdatemeasures) () <br> |
|  ThingSet | [**ts**](#function-ts) (data\_objects, sizeof(data\_objects)/sizeof(ThingSetDataObject)) <br> |




























## Public Attributes Documentation




### variable can\_node\_addr 

```C++
uint16_t can_node_addr;
```




<hr>



### variable ctrl\_enable 

```C++
bool ctrl_enable;
```




<hr>



### variable device\_id 

```C++
char device_id[9];
```




<hr>



### variable device\_type 

```C++
const char device_type[];
```




<hr>



### variable firmware\_version 

```C++
const char firmware_version[];
```




<hr>



### variable hardware\_version 

```C++
const char hardware_version[];
```




<hr>



### variable i1\_low\_value 

```C++
float32_t i1_low_value;
```




<hr>



### variable i2\_low\_value 

```C++
float32_t i2_low_value;
```




<hr>



### variable i\_high\_value 

```C++
float32_t i_high_value;
```




<hr>



### variable manufacturer 

```C++
const char manufacturer[];
```





**Author:**

Martin Jäger [martin@libre.solar](mailto:martin@libre.solar) 




**Author:**

Jean Alinei [jean.alinei@laas.fr](mailto:jean.alinei@laas.fr) 




**Author:**

Luiz Villa [luiz.villa@laas.fr](mailto:luiz.villa@laas.fr) 





        

<hr>



### variable reference\_value 

```C++
float32_t reference_value;
```




<hr>



### variable temp\_value 

```C++
float32_t temp_value;
```




<hr>



### variable v1\_low\_value 

```C++
float32_t v1_low_value;
```




<hr>



### variable v2\_low\_value 

```C++
float32_t v2_low_value;
```




<hr>



### variable v\_high\_value 

```C++
float32_t v_high_value;
```




<hr>
## Public Static Attributes Documentation




### variable data\_objects 

```C++
ThingSetDataObject data_objects[];
```



Thing Set Data Objects (see thingset.io for specification) 


        

<hr>
## Public Functions Documentation




### function dataObjectsUpdateMeasures 

```C++
void dataObjectsUpdateMeasures () 
```




<hr>



### function ts 

```C++
ThingSet ts (
    data_objects,
    sizeof(data_objects)/sizeof(ThingSetDataObject)
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/data_objects.cpp`

