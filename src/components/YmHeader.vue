<template>
		<header class="mui-bar mui-bar-nav">
			<slot>
				<slot name="left">
					<a class="mui-icon mui-icon-left-nav mui-pull-left" v-if="back==true" @click="$router.go(-1)"></a>
				</slot>
				<h1 class="mui-title">{{title}}</h1>			
				<slot name="right">
					<a class="mui-icon mui-icon-refresh mui-pull-right" v-if="refresh==true" href="javascript:location.reload();"></a>
				</slot>
			</slot>
		</header>
</template>
<script>
    export default{
        props:['title','back','refresh']
    }
</script>