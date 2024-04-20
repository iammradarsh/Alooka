(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1452],{8143:function(e,s,t){Promise.resolve().then(t.bind(t,18102))},18102:function(e,s,t){"use strict";t.r(s);var a=t(57437),r=t(52336),n=t(81399),l=t.n(n),c=t(61396),i=t.n(c),o=t(2265),d=t(3198),u=t(12025),h=t(58910),m=t(88920),x=t(19241);s.default=()=>{let[e,s]=o.useState(!1),t=()=>s(!e),n=(0,d.I0)(),{student:c}=(0,d.v9)(e=>e.studentReducer),[p,j]=(0,o.useState)(c&&c.firstname),[y,g]=(0,o.useState)(c&&c.lastname),[b,N]=(0,o.useState)(c&&c.email),[f,w]=(0,o.useState)(c&&c.contact),[v,k]=(0,o.useState)(c&&c.city),R=e=>{n((0,r.f2)(e))},Z=e=>{n((0,r.jR)(e))},B=e=>{n(asyncdeleteinternship(e))},C=e=>{n((0,r.iU)(e))},T=e=>{n((0,r.Bf)(e))},z=e=>{n(asyncdeleteprojects(e))},D=e=>{n((0,r.ul)(e))};return(0,a.jsxs)("div",{className:"main1 py-12 px-56",children:[(0,a.jsx)("h1",{className:"text-2xl text-center mb-10",children:"Resume"}),(0,a.jsxs)("div",{className:"main px-14 py-20 flex flex-col items-center border rounded-lg border-gray-300",children:[(0,a.jsxs)("header",{className:"h-40 mb-4 border border-t-0 border-l-0 border-r-0 border-gray-500 w-full",children:[(0,a.jsx)("div",{className:" flex gap-2 items-center",children:(0,a.jsxs)("h1",{className:"text-3xl",children:[p," ",y]})}),(0,a.jsx)("p",{className:"text-gray-600",children:b}),(0,a.jsx)("p",{className:"text-gray-600",children:f}),(0,a.jsx)("p",{className:"text-gray-600",children:v})]}),(0,a.jsxs)("div",{className:"mt-5 px-10 w-full",children:[(0,a.jsxs)("div",{className:"education-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 w-fit h-fit rounded-lg py-2 px-4 text-secondary outline outline-1 outline-secondary bg-transparent",children:"Education"}),(0,a.jsxs)("div",{className:"edu-details",children:[(0,a.jsxs)(u.Dialog,{open:e,handler:t,children:[(0,a.jsx)(u.DialogHeader,{children:"Educations"}),(0,a.jsxs)(u.DialogBody,{divider:!0,children:[(0,a.jsx)("h4",{children:(0,a.jsxs)(i(),{className:"".concat(l().link," flex items-center gap-3 text-secondary"),href:"/student/auth/resume/educations/school",children:[(0,a.jsx)(h.WZt,{}),"Add School"]})}),(0,a.jsx)("h4",{children:(0,a.jsxs)(i(),{className:"".concat(l().link," flex items-center gap-3 text-secondary"),href:"/student/auth/resume/educations/graduation",children:[(0,a.jsx)(h.WZt,{}),"Add graduation/ post graduation"]})})]}),(0,a.jsxs)(u.DialogFooter,{children:[(0,a.jsx)(u.Button,{variant:"text",color:"gray",onClick:t,className:"mr-1",children:(0,a.jsx)("span",{children:"Cancel"})}),(0,a.jsx)(u.Button,{variant:"gradient",color:"blue",onClick:t,children:(0,a.jsx)("span",{children:"Confirm"})})]})]}),(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.education.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsxs)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:[e.college&&(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/educations/graduation/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})}),e.hs&&(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/educations/school/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})]}),(0,a.jsx)(u.Button,{onClick:()=>R(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),e.college&&(0,a.jsxs)(u.CardBody,{className:"",children:[e.stream&&(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(u.Typography,{variant:"h5",color:"blue-gray",className:"text-black",children:e.degree}),(0,a.jsxs)(u.Typography,{variant:"h5",className:"text-black",children:[",",e.stream]})]}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mt-2",children:e.college}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(u.Typography,{color:"blue-gray",children:e.start}),(0,a.jsx)(u.Typography,{color:"blue-gray",children:e.end})]})]}),e.hs&&(0,a.jsxs)(u.CardBody,{className:"",children:[e.hs&&(0,a.jsx)(u.Typography,{variant:"h5",className:"text-black",children:e.hs}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.status}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.school?"".concat(e.school):"".concat(e.degree)}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:"Pursuing"==e.status?"Expected year of Completion: ".concat(e.year):"Year of Completion: ".concat(e.year)}),(0,a.jsxs)(u.Typography,{color:"blue-gray",className:"mb-2",children:["Board : ",e.board]}),(0,a.jsxs)(u.Typography,{color:"blue-gray",children:["performance : ",e.Percentage]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",onClick:t,size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),"ADD EDUCATION"]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"job-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"Job"}),(0,a.jsxs)("div",{className:"job-details",children:[(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.jobs.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/jobs/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>Z(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),(0,a.jsxs)(u.CardBody,{className:"",children:[e.profile&&(0,a.jsx)(u.Typography,{variant:"h5",className:"text-black",children:e.profile}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.organization}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.location}),(0,a.jsxs)(u.Typography,{color:"blue-gray",className:"mb-2",children:[e.start," - ",e.end]}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.description})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/jobs",children:"ADD JOB"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"internship-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"internship"}),(0,a.jsxs)("div",{className:"internship-details",children:[(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.internships.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/internships/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>B(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),(0,a.jsxs)(u.CardBody,{className:"",children:[e.profile&&(0,a.jsx)(u.Typography,{variant:"h5",className:"text-black",children:e.profile}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.organization}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.location}),(0,a.jsxs)(u.Typography,{color:"blue-gray",className:"mb-2",children:[e.start," - ",e.end]}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.description})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/internship",children:"ADD internship"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"resposibility-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"responsibility"}),(0,a.jsxs)("div",{className:"resposibility-details",children:[(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.responsibilities.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/responsibility/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>C(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),(0,a.jsx)(u.CardBody,{className:"",children:(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.description})})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/responsibility",children:"ADD Responsibility"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"Courses-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"courses"}),(0,a.jsxs)("div",{className:"Courses-details",children:[(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.courses.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/courses/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>T(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),(0,a.jsxs)(u.CardBody,{className:"",children:[e.program&&(0,a.jsx)(u.Typography,{variant:"h5",className:"text-black",children:e.program}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.organization}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.location}),(0,a.jsxs)(u.Typography,{color:"blue-gray",className:"mb-2",children:[e.start," - ",e.end]}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.description})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/courses",children:"ADD Courses"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"Projects-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"projects"}),(0,a.jsxs)("div",{className:"Projects-details",children:[(0,a.jsx)("ul",{className:"list-group",children:c&&c.resume.projects.map(e=>(0,a.jsxs)("div",{className:"list-group-item",children:[(0,a.jsxs)(u.Card,{className:"w-96",children:[(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 absolute right-0 mt-20",children:[(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/projects/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>z(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})}),(0,a.jsxs)(u.CardBody,{className:"",children:[e.title&&(0,a.jsx)(u.Typography,{variant:"h5",className:"text-black",children:e.title}),(0,a.jsxs)(u.Typography,{color:"blue-gray",className:"mb-2",children:[e.start," - ",e.end]}),(0,a.jsx)(u.Typography,{color:"blue-gray",className:"mb-2",children:e.description}),(0,a.jsx)(u.Typography,{className:"mb-2 text-secondary cursor-pointer break-words",children:(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link})})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id))}),(0,a.jsxs)(u.Button,{className:"flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/projects",children:"ADD Projects"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"skills-split flex items-start justify-between w-full",children:[(0,a.jsx)(u.Button,{className:"mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent",children:"Skills"}),(0,a.jsxs)("div",{className:"skills-details w-96",children:[(0,a.jsx)("ul",{className:"list-group flex gap-2 flex-wrap sm:w-80",children:c&&c.resume.skills.map(e=>(0,a.jsx)("div",{className:"list-group-item",children:(0,a.jsx)(u.Button,{size:"sm",className:"bg-transparent",children:(0,a.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,a.jsxs)("div",{className:"flex pr-2 ",children:[(0,a.jsx)(u.CardBody,{className:"text-gray-800",children:e.skills}),(0,a.jsx)(u.Button,{size:"sm",className:" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg",children:(0,a.jsx)(i(),{className:"".concat(l().link," "),href:"/student/auth/resume/skills/".concat(e.id),children:(0,a.jsx)(m.vPQ,{className:"text-primary"})})}),(0,a.jsx)(u.Button,{onClick:()=>D(e.id),className:"bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg",size:"sm",children:(0,a.jsx)(x.uaR,{className:"text-red-700"})})]})})})},e.id))}),(0,a.jsxs)(u.Button,{className:"flex mt-6 items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400",size:"sm",children:[(0,a.jsx)(h.WZt,{className:"text-2xl"}),(0,a.jsx)(i(),{className:l().link,href:"/student/auth/resume/skills",children:"ADD Skills"})]})]})]})]})]})]})}},52336:function(e,s,t){"use strict";t.d(s,{AX:function(){return P},Bf:function(){return z},De:function(){return y},Dv:function(){return Q},J7:function(){return n},LK:function(){return v},M0:function(){return C},Mn:function(){return p},N2:function(){return W},NP:function(){return i},RF:function(){return x},TZ:function(){return R},X6:function(){return l},Xf:function(){return u},bW:function(){return S},bu:function(){return c},dy:function(){return f},eU:function(){return T},f2:function(){return b},fB:function(){return A},iU:function(){return B},ib:function(){return k},iw:function(){return N},jR:function(){return w},lo:function(){return o},m_:function(){return d},n5:function(){return h},p5:function(){return m},tU:function(){return Z},ul:function(){return _},xQ:function(){return D},yJ:function(){return j},yS:function(){return g}});var a=t(11363),r=t(81170);t(60171);let n=()=>async(e,s)=>{try{let{data:s}=await a.Z.post("/student");e((0,r.wz)(s.student))}catch(s){e((0,r.Ru)(s.response.data))}},l=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/signup",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},c=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/signin",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},i=e=>async(e,s)=>{try{let{data:s}=await a.Z.get("/student/signout");e((0,r.$Z)())}catch(s){e((0,r.Ru)(s.response.data))}},o=e=>async(s,t)=>{try{let{_id:r}=t().studentReducer.student,{data:l}=await a.Z.post("/student/update/"+r,e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},d=e=>async(s,t)=>{try{let{_id:r}=t().studentReducer.student,{data:l}=await a.Z.post("/student/avatar/"+r,e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},u=e=>async(s,t)=>{try{let{_id:r}=t().studentReducer.student,{data:l}=await a.Z.post("/student/reset-password/"+r,e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},h=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/send-mail/",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},m=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/forget-link/",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},x=()=>async(e,s)=>{try{let{data:s}=await a.Z.post("/student/alljobs/");e((0,r.hS)(s.jobs))}catch(s){e((0,r.Ru)(s.response.data))}},p=()=>async(e,s)=>{try{let{data:s}=await a.Z.post("/student/allinternships/");e((0,r.i_)(s.internships))}catch(s){e((0,r.Ru)(s.response.data))}},j=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/apply/job/"+e);s(n()),s(x())}catch(e){s((0,r.Ru)(e.response.data))}},y=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/student/apply/internship/"+e);s(n()),s(p())}catch(e){s((0,r.Ru)(e.response.data))}},g=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-edu",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},b=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/delete-edu/"+e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},N=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-edu/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},f=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-job",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},w=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/delete-job/"+e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},v=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-job/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},k=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-intern",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},R=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-intern/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},Z=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-resp",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},B=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/delete-resp/"+e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},C=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-resp/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},T=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-cours",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},z=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/delete-cours/"+e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},D=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-cours/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},P=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-proj",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},A=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-proj/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},S=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/add-skil",e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},_=e=>async(s,t)=>{try{let{data:t}=await a.Z.post("/resume/delete-skil/"+e);s(n())}catch(e){s((0,r.Ru)(e.response.data))}},W=(e,s)=>async(t,l)=>{try{let{data:r}=await a.Z.post("/resume/edit-skil/"+e,s);t(n())}catch(e){t((0,r.Ru)(e.response.data))}},Q=e=>async(e,s)=>{try{let{data:s}=await a.Z.post("/student/delete");e((0,r.$Z)())}catch(s){e((0,r.Ru)(s.response.data))}}},81170:function(e,s,t){"use strict";t.d(s,{$Z:function(){return i},Ru:function(){return o},hS:function(){return l},i_:function(){return c},ru:function(){return d},wz:function(){return n}});var a=t(20064);let r=(0,a.oM)({name:"student",initialState:{student:null,jobs:null,internships:null,errors:[],isAuthenticated:!1},reducers:{addstudent:(e,s)=>{e.student=s.payload,e.isAuthenticated=!0},addjobs:(e,s)=>{e.jobs=s.payload},addinternships:(e,s)=>{e.internships=s.payload},removestudent:(e,s)=>{e.student=null,e.isAuthenticated=!1,e.errors=[]},iserror:(e,s)=>{e.errors.push(s.payload)},removeerror:(e,s)=>{e.errors=[]}}}),{addstudent:n,addjobs:l,addinternships:c,removestudent:i,iserror:o,removeerror:d}=r.actions;s.ZP=r.reducer},11363:function(e,s,t){"use strict";var a=t(29222);let r=a.Z.create({baseURL:"http://localhost:8080/",withCredentials:!0});s.Z=r},81399:function(e){e.exports={link:"style_link__myR6K"}}},function(e){e.O(0,[6384,1582,9929,3306,9738,9222,1688,1396,8920,2971,596,1744],function(){return e(e.s=8143)}),_N_E=e.O()}]);