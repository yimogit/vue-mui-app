<template>
    <nav class="mui-bar mui-bar-tab">
        <a @click="$router.push('/home')" class="mui-tab-item">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">导航</span>
        </a>
        <a @click="$router.push('/setting')" class="mui-tab-item"  >
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
        </a>
    </nav>
</template>