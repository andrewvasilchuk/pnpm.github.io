"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1868],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||p;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=s;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var r=t(2848),o=t(9213),p=(t(9496),t(9613)),i=["components"],c={id:"configuring",title:"\uc124\uc815"},a=void 0,l={unversionedId:"configuring",id:"configuring",title:"\uc124\uc815",description:"pnpm\uc740 npm\uc758 \uc124\uc815 \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c npm\uacfc \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\uc744 \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\uc2dc,",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/ko/next/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"configuring",title:"\uc124\uc815"},sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/ko/next/pnpm-cli"},next:{title:"\ud544\ud130\ub9c1",permalink:"/ko/next/filtering"}},u={},m=[],s={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm\uc740 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm\uc758 \uc124\uc815")," \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c npm\uacfc \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\uc744 \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\uc2dc,"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,p.kt)("p",null,"\uc800\uc7a5\uc18c\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74, pnpm\uc740 \ub4dc\ub77c\uc774\ube0c \ub0b4\uc5d0 \uc800\uc7a5\uc18c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. pnpm\uc744 \uc5ec\ub7ec \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c \ub610\ub294 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0\uc790 \ud55c\ub2e4\uba74 ",(0,p.kt)("a",{parentName:"p",href:"/ko/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,p.kt)("p",null,"\ub610\ud55c \uc124\uce58\ub97c \uc9c4\ud589\ud558\ub294 \uacfc\uc815\uc5d0\uc11c pnpm\uc740 npm\uacfc \ub3d9\uc77c\ud55c \uc124\uc815\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. npm\uc758 private registry\uac00 \uc124\uc815\ub418\uc5b4 \uc788\ub2e4\uba74, pnpm\uc740 \ucd94\uac00 \uc124\uc815\uc5c6\uc774 \uc774\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ub7ec\ud55c \uc635\uc158 \uc678\uc5d0\ub3c4 pnpm\uc740 flag\ub85c \uc0ac\uc6a9\ub418\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),"\uc640 \uac19\uc740 \ud30c\ub77c\ubbf8\ud130\ub97c \uc635\uc158\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,p.kt)("p",null,"\ub354 \ub9ce\uc740 \uc815\ubcf4\ub294 ",(0,p.kt)("a",{parentName:"p",href:"/ko/next/cli/config"},(0,p.kt)("inlineCode",{parentName:"a"},"config")," command"),"\ub97c \ucc38\uace0 \ud558\uc2ed\uc2dc\uc624."))}f.isMDXComponent=!0}}]);