

# File controller.h

[**File List**](files.md) **>** [**controlLibrary**](dir_78b365e62f248710669e9a6984210a4a.md) **>** [**src**](dir_0c7b11c8d6d0df41220cb8bbf1e252be.md) **>** [**controller.h**](controller_8h.md)

[Go to the documentation of this file](controller_8h.md)


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

#include <arm_math.h>
#ifndef CONTROLLER_H_
#define CONTROLLER_H_
#include <zephyr/logging/log.h>

template<typename refs_T, typename meas_T, typename outputs_T, typename params_T>
class Controller
{
    public:
    virtual int8_t init(params_T parameters) = 0; //ref + mesure

    virtual void reset(void) = 0;

    virtual void calculate(void) = 0; 
    virtual outputs_T calculateWithReturn(refs_T yref, meas_T y) {
        this->setReference(yref);
        this->setMeasurement(y);
        this->calculate();
        return this->getOutput();
    }

    virtual void setReference(refs_T reference) {
        _reference = reference;
    }; 

    virtual void setMeasurement(meas_T measure) {
        _measure = measure;
    }; 

    virtual outputs_T getOutput() {
        return _output;
    }; 

    virtual outputs_T saturate(outputs_T u) {
        if ( u > _upper_bound) {
            u = _upper_bound;
        }
        if (u < _lower_bound) {
            u = _lower_bound;
        }
        return u;
    };
protected:
    float32_t _Ts; // sample time
    outputs_T _lower_bound;
    outputs_T _upper_bound;
    // template 
    refs_T _reference;
    outputs_T _output;
    meas_T _measure;

};

#endif /* !CONTROLLER_H_ */
```


