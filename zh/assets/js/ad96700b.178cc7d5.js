"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1127],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=p,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function m(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6897:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(2848),p=r(9213),o=(r(9496),r(9613)),a=["components"],i={id:"errors",title:"\u9519\u8bef\u7801"},l=void 0,s={unversionedId:"errors",id:"version-7.x/errors",title:"\u9519\u8bef\u7801",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/zh/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"errors",title:"\u9519\u8bef\u7801"},sidebar:"version-7.x/docs",previous:{title:"\u529f\u80fd\u6bd4\u8f83",permalink:"/zh/feature-comparison"},next:{title:"\u6807\u5fd7",permalink:"/zh/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2}],d={toc:u};function m(e){var n=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"\u5b58\u5728\u6a21\u5757\u76ee\u5f55\u5e76\u94fe\u63a5\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u610f\u66f4\u6539\u4e86\u5b58\u50a8\u76ee\u5f55\uff0c\u8bf7\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uff0cpnpm \u5c06\u4f7f\u7528\u65b0\u5b58\u50a8\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"\u9879\u76ee\u5177\u6709\u5de5\u4f5c\u533a\u4e2d\u4e0d\u5b58\u5728\u7684\u5de5\u4f5c\u533a\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependency")," \u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5de5\u4f5c\u533a\u4e2d\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\uff0c\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c06\u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u8981\u4fee\u590d\u6b64\u9519\u8bef\uff0c\u6240\u6709\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/workspaces#workspace-protocol-workspace"},"\u5de5\u4f5c\u533a\u534f\u8bae")," \u7684\u4f9d\u8d56\u9879\u9700\u8981\u88ab\u66f4\u65b0\u81f3\u5f53\u524d\u5de5\u4f5c\u533a\u4e2d\u7684\u7248\u672c\u3002 \u8fd9\u53ef\u4ee5\u624b\u52a8\u5b8c\u6210\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," \u547d\u4ee4\u5b8c\u6210\u3002"),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail if the project has unresolved peer dependencies or the peer dependencies are not matching the wanted ranges. To fix this, install the missing peer dependencies."),(0,o.kt)("p",null,"You may also selectively ignore these errors using the ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," and ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}m.isMDXComponent=!0}}]);