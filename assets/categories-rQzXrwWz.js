import{_ as E}from"./YunCard.vue_vue_type_script_setup_true_lang-DlrBfTVq.js";import{_ as K}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-BlBVcF84.js";import{d as q,u as N,a as A,k as $,l as P,z as R,as as U,m as j,x as S,o as t,e as r,h as _,v as b,f as l,F as g,s as V,at as x,c as f,w as p,g as B,n as m,C as D,L as F,au as T,af as W,an as H,ao as M,r as O,ap as G,am as J}from"./app-DNk-slOB.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CdCfVFp4.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=q({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,y=N(),n=A(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=P(u.collapsable),{t:i}=R(),{locale:k}=R();function z(e){const c=k.value==="zh-CN"?"zh":k.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=P(),{show:s}=U(d);function C(e){y.push({query:{category:e}}),s()}return j(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const h=S("YunCategory",!0),L=S("RouterLink");return t(),r(g,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>C(e.parentKey))},b(e.category.name==="Uncategorized"?l(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?B("v-if",!0):(t(),r("ul",ee,[(t(!0),r(g,null,V(e.category.children.values(),(a,w)=>(t(),r("li",{key:w,class:"post-list-item",m:"l-4"},[l(x)(a)?(t(),f(h,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(g,{key:1},[a.title?(t(),f(L,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(a)),1)]),_:2},1032,["to"])):B("v-if",!0)],64))]))),128))]))],64)}}}),ae=q({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=A(),y=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(g,null,V(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!y.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},ue=q({__name:"categories",setup(Y){const{t:u}=R(),y=D(),n=F(),v=A(),o=$(()=>v.query.category||""),i=T(),k=$(()=>y.postList.filter(s=>s.categories&&o.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===o.value:s.categories.join("/").startsWith(o.value)&&s.categories[0]===o.value.split("/")[0]:!s.categories&&o.value==="Uncategorized"?s.categories===void 0:!1)),z=W(n);return H([M({"@type":"CollectionPage"})]),(d,s)=>{const C=J,e=Q,c=ae,h=S("RouterView"),L=K,a=E;return t(),r(g,null,[d.$slots["sidebar-child"]?(t(),f(C,{key:0},{default:p(()=>[O(d.$slots,"sidebar-child")]),_:3})):(t(),f(C,{key:1})),m(h,null,{default:p(({Component:w})=>[(t(),f(G(w),null,{"main-header":p(()=>[m(e,{title:l(z)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":p(()=>[_("div",se,b(l(u)("counter.categories",Array.from(l(i).children).length)),1),m(c,{categories:l(i).children},null,8,["categories"]),m(h)]),"main-nav-before":p(()=>[o.value?(t(),f(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(L,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):B("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ue as default};
