

# File ShieldAPI.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_shield\_api**](dir_9a89dd71eabb2209bdecc753bd3dc4ac.md) **>** [**zephyr**](dir_b3d0c58b5ddf7b1e26f8d905ca8e43b0.md) **>** [**public\_api**](dir_1545707aba7ea3e5dcde32c7d0a91b3a.md) **>** [**ShieldAPI.h**](ShieldAPI_8h.md)

[Go to the documentation of this file](ShieldAPI_8h.md)


```C++
/*
 * Copyright (c) 2024 LAAS-CNRS
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 2.1 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: LGPL-2.1
 */



#ifndef SHIELDAPI_H_
#define SHIELDAPI_H_


#include "../src/Sensors.h"
#include "../src/Power.h"


// Static class definition

class ShieldAPI
{
public:

    static SensorsAPI sensors;

    static PowerAPI power;

#ifdef CONFIG_OWNTECH_NGND_DRIVER
    static NgndHAL ngnd;
#endif

};


// Public object to interact with the class

extern ShieldAPI shield;


#endif // SHIELDAPI_H_
```


