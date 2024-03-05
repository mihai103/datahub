"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(a),g=i,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/tableau/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/overview.md"},o="Tableau Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/tableau/overview",id:"docs/quick-ingestion-guides/tableau/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/genDocs/docs/quick-ingestion-guides/tableau/overview.md",sourceDirName:"docs/quick-ingestion-guides/tableau",slug:"/quick-ingestion-guides/tableau/overview",permalink:"/docs/quick-ingestion-guides/tableau/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/tableau/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/snowflake/configuration"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/tableau/setup"}},l={},s=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tableau-ingestion-guide-overview"},"Tableau Ingestion Guide: Overview"),(0,i.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,i.kt)("p",null,"This guide will help you set up the Tableau connector to begin ingesting metadata into DataHub."),(0,i.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from Tableau and load it into DataHub. This will include to following Tableau asset types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dashboards"),(0,i.kt)("li",{parentName:"ul"},"Sheets "),(0,i.kt)("li",{parentName:"ul"},"Embedded DataSource"),(0,i.kt)("li",{parentName:"ul"},"Published DataSource"),(0,i.kt)("li",{parentName:"ul"},"Custom SQL Table"),(0,i.kt)("li",{parentName:"ul"},"Embedded or External Tables"),(0,i.kt)("li",{parentName:"ul"},"User"),(0,i.kt)("li",{parentName:"ul"},"Workbook"),(0,i.kt)("li",{parentName:"ul"},"Tag")),(0,i.kt)("p",null,"The pipeline will also extract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage statistics")," help you understand top viewed Dashboard/Chart"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table- and Column-level lineage")," automatically index relationships between datasets and columns")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Continue to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/tableau/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,i.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,i.kt)("p",null,"If you want to ingest metadata from Tableau using the DataHub CLI, check out the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/tableau"},"Tableau Ingestion Source"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,i.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);