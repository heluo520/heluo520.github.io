import{d,l as a,E as _,m as w,o as s,e as l,h as t,G as b,H as C,y as g,I as k,i as V,g as T,n as A,f as D,J as v,K as E,L as I}from"./app-PnNsNJro.js";const N={key:0,"w-full":"","pt-14":"","pb-10":""},P={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},W={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},B=t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[t("span",null,"Web Crypto API")],-1),K={key:1},U=d({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(m){const y=m,o=a(""),r=a(""),c=a(!1),{decrypt:f}=_();async function i(){const n=y.encryptedContent;if(n)try{const e=await f(o.value,n);r.value=e||"",setTimeout(()=>{v()},16)}catch{c.value=!0}}function h(){r.value="",o.value="",setTimeout(()=>{v()},16)}const x=d({name:"ValaxyDeprecatedContent",props:{html:String},render(){const n=`<div>${this.html}</div>`;return E({setup:()=>({frontmatter:I()}),template:n})}}),u=a(!1);return w(()=>{location.protocol!=="https:"&&(u.value=!0)}),(n,e)=>(s(),l("div",null,[r.value?(s(),l("div",K,[A(D(x),{html:r.value},null,8,["html"]),t("div",{"w-full":"","text-center":"","mt-8":""},[t("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),l("div",N,[t("div",P,[b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>o.value=p),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:g(c.value&&"border-red"),onInput:e[1]||(e[1]=p=>c.value=!1),onKeyup:k(i,["enter"])},null,34),[[C,o.value]]),t("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:i}),u.value?(s(),l("div",W,[B,V(" Only works in HTTPS ")])):T("v-if",!0)])]))]))}});export{U as _};
