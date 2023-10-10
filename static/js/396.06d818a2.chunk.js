"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{327:function(n,e,i){i.d(e,{Z:function(){return dn}});var r,t,o,s,l,c,d,a,p,x,h,f,g,u,j,m,Z,v,b,y,w,P,k,S,C,z=i(439),E=i(791),I=i(164),N=i(168),J=i(867),O=i(134),F=J.ZP.div(r||(r=(0,N.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),L=J.ZP.div(t||(t=(0,N.Z)(["\n  position: relative;\n  width: 541px;\n  background-color: #ffffff;\n  padding: 40px;\n  border-radius: 24px;\n"]))),_=(0,J.ZP)(O.oHP)(o||(o=(0,N.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n"]))),M=J.ZP.img(s||(s=(0,N.Z)(["\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),B=J.ZP.div(l||(l=(0,N.Z)(["\n  display: flex;\n  gap: 3px;\n  margin-bottom: 8px;\n"]))),R=J.ZP.div(c||(c=(0,N.Z)(["\n  color: #12141780;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 14px;\n"]))),T=J.ZP.div(d||(d=(0,N.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),q=J.ZP.div(a||(a=(0,N.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),A=J.ZP.div(p||(p=(0,N.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #121417;\n"]))),H=J.ZP.h2(x||(x=(0,N.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #121417;\n  margin-bottom: 8px;\n"]))),U=J.ZP.div(h||(h=(0,N.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),Y=J.ZP.p(f||(f=(0,N.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #363535;\n  background-color: #f9f9f9;\n  border-radius: 35px;\n  padding: 7px 14px;\n"]))),$=J.ZP.a(g||(g=(0,N.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #3470ff;\n  border-radius: 12px;\n  padding: 12px 50px;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),D=i(184),G=document.querySelector("#modal-root"),K=function(n){var e=n.onClose,i=n.advert,r=i.id,t=i.year,o=i.make,s=i.model,l=i.type,c=i.img,d=i.description,a=i.fuelConsumption,p=i.engineSize,x=i.accessories,h=i.functionalities,f=i.rentalPrice,g=i.address,u=i.rentalConditions,j=i.mileage,m=g.split(",");(0,E.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,I.createPortal)((0,D.jsx)(F,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,D.jsxs)(L,{children:[(0,D.jsx)(_,{onClick:e}),(0,D.jsx)(M,{src:c,alt:"".concat(o," ").concat(s)}),(0,D.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,D.jsxs)(B,{children:[(0,D.jsx)("p",{children:o}),(0,D.jsx)("p",{style:{color:"#3470ff"},children:s}),(0,D.jsx)("p",{children:t})]}),(0,D.jsxs)(R,{children:[(0,D.jsxs)(T,{children:[(0,D.jsx)("p",{children:m[1].trim()}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:m[m.length-1].trim()}),(0,D.jsx)("span",{children:"|"}),(0,D.jsxs)("p",{children:["Id: ",r]}),(0,D.jsx)("span",{children:"|"}),(0,D.jsxs)("p",{children:["Year: ",t," "]}),(0,D.jsx)("span",{children:"|"}),(0,D.jsxs)("p",{children:["Type: ",l]})]}),(0,D.jsxs)(q,{children:[(0,D.jsxs)("p",{children:["Fuel Consumption: ",a]}),(0,D.jsx)("span",{children:"|"}),(0,D.jsxs)("p",{children:["Engine Size: ",p]})]})]}),(0,D.jsx)(A,{children:d})]}),(0,D.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,D.jsx)(H,{children:"Accessories and functionalities:"}),(0,D.jsxs)(R,{children:[(0,D.jsx)(T,{children:x.map((function(n,e,i){return(0,D.jsxs)(E.Fragment,{children:[(0,D.jsx)("p",{children:n}),e<i.length-1&&(0,D.jsx)("span",{children:"|"})]},e)}))}),(0,D.jsx)(q,{children:h.map((function(n,e,i){return(0,D.jsxs)(E.Fragment,{children:[(0,D.jsx)("p",{children:n}),e<i.length-1&&(0,D.jsx)("span",{children:"|"})]},e)}))})]})]}),(0,D.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,D.jsx)(H,{children:"Rental Conditions: "}),(0,D.jsxs)(U,{children:[u.split("\n").map((function(n,e){return(0,D.jsx)(Y,{children:n.includes(":")?n.split(":").map((function(n,e){return 0===e?(0,D.jsxs)("span",{children:[n,": "]},e):(0,D.jsx)("span",{style:{color:"#3470ff"},children:n},e)})):n},e)})),(0,D.jsxs)(Y,{children:["Mileage: ",(0,D.jsx)("span",{children:" "}),(0,D.jsx)("span",{style:{color:"#3470ff"},children:j.toLocaleString("en-US")})]}),(0,D.jsxs)(Y,{children:["Price:"," ",(0,D.jsxs)("span",{style:{color:"#3470ff"},children:[f.slice(1),"$"]})]})]})]}),(0,D.jsx)($,{href:"tel:+380730000000",children:"Rental car"})]})}),G)},Q=J.ZP.li(u||(u=(0,N.Z)(["\n  width: 274px;\n"]))),V=J.ZP.div(j||(j=(0,N.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  width: 274px;\n  height: 268px;\n  overflow: hidden;\n"]))),W=(0,J.ZP)(O.M_L)(m||(m=(0,N.Z)(["\n  position: absolute;\n  z-index: 100;\n  top: 18px;\n  right: 18px;\n  width: 18px;\n  height: 18px;\n  color: #3470ff;\n  cursor: pointer;\n"]))),X=(0,J.ZP)(O.lo)(Z||(Z=(0,N.Z)(["\n  position: absolute;\n  z-index: 100;\n  top: 18px;\n  right: 18px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  color: white;\n"]))),nn=J.ZP.img(v||(v=(0,N.Z)(["\n  border-radius: 14px;\n  width: 401px;\n  height: 268px;\n  object-fit: cover;\n"]))),en=J.ZP.div(b||(b=(0,N.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    180deg,\n    rgba(18, 20, 23, 0.5) 2.5%,\n    rgba(18, 20, 23, 0) 41.07%\n  );\n  border-radius: 14px;\n  pointer-events: none;\n"]))),rn=J.ZP.div(y||(y=(0,N.Z)(["\n  color: #121417;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  margin-right: 9px;\n"]))),tn=J.ZP.div(w||(w=(0,N.Z)(["\n  display: flex;\n  gap: 3px;\n"]))),on=J.ZP.div(P||(P=(0,N.Z)(["\n  color: #12141780;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 28px;\n"]))),sn=J.ZP.div(k||(k=(0,N.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),ln=J.ZP.div(S||(S=(0,N.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),cn=J.ZP.button(C||(C=(0,N.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: #ffffff;\n  background-color: #3470ff;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border: none;\n  border-radius: 12px;\n  width: 100%;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),dn=function(n){var e=n.advert,i=(0,E.useState)(!1),r=(0,z.Z)(i,2),t=r[0],o=r[1],s=(0,E.useState)(!1),l=(0,z.Z)(s,2),c=l[0],d=l[1],a=e.id,p=e.year,x=e.make,h=e.model,f=e.type,g=e.img,u=e.functionalities,j=e.rentalPrice,m=e.rentalCompany,Z=e.address,v=e.mileage;(0,E.useEffect)((function(){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).some((function(n){return n.make===x&&n.model===h}));o(n)}),[x,h]);var b=function(){if(t){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).filter((function(n){return!(n.make===x&&n.model===h)}));localStorage.setItem("favorites",JSON.stringify(n))}else{var e={id:a,year:p,make:x,model:h,type:f,img:g,functionalities:u,rentalPrice:j,rentalCompany:m,address:Z,mileage:v},i=JSON.parse(localStorage.getItem("favorites"))||[];i.push(e),localStorage.setItem("favorites",JSON.stringify(i))}o(!t)},y=function(){d(!c)},w=Z?Z.split(","):[];return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(Q,{children:[(0,D.jsxs)(V,{children:[t?(0,D.jsx)(W,{onClick:b}):(0,D.jsx)(X,{onClick:b}),(0,D.jsx)("div",{children:(0,D.jsx)(nn,{src:g,alt:"".concat(x," ").concat(h),width:"274"})}),(0,D.jsx)(en,{})]}),(0,D.jsxs)(rn,{children:[(0,D.jsxs)(tn,{children:[(0,D.jsx)("p",{children:x}),(0,D.jsx)("p",{style:{color:"#3470ff"},children:h}),(0,D.jsx)("p",{children:p})]}),(0,D.jsx)("p",{children:j})]}),(0,D.jsxs)(on,{children:[(0,D.jsxs)(sn,{children:[(0,D.jsx)("p",{children:w[1].trim()}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:w[w.length-1].trim()}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:m}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:"Premium"})]}),(0,D.jsxs)(ln,{children:[(0,D.jsx)("p",{children:f}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:h}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:v}),(0,D.jsx)("span",{children:"|"}),(0,D.jsx)("p",{children:u[0]})]})]}),(0,D.jsx)(cn,{onClick:y,children:"Learn more"}),c&&(0,D.jsx)(K,{onClose:y,advert:e})]})})}},396:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});var r,t,o,s=i(439),l=i(791),c=i(168),d=i(867),a=d.ZP.div(r||(r=(0,c.Z)(["\n  font-family: Manrope;\n  width: 1184px;\n  margin: 0 auto;\n  margin-top: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),p=d.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 50px;\n  column-gap: 29px;\n"]))),x=d.ZP.h1(o||(o=(0,c.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n"]))),h=i(327),f=i(184),g=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),i=e[0],r=e[1];return(0,l.useEffect)((function(){var n=JSON.parse(localStorage.getItem("favorites"))||[];r(n)}),[]),(0,f.jsx)(a,{children:0===i.length?(0,f.jsx)(x,{children:"No selected cars"}):(0,f.jsx)(p,{children:i.map((function(n,e){return(0,f.jsx)(h.Z,{advert:n},e)}))})})},u=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g,{})})}}}]);
//# sourceMappingURL=396.06d818a2.chunk.js.map