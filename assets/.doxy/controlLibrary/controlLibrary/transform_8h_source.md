

# File transform.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**transform.h**](transform_8h.md)

[Go to the documentation of this file](transform_8h.md)


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
 * SPDX-License-Identifier: LGLPV2.1
 */
#ifndef TRANSFORM_H_
#define TRANSFORM_H_
#include <arm_math.h>
#include "trigo.h"

const float32_t SQRT3_INVERSE  = 0.57735026F;
const float32_t SQRT3_DIV_2    = 0.8660254F;


struct three_phase_t {
    float32_t a;
    float32_t b;
    float32_t c;

};

struct clarke_t {
    float32_t alpha;
    float32_t beta;
    float32_t o;
};

struct dqo_t {
    float32_t d;
    float32_t q;
    float32_t o;
};

class Transform
{
public:
    static dqo_t rotation_to_dqo(clarke_t Xabo, float32_t theta);
    static clarke_t rotation_to_clarke(dqo_t Xdqo, float32_t theta);
    static clarke_t clarke(three_phase_t Xabc);
    static three_phase_t clarke_inverse(clarke_t Xabo);
    static dqo_t to_dqo(three_phase_t Xabc, float32_t theta);
    static three_phase_t to_threephase(dqo_t Xdqo, float32_t theta);
};
#endif
```


