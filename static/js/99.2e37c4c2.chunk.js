"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{5613:(e,t,s)=>{s.d(t,{A:()=>a});s(7565);const a=s.p+"static/media/symbol-defs.655dd4efcaaa696c59eed757047d665f.svg"},390:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(7929);const r=e=>{let{message:t}=e;return/age must be a `number` type/i.test(t)&&(t="Age must be a number"),(0,a.jsx)("div",{className:"absolute  -top-4 mt-1 right-0 bg-red-400 text-white  py-1 rounded  text-xs z-50 ",style:{padding:"4px 3px"},children:t})}},1099:(e,t,s)=>{s.d(t,{A:()=>C});var a=s(1030),r=s(477),l=s(7493),n=s(7565),i=s(7929);const o=()=>{const e=(0,a.zy)(),[t,s]=(0,n.useState)("");return(0,n.useEffect)((()=>{s(e.pathname)}),[e]),(0,i.jsx)("nav",{className:"lg:items-center  text-center",children:(0,i.jsxs)("ul",{className:"block lg:h-10 lg:flex text-center mb-4 lg:mb-0 lg:justify-center  lg:items-center ",children:[(0,i.jsx)("li",{id:"1",className:"font-normal mb-4 lg:mb-0 text-base lg:mr-8 xl:mr-10 hover:scale-110",children:(0,i.jsx)(r.k2,{to:"/",children:"Home"})}),(0,i.jsx)("li",{id:"2",className:"font-normal mb-4 lg:mb-0 hover:scale-110 after:hidden text-base ".concat("/nannies"===t?' relative lg:after:block after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute':""),children:(0,i.jsx)(r.k2,{to:"/nannies",children:"Nannies"})}),(0,i.jsxs)("li",{id:"3",className:"font-normal  after:hidden hover:scale-110 text-base lg:ml-8 ".concat("/favorites"===t?' relative lg:after:block after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute':""),children:["  ",(0,l.Q)()&&(0,i.jsx)(r.k2,{className:"",to:"/favorites",children:"Favorites"})]})]})})},c=()=>(0,i.jsx)(o,{});var d=s(5613),m=s(9401);const h=e=>{let{children:t,onClick:s,type:a}=e;return(0,i.jsx)("button",{type:a,onClick:s,className:" bg-teal-900  rounded-full hover:bg-white hover:text-teal-900 ",style:{border:"solid 1px",borderColor:"rgba(251, 251, 251, 0.40)"},children:t})};var u=s(5211);const x=()=>{const[e,t]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{const e=await(0,l.Q)();t(e)})()}),[]);return(0,i.jsxs)("div",{className:"lg:flex  items-center text-center",children:[e?(0,i.jsxs)("div",{className:"hidden lg:flex",children:[(0,i.jsx)("div",{className:"w-10 h-10 bg-white rounded-xl flex items-center justify-center",children:(0,i.jsx)("svg",{className:"",width:16,height:16,children:(0,i.jsx)("use",{href:"".concat(d.A,"#icon-avatar")})})}),(0,i.jsx)("p",{className:"ml-4 mr-6 flex items-center",children:e.displayName})]}):null,(0,i.jsx)(h,{type:"button",onClick:async()=>{try{await(0,u.CI)(m.j2),console.log("Logout successful"),t(null)}catch(e){console.error("Error logging out:",e)}},children:(0,i.jsx)("span",{className:"flex items-center text-xs xl:text-base",style:{padding:"14px 30px",height:"48px"},children:"Log Out"})})]})};var g=s(4926),b=s(9442),f=s(1918),p=s(896),j=s(4927),v=s(9079),w=s(390);const y=e=>{let{type:t,onClose:s}=e;const[a,r]=(0,n.useState)(!1),l=(0,b.mN)({resolver:(0,j.t)(v.Q)}),{handleSubmit:o,formState:{errors:c},register:h}=l,x=l.handleSubmit((async e=>{console.log(e);const{email:a,password:r,name:l}=e;try{if("login"===t)await(0,u.x9)(m.j2,a,r);else{const e=await(0,u.eJ)(m.j2,a,r);console.log(e),l&&await(0,u.r7)(e.user,{displayName:l}),s()}}catch(n){f.oR.error("Invalid email or password")}}));return(0,i.jsx)(b.Op,{...l,children:(0,i.jsxs)("form",{onSubmit:o(x),className:"block gap-10",children:[(0,i.jsx)("p",{className:"mb-5 text-4xl font-medium",children:"".concat("register"===t?"Registration":"Log In")}),(0,i.jsxs)("p",{className:"mb-10 text-s font-base",style:{color:"rgba(17, 16, 28, 0.50)"},children:["".concat("register"===t?"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.":"Welcome back! Please enter your credentials to access your account and continue your babysitter search."),"   "]}),(0,i.jsxs)("div",{className:"w-full relative",children:["register"===t&&(0,i.jsx)(p.A,{name:"name",placeholder:"Name"}),(0,i.jsx)(p.A,{name:"email",placeholder:"Email"}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",{type:a?"text":"password",name:"password",placeholder:"Password",className:"border border-border-gray w-full h-12 mb-4 pl-4 focus:border-teal-900 rounded-xl placeholder-black text-base font-normal text-black",...h("password")}),c.password&&(0,i.jsx)(w.A,{message:c.password.message}),(0,i.jsx)("button",{type:"button",className:"absolute right-4 ",style:{top:"14px"},onClick:()=>{r(!a)},children:a?(0,i.jsx)("svg",{className:"w-5 h-5  top-3/4 right-1/4 mb-4 fill-white stroke-black",children:(0,i.jsx)("use",{href:"".concat(d.A,"#icon-eye"),width:20,height:20})}):(0,i.jsx)("svg",{className:"w-5 h-5  top-3/4 right-1/4 mb-4 fill-white stroke-black",children:(0,i.jsx)("use",{href:"".concat(d.A,"#icon-eye-off"),width:20,height:20})})})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:" bg-teal-900  border  border-stone-200 rounded-full w-full py-3 text-center mt-8 text-white  hover:bg-light-teal",type:"submit",children:(0,i.jsx)("span",{className:"",children:"".concat("login"===t?"Log In":"Sign Up")})})})]})})},N=()=>{const[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(""),r=s=>{a(s),t(!e)};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("ul",{className:"lg:flex  lg:items-center justify-center lg:justify-between ",children:[(0,i.jsx)("li",{className:" mb-4 lg:mb-0 lg:mr-4",children:(0,i.jsx)("button",{className:"border  border-stone-200 rounded-full  hover:bg-white hover:text-teal-900",type:"button",onClick:()=>r("login"),children:(0,i.jsx)("span",{className:"bg-transparent flex px-6 py-2 text-base lg:px-10",children:"Log In"})})},"login"),(0,i.jsx)("li",{children:(0,i.jsx)(h,{type:"button",onClick:()=>r("register"),children:(0,i.jsx)("span",{className:" flex px-6 py-2 text-base lg:px-10",children:"Registration"})})},"register")]}),(0,i.jsx)(g.A,{isOpen:e,onClose:t,children:(0,i.jsx)(y,{type:s,onClose:t})})]})};var k=s(6396);const A=e=>{let{isOpen:t,onClose:s,isLog:a}=e;const r=(0,n.useCallback)((()=>{s(!1)}),[s]);return(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.code&&r()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[r]),t?k.createPortal((0,i.jsxs)("div",{className:"fixed inset-0  flex justify-center items-center lg:hidden",onClick:e=>{e.currentTarget===e.target&&r()},children:[(0,i.jsx)("div",{className:"fixed inset-0 bg-black opacity-50"}),(0,i.jsxs)("div",{className:"absolute right-0 top-0 h-full bg-teal-900 text-white w-80 shadow-lg p-4",children:[(0,i.jsx)("button",{type:"button",className:" flex mr-0 ml-auto hover:scale-110 ",onClick:r,children:(0,i.jsx)("svg",{className:"w-4 h-4 fill-white",children:(0,i.jsx)("use",{href:"".concat(d.A,"#icon-x"),width:16,height:16})})}),(0,i.jsxs)("div",{className:"text-center mt-24 h-52 ",children:[(0,i.jsx)(c,{}),a?(0,i.jsx)(x,{}):(0,i.jsx)(N,{})]})]})]}),document.getElementById("modal-root")):null},C=()=>{const[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)((0,l.Q)());return(0,n.useEffect)((()=>m.j2.onAuthStateChanged((e=>{a(!!e)}))),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:" flex justify-between items-center gap-4",children:[(0,i.jsx)("p",{className:" text-lg font-medium xl:text-2xl flex items-start ",children:"Nanny.Services"}),(0,i.jsx)("div",{className:"mr-0 ml-auto lg:hidden w-6 h-6",children:(0,i.jsx)("button",{type:"button",className:"hover:scale-110",onClick:()=>{t(!e)},children:(0,i.jsx)("svg",{className:" stroke-white",width:24,height:24,children:(0,i.jsx)("use",{href:"".concat(d.A,"#icon-menu-hamburger")})})})}),(0,i.jsx)("div",{className:"hidden lg:block ",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"hidden lg:block",children:s?(0,i.jsx)(x,{}):(0,i.jsx)(N,{})})]}),(0,i.jsx)(A,{isOpen:e,onClose:t,isLog:s})]})}},896:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(390),r=(s(7565),s(9442)),l=s(7929);const n=e=>{let{name:t,placeholder:s}=e;const{register:n,formState:{errors:i}}=(0,r.xW)();return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{className:" bg-white border border-border-gray w-full h-12 mb-4 pl-4 focus:border-teal-900 rounded-xl placeholder-black text-base font-normal text-black",type:"text",...n(t),placeholder:s}),i[t]&&(0,l.jsx)(a.A,{message:i[t].message})]})}},4926:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(7565),r=s(5613),l=s(6396),n=s(7929);const i=e=>{let{isOpen:t,onClose:s,children:i}=e;const o=(0,a.useCallback)((()=>{s(!1)}),[s]);return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.code&&o()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[o]),t?l.createPortal((0,n.jsx)("div",{className:"h-full w-full flex items-center justify-center fixed bg-slate-600 z-40 top-0 left-0  ",style:{minWidth:"320px"},onClick:e=>{e.currentTarget===e.target&&o()},children:(0,n.jsxs)("div",{className:" overflow-y-auto  relative   z-30 bg-white rounded-2xl  ",style:{width:"calc(565 / 1440 * 100%)",minWidth:"300px",padding:" calc(64 / 1440 * 100%)",maxHeight:"95%",scrollbarWidth:"thin",scrollbarBorderRadius:"16px"},children:[(0,n.jsx)("button",{type:"button",className:"hover:scale-110 flex mr-0 ml-auto absolute top-4 right-4",onClick:o,children:(0,n.jsx)("svg",{className:"w-8 h-8   ",children:(0,n.jsx)("use",{href:"".concat(r.A,"#icon-x"),width:32,height:32})})}),i]})}),document.getElementById("modal-root")):null}},9079:(e,t,s)=>{s.d(t,{Q:()=>r,w:()=>l});var a=s(7685);const r=a.Ik({name:a.Yj().trim().min(2,"Name must be at least 2 characters").max(32,"Name must be no more than 32 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]*$/,"Name can only contain letters, numbers, and spaces"),email:a.Yj().trim().email().required("Email is required").matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,"Invalid email format"),password:a.Yj().trim().required("Password is required").matches(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,"Invalid password format").min(6,"Password must be at least 8 characters").max(64,"Password must be no more than 64 characters").test("no-spaces","Password cannot contain spaces",(e=>!/\s/.test(e)))}),l=a.Ik().shape({address:a.Yj().required("Address is required"),phone:a.Yj().required("Phone is required").matches(/^[0-9]{5,15}$/,"Phone  must be 5 - 15 digits"),age:a.ai("Age must be a number").required("Age is required").min(1,"Age must be at least 1").max(18,"Age must be less than 18"),email:a.Yj().email().required("Email is required").matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,"Invalid email format"),name:a.Yj().required("Name is required").trim().min(2,"Name must be at least 2 characters").max(32,"Name must be no more than 32 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]*$/,"Name can only contain letters, numbers, and spaces"),comment:a.Yj(),meetingTime:a.Ik().required("Choose a meeting")})}}]);
//# sourceMappingURL=99.2e37c4c2.chunk.js.map