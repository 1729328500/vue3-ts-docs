<template>
    <div>
        <P> 当前计数器值:{{ count }}</P>
        <button @click="increament">增加</button>
        <button @click="decreament">减少</button>
    </div>

</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter.ts';

const { count,increament,decreament} = useCounter(10)

</script>

<style scoped>

</style>