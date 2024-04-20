(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6097],{69986:function(t,e,n){Promise.resolve().then(n.bind(n,43737))},43737:function(t,e,n){"use strict";n.r(e);var a=n(57437),s=n(52336),r=n(24033),u=n(2265),c=n(3198),o=n(12025);e.default=t=>{let{params:e}=t,{student:n}=(0,c.v9)(t=>t.studentReducer),i=n&&n.resume.jobs.findIndex(t=>t.id===e.id),d=n&&n.resume.jobs[i],[l,p]=(0,u.useState)(n&&d.profile),[y,h]=(0,u.useState)(n&&d.organization),[f,m]=(0,u.useState)(n&&d.location),[w,R]=(0,u.useState)(n&&d.start),[Z,g]=(0,u.useState)(n&&d.end),[j,b]=(0,u.useState)(n&&d.description),v=(0,r.useRouter)(),x=(0,c.I0)();return(0,a.jsx)("div",{className:"container mt-5  flex justify-center",children:(0,a.jsxs)(o.Card,{color:"transparent",shadow:!1,children:[(0,a.jsx)(o.Typography,{color:"gray",className:"mt-1 font-normal",children:"Update details"}),(0,a.jsxs)("form",{className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",children:[(0,a.jsxs)("div",{className:"mb-4 flex flex-col gap-6",children:[(0,a.jsx)(o.Input,{value:l,onChange:t=>{p(t.target.value)},size:"lg",label:"Profile"}),(0,a.jsx)(o.Input,{value:y,onChange:t=>{h(t.target.value)},size:"lg",label:"Organization"}),(0,a.jsx)(o.Input,{value:f,onChange:t=>{m(t.target.value)},size:"lg",label:"Location"}),(0,a.jsx)(o.Input,{type:"date",value:w,onChange:t=>{R(t.target.value)},size:"lg",label:"start"}),(0,a.jsx)(o.Input,{type:"date",value:Z,onChange:t=>{g(t.target.value)},size:"lg",label:"end"}),(0,a.jsx)(o.Input,{value:j,onChange:t=>{b(t.target.value)},size:"lg",label:"description"})]}),(0,a.jsx)(o.Button,{onClick:()=>{x((0,s.LK)(e.id,{profile:l,organization:y,location:f,start:w,end:Z,description:j})),v.push("/student/auth/resume")},className:"mt-6",fullWidth:!0,children:"Update"})]})]})})}},52336:function(t,e,n){"use strict";n.d(e,{AX:function(){return U},Bf:function(){return _},De:function(){return w},Dv:function(){return E},J7:function(){return r},LK:function(){return v},M0:function(){return N},Mn:function(){return f},N2:function(){return B},NP:function(){return o},RF:function(){return h},TZ:function(){return z},X6:function(){return u},Xf:function(){return l},bW:function(){return L},bu:function(){return c},dy:function(){return j},eU:function(){return S},f2:function(){return Z},fB:function(){return A},iU:function(){return k},ib:function(){return x},iw:function(){return g},jR:function(){return b},lo:function(){return i},m_:function(){return d},n5:function(){return p},p5:function(){return y},tU:function(){return C},ul:function(){return P},xQ:function(){return I},yJ:function(){return m},yS:function(){return R}});var a=n(11363),s=n(81170);n(60171);let r=()=>async(t,e)=>{try{let{data:e}=await a.Z.post("/student");t((0,s.wz)(e.student))}catch(e){t((0,s.Ru)(e.response.data))}},u=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/signup",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},c=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/signin",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},o=t=>async(t,e)=>{try{let{data:e}=await a.Z.get("/student/signout");t((0,s.$Z)())}catch(e){t((0,s.Ru)(e.response.data))}},i=t=>async(e,n)=>{try{let{_id:s}=n().studentReducer.student,{data:u}=await a.Z.post("/student/update/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},d=t=>async(e,n)=>{try{let{_id:s}=n().studentReducer.student,{data:u}=await a.Z.post("/student/avatar/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},l=t=>async(e,n)=>{try{let{_id:s}=n().studentReducer.student,{data:u}=await a.Z.post("/student/reset-password/"+s,t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},p=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/send-mail/",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},y=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/forget-link/",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},h=()=>async(t,e)=>{try{let{data:e}=await a.Z.post("/student/alljobs/");t((0,s.hS)(e.jobs))}catch(e){t((0,s.Ru)(e.response.data))}},f=()=>async(t,e)=>{try{let{data:e}=await a.Z.post("/student/allinternships/");t((0,s.i_)(e.internships))}catch(e){t((0,s.Ru)(e.response.data))}},m=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/apply/job/"+t);e(r()),e(h())}catch(t){e((0,s.Ru)(t.response.data))}},w=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/student/apply/internship/"+t);e(r()),e(f())}catch(t){e((0,s.Ru)(t.response.data))}},R=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-edu",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},Z=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/delete-edu/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},g=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-edu/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},j=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-job",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},b=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/delete-job/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},v=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-job/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},x=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-intern",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},z=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-intern/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},C=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-resp",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},k=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/delete-resp/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},N=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-resp/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},S=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-cours",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},_=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/delete-cours/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},I=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-cours/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},U=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-proj",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},A=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-proj/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},L=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/add-skil",t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},P=t=>async(e,n)=>{try{let{data:n}=await a.Z.post("/resume/delete-skil/"+t);e(r())}catch(t){e((0,s.Ru)(t.response.data))}},B=(t,e)=>async(n,u)=>{try{let{data:s}=await a.Z.post("/resume/edit-skil/"+t,e);n(r())}catch(t){n((0,s.Ru)(t.response.data))}},E=t=>async(t,e)=>{try{let{data:e}=await a.Z.post("/student/delete");t((0,s.$Z)())}catch(e){t((0,s.Ru)(e.response.data))}}},81170:function(t,e,n){"use strict";n.d(e,{$Z:function(){return o},Ru:function(){return i},hS:function(){return u},i_:function(){return c},ru:function(){return d},wz:function(){return r}});var a=n(20064);let s=(0,a.oM)({name:"student",initialState:{student:null,jobs:null,internships:null,errors:[],isAuthenticated:!1},reducers:{addstudent:(t,e)=>{t.student=e.payload,t.isAuthenticated=!0},addjobs:(t,e)=>{t.jobs=e.payload},addinternships:(t,e)=>{t.internships=e.payload},removestudent:(t,e)=>{t.student=null,t.isAuthenticated=!1,t.errors=[]},iserror:(t,e)=>{t.errors.push(e.payload)},removeerror:(t,e)=>{t.errors=[]}}}),{addstudent:r,addjobs:u,addinternships:c,removestudent:o,iserror:i,removeerror:d}=s.actions;e.ZP=s.reducer},11363:function(t,e,n){"use strict";var a=n(29222);let s=a.Z.create({baseURL:"https://alooka.onrender.com/",withCredentials:!0});e.Z=s},24033:function(t,e,n){t.exports=n(68165)}},function(t){t.O(0,[6384,3306,9738,9222,1688,2971,596,1744],function(){return t(t.s=69986)}),_N_E=t.O()}]);