"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9270],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(2848),i=n(9213),o=(n(9496),n(9613)),p=["components"],a={id:"setup",title:"pnpm setup"},l=void 0,c={unversionedId:"cli/setup",id:"version-7.x/cli/setup",title:"pnpm setup",description:"This command is used by the standalone installation scripts of pnpm. For instance, in .",source:"@site/versioned_docs/version-7.x/cli/setup.md",sourceDirName:"cli",slug:"/cli/setup",permalink:"/cli/setup",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/setup.md",tags:[],version:"7.x",frontMatter:{id:"setup",title:"pnpm setup"},sidebar:"version-7.x/docs",previous:{title:"pnpm bin",permalink:"/cli/bin"},next:{title:"pnpm init",permalink:"/cli/init"}},s={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command is used by the standalone installation scripts of pnpm. For instance, in ",(0,o.kt)("a",{parentName:"p",href:"https://get.pnpm.io/install.sh"},"https://get.pnpm.io/install.sh"),"."),(0,o.kt)("p",null,"Setup does the following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creates a home directory for the pnpm CLI"),(0,o.kt)("li",{parentName:"ul"},"adds the pnpm home directory to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")," by updating the shell configuration file"),(0,o.kt)("li",{parentName:"ul"},"copies the pnpm executable to the pnpm home directory")))}f.isMDXComponent=!0}}]);