

# File data\_objects.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**data\_objects.h**](data__objects_8h.md)

[Go to the documentation of this file](data__objects_8h.md)


```C++
/*
 * Copyright (c) The Libre Solar Project Contributors
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#ifndef DATA_OBJECTS_H_
#define DATA_OBJECTS_H_

#include <stdint.h>
#include <string.h>

#include <arm_math.h>

/*
 * Groups / first layer data object IDs
 */

#define ID_ROOT         0x00
#define ID_DEVICE       0x01
#define ID_MEASUREMENTS 0x08
#define ID_PUB          0x100
#define ID_CTRL         0x8000

/*
 * Subset definitions for statements and publish/subscribe
 */
#define SUBSET_SER  (1U << 0)   // UART serial
#define SUBSET_CAN  (1U << 1)   // CAN bus
#define SUBSET_CTRL (1U << 3)   // control data sent and received via CAN

/*
 * Exposed variables
 */

extern bool      ctrl_enable;
extern uint16_t  can_node_addr;
extern float32_t reference_value;

/*
 * Modifiers
 */

void dataObjectsUpdateMeasures();


#endif // DATA_OBJECTS_H_
```


