<template>
    <div>
        <Card>
            <template #header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </template>
            <p>中间主题</p>
            <template #footer>
               <p>DDD</p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped>

</style>