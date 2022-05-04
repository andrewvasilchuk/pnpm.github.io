"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[470],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=t(2848),a=t(9213),o=(t(9496),t(9613)),r=["components"],l={id:"using-changesets",title:"Utilizzo di Changesets con pnpm"},s=void 0,c={unversionedId:"using-changesets",id:"using-changesets",title:"Utilizzo di Changesets con pnpm",description:"Al momento della stesura di questa documentazione, l'ultima versione di pnpm era la v6.14. L'ultima versione di Changesets \xe8 stata la v2.16.0.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/it/next/using-changesets",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"using-changesets",title:"Utilizzo di Changesets con pnpm"},sidebar:"docs",previous:{title:"Completamento tramite tab per la linea di comando",permalink:"/it/next/completion"},next:{title:"Integrazione continua",permalink:"/it/next/continuous-integration"}},p={},u=[{value:"Configurazione",id:"configurazione",level:2},{value:"Aggiunta di nuove modifiche",id:"aggiunta-di-nuove-modifiche",level:2},{value:"Rilascio delle modifiche",id:"rilascio-delle-modifiche",level:2},{value:"Utilizzo di Github Actions",id:"utilizzo-di-github-actions",level:2},{value:"Aumenta le versioni del pacchetto",id:"aumenta-le-versioni-del-pacchetto",level:3},{value:"Pubblicazione",id:"pubblicazione",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Al momento della stesura di questa documentazione, l'ultima versione di pnpm era la v6.14. L'ultima versione di ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \xe8 stata la v2.16.0."))),(0,o.kt)("h2",{id:"configurazione"},"Configurazione"),(0,o.kt)("p",null,"Per configurare i changeset su uno spazio di lavoro pnpm, installa Changesets come dipendenza di svuluppo nella radice dello spazio di lavoro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,o.kt)("p",null,"Quindi esegui il comando init di changesets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,o.kt)("h2",{id:"aggiunta-di-nuove-modifiche"},"Aggiunta di nuove modifiche"),(0,o.kt)("p",null,"Per generare un nuovo changeset, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," nella radice del repository. I file markdown generati nella directory ",(0,o.kt)("inlineCode",{parentName:"p"},".changeset")," dovrebbero essere aggiunti al repository."),(0,o.kt)("h2",{id:"rilascio-delle-modifiche"},"Rilascio delle modifiche"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm changeset versione"),". Ci\xf2 aumenter\xe0 le versioni dei pacchetti precedentemente specificati con ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (e tutti i dipendenti di questi) e aggiorner\xe0 i file del registro delle modifiche."),(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pmnpm install"),". Questo aggiorner\xe0 il file di blocco e ricostruir\xe0 i pacchetti."),(0,o.kt)("li",{parentName:"ol"},"Effettua un commit delle modifiche."),(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". Questo comando pubblicher\xe0 tutti i pacchetti che hanno versioni incrementate non ancora presenti nel registro.")),(0,o.kt)("h2",{id:"utilizzo-di-github-actions"},"Utilizzo di Github Actions"),(0,o.kt)("p",null,"Per automatizzare il processo, puoi utilizzare ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset version")," con GitHub Actions."),(0,o.kt)("h3",{id:"aumenta-le-versioni-del-pacchetto"},"Aumenta le versioni del pacchetto"),(0,o.kt)("p",null,"L'azione rilever\xe0 quando i file di changeset arrivano nel ramo ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", e aprir\xe0 una nuova PR che elenca tutti i pacchetti con versioni incrementate. Una volta unita, i pacchetti verranno aggiornati e potrai decidere se pubblicare o meno aggiungendo la propriet\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"publish"),"."),(0,o.kt)("h3",{id:"pubblicazione"},"Pubblicazione"),(0,o.kt)("p",null,"Aggiungendo ",(0,o.kt)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish")," che \xe8 uno script che esegue ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset publish")," verr\xe0 pubblicato nel registro una volta che la PR viene aperta da ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,o.kt)("p",null,"Maggiori informazioni e documentazione su questa azione sono disponibili ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"qui"),"."))}m.isMDXComponent=!0}}]);