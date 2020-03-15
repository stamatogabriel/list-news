(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0418":function(t,e,n){"use strict";var r=n("15b3"),i=n("ad21"),s=(n("8baf"),n("2877")),a=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},1:function(t,e){},"15b3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("List News")]),n("h2",{staticClass:"news-title"},[t._v(t._s(this.$store.state.title))]),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right"},[n("a",{staticClass:"active",attrs:{href:"/"}},[t._v("Home")]),n("a",{attrs:{href:"#"}},[t._v("More News")]),n("a",[t._v("Contact")])])}];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},a=[],o=(n("034f"),n("2877")),u={},c=Object(o["a"])(u,s,a,!1,null,null,null),l=c.exports,f=n("28dd"),d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("top-header"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loader?n("div",{key:"loading"},[n("div",{staticClass:"loader"})]):n("div",{key:"list",staticClass:"root"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Search news"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("transition-group",{staticClass:"root",attrs:{name:"list",tag:"div"}},t._l(t.filterNews,(function(e,r){return n("router-link",{key:r,staticStyle:{textDecoration:"none",width:"95%"},attrs:{to:{name:"News",params:{news:e}}}},[n("div",{staticClass:"container",attrs:{title:e.description},on:{click:function(n){return t.changeTitle(e.title)}}},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"news-body"},[n("p",[t._v("Author: "+t._s(e.author))]),n("p",[t._v("Font: "+t._s(e.source.name))])])])])})),1)],1)])],1)},v=[],h=(n("4de4"),n("c975"),n("96cf"),n("1da1")),w=n("0418"),b={components:{TopHeader:w["default"]},data:function(){return{newsList:Array,news:Object,isModalVisible:!1,loader:!0,query:""}},computed:{filterNews:function(){var t=this;return this.newsList.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.query.toLowerCase())}))}},methods:{init:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b04a014e29a04ab3910afc8ce3cbdfd2");case 2:return e=t.sent,t.abrupt("return",e.body.articles);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showModal:function(t){this.news=this.newsList[t],this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},changeTitle:function(t){this.$store.commit("newTitle",t)}},beforeMount:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit("newTitle",""),document.title="List News - Home",t.next=4,this.init();case 4:this.newsList=t.sent,this.loader=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},m=b,_=(n("89f1"),Object(o["a"])(m,p,v,!1,null,null,null)),y=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-header"),n("div",{attrs:{id:"root"}},[n("h1",{attrs:{id:"title"}},[t._v(t._s(t.news.title))]),n("h3",{attrs:{id:"subtitle"}},[t._v(t._s(t.news.description))]),n("span",[t._v(t._s(t.news.publishedAt))]),n("div",{attrs:{id:"container"}},[n("img",{attrs:{src:t.news.urlToImage,alt:t.news.title,id:"image"}}),n("div",{attrs:{id:"content-conteiner"}},[n("p",{attrs:{id:"content"}},[t._v(t._s(t.news.content))]),n("a",{attrs:{href:t.news.url,target:"_blank",alt:t.news.description}},[t._v("See more...")])])])])],1)},O=[],x={props:{news:Object},components:{TopHeader:w["default"]},beforeMount:function(){document.title="List News - "+this.$store.state.title}},j=x,C=(n("cb04"),Object(o["a"])(j,g,O,!1,null,null,null)),k=C.exports;r["a"].use(d["a"]);var M=new d["a"]({routes:[{path:"/",name:"Home",component:y},{path:"/news",name:"News",component:k,props:!0}]});r["a"].use(f["a"]),r["a"].use(i["a"]),r["a"].config.productionTip=!1;var T=new i["a"].Store({state:{title:"teste"},mutations:{newTitle:function(t,e){t.title=e}}});new r["a"]({el:"#app",store:T,router:M,render:function(t){return t(l)}})},6860:function(t,e,n){},"85ec":function(t,e,n){},"89f1":function(t,e,n){"use strict";var r=n("fca2"),i=n.n(r);i.a},"8baf":function(t,e,n){"use strict";var r=n("6860"),i=n.n(r);i.a},ad21:function(t,e,n){"use strict";var r=n("e504"),i=n.n(r);e["default"]=i.a},b34b:function(t,e,n){},cb04:function(t,e,n){"use strict";var r=n("b34b"),i=n.n(r);i.a},e504:function(t,e){},fca2:function(t,e,n){}});
//# sourceMappingURL=app.ad625a11.js.map