import{i as e,n as a,m as l,r as s,c as o,b as r,y as n,z as t,o as u,u as d,U as i,L as c,B as p,v as g,D as m}from"./vendor.a0efbb0e.js";import{r as f,l as v}from"./user.98dae688.js";import"./index.49d72d81.js";const _=r("div",{class:"login-container-hello"},"hello!",-1),b=r("div",{class:"login-container-title"},"欢迎来到 普林芯驰命令词选词系统",-1),h=r("span",{style:{color:"#fff"}},"点击换一张",-1),y=g("登录"),x={style:{color:"#fff"}},w=g(" 没有账号？去 "),k=r("div",{class:"login-container-tips"},"珠海市普林芯驰科技有限公司",-1),U={expose:[],setup(g){f((e=>v(e)),{manual:!0,onSuccess(e){t.success("登录成功")}});const U=e("global"),$=a("https://xuanci.spacetouch.co/include/vdimgck.php"),j=a(),C=l({name:"",password:""}),S={name:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]};function q(){$.value+="?"}function B(){j.value.validate().then((()=>{U.$router.push("/home"),console.log("values",C,m(C))})).catch((e=>{console.log("error",e)}))}return(e,a)=>{const l=s("a-col"),t=s("a-input"),g=s("a-form-item"),m=s("a-row"),f=s("a-button"),v=s("a-form");return u(),o("div",{class:"login-container",style:`background-image: url(${e.getSrc("/src/assets/login_images/login_background.png")});`},[r(m,null,{default:n((()=>[r(l,{xs:0,md:0,sm:12,lg:14,xl:16}),r(l,{xs:24,sm:24,md:12,lg:10,xl:6},{default:n((()=>[r("div",{class:"login-container-form",style:`background-image: url(${e.getSrc("/src/assets/login_images/login_form.png")});`},[_,b,r(v,{ref:j,rules:S,model:d(C)},{default:n((()=>[r(g,{name:"name"},{default:n((()=>[r(t,{value:d(C).name,"onUpdate:value":a[1]||(a[1]=e=>d(C).name=e),placeholder:"账号"},{prefix:n((()=>[r(d(i),{style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1}),r(g,{name:"password"},{default:n((()=>[r(t,{value:d(C).password,"onUpdate:value":a[2]||(a[2]=e=>d(C).password=e),type:"password",placeholder:"密码"},{prefix:n((()=>[r(d(c),{style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1}),r(g,null,{default:n((()=>[r(t,{value:d(C).password,"onUpdate:value":a[3]||(a[3]=e=>d(C).password=e),placeholder:"验证码"},{prefix:n((()=>[r(d(p),{style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1}),r(g,null,{default:n((()=>[r(m,null,{default:n((()=>[r(l,{span:8},{default:n((()=>[r("img",{src:$.value,onClick:q},null,8,["src"])])),_:1}),r(l,{span:12},{default:n((()=>[h])),_:1})])),_:1})])),_:1}),r(g,null,{default:n((()=>[r(f,{type:"primary",onClick:B,disabled:""===d(C).name||""===d(C).password},{default:n((()=>[y])),_:1},8,["disabled"])])),_:1}),r(g,null,{default:n((()=>[r("span",x,[w,r("a",{style:{color:"#DEB887"},onClick:a[4]||(a[4]=a=>e.$router.push("/register"))},"注册")])])),_:1})])),_:1},8,["model"])],4)])),_:1})])),_:1}),k],4)}}};export default U;
