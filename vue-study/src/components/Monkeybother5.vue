<template>  
    <div class="container">  
        <div class="input-group">  
            <label for="attack">基础攻击力:</label>  
            <input id="attack" v-model="Attack" type="number" class="input-field">  
        </div>  
        <div class="input-group">  
            <label for="equip">装备加成:</label>  
            <input id="equip" v-model="Equip" type="number" class="input-field">  
        </div>  
        <p class="total-attack">总攻击力: {{ allAttack }} </p>  
    </div>  
</template>  

<script setup lang="ts">  
import { computed, ref } from 'vue'  

const Attack = ref<number>(100)  
const Equip = ref<number>(20)  

const allAttack = computed(() => {  
    return Attack.value + Equip.value  
})  
</script>  

<style scoped>  
.container {  
    max-width: 400px;  
    margin: 0 auto;  
    padding: 20px;  
    border: 1px solid #ccc;  
    border-radius: 8px;  
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
    background-color: #f9f9f9;  
}  

.input-group {  
    margin-bottom: 15px;  
}  

.label {  
    display: block;  
    margin-bottom: 5px;  
    font-weight: bold;  
}  

.input-field {  
    width: 100%;  
    padding: 10px;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
    font-size: 16px;  
}  

.input-field:focus {  
    border-color: #007bff;  
    outline: none;  
}  

.total-attack {  
    font-size: 18px;  
    font-weight: bold;  
    color: #333;  
}  
</style>