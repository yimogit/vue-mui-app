<template>
    <div>
        <ym-header title="私人定制" :back="true" :refresh="true">		
            <a slot="right" class="mui-icon mui-icon-refresh mui-pull-right" @click="refresh"></a>
        </ym-header>
       <div class="mui-content">
           <ym-card :items="items" :type="artType"></ym-card>
           <div class="mui-content-padded">
				<ul class="mui-pager">
					<li>
                        <div class="mui-icon mui-spinner" v-show="showLoading==true"></div>
                        <button type="button" v-show="showLoading==false" @click="loadNext" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">{{loadMoreText}}</button>						
					</li>
				</ul>
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
            items:[],
            artType:'',
            allLoaded: false,
            loadMoreText: '加载更多',
            showLoading:false,
            pageIndex:1
        }
    },
    components:{
        YmCard
    },
    methods: {
        loadData(pageIndex){
            let self=this;
            self.showLoading=true;
            self.allLoaded=false
            let url=common.GetApiAddressByArtType('list');
            common.SendRequest(url,{pageIndex:pageIndex,artType:self.artType},resp=>{
                self.showLoading=false;
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
        loadNext() {
            let self=this;
            if(self.allLoaded==false){
                self.loadMoreText='已加载'+self.items.length+'条数据'
                self.pageIndex++    
                self.loadData(this.pageIndex); 
            }
            else{
                self.loadMoreText="翻了个朝天,共"+self.items.length+'条数据'
            }
        },
        refresh(){
            this.pageIndex=1;
            this.items=[]
            this.loadData(this.pageIndex);
        }
    },
    computed:{
        loadMoreText(){
            let self=this;
            return self.allLoaded==true?`翻了个朝天,共${self.items.length}条数据`:`加载更多`
        }
    },
    created(){
        let self=this;
        self.artType=self.$route.params.type
        self.loadData(this.pageIndex);        
    }

}
</script>