"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[275],{6275:function(e,t,h){h.r(t),h.d(t,{default:function(){return O}});var o=h(6252),n=h(9963);const u=e=>((0,o.dD)("data-v-7673c5fd"),e=e(),(0,o.Cn)(),e),l={id:"section_wrap"},i=u((()=>(0,o._)("div",{class:"word"},[(0,o._)("h3",null,"HOPE BOOK FORM")],-1))),a={class:"register_hope_book_form"},r={name:"update_hope_book_form",method:"post"},_=u((()=>(0,o._)("br",null,null,-1))),s=u((()=>(0,o._)("br",null,null,-1))),p=u((()=>(0,o._)("br",null,null,-1))),b=u((()=>(0,o._)("br",null,null,-1))),m=u((()=>(0,o._)("input",{type:"reset",value:"취소"},null,-1))),d=u((()=>(0,o._)("input",{type:"button",value:"목록"},null,-1)));function c(e,t,h,u,c,y){const k=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("div",l,[i,(0,o._)("div",a,[(0,o._)("form",r,[(0,o.wy)((0,o._)("input",{type:"text",name:"hb_name","onUpdate:modelValue":t[0]||(t[0]=e=>c.item.hb_name=e)},null,512),[[n.nr,c.item.hb_name]]),(0,o.Uk)(),_,(0,o.wy)((0,o._)("input",{type:"text",name:"hb_author","onUpdate:modelValue":t[1]||(t[1]=e=>c.item.hb_author=e)},null,512),[[n.nr,c.item.hb_author]]),(0,o.Uk)(),s,(0,o.wy)((0,o._)("input",{type:"text",name:"hb_publisher","onUpdate:modelValue":t[2]||(t[2]=e=>c.item.hb_publisher=e)},null,512),[[n.nr,c.item.hb_publisher]]),(0,o.Uk)(),p,(0,o.wy)((0,o._)("input",{type:"text",name:"hb_publish_year","onUpdate:modelValue":t[3]||(t[3]=e=>c.item.hb_publish_year=e)},null,512),[[n.nr,c.item.hb_publish_year]]),(0,o.Uk)(),b,(0,o._)("input",{type:"button",value:"등록",onClick:t[4]||(t[4]=e=>{y.updateHopeBookForm()})}),m,(0,o.Wm)(k,{to:"/getHopeBooks"},{default:(0,o.w5)((()=>[d])),_:1})])])])])}h(560);var y=h(5121),k={name:"HopeBookUpdateForm",data(){return{item:{}}},created(){const e=this.$route.query.item;e&&(this.item=JSON.parse(e),console.log(this.item))},methods:{updateHopeBookForm(){const e={hb_no:this.item.hb_no,u_m_no:this.item.u_m_no,hb_name:this.item.hb_name,hb_author:this.item.hb_author,hb_publisher:this.item.hb_publisher,hb_publish_year:this.item.hb_publish_year,hb_result:this.item.hb_result};console.log(e),""==this.hb_name?alert("INPUT BOOK NAME."):""==this.hb_author?alert("INPUT BOOK AUTHOR."):""==this.hb_publisher?alert("INPUT BOOK PUBLISHER."):""==this.hb_publish_year?alert("INPUT BOOK PUBLISH YEAR."):y.Z.put("http://localhost:8090/api/updateHopeBookConfirm",e,{headers:{"Content-Type":"application/json"}}).then((e=>{this.hb_name="",this.hb_author="",this.hb_publisher="",this.hb_publish_year="",this.$router.push("/getHopeBooks")})).catch((e=>{console.log("Error fetching data:",e)}))}}},U=h(3744);const f=(0,U.Z)(k,[["render",c],["__scopeId","data-v-7673c5fd"]]);var O=f}}]);
//# sourceMappingURL=275.be0dc3d7.js.map