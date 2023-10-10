"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{327:function(n,e,i){i.d(e,{Z:function(){return hn}});var r,t,o,s,l,d,c,a,p,x,h,f,g,u,j,m,Z,v,w,b,y,P,k,S,C,z,E,I=i(439),N=i(791),J=i(164),O=i(168),F=i(867),L=i(134),_=F.ZP.div(r||(r=(0,O.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),M=F.ZP.div(t||(t=(0,O.Z)(["\n  position: relative;\n  width: 541px;\n  background-color: #ffffff;\n  padding: 40px;\n  border-radius: 24px;\n"]))),B=(0,F.ZP)(L.oHP)(o||(o=(0,O.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n"]))),R=F.ZP.div(s||(s=(0,O.Z)(["\n  border-radius: 14px;\n  margin-bottom: 14px;\n  width: 461px;\n  height: 248px;\n  overflow: hidden;\n"]))),T=F.ZP.img(l||(l=(0,O.Z)(["\n  object-fit: cover;\n"]))),q=F.ZP.div(d||(d=(0,O.Z)(["\n  display: flex;\n  gap: 3px;\n  margin-bottom: 8px;\n"]))),A=F.ZP.div(c||(c=(0,O.Z)(["\n  color: #12141780;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 14px;\n"]))),H=F.ZP.div(a||(a=(0,O.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),U=F.ZP.div(p||(p=(0,O.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),Y=F.ZP.div(x||(x=(0,O.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #121417;\n"]))),$=F.ZP.h2(h||(h=(0,O.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #121417;\n  margin-bottom: 8px;\n"]))),D=F.ZP.div(f||(f=(0,O.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),G=F.ZP.p(g||(g=(0,O.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #363535;\n  background-color: #f9f9f9;\n  border-radius: 35px;\n  padding: 7px 14px;\n"]))),K=F.ZP.a(u||(u=(0,O.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #3470ff;\n  border-radius: 12px;\n  padding: 12px 50px;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Q=i(184),V=document.querySelector("#modal-root"),W=function(n){var e=n.onClose,i=n.advert,r=i.id,t=i.year,o=i.make,s=i.model,l=i.type,d=i.img,c=i.description,a=i.fuelConsumption,p=i.engineSize,x=i.accessories,h=i.functionalities,f=i.rentalPrice,g=i.address,u=i.rentalConditions,j=i.mileage,m=g.split(",");(0,N.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,J.createPortal)((0,Q.jsx)(_,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,Q.jsxs)(M,{children:[(0,Q.jsx)(B,{onClick:e}),(0,Q.jsx)(R,{children:(0,Q.jsx)("div",{children:(0,Q.jsx)(T,{src:d,alt:"".concat(o," ").concat(s)})})}),(0,Q.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,Q.jsxs)(q,{children:[(0,Q.jsx)("p",{children:o}),(0,Q.jsx)("p",{style:{color:"#3470ff"},children:s}),(0,Q.jsx)("p",{children:t})]}),(0,Q.jsxs)(A,{children:[(0,Q.jsxs)(H,{children:[(0,Q.jsx)("p",{children:m[1].trim()}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)("p",{children:m[m.length-1].trim()}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsxs)("p",{children:["Id: ",r]}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsxs)("p",{children:["Year: ",t," "]}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsxs)("p",{children:["Type: ",l]})]}),(0,Q.jsxs)(U,{children:[(0,Q.jsxs)("p",{children:["Fuel Consumption: ",a]}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsxs)("p",{children:["Engine Size: ",p]})]})]}),(0,Q.jsx)(Y,{children:c})]}),(0,Q.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,Q.jsx)($,{children:"Accessories and functionalities:"}),(0,Q.jsxs)(A,{children:[(0,Q.jsx)(H,{children:x.map((function(n,e,i){return(0,Q.jsxs)(N.Fragment,{children:[(0,Q.jsx)("p",{children:n}),e<i.length-1&&(0,Q.jsx)("span",{children:"|"})]},e)}))}),(0,Q.jsx)(U,{children:h.map((function(n,e,i){return(0,Q.jsxs)(N.Fragment,{children:[(0,Q.jsx)("p",{children:n}),e<i.length-1&&(0,Q.jsx)("span",{children:"|"})]},e)}))})]})]}),(0,Q.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,Q.jsx)($,{children:"Rental Conditions: "}),(0,Q.jsxs)(D,{children:[u.split("\n").map((function(n,e){return(0,Q.jsx)(G,{children:n.includes(":")?n.split(":").map((function(n,e){return 0===e?(0,Q.jsxs)("span",{children:[n,": "]},e):(0,Q.jsx)("span",{style:{color:"#3470ff"},children:n},e)})):n},e)})),(0,Q.jsxs)(G,{children:["Mileage: ",(0,Q.jsx)("span",{children:" "}),(0,Q.jsx)("span",{style:{color:"#3470ff"},children:j.toLocaleString("en-US")})]}),(0,Q.jsxs)(G,{children:["Price:"," ",(0,Q.jsxs)("span",{style:{color:"#3470ff"},children:[f.slice(1),"$"]})]})]})]}),(0,Q.jsx)(K,{href:"tel:+380730000000",children:"Rental car"})]})}),V)},X=F.ZP.li(j||(j=(0,O.Z)(["\n  width: 274px;\n"]))),nn=F.ZP.div(m||(m=(0,O.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  width: 274px;\n  height: 268px;\n  overflow: hidden;\n"]))),en=(0,F.ZP)(L.M_L)(Z||(Z=(0,O.Z)(["\n  position: absolute;\n  z-index: 100;\n  top: 18px;\n  right: 18px;\n  width: 18px;\n  height: 18px;\n  color: #3470ff;\n  cursor: pointer;\n"]))),rn=(0,F.ZP)(L.lo)(v||(v=(0,O.Z)(["\n  position: absolute;\n  z-index: 100;\n  top: 18px;\n  right: 18px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  color: white;\n"]))),tn=F.ZP.img(w||(w=(0,O.Z)(["\n  border-radius: 14px;\n  width: 401px;\n  height: 268px;\n  object-fit: cover;\n"]))),on=F.ZP.div(b||(b=(0,O.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    180deg,\n    rgba(18, 20, 23, 0.5) 2.5%,\n    rgba(18, 20, 23, 0) 41.07%\n  );\n  border-radius: 14px;\n  pointer-events: none;\n"]))),sn=F.ZP.div(y||(y=(0,O.Z)(["\n  color: #121417;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  margin-right: 9px;\n"]))),ln=F.ZP.div(P||(P=(0,O.Z)(["\n  display: flex;\n  gap: 3px;\n"]))),dn=F.ZP.div(k||(k=(0,O.Z)(["\n  color: #12141780;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 28px;\n"]))),cn=F.ZP.div(S||(S=(0,O.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),an=F.ZP.div(C||(C=(0,O.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),pn=F.ZP.p(z||(z=(0,O.Z)(["\n  max-width: 104px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),xn=F.ZP.button(E||(E=(0,O.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: #ffffff;\n  background-color: #3470ff;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border: none;\n  border-radius: 12px;\n  width: 100%;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),hn=function(n){var e=n.advert,i=(0,N.useState)(!1),r=(0,I.Z)(i,2),t=r[0],o=r[1],s=(0,N.useState)(!1),l=(0,I.Z)(s,2),d=l[0],c=l[1],a=e.id,p=e.year,x=e.make,h=e.model,f=e.type,g=e.img,u=e.functionalities,j=e.rentalPrice,m=e.rentalCompany,Z=e.address,v=e.mileage;(0,N.useEffect)((function(){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).some((function(n){return n.make===x&&n.model===h}));o(n)}),[x,h]);var w=function(){if(t){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).filter((function(n){return!(n.make===x&&n.model===h)}));localStorage.setItem("favorites",JSON.stringify(n))}else{var e={id:a,year:p,make:x,model:h,type:f,img:g,functionalities:u,rentalPrice:j,rentalCompany:m,address:Z,mileage:v},i=JSON.parse(localStorage.getItem("favorites"))||[];i.push(e),localStorage.setItem("favorites",JSON.stringify(i))}o(!t)},b=function(){c(!d)},y=Z?Z.split(","):[];return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(X,{children:[(0,Q.jsxs)(nn,{children:[t?(0,Q.jsx)(en,{onClick:w}):(0,Q.jsx)(rn,{onClick:w}),(0,Q.jsx)("div",{children:(0,Q.jsx)(tn,{src:g,alt:"".concat(x," ").concat(h),width:"274"})}),(0,Q.jsx)(on,{})]}),(0,Q.jsxs)(sn,{children:[(0,Q.jsxs)(ln,{children:[(0,Q.jsx)(pn,{children:x}),(0,Q.jsx)(pn,{style:{color:"#3470ff"},children:h}),(0,Q.jsx)("p",{children:p})]}),(0,Q.jsx)("p",{children:j})]}),(0,Q.jsxs)(dn,{children:[(0,Q.jsxs)(cn,{children:[(0,Q.jsx)("p",{children:y[1].trim()}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)("p",{children:y[y.length-1].trim()}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)(pn,{children:m}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)("p",{children:"Premium"})]}),(0,Q.jsxs)(an,{children:[(0,Q.jsx)("p",{children:f}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)(pn,{children:h}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)("p",{children:v}),(0,Q.jsx)("span",{children:"|"}),(0,Q.jsx)(pn,{children:u[0]})]})]}),(0,Q.jsx)(xn,{onClick:b,children:"Learn more"}),d&&(0,Q.jsx)(W,{onClose:b,advert:e})]})})}},396:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});var r,t,o,s=i(439),l=i(791),d=i(168),c=i(867),a=c.ZP.div(r||(r=(0,d.Z)(["\n  font-family: Manrope;\n  width: 1184px;\n  margin: 0 auto;\n  margin-top: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),p=c.ZP.ul(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 50px;\n  column-gap: 29px;\n"]))),x=c.ZP.h1(o||(o=(0,d.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n"]))),h=i(327),f=i(184),g=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),i=e[0],r=e[1];return(0,l.useEffect)((function(){var n=JSON.parse(localStorage.getItem("favorites"))||[];r(n)}),[]),(0,f.jsx)(a,{children:0===i.length?(0,f.jsx)(x,{children:"No selected cars"}):(0,f.jsx)(p,{children:i.map((function(n,e){return(0,f.jsx)(h.Z,{advert:n},e)}))})})},u=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g,{})})}}}]);
//# sourceMappingURL=396.102d8d62.chunk.js.map