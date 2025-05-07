

# File timer.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_timer\_driver**](dir_2bcefd02aa22d158a7fee7f57088a2fe.md) **>** [**zephyr**](dir_62a68ad86a1f2ceff5c536793b75d59b.md) **>** [**public\_api**](dir_7b157175519ef7e5ecaa80a64fe5f6a3.md) **>** [**timer.h**](timer_8h.md)

[Go to the documentation of this file](timer_8h.md)


```C++
/*
 * Copyright (c) 2021-2022 LAAS-CNRS
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


#ifndef TIMER_H_
#define TIMER_H_


// Zephyr
#include <zephyr/kernel.h>
#include <zephyr/device.h>


#ifdef __cplusplus
extern "C" {
#endif


// Public devices names

#define TIMER4_DEVICE DT_NODELABEL(timers4)
#define TIMER6_DEVICE DT_NODELABEL(timers6)
#define TIMER7_DEVICE DT_NODELABEL(timers7)


// Configuration structure

typedef void (*timer_callback_t)();

typedef enum
{
    no_pull,
    pull_up,
    pull_down
} pin_mode_t;

struct timer_config_t
{
    uint32_t         timer_enable_irq     : 1;
    uint32_t         timer_enable_encoder : 1;
    timer_callback_t timer_irq_callback;
    uint32_t         timer_irq_t_usec;
    pin_mode_t       timer_enc_pin_mode;
};


// API

typedef void     (*timer_api_config)   (const struct device* dev, const struct timer_config_t* config);
typedef void     (*timer_api_start)    (const struct device* dev);
typedef void     (*timer_api_stop)     (const struct device* dev);
typedef uint32_t (*timer_api_get_count)(const struct device* dev);

__subsystem struct timer_driver_api
{
    timer_api_config    config;
    timer_api_start     start;
    timer_api_stop      stop;
    timer_api_get_count get_count;
};


static inline void timer_config(const struct device* dev, const struct timer_config_t* config)
{
    const struct timer_driver_api* api = (const struct timer_driver_api*)(dev->api);

    api->config(dev, config);
}

static inline void timer_start(const struct device* dev)
{
    const struct timer_driver_api* api = (const struct timer_driver_api*)(dev->api);

    api->start(dev);
}

static inline void timer_stop(const struct device* dev)
{
    const struct timer_driver_api* api = (const struct timer_driver_api*)(dev->api);

    api->stop(dev);
}

static inline uint32_t timer_get_count(const struct device* dev)
{
    const struct timer_driver_api* api = (const struct timer_driver_api*)(dev->api);

    return api->get_count(dev);
}


#ifdef __cplusplus
}
#endif

#endif // TIMER_H_
```


