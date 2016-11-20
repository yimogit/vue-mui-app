<template>
        <div v-if="show==true" class="mui-icon mui-spinner" :class="{'ymloading':public==true}" ></div>
</template>
<script>
    export default {
        props:['show','public']
    }
</script>
<style>
    .ymloading{
        width:30px;
        height:30px;
        position: absolute;
        top: 50%;
        left:50%;
        margin-left:-15px;
        margin-top:-15px;
    }
</style>