webpackJsonp([2,0],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(33),u=a(i),s=n(32),o=(a(s),n(93)),r=a(o),c=n(87),l=a(c),d=n(95),f=a(d),m=n(94),p=a(m),v=n(97),h=a(v);u.default.component("ym-header",f.default),u.default.component("ym-footer",p.default),u.default.component("ym-loading",h.default);new u.default({router:l.default,render:function(e){return e(r.default)}}).$mount("#app")},,,,,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(89),u=a(i),s=n(30),o=a(s),r=n(31),c=a(r);t.default={GetApiAddressByArtType:function(e){var t="";if("index"==e)t="/api/ObtainData/GetSetting";else{var n="list"==e?"GetList":"GetDetail";t="/api/ObtainData/"+n}return o.default.apiDomain+t},SendRequest:function(e,t,n,a,i){var a=a||{},s={data:t,dataType:a.dataType||"json",type:i||"get",timeout:a.timeout||1e4,success:function(e){n(e)},error:function(e,t,n){mui.toast("服务器异常,请稍后再试")}};if(u.default){var o=(0,u.default)(s,a);mui.ajax(e,o)}else mui.ajax(e,s)},GetMenuItems:function(){var e=c.default.GetCacheByKey(o.default.customMenusCacheKey);console.log(e);var t=c.default.GetCacheByKey(o.default.menusCacheKey);return null!=e&&e.length>0&&e.forEach(function(e){t.push(e)}),t}}},,,,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={apiDomain:"http://api.yimo.link",menusCacheKey:"DefultMenus",customMenusCacheKey:"CustomMenus",showDefaultMenuKey:"showDefaultMenu"}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _stringify=__webpack_require__(88),_stringify2=_interopRequireDefault(_stringify),_typeof2=__webpack_require__(92),_typeof3=_interopRequireDefault(_typeof2);exports.default={GetCacheByKey:function GetCacheByKey(key){var data=localStorage.getItem(key);return eval(data)},SetCacheByKey:function(e,t){"object"===("undefined"==typeof t?"undefined":(0,_typeof3.default)(t))?localStorage.setItem(e,(0,_stringify2.default)(t)):localStorage.setItem(e,t)},RemoveCahceByKey:function(e){localStorage.removeItem(e)},ClearCache:function(){localStorage.clear()}}},,,,,,,,,,,,,function(e,t,n){var a,i;a=n(78);var u=n(106);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ShowLoading:!1}},methods:{},created:function(){console.log("app初始化")}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["items","type"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title","back","refresh"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["items"],data:function(){return{nid:"ymlattice"+Date.now()}},methods:{InitSlide:function(e){function t(e){e?(a.classList.add("mui-slider-loop"),a.insertBefore(o,a.firstChild),a.appendChild(s),r.refresh(),r.gotoItem(0)):(a.classList.remove("mui-slider-loop"),a.removeChild(s),a.removeChild(o),r.refresh(),r.gotoItem(0))}var n=document.getElementById(e),a=n.querySelector(".mui-slider-group"),i=document.getElementsByClassName("mui-slider-item-duplicate");null!=i&&i.length>0&&mui.each(i,function(e,t){a.removeChild(t)});var u=mui(".mui-slider-item",a),s=u[0].cloneNode(!0);s.classList.add("mui-slider-item-duplicate");var o=u[u.length-1].cloneNode(!0);o.classList.add("mui-slider-item-duplicate");var r=mui(n).slider();t(!0)}},beforeUpdate:function(){var e=this;console.log("重置九宫格"),e.$nextTick(function(){e.InitSlide(e.nid)})}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["show","public"]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),u=a(i),s=n(44),o=a(s);t.default={data:function(){return{artTitle:"",ArtContent:""}},components:{YmCard:o.default},created:function(){var e=this,t=u.default.GetApiAddressByArtType("detail");u.default.SendRequest(t,{artType:e.$route.params.type,id:e.$route.params.id},function(t){e.ArtContent=t.Data.Content,e.artTitle=t.Data.Title})}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),u=a(i),s=n(16),o=a(s),r=n(31),c=a(r),l=n(96),d=a(l);t.default={data:function(){return{items:[],menusCacheKey:"menusCacheKey"}},components:{YmLattice:d.default},methods:{clearCache:function(){var e=this;return 0==c.default.GetCacheByKey(u.default.showDefaultMenuKey)?void(e.items=c.default.GetCacheByKey(u.default.customMenusCacheKey)):(c.default.RemoveCahceByKey(u.default.menusCacheKey),void this.getMenus())},getMenus:function(){var e=this;e.$parent.ShowLoading=!0;var t=o.default.GetApiAddressByArtType("index");o.default.SendRequest(t,{},function(t){c.default.SetCacheByKey(u.default.menusCacheKey,t.Data.Menus),setTimeout(function(){e.items=o.default.GetMenuItems(),e.changeMenuUrl(),e.$parent.ShowLoading=!1},10)})},changeMenuUrl:function(){var e=this;e.items.forEach(function(e){0==e.MenuUrl.indexOf("http")&&(e.MenuUrl="#/webpage/"+encodeURIComponent(e.MenuUrl)),0==e.MenuUrl.indexOf("/")&&(e.MenuUrl="#"+e.MenuUrl)})}},computed:{},created:function(){var e=this;return 0==c.default.GetCacheByKey(u.default.showDefaultMenuKey)?void(e.items=c.default.GetCacheByKey(u.default.customMenusCacheKey)):void(null!=c.default.GetCacheByKey(u.default.menusCacheKey)?e.$nextTick(function(){e.items=o.default.GetMenuItems(),e.changeMenuUrl()}):e.getMenus())}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),u=a(i),s=n(44),o=a(s);t.default={data:function(){return{items:[],artType:"",allLoaded:!1,loadMoreText:"加载更多",showLoading:!1,pageIndex:1}},components:{YmCard:o.default},methods:{loadData:function(e){var t=this;t.showLoading=!0,t.allLoaded=!1;var n=u.default.GetApiAddressByArtType("list");u.default.SendRequest(n,{pageIndex:e,artType:t.artType},function(e){t.showLoading=!1,1==t.pageIndex?t.items=e.Data:e.Data.forEach(function(e){t.items.push(e)}),0==e.Data.length&&(t.allLoaded=!0)})},loadNext:function(){var e=this;0==e.allLoaded?(e.loadMoreText="已加载"+e.items.length+"条数据",e.pageIndex++,e.loadData(this.pageIndex)):e.loadMoreText="翻了个朝天,共"+e.items.length+"条数据"},refresh:function(){this.pageIndex=1,this.items=[],this.loadData(this.pageIndex)}},computed:{loadMoreText:function(){var e=this;return 1==e.allLoaded?"翻了个朝天,共"+e.items.length+"条数据":"加载更多"}},created:function(){var e=this;e.artType=e.$route.params.type,e.loadData(this.pageIndex)}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),u=a(i),s=n(16),o=(a(s),n(31)),r=a(o);t.default={data:function(){return{model:{},customMenu:[],editKey:null,defIcon:"icon-joke",showDefaultMenu:!0}},methods:{getCustomMenu:function(){return r.default.GetCacheByKey(u.default.customMenusCacheKey)||[]},addMenu:function(){var e=this;e.model.MenuName&&e.model.MenuUrl?(e.model.MenuIcon=e.model.MenuIcon||e.defIcon,null==this.editKey?(e.customMenu=e.customMenu||[],e.customMenu.push(this.model),r.default.SetCacheByKey(u.default.customMenusCacheKey,e.customMenu)):r.default.SetCacheByKey(u.default.customMenusCacheKey,e.customMenu),mui.toast("保存成功"),this.model={},this.editKey=null):mui.toast("名称和链接必填")},editMenu:function(e,t){this.editKey=t,this.model=e},cancelBtn:function(){var e=this;e.editKey=null,e.model={}},removeMenu:function(e){var t=this;e==t.editKey&&(t.editKey=null,t.model={});var n=t.customMenu;n.splice(e,1),t.customMenu=n,r.default.SetCacheByKey(u.default.customMenusCacheKey,t.customMenu),mui.toast("删除成功")},changeDefaultMenu:function(e){this.showDefaultMenu=e,r.default.SetCacheByKey(u.default.showDefaultMenuKey,e)}},computed:{},created:function(){this.customMenu=this.getCustomMenu(),0==r.default.GetCacheByKey(u.default.showDefaultMenuKey)&&(this.showDefaultMenu=!1)}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{openUrl:"",style:""}},created:function(){var e=this,t=this;t.$nextTick(function(){var n=document.documentElement.clientHeight-document.getElementById("header").offsetHeight;t.style="width:100%;border:0px;height:"+n+"px",t.openUrl=e.$route.params.openUrl})}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(33),u=a(i),s=n(32),o=a(s),r=n(99),c=a(r);u.default.use(o.default);var l=new o.default({mode:"hash",routes:[{name:"/",path:"/",component:c.default},{name:"home",path:"/home",component:c.default},{name:"webpage",path:"/webpage/:openUrl",component:n(102)},{name:"list",path:"/list/:type",component:n(100)},{name:"detail",path:"/detail/:type/:id",component:n(98)},{name:"setting",path:"/setting",component:n(101)}]});l.beforeEach(function(e,t,n){console.log("路由到："+e.path),n()}),l.afterEach(function(e){}),t.default=l},,,,,,function(e,t,n){var a,i;a=n(77);var u=n(110);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i,u=n(105);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(79);var u=n(107);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(80);var u=n(108);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;n(45),a=n(81);var u=n(109);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(82);var u=n(111);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(83);var u=n(113);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(84);var u=n(104);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(85);var u=n(112);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(86);var u=n(103);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,e.exports=a},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("ym-header",{attrs:{title:"私人定制",back:!0,refresh:!0,id:"header"}}),e._v(" "),""!=e.openUrl?t("div",{staticClass:"mui-content"},[t("iframe",{style:e.style,attrs:{src:e.openUrl}})]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("ym-header",{attrs:{title:"私人定制",back:!0,refresh:!0}},[t("a",{staticClass:"mui-icon mui-icon-refresh mui-pull-right",on:{click:e.refresh},slot:"right"})]),e._v(" "),t("div",{staticClass:"mui-content"},[t("ym-card",{attrs:{items:e.items,type:e.artType}}),e._v(" "),t("div",{staticClass:"mui-content-padded"},[t("ul",{staticClass:"mui-pager"},[t("li",[t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.showLoading,expression:"showLoading==true"}],staticClass:"mui-icon mui-spinner"}),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:0==e.showLoading,expression:"showLoading==false"}],staticClass:"mui-btn mui-btn-primary mui-btn-block mui-btn-outlined",attrs:{type:"button"},on:{click:e.loadNext}},[e._v(e._s(e.loadMoreText))])])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("nav",{staticClass:"mui-bar mui-bar-tab"},[t("a",{staticClass:"mui-tab-item",on:{click:function(t){e.$router.push("/home")}}},[t("span",{staticClass:"mui-icon mui-icon-home"}),e._v(" "),t("span",{staticClass:"mui-tab-label"},[e._v("导航")])]),e._v(" "),t("a",{staticClass:"mui-tab-item",on:{click:function(t){e.$router.push("/setting")}}},[t("span",{staticClass:"mui-icon mui-icon-gear"}),e._v(" "),t("span",{staticClass:"mui-tab-label"},[e._v("设置")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"mui-control-content mui-active"},e._l(e.items,function(n){return t("div",{staticClass:"mui-card"},[t("router-link",{staticClass:"mui-card-header",attrs:{to:{path:"/detail/"+e.type+"/"+n.Id},tag:"div"}},[e._v(e._s(n.Title))]),e._v(" "),e._v(" "),n.Desc?t("div",{staticClass:"mui-card-content"},[t("div",{staticClass:"mui-card-content-inner",domProps:{innerHTML:e._s(n.Desc)}})]):e._e()])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("header",{staticClass:"mui-bar mui-bar-nav"},[e._t("default",[e._t("left",[1==e.back?t("a",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",on:{click:function(t){e.$router.go(-1)}}}):e._e()]),e._v(" "),t("h1",{staticClass:"mui-title",attrs:{onclick:"javascript:location.reload();"}},[e._v(e._s(e.title))]),e._v(" "),e._v(" "),e._t("right",[1==e.refresh?t("a",{staticClass:"mui-icon mui-icon-forward mui-pull-right",on:{click:function(t){e.$router.go(1)}}}):e._e()])])],!0)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"mui-slider ",staticStyle:{"margin-top":"15px",height:"100%"},attrs:{id:e.nid}},[t("div",{staticClass:"mui-slider-group"},[t("div",{staticClass:"mui-slider-item"},[t("ul",{staticClass:"mui-table-view mui-grid-view mui-grid-9 bgtransparent"},e._l(e.items,function(n){return t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("a",{attrs:{href:n.MenuUrl}},[t("span",{class:"mui-icon iconfont "+n.MenuIcon}),e._v(" "),t("div",{staticClass:"mui-media-body",domProps:{textContent:e._s(n.MenuName)}})])])}))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return 1==e.show?t("div",{staticClass:"mui-icon mui-spinner",class:{ymloading:1==e.public}}):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"ymapp"}},[t("ym-loading",{attrs:{show:e.ShowLoading,public:!0}}),e._v(" "),t("router-view")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("ym-header",{attrs:{title:e.artTitle,back:!0,refresh:!0}}),e._v(" "),t("div",{staticClass:"mui-content"},[t("div",{staticClass:"mui-content-padded",attrs:{id:"artDetail"},domProps:{innerHTML:e._s(e.ArtContent)}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("ym-header",{attrs:{title:"自定义菜单管理("+e.customMenu.length+")",back:!0}}),e._v(" "),t("div",{staticClass:"mui-content hasnav"},[t("div",{staticStyle:{"z-index":"20",margin:"5px",position:"fixed",width:"100%"}},[t("form",{staticClass:"mui-input-group"},[t("div",{staticClass:"mui-input-row"},[t("label",[e._v("导航名称")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.MenuName,expression:"model.MenuName"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"导航名称"},domProps:{value:e._s(e.model.MenuName)},on:{input:function(t){t.target.composing||(e.model.MenuName=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mui-input-row"},[t("label",[e._v("导航链接")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.MenuUrl,expression:"model.MenuUrl"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"导航链接"},domProps:{value:e._s(e.model.MenuUrl)},on:{input:function(t){t.target.composing||(e.model.MenuUrl=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mui-input-row"},[t("label",[e._v("导航图标")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.MenuIcon,expression:"model.MenuIcon"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"导航图标 "},domProps:{value:e._s(e.model.MenuIcon)},on:{input:function(t){t.target.composing||(e.model.MenuIcon=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mui-button-row"},[t("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"},on:{click:e.addMenu}},[e._v(e._s(null==e.editKey?"添加":"保存"))]),e._v(" "),t("button",{staticClass:"mui-btn mui-btn-danger",attrs:{type:"button"},on:{click:e.cancelBtn}},[e._v("取消")])]),e._v(" "),t("div",{staticClass:"mui-input-row"},[t("label",[e._v("默认导航")]),e._v(" "),t("div",{staticClass:"mui-switch",class:{"mui-active":e.showDefaultMenu},staticStyle:{float:"left"},on:{click:function(t){e.changeDefaultMenu(!e.showDefaultMenu)}}},[t("div",{staticClass:"mui-switch-handle"})])])])]),e._v(" "),t("div",{staticClass:"mui-content-padded",staticStyle:{"z-index":"19",margin:"5px","margin-top":"220px"}},[t("ul",{staticClass:"mui-table-view"},e._l(e.customMenu,function(n,a){return t("li",{staticClass:"mui-table-view-cell "},[t("div",{staticClass:"mui-slider-right mui-disabled"},[t("a",{staticClass:"mui-btn mui-btn-red",on:{click:function(t){e.removeMenu(a)}}},[e._v("删除")]),e._v(" "),t("a",{staticClass:"mui-btn mui-btn-blue",on:{click:function(t){e.editMenu(n,a)}}},[e._v("编辑")])]),e._v(" "),t("div",{staticClass:"mui-slider-handle"}),e._v(" "),t("div",[t("span",{class:"mui-media-object mui-pull-left mui-icon iconfont "+n.MenuIcon}),e._v(" "),t("div",{staticClass:"mui-media-body"},[e._v("\n                                "+e._s(n.MenuName)+"\n                                "),t("p",{staticClass:"mui-ellipsis"},[e._v(e._s(n.MenuUrl))])])])])}))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("ym-header",[t("a",{staticClass:"mui-icon mui-icon-gear mui-pull-left",on:{click:function(t){e.$router.push("setting")}}}),e._v(" "),t("h1",{staticClass:"mui-title"},[e._v("私人定制")]),e._v(" "),t("a",{staticClass:"mui-icon mui-icon-refresh mui-pull-right",on:{click:e.clearCache}})]),e._v(" "),t("div",{staticClass:"mui-content hasnav"},[t("ym-lattice",{attrs:{items:e.items}})])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.7e190a7e45c1a46ce8cd.js.map