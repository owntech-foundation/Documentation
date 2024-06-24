

# File fir.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**fir.h**](fir_8h.md)

[Go to the documentation of this file](fir_8h.md)


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

#ifndef FIR_H_
#define FIR_H_
#include <arm_math.h>

class Fir {
public:
    Fir();
    Fir(const uint8_t nc, const float32_t *coeffs);
    uint8_t init(uint8_t nc, const float32_t *coeffs);
    float32_t update(float32_t new_data);
    void reset();
    void setCoeff(uint8_t n, float32_t value);
    ~Fir();
private:
    uint8_t nc;
    float32_t *coeffs;
    float32_t *datas;
};
#endif
```


