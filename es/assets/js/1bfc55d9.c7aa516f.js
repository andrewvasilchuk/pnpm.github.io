"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1612],{9613:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2077:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(2848),a=n(9213),l=(n(9496),n(9613)),i=["components"],o={id:"feature-comparison",title:"Feature Comparison"},p=void 0,d={unversionedId:"feature-comparison",id:"version-6.x/feature-comparison",title:"Feature Comparison",description:"| Feature                     | pnpm                  | Yarn                 | npm                      |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/feature-comparison.md",sourceDirName:".",slug:"/feature-comparison",permalink:"/es/6.x/feature-comparison",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"feature-comparison",title:"Feature Comparison"},sidebar:"version-6.x/docs",previous:{title:"Trabajando con Git",permalink:"/es/6.x/git"},next:{title:"Error Codes",permalink:"/es/6.x/errors"}},m={},u=[],c={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Workspace support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Isolated ",(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hoisted ",(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plug'n'Play"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zero-Installs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Patching dependencies"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Managing Node.js versions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Has a lockfile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn.lock")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"package-lock.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overrides support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via resolutions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content-addressable storage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic package execution"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"npx"))))))}s.isMDXComponent=!0}}]);