<template>  
  <el-container>  
    <!-- 顶部栏目 -->  
    <el-header>  
      <div class="header-container">  
        <img src="D:/学习/新建文件夹/1.jpg" alt="头像" class="avatar" />  
        <el-button text class="header-button">大会员</el-button>  
        <el-button text class="header-button">消息</el-button>  
        <el-button text class="header-button">动态</el-button>  
        <el-button text class="header-button">收藏</el-button>  
        <el-button text class="header-button">历史</el-button>  
        <el-button text class="header-button">创作中心</el-button>  
        <el-button type="primary" class="post-button">投稿</el-button>  
      </div>  
    </el-header>  
  
    <el-aside width="100%" class="sidebar">  
      <el-card>  
        <h3>话题</h3>  
        <div v-for="(topic, index) in topics" :key="index" class="topic-item">  
          {{ topic }}  
        </div>  
      </el-card>  
    </el-aside>  
  
    <el-main>  
      <el-card class="main-card">  
        <h2>动态</h2>  
        <el-input  
          placeholder="有什么想和大家分享的？"  
          v-model="newPost"  
          @keyup.enter="addPost"  
        ></el-input>  
        <el-input  
          placeholder="请输入图片地址"  
          v-model="imageUrl"  
          @keyup.enter="addPost"  
          style="margin-top: 10px;"  
        ></el-input>  
        <el-button type="primary" @click="addPost">发布</el-button>  
  
        <!-- 图片预览 -->  
        <div v-if="imageUrl" class="image-preview">  
          <img :src="imageUrl" alt="预览" class="preview-image" />  
        </div>  
      </el-card>  
  
      <el-card v-for="(post, index) in posts" :key="index" class="post-card">  
        <div class="post-header">  
          <img src="D:/学习/新建文件夹/1.jpg" alt="头像" class="post-avatar" />  
          <h3>{{ post.user }}</h3>  
        </div>  
        <p>{{ post.content }}</p>  
        <img v-if="post.image" :src="post.image" alt="动态图片" class="post-image" />  
        <el-button type="text" @click="likePost(index)">赞 {{ post.likes }}</el-button>  
      </el-card>  
    </el-main>  
  </el-container>  
</template>  
  
<script setup lang="ts">  
import { ref } from 'vue';  
import { ElContainer, ElAside, ElMain, ElCard, ElInput, ElButton, ElHeader, ElAvatar } from 'element-plus'; // 确保引入正确的组件  
  
const newPost = ref('');  
const imageUrl = ref('');  // 用于存储输入的图片地址  
const posts = ref([  
  { user: '电脑玩家D', content: '快乐学习', likes: 0, image: null },  
  { user: 'Victor555666', content: '今天的天气真不错！', likes: 1, image: null },  
]);  
  
const topics = ref(['英首相将人质说成香肠', '我军向太平洋发射洲际弹', '人质币对美元涨7']);  
const userAvatar = 'D:/学习/新建文件夹/1.jpg'; // 用户头像地址  
  
const addPost = () => {  
  if (newPost.value.trim() || imageUrl.value.trim()) {  
    // 为每个帖子增加内容和图片地址  
    posts.value.push({ user: '电脑玩家D', content: newPost.value, likes: 0, image: imageUrl.value || null });  
    newPost.value = '';  
    imageUrl.value = '';  // 发布后清空图片地址  
  }  
};  
  
const likePost = (index: number) => {  
  posts.value[index].likes++;  
};  
</script>  
  
<style scoped>  
.header-container {  
  display: flex;  
  align-items: center;  
  padding: 10px;  
  background-color: #f5f5f5; /* 顶部栏背景颜色 */  
  justify-content: flex-end; /* 右对齐 */  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */  
}  
  
.avatar {  
  width: 40px;  
  height: 40px;  
  border-radius: 50%;  
  margin-right: 10px;  
  border: 2px solid #80deea; /* 边框效果 */  
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); /* 为头像添加阴影效果 */  
}  
  
.header-button {  
  margin: 0 10px; /* 按钮间距 */  
  color: #00796b; /* 辅助色：深绿色文本 */  
  transition: color 0.3s; /* 颜色渐变效果 */  
}  

.header-button:hover {  
  color: #004d40; /* 悬停时更改颜色 */  
}  
  
.post-button {  
  margin-left: 20px; /* 投稿按钮的边距 */  
}  
  
.post-card {  
  margin: 20px 0;  
  background-color: #ffffff; /* 帖子卡片背景颜色 */  
  border-radius: 8px;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */  
}  
  
.main-card {  
  margin-bottom: 20px;  
  background-color: #f9f9f9; /* 动态卡片背景颜色 */  
}  
  
.image-preview {  
  margin-top: 10px;  
}  
  
.preview-image {  
  max-width: 100%;  
  max-height: 200px;  
}  
  
.post-image {  
  max-width: 100%;  
  margin-top: 10px;  
}  
  
.topic-item {  
  margin: 5px 0;  
  padding: 10px;  
  background-color: #e0f7fa; /* 辅助色：浅蓝色背景 */  
  border-radius: 4px;  
  border: 1px solid #80deea; /* 边框颜色 */  
  color: #00796b; /* 辅助色：深绿色文本 */  
}  
  
.post-header {  
  display: flex;  
  align-items: center;  
  margin-bottom: 10px;  
}  
  
.post-avatar {  
  width: 30px; /* 头像宽度 */  
  height: 30px; /* 头像高度 */  
  border-radius: 50%; /* 圆角 */  
  margin-right: 10px; /* 间距 */  
}  
</style>