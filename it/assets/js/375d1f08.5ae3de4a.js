"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6092],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=t(2848),i=t(9213),a=(t(9496),t(9613)),p=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},l=void 0,c={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"Questo comando \xe8 obsoleto! Utilizza invece pnpm exec e pnpm dlx.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/it/6.x/pnpx-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"CLI di pnpm",permalink:"/it/6.x/pnpm-cli"},next:{title:"Configurazione",permalink:"/it/6.x/configuring"}},u={},m=[{value:"Per i nuovi utenti",id:"per-i-nuovi-utenti",level:2},{value:"Per gli utenti npm",id:"per-gli-utenti-npm",level:2}],s={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Questo comando \xe8 obsoleto! Utilizza invece ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," e ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/dlx"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm dlx")),"."))),(0,a.kt)("h2",{id:"per-i-nuovi-utenti"},"Per i nuovi utenti"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \xe8 uno strumento da riga di comando che recupera un pacchetto dal registro senza installarlo come dipendenza, lo carica a caldo ed esegue qualsiasi comando binario predefinito che espone."),(0,a.kt)("p",null,"Ad esempio, per utilizzare ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," ovunque per avviare un'app react senza che debba installarla in un altro progetto, puoi eseguire:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"Questo recuperer\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," dal registro e lo eseguir\xe0 con gli argomenti forniti. Per ulteriori informazioni, potresti voler guardare ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," di npm, in quanto offre la stessa interfaccia, tranne che usa ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," invece di ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," sotto il cofano."),(0,a.kt)("p",null,"Se vuoi solo eseguire un binario della dipendenza di un progetto, vedi ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,a.kt)("h2",{id:"per-gli-utenti-npm"},"Per gli utenti npm"),(0,a.kt)("p",null,"npm ha un ottimo programma di esecuzione dei pacchetti chiamato ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offre lo stesso strumento tramite il comando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx"),". L'unica differenza \xe8 che ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," usa ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," per installare i pacchetti."))}d.isMDXComponent=!0}}]);