<template>
    <div>
        <ym-header :title="'自定义菜单管理('+customMenu.length+')'" :back="true">
        </ym-header>
        <div class="mui-content hasnav">      
			<div class="" style="z-index:20;margin: 5px;position: fixed;width: 100%;" id="form-content">
                <form class="mui-input-group" >
                        <div class="mui-input-row">
                            <label>导航名称</label>
                            <input type="text" class="mui-input-clear" placeholder="导航名称" v-model="model.MenuName">
                        </div>
                        <div class="mui-input-row">
                            <label>导航链接</label>
                            <input type="text" class="mui-input-clear" placeholder="导航链接" v-model="model.MenuUrl">
                        </div>
                        <div class="mui-input-row">
                            <label>导航图标</label>
                            <input type="text" class="mui-input-clear" placeholder="导航图标 " v-model="model.MenuIcon">
                        </div>
                        <div class="mui-button-row">
                            <button type="button" class="mui-btn mui-btn-primary" @click="addMenu">{{editKey==null?'添加':'保存'}}</button>
                            <button type="button" class="mui-btn mui-btn-danger" @click="cancelBtn">取消</button>
                        </div>
                        <div class="mui-input-row">
                            <label>默认导航</label>
                            <div class="mui-switch" style="float:left;" :class="{'mui-active':showDefaultMenu}" @click="changeDefaultMenu(!showDefaultMenu)">
                                <div class="mui-switch-handle"></div>
                            </div>
                        </div>
                        <div class="mui-input-row">
                            <label>接口地址</label>
                            <input type="text" style="width:50%;float:left;" class="mui-input-clear" placeholder="接口地址" v-model="appApiUrl">
                            <button type="button" class="mui-btn mui-btn-primary" style="float:right;" @click="saveApiUrl">保存</button>
                        </div>
                </form>                
            </div>     
			<div class="mui-content-padded" style="z-index:19;margin: 5px;margin-top:250px;" :style="listyle">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell " v-for="item,index in customMenu">                        
                        <div class="mui-slider-right mui-disabled">
                            <a class="mui-btn mui-btn-red"  @click="removeMenu(index)">删除</a>
                            <a class="mui-btn mui-btn-blue"  @click="editMenu(item,index)">编辑</a>
                        </div>
                        <div class="mui-slider-handle"></div>
                        <div>                            
                            <span :class="'mui-media-object mui-pull-left mui-icon iconfont '+item.MenuIcon"></span>
                            <div class="mui-media-body">
                                {{item.MenuName}}
                                <p class='mui-ellipsis'>{{item.MenuUrl}}</p>
                            </div>
                        </div>
                    </li>
                </ul>                
            </div> 
        </div>
    </div>
</template>

<script>
import config from '../config'
import common from '../utils/common'
import cacheHelper from '../utils/cacheHelper'
export default {
    data(){
        return{
            model:{},
            customMenu:[],
            editKey:null,
            defIcon:'icon-joke',
            showDefaultMenu:true,
            appApiUrl:config.apiDomain+'/static/data.json',
            listyle:''
        }
    },
    methods:{
        getCustomMenu(){
            return cacheHelper.GetCacheByKey(config.customMenusCacheKey)||[];
        },
        addMenu(){
            let self=this
            if(self.model.MenuName && self.model.MenuUrl){
                self.model.MenuIcon=self.model.MenuIcon||self.defIcon
                if(this.editKey==null){
                    self.customMenu=self.customMenu||[];
                    self.customMenu.push(this.model);
                    cacheHelper.SetCacheByKey(config.customMenusCacheKey,self.customMenu)
                }
                else{
                    cacheHelper.SetCacheByKey(config.customMenusCacheKey,self.customMenu)
                }
                mui.toast('保存成功')
                this.model={}
                this.editKey=null
            }
            else{
                mui.toast('名称和链接必填')
            }
        },
        editMenu(item,index){
            this.editKey=index;
            this.model=item;
        },
        cancelBtn(){
            let self=this;
            self.editKey=null;
            self.model={};
        },
        removeMenu(index){
            let self=this;
            if(index==self.editKey){
                self.editKey=null;
                self.model={};
            }
            var menus=self.customMenu;
            menus.splice(index,1);
            self.customMenu=menus;
            cacheHelper.SetCacheByKey(config.customMenusCacheKey,self.customMenu)
            mui.toast('删除成功')
        },
        changeDefaultMenu(s){
            this.showDefaultMenu=s;
            cacheHelper.SetCacheByKey(config.showDefaultMenuKey,s);
                
        },
        saveApiUrl(){
            cacheHelper.SetCacheByKey('appApiUrl',this.appApiUrl); 
            mui.toast('保存成功')
        }
    },
    computed:{
        
    },
    created(){
        this.customMenu=this.getCustomMenu();
        if(cacheHelper.GetCacheByKey(config.showDefaultMenuKey)==false){
            this.showDefaultMenu=false
        }
        if(cacheHelper.GetCacheByKey('appApiUrl')){
            this.appApiUrl=cacheHelper.GetCacheByKey('appApiUrl');
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.listyle='margin-top:'+(document.getElementById('form-content').offsetHeight)+'px'
        })
    }
}
</script>