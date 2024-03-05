"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81838],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=d(i),f=n,h=c["".concat(u,".").concat(f)]||c[f]||p[f]||s;return i?r.createElement(h,o(o({ref:t},l),{},{components:i})):r.createElement(h,o({ref:t},l))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:n,o[1]=a;for(var d=2;d<s;d++)o[d]=i[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},51108:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const s={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},o="Redshift Ingestion Guide: Setup & Prerequisites",a={unversionedId:"docs/quick-ingestion-guides/redshift/setup",id:"version-0.12.0/docs/quick-ingestion-guides/redshift/setup",title:"Setup",description:"To configure ingestion from Redshift, you'll need a User configured with the proper permission sets, and an associated.",source:"@site/versioned_docs/version-0.12.0/docs/quick-ingestion-guides/redshift/setup.md",sourceDirName:"docs/quick-ingestion-guides/redshift",slug:"/quick-ingestion-guides/redshift/setup",permalink:"/docs/0.12.0/quick-ingestion-guides/redshift/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md",tags:[],version:"0.12.0",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/0.12.0/quick-ingestion-guides/redshift/overview"},next:{title:"Configuration",permalink:"/docs/0.12.0/quick-ingestion-guides/redshift/configuration"}},u={},d=[{value:"Redshift Prerequisites",id:"redshift-prerequisites",level:2},{value:"Redshift Setup",id:"redshift-setup",level:2},{value:"Next Steps",id:"next-steps",level:2}],l={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redshift-ingestion-guide-setup--prerequisites"},"Redshift Ingestion Guide: Setup & Prerequisites"),(0,n.kt)("p",null,"To configure ingestion from Redshift, you'll need a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"User")," configured with the proper permission sets, and an associated."),(0,n.kt)("p",null,"This setup guide will walk you through the steps you'll need to take via your Google Cloud Console."),(0,n.kt)("h2",{id:"redshift-prerequisites"},"Redshift Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect to your Amazon Redshift cluster using an SQL client such as SQL Workbench/J or Amazon Redshift Query Editor with your Admin user."),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"Redshift User")," that will be used to perform the metadata extraction if you don't have one already.\nFor example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER datahub WITH PASSWORD 'Datahub1234';\n")),(0,n.kt)("h2",{id:"redshift-setup"},"Redshift Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Grant the following permission to your ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub")," user:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER datahub WITH SYSLOG ACCESS UNRESTRICTED;\nGRANT SELECT ON pg_catalog.svv_table_info to datahub;\nGRANT SELECT ON pg_catalog.svl_user_info to datahub;\n\n")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Once you've confirmed all of the above in Redshift, it's time to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.12.0/quick-ingestion-guides/redshift/configuration"},"move on")," to configure the actual ingestion source within the DataHub UI."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);