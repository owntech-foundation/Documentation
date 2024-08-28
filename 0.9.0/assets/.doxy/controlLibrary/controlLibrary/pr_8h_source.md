

# File pr.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**pr.h**](pr_8h.md)

[Go to the documentation of this file](pr_8h.md)


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

#include "controller.h"
#include "fir.h"

struct PrParams {
    float32_t Ts;
    float32_t Kp;
    float32_t Kr;
    float32_t w0;
    float32_t phi_prime;
    float32_t lower_bound;
    float32_t upper_bound;
};

class Pr: public Controller <float32_t, float32_t, float32_t, PrParams> {

public:
    Pr() {};

    int8_t init(PrParams p);

    void calculate(void);

    void reset(void);

private:
    float32_t _Ts;
    float32_t _Kp;
    float32_t _Kr;
    float32_t _inverse_Kr;
    Fir _B; // numerator of the resonator
    Fir _A; // denominator of the resonator
    float32_t _resonant; // resonator output
};
```


