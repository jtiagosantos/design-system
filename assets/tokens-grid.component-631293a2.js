var c=Object.defineProperty;var i=(r,n)=>c(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime-c2142c84.js";const d=i(({tokens:r,hasRemValue:n=!1})=>t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:n?"Rem":"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([o,s])=>t("tr",{children:[e("td",{children:o}),e("td",{children:s}),n&&e("td",{children:Number(s.replace("rem",""))*16})]},o))})]}),"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/tokens-grid.component.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/tokens-grid.component.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=tokens-grid.component-631293a2.js.map
