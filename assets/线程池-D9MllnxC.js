import{_ as E}from"./ValaxyMain.vue_vue_type_style_index_0_lang-B_uZJbok.js";import{a as p,p as k,o as d,c,w as a,f as g,r as l,h as s,i}from"./app-D8OMBgQa.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-C6T1pyNb.js";import"./YunCard.vue_vue_type_script_setup_true_lang-C9KrWlZK.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DM8G4WRh.js";import"./index-C7yU5XnD.js";const y=s("h2",{id:"springboot中使用-enableasync与-async实现共享线程池",tabindex:"-1"},[i("SpringBoot中使用@EnableAsync与@Async实现共享线程池 "),s("a",{class:"header-anchor",href:"#springboot中使用-enableasync与-async实现共享线程池","aria-label":'Permalink to "SpringBoot中使用@EnableAsync与@Async实现共享线程池"'},"​")],-1),u=s("ul",null,[s("li",null,[i("首先需要定义一个配置类对"),s("code",null,"ThreadPoolTaskExecutor"),i("对象进行配置，并交给容器")])],-1),m=s("blockquote",null,[s("p",null,[s("code",null,"ThreadPoolTaskExecutor"),i("对象是Spring中的一个用于执行异步任务的线程池")])],-1),F=s("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Configuration"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"EnableAsync"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  //开启异步支持")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ThreadPoolConfig"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	@"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Bean"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"TaskExecutor"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//指定线程池名称 ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	public"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Executor "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"threadPoolTaskExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		ThreadPoolTaskExecutor executor "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ThreadPoolTaskExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置核心线程数*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setCorePoolSize"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置最大线程数*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setMaxPoolSize"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置队列容量*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setQueueCapacity"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"255"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置线程活跃时间*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setKeepAliveSeconds"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"60"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置线程名后缀*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setThreadNamePrefix"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"@holo"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*设置是否等待任务全部执行完结束线程池*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setWaitForTasksToCompleteOnShutdown"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"		/*初始化线程池*/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		executor."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"initialize"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"		return"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," executor;  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	}  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})],-1),f=s("ul",null,[s("li",null,[i("然后在需要异步执行的地方加上注解"),s("code",null,'@Async("TaskExecutor")'),i("并在其中指定线程池的名称即可，该方法就会被线程池中的线程进行执行。")])],-1),A=s("h2",{id:"利用threadlocal来进行存储用户信息",tabindex:"-1"},[i("利用ThreadLocal来进行存储用户信息 "),s("a",{class:"header-anchor",href:"#利用threadlocal来进行存储用户信息","aria-label":'Permalink to "利用ThreadLocal来进行存储用户信息"'},"​")],-1),b=s("blockquote",null,[s("p",null,[s("code",null,"ThreadLocal"),i("是"),s("code",null,"Java"),i("当中的一个本地线程变量，是一个属于线程的局部变量，各个线程之间互不干扰，具有隔离性，是线程安全的。 原理：每个线程其实都有一个"),s("code",null,"map")])],-1),S={__name:"线程池",setup(C,{expose:r}){const e=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"SpringBoot中使用@EnableAsync与@Async实现共享线程池","slug":"springboot中使用-enableasync与-async实现共享线程池","link":"#springboot中使用-enableasync与-async实现共享线程池","children":[]},{"level":2,"title":"利用ThreadLocal来进行存储用户信息","slug":"利用threadlocal来进行存储用户信息","link":"#利用threadlocal来进行存储用户信息","children":[]}],"relativePath":"pages/posts/springboot/线程池.md","path":"/home/runner/work/blog-code/blog-code/pages/posts/springboot/线程池.md","lastUpdated":1721281013000}'),h=p(),n=e.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},e.frontmatter||{}),k("pageData",e),k("valaxy:frontmatter",n),globalThis.$frontmatter=n,r({frontmatter:{}}),(t,B)=>{const o=E;return d(),c(o,{frontmatter:g(n)},{"main-content-md":a(()=>[y,u,m,F,f,A,b]),"main-header":a(()=>[l(t.$slots,"main-header")]),"main-header-after":a(()=>[l(t.$slots,"main-header-after")]),"main-nav":a(()=>[l(t.$slots,"main-nav")]),"main-content":a(()=>[l(t.$slots,"main-content")]),"main-content-after":a(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(t.$slots,"main-nav-after")]),comment:a(()=>[l(t.$slots,"comment")]),footer:a(()=>[l(t.$slots,"footer")]),aside:a(()=>[l(t.$slots,"aside")]),"aside-custom":a(()=>[l(t.$slots,"aside-custom")]),default:a(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{S as default};
