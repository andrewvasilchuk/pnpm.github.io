"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7497],{9613:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return a?t.createElement(k,i(i({ref:n},c),{},{components:a})):t.createElement(k,i({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2278:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var t=a(2848),r=a(9213),l=(a(9496),a(9613)),i=["components"],p={id:"exec",title:"pnpm exec"},o=void 0,s={unversionedId:"cli/exec",id:"version-7.x/cli/exec",title:"pnpm exec",description:"Menjalankan perintah shell didalam lingkup sebuah proyek.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/id/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-7.x/docs",previous:{title:"pnpm test",permalink:"/id/cli/test"},next:{title:"pnpm dlx",permalink:"/id/cli/dlx"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:d};function u(e){var n=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Menjalankan perintah ",(0,l.kt)("em",{parentName:"p"},"shell")," didalam lingkup sebuah proyek."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," ditambahkan ke ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", sehingga ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," dapat mengeksekusi perintah dependensi."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Jika anda memiliki Jest sebagai dependensi dari proyek anda, maka tidak perlu menginstall Jest secara global, jalankan saja ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"Bagian ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," sebenarnya opsional jika perintah yang ingin dijalankan tidak berkonflik dengan perintah bawaan pnpm, jadi anda juga bisa menjalankan:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Opsi apapun untuk perintah ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," harus ditulis sebelum kata ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),". Opsi yang ditulis setelah kata ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," akan diteruskan ke perintah yang akan di eksekusi."),(0,l.kt)("p",null,"Penulisan yang benar. pnpm akan berjalan secara rekursif:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,l.kt)("p",null,"Penulisan yang salah, pnpm tidak akan berjalan secara rekursif namun ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," akan di eksekusi dengan opsi ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Mengeksekusi perintah ",(0,l.kt)("em",{parentName:"p"},"shell")," pada setiap proyek di dalam ",(0,l.kt)("em",{parentName:"p"},"workspace"),"."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Prune ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,l.kt)("p",null,"View package information for all packages. This should be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);