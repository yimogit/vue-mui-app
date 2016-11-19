<template>
    <div>
        <ym-header :title="artTitle" :back="true" :refresh="true">
        </ym-header>
		<div class="mui-content">
			<div class="mui-content-padded" id="artDetail" v-html="ArtContent"> 
			</div>
		</div>
    </div>
</template>
<script>
import common from '../utils/common'
import YmCard from '../components/YmCard'
export default {
    data () {
        return {
            artTitle:'',
            ArtContent:''
        }
    },
    components:{
        YmCard
    },
    created(){
        let self=this;
        let url=common.GetApiAddressByArtType('detail');
        common.SendRequest(url,{artType:self.$route.params.type,id:self.$route.params.id},resp=>{
            self.ArtContent=resp.Data.Content
            self.artTitle=resp.Data.Title
        })
    }

}
</script>