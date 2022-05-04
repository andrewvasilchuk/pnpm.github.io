"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{7802:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var n=a(9496),l=a(1626),r=a(2848),i=a(8977),s=a(4221);function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(s.Z,(0,r.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(s.Z,(0,r.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var o=a(8401),d=a(6067),m=a(7955),u=a(7314),v=a(1629),b=a(7854);var p={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=p[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,r=e.versionMetadata,i=(0,o.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(s).savePreferredVersionName,d=(0,m.Jo)(s),b=d.latestDocSuggestion,p=d.latestVersionSuggestion,g=null!=b?b:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:p.label,to:g.path,onClick:function(){return c(p.name)}})))}function E(e){var t=e.className,a=(0,b.E)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function L(e){var t=e.className,a=(0,b.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(9430),C=a(1607);const x="lastUpdated_r4vf";function H(e){return n.createElement("div",{className:(0,l.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C.Z,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",x)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function U(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||s);return o||d?n.createElement("footer",{className:(0,l.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(H,{tags:c}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var y=a(7316),A=a(9166);const w="tocCollapsible_ig9_",I="tocCollapsibleContent_Q9w6",M="tocCollapsibleExpanded_Xemg";var B=a(4339),O=a(9213);const P="tocCollapsibleButton_ylWr",S="tocCollapsibleButtonExpanded_z0pT";var V=["collapsed"];function R(e){var t=e.collapsed,a=(0,O.Z)(e,V);return n.createElement("button",(0,r.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",P,!t&&S,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function z(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,A.u)({initialState:!0}),c=s.collapsed,o=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(w,!c&&M,a)},n.createElement(R,{collapsed:c,onClick:o}),n.createElement(A.z,{lazy:!0,className:I,collapsed:c},n.createElement(B.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var D=a(6019);const F="docItemContainer_GUp1",q="docItemCol_jgWh",W="tocMobile_tdbg";var j=a(9292),G=a(4507),J=a(1603),Q=a(432);const X={breadcrumbsContainer:"breadcrumbsContainer_zW8L",breadcrumbHomeIcon:"breadcrumbHomeIcon_t8vo"};var Y=a(6911);function K(e){return n.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function $(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(d.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function ee(e){var t=e.children,a=e.active,i=e.index,s=e.addMicrodata;return n.createElement("li",(0,r.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(i+1)}))}function te(){var e=(0,Y.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",X.breadcrumbsItemLink),href:e},n.createElement(K,{className:X.breadcrumbHomeIcon})))}function ae(){var e=(0,J.s1)(),t=(0,Q.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(v.k.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(te,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(ee,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement($,{href:t.href,isLast:l},t.label))})))):null}var ne=a(8341);function le(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,i=a.assets,s=r.keywords,c=l.description,o=l.title,d=null!=(t=i.image)?t:r.image;return n.createElement(j.d,{title:o,description:c,keywords:s,image:d})}function re(e){var t=e.content,a=t.metadata,r=t.frontMatter,i=r.hide_title,s=r.hide_table_of_contents,o=r.toc_min_heading_level,d=r.toc_max_heading_level,m=a.title,u=!i&&void 0===t.contentTitle,b=(0,G.i)(),p=!s&&t.toc&&t.toc.length>0,h=p&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!s&&q)},n.createElement(E,null),n.createElement("div",{className:F},n.createElement("article",null,n.createElement(ae,null),n.createElement(L,null),p&&n.createElement(z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:(0,l.Z)(v.k.docs.docTocMobile,W)}),n.createElement("div",{className:(0,l.Z)(v.k.docs.docMarkdown,"markdown")},u&&n.createElement("header",null,n.createElement(D.Z,{as:"h1"},m)),n.createElement(ne.Z,null,n.createElement(t,null))),n.createElement(U,e)),n.createElement(c,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:v.k.docs.docTocDesktop})))}function ie(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(j.FG,{className:t},n.createElement(le,e),n.createElement(re,e))}},9430:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(9496),l=a(8977),r=a(2848),i=a(9213),s=a(1626);const c="iconEdit_PcgM";var o=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(1629);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.k.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4221:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(1626),r=a(6067);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},7316:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(2848),l=a(9213),r=a(9496),i=a(1626),s=a(4339);const c="tableOfContents_hALl";var o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4339:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(2848),l=a(9213),r=a(9496);function i(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const s=r.memo(i);var c=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,l.Z)(e,c);a>=0?t[a].children.push(r):n.push(r)})),n}function d(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=d({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var m=a(6853);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function v(e,t){var a,n,l=t.anchorTopOffset,r=e.find((function(e){return u(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null:null!=(a=e[e.length-1])?a:null}function b(){var e=(0,r.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,r.useRef)(void 0),a=b();(0,r.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=v(s,{anchorTopOffset:a.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===o)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function f(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,v=e.linkActiveClassName,b=void 0===v?void 0:v,f=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,l.Z)(e,h),L=(0,m.L)(),N=null!=f?f:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,r.useMemo)((function(){return d({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return p((0,r.useMemo)((function(){if(u&&b)return{linkClassName:u,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:Z}}),[u,b,N,Z])),r.createElement(s,(0,n.Z)({toc:k,className:i,linkClassName:u},E))}},1607:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(9496),l=a(1626),r=a(8977),i=a(6067);const s="tag_P70v",c="tagRegular_VYwi",o="tagWithCount_i5NP";function d(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(i.Z,{href:t,className:(0,l.Z)(s,r?o:c)},a,r&&n.createElement("span",null,r))}const m="tags_RW8S",u="tag_mg_a";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{label:t,permalink:a}))}))))}},7854:(e,t,a)=>{a.d(t,{E:()=>s,q:()=>i});var n=a(9496),l=a(3366),r=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);