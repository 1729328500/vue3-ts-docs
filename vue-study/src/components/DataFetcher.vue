<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

const data = ref<string | null>(null)
const loading = ref(false)

const fetchDate = async () => {
    loading.value = true
    await new Promise((resolve) => setTimeout(resolve, 2000))
    data.value = "加载完成"
    loading.value = false
}

onMounted (() => {
    console.log("组件挂载，开始请求")
    fetchDate()
})

onUnmounted(() => {
    console.log("组件卸载，清数据")

})
</script>

<style scoped>

</style>