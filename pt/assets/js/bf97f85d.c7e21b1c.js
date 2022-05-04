"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2562],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2383:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var t=n(2848),o=n(9213),a=(n(9496),n(9613)),i=["components"],p={id:"configuring",title:"Configurando"},c=void 0,s={unversionedId:"configuring",id:"version-6.x/configuring",title:"Configurando",description:"pnpm usa formatos de configura\xe7\xe3o do npm. Portanto, voc\xea deve definir a configura\xe7\xe3o da mesma forma que faria para o npm. Por exemplo,",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/pt/6.x/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"configuring",title:"Configurando"},sidebar:"version-6.x/docs",previous:{title:"pnpx CLI",permalink:"/pt/6.x/pnpx-cli"},next:{title:"Filtragem",permalink:"/pt/6.x/filtering"}},u={},m=[],l={toc:m};function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm usa ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"formatos de configura\xe7\xe3o do npm"),". Portanto, voc\xea deve definir a configura\xe7\xe3o da mesma forma que faria para o npm. Por exemplo,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,a.kt)("p",null,"Se nenhuma loja estiver configurada, o pnpm criar\xe1 automaticamente uma loja na mesma unidade de armazenamento. Se voc\xea precisa que o pnpm funcione em v\xe1rios discos r\xedgidos ou sistemas de arquivos, leia as ",(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"perguntas frequentes"),"."),(0,a.kt)("p",null,"Al\xe9m disso, o pnpm usa a mesma configura\xe7\xe3o que o npm usa para fazer instala\xe7\xf5es. Se voc\xea tiver um registro privado e o npm estiver configurado para trabalhar com ele, o pnpm dever\xe1 ser capaz de autorizar solicita\xe7\xf5es tamb\xe9m, sem nenhuma configura\xe7\xe3o adicional."),(0,a.kt)("p",null,"Al\xe9m dessas op\xe7\xf5es, o pnpm tamb\xe9m permite que voc\xea use todos os par\xe2metros que s\xe3o flags (por exemplo ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") como op\xe7\xf5es:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,a.kt)("p",null,"Veja o ",(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/cli/config"},"comando ",(0,a.kt)("inlineCode",{parentName:"a"},"config"))," para mais informa\xe7\xf5es."))}f.isMDXComponent=!0}}]);