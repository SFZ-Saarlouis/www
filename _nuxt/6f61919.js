(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(t,e,l){"use strict";l(2),l(3),l(4),l(5);var n={props:["name","desc","website"],data:function(){return{isActive:!0}},methods:{closeModel:function(){this.$emit("onChange","hi from child")},openWebsite:function(){window.open(this.website)}},mounted:function(){null==this.website&&(document.getElementsByClassName("modal-card-body")[0].style.borderBottomLeftRadius="5px",document.getElementsByClassName("modal-card-body")[0].style.borderBottomRightRadius="5px")}},c=l(13),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-modal",{attrs:{"trap-focus":"","has-modal-card":"",scroll:"keep"},on:{close:t.closeModel},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[l("div",{staticClass:"modal-card"},[l("header",{staticClass:"modal-card-head"},[l("p",{staticClass:"modal-card-title"},[t._v(t._s(t.name))])]),t._v(" "),l("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[t._v("\n      "+t._s(t.desc)+"\n    ")]),t._v(" "),null!=t.website?l("footer",{staticClass:"modal-card-foot"},[l("div",{staticClass:"container"},[null!=t.website?l("b-button",{attrs:{type:"is-success",outlined:""},on:{click:t.openWebsite}},[t._v("Website "+t._s(t.name))]):t._e()],1)]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},183:function(t,e,l){"use strict";l(2),l(3),l(4),l(5);var n={props:["data"],methods:{openLabModal:function(t){this.$emit("openModal",t)}}},c=l(13),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"section"},[t.data.length>0?n("div",{staticClass:"row columns is-multiline"},t._l(t.data,(function(e){return n("div",{key:e.title,staticClass:"column is-4",on:{click:function(l){return t.openLabModal(e)}}},[n("div",{staticClass:"card large"},[n("div",{staticClass:"card-image is-1by1"},[n("b-image",{attrs:{"src-fallback":l(123),ratio:"1by1",src:e.image}})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4 no-padding"},[t._v(t._s(e.title))])])]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n                "+t._s(e.description.split(" ").slice(0,24).join(" ")+"...")+"\n              ")]),t._v(" "),n("p",[n("a",{on:{click:function(l){return t.openLabModal(e)}}},[t._v("Weiterlesen")])])])])])})),0):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},222:function(t,e,l){"use strict";l.r(e);l(2),l(3),l(4),l(5);var n=l(182),c=l(183),o={components:{LabModal:n.a,CardList:c.a},head:{title:"Schülerlabore"},data:function(){return{clickedLab:null,isImageModalActive:!1}},methods:{openLabModal:function(t){this.clickedLab=t,this.isImageModalActive=!0},closeEvent:function(){this.isImageModalActive=!1}}},d=l(13),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("content",[l("section",{staticClass:"hero is-medium is-bold is-fullheight-with-navbar is-spaced",attrs:{id:"hero-background"}},[l("div",{staticClass:"hero-header"},[t._m(0),t._v(" "),l("br"),t._v(" "),l("card-list",{attrs:{data:this.$store.getters.labs},on:{openModal:t.openLabModal}})],1),t._v(" "),null!=t.clickedLab&&t.isImageModalActive?l("lab-modal",{attrs:{website:t.clickedLab.website,name:t.clickedLab.title,desc:t.clickedLab.description},on:{onChange:t.closeEvent}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered",staticStyle:{top:"20px"}},[e("p",{staticClass:"title",attrs:{id:"title"}},[this._v("Schülerlabore")])])}],!1,null,null,null);e.default=component.exports}}]);