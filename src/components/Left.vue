<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <MyCount :init = '9'></MyCount>

    
  </div>
</template>

<script>
export default {}
</script>


 <style lang="less" scoped>
 //针对content组件内部的样式
 h3 {
  color: red;
  }
</style>
<style lang="less" >
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
} 
</style>
