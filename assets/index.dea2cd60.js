var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(e,r)=>{for(var n in r||(r={}))o.call(r,n)&&a(e,n,r[n]);if(t)for(var n of t(r))s.call(r,n)&&a(e,n,r[n]);return e};import{_ as n,a as l,c as i,p as c,b as g,i as d,r as p,o as u,d as m,e as _,u as h,f,F as b,g as v,h as j,j as y,k as O,l as E,m as L,n as P,A as S}from"./vendor.1ec3dedd.js";const T={en:r(r({},{user:{name:"Able",changeLang:"Change Language"},home:{toLogin:"To Login"},login:{toHome:"To Home"}}),n),"zh-cn":r(r({},{user:{name:"艾布尔",changeLang:"切换语言"},home:{toLogin:"去登录"},login:{toHome:"去首页"}}),l)},k=i({locale:localStorage.getItem("lang")||"zh-cn",messages:T});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/homebg.fca6ff27.png"}),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login-bg.94863a17.png"}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_background.b7e70992.png"}),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/logo.03d6d6da.png"}),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_background.b7e70992.png"}),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_form.48a8d831.png"});c("data-v-66dda115");const H={class:"header-wrap"},M={key:0,class:"header-wrap-right"},C=_("div",{class:"line"},null,-1),D={key:1,class:"header-wrap-right"},R=_("div",{class:"line"},null,-1);g();const V={expose:[],setup(e){const t=d("global");return(e,o)=>{const s=p("a-image"),a=p("a-avatar");return u(),m("div",H,[_(s,{src:"https://xuanci.spacetouch.co/user/images/2017/top.jpg"}),"/login"===e.$route.fullPath||"/register"===e.$route.fullPath?(u(),m("div",M,[_("span",{onClick:o[1]||(o[1]=e=>h(t).$router.push({name:"login"}))},"登录"),C,_("span",{onClick:o[2]||(o[2]=t=>e.$router.push("/register"))},"注册")])):(u(),m("div",D,[_(a,{size:"large",src:"https://img.yzcdn.cn/vant/cat.jpeg"}),R,_("span",{onClick:o[3]||(o[3]=t=>e.$router.push("/register"))},"spacetouch")]))])}},__scopeId:"data-v-66dda115"};c("data-v-5f2c575d");const q={class:"app-body"};g();const F={expose:[],setup:e=>(f(),(e,t)=>{const o=p("router-view");return u(),m(b,null,[_(V),_("div",q,[_(o)])],64)}),__scopeId:"data-v-5f2c575d"};var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const W={expose:[],setup(e){const t=f(),o=v(),{ctx:s,appContext:a}=y(),n={"/src/assets/img/homebg.png":z,"/src/assets/img/login-bg.png":I,"/src/assets/img/login_background.png":$,"/src/assets/img/logo.png":x,"/src/assets/login_images/login_background.png":w,"/src/assets/login_images/login_form.png":A},l={},i=e=>r(r({},n),l)[e];a.config.globalProperties.getSrc=e=>{const{darkTheme:t}=s.$store.state.app;if(t){const t=i(e.replace("/img/","/dark/"));if(t)return t.default}return i(e).default},a.config.globalProperties.$t=e=>e;const c=Object.assign(s,r({$router:t,$store:o},a.config.globalProperties));return j("global",Object.assign(s,c)),j("store",o),(e,t)=>{const o=p("router-view");return u(),m(o)}}};let B;const G={},J=function(e,t){if(!t)return e();if(void 0===B){const e=document.createElement("link").relList;B=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in G)return;G[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":B,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};var K=[{path:"/",redirect:{name:"login"},component:()=>J((()=>Promise.resolve().then((function(){return N}))),void 0),children:[{path:"/home",name:"home",meta:{homeHeader:!0,title:"首页"},component:()=>J((()=>import("./index.66a67da9.js")),["./assets/index.66a67da9.js","./assets/index.de28ec05.css","./assets/vendor.1ec3dedd.js"])},{path:"/good-add",name:"goodAdd",meta:{homeHeader:!0,title:"添加商品"},component:()=>J((()=>import("./add.a705adc6.js")),["./assets/add.a705adc6.js","./assets/add.e9b25599.css","./assets/vendor.1ec3dedd.js"])},{path:"/login",name:"login",meta:{homeHeader:!0,title:"登录"},component:()=>J((()=>import("./index.986eda1b.js")),["./assets/index.986eda1b.js","./assets/index.7a3dcca8.css","./assets/vendor.1ec3dedd.js"])},{path:"/register",name:"register",meta:{homeHeader:!0,title:"注册"},component:()=>J((()=>import("./index.d9d4dcf9.js")),["./assets/index.d9d4dcf9.js","./assets/index.65bf1c41.css","./assets/vendor.1ec3dedd.js"])},{path:"/success",name:"success",meta:{homeHeader:!0,title:"成功"},component:()=>J((()=>import("./success.e45cc784.js")),["./assets/success.e45cc784.js","./assets/success.5e3849b0.css","./assets/vendor.1ec3dedd.js"])}]}];const Q=O({history:E(),routes:K});var U=L({modules:{app:{state:{id:0,isLoading:!1},mutations:{setIsLoading(e,t){e.isLoading=t}},getters:{},actions:{}}}});const X=P(W);X.config.globalProperties.$ELEMENT={size:"small",zIndex:3e3},X.use(S),X.use(Q),X.use(U),X.use(k),X.mount("#app");
