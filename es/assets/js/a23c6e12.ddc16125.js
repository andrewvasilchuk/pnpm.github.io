"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3720],{9613:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var o=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=o.createContext({}),l=function(e){var n=o.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=t,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(v,i(i({ref:n},c),{},{components:a})):o.createElement(v,i({ref:n},c))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3277:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=a(2848),t=a(9213),r=(a(9496),a(9613)),i=["components"],s={id:"motivation",title:"Motivaci\xf3n"},d=void 0,l={unversionedId:"motivation",id:"version-7.x/motivation",title:"Motivaci\xf3n",description:"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/es/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"motivation",title:"Motivaci\xf3n"},sidebar:"version-7.x/docs",next:{title:"Instalaci\xf3n",permalink:"/es/installation"}},c={},p=[{value:"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n",id:"ahorrando-espacio-de-disco-duro-y-aumento-de-la-velocidad-de-instalaci\xf3n",level:2},{value:"Creando un directorio non-flat node_modules",id:"creando-un-directorio-non-flat-node_modules",level:2}],u={toc:p};function m(e){var n=e.components,s=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ahorrando-espacio-de-disco-duro-y-aumento-de-la-velocidad-de-instalaci\xf3n"},"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,r.kt)("img",{src:a(4777).Z,width:"2500",height:"1406"}))),(0,r.kt)("p",null,"Cuando usamos npm o Yarn, si tienes 100 proyectos usando una dependencia, vas a instalar 100 copias de esa dependencia guardadas en tu disco. Con pnpm, esa dependencia sera almacenada en un almacenamiento compartido, as\xed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Si dependes de diferentes versiones de una dependencia, solo los archivos que difieren ser\xe1n agregados al almacenamiento. Por ejemplo, si tiene 100 archivos, y una nueva version ha cambiado un solo de esos archivos, ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," solo actualizar\xe1 1 nuevo archivo en el almacenamiento, en vez de clonar toda la dependencia solo para un cambio en particular."),(0,r.kt)("li",{parentName:"ol"},"Todos los archivos son guardados en un solo lugar del disco duro. Cuando los paquetes que son instalados, sus archivos son hard-linked a un solo lugar, sin consumir espacio adicional en su disco duro. Esto te permitir\xe1 compartir tus dependencias de la misma version en diferentes proyectos.")),(0,r.kt)("p",null,"Como resultado, usted ahorra un mont\xf3n de espacio en su disco duro proporcional al numero de proyectos y dependencias, y tu disfrutaras de instalaciones mas r\xe1pidas!"),(0,r.kt)("h2",{id:"creando-un-directorio-non-flat-node_modules"},"Creando un directorio non-flat node_modules"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,r.kt)("img",{src:a(5836).Z,width:"2920",height:"1392"}))),(0,r.kt)("p",null,"Al instalar dependencias con npm o Yarn Classic, todos los paquetes se elevan a la ra\xedz del directorio de m\xf3dulos. Como resultado, el c\xf3digo fuente tiene acceso a las dependencias que no son agregadas como dependencias en el proyecto."),(0,r.kt)("p",null,"Por defecto, pnpm utiliza enlaces simb\xf3licos para a\xf1adir s\xf3lo las dependencias directas del proyecto en la ra\xedz del directorio de m\xf3dulos. Si desea obtener mas detalles sobre la estructura \xfanica de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm crea y porque funciona bien en el ecosistema de Node.js, lea:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/es/symlinked-node-modules-structure"},"Symlinked node_modules structure"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Si su herramienta no funciona bien con enlaces simb\xf3licos, a\xfan puede usar pnpm y establecer la configuraci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"hoisted"),". Esto le indicar\xe1 a pnpm que cree un directorio node_modules similar a los creados por npm y Yarn Classic."))))}m.isMDXComponent=!0},4777:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},5836:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);