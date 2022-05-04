"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8583],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),p=["components"],o={id:"installation",title:"\uc124\uce58\ud558\uae30"},i=void 0,m={unversionedId:"installation",id:"version-7.x/installation",title:"\uc124\uce58\ud558\uae30",description:"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ko/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\uc124\uce58\ud558\uae30"},sidebar:"version-7.x/docs",previous:{title:"\ub3d9\uae30",permalink:"/ko/motivation"},next:{title:"pnpm CLI",permalink:"/ko/pnpm-cli"}},s={},u=[{value:"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30",id:"\ub3c5\ub9bd\ud615-\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Corepack \uc0ac\uc6a9\ud558\uae30",id:"corepack-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"npm \uc0ac\uc6a9\ud558\uae30",id:"npm-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Homebrew \uc0ac\uc6a9\ud558\uae30",id:"homebrew-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Scoop \uc0ac\uc6a9\ud558\uae30",id:"scoop-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"pnpm \uc0ad\uc81c",id:"pnpm-\uc0ad\uc81c",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ub3c5\ub9bd\ud615-\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9\ud558\uae30"},"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 Node.js\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc544\ub798 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"curl\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 wget\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\uc708\ub3c4\uc6b0 (PowerShell)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,"\uadf8 \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"/ko/cli/env"},"pnpm env")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 Node.js\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"corepack-\uc0ac\uc6a9\ud558\uae30"},"Corepack \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"v16.13\ubd80\ud130 Node.js\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc2e4\ud5d8\uc801\uc778 \uae30\ub2a5\uc774\ubbc0\ub85c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc5ec \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc2dc\uc2a4\ud15c\uc5d0 pnpm\uc774 \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc544\ub9c8\ub3c4 \ucd5c\uc2e0 \ubc84\uc804\uc758 pnpm\uc774 \uc544\ub2d0 \uac83\uc785\ub2c8\ub2e4. \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub824\uba74 \ucd5c\uc2e0 pnpm \ubc84\uc804\uc744 \ud655\uc778\ud558\uace0 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@7.0.0 --activate\n")),(0,l.kt)("h2",{id:"npm-\uc0ac\uc6a9\ud558\uae30"},"npm \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"homebrew-\uc0ac\uc6a9\ud558\uae30"},"Homebrew \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"\ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0 \uc544\ub798 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"scoop-\uc0ac\uc6a9\ud558\uae30"},"Scoop \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"Scoop\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc73c\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,l.kt)("a",{parentName:"p",href:"/ko/continuous-integration"},"Continuous Integration"),"."))),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,l.kt)("p",null,"Let's assume you have the following error when running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,l.kt)("h2",{id:"pnpm-\uc0ad\uc81c"},"pnpm \uc0ad\uc81c"),(0,l.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0\uc11c pnpm CLI\ub97c \uc81c\uac70\ud558\uace0 \ub514\uc2a4\ud06c\uc5d0 \uae30\ub85d\ud55c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc81c\uac70\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"/ko/uninstall"},"pnpm \uc81c\uac70"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}c.isMDXComponent=!0}}]);