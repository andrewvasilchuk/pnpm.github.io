"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7637],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(2848),r=n(9213),o=(n(9496),n(9613)),l=["components"],p={title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,u={permalink:"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/ko",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",description:"nodemodules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c nodemodules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\ub144 10\uc6d4 17\uc77c",tags:[],readingTime:3.78,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm\uc758 2021\ub144",permalink:"/ko/blog/2021/12/29/yearly-update"},nextItem:{title:"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.",permalink:"/ko/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c={authorsImageUrls:[void 0]},m=[{value:"\uae30\ubcf8 \uc124\uc815",id:"\uae30\ubcf8-\uc124\uc815",level:2},{value:"Plug&#39;n&#39;Play. \uac00\uc7a5 \uc5c4\uaca9\ud55c \uad6c\uc131",id:"plugnplay-\uac00\uc7a5-\uc5c4\uaca9\ud55c-\uad6c\uc131",level:2},{value:"\uc5c4\uaca9\ud558\uace0 \uc804\ud1b5\uc801\uc778 \ubaa8\ub4c8 \ub514\ub809\ud1a0\ub9ac",id:"\uc5c4\uaca9\ud558\uace0-\uc804\ud1b5\uc801\uc778-\ubaa8\ub4c8-\ub514\ub809\ud1a0\ub9ac",level:2},{value:"\ucd5c\uc545\uc758 \uacbd\uc6b0 - \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305",id:"\ucd5c\uc545\uc758-\uacbd\uc6b0---\ub8e8\ud2b8\ub85c-\ud638\uc774\uc2a4\ud305",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"node_modules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c node_modules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uae30\ubcf8-\uc124\uc815"},"\uae30\ubcf8 \uc124\uc815"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c pnpm v5\ub294 \ubc18\ub9cc \uc5c4\uaca9\ud55c node_modules\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ubc18\ub9cc \uc5c4\uaca9\ud558\ub2e4\ub294 \uac83\uc740 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uc758\uc874\uc131\uc73c\ub85c \ucd94\uac00\ub41c \ud328\ud0a4\uc9c0\ub9cc \uc694\uad6c\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4 (\uba87 \uac00\uc9c0 \uc608\uc678\ub294 \uc81c\uc678). \uadf8\ub7ec\ub098 \uc5ec\ub7ec\ubd84\uc758 \uc758\uc874\uc131\uc740 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uae30\ubcf8 \uad6c\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub294  node_modules/.pnpm/node_modules\uc5d0 \ud638\uc774\uc2a4\ud305\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\nhoist-pattern[]=*\n\n; \ubaa8\ub4e0 \ud0c0\uc785\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud589\ubcf5\ud558\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\npublic-hoist-pattern[]=*types*\n\n; \ubaa8\ub4e0 ESLint\uc640 \uad00\ub828\ub41c \ud328\ud0a4\uc9c0\ub294 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ud638\uc774\uc2a4\ud305 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"plugnplay-\uac00\uc7a5-\uc5c4\uaca9\ud55c-\uad6c\uc131"},"Plug'n'Play. \uac00\uc7a5 \uc5c4\uaca9\ud55c \uad6c\uc131"),(0,o.kt)("p",null,"pnpm\uc740 v5.9 \ubd80\ud130 ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn\uc758 Plug'n ' Play")," \ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. PnP\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc758\uc874\uc131\uc774 \uc120\uc5b8\ub41c \uc758\uc874\uc131\uc5d0\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 monorepo \ub0b4\ubd80\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub8e8\ud2b8 \ud504\ub85c\uc81d\ud2b8\uc758 \uc758\uc874\uc131\uc5d0\ub3c4 \uc811\uadfc\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist=false")," \ub85c \uc124\uc815\ud558\ub294 \uac83\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \uc5c4\uaca9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"Plug'n'Play\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ub2e4\uc74c \uc124\uc815\uc744 \uc124\uc815\ud558\uc138\uc694."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"\uc5c4\uaca9\ud558\uace0-\uc804\ud1b5\uc801\uc778-\ubaa8\ub4c8-\ub514\ub809\ud1a0\ub9ac"},"\uc5c4\uaca9\ud558\uace0 \uc804\ud1b5\uc801\uc778 \ubaa8\ub4c8 \ub514\ub809\ud1a0\ub9ac"),(0,o.kt)("p",null,"\uc544\uc9c1 PnP\ub97c \uc0ac\uc6a9\ud560 \uc900\ube44\uac00 \ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub3c4 \uc5ec\uc804\ud788 \uc5c4\uaca9\ud560 \uc218 \uc788\uc73c\uba70 \ud638\uc774\uc2a4\ud305 \uad6c\uc131\uc744 false\ub85c \uc124\uc815\ud558\uc5ec \ud328\ud0a4\uc9c0\uac00 \uc790\uccb4 \uc758\uc874\uc131\uc5d0\ub9cc \uc811\uadfc\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"\uadf8\ub7ec\ub098 \uc758\uc874\uc131 \uc911 \uc77c\ubd80\uac00 \uadf8\ub4e4\uc758 \uc758\uc874\uc131\uc5d0 \uc5c6\ub294 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud558\ub824\uace0 \ud558\ub294 \uacbd\uc6b0 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),"\ub97c \ub9cc\ub4e4\uace0 ",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 \ub204\ub77d\ub41c \uc758\uc874\uc131\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," \uc124\uc815\uc5d0 \ud328\ud134\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uadf8 \ucc3e\uc744 \uc218 \uc5c6\ub294 \ubaa8\ub4c8\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core"),"\uc774\uba74, \ub2e4\uc74c \uc124\uc815\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"\ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"\ucd5c\uc545\uc758-\uacbd\uc6b0---\ub8e8\ud2b8\ub85c-\ud638\uc774\uc2a4\ud305"},"\ucd5c\uc545\uc758 \uacbd\uc6b0 - \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305"),(0,o.kt)("p",null,"\uc77c\ubd80 \ub3c4\uad6c\ub294 \ubaa8\ub4e0 \uac83\uc744 \uac00\uc0c1 \uc800\uc7a5\uc18c\uc758 \ub8e8\ud2b8\uc5d0 \ud638\uc774\uc2a4\ud305\ud558\uace0 \uc77c\ubd80 \ud328\ud0a4\uc9c0\ub97c \ub8e8\ud2b8\uc5d0 \ud638\uc774\uc2a4\ud305\ud558\ub294 pnpm\uc758 \uae30\ubcf8 \uad6c\uc131\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \ubaa8\ub4e0 \ud56d\ubaa9 \ub610\ub294 \uc758\uc874\uc131\uc758 \ud558\uc704 \uc9d1\ud569\uc744 \ubaa8\ub4c8 \ub514\ub809\ud130\ub9ac\uc758 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubaa8\ub4e0 \ud56d\ubaa9\uc744 node_modules\uc758 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ud558\uae30:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"\ud328\ud134\uacfc \uc77c\uce58\ud558\ub294 \ud328\ud0a4\uc9c0\ub9cc \ud638\uc774\uc2a4\ud305\ud558\uae30:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);