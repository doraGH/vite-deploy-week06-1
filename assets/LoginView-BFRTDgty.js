import{a as c,S as u}from"./sweetalert2.all-lMQcd3on.js";import{_ as m,o as p,c as _,a as s,i as f,g as l,l as d,F as h}from"./index-2ZTvRUip.js";var w={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"dorayu",BASE_URL:"/vite-deploy-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g}=w,v={data(){return{user:{username:"",password:""}}},methods:{login(){const r=`${g}/admin/signin`;c.post(r,this.user).then(e=>{const{expired:n,token:a}=e.data;document.cookie=`hexToken=${a}; expires=${new Date(n)}`,this.$router.push("/admin/products")}).catch(e=>{u.fire(e.response.data.message)})}}},b=s("h2",null,"登入頁面",-1),x={class:"container"},E={class:"row justify-content-center"},V=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),y={class:"col-8"},k={class:"form-floating mb-3"},S=s("label",{for:"username"},"Email address",-1),T={class:"form-floating"},D=s("label",{for:"password"},"Password",-1),R=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),U=s("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1);function B(r,e,n,a,t,i){return p(),_(h,null,[b,s("div",x,[s("div",E,[V,s("div",y,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=f((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",k,[l(s("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,t.user.username]]),S]),s("div",T,[l(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),placeholder:"Password",required:""},null,512),[[d,t.user.password]]),D]),R],32)])]),U])],64)}const I=m(v,[["render",B]]);export{I as default};