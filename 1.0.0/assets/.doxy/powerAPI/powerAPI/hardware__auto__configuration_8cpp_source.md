

# File hardware\_auto\_configuration.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_spin\_api**](dir_87330bcbf7fe698536ea5946c1b90585.md) **>** [**zephyr**](dir_83abe2f3de580445b50d57f614c989e1.md) **>** [**src**](dir_b0a9bfd1c37d418dc07d30cb79a776da.md) **>** [**hardware\_auto\_configuration.cpp**](hardware__auto__configuration_8cpp.md)

[Go to the documentation of this file](hardware__auto__configuration_8cpp.md)


```C++
/*
 * Copyright (c) 2022-2024 LAAS-CNRS
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

// Zephyr
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/console/console.h>

// STM32 LL
#include <stm32_ll_bus.h>
#include <stm32_ll_system.h>

// Owntech driver
#include "dac.h"

static const struct device* dac2 = DEVICE_DT_GET(DAC2_DEVICE);

// Functions to be run

static int _vrefbuf_init()
{
    LL_APB2_GRP1_EnableClock(LL_APB2_GRP1_PERIPH_SYSCFG);
    LL_VREFBUF_SetVoltageScaling(LL_VREFBUF_VOLTAGE_SCALE0);
    LL_VREFBUF_DisableHIZ();
    LL_VREFBUF_Enable();

    return 0;
}

static int _dac2_init()
{
    if (device_is_ready(dac2) == true)
    {
        dac_set_const_value(dac2, 1, 2048U);
        dac_pin_configure(dac2, 1, dac_pin_external);
        dac_start(dac2, 1);
    }

    return 0;
}

static int _console_init()
{
    console_init();

    return 0;
}

#ifdef CONFIG_BOOTLOADER_MCUBOOT
#include <zephyr/kernel.h>
#include <zephyr/dfu/mcuboot.h>
static int _img_validation()
{
    if (boot_is_img_confirmed() == false)
    {
        int rc = boot_write_img_confirmed();
        if (rc != 0)
        {
            printk("Failed to confirm image");
        }
    }

    return 0;
}
#endif // CONFIG_BOOTLOADER_MCUBOOT


#if defined(CONFIG_RETENTION_BOOT_MODE) && defined(CONFIG_CDC_ACM_DTE_RATE_CALLBACK_SUPPORT) && defined(CONFIG_USB_CDC_ACM)
#include <zephyr/retention/bootmode.h>
#include <zephyr/sys/reboot.h>
void reboot_bootloader_task(struct k_work* work)
{
    bootmode_set(BOOT_MODE_TYPE_BOOTLOADER);
    sys_reboot(SYS_REBOOT_WARM);
}

K_WORK_DEFINE(reboot_bootloader_work, reboot_bootloader_task);
void _cdc_rate_callback(const struct device* dev, uint32_t rate)
{
    if (rate == 1200)
    {
        k_work_submit(&reboot_bootloader_work);
    }
}

#include <zephyr/drivers/uart/cdc_acm.h>
#define CDC_ACM_DEVICE DT_NODELABEL(cdc_acm_uart0)
static const struct device* cdc_acm_console = DEVICE_DT_GET(CDC_ACM_DEVICE);
static int _register_cdc_rate_callback()
{
    cdc_acm_dte_rate_callback_set(cdc_acm_console, _cdc_rate_callback);

    return 0;
}
#endif // CONFIG_RETENTION_BOOT_MODE && CONFIG_CDC_ACM_DTE_RATE_CALLBACK_SUPPORT && CONFIG_USB_CDC_ACM


#ifdef CONFIG_SHIELD_O2
#include <stm32_ll_lpuart.h>
static int _swap_usart1_tx_rx()
{
    LL_LPUART_Disable(LPUART1);
    LL_LPUART_SetTXRXSwap(LPUART1, LL_LPUART_TXRX_SWAPPED);
    LL_LPUART_Enable(LPUART1);

    return 0;
}
#endif // SHIELD_O2

// Zephyr macros to automatically run above functions

SYS_INIT(_vrefbuf_init,
         PRE_KERNEL_1, // To be run in the first init phase
         CONFIG_KERNEL_INIT_PRIORITY_DEVICE
        );

SYS_INIT(_dac2_init,
         PRE_KERNEL_2, // To be run in the second init phase (depends on DAC driver initialization)
         CONFIG_KERNEL_INIT_PRIORITY_DEVICE
        );

SYS_INIT(_console_init,
         APPLICATION,
         89
        );

#ifdef CONFIG_BOOTLOADER_MCUBOOT
SYS_INIT(_img_validation,
         APPLICATION,
         CONFIG_APPLICATION_INIT_PRIORITY
        );
#endif // CONFIG_BOOTLOADER_MCUBOOT

#if defined(CONFIG_RETENTION_BOOT_MODE) && defined(CONFIG_CDC_ACM_DTE_RATE_CALLBACK_SUPPORT) && defined(CONFIG_USB_CDC_ACM)
SYS_INIT(_register_cdc_rate_callback,
         APPLICATION,
         CONFIG_APPLICATION_INIT_PRIORITY
        );
#endif // CONFIG_RETENTION_BOOT_MODE && CONFIG_CDC_ACM_DTE_RATE_CALLBACK_SUPPORT && CONFIG_USB_CDC_ACM

#ifdef CONFIG_SHIELD_O2
SYS_INIT(_swap_usart1_tx_rx,
         PRE_KERNEL_1, // To be run in the first init phase
         CONFIG_KERNEL_INIT_PRIORITY_DEVICE
        );
#endif // SHIELD_O2
```

