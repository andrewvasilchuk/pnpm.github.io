"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9493],{9613:(e,i,n)=>{n.d(i,{Zo:()=>m,kt:()=>d});var t=n(9496);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function o(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var i=t.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},m=function(e){var i=c(e.components);return t.createElement(p.Provider,{value:i},e.children)},s={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,v=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return n?t.createElement(v,a(a({ref:i},m),{},{components:n})):t.createElement(v,a({ref:i},m))}));function d(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in i)hasOwnProperty.call(i,p)&&(o[p]=i[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5474:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(2848),r=n(9213),l=(n(9496),n(9613)),a=["components"],o={id:"uninstall",title:"Disinstallazione di pnpm"},p=void 0,c={unversionedId:"uninstall",id:"uninstall",title:"Disinstallazione di pnpm",description:"Rimozione dei pacchetti installati a livello globale",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/it/next/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"uninstall",title:"Disinstallazione di pnpm"},sidebar:"docs",previous:{title:"Come vengono risolti i peer",permalink:"/it/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/it/next/pnpm-vs-npm"}},m={},s=[{value:"Rimozione dei pacchetti installati a livello globale",id:"rimozione-dei-pacchetti-installati-a-livello-globale",level:2},{value:"Rimozione della CLI di pnpm",id:"rimozione-della-cli-di-pnpm",level:2},{value:"Rimozione dell&#39;archivio globale indirizzabile ai contenuti",id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti",level:2}],u={toc:s};function d(e){var i=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"rimozione-dei-pacchetti-installati-a-livello-globale"},"Rimozione dei pacchetti installati a livello globale"),(0,l.kt)("p",null,"Prima di rimuovere la CLI di pnpm, potrebbe avere senso rimuovere tutti i pacchetti globali installati da pnpm."),(0,l.kt)("p",null,"Per elencare tutti i pacchetti globali, esegui ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Esistono due modi per rimuovere i pacchetti globali:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Esegui ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con ogni pacchetto globale elencato."),(0,l.kt)("li",{parentName:"ol"},"Esegui ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," per trovare la posizione della cartella globale e rimuoverla manualmente.")),(0,l.kt)("h2",{id:"rimozione-della-cli-di-pnpm"},"Rimozione della CLI di pnpm"),(0,l.kt)("p",null,"Se hai utilizzato lo script autonomo per installare pnpm, dovresti essere in grado di disinstallare la CLI di pnpm rimuovendo la cartella home di pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,l.kt)("p",null,"Potresti anche voler pulire la variabile ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env nel tuo file di configurazione della shell (",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/. ashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," o ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,l.kt)("p",null,"Se hai usato npm per installare pnpm, allora dovresti usare npm per disinstallare pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti"},"Rimozione dell'archivio globale indirizzabile ai contenuti"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,l.kt)("p",null,"Se hai utilizzato pnpm in dischi non primari, devi eseguire il comando precedente in ogni disco in cui \xe8 stato utilizzato pnpm. pnpm crea un archivio per disco."))}d.isMDXComponent=!0}}]);