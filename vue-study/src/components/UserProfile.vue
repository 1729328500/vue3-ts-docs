<template>
    <div>
        <h3>用户信息</h3>
        <p>{{ user.name }}</p>
        <p>{{ user.age }}</p>
        <p>{{ user.email }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    user: {
        name: string;
        age: number;
        email: string;
    }
}>()

</script>

<style scoped>
.user-profile{
    min-width: 300px;
    border-radius: 5px ;
    padding: 10px;
    border: 1px solid #ccc;
}

</style>