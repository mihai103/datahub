"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[70511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=l(n),u=i,m=h["".concat(d,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[h]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Creating a New GraphQL Endpoint in GMS",slug:"/api/graphql/graphql-endpoint-development",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/graphql-endpoint-development.md"},p="Creating a New GraphQL Endpoint in GMS",o={unversionedId:"docs/api/graphql/graphql-endpoint-development",id:"docs/api/graphql/graphql-endpoint-development",title:"Creating a New GraphQL Endpoint in GMS",description:"This guide will walk you through how to add a new GraphQL endpoint in GMS.",source:"@site/genDocs/docs/api/graphql/graphql-endpoint-development.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/graphql-endpoint-development",permalink:"/docs/api/graphql/graphql-endpoint-development",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/graphql-endpoint-development.md",tags:[],version:"current",frontMatter:{title:"Creating a New GraphQL Endpoint in GMS",slug:"/api/graphql/graphql-endpoint-development",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/graphql-endpoint-development.md"},sidebar:"overviewSidebar",previous:{title:"Developing on Metadata Ingestion",permalink:"/docs/metadata-ingestion/developing"},next:{title:"datahub-web-react",permalink:"/docs/datahub-web-react"}},d={},l=[{value:"GraphQL API changes",id:"graphql-api-changes",level:2},{value:"Adding an endpoint definition",id:"adding-an-endpoint-definition",level:3},{value:"Query or Mutation?",id:"query-or-mutation",level:4},{value:"Input and Output Types",id:"input-and-output-types",level:4},{value:"Building your changes",id:"building-your-changes",level:3},{value:"Java Server changes",id:"java-server-changes",level:2},{value:"Adding a resolver",id:"adding-a-resolver",level:3},{value:"Adding the resolver to the GMS server",id:"adding-the-resolver-to-the-gms-server",level:3},{value:"Testing your change",id:"testing-your-change",level:2}],s={toc:l},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-new-graphql-endpoint-in-gms"},"Creating a New GraphQL Endpoint in GMS"),(0,i.kt)("p",null,"This guide will walk you through how to add a new GraphQL endpoint in GMS. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"listOwnershipTypes")," endpoint will be used as an example. This endpoint was added in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-df9c96427d45d7af6d92dd6caa23a349357dbc4bdb915768ab4ce000a4286964"},"this commit")," which can be used as reference.")),(0,i.kt)("h2",{id:"graphql-api-changes"},"GraphQL API changes"),(0,i.kt)("h3",{id:"adding-an-endpoint-definition"},"Adding an endpoint definition"),(0,i.kt)("p",null,"GraphQL endpoint definitions for GMS are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-graphql-core/src/main/resources/")," directory. New endpoints can be added to the relevant file, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.graphql")," for entity management endpoints, ",(0,i.kt)("inlineCode",{parentName:"p"},"search.graphql")," for search-related endpoints, etc. Or, for totally new features, new files can be added to this directory. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The endpoint was added in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-df9c96427d45d7af6d92dd6caa23a349357dbc4bdb915768ab4ce000a4286964"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.graphql"))," file since ownership types are being added as an entity. ")),(0,i.kt)("h4",{id:"query-or-mutation"},"Query or Mutation?"),(0,i.kt)("p",null,"Read-only functionality can go in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," section, while mutations go in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," section. The definition for new functionality can go in the appropriate section depending on the use case. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The endpoint was added in the ",(0,i.kt)("inlineCode",{parentName:"p"},"type Query")," section because it is read-only functionality. In the same commit, ",(0,i.kt)("inlineCode",{parentName:"p"},"createOwnershipType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateOwnershipType"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteOwnershipType")," were added in the ",(0,i.kt)("inlineCode",{parentName:"p"},"type Mutation")," section as these are operations that perform writes.")),(0,i.kt)("h4",{id:"input-and-output-types"},"Input and Output Types"),(0,i.kt)("p",null,"If the new endpoint requires more than a few inputs or outputs, a struct can be created in the same file to collect these fields. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," Since this functionality takes and returns quite a few parameters, ",(0,i.kt)("inlineCode",{parentName:"p"},"input ListOwnershipTypesInput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type ListOwnershipTypesResult")," were added to represent the input and output structs. In the same PR, no input and output structs were added for ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteOwnershipType")," since the inputs and output are primitive types.")),(0,i.kt)("h3",{id:"building-your-changes"},"Building your changes"),(0,i.kt)("p",null,"After adding the new endpoint, and new structs if necessary, building the project will generate the Java classes for the new code that can be used in making the server changes. Build the datahub project to make the new symbols available. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The build step will make the new types ",(0,i.kt)("inlineCode",{parentName:"p"},"ListOwnershipTypesInput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ListOwnershipTypesResult")," available in a Java IDE.")),(0,i.kt)("h2",{id:"java-server-changes"},"Java Server changes"),(0,i.kt)("p",null,"We turn now to developing the server-side functionality for the new endpoint."),(0,i.kt)("h3",{id:"adding-a-resolver"},"Adding a resolver"),(0,i.kt)("p",null,"GraphQL queries are handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," classes located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/resolvers/")," directory. Resolvers are classes that implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher<T>")," interface where ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"CompletableFuture<ClassForResultOfTheEndpoint>"),".This interface provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," method that takes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," of the endpoint return type. The resolver can contain any services needed to resolve the endpoint, and use them to compute the result."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-d2ad02d0ec286017d032640cfdb289fbdad554ef5f439355104766fa068513ac"},(0,i.kt)("inlineCode",{parentName:"a"},"ListOwnershipTypesResolver"))," class implements ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher<CompletableFuture<ListOwnershipTypesResult>>")," since this is the return type of the endpoint. It contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityClient")," instance variable to handle the ownership type fetching. ")),(0,i.kt)("p",null,"Often the structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," classes is to call a service to receive a response, then use a method to transform the result from the service into the GraphQL type returned."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-d2ad02d0ec286017d032640cfdb289fbdad554ef5f439355104766fa068513ac"},(0,i.kt)("inlineCode",{parentName:"a"},"ListOwnershipTypesResolver"))," calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," method in its ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityClient")," to get the ownership types, then calls the defined ",(0,i.kt)("inlineCode",{parentName:"p"},"mapUnresolvedOwnershipTypes")," function to transform the response into a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListOwnershipTypesResult"),".")),(0,i.kt)("p",null,"Tip: Resolver classes can be tested with unit tests! "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The reference commit adds the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-9443d70b221e36e9d47bfa9244673d1cd553a92ae496d03622932ad0a4832045"},(0,i.kt)("inlineCode",{parentName:"a"},"ListOwnershipTypeResolverTest")," class"),".")),(0,i.kt)("h3",{id:"adding-the-resolver-to-the-gms-server"},"Adding the resolver to the GMS server"),(0,i.kt)("p",null,"The main GMS server is located in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java"},(0,i.kt)("inlineCode",{parentName:"a"},"GmsGraphQLEngine.java")),". To hook up the resolver to handle the endpoint, find the relevant section based on if the new enpoint is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," and add the resolver as the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataFetcher")," for the name of the endpoint. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"listOwnershipTypes example:")," The following line of code is added in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/commit/ea92b86e6ab4cbb18742fb8db6bc11fae8970cdb#diff-e04c9c2d80cbfd7aa7e3e0f867248464db0f6497684661132d6ead81ded21856"},(0,i.kt)("inlineCode",{parentName:"a"},"GmsGraphQLEngine")),": ",(0,i.kt)("inlineCode",{parentName:"p"},'.dataFetcher("listOwnershipTypes", new ListOwnershipTypesResolver(this.entityClient))'),". This uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"ListOwnershipTypes")," resolver to handle queries for ",(0,i.kt)("inlineCode",{parentName:"p"},"listOwnershipTypes")," endpoint. ")),(0,i.kt)("h2",{id:"testing-your-change"},"Testing your change"),(0,i.kt)("p",null,"In addition to unit tests for your resolver mentioned above, GraphQL functionality in datahub can be tested using the built-in ",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/"},"GraphiQL")," endpoint. The endpoint is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/graphiql")," on Quickstart and at the equivalent URL for a production instance. This provides fast debug-ability for querying GraphQL. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/graphql/how-to-set-up-graphql#graphql-explorer-graphiql"},"How to Set Up GraphQL")," for more information"))}c.isMDXComponent=!0}}]);