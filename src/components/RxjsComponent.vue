<script setup>
import { Subject, fromEvent } from 'rxjs'
import { ref } from 'vue'

let count = 0

// 建立可被觀察的串流
const data$ = new Subject()
const counter$ = new Subject()

/**
 * 觀察串流，但此時還沒有資料
 * @param value callback function
 * @returns
 */
// data$.subscribe((value) => {
//     console.log(value)
// })

/**
 * 代表新資料發生
 * 訂閱 Obervable 的物件，有三個方法：next, error, complete
 */
// data$.next(1)

// clickEvt 本身關注的是 click 事件
const clickEvt = () => {
    // 讓 data$ 資料串流發生新的事件
    count++
    counter$.next(count)
}

// counter$ 本身關注的是點擊的次數
// 將 counter$ 當成事件發佈的管道
counter$.subscribe((value) => {
    console.log(value)
})
</script>

<template>
    <span>RXJS</span>
    <button @click="clickEvt">click</button>
</template>

<style scoped></style>
