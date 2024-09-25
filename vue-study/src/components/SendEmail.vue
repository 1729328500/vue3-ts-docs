<template>
    <div>
        <EmailForm @email-form="handleSubmit" />
        <p v-if="submitData">提交的表单数据:{{ submitData }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailForm from './EmailForm.vue';


const submitData = ref(null);

const handleSubmit = (data: any)=>{
    submitData.value = data;
}
</script>

<style scoped>  
div {  
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
}  

p {  
    margin-top: 20px; 
    font-size: 18px;   
    color: #333;  
    border-top: 1px solid #ccc; 
    padding-top: 10px; 
}  
</style>