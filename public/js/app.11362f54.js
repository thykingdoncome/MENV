(function(e){function t(t){for(var n,o,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function s(e){return c.p+"js/"+({login:"login",register:"register",reset:"reset",welcome:"welcome"}[e]||e)+"."+{login:"d2eafb1e",register:"d244b89b",reset:"5bac2d55",welcome:"fdafe3f4"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={login:1,register:1,reset:1,welcome:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({login:"login",register:"register",reset:"reset",welcome:"welcome"}[e]||e)+"."+{login:"88be5343",register:"f50e1b01",reset:"8c31fef4",welcome:"dd22bc5c"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"199c":function(e,t){},"23be":function(e,t,r){"use strict";var n=r("199c"),o=r.n(n);t["default"]=o.a},"3dfd":function(e,t,r){"use strict";var n=r("3f2f"),o=r("23be"),a=(r("034f"),r("2877")),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},"3f2f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[];r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("3dfd"),a=(r("d3b7"),r("8c4f")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"land"},[r("div",{staticClass:"contain"},[r("h1",[e._v("Welcome!! we are pleased you are here 🤗")]),r("h2",[e._v("This landing page is under construction")]),r("br"),r("h3",[e._v("To continue, please click the links below to Register or Login")]),r("br"),r("div",{attrs:{id:"link"}},[r("span",{staticClass:"accBtn"},[r("router-link",{attrs:{to:"/register"}},[r("button",{attrs:{id:"btn"}},[e._v("Create Account")])])],1),r("span",{staticClass:"accBtn"},[r("router-link",{attrs:{to:"/login"}},[r("button",{attrs:{id:"btn"}},[e._v("Login")])])],1)])])])},s=[],c={name:"Landing"},i=c,l=(r("ca15"),r("2877")),f=Object(l["a"])(i,u,s,!1,null,"ca014ce4",null),d=f.exports,p=r("2f62"),m=(r("96cf"),r("1da1")),g=r("bc3a"),h=r.n(g),v={token:localStorage.getItem("token")||"",user:{},status:"",error:null},b={isLogged:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},w={login:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("auth_request"),e.prev=2,e.next=5,h.a.post("/users/login",r);case 5:return o=e.sent,o.data.success&&(a=o.data.token,u=o.data.user,localStorage.setItem("token",a),h.a.defaults.headers.common["Authorization"]=a,n("auth_success",a,u)),e.abrupt("return",o);case 10:e.prev=10,e.t0=e["catch"](2),n("auth_error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,n("register_request"),e.next=5,h.a.post("/users/register",r);case 5:return o=e.sent,void 0!==o.data.success&&n("register_success"),e.abrupt("return",o);case 10:e.prev=10,e.t0=e["catch"](1),n("register_error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete h.a.defaults.headers.common["Authorization"],x.push("/login"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),welcomeProfile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("welcome_req"),e.next=4,h.a.get("/users/welcome");case 4:return n=e.sent,r("welcome_user",n.data.user),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},y={auth_request:function(e){e.status="loading",e.error=null},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.status="loading",e.error=null},register_success:function(e){e.status="success",e.error=null},register_error:function(e,t){e.error=t.response.data.msg},logout:function(e){e.token="",e.user="",e.status="",e.error=null},welcome_req:function(e){e.status="loading"},welcome_user:function(e,t){e.user=t}},_={state:v,getters:b,actions:w,mutations:y};n["a"].use(p["a"]);var k=new p["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:_}});n["a"].use(a["a"]);var O=[{path:"/",name:"home",component:d},{path:"/login",name:"login",component:function(){return r.e("login").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("register").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/password-reset",name:"reset",component:function(){return r.e("reset").then(r.bind(null,"9b9d"))}},{path:"/welcome",name:"welcome",component:function(){return r.e("welcome").then(r.bind(null,"eec5"))},meta:{requiresAuth:!0}}],j=new a["a"]({mode:"history",base:"/",routes:O});j.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?k.getters.isLogged?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&k.getters.isLogged?r("/welcome"):r()}));var x=j;n["a"].config.productionTip=!1,n["a"].prototype.$http=h.a;var S=localStorage.getItem("token");S&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=S),new n["a"]({router:x,store:k,render:function(e){return e(o["default"])}}).$mount("#app")},"85ec":function(e,t,r){},ca15:function(e,t,r){"use strict";var n=r("f20e"),o=r.n(n);o.a},f20e:function(e,t,r){}});
//# sourceMappingURL=app.11362f54.js.map