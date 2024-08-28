

# File filters.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**filters.h**](filters_8h.md)

[Go to the documentation of this file](filters_8h.md)


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

#ifndef FILTERS_H_
#define FILTERS_H_
#include "arm_math_types.h"
#include "fir.h"
#include "pid.h"
#include "trigo.h" 

class LowPassFirstOrderFilter {
public:
    LowPassFirstOrderFilter(float32_t Ts, float32_t tau);
    uint8_t init(float32_t Ts, float32_t tau);
    float32_t calculateWithReturn(float32_t signal);
    void reset();
    void reset(float32_t value);
private:
    float32_t _Ts;
    float32_t _tau;
    float32_t _a1;
    float32_t _b1;

    float32_t _previous_value;
};

class NotchFilter {
public:
    NotchFilter() {};
    NotchFilter(float32_t Ts, float32_t f0, float32_t bandwidth);

    uint8_t init(float32_t Ts, float32_t f0, float32_t bandwidth);
    float32_t calculateWithReturn(float32_t signal);
    void reset();
private:
    float32_t _Ts;
    float32_t _f0;
    float32_t _bandwidth;

    Fir _B; // numerator of the filter
    Fir _A; // denominator of the filter
    float32_t _output;
};

struct PllDatas {
    float32_t w;
    float32_t angle;
    float32_t error;
};

class PllSinus {
public:
    PllSinus() {};
    PllSinus(float32_t Ts, float32_t amplitude, float32_t f0, float32_t rt);
    uint8_t init(float32_t Ts, float32_t amplitude, float32_t f0, float32_t rt);
    PllDatas calculateWithReturn(float32_t signal);
    void reset(float32_t f0);

private:
    float32_t _Ts;
    float32_t _amplitude;
    float32_t _f0;
    float32_t _rt;

    NotchFilter _notch;
    Pid _pi;
    float32_t _w;
    float32_t _angle;
};
#endif
```


