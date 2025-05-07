

# File Rs485.cpp

[**File List**](files.md) **>** [**core**](dir_771164b9325b04f1442f7a3ffa8ecb89.md) **>** [**zephyr**](dir_09002e7ce91f09aeb040dfd1861a47f4.md) **>** [**modules**](dir_6d0fb8ab814c517e7f155fb837e32f72.md) **>** [**owntech\_communication**](dir_c4fe9b0224a9586dd317852c3c5604f8.md) **>** [**zephyr**](dir_ed8beaa694e779377b0049b01e5ade22.md) **>** [**src**](dir_1a412f239039e530bef8001f48cd80a4.md) **>** [**Rs485.cpp**](Rs485_8cpp.md)

[Go to the documentation of this file](Rs485_8cpp.md)


```C++
/*
 * Copyright (c) 2023-present LAAS-CNRS
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
 * @date   2023
 *
 * @author Ayoub Farah Hassan <ayoub.farah-hassan@laas.fr>
 */

/* LL drivers */
#include <stm32_ll_dma.h>
#include <stm32_ll_gpio.h>
#include <stm32_ll_bus.h>

/* Zephyr drivers */
#include <zephyr/drivers/uart.h>
#include <zephyr/drivers/dma.h>

/* Header */
#include "Rs485.h"

#define DMA_USART DMA1 /* DMA used */

#define STM32_DMA_HAL_OVERRIDE 0x7F


/* Transmission DMA channel for zephyr driver */
#define ZEPHYR_DMA_CHANNEL_TX 6
/* Reception DMA channel for zephyr driver */
#define ZEPHYR_DMA_CHANNEL_RX 7


/* Transmission DMA channel for LL driver */
#define LL_DMA_CHANNEL_TX LL_DMA_CHANNEL_6
/* Reception DMA channel for LL driver */
#define LL_DMA_CHANNEL_RX LL_DMA_CHANNEL_7

/* DT definitions */
static const struct device *dma1 = DEVICE_DT_GET(DT_NODELABEL(dma1));
static const struct device *uart_dev = DEVICE_DT_GET(DT_NODELABEL(usart3));

/* USART initialization parameters */

/* Initial baudrate to  10.625Mhz */
static uint32_t baud = 21250000 / (2);
struct uart_config uart_cfg;
struct uart_event evt;

/* DMA buffer for transmission and reception */
static uint8_t* tx_usart_val;
static uint8_t* rx_usart_val;

static uint16_t dma_buffer_size;

/* User function to call in RX callback */
static dma_callbackRXfunc_t user_fnc = NULL;

/* Private functions */

static void _dma_callback_tx(const struct device *dev,
                             void *user_data,
                             uint32_t channel,
                             int status)
{
    /* Disable DMA channel after sending datas */
    LL_DMA_DisableChannel(DMA_USART, LL_DMA_CHANNEL_TX);

    LL_USART_ClearFlag_TXFE(USART3);
    /* Clear transmission complete flag USART */
    LL_USART_ClearFlag_TC(USART3);
    /* Clear transmission complete dma channel TX */
    LL_DMA_ClearFlag_TC6(DMA_USART);
}

static void _dma_callback_rx()
{
    /* Clear transmission complete flag */
    LL_DMA_ClearFlag_TC7(DMA_USART);

    if(user_fnc != NULL){
        user_fnc();
    }
}

/* Public functions */


void init_usrBuffer(uint8_t* tx_buffer, uint8_t* rx_buffer)
{
    tx_usart_val = tx_buffer;
    rx_usart_val = rx_buffer;
}

void init_usrFunc(dma_callbackRXfunc_t fnc_callback)
{
    user_fnc = fnc_callback;
}

void init_usrBaudrate(uint32_t usr_baud)
{
    baud = usr_baud;
}

void init_usrDataSize(uint16_t size)
{
    dma_buffer_size = size;
}

void serial_init(void)
{
    uart_config_get(uart_dev, &uart_cfg);
    uart_cfg.baudrate = baud;
    uart_cfg.flow_ctrl = UART_CFG_FLOW_CTRL_NONE;
    uart_cfg.data_bits = UART_CFG_DATA_BITS_8;
    uart_cfg.parity = UART_CFG_PARITY_NONE;
    uart_cfg.stop_bits = UART_CFG_STOP_BITS_1;

    uart_configure(uart_dev, &uart_cfg);

    LL_USART_ConfigAsyncMode(USART3);

    /* Enable DMA request*/
    LL_USART_EnableDMAReq_TX(USART3);
    LL_USART_EnableDMAReq_RX(USART3);

    /* Disable Interrupts for TX (not used for DMA) */

    /* Disable Transmission Complete Interrupt */
    LL_USART_DisableIT_TC(USART3);

    /* Disable Transmission Data Register Empty Interrupt
     * for DMA to provide data.
     * Disable interrupts for RX (not used with DMA) */
    LL_USART_DisableIT_TXE_TXFNF(USART3);
    /* Disable Receiver Data Register
     * Not Empty Interrupt for DMA to fetch data */
    LL_USART_DisableIT_RXNE_RXFNE(USART3);

    LL_USART_Enable(USART3);
}

void init_DEmode(void)
{
    LL_USART_Disable(USART3);

    /* GPIO initialization and GPIO clock set-up */
    LL_GPIO_InitTypeDef GPIO_InitStruct = {0};
    LL_AHB2_GRP1_EnableClock(LL_AHB2_GRP1_PERIPH_GPIOB);
    /* Set GPIO_InitStruct */
    GPIO_InitStruct.Pin = LL_GPIO_PIN_14;
    GPIO_InitStruct.Mode = LL_GPIO_MODE_ALTERNATE;
    GPIO_InitStruct.Speed = LL_GPIO_SPEED_FREQ_LOW;
    GPIO_InitStruct.OutputType = LL_GPIO_OUTPUT_PUSHPULL;
    GPIO_InitStruct.Pull = LL_GPIO_PULL_NO;
    GPIO_InitStruct.Alternate = LL_GPIO_AF_7;
    LL_GPIO_Init(GPIOB, &GPIO_InitStruct);

    /* Enable DE mode */
    LL_USART_EnableDEMode(USART3);
    /* Polarity is high ie. PB14 will be at high level when sending datas */
    LL_USART_SetDESignalPolarity(USART3, LL_USART_DE_POLARITY_HIGH);

    /* Assertion time is set to maximum */
    LL_USART_SetDEAssertionTime(USART3, 31);
    LL_USART_SetDEDeassertionTime(USART3, 31);

    LL_USART_Enable(USART3);
}


void oversamp_set(usart_oversampling_t oversampling)
{
    LL_USART_Disable(USART3);
    LL_USART_SetOverSampling(USART3, oversampling);
    LL_USART_Enable(USART3);
}

void dma_channel_init_tx()
{
    /* Configure DMA */
    struct dma_config dma_config_s = {0};
    LL_DMA_InitTypeDef DMA_InitStruct = {0};

    /* Callback function set-up */
    dma_config_s.dma_callback = _dma_callback_tx;
    /* HAL override */
    dma_config_s.linked_channel = STM32_DMA_HAL_OVERRIDE;

    /* DMA configuration with LL drivers */
    DMA_InitStruct.Direction = LL_DMA_DIRECTION_MEMORY_TO_PERIPH;
    DMA_InitStruct.PeriphOrM2MSrcAddress = (uint32_t)(&(USART3->TDR));
    DMA_InitStruct.MemoryOrM2MDstAddress = (uint32_t)(tx_usart_val);
    DMA_InitStruct.Mode = LL_DMA_MODE_NORMAL;
    DMA_InitStruct.MemoryOrM2MDstDataSize = LL_DMA_MDATAALIGN_BYTE;
    DMA_InitStruct.PeriphOrM2MSrcDataSize = LL_DMA_PDATAALIGN_BYTE;
    DMA_InitStruct.PeriphOrM2MSrcIncMode = LL_DMA_PERIPH_NOINCREMENT;
    DMA_InitStruct.MemoryOrM2MDstIncMode = LL_DMA_MEMORY_INCREMENT;
    DMA_InitStruct.PeriphRequest = LL_DMAMUX_REQ_USART3_TX;
    DMA_InitStruct.NbData = dma_buffer_size;

    /* Indicates callback function to zephyr driver */
    dma_config(dma1, ZEPHYR_DMA_CHANNEL_TX, &dma_config_s);
    /* Disabling channel for initial set-up */
    LL_DMA_DisableChannel(DMA_USART, LL_DMA_CHANNEL_TX);

    /* Initialize DMA */

    /* DMA data size */
    LL_DMA_SetDataLength(DMA_USART, LL_DMA_CHANNEL_TX, dma_buffer_size);
    /* DMA channel priority */
    LL_DMA_SetChannelPriorityLevel(DMA_USART,
                                   LL_DMA_CHANNEL_TX,
                                   LL_DMA_PRIORITY_VERYHIGH);

    LL_DMA_Init(DMA_USART, LL_DMA_CHANNEL_TX, &DMA_InitStruct);

    /* Clearing flags */
    LL_DMA_ClearFlag_TC6(DMA_USART);
    LL_DMA_ClearFlag_HT6(DMA_USART);

    /* Enable transfer complete interruption */
    LL_DMA_EnableIT_TC(DMA_USART, LL_DMA_CHANNEL_TX);
    /* Disable half-transfer interruption */
    LL_DMA_DisableIT_HT(DMA_USART, LL_DMA_CHANNEL_TX);
}


void dma_channel_init_rx()
{
    /* Configure DMA */
    LL_DMA_InitTypeDef DMA_InitStruct = {0};

    /* Initialization of DMA */
    DMA_InitStruct.Direction = LL_DMA_DIRECTION_PERIPH_TO_MEMORY;
    DMA_InitStruct.PeriphOrM2MSrcAddress = (uint32_t)(&(USART3->RDR));
    DMA_InitStruct.MemoryOrM2MDstAddress = (uint32_t)(rx_usart_val);
    DMA_InitStruct.Mode = LL_DMA_MODE_CIRCULAR;
    DMA_InitStruct.MemoryOrM2MDstDataSize = LL_DMA_MDATAALIGN_BYTE;
    DMA_InitStruct.PeriphOrM2MSrcDataSize = LL_DMA_PDATAALIGN_BYTE;
    DMA_InitStruct.PeriphOrM2MSrcIncMode = LL_DMA_PERIPH_NOINCREMENT;
    DMA_InitStruct.MemoryOrM2MDstIncMode = LL_DMA_MEMORY_INCREMENT;
    DMA_InitStruct.PeriphRequest = LL_DMAMUX_REQ_USART3_RX;
    DMA_InitStruct.NbData = dma_buffer_size;

    IRQ_DIRECT_CONNECT(17, 0, _dma_callback_rx, IRQ_ZERO_LATENCY);
    irq_enable(17);

    /* Disabling channel for initial set-up */
    LL_DMA_DisableChannel(DMA_USART, LL_DMA_CHANNEL_RX);

    /* Initialize DMA */

    /* DMA data size */
    LL_DMA_SetDataLength(DMA_USART, LL_DMA_CHANNEL_RX, dma_buffer_size);
    /* DMA channel priority */
    LL_DMA_SetChannelPriorityLevel(DMA_USART,
                                   LL_DMA_CHANNEL_RX,
                                   LL_DMA_PRIORITY_VERYHIGH);

    LL_DMA_Init(DMA_USART, LL_DMA_CHANNEL_RX, &DMA_InitStruct);

    /* Clearing flag */
    LL_DMA_ClearFlag_TC7(DMA_USART);
    LL_DMA_ClearFlag_HT7(DMA_USART);

    /* Enabling channel */
    LL_DMA_EnableChannel(DMA_USART, LL_DMA_CHANNEL_RX);
    /* Enable transfer complete interruption */
    LL_DMA_EnableIT_TC(DMA_USART, LL_DMA_CHANNEL_RX);
    /* Disable half-transfer interruption */
    LL_DMA_DisableIT_HT(DMA_USART, LL_DMA_CHANNEL_RX);
}


void serial_tx_on()
{
    /* Making sure the flag is cleared before transmission */
    LL_DMA_ClearFlag_TC6(DMA_USART);
    /* Disable channel to reload TX buffer */
    LL_DMA_DisableChannel(DMA_USART, LL_DMA_CHANNEL_TX);
    /* Reloading TX buffer */
    LL_DMA_SetMemoryAddress(DMA_USART,
                            LL_DMA_CHANNEL_TX,
                            (uint32_t)(tx_usart_val));

    LL_DMA_SetDataLength(DMA_USART, LL_DMA_CHANNEL_TX, dma_buffer_size);
    /* Re-enable the channel */
    LL_DMA_EnableChannel(DMA_USART, LL_DMA_CHANNEL_TX);
}

void serial_stop()
{
    LL_USART_Disable(USART3);
}

void serial_start()
{
    LL_USART_Enable(USART3);
}
```


