<template>
    <div class="mui-control-content mui-active">					
        <div class="mui-card" v-for="item in items">
            <router-link class="mui-card-header" :to="{path:'/detail/'+type+'/'+item.Id}" tag="div">{{item.Title}}</router-link>
            <!--<div class="mui-card-header"></div>-->
            <div class="mui-card-content" v-if="item.Desc">
                <div class="mui-card-content-inner" v-html="item.Desc"></div>
            </div>
        </div>
    </div>
</template>
<script>
    /*卡片视图*/
    export default {
        props:['items','type']
    }
</script>