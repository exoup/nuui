import{r as n,j as e}from"./index-9ikmvCms.js";import{B as s}from"./Button-96I3BsFA.js";import{M as f,a as p,C as x,b as h,c as a,U as j,d as w,e as B,A as N}from"./UserCircleIcon-TCOLY3R5.js";import"./mapObjectToString-IQ2lNw05.js";function g({title:o,titleId:t,...u},m){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":t},u),o?n.createElement("title",{id:t},o):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const y=n.forwardRef(g),r=y,v={args:{children:"Button",disabled:!1},argTypes:{onClick:{action:"clicked"},color:{defaultValue:"default",options:["default"],control:{type:"radio"}},radius:{defaultValue:"round",options:["round","sharp","full"],control:{type:"inline-radio"}},size:{defaultValue:"normal",options:["normal","wide","full","reset"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","outline","ghost"],control:{type:"inline-radio"}}}},I=({children:o,...t})=>e.jsx(s,{...t,children:o}),l=({children:o,...t})=>e.jsx(s,{...t,children:o});l.args={children:"Pill Button",size:"wide",radius:"full"};l.storyName="Pill Button";const i=({...o})=>e.jsx(s,{...o,children:e.jsx(r,{className:"size-14 p-2"})});i.args={radius:"full",size:"reset"};i.storyName="Shape Button";const c=({children:o,...t})=>e.jsxs(s,{...t,className:"flex gap-2 place-content-center",children:[e.jsx(r,{className:"size-6"}),o]});c.args={children:"Icon Button"};c.storyName="Icon Button";const d=({children:o,...t})=>e.jsxs(f,{children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(s,{...t,className:"rounded-r-none border-r-black/25 border-r",children:o}),e.jsx(p,{children:e.jsx(s,{color:t.color,radius:t.radius,size:t.size,variant:t.variant,className:"px-2.5 rounded-l-none",children:e.jsx(x,{className:"size-6"})})})]}),e.jsxs(h,{...t,className:"w-44",children:[e.jsxs(a,{children:[e.jsx(j,{className:"size-5"}),"Profile"]}),e.jsxs(a,{children:[e.jsx(w,{className:"size-5"}),"Settings"]}),e.jsx(B,{}),e.jsxs(a,{disabled:!0,children:[e.jsx(N,{className:"size-5"}),"Logout"]})]})]});d.args={children:"Split Button"};d.storyName="Split Button";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Default,c as IconButtonDefault,l as PillButtonDefault,i as ShapeButtonDefault,d as SplitButtonDefault,v as default};