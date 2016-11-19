<template>
    <div>
        <ym-header title="私人定制" :back="true" :refresh="true">
        </ym-header>
       <div class="mui-content">
           <ym-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ym-card :items="items" :type="artType"></ym-card>
           </ym-loadmore>
		</div>
    </div>
</template>
<script>
import common from '../utils/common'
import YmCard from '../components/YmCard'
import YmLoadmore from '../components/YmLoadmore'
export default {
    data () {
        return {
            items:[],
            artType:'',
            allLoaded: false,
            bottomStatus: '',
            pageIndex:1
        }
    },
    components:{
        YmCard,
        YmLoadmore
    },
    methods: {
        loadData(pageIndex){
            let self=this;
            let url=common.GetApiAddressByArtType('list');
            common.SendRequest(url,{pageIndex:pageIndex,artType:self.artType},resp=>{
                if(self.pageIndex==1){
                    self.items=resp.Data
                }
                else{
                    resp.Data.forEach(e=>{
                        self.items.push(e);
                    })
                }
                if(resp.Data.length==0){
                    self.allLoaded=true
                }
            })
        },
        handleBottomChange(status) {
            // this.bottomStatus = status;
            
        },
        loadBottom(id) {
            let self=this;
            console.log(self.bottomStatus)
            if(self.allLoaded==false){
                self.pageIndex++    
                self.loadData(this.pageIndex); 
            }
        }
    },
    created(){
        let self=this;
        self.artType=self.$route.params.type
        self.loadData(this.pageIndex);
        // common.SendRequest(url,{pageIndex:1,artType:self.$route.params.type},resp=>{
        //     self.items=resp.Data
        // })
        
    }

}
</script>