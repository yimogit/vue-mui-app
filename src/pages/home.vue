<template>
    <div>
        <ym-header id="header">
            <a class="mui-icon mui-icon-gear mui-pull-left" @click="$router.push('setting')"></a>
			<h1 class="mui-title">私人定制</h1>			
			<a class="mui-icon mui-icon-refresh mui-pull-right" @click="clearCache">
                
            </a>
        </ym-header>
       <div class="mui-content hasnav" :style="winStyle">
           <ym-lattice :items="items" :style="winStyle"></ym-lattice>
		</div>
    </div>
</template>
<script>
import config from '../config'
import common from '../utils/common'
import cacheHelper from '../utils/cacheHelper'
import YmLattice from '../components/YmLattice'
export default {
    data () {
        return {
            items:[],
            menusCacheKey:'menusCacheKey',
            winStyle:''
        }
    },
    components:{
        YmLattice
    },
    methods:{
        clearCache(){        
            let self=this;
            if(cacheHelper.GetCacheByKey(config.showDefaultMenuKey)==false){
                self.items=cacheHelper.GetCacheByKey(config.customMenusCacheKey)
                return;
            }    
            cacheHelper.RemoveCahceByKey(config.menusCacheKey);
            this.getMenus();
        },
        getMenus(){   
            let self=this;      
            self.$parent.ShowLoading=true   
            let url=common.GetApiAddressByArtType('index');
            var setUrl=cacheHelper.GetCacheByKey('appApiUrl');
            if(setUrl){
                url=setUrl
            }
            common.SendRequest(url,{},resp=>{
                // self.items=eval(resp.Data.Menus)
                cacheHelper.SetCacheByKey(config.menusCacheKey,resp.Data.Menus)
                setTimeout(()=>{
                    self.items=common.GetMenuItems();
                    self.changeMenuUrl();
                    self.$parent.ShowLoading=false
                },10)                
            })
        },
        changeMenuUrl(){
            let self=this;            
            self.items.forEach(e=>{
                if(e.MenuUrl.indexOf('http')==0)
                {
                    e.MenuUrl='#/webpage/'+encodeURIComponent(e.MenuUrl)
                }
                if(e.MenuUrl.indexOf('/')==0)
                {
                    e.MenuUrl='#'+e.MenuUrl
                }
            })
        }
    },
    computed:{
        
    },
    created(){
        let self=this;
        if(cacheHelper.GetCacheByKey(config.showDefaultMenuKey)==false){
            self.items=cacheHelper.GetCacheByKey(config.customMenusCacheKey)
            return;
        }
        if(cacheHelper.GetCacheByKey(config.menusCacheKey)!=null){
            self.$nextTick(function(){
                self.items=common.GetMenuItems();
                self.changeMenuUrl();
            })
        }
        else{
            self.getMenus();
        }
    },
    mounted () {
        let self=this;
        self.$nextTick(()=>{
            var height = document.documentElement.clientHeight - document.getElementById('header').offsetHeight;
            self.winStyle='width:100%;height:'+height+'px';
        })
    }

}
</script>