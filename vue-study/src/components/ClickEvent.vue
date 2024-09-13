<template>  
    <div class="container">  
        <h2 class="title">当前形态: {{ userName ? '大圣' : '悟空' }}</h2>  
        <button class="toggle-button" @click="changeName">切换状态</button>  
        <!-- <img src="@/assets/images/th.jpg" alt="My Image" class="image"/>   -->
    </div>  
</template>  

<script setup lang="ts">  
import { ref } from 'vue';  

const userName = ref<boolean>(true);  
const changeName = () => {  
    userName.value = !userName.value;  
};  
</script>  

<style scoped>  
.container {  
    display: flex;  
    flex-direction: column;  
    align-items: center;  
    justify-content: center;  
    height: 100vh; 
    background-color: #f0f0f0; 
}  

.toggle-button {  
    padding: 10px 20px;
    font-size: 16px; 
    color: #fff; 
    background-color: #007bff; 
    border: none; /* 去掉边框 */  
    border-radius: 5px; /* 圆角 */  
    cursor: pointer; /* 鼠标指针样式 */  
    transition: background-color 0.3s; /* 背景颜色过渡效果 */  
}  

.toggle-button:hover {  
    background-color: #0056b3; /* 悬停时的背景颜色 */  
}  

.image {  
    margin-top: 20px; /* 图片上边距 */  
    width: 200px; /* 设置图片宽度 */  
    height: auto; /* 自动调整高度以保持比例 */  
}  
</style>