const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-BbDhPHzg.js","./iframe-B3Ki1R26.js","./index-B3ehnkiM.js","./_commonjsHelpers-Cpj98o6Y.js","./react-18-DVrhWT7v.js","./index-D82174N9.js","./index-DE6Pbb1N.js","./index-C0WyxOS1.js","./index-DXimoRZY.js","./index-BPhVFo-B.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-B3Ki1R26.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-BbDhPHzg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
