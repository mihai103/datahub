"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},64823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"v0.1.72",slug:"/managed-datahub/release-notes/v_0_1_72",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_72.md"},l="v0.1.72",s={unversionedId:"docs/managed-datahub/release-notes/v_0_1_72",id:"version-0.12.0/docs/managed-datahub/release-notes/v_0_1_72",title:"v0.1.72",description:"---",source:"@site/versioned_docs/version-0.12.0/docs/managed-datahub/release-notes/v_0_1_72.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_1_72",permalink:"/docs/0.12.0/managed-datahub/release-notes/v_0_1_72",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_72.md",tags:[],version:"0.12.0",frontMatter:{title:"v0.1.72",slug:"/managed-datahub/release-notes/v_0_1_72",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_72.md"},sidebar:"overviewSidebar",previous:{title:"v0.1.73",permalink:"/docs/0.12.0/managed-datahub/release-notes/v_0_1_73"},next:{title:"v0.1.70",permalink:"/docs/0.12.0/managed-datahub/release-notes/v_0_1_70"}},i={},c=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Release Changlog",id:"release-changlog",level:2},{value:"Special Notes",id:"special-notes",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v0172"},"v0.1.72"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"18 Jan 2023"),(0,n.kt)("h2",{id:"release-changlog"},"Release Changlog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.1.70")," these changes from OSS DataHub ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/43c566ee4ff2ee950a4f845c2fd8a1c690c1d607...afaee58ded40dc4cf39f94f1b4331ceb0a4d93eb"},"https://github.com/datahub-project/datahub/compare/43c566ee4ff2ee950a4f845c2fd8a1c690c1d607...afaee58ded40dc4cf39f94f1b4331ceb0a4d93eb")," have been pulled in"),(0,n.kt)("li",{parentName:"ul"},"add GZip compression to lineage cache"),(0,n.kt)("li",{parentName:"ul"},"Make browse paths upgrade non-blocking")),(0,n.kt)("h2",{id:"special-notes"},"Special Notes"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If anyone faces issues with login please clear your cookies. Some security updates are part of this release. That may cause login issues until cookies are cleared.")))}p.isMDXComponent=!0}}]);