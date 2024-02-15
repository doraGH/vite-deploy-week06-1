import{e as h}from"./index-2ZTvRUip.js";import{a as i,S as e}from"./sweetalert2.all-lMQcd3on.js";var l={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"dorayu",BASE_URL:"/vite-deploy-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:o,VITE_PATH:d}=l,g=h("cartStore",{state:()=>({cartList:{},isLoading:!1,status:{loadCart:"",loadQty:""}}),actions:{addCart(t,a=1){const s=`${o}/api/${d}/cart`;this.status.loadCart=t;const r={data:{product_id:t,qty:a}};i.post(s,r).then(c=>{this.status.loadCart="",this.getCarts(),e.fire(c.data.message)}).catch(c=>{e.fire(c.data.message)})},getCarts(){const t=`${o}/api/${d}/cart`;this.isLoading=!0,i.get(t).then(a=>{const{data:s}=a.data;this.isLoading=!1,this.cartList=s}).catch(a=>{e.fire(a.data.message)})},removeCartItem(t){const a=`${o}/api/${d}/cart/${t}`;this.status.loadQty=t,i.delete(a).then(s=>{e.fire(s.data.message),this.status.loadQty="",this.getCarts()}).catch(s=>{e.fire(s.data.message)})},deleteAllCarts(){const t=`${o}/api/${d}/carts`;i.delete(t).then(a=>{this.getCarts(),e.fire(a.data.message)}).catch(a=>{e.fire(a.data.message)})},updateCart(t){const a=`${o}/api/${d}/cart/${t.id}`,s={data:{product_id:t.product_id,qty:t.qty}};this.status.loadQty=t.id,i.put(a,s).then(r=>{e.fire(r.data.message),this.status.loadQty="",this.getCarts()}).catch(r=>{e.fire(r.data.message)})}},getters:{}});export{g as c};
