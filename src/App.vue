<template>
    <div id="ymapp">
        <ym-loading :show="ShowLoading" :public="true"></ym-loading>
        <router-view></router-view>  
    </div>
</template>
<script>
export default {
    data (){
      return {
        ShowLoading:false
      }
    },
    methods:{
    },
    created(){
      console.log('app初始化')
    }
}
</script>