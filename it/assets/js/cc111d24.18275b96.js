"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6718],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2848),i=n(9213),o=(n(9496),n(9613)),l=["components"],a={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-6.x/cli/unlink",title:"pnpm unlink",description:"Scollega un pacchetto a livello di sistema (operazione inversa di pnpm link).",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/it/6.x/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-6.x/docs",previous:{title:"pnpm link",permalink:"/it/6.x/cli/link"},next:{title:"pnpm import",permalink:"/it/6.x/cli/import"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scollega un pacchetto a livello di sistema (operazione inversa di ",(0,o.kt)("a",{parentName:"p",href:"/it/6.x/cli/link"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,o.kt)("p",null,"Se chiamato senza parametri, tutte le dipendenze collegate verranno scollegate."),(0,o.kt)("p",null,"\xc8 simile a ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", anche se pnpm reinstalla le dipendenze dopo aver rimosso i link esterni."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Esegue lo scollegamento in ogni pacchetto trovato nelle sottocartelle o in ogni pacchetto all'interno dello spazio di lavoro, se eseguito in uno ",(0,o.kt)("a",{parentName:"p",href:"/it/6.x/workspaces"},"spazio di lavoro"),"."),(0,o.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/6.x/filtering"},"Ulteriori informazioni sui filtri.")))}f.isMDXComponent=!0}}]);