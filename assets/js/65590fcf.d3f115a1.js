"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4225],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(g,a(a({ref:n},m),{},{components:t})):r.createElement(g,a({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(2848),l=t(9213),o=(t(9496),t(9613)),a=["components"],i={id:"uninstall",title:"Uninstalling pnpm"},p=void 0,s={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"Uninstalling pnpm",description:"Removing the globally installed packages",source:"@site/versioned_docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/uninstall",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/uninstall.md",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"Uninstalling pnpm"},sidebar:"version-7.x/docs",previous:{title:"How peers are resolved",permalink:"/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/pnpm-vs-npm"}},m={},c=[{value:"Removing the globally installed packages",id:"removing-the-globally-installed-packages",level:2},{value:"Removing the pnpm CLI",id:"removing-the-pnpm-cli",level:2},{value:"Removing the global content-addressable store",id:"removing-the-global-content-addressable-store",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"removing-the-globally-installed-packages"},"Removing the globally installed packages"),(0,o.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,o.kt)("p",null,"To list all the global packages, run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". There are two ways to remove the global packages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," with each global package listed."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," to find the location of the global directory and remove it manually.")),(0,o.kt)("h2",{id:"removing-the-pnpm-cli"},"Removing the pnpm CLI"),(0,o.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,o.kt)("p",null,"You might also want to clean the ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,o.kt)("p",null,"If you used npm to install pnpm, then you should use npm to uninstall pnpm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,o.kt)("h2",{id:"removing-the-global-content-addressable-store"},"Removing the global content-addressable store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,o.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used.\npnpm creates one store per disk."))}d.isMDXComponent=!0}}]);