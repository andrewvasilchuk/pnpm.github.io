"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9326],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=a(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var a=2;a<o;a++)p[a]=r[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=r(2848),i=r(9213),o=(r(9496),r(9613)),p=["components"],c={id:"scripts",title:"Scripts"},l=void 0,a={unversionedId:"scripts",id:"version-7.x/scripts",title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/tr/scripts",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-7.x/docs",previous:{title:"Filtreleme",permalink:"/tr/filtering"},next:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/cli/add"}},s={},u=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How pnpm handles the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,o.kt)("h3",{id:"pnpmdevpreinstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,o.kt)("p",null,"Runs only on local ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,o.kt)("p",null,"Runs before any dependency is installed."),(0,o.kt)("p",null,"This script is executed only when set in the root project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}f.isMDXComponent=!0}}]);