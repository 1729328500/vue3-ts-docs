<template>  
    <div>  
        <ul>  
            <li v-for="skill in skills" :key="skill.id">  
                {{ skill.id }} - {{ skill.name }}- <!-- 显示技能的 ID 和名称 -->  
                <span id="green" v-if="skill.locked">已解锁</span>  
                <span id="red" v-else>未解锁</span>  
            </li>  
        </ul>  
    </div>  
</template>  

<script setup lang="ts">  
import { ref } from 'vue'  

interface Skill {  
    id: number  
    name: string  
    locked: boolean  
}  

const skills = ref<Skill[]>([  
    { id: 1, name: "七十二变", locked: true },  
    { id: 2, name: "火眼金睛", locked: false },  
    { id: 3, name: "筋斗云", locked: true }  
])  
</script>



<style>

    /* Base styles for the list */
    div {
        padding: 20px; /* Adding padding around the list */
        background-color: #f9f9f9; /* Light background color */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    ul {
        list-style-type: none; /* Remove default list styling */
        padding: 0; /* Remove default padding */
    }

    li {
        padding: 10px 15px; /* Padding for each list item */
        margin: 8px 0; /* Space between items */
        border-radius: 5px; /* Rounded corners for list items */
        display: flex; /* Flexbox for layout */
        justify-content: space-between; /* Space between text and status */
        transition: background-color 0.3s; /* Smooth background transition */
    }

    li:hover {
        background-color: #e0f7fa; /* Light blue on hover */
    }

    #green {
        color: #4caf50; /* Green color for unlocked status */
        font-weight: bold; /* Bold text */
    }

    #red {
        color: #f44336; /* Red color for locked status */
        font-weight: bold; /* Bold text */
    }

</style>
