"use strict";(self["webpackChunkteste_frontend"]=self["webpackChunkteste_frontend"]||[]).push([[443],{6329:function(s,e,t){t.r(e),t.d(e,{default:function(){return W}});var i=t(3396);const n={class:"home"};function u(s,e,t,u,l,r){const h=(0,i.up)("usersVue");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(h,{msg:"Welcome to Your Vue.js App"})])}var l=t(7139);const r={class:"selectWrapper"},h=["value"],o={class:"row"},a=(0,i._)("h2",null,"Name",-1),c={class:"showUser"},d=(0,i._)("h2",null,"Username",-1),m={class:"showUser"},p=(0,i._)("h2",null,"E-mail",-1),_={class:"showUser"},v={class:"row"},w=(0,i._)("h2",null,"Phone",-1),g={class:"showUser"},f=(0,i._)("h2",null,"Street",-1),U={class:"showUser"},z=(0,i._)("h2",null,"City",-1),C={class:"showUser"};function k(s,e,t,n,u,k){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",r,[(0,i._)("select",{class:"user-select",onChange:e[0]||(e[0]=s=>k.onChange(s))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.nomesId,(s=>((0,i.wg)(),(0,i.iD)("option",{key:s.id,value:s.id}," User "+(0,l.zw)(s.nome),9,h)))),128))],32)]),(0,i._)("div",null,[(0,i._)("div",o,[(0,i._)("div",null,[a,(0,i._)("div",c,[(0,i._)("p",null,(0,l.zw)(this.names[this.usuario]),1)])]),(0,i._)("div",null,[d,(0,i._)("div",m,[(0,i._)("p",null,(0,l.zw)(this.usernames[this.usuario]),1)])]),(0,i._)("div",null,[p,(0,i._)("div",_,[(0,i._)("p",null,(0,l.zw)(this.emails[this.usuario]),1)])])]),(0,i._)("div",v,[(0,i._)("div",null,[w,(0,i._)("div",g,[(0,i._)("p",null,(0,l.zw)(this.phones[this.usuario]),1)])]),(0,i._)("div",null,[f,(0,i._)("div",U,[(0,i._)("p",null,(0,l.zw)(this.streets[this.usuario]),1)])]),(0,i._)("div",null,[z,(0,i._)("div",C,[(0,i._)("p",null,(0,l.zw)(this.cities[this.usuario]),1)])])])])])}t(7658);var I={name:"UserVue",props:{msg:String},data(){return{users:[],lista:[],names:[],nomesId:[],usernames:[],emails:[],phones:[],streets:[],cities:[],userSelect:"selectUser",usuario:0}},mounted(){this.pegaUsuario()},methods:{pegaUsuario(){fetch("https://jsonplaceholder.typicode.com/users").then((s=>s.json())).then((s=>{let e;for(this.users=s,e=0;e<10;e++){this.names.push(this.users[e].name),this.usernames.push(this.users[e].username),this.emails.push(this.users[e].email),this.phones.push(this.users[e].phone),this.streets.push(this.users[e].address.street),this.cities.push(this.users[e].address.city);let s=this.users.filter((function(s){return s.userId===e}));this.lista.push(s),s=[]}this.nomesId=this.names.map(((s,e)=>({nome:s,id:e+1}))),console.log(this.nomesId),console.log(this.names)}))},onChange(s){this.usuario=s.target.value-1}}},V=t(89);const y=(0,V.Z)(I,[["render",k]]);var D=y,j={name:"UserView",components:{usersVue:D}};const S=(0,V.Z)(j,[["render",u]]);var W=S}}]);
//# sourceMappingURL=about.4debeae0.js.map