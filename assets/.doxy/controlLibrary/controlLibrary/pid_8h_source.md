

# File pid.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**pid.h**](pid_8h.md)

[Go to the documentation of this file](pid_8h.md)


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

#ifndef PID_H_
#define PID_H_
#include "controller.h"

struct PidParams {
    float32_t Ts;
    float32_t Kp;
    float32_t Ti;
    float32_t Td;
    float32_t N;
    float32_t lower_bound;
    float32_t upper_bound;
};


class Pid: public Controller <float32_t, float32_t, float32_t, PidParams> {

public:
    Pid(){};

    int8_t init(PidParams params) override; 

    void calculate(void) override;

    void reset() override;

    void reset(float32_t output);

private:
    float32_t _integral;
    float32_t _Kp;
    float32_t _Ti;
    float32_t _Td;
    float32_t _N;
    float32_t _previous_f_deriv; // previous filtered derivative value
    float32_t _previous_error;  // previous error

    float32_t _inverse_Ts;
    float32_t _inverse_Ti;
    float32_t _inverse_Kp;
    float32_t _b1_filter;
    float32_t _a1_filter;
};
#endif
```


