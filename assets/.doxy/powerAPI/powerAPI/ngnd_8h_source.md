

# File ngnd.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_ngnd\_driver**](dir_487909855ff81a58e51ecefcc10df3bb.md) **>** [**zephyr**](dir_c984519a7bdbe6c0d73dd876f54bf8c6.md) **>** [**public\_api**](dir_b84e60c9f86d8ee8d4badbb0cfc94e11.md) **>** [**ngnd.h**](ngnd_8h.md)

[Go to the documentation of this file](ngnd_8h.md)


```C++
/*
 * Copyright (c) 2020-2022 LAAS-CNRS
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
 * SPDX-License-Identifier: LGLPV2.1
 */

#ifndef NGND_H_
#define NGND_H_


// Zephyr
#include <zephyr/device.h>


#ifdef __cplusplus
extern "C" {
#endif


// Public device name

#define NGND_DEVICE DT_NODELABEL(ngnd)


// API

void ngnd_set(const struct device* dev, int value);


#ifdef __cplusplus
}
#endif

#endif // NGND_H_
```


