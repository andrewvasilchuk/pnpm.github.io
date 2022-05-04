"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{1142:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(9213),l=a(9496),n=a(1626),i=a(8006),s=a(6067),o=a(8977);const m="sidebar_MdV6",c="sidebarItemTitle_NUew",u="sidebarItemList_noDD",d="sidebarItem_WG44",g="sidebarItemLink_yuQo",p="sidebarItemLinkActive_a4ko";function v(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var h=a(6341);function E(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return l.createElement(h.Zo,{component:E,props:e})}var f=a(4507);function _(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,N),m=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(9496),l=a(8401),n=a(1142),i=a(4448),s=a(8977),o=a(2653);function m(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(o.Z,{permalink:a,title:r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(o.Z,{permalink:l,title:r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var c=a(9292),u=a(1629),d=a(2553),g=a(1626);function p(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,n=t.blogDescription,i=t.blogTitle,s="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(c.d,{title:s,description:n}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function v(e){var t=e.metadata,a=e.items,l=e.sidebar;return r.createElement(n.Z,{sidebar:l},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}function h(e){return r.createElement(c.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogListPage)},r.createElement(p,e),r.createElement(v,e))}},4448:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(9496),l=a(1626),n=a(8977),i=a(6067),s=a(6911),o=a(9791),m=a(4450),c=a(8341),u=a(9430);const d="blogPostTitle_UBQh",g="blogPostData_RCFx",p="blogPostDetailsFull_sYRD";var v=a(1607);function h(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,o=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(h,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(h,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const b="authorCol___Mn",f="imageOnlyAuthorRow_JwwY",_="imageOnlyAuthorCol_skSN";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?_:b),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,a,h=(a=(0,o.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.C)().withBaseUrl,b=e.children,f=e.frontMatter,_=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,w=void 0!==P&&P,T=Z.date,y=Z.formattedDate,I=Z.permalink,L=Z.tags,x=Z.readingTime,F=Z.title,R=Z.editUrl,M=Z.authors,C=null!=(t=_.image)?t:f.image,A=!w&&k,U=L.length>0,B=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:d,itemProp:"headline"},w?F:r.createElement(i.Z,{itemProp:"url",to:I},F)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},y),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",h(x))),r.createElement(N,{authors:M,assets:_})),C&&r.createElement("meta",{itemProp:"image",content:E(C,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,b)),(U||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",w&&p)},U&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":A})},r.createElement(v.Z,{tags:L})),w&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:R})),A&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:F})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9430:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(9496),l=a(8977),n=a(2848),i=a(9213),s=a(1626);const o="iconEdit_PcgM";var m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(1629);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2653:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9496),l=a(1626),n=a(6067);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return r.createElement(n.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},1607:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(9496),l=a(1626),n=a(8977),i=a(6067);const s="tag_P70v",o="tagRegular_VYwi",m="tagWithCount_i5NP";function c(e){var t=e.permalink,a=e.label,n=e.count;return r.createElement(i.Z,{href:t,className:(0,l.Z)(s,n?m:o)},a,n&&r.createElement("span",null,n))}const u="tags_RW8S",d="tag_mg_a";function g(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:d},r.createElement(c,{label:t,permalink:a}))}))))}},9791:(e,t,a)=>{a.d(t,{c:()=>m});var r=a(9496),l=a(8401),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),s}var t,a}),[e])}function m(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);