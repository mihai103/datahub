"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(87462),r=a(67294),o=a(86010),i=a(72957),s=a(16550),l=a(75238),u=a(33609),c=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function P(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},81223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),i=a(18679);const s={title:"But First, Semantics: Upsert versus Patch",slug:"/advanced/patch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/patch.md"},l="But First, Semantics: Upsert versus Patch",u={unversionedId:"docs/advanced/patch",id:"version-0.12.0/docs/advanced/patch",title:"But First, Semantics: Upsert versus Patch",description:"Why Would You Use Patch",source:"@site/versioned_docs/version-0.12.0/docs/advanced/patch.md",sourceDirName:"docs/advanced",slug:"/advanced/patch",permalink:"/docs/0.12.0/advanced/patch",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/patch.md",tags:[],version:"0.12.0",frontMatter:{title:"But First, Semantics: Upsert versus Patch",slug:"/advanced/patch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/patch.md"},sidebar:"overviewSidebar",previous:{title:"Developing an Action",permalink:"/docs/0.12.0/actions/guides/developing-an-action"},next:{title:"Dataset",permalink:"/docs/0.12.0/api/tutorials/datasets"}},c={},d=[{value:"Why Would You Use Patch",id:"why-would-you-use-patch",level:2},{value:"How To Use Patch",id:"how-to-use-patch",level:2},{value:"Add Custom Properties",id:"add-custom-properties",level:3},{value:"Add and Remove Custom Properties",id:"add-and-remove-custom-properties",level:3},{value:"Add Data Job Lineage",id:"add-data-job-lineage",level:3},{value:"Add Properties to Dataset",id:"add-properties-to-dataset",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"but-first-semantics-upsert-versus-patch"},"But First, Semantics: Upsert versus Patch"),(0,r.kt)("h2",{id:"why-would-you-use-patch"},"Why Would You Use Patch"),(0,r.kt)("p",null,"By default, most of the SDK tutorials and API-s involve applying full upserts at the aspect level. This means that typically, when you want to change one field within an aspect without modifying others, you need to do a read-modify-write to not overwrite existing fields.\nTo support these scenarios, DataHub supports PATCH based operations so that targeted changes to single fields or values within arrays of fields are possible without impacting other existing metadata."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, PATCH support is only available for a selected set of aspects, so before pinning your hopes on using PATCH as a way to make modifications to aspect values, confirm whether your aspect supports PATCH semantics. The complete list of Aspects that are supported are maintained ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/9588440549f3d99965085e97b214a7dabc181ed2/entity-registry/src/main/java/com/linkedin/metadata/models/registry/template/AspectTemplateEngine.java#L24"},"here"),". In the near future, we do have plans to automatically support PATCH semantics for aspects by default.")),(0,r.kt)("h2",{id:"how-to-use-patch"},"How To Use Patch"),(0,r.kt)("p",null,"Examples for using Patch are sprinkled throughout the API guides.\nHere's how to find the appropriate classes for the language for your choice."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",label:"Java SDK",mdxType:"TabItem"},(0,r.kt)("p",null,"The Java Patch builders are aspect-oriented and located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-integration/java/datahub-client/src/main/java/datahub/client/patch"},"datahub-client")," module under the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub.client.patch")," namespace."),(0,r.kt)("p",null,"Here are a few illustrative examples using the Java Patch builders:"),(0,r.kt)("h3",{id:"add-custom-properties"},"Add Custom Properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.dataset.DatasetPropertiesPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DatasetCustomPropertiesAdd {\n\n  private DatasetCustomPropertiesAdd() {\n\n  }\n\n  /**\n   * Adds properties to an existing custom properties aspect without affecting any existing properties\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n      MetadataChangeProposal datasetPropertiesProposal = new DatasetPropertiesPatchBuilder()\n          .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n          .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n          .addCustomProperty("retention_time", "2 years")\n          .build();\n\n      String token = "";\n      RestEmitter emitter = RestEmitter.create(\n          b -> b.server("http://localhost:8080")\n              .token(token)\n      );\n      try {\n        Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n        System.out.println(response.get().getResponseContent());\n      } catch (Exception e) {\n        log.error("Failed to emit metadata to DataHub", e);\n        throw e;\n      } finally {\n        emitter.close();\n      }\n\n    }\n\n}\n\n\n\n')),(0,r.kt)("h3",{id:"add-and-remove-custom-properties"},"Add and Remove Custom Properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAddRemove.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.dataset.DatasetPropertiesPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DatasetCustomPropertiesAddRemove {\n\n  private DatasetCustomPropertiesAddRemove() {\n\n  }\n\n  /**\n   * Applies Add and Remove property operations on an existing custom properties aspect without\n   * affecting any other properties\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n      MetadataChangeProposal datasetPropertiesProposal = new DatasetPropertiesPatchBuilder()\n          .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n          .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n          .removeCustomProperty("retention_time")\n          .build();\n\n      String token = "";\n      RestEmitter emitter = RestEmitter.create(\n          b -> b.server("http://localhost:8080")\n              .token(token)\n      );\n      try {\n        Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n        System.out.println(response.get().getResponseContent());\n      } catch (Exception e) {\n        log.error("Failed to emit metadata to DataHub", e);\n        throw e;\n      } finally {\n        emitter.close();\n      }\n\n    }\n\n}\n\n\n\n')),(0,r.kt)("h3",{id:"add-data-job-lineage"},"Add Data Job Lineage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DataJobLineageAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.DataJobUrn;\nimport com.linkedin.common.urn.DatasetUrn;\nimport com.linkedin.common.urn.UrnUtils;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.datajob.DataJobInputOutputPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DataJobLineageAdd {\n\n  private DataJobLineageAdd() {\n\n  }\n\n  /**\n   * Adds lineage to an existing DataJob without affecting any lineage\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n  public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n    String token = "";\n    try (RestEmitter emitter = RestEmitter.create(\n        b -> b.server("http://localhost:8080")\n            .token(token)\n    )) {\n      MetadataChangeProposal dataJobIOPatch = new DataJobInputOutputPatchBuilder().urn(UrnUtils\n              .getUrn("urn:li:dataJob:(urn:li:dataFlow:(airflow,dag_abc,PROD),task_456)"))\n          .addInputDatasetEdge(DatasetUrn.createFromString("urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)"))\n          .addOutputDatasetEdge(DatasetUrn.createFromString("urn:li:dataset:(urn:li:dataPlatform:kafka,SampleHiveDataset,PROD)"))\n          .addInputDatajobEdge(DataJobUrn.createFromString("urn:li:dataJob:(urn:li:dataFlow:(airflow,dag_abc,PROD),task_123)"))\n          .addInputDatasetField(UrnUtils.getUrn(\n              "urn:li:schemaField:(urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD),user_id)"))\n          .addOutputDatasetField(UrnUtils.getUrn(\n              "urn:li:schemaField:(urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD),user_id)"))\n          .build();\n\n      Future<MetadataWriteResponse> response = emitter.emit(dataJobIOPatch);\n\n      System.out.println(response.get().getResponseContent());\n    } catch (Exception e) {\n      log.error("Failed to emit metadata to DataHub", e);\n      throw new RuntimeException(e);\n    }\n\n  }\n\n}\n\n\n\n'))),(0,r.kt)(i.Z,{value:"Python",label:"Python SDK",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The Python Patch builders are entity-oriented and located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/9588440549f3d99965085e97b214a7dabc181ed2/metadata-ingestion/src/datahub/specific"},"metadata-ingestion")," module and located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub.specific")," module."),(0,r.kt)("p",null,"Here are a few illustrative examples using the Python Patch builders:"),(0,r.kt)("h3",{id:"add-properties-to-dataset"},"Add Properties to Dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .add_custom_property("cluster_name", "datahubproject.acryl.io")\n        .add_custom_property("retention_time", "2 years")\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(f"Added cluster_name, retention_time properties to dataset {dataset_urn}")\n\n')))))}h.isMDXComponent=!0}}]);