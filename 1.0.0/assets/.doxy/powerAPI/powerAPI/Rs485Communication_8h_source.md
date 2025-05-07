

# File Rs485Communication.h

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**Rs485Communication.h**](Rs485Communication_8h.md)

[Go to the documentation of this file](Rs485Communication_8h.md)


```C++
/*
 * Copyright (c) 2024-present LAAS-CNRS
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

/*
 * @date   2024
 *
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 */

#ifndef RS485COMMUNICATION_H_
#define RS485COMMUNICATION_H_

#include <stdint.h>

#ifdef CONFIG_OWNTECH_COMMUNICATION_ENABLE_RS485


typedef enum {
    SPEED_2M,  
    SPEED_5M,  
    SPEED_10M, 
    SPEED_20M, 
}rs485_speed_t;


class Rs485Communication
{
    public :
        void configure(uint8_t *transmission_buffer,
                       uint8_t *reception_buffer,
                       uint16_t data_size, void (*user_function)(),
                       rs485_speed_t data_speed = SPEED_10M);

        void configureCustom(uint8_t *transmission_buffer,
                             uint8_t *reception_buffer,
                             uint16_t data_size, void (*user_function)(void),
                             uint32_t baudrate, bool oversampling_8);

        void startTransmission();

        void turnOnCommunication();

        void turnOffCommunication();
};

#endif /* CONFIG_OWNTECH_COMMUNICATION_ENABLE_RS485 */

#endif /* RS485COMMUNICATION_H_ */
```


