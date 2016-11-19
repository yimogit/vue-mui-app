<template>
    <div>
        <ym-header title="私人定制" :back="true" :refresh="true">
        </ym-header>
       <div class="mui-content" v-if="openUrl!=''">
            <iframe :src="openUrl" style="width:100%;height:100%;"></iframe>
		</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                openUrl:''
            }
        },
        created(){
            
			mui.openWindow(this.$route.params.openUrl);
            // this.openUrl=this.$route.params.openUrl
        }
    }
</script>