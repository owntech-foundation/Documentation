

# File data\_objects.h



[**FileList**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**data\_objects.h**](data__objects_8h.md)

[Go to the source code of this file](data__objects_8h_source.md)

_Handling of ThingSet data objects._ 






















## Public Attributes

| Type | Name |
| ---: | :--- |
|  char | [**device\_type**](#variable-device_type)   = `HW\_NAME`<br> |
|  char | [**firmware\_version**](#variable-firmware_version)   = `"1.0.0"`<br> |
|  char | [**hardware\_version**](#variable-hardware_version)   = `HW\_VER`<br> |
|  char | [**manufacturer**](#variable-manufacturer)   = `CONFIG\_USB\_DEVICE\_MANUFACTURER`<br> |
|  float32\_t | [**reference\_value**](#variable-reference_value)   = `0`<br> |
|  bool | [**start\_stop**](#variable-start_stop)   = `false`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**THINGSET\_ADD\_GROUP**](#function-thingset_add_group) (ID\_ROOT, 0x4, "Device", THINGSET\_NO\_CALLBACK) <br> |
|   | [**THINGSET\_ADD\_GROUP**](#function-thingset_add_group) (ID\_ROOT, ID\_CTRL, "Control", THINGSET\_NO\_CALLBACK) <br> |
|   | [**THINGSET\_ADD\_ITEM\_BOOL**](#function-thingset_add_item_bool) (ID\_CTRL, ID\_CTRL\_ENABLE, "zStartStop", & start\_stop, THINGSET\_ANY\_RW, SUBSET\_CTRL) <br> |
|   | [**THINGSET\_ADD\_ITEM\_FLOAT**](#function-thingset_add_item_float) (ID\_CTRL, ID\_CTRL\_REFERENCE, "zCtrlReference", & reference\_value, 1, THINGSET\_ANY\_RW, SUBSET\_CTRL) <br> |
|   | [**THINGSET\_ADD\_ITEM\_STRING**](#function-thingset_add_item_string) (ID\_DEVICE, 0x40, "cManufacturer", manufacturer, 0, THINGSET\_ANY\_R, 0) <br> |
|   | [**THINGSET\_ADD\_ITEM\_STRING**](#function-thingset_add_item_string) (ID\_DEVICE, 0x41, "cType", device\_type, 0, THINGSET\_ANY\_R, 0) <br> |
|   | [**THINGSET\_ADD\_ITEM\_STRING**](#function-thingset_add_item_string) (ID\_DEVICE, 0x42, "cHardwareVersion", hardware\_version, 0, THINGSET\_ANY\_R, 0) <br> |
|   | [**THINGSET\_ADD\_ITEM\_STRING**](#function-thingset_add_item_string) (ID\_DEVICE, 0x43, "cFirmwareVersion", firmware\_version, 0, THINGSET\_ANY\_R, 0) <br> |
|   | [**THINGSET\_ADD\_SUBSET**](#function-thingset_add_subset) (ID\_ROOT, 0x38, "mCAN", SUBSET\_CAN, THINGSET\_ANY\_RW) <br> |




























## Public Attributes Documentation




### variable device\_type 

```C++
char device_type[];
```




<hr>



### variable firmware\_version 

```C++
char firmware_version[];
```




<hr>



### variable hardware\_version 

```C++
char hardware_version[];
```




<hr>



### variable manufacturer 

```C++
char manufacturer[];
```




<hr>



### variable reference\_value 

```C++
float32_t reference_value;
```




<hr>



### variable start\_stop 

```C++
bool start_stop;
```



Extern variable defined in this module 


        

<hr>
## Public Functions Documentation




### function THINGSET\_ADD\_GROUP 

```C++
THINGSET_ADD_GROUP (
    ID_ROOT,
    0x4,
    "Device",
    THINGSET_NO_CALLBACK
) 
```



Thingset Data Objects (see thingset.io for specification) 


        

<hr>



### function THINGSET\_ADD\_GROUP 

```C++
THINGSET_ADD_GROUP (
    ID_ROOT,
    ID_CTRL,
    "Control",
    THINGSET_NO_CALLBACK
) 
```



Control parameters (IDs &gt;= 0x8000) 


        

<hr>



### function THINGSET\_ADD\_ITEM\_BOOL 

```C++
THINGSET_ADD_ITEM_BOOL (
    ID_CTRL,
    ID_CTRL_ENABLE,
    "zStartStop",
    & start_stop,
    THINGSET_ANY_RW,
    SUBSET_CTRL
) 
```




<hr>



### function THINGSET\_ADD\_ITEM\_FLOAT 

```C++
THINGSET_ADD_ITEM_FLOAT (
    ID_CTRL,
    ID_CTRL_REFERENCE,
    "zCtrlReference",
    & reference_value,
    1,
    THINGSET_ANY_RW,
    SUBSET_CTRL
) 
```




<hr>



### function THINGSET\_ADD\_ITEM\_STRING 

```C++
THINGSET_ADD_ITEM_STRING (
    ID_DEVICE,
    0x40,
    "cManufacturer",
    manufacturer,
    0,
    THINGSET_ANY_R,
    0
) 
```




<hr>



### function THINGSET\_ADD\_ITEM\_STRING 

```C++
THINGSET_ADD_ITEM_STRING (
    ID_DEVICE,
    0x41,
    "cType",
    device_type,
    0,
    THINGSET_ANY_R,
    0
) 
```




<hr>



### function THINGSET\_ADD\_ITEM\_STRING 

```C++
THINGSET_ADD_ITEM_STRING (
    ID_DEVICE,
    0x42,
    "cHardwareVersion",
    hardware_version,
    0,
    THINGSET_ANY_R,
    0
) 
```




<hr>



### function THINGSET\_ADD\_ITEM\_STRING 

```C++
THINGSET_ADD_ITEM_STRING (
    ID_DEVICE,
    0x43,
    "cFirmwareVersion",
    firmware_version,
    0,
    THINGSET_ANY_R,
    0
) 
```




<hr>



### function THINGSET\_ADD\_SUBSET 

```C++
THINGSET_ADD_SUBSET (
    ID_ROOT,
    0x38,
    "mCAN",
    SUBSET_CAN,
    THINGSET_ANY_RW
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `docs/core/zephyr/modules/owntech_communication/zephyr/src/data_objects.h`

