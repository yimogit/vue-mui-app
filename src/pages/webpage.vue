<template>
    <div>
        <ym-header title="私人定制" :back="true" :refresh="true" id="header">
        </ym-header>
       <div class="mui-content" v-if="openUrl!=''">
            <iframe :src="openUrl" :style="style"></iframe>
		</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                openUrl:'',
                style:''
            }
        },
        created(){
            let self=this;
            self.$nextTick(()=>{
                var height = document.documentElement.clientHeight - document.getElementById('header').offsetHeight;
                self.style='width:100%;border:0px;height:'+height+'px';
                self.openUrl=this.$route.params.openUrl
            })
        }
    }
</script>