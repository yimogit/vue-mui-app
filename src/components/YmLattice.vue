<template>
    <div :id="nid" class="mui-slider " style="margin-top:15px;height: 100%;">
        <div class="mui-slider-group">
            <div class="mui-slider-item">
                <ul class="mui-table-view mui-grid-view mui-grid-9 bgtransparent">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in items">
                        <a :href="item.MenuUrl">
                            <span :class="'mui-icon iconfont '+item.MenuIcon"></span>
                            <div class="mui-media-body" v-text="item.MenuName"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
/*
    九宫格组件[{MenuUrl:'',MenuIcon:'',MenuName:''}]
*/
    export default {
        props:['items'],
        data(){
            return {
                nid:'ymlattice'+Date.now()
            }
        },
        methods:{
            InitSlide(id) {
                var slider = document.getElementById(id);
                var group = slider.querySelector('.mui-slider-group');
                var dup=document.getElementsByClassName('mui-slider-item-duplicate');
                if(dup!=null && dup.length>0){
                    mui.each(dup,(e,item)=>{
                            group.removeChild(item);
                    })
                }
                var items = mui('.mui-slider-item', group);
                //克隆第一个节点
                var first = items[0].cloneNode(true);
                first.classList.add('mui-slider-item-duplicate');
                //克隆最后一个节点
                var last = items[items.length - 1].cloneNode(true);
                last.classList.add('mui-slider-item-duplicate');
                var sliderApi = mui(slider).slider();
                toggleLoop(true);
                function toggleLoop(loop) {
                    if(loop) {
                        group.classList.add('mui-slider-loop');
                        group.insertBefore(last, group.firstChild);
                        group.appendChild(first);
                        sliderApi.refresh();
                        sliderApi.gotoItem(0);
                    } else {
                        group.classList.remove('mui-slider-loop');
                        group.removeChild(first);
                        group.removeChild(last);
                        sliderApi.refresh();
                        sliderApi.gotoItem(0);
                    }
                }
            }
        },
        beforeUpdate(){
            let self=this;
            console.log('重置九宫格')
            self.$nextTick(()=>{
                self.InitSlide(self.nid);
            });
        }
    }
</script>
