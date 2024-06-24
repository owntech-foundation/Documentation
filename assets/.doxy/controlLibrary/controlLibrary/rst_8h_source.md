

# File rst.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**rst.h**](rst_8h.md)

[Go to the documentation of this file](rst_8h.md)


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

#ifndef RST_H_
#define RST_H_
#include "controller.h"
#include "fir.h" 

struct RstParams {
    float32_t Ts;
    uint8_t nr;
    const float32_t *r;
    uint8_t ns;
    const float32_t *s;
    uint8_t nt;
    const float32_t *t;
    float32_t lower_bound;
    float32_t upper_bound;
};


class RST: public Controller<float32_t, float32_t, float32_t, RstParams> {
public:
    RST() {};

    int8_t init(RstParams p) override;

    void calculate(void) override;

    using Controller<float32_t, float32_t, float32_t, RstParams>::calculate;

    void reset(void) override;

private:
    Fir _R;
    Fir _Sp;
    Fir _T;
    float32_t _inv_s0;
};

#endif
```


