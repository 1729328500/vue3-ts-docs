<template>  
    <div class="container">  
        <h2>装备管理</h2>  
        <div>  
            <input v-model="newEquipment" type="text" placeholder="输入装备名称">  
            <button @click="addEquipment">添加装备</button>  
        </div>  
        <ul>  
            <li v-for="(equipment, index) in equipmentList" :key="index">  
                {{ equipment }}  
                <button @click="removeEquipment(index)">删除</button>  
            </li>  
        </ul>  
    </div>  
</template>  

<script setup lang="ts">  
import { ref } from 'vue';  

const newEquipment = ref<string>('');  
const equipmentList = ref<string[]>([]);  

const addEquipment = () => {  
    if (newEquipment.value.trim() !== '') {  
        equipmentList.value.push(newEquipment.value);  
        newEquipment.value = '';  
    }  
};  

const removeEquipment = (index: number) => {  
    equipmentList.value.splice(index, 1);  
};  
</script>  

<style scoped>  
.container {  
    max-width: 600px;  
    margin: 0 auto;  
    padding: 20px;  
    border: 1px solid #ddd;  
    border-radius: 8px;  
    background-color: #f9f9f9;  
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
}  

h2 {  
    text-align: center;  
    color: #333;  
}  

input[type="text"] {  
    width: calc(100% - 120px);  
    padding: 10px;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
    margin-right: 10px;  
}  

button {  
    padding: 10px 15px;  
    background-color: #4caf50;  
    color: white;  
    border: none;  
    border-radius: 4px;  
    cursor: pointer;  
}  

button:hover {  
    background-color: #388e3c;  
}  

ul {  
    list-style-type: none;  
    padding: 0;  
    margin-top: 20px;  
}  

li {  
    background-color: #e0f7fa;  
    border: 1px solid #b2ebf2;  
    border-radius: 4px;  
    padding: 10px;  
    margin: 5px 0;  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
}  
</style>