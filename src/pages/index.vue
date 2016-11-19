<template>
    <div>
        <ym-header>
			<h1 class="mui-title">私人定制</h1>			
			<a class="mui-icon mui-icon-refresh mui-pull-right" @click="clearCache">
                
            </a>
        </ym-header>
       <div class="mui-content ">
           <ym-lattice :items="items"></ym-lattice>
		</div>
    </div>
</template>
<script>
import common from '../utils/common'
import YmLattice from '../components/YmLattice'
export default {
    data () {
        return {
            items:[],
            menusCacheKey:'menusCacheKey'
        }
    },
    components:{
        YmLattice
    },
    methods:{
        clearCache(){            
            localStorage.removeItem(this.menusCacheKey);
            this.getMenus();
        },
        saveMenus(menus){
            localStorage.setItem(this.menusCacheKey,menus)
        },
        getMenusCache(){
            return localStorage.getItem(this.menusCacheKey);
        },
        getMenus(){   
            let self=this;         
            let url=common.GetApiAddressByArtType('index');
            common.SendRequest(url,{},resp=>{
                self.items=eval(resp.Data.Menus)
                self.saveMenus(resp.Data.Menus)
                self.changeMenuUrl();
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
    created(){
        let self=this;
        if(self.getMenusCache()!=null){
            self.$nextTick(function(){
                self.items=eval(self.getMenusCache());
                self.changeMenuUrl();
            })
        }
        else{
            self.getMenus();
        }

    }

}
</script>