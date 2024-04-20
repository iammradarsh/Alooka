(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8877],{65140:function(e,t,a){Promise.resolve().then(a.bind(a,23186))},23186:function(e,t,a){"use strict";a.r(t);var s=a(57437),n=a(13067),l=a(64376),r=a(24033),o=a(2265),i=a(3198),c=a(60171),u=a(12025),d=a(61396),m=a.n(d);t.default=()=>{let{errors:e}=(0,i.v9)(e=>e.employeReducer),t=(0,i.I0)(),a=(0,r.useRouter)(),[d,p]=(0,o.useState)(""),[y,h]=(0,o.useState)(""),[x,f]=(0,o.useState)("In office"),[g,b]=(0,o.useState)(Number),[v,j]=(0,o.useState)(""),[w,N]=(0,o.useState)(""),[R,C]=(0,o.useState)(""),[k,S]=(0,o.useState)(""),[Z,I]=(0,o.useState)(""),P=e=>{f(e.target.value)};return e.length>0&&(e.map((e,t)=>{c.Am.error(e.message+" - Fill all Details",{position:"top-right",autoClose:3e3,hideProgressBar:!0})}),t((0,l.ru)())),(0,s.jsx)("div",{className:"container mt-5",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t((0,n.H7)({title:d,skill:y,jobtype:x,openings:g,description:v,preferences:w,salary:R,perks:k,assessments:Z})),p(""),h(""),f(""),b(""),j(""),N(""),C(""),S(""),I(""),a.push("/employe/auth/applied")},className:"px-20",children:[(0,s.jsxs)("div",{className:"space-y-12",children:[(0,s.jsxs)("div",{className:"border-b flex flex-col border-gray-900/10 pb-12",children:[(0,s.jsx)("h2",{className:"text-3xl font-semibold leading-7 text-gray-900 ",children:"Create Job"}),(0,s.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"This information will be displayed publicly so be careful what you share."}),(0,s.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,s.jsx)("div",{className:"sm:col-span-4",children:(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("div",{className:"flex rounded-md shadow-sm sm:max-w-md",children:(0,s.jsx)(u.Input,{type:"text",name:"title",value:d,onChange:e=>p(e.target.value),autoComplete:"title",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",label:"Title"})})})}),(0,s.jsx)("div",{className:"sm:col-span-4",children:(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("div",{className:"flex rounded-md shadow-sm sm:w-72",children:(0,s.jsx)(u.Input,{type:"text",name:"skill",value:y,onChange:e=>h(e.target.value),autoComplete:"skill",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",label:"Skills"})})})}),(0,s.jsxs)("div",{className:"sm:col-span-4 ",children:[(0,s.jsx)("label",{htmlFor:"jobtype",className:"block text-sm font-medium leading-6 text-gray-900",children:"Job Type"}),(0,s.jsxs)("div",{className:"flex gap-5",children:[(0,s.jsx)(u.Radio,{name:"type",value:"In office",onChange:P,label:"In office"}),(0,s.jsx)(u.Radio,{name:"type",value:"Remote",onChange:P,label:"Remote"})]})]})]})]}),(0,s.jsxs)("div",{className:"sm:col-span-4 flex flex-col gap-10 border-gray-900/10 border-b pb-12 ",children:[(0,s.jsx)("div",{className:"rounded-md shadow-sm sm:w-72 ",children:(0,s.jsx)(u.Input,{type:"text",name:"openings",value:g,onChange:e=>b(e.target.value),label:"Openings"})}),(0,s.jsx)("div",{className:"flex w-96 flex-col gap-6",children:(0,s.jsx)(u.Textarea,{value:v,onChange:e=>j(e.target.value),variant:"static",label:"Description",placeholder:"Description"})}),(0,s.jsx)("div",{className:"rounded-md shadow-sm sm:w-72 ",children:(0,s.jsx)(u.Input,{type:"text",name:"preferences",value:w,onChange:e=>N(e.target.value),label:"Preferences"})}),(0,s.jsx)("div",{className:"rounded-md shadow-sm sm:w-72 ",children:(0,s.jsx)(u.Input,{type:"text",name:"salary",value:R,onChange:e=>C(e.target.value),label:"Salary"})}),(0,s.jsx)("div",{className:"rounded-md shadow-sm sm:w-72 ",children:(0,s.jsx)(u.Input,{type:"text",name:"perks",value:k,onChange:e=>S(e.target.value),label:"Perks"})}),(0,s.jsx)("div",{className:"rounded-md shadow-sm sm:w-72 ",children:(0,s.jsx)(u.Input,{type:"text",name:"assessments",value:Z,onChange:e=>I(e.target.value),label:"Assessments"})})]})]}),(0,s.jsxs)("div",{className:"mt-6 flex items-center justify-start gap-x-6",children:[(0,s.jsx)(m(),{href:"/employe/auth",type:"button",className:"text-[15px] font-semibold leading-6 text-gray-900",children:"Cancel"}),(0,s.jsx)("button",{type:"submit",className:"rounded-md bg-indigo-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Create Job"})]})]})})}},13067:function(e,t,a){"use strict";a.d(t,{H7:function(){return y},KO:function(){return i},LA:function(){return u},Rn:function(){return m},UK:function(){return c},Uk:function(){return r},a:function(){return l},aS:function(){return p},fT:function(){return d},l0:function(){return o},rx:function(){return h}});var s=a(11363),n=a(64376);a(60171);let l=()=>async(e,t)=>{try{let{data:t}=await s.Z.post("/employe/current");e((0,n.PB)(t.employe))}catch(t){e((0,n.Ru)(t.response.data))}},r=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/signup",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},o=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/signin",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},i=e=>async(e,t)=>{try{let{data:t}=await s.Z.get("/employe/signout");e((0,n.gq)())}catch(t){e((0,n.Ru)(t.response.data))}},c=e=>async(t,a)=>{try{let{_id:n}=a().employeReducer.employe,{data:r}=await s.Z.post("/employe/update/"+n,e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},u=e=>async(t,a)=>{try{let{_id:n}=a().employeReducer.employe,{data:r}=await s.Z.post("/employe/avatar/"+n,e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},d=e=>async(t,a)=>{try{let{_id:n}=a().employeReducer.employe,{data:r}=await s.Z.post("/employe/reset-password/"+n,e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},m=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/send-mail/",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},p=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/forget-link/",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},y=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/job/create",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}},h=e=>async(t,a)=>{try{let{data:a}=await s.Z.post("/employe/internship/create",e);t(l())}catch(e){t((0,n.Ru)(e.response.data))}}},64376:function(e,t,a){"use strict";a.d(t,{PB:function(){return l},Ru:function(){return c},gq:function(){return i},ru:function(){return u}});var s=a(20064);let n=(0,s.oM)({name:"employe",initialState:{employe:null,jobs:null,internships:null,errors:[],isAuthenticated:!1},reducers:{addemploye:(e,t)=>{e.employe=t.payload,e.isAuthenticated=!0},addjobs:(e,t)=>{e.jobs=t.payload},addinternships:(e,t)=>{e.internships=t.payload},removeemploye:(e,t)=>{e.employe=null,e.isAuthenticated=!1,e.errors=[]},iserror:(e,t)=>{e.errors.push(t.payload)},removeerror:(e,t)=>{e.errors=[]}}}),{addemploye:l,addjobs:r,addinternships:o,removeemploye:i,iserror:c,removeerror:u}=n.actions;t.ZP=n.reducer},11363:function(e,t,a){"use strict";var s=a(29222);let n=s.Z.create({baseURL:"https://alooka.onrender.com/",withCredentials:!0});t.Z=n},24033:function(e,t,a){e.exports=a(68165)}},function(e){e.O(0,[6384,3306,9738,9222,1688,1396,2971,596,1744],function(){return e(e.s=65140)}),_N_E=e.O()}]);