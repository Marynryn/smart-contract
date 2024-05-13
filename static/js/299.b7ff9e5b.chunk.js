"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[299],{3553:(e,s,t)=>{t.d(s,{A:()=>R});var a=t(7565),r=t(5613),l=t(7929);const n=e=>{let{props:s}=e;return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{className:"fill-white stroke-black",width:16,height:16,children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-map-pin")})}),(0,l.jsx)("p",{className:"ml-2 text-base",children:s.location})]})},i=e=>{let{props:s}=e;return(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("p",{className:"",children:["Price / 1 hour: ",(0,l.jsxs)("span",{className:"text-green mr-12",children:[s.price_per_hour,"$"]})]})})},o=e=>{let{props:s}=e;return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{className:"fill-yellow",width:16,height:16,children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-star-full")})}),(0,l.jsxs)("h4",{className:"ml-2 text-base",children:["Rating: ",s.rating]})]})};var c=t(9442),d=t(896),h=t(404);const x=()=>{const e=[];e.push({value:"header",label:"Meeting Time",isDisabled:!0});for(let s=540;s<=630;s+=30){const t=Math.floor(s/60),a=s%60,r="".concat(t.toString().padStart(2,"0"),"  :  ").concat(a.toString().padStart(2,"0"));e.push({value:r,label:r})}return e};var m=t(4927),p=t(9079),u=t(390);const g=e=>{let{props:s,onClose:t}=e;const[n,i]=(0,a.useState)(!1),o=(0,c.mN)({resolver:(0,m.t)(p.w)}),{handleSubmit:g,control:b,formState:{errors:f},register:j}=o;return(0,l.jsx)(c.Op,{...o,children:(0,l.jsxs)("div",{className:"overflow-y-auto",children:[(0,l.jsx)("h2",{className:" text-3xl font-medium mb-5",style:{"@media screen and (minWidth:1024px)":{fontSize:"40px",lineHeight:"48px "}},children:"Make an appointment with a babysitter"}),(0,l.jsx)("p",{className:"text-base font-normal text-gray mb-10",children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),(0,l.jsxs)("div",{className:"flex mb-10",style:{gap:"14px"},children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:"",style:{borderRadius:"15px"},alt:"nanny",src:s.avatar_url,width:44,height:44})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-gray font-medium text-xs",children:"Your Nanny"}),(0,l.jsx)("h3",{className:"text-base font-medium mt-1",children:s.name})]})]}),(0,l.jsxs)("form",{onSubmit:g((e=>{console.log(e),t()})),className:"",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)(d.A,{type:"text",name:"address",placeholder:"Address"}),(0,l.jsx)(d.A,{type:"phone",name:"phone",placeholder:"+380"})]}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsxs)("div",{className:" border border-border-gray  h-12 mb-4  items-center rounded-xl relative",children:[(0,l.jsx)("input",{type:"number",name:"age",placeholder:"Child's age",className:" bg-white pl-4 focus:border-teal-900  h-full w-full rounded-xl placeholder-black text-base font-normal text-black",...j("age")}),f.age&&(0,l.jsx)(u.A,{message:f.age.message})]}),(0,l.jsxs)("div",{className:"  border border-border-gray  h-12 mb-4  items-center rounded-xl relative",children:[(0,l.jsx)("input",{type:"text",name:"meetingTime",value:o.watch("meetingTime.value")||"00:00",readOnly:!0,required:!0,className:" bg-white pl-4 focus:border-teal-900  h-full w-full rounded-xl placeholder-black text-base font-normal text-black"}),(0,l.jsx)("svg",{className:"absolute right-4 top-4 fill-white stroke-black",onClick:()=>i(!n),width:20,height:20,children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-clock")})}),f.meetingTime&&(0,l.jsx)(u.A,{message:f.meetingTime.message}),n&&(0,l.jsx)("div",{className:"right-0 absolute rounded-3xl text-center",style:{width:"151px",height:"180px",fill:"#FFF",boxShadow:"rgba(0, 0, 0, 0.07))"},children:(0,l.jsx)(c.xI,{name:"meetingTime",control:b,defaultValue:"",render:e=>{let{field:s}=e;return(0,l.jsx)(h.Ay,{...s,options:x(),menuIsOpen:n,onMenuClose:()=>i(!1),autoFocus:!0,classNamePrefix:"select",styles:{menu:e=>({...e,zIndex:9999,borderRadius:"15px"}),control:()=>({display:"none"}),option:(e,s)=>({...e,fontSize:"16px",lineHeight:"20px",fontWeight:"500",padding:"6px",display:"flex",justifyContent:"center",backgroundColor:"transparent",color:s.isDisabled||s.isFocused?"black":"rgba(0,0,0,0.5)"})}})}})})]})]}),(0,l.jsx)(d.A,{type:"email",name:"email",placeholder:"Email"}),(0,l.jsx)(d.A,{type:"text",name:"name",placeholder:"Father's or mother's name"}),(0,l.jsx)("div",{className:"border border-border-gray w-full  mb-4 flex items-center rounded-xl",children:(0,l.jsx)("textarea",{className:" bg-white pl-4 focus:border-teal-900 w-full h-full rounded-xl placeholder-black text-base font-normal text-black pt-4",as:"textarea",rows:"6",cols:"50",name:"comment",placeholder:"Comment",style:{height:"116px"}})})]}),(0,l.jsx)("button",{type:"submit",className:" text-white w-full mt-10 bg-teal-900 rounded-full hover:bg-light-teal hover:text-teal-900",style:{height:"48px",border:"solid 1px",borderColor:"rgba(251, 251, 251, 0.40)"},children:(0,l.jsx)("span",{className:"",children:"Send"})})]})]})})};var b=t(4926);const f=e=>{let{reviewerName:s,reviewerRating:t,comment:a}=e;return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsx)("div",{className:"w-11 h-11 rounded-full bg-light-teal flex items-center justify-center font-medium text-xl text-teal-900 mb-4",children:s.charAt(0)}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("p",{className:"font-medium text-base",children:s}),(0,l.jsxs)("div",{className:"flex items-center  gap-2",children:[(0,l.jsx)("svg",{className:"fill-yellow",width:16,height:16,children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-star-full")})}),(0,l.jsx)("p",{className:"font-medium text-m h-5",children:(n=t,n===parseInt(n)?n.toFixed(1):n.toString())})]})]})]}),(0,l.jsx)("div",{className:"text-base text-gray mb-6",children:a})]});var n},j=e=>{let{user:s}=e;const[t,r]=(0,a.useState)(!1);return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("ul",{className:"mb-12 ",style:{marginTop:"34px"},children:s.reviews.map(((e,s)=>(0,l.jsx)("li",{className:"",children:(0,l.jsx)(f,{reviewerName:e.reviewer,reviewerRating:e.rating,comment:e.comment})},s)))}),(0,l.jsx)("button",{className:"bg-teal-900 text-white rounded-full hover:bg-light-teal hover:text-teal-900",type:"button",onClick:()=>{r(!t)},children:(0,l.jsx)("span",{className:" flex",style:{padding:"14px 28px",height:"48px",width:"215px"},children:"Make an appointment"})}),(0,l.jsx)(b.A,{isOpen:t,onClose:r,children:(0,l.jsx)(g,{props:s,onClose:r})})]})},v=()=>(0,l.jsx)("div",{className:"bg-gray hidden xl:flex items-center ",style:{margin:"0 16px",height:"16px",width:"1px"}}),N=e=>{const s=new Date(e),t=new Date;let a=new Date(t-s);return Math.abs(a.getUTCFullYear()-1970)},w=e=>{let{children:s}=e;return(0,l.jsx)("li",{className:"bg-light-gray rounded-3xl px-4 py-2",children:s})},y=e=>{let{props:s}=e;const t=N(s.birthday),a=s.characters.map((e=>e[0].toUpperCase()+e.slice(1))).join(", ");return(0,l.jsxs)("ul",{className:"flex flex-wrap gap-2 font-medium text-base text-gray",children:[(0,l.jsx)(w,{children:(0,l.jsxs)("p",{children:["Age: ",(0,l.jsx)("span",{className:"text-black underline underline-offset-1",children:t})," "]})}),(0,l.jsx)(w,{children:(0,l.jsxs)("p",{children:["Experience: ",(0,l.jsx)("span",{className:"text-black",children:s.experience})]})}),(0,l.jsxs)(w,{children:[" ",(0,l.jsxs)("p",{children:["Kids age:",(0,l.jsxs)("span",{className:"text-black",children:[" ",s.kids_age]})]})]}),(0,l.jsxs)(w,{children:[" ",(0,l.jsxs)("p",{children:["Characters:",(0,l.jsxs)("span",{className:"text-black",children:[" ",a]})]})]}),(0,l.jsx)(w,{children:(0,l.jsxs)("p",{children:["Education:",(0,l.jsxs)("span",{className:"text-black",children:[" ",s.education]})]})}),(0,l.jsxs)("li",{className:"mt-4",style:{marginBottom:"14px"},children:[" ",(0,l.jsx)("p",{className:"font-normal ",children:s.about})]})]})};var k=t(1918),A=t(723),S=t(2986),C=t(7493);const _=e=>{let{props:s}=e;const[t,n]=(0,a.useState)(!1),i=(0,A.wA)();(0,a.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];n(e.some((e=>e.name===s.name)))}),[s.name]);return(0,l.jsx)("button",{className:"w-6 h-6 m-0 bg-white hover:scale-110",onClick:()=>{if(!(0,C.Q)())return void k.oR.error("You must log in to add to favorites");const e=JSON.parse(localStorage.getItem("favorites"))||[];if(t){const t=e.filter((e=>e.name!==s.name));localStorage.setItem("favorites",JSON.stringify(t)),i((0,S.wy)(s.name))}else e.push(s),localStorage.setItem("favorites",JSON.stringify(e)),i((0,S._J)(s));n(!t)},children:(0,l.jsx)("svg",{className:t?" fill-teal-900 stroke-teal-900":"fill-white stroke-black stroke-width-1",width:26,height:26,children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-heart")})})})},T=e=>{let{props:s}=e;const[t,c]=(0,a.useState)(!1);return(0,l.jsxs)("div",{className:"p-6 lg:flex",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{className:"flex  items-center relative mr-6 mb-4 lg:mb-0",style:{borderRadius:"30px",border:"2px solid rgba(240, 63, 59, 0.20)",height:"120px",width:"120px"},children:[(0,l.jsx)("img",{className:"max-w-max ",alt:"nanny`s_photo",style:{margin:"10px",borderRadius:"15px"},src:s.avatar_url,width:96,height:96}),(0,l.jsx)("svg",{className:" fill-white absolute rounded-full  bg-green",style:{height:"14px",width:"14px",top:"9px",right:"9px"},children:(0,l.jsx)("use",{href:"".concat(r.A,"#icon-radio-unchecked"),width:14,height:14})})]}),(0,l.jsx)("div",{className:"mr-0 ml-auto lg:hidden",children:(0,l.jsx)(_,{props:s})})]}),(0,l.jsxs)("div",{className:" w-full",children:[(0,l.jsxs)("div",{className:"lg:flex justify-between items-start",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("p",{className:"text-gray font-medium text-base",children:"Nanny"}),(0,l.jsx)("h3",{className:"text-2xl font-medium mt-2 mb-6",children:s.name})]}),(0,l.jsxs)("div",{className:" flex items-center font-medium  text-base",children:[(0,l.jsxs)("div",{className:"m:flex",children:[(0,l.jsx)(n,{props:s}),(0,l.jsx)(v,{}),(0,l.jsx)(o,{props:s}),(0,l.jsx)(v,{}),(0,l.jsx)(i,{props:s})]}),(0,l.jsx)("div",{className:"hidden lg:block",children:(0,l.jsx)(_,{props:s})})]})]}),(0,l.jsx)("div",{className:"mt-4 lg:mt-0",children:(0,l.jsx)(y,{props:s})}),!t&&(0,l.jsx)("button",{className:"font-medium text-base hover:scale-110 underline underline-offset-1",type:"button",onClick:()=>{c(!t)},children:"Read more"}),t&&(0,l.jsx)("div",{className:"card-content",children:(0,l.jsx)(j,{user:s})})]})]})},R=e=>{let{props:s}=e;const[t,r]=(0,a.useState)([]);(0,a.useEffect)((()=>{r(s.slice(0,3))}),[s,3]);return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{className:" bg-white rounded-3xl mb-8",children:(0,l.jsx)(T,{props:e})},e.name)))}),t.length<s.length&&(0,l.jsx)("div",{className:"mt-16 text-center",children:(0,l.jsx)("button",{className:" bg-teal-900  text-white rounded-full hover:bg-light-teal hover:text-teal-900 ",style:{border:"solid 1px",borderColor:"rgba(251, 251, 251, 0.40)"},type:"button",onClick:()=>{const e=3*(Math.ceil(t.length/3)+1-1),a=Math.min(e+3,s.length);r((t=>[...t,...s.slice(e,a)]))},children:(0,l.jsx)("span",{className:"flex",style:{padding:"14px 40px",height:"48px",width:"159px"},children:"Load more"})})})]})}},266:(e,s,t)=>{t.d(s,{A:()=>i});t(7565);var a=t(723),r=t(404),l=t(2986),n=t(7929);const i=()=>{const e=[{value:"AtoZ",label:"A to Z"},{value:"ZtoA",label:"Z to A"},{value:"lessThen10",label:"Less than 10$"},{value:"greaterThan10",label:"Greater than 10$"},{value:"popular",label:"Popular"},{value:"notPopular",label:"Not popular"},{value:"showAll",label:"Show all"}],s=e[0],t=(0,a.wA)();return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-medium text-sm text-gray pb-2 ",children:"Filters"}),(0,n.jsx)(r.Ay,{className:"w-56 h-12 mb-8",options:e,defaultValue:s,onChange:e=>{t(e?(0,l.R6)(e.value):(0,l.Mj)())},styles:{control:(e,s)=>({...e,cursor:"default",backgroundColor:"#103931",color:"white",height:"48px",borderRadius:"14px",border:"none",boxShadow:s.isFocused?"0 0 0 2px rgba(0,0,0,0.2)":"none","&:hover":{border:"none"}}),singleValue:e=>({...e,color:"white",paddingLeft:"10px",margin:"0",width:"170px"}),ValueContainer:e=>({...e,width:"170px"}),input:e=>({...e,display:"none"}),indicatorSeparator:e=>({...e,display:"none"}),dropdownIndicator:e=>({...e,padding:"8px 0",marginRight:"18px",color:"white","&:hover":{color:"white"}}),menu:e=>({...e,borderRadius:"14px",padding:"10px 18px 2px 18px",zIndex:9999}),MenuList:e=>({...e,display:"inline-flex",gap:"12px",color:"rgba(17, 16, 28, 0.30)"}),option:(e,s)=>({...e,padding:"0 0 12px 0",lineHeight:"20px",fontSize:"18px",backgroundColor:"transparent",color:s.isFocused?"black":"rgba(17, 16, 28, 0.30)"})}})]})}},7468:(e,s,t)=>{t.d(s,{K5:()=>n,aS:()=>l});var a=t(123);const r=e=>e.cards.filter,l=(0,a.Mz)((e=>e.cards.items),r,((e,s)=>{switch(s){case"AtoZ":return e.slice().sort(((e,s)=>e.name.localeCompare(s.name)));case"ZtoA":return e.slice().sort(((e,s)=>s.name.localeCompare(e.name)));case"lessThen10":return e.filter((e=>e.price_per_hour<10));case"greaterThan10":return e.filter((e=>e.price_per_hour>10)).slice().sort(((e,s)=>e.price_per_hour-s.price_per_hour));case"popular":return e.filter((e=>e.rating>=4.85)).slice().sort(((e,s)=>s.rating-e.rating));case"notPopular":return e.filter((e=>e.rating<4.85)).slice().sort(((e,s)=>e.rating-s.rating));default:return e}})),n=(0,a.Mz)((e=>e.cards.favorites),r,((e,s)=>{switch(s){case"AtoZ":return e.slice().sort(((e,s)=>e.name.localeCompare(s.name)));case"ZtoA":return e.slice().sort(((e,s)=>s.name.localeCompare(e.name)));case"lessThen10":return e.filter((e=>e.price_per_hour<10));case"greaterThan10":return e.filter((e=>e.price_per_hour>10)).slice().sort(((e,s)=>e.price_per_hour-s.price_per_hour));case"popular":return e.filter((e=>e.rating>=4.85)).slice().sort(((e,s)=>s.rating-e.rating));case"notPopular":return e.filter((e=>e.rating<4.85)).slice().sort(((e,s)=>e.rating-s.rating));default:return e}}))}}]);
//# sourceMappingURL=299.b7ff9e5b.chunk.js.map