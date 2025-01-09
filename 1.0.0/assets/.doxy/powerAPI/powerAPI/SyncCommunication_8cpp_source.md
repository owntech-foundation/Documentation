

# File SyncCommunication.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**SyncCommunication.cpp**](SyncCommunication_8cpp.md)

[Go to the documentation of this file](SyncCommunication_8cpp.md)


```C++
/*
 * Copyright (c) 2023-2024 LAAS-CNRS
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


// LL driver
#include "stm32_ll_hrtim.h"
#include "stm32_ll_gpio.h"
#include "stm32g4xx_ll_bus.h"

// Header
#include "SyncCommunication.h"

void SyncCommunication::initMaster()
{
    LL_HRTIM_TIM_CounterDisable(HRTIM1, LL_HRTIM_TIMER_A);

    // SYNCOUT[1:0] and SYNCSRC[1:0] bitfield configuration in HRTIM_MCR
    LL_HRTIM_ConfigSyncOut(HRTIM1, LL_HRTIM_SYNCOUT_POSITIVE_PULSE, LL_HRTIM_SYNCOUT_SRC_TIMA_START);

    // HRTIM_SCOUT pin configuration
    LL_AHB2_GRP1_EnableClock(LL_AHB2_GRP1_PERIPH_GPIOB);

    // the SyncIN pin is disabled here, it will be enabled in the ctrl task to ensure synchronization between master and slave.
    LL_GPIO_SetPinSpeed     (GPIOB, LL_GPIO_PIN_1, LL_GPIO_SPEED_FREQ_VERY_HIGH);
    LL_GPIO_SetPinOutputType(GPIOB, LL_GPIO_PIN_1, LL_GPIO_OUTPUT_PUSHPULL);
    LL_GPIO_SetPinPull      (GPIOB, LL_GPIO_PIN_1, LL_GPIO_PULL_NO);
    LL_GPIO_SetAFPin_0_7    (GPIOB, LL_GPIO_PIN_1, LL_GPIO_AF_13);

    LL_HRTIM_TIM_CounterEnable(HRTIM1, LL_HRTIM_TIMER_A);
}

void SyncCommunication::initSlave()
{
    LL_HRTIM_TIM_CounterDisable(HRTIM1, LL_HRTIM_TIMER_MASTER);

    //  HRTIM synchronization input source
    LL_HRTIM_SetSyncInSrc(HRTIM1, LL_HRTIM_SYNCIN_SRC_EXTERNAL_EVENT);

    // Enable the master timer reset when receiving a synchronization input event
    LL_HRTIM_TIM_EnableResetOnSync(HRTIM1, LL_HRTIM_TIMER_MASTER);

    // HRTIM_SCIN pin configuration
    LL_AHB2_GRP1_EnableClock(LL_AHB2_GRP1_PERIPH_GPIOB);

#ifdef CONFIG_SHIELD_TWIST_V1_4_1
    LL_GPIO_SetPinMode      (GPIOB, LL_GPIO_PIN_2, LL_GPIO_MODE_ALTERNATE);
    LL_GPIO_SetPinSpeed     (GPIOB, LL_GPIO_PIN_2, LL_GPIO_SPEED_FREQ_VERY_HIGH);
    LL_GPIO_SetPinOutputType(GPIOB, LL_GPIO_PIN_2, LL_GPIO_OUTPUT_PUSHPULL);
    LL_GPIO_SetPinPull      (GPIOB, LL_GPIO_PIN_2, LL_GPIO_PULL_NO);
    LL_GPIO_SetAFPin_0_7    (GPIOB, LL_GPIO_PIN_2, LL_GPIO_AF_13);
#else
    LL_GPIO_SetPinMode      (GPIOB, LL_GPIO_PIN_6, LL_GPIO_MODE_ALTERNATE);
    LL_GPIO_SetPinSpeed     (GPIOB, LL_GPIO_PIN_6, LL_GPIO_SPEED_FREQ_VERY_HIGH);
    LL_GPIO_SetPinOutputType(GPIOB, LL_GPIO_PIN_6, LL_GPIO_OUTPUT_PUSHPULL);
    LL_GPIO_SetPinPull      (GPIOB, LL_GPIO_PIN_6, LL_GPIO_PULL_NO);
    LL_GPIO_SetAFPin_0_7    (GPIOB, LL_GPIO_PIN_6, LL_GPIO_AF_12);
#endif

    LL_HRTIM_TIM_CounterEnable(HRTIM1, LL_HRTIM_TIMER_MASTER);
}
```


