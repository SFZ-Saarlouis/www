(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{206:function(e,t,n){var content=n(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(48).default)("79f30c2b",content,!1,{sourceMap:!1})},223:function(e,t,n){"use strict";n(206)},224:function(e,t,n){(t=n(47)(!1)).push([e.i,".iframe-wrapper{height:1000px;overflow-y:hidden}.vue-friendly-iframe,iframe{height:100%;width:100%}",""]),e.exports=t},241:function(e,t,n){"use strict";n.r(t);n(18),n(19),n(14),n(78),n(30);var o=n(27),r=n(29),c=n(45),l=n(46),f=n(24),h=n(9),d=n(28);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},v=function(e){Object(c.a)(n,e);var t=m(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).url=window.location.origin+"/workshops/"+encodeURIComponent(e.$route.params.name)+"/index.html?cache="+(new Date).getTime(),e.iframeLoading=!0,e}return Object(r.a)(n,[{key:"mounted",value:function(){document.documentElement.style.height="100%",document.getElementById("__nuxt").style.height="100%",document.getElementById("__layout").style.height="100%",document.getElementsByTagName("body")[0].style.height="100%",document.getElementById("app").style.height="100%"}},{key:"beforeDestroy",value:function(){document.documentElement.style.height="",document.getElementById("__nuxt").style.height="",document.getElementById("__layout").style.height="",document.getElementsByTagName("body")[0].style.height="",document.getElementById("app").style.height=""}},{key:"onLoad",value:function(){this.iframeLoading=!1}}]),n}(d.Vue),w=v=y([d.Component],v),_=(n(223),n(15)),component=Object(_.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%"}},[this.iframeLoading?t("div",{staticClass:"content"},[t("b-tag",{attrs:{type:"is-info",size:"is-large"}},[this._v("\n      Workshop wird geladen...\n    ")])],1):this._e(),this._v(" "),t("div",{staticClass:"iframe-wrapper",staticStyle:{height:"100%"}},[t("vue-friendly-iframe",{attrs:{src:this.url,name:this.$route.params.name},on:{load:this.onLoad}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);