"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19930],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21890:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Policies Guide",slug:"/authorization/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/policies.md"},i="Policies Guide",o={unversionedId:"docs/authorization/policies",id:"version-0.12.0/docs/authorization/policies",title:"Policies Guide",description:"Introduction",source:"@site/versioned_docs/version-0.12.0/docs/authorization/policies.md",sourceDirName:"docs/authorization",slug:"/authorization/policies",permalink:"/docs/0.12.0/authorization/policies",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/policies.md",tags:[],version:"0.12.0",frontMatter:{title:"Policies Guide",slug:"/authorization/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/policies.md"},sidebar:"overviewSidebar",previous:{title:"Roles",permalink:"/docs/0.12.0/authorization/roles"},next:{title:"Authorization using Groups",permalink:"/docs/0.12.0/authorization/groups"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is a Policy?",id:"what-is-a-policy",level:2},{value:"Platform Policies",id:"platform-policies",level:3},{value:"Metadata Policies",id:"metadata-policies",level:3},{value:"Actors",id:"actors",level:4},{value:"Privileges",id:"privileges",level:4},{value:"Resources",id:"resources",level:4},{value:"Managing Policies",id:"managing-policies",level:2},{value:"Configuration",id:"configuration",level:2},{value:"REST API Authorization",id:"rest-api-authorization",level:3},{value:"Coming Soon",id:"coming-soon",level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",level:2}],d={toc:p},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"policies-guide"},"Policies Guide"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"DataHub provides the ability to declare fine-grained access control Policies via the UI & GraphQL API.\nAccess policies in DataHub define ",(0,r.kt)("em",{parentName:"p"},"who")," can ",(0,r.kt)("em",{parentName:"p"},"do what")," to ",(0,r.kt)("em",{parentName:"p"},"which resources"),". A few policies in plain English include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags. "),(0,r.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,r.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of."),(0,r.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves.")),(0,r.kt)("p",null,"In this document, we'll take a deeper look at DataHub Policies & how to use them effectively. "),(0,r.kt)("h2",{id:"what-is-a-policy"},"What is a Policy?"),(0,r.kt)("p",null,"There are 2 types of Policy within DataHub:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Platform Policies"),(0,r.kt)("li",{parentName:"ol"},"Metadata Policies")),(0,r.kt)("p",null,"We'll briefly describe each. "),(0,r.kt)("h3",{id:"platform-policies"},"Platform Policies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Platform")," policies determine who has platform-level privileges on DataHub. These privileges include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,r.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,r.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,r.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Actors"),": Who the policy applies to (Users or Groups)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")')),(0,r.kt)("p",null,'Note that platform policies do not include a specific "target resource" against which the Policies apply. Instead,\nthey simply serve to assign specific privileges to DataHub users and groups.'),(0,r.kt)("h3",{id:"metadata-policies"},"Metadata Policies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,r.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,r.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,r.kt)("p",null,"and so on. "),(0,r.kt)("p",null,"A Metadata Policy can be broken down into 3 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups that the policy applies to."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a policy, e.g. \"Add Tags\"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the policy applies to, e.g. \"All Datasets\".")),(0,r.kt)("h4",{id:"actors"},"Actors"),(0,r.kt)("p",null,"We currently support 3 ways to define the set of actors the policy applies to: a) list of users b) list of groups, and\nc) owners of the entity. You also have the option to apply the policy to all users or groups."),(0,r.kt)("h4",{id:"privileges"},"Privileges"),(0,r.kt)("p",null,"Check out the list of\nprivileges ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-utils/src/main/java/com/linkedin/metadata/authorization/PoliciesConfig.java"},"here"),"\n. Note, the privileges are semantic by nature, and does not tie in 1-to-1 with the aspect model."),(0,r.kt)("p",null,"All edits on the UI are covered by a privilege, to make sure we have the ability to restrict write access."),(0,r.kt)("p",null,"We currently support the following:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Platform-level")," privileges for DataHub operators to access & manage the administrative functionality of the system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform Privileges"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Policies"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove access control policies. Be careful - Actors with this privilege are effectively super users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Metadata Ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update Metadata Ingestion sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create & remove secrets stored inside DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Users & Groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update users and groups on DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage All Access Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and list access tokens for all users on DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create Domains"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Domains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Domains"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove any Domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Analytics"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor access to the DataHub analytics dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Generate Personal Access Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate access tokens for personal use with DataHub APIs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage User Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate invite links for new native DataHub users, and password reset links for existing native users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Glossaries"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, move, and delete Glossary Terms and Term Groups")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create and remove any Tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Public Views"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and remove any public (shared) Views.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Restore Indices API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to restore indices for a set of entities via API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable/Disable Writeability API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to enable or disable GMS writeability for use in data migrations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apply Retention API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to apply aspect retention via API")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Common metadata privileges")," to view & modify any entity within DataHub."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Common Privileges"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Entity Page"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access the entity page for the resource in the UI. If not granted, it will redirect them to an unauthorized page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove tags to an asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Glossary Terms"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove glossary terms to an asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Owners"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove owners of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the description (documentation) of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Links"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit links associated with an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the status of an entity (soft deleted or not).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Domain of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Deprecation"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Deprecation status of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove assertions from an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit All"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit any information about an entity. Super user privileges. Controls the ability to ingest using API when REST API Authorization is enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Timeline API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to get the timeline of an entity via API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Entity API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to get an entity via API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Timeseries Aspect API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to get a timeseries aspect via API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Aspect/Entity Count APIs",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to get aspect and entity counts via API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Search API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to search for entities via API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Produce Platform Event API",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to ingest a platform event via API.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specific entity-level privileges")," that are not generalizable."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entity"),(0,r.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) tags associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Glossary Terms"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) glossary terms associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) descriptions associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"View Dataset Usage"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access usage metadata about a dataset both in the UI and in the GraphQL API. This includes example queries, number of queries, etc. Also applies to REST APIs when REST API Authorization is enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"View Dataset Profile"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access a dataset's profile both in the UI and in the GraphQL API. This   includes snapshot statistics like #rows, #columns, null percentage per field, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Tag Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the color of a Tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Group Members"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove members to a group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit User Profile"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the user's profile including display name, bio, title, profile image, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User + Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Contact Information"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the contact information such as email & chat handles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GlossaryNode"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Direct Glossary Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and delete the direct children of the selected entities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GlossaryNode"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage All Glossary Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and delete everything underneath the selected entities.")))),(0,r.kt)("h4",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Resource filter defines the set of resources that the policy applies to is defined using a list of criteria. Each\ncriterion defines a field type (like type, urn, domain), a list of field values to compare, and a\ncondition (like EQUALS). It essentially checks whether the field of a certain resource matches any of the input values.\nNote, that if there are no criteria or resource is not set, policy is applied to ALL resources."),(0,r.kt)("p",null,"For example, the following resource filter will apply the policy to datasets, charts, and dashboards under domain 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resources": {\n      "filter": {\n        "criteria": [\n          {\n            "field": "TYPE",\n            "condition": "EQUALS",\n            "values": [\n              "dataset",\n              "chart",\n              "dashboard"\n            ]\n          },\n          {\n            "field": "DOMAIN",\n            "values": [\n              "urn:li:domain:domain1"\n            ],\n            "condition": "EQUALS"\n          }\n        ]\n      }\n    }\n}\n')),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," is inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," aspect of a Policy."),(0,r.kt)("p",null,"Supported fields are as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"dataset, chart, dataJob")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"urn"),(0,r.kt)("td",{parentName:"tr",align:null},"Urn of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Domain of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"urn:li:domain:domainX")))),(0,r.kt)("h2",{id:"managing-policies"},"Managing Policies"),(0,r.kt)("p",null,"Policies can be managed on the page ",(0,r.kt)("strong",{parentName:"p"},"Settings > Permissions > Policies")," page. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Policies")," tab will only\nbe visible to those users having the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Policies")," privilege."),(0,r.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. The set of default policies are created at deploy\ntime and can be found inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"policies.json")," file within ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata-service/war/src/main/resources/boot"),". This set of policies serves the\nfollowing purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,r.kt)("li",{parentName:"ol"},"Assigns all Platform privileges for all Users by default (Editable)")),(0,r.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing policies without friction.\nNote that these privilege ",(0,r.kt)("em",{parentName:"p"},"can")," and likely ",(0,r.kt)("em",{parentName:"p"},"should")," be altered inside the ",(0,r.kt)("strong",{parentName:"p"},"Policies")," page of the UI."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pro-Tip: To login using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," account, simply navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-datahub-domain>/login")," and enter ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),". Note that the password can be customized for your\ndeployment by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file within the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," module. Notice that JaaS authentication must be enabled. ")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"By default, the Policies feature is ",(0,r.kt)("em",{parentName:"p"},"enabled"),". This means that the deployment will support creating, editing, removing, and\nmost importantly enforcing fine-grained access policies."),(0,r.kt)("p",null,"In some cases, these capabilities are not desirable. For example, if your company's users are already used to having free reign, you\nmay want to keep it that way. Or perhaps it is only your Data Platform team who actively uses DataHub, in which case Policies may be overkill."),(0,r.kt)("p",null,"For these scenarios, we've provided a back door to disable Policies in your deployment of DataHub. This will completely hide\nthe policies management UI and by default will allow all actions on the platform. It will be as though\neach user has ",(0,r.kt)("em",{parentName:"p"},"all")," privileges, both of the ",(0,r.kt)("strong",{parentName:"p"},"Platform")," & ",(0,r.kt)("strong",{parentName:"p"},"Metadata")," flavor."),(0,r.kt)("p",null,"To disable Policies, you can simply set the ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_POLICIES_ENABLED")," environment variable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms")," service container\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". For example in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/datahub-gms/docker.env"),", you'd place"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AUTH_POLICIES_ENABLED=false\n")),(0,r.kt)("h3",{id:"rest-api-authorization"},"REST API Authorization"),(0,r.kt)("p",null,"Policies only affect REST APIs when the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"REST_API_AUTHORIZATION")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for GMS. Some policies only apply when this setting is enabled, marked above, and other Metadata and Platform policies apply to the APIs where relevant, also specified in the table above."),(0,r.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,r.kt)("p",null,"The DataHub team is hard at work trying to improve the Policies feature. We are planning on building out the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hide edit action buttons on Entity pages to reflect user privileges")),(0,r.kt)("p",null,"Under consideration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ability to define Metadata Policies against multiple reosurces scoped to particular "Containers" (e.g. A "schema", "database", or "collection")')),(0,r.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,r.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Only active if REST_API_AUTHORIZATION_ENABLED is true",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);