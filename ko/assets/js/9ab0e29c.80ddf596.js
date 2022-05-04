"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7410],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(2848),o=n(9213),a=(n(9496),n(9613)),p=["components"],i={id:"store",title:"pnpm store"},l=void 0,s={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"\ud328\ud0a4\uc9c0 \uc2a4\ud1a0\uc5b4\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ko/6.x/cli/store",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/ko/6.x/cli/server"},next:{title:"pnpm root",permalink:"/ko/6.x/cli/root"}},c={},u=[{value:"Commands",id:"commands",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0 \uc2a4\ud1a0\uc5b4\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc218\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0\uc758 \ub0b4\uc6a9\uc774 \uc5b8\ud329\ud0b9\ud55c \uc2dc\uc810\uacfc \ub3d9\uc77c\ud558\ub2e4\uba74 \uc885\ub8cc \ucf54\ub4dc 0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\ubc84\uc804 2.12.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\uae30\ub2a5\uc801\uc73c\ub85c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\uc640 \ub3d9\uc77c\ud558\uc9c0\ub9cc \uc2a4\ud1a0\uc5b4 \uc678\ubd80\uc758 \ud504\ub85c\uc81d\ud2b8\ub098 \ud30c\uc77c\uc744 \uc218\uc815\ud558\uc9c0 \uc54a\uace0 \uc0c8 \ud328\ud0a4\uc9c0\ub97c \uc2a4\ud1a0\uc5b4\uc5d0 \uc9c1\uc811 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"\uc2a4\ud1a0\uc5b4\uc5d0\uc11c ",(0,a.kt)("em",{parentName:"p"},"\ucc38\uc870\ub418\uc9c0 \uc54a\uc740 \ud328\ud0a4\uc9c0"),"\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,a.kt)("p",null,"For example, during ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,a.kt)("p",null,"It is best practice to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,a.kt)("p",null,"\uc774 \uba85\ub839\uc740 ",(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/cli/server"},"store server"),"\uac00 \uc2e4\ud589 \uc911\uc77c \ub54c \uae08\uc9c0\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\ubc84\uc804 6.10.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\ud65c\uc131 \uc800\uc7a5\uc18c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub300\ud55c \uacbd\ub85c\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);