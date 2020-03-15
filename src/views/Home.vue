<template>
  <div>
    <h3>这是Home组件 router路由</h3>
    <div>
      <div class="box">
        处理字体图标文件
        <span class="loader-icon">&#xe604;</span>
      </div>
      <div id="box" ref="box" class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let element = document.getElementById('box')
    console.log(element)
    console.log(this.$refs['box'])
  }
}
</script>

<style></style>
