(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1966],{4363:function(t,e,a){Promise.resolve().then(a.bind(a,49055))},49055:function(t,e,a){"use strict";a.r(e);var n=a(57437),s=a(52336),r=a(24033),u=a(2265),c=a(3198),o=a(12025),i=a(61396),l=a.n(i);e.default=()=>{let t=(0,c.I0)(),e=(0,r.useRouter)(),{isAuthenticated:a}=(0,c.v9)(t=>t.studentReducer);(0,u.useEffect)(()=>{a&&e.push("/student/auth")},[a]);let[i,d]=(0,u.useState)(""),[p,y]=(0,u.useState)(""),[h,m]=(0,u.useState)(""),[f,g]=(0,u.useState)(""),[w,R]=(0,u.useState)(""),[Z,x]=(0,u.useState)(""),[j,v]=(0,u.useState)(""),b=t=>{R(t.target.value)};return console.log(w),(0,n.jsx)("div",{className:"container flex flex-col items-center  mt-5",children:(0,n.jsxs)(o.Card,{color:"transparent",shadow:!1,children:[(0,n.jsx)(o.Typography,{variant:"h4",color:"blue-gray",children:"Sign Up"}),(0,n.jsx)(o.Typography,{color:"gray",className:"mt-1 font-normal",children:"Enter your details to register."}),(0,n.jsxs)("form",{className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",onSubmit:e=>{e.preventDefault(),t((0,s.X6)({firstname:i,lastname:p,contact:h,city:f,gender:w,email:Z,password:j}))},children:[(0,n.jsxs)("div",{className:"mb-4 flex flex-col gap-6",children:[(0,n.jsx)(o.Input,{type:"text",name:"firstname",value:i,onChange:t=>d(t.target.value),size:"lg",label:"First Name"}),(0,n.jsx)(o.Input,{type:"text",name:"lastname",value:p,onChange:t=>y(t.target.value),size:"lg",label:"Last Name"}),(0,n.jsx)(o.Input,{type:"text",name:"contact",value:h,onChange:t=>m(t.target.value),size:"lg",label:"Contact"}),(0,n.jsx)(o.Input,{type:"location",name:"city",value:f,onChange:t=>g(t.target.value),size:"lg",label:"City"}),(0,n.jsxs)("div",{className:"flex gap-10",children:[(0,n.jsx)(o.Radio,{name:"type",value:"Male",onChange:b,label:"Male"}),(0,n.jsx)(o.Radio,{name:"type",value:"Female",onChange:b,label:"Female"})]}),(0,n.jsx)(o.Input,{type:"email",name:"email",value:Z,onChange:t=>x(t.target.value),size:"lg",label:"Email Address"}),(0,n.jsx)(o.Input,{type:"Password",name:"Password",value:j,onChange:t=>v(t.target.value),size:"lg",label:"Password"})]}),(0,n.jsx)(o.Checkbox,{label:(0,n.jsxs)(o.Typography,{variant:"small",color:"gray",className:"flex items-center font-normal",children:["I agree the",(0,n.jsx)("a",{href:"#",className:"font-medium transition-colors hover:text-gray-900",children:"\xa0Terms and Conditions"})]}),containerProps:{className:"-ml-2.5"}}),(0,n.jsx)(o.Button,{type:"submit",className:"mt-6 bg-primary",fullWidth:!0,children:"Register"}),(0,n.jsxs)(o.Typography,{color:"gray",className:"mt-4 text-center font-normal",children:["Already have an account?"," ",(0,n.jsx)(l(),{href:"/student/signin",className:"font-medium text-gray-900",children:"Sign In"})]})]})]})})}},52336:function(t,e,a){"use strict";a.d(e,{AX:function(){return P},Bf:function(){return _},De:function(){return g},Dv:function(){return U},J7:function(){return r},LK:function(){return v},M0:function(){return k},Mn:function(){return m},N2:function(){return M},NP:function(){return o},RF:function(){return h},TZ:function(){return N},X6:function(){return u},Xf:function(){return d},bW:function(){return E},bu:function(){return c},dy:function(){return x},eU:function(){return I},f2:function(){return R},fB:function(){return A},iU:function(){return S},ib:function(){return b},iw:function(){return Z},jR:function(){return j},lo:function(){return i},m_:function(){return l},n5:function(){return p},p5:function(){return y},tU:function(){return C},ul:function(){return T},xQ:function(){return z},yJ:function(){return f},yS:function(){return w}});var n=a(11363),s=a(81170);a(60171);let r=()=>async(t,e)=>{try{let{data:e}=await n.Z.post("/student");t((0,s.wz)(e.student))}catch(e){t((0,s.Ru)(e.response.data))}},u=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/signup",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},c=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/signin",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},o=t=>async(t,e)=>{try{let{data:e}=await n.Z.get("/student/signout");t((0,s.$Z)())}catch(e){t((0,s.Ru)(e.response.data))}},i=t=>async(e,a)=>{try{let{_id:s}=a().studentReducer.student,{data:u}=await n.Z.post("/student/update/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},l=t=>async(e,a)=>{try{let{_id:s}=a().studentReducer.student,{data:u}=await n.Z.post("/student/avatar/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},d=t=>async(e,a)=>{try{let{_id:s}=a().studentReducer.student,{data:u}=await n.Z.post("/student/reset-password/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},p=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/send-mail/",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},y=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/forget-link/",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},h=()=>async(t,e)=>{try{let{data:e}=await n.Z.post("/student/alljobs/");t((0,s.hS)(e.jobs))}catch(e){t((0,s.Ru)(e.response.data))}},m=()=>async(t,e)=>{try{let{data:e}=await n.Z.post("/student/allinternships/");t((0,s.i_)(e.internships))}catch(e){t((0,s.Ru)(e.response.data))}},f=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/apply/job/"+t);e(r()),e(h())}catch(t){e((0,s.Ru)(t.response.data))}},g=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/student/apply/internship/"+t);e(r()),e(m())}catch(t){e((0,s.Ru)(t.response.data))}},w=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-edu",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},R=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/delete-edu/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},Z=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-edu/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},x=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-job",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},j=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/delete-job/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},v=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-job/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},b=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-intern",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},N=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-intern/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},C=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-resp",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},S=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/delete-resp/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},k=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-resp/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},I=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-cours",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},_=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/delete-cours/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},z=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-cours/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},P=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-proj",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},A=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-proj/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},E=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/add-skil",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},T=t=>async(e,a)=>{try{let{data:a}=await n.Z.post("/resume/delete-skil/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},M=(t,e)=>async(a,u)=>{try{let{data:s}=await n.Z.post("/resume/edit-skil/"+t,e);a(r())}catch(t){a((0,s.Ru)(t.response.data))}},U=t=>async(t,e)=>{try{let{data:e}=await n.Z.post("/student/delete");t((0,s.$Z)())}catch(e){t((0,s.Ru)(e.response.data))}}},81170:function(t,e,a){"use strict";a.d(e,{$Z:function(){return o},Ru:function(){return i},hS:function(){return u},i_:function(){return c},ru:function(){return l},wz:function(){return r}});var n=a(20064);let s=(0,n.oM)({name:"student",initialState:{student:null,jobs:null,internships:null,errors:[],isAuthenticated:!1},reducers:{addstudent:(t,e)=>{t.student=e.payload,t.isAuthenticated=!0},addjobs:(t,e)=>{t.jobs=e.payload},addinternships:(t,e)=>{t.internships=e.payload},removestudent:(t,e)=>{t.student=null,t.isAuthenticated=!1,t.errors=[]},iserror:(t,e)=>{t.errors.push(e.payload)},removeerror:(t,e)=>{t.errors=[]}}}),{addstudent:r,addjobs:u,addinternships:c,removestudent:o,iserror:i,removeerror:l}=s.actions;e.ZP=s.reducer},11363:function(t,e,a){"use strict";var n=a(29222);let s=n.Z.create({baseURL:"http://localhost:8080/",withCredentials:!0});e.Z=s},24033:function(t,e,a){t.exports=a(68165)}},function(t){t.O(0,[6384,3306,9738,9222,1688,1396,2971,596,1744],function(){return t(t.s=4363)}),_N_E=t.O()}]);