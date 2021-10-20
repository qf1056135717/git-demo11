<template>
  <div class="">
    <h5>count组件</h5>
    <p>count 的值是{{ count }}</p>
    <button @click="count +=1">+1</button>
  </div>
</template>

<script>
export default {
    //props是自定义属性，允许使用者通过自定义属性为组件指定初始值
    //自定义属性的名字，是封装者自定义的
    //props是只读的不能直接修改其中的值
    // props:['init'],
    props:{
        //自定义属性A：{配置选项}
        init:{
            //如外界使用count时，没有给init传值，则默认值生效
            default:0,
            //init中的值必须是数字类型
            type:Number,
            //必填项
            required:true
        }
    },
    data(){
        return{
            count:this.init 
        }
    }
}
</script>

<style lang="less">

</style>
