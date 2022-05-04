"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[119],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(2848),a=n(9213),o=(n(9496),n(9613)),p=["components"],l={id:"dlx",title:"pnpm dlx"},c=void 0,i={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"Busca um pacote do registro sem instala-lo como uma depend\xeancia e executa qualquer comando padr\xe3o que o bin\xe1rio exp\xf5e.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/pt/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/pt/cli/exec"},next:{title:"pnpm create",permalink:"/pt/cli/create"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--package &lt;name&gt;",id:"--package-name",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Busca um pacote do registro sem instala-lo como uma depend\xeancia e executa qualquer comando padr\xe3o que o bin\xe1rio exp\xf5e."),(0,o.kt)("p",null,"For example, to use ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,o.kt)("p",null,"Isso ira buscar ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," no registro e execut\xe1-lo com os argumentos fornecidos."),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode especificar qual vers\xe3o exata do pacote voc\xea gostaria de usar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,o.kt)("p",null,"O pacote a ser instalado antes de executar o comando."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,o.kt)("p",null,"V\xe1rios pacotes podem ser fornecidos para instala\xe7\xe3o:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,o.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,o.kt)("p",null,"Apenas a sa\xedda do comando executado \xe9 exibida."))}m.isMDXComponent=!0}}]);