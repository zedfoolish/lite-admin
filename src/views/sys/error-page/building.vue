<template>
  <el-result title="当前页面正在施工中...">
    <template #icon>
      <svg fill="#1296db" viewBox="0 0 1024 1024"
           xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <path
          fill="#1296db"
          d="M904 176H120c-30.9 0-56 25.1-56 56v588c0 15.5 12.5 28 28 28s28-12.5 28-28v-84h784v84c0 15.5 12.5 28 28 28s28-12.5 28-28V232c0-30.9-25.1-56-56-56z m-210 56v112H540V232h154z m-210 0v112H330V232h154z m-364 0h154v112H120V232z m784 448H120V400h784v280zM750 344V232h154v112H750z"
        ></path>
        <path
          d="M264.7 471.5l112 168c5.4 8.1 14.3 12.5 23.3 12.5 5.4 0 10.8-1.5 15.5-4.7 12.9-8.6 16.4-26 7.8-38.8l-112-168c-8.6-12.9-26.1-16.3-38.8-7.8-12.9 8.6-16.4 26-7.8 38.8zM544.7 639.5c5.4 8.1 14.3 12.5 23.3 12.5 5.4 0 10.8-1.5 15.5-4.7 12.9-8.6 16.4-26 7.8-38.8l-112-168c-8.6-12.9-26.1-16.3-38.8-7.8-12.9 8.6-16.4 26-7.8 38.8l112 168zM712.7 639.5c5.4 8.1 14.3 12.5 23.3 12.5 5.4 0 10.8-1.5 15.5-4.7 12.9-8.6 16.4-26 7.8-38.8l-112-168c-8.7-12.9-26.1-16.3-38.8-7.8-12.9 8.6-16.4 26-7.8 38.8l112 168z"></path>
      </svg>
    </template>
    <template #extra>
      <el-button type="primary" size="small" @click.prevent="$router.push('/')">
        返回首页
      </el-button>
    </template>
  </el-result>
</template>

<script>
export default {name: 'building'}
</script>
