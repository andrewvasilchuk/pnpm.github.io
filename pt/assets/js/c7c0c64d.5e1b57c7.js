"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8482],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||p;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<p;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2848),r=n(9213),p=(n(9496),n(9613)),l=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-6.x/cli/update",title:"pnpm update",description:"Aliases: up",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/pt/6.x/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-6.x/docs",previous:{title:"pnpm install",permalink:"/pt/6.x/cli/install"},next:{title:"pnpm remove",permalink:"/pt/6.x/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Aliases: ",(0,p.kt)("inlineCode",{parentName:"p"},"up")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,p.kt)("p",null,"When used without arguments, updates all dependencies. You can use patterns to update specific dependencies."),(0,p.kt)("h2",{id:"tldr"},"TL;DR"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Command"),(0,p.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"Updates ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,p.kt)("p",null,"Usage examples:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"Added in: v3.2.0"),(0,p.kt)("p",null,"Ignores the version range specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,p.kt)("h3",{id:"--global"},"--global"),(0,p.kt)("p",null,"Update global packages."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"Added in: v4.4.0"),(0,p.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,p.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Don't update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"Added in: v4.8.0"),(0,p.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pt/6.x/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);