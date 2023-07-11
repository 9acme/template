<template>
  <div class="content">首页{{ title }}</div>
</template>

<script>
export default {
  name: `IndexPage`,
};
</script>
<script setup>
const title = `是是是`
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    margin: 200rpx auto 50rpx;
    width: 200rpx;
    height: 200rpx;
  }
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8F8F94;
}
</style>
