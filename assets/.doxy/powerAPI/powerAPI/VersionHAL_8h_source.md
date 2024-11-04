

# File VersionHAL.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**VersionHAL.h**](VersionHAL_8h.md)

[Go to the documentation of this file](VersionHAL_8h.md)


```C++
/*
 * Copyright (c) 2022-2023 LAAS-CNRS
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

#ifndef VERSIONHAL_H_
#define VERSIONHAL_H_




typedef enum
{
    nucleo_G474RE,
    O2_v_0_9,
    O2_v_1_1_2,
    SPIN_v_0_1,
    SPIN_v_0_9,
    SPIN_v_1_0,
    TWIST_v_1_1_2,
    TWIST_v_1_1_3,
    TWIST_v_1_1_4
} board_version_t;



class VersionHAL
{
public:

    void setBoardVersion(board_version_t board_version);
    

    board_version_t getBoardVersion();


private:

    static board_version_t board_version;


};



#endif // VERSIONHAL_H_
```

