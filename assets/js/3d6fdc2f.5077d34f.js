"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4869],{9613:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3070:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(2848),o=n(9213),p=(n(9496),n(9613)),a=["components"],i={id:"errors",title:"Error Codes"},s=void 0,l={unversionedId:"errors",id:"version-7.x/errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/versioned_docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/errors",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/errors.md",tags:[],version:"7.x",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"version-7.x/docs",previous:{title:"Feature Comparison",permalink:"/feature-comparison"},next:{title:"Logos",permalink:"/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2}],u={toc:d};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,p.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,p.kt)("p",null,"If you changed the store directory intentionally, run ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,p.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,p.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,p.kt)("p",null,"For instance, package ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"However, there is only ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,p.kt)("p",null,"To fix this error, all dependencies that use the ",(0,p.kt)("a",{parentName:"p",href:"/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."),(0,p.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail if the project has unresolved peer dependencies or the peer dependencies are not matching the wanted ranges. To fix this, install the missing peer dependencies."),(0,p.kt)("p",null,"You may also selectively ignore these errors using the ",(0,p.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," and ",(0,p.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," fields in ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}m.isMDXComponent=!0}}]);