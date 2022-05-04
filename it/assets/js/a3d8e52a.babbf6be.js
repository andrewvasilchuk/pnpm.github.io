"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3291],{9613:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var t=n(9496);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(g,r(r({ref:a},s),{},{components:n})):t.createElement(g,r({ref:a},s))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2319:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(2848),o=n(9213),i=(n(9496),n(9613)),r=["components"],l={title:"Opzioni di configurazione di Node-Modules con pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,c={permalink:"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/it",source:"@site/i18n/it/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Opzioni di configurazione di Node-Modules con pnpm",description:"Esistono molti modi per creare una cartella nodemodules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella nodemodules sciolta.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 ottobre 2020",tags:[],readingTime:1.855,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Opzioni di configurazione di Node-Modules con pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"L'anno 2021 per pnpm",permalink:"/it/blog/2021/12/29/yearly-update"},nextItem:{title:"La node_modules flat non \xe8 l'unico modo",permalink:"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},s={authorsImageUrls:[void 0]},u=[{value:"Configurazione predefinita",id:"configurazione-predefinita",level:2},{value:"Plug&#39;n&#39;Play. La configurazione pi\xf9 rigorosa",id:"plugnplay-la-configurazione-pi\xf9-rigorosa",level:2},{value:"Una cartella di moduli rigorosa e tradizionale",id:"una-cartella-di-moduli-rigorosa-e-tradizionale",level:2},{value:"Il caso peggiore - installazione alla radice",id:"il-caso-peggiore---installazione-alla-radice",level:2}],d={toc:u};function m(e){var a=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Esistono molti modi per creare una cartella node_modules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella node_modules sciolta."),(0,i.kt)("h2",{id:"configurazione-predefinita"},"Configurazione predefinita"),(0,i.kt)("p",null,"Per impostazione predefinita, pnpm v5 crea una cartella node_modules semi-rigorosa. Semi-rigorosa significa che la tua applicazione sar\xe0 in grado di utilizzare solo i pacchetti che sono stati aggiunti come dipendenze in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," (con alcune eccezioni). Tuttavia, le tue dipendenze saranno in grado di accedere a qualsiasi pacchetto."),(0,i.kt)("p",null,"La configurazione predefinita \xe8 simile a questa:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"; Tutti i pacchetti vengono installati in node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; Tutti i tipi vengono installati alla radice per rendere felice TypeScript\npublic-hoist-pattern[]=*types*\n\n; Tutti i pacchetti relativi a ESLint vengono installati alla radice anch'essi\npublic-hoist-pattern[]=*eslint*\n")),(0,i.kt)("h2",{id:"plugnplay-la-configurazione-pi\xf9-rigorosa"},"Plug'n'Play. La configurazione pi\xf9 rigorosa"),(0,i.kt)("p",null,"pnpm supporta il ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Plug'n'Play di Yarn")," dalla versione v5.9. Con PnP, sia la tua applicazione che le dipendenze della tua applicazione avranno accesso solo alle loro dipendenze dichiarate. Questo \xe8 ancora pi\xf9 rigoroso dell'impostazione ",(0,i.kt)("inlineCode",{parentName:"p"},"hoist=false")," perch\xe9 all'interno di un monorepo, la tua applicazione non sar\xe0 in grado di accedere nemmeno alle dipendenze del progetto root."),(0,i.kt)("p",null,"Per utilizzare Plug'n'Play, imposta queste impostazioni:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,i.kt)("h2",{id:"una-cartella-di-moduli-rigorosa-e-tradizionale"},"Una cartella di moduli rigorosa e tradizionale"),(0,i.kt)("p",null,"Se non sei ancora pronto per utilizzare PnP, puoi comunque essere rigoroso e consentire solo ai pacchetti di accedere alle proprie dipendenze impostando la configurazione dell'hoist su false:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,i.kt)("p",null,"Tuttavia, se alcune delle tue dipendenze stanno tentando di accedere a pacchetti che non hanno nelle dipendenze, hai due opzioni:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Crea un ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," e usa un ",(0,i.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," per aggiungere la dipendenza mancante al manifest del pacchetto.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Aggiungi un modello all'impostazione ",(0,i.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),". Ad esempio, se il modulo non trovato \xe8 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-core"),", aggiungi la seguente impostazione a ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,i.kt)("h2",{id:"il-caso-peggiore---installazione-alla-radice"},"Il caso peggiore - installazione alla radice"),(0,i.kt)("p",null,"Alcuni strumenti potrebbero non funzionare anche con la configurazione predefinita di pnpm, che installa tutto alla radice dell'archivio virtuale e alcuni pacchetti alla radice. In questo caso, puoi installare tutto o un sottoinsieme di dipendenze alla radice della cartella dei moduli."),(0,i.kt)("p",null,"Installa tutto alla radice di node_modules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,i.kt)("p",null,"Installa solo i pacchetti che corrispondono a un modello:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}m.isMDXComponent=!0}}]);