(this["webpackJsonpsoap-react"]=this["webpackJsonpsoap-react"]||[]).push([[0],{134:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(0),s=t.n(r),o=t(11),c=t.n(o),l=t(51),i=t(86),u=t(194),j=t(12),p=t(10),b=t(14),d=t(3),h=t(184),O=t(187),v=t(185),x=t(188),m=t(199),f=t(175),y=t(189),g=t(190),k=t(192),C=t(186),w=t(44),S=t(191),B=t(193),E=t(23),D=t.n(E),F=t(29),N=t(30),T=t.n(N),A=t(31),H=t.n(A),W=t(178),q=t(201),I=t(179),L=t(180),P=t(181),z=t(196),J=t(182),U=t(198),G=t(183),M=t(197);function R(e){return Object(a.jsx)(w.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var Y=t(170),K=t(171),Q=t(172),V=t(173),X=t(195),Z=t(176),$=t(177),_="http://localhost:8080/ws/author",ee="http://localhost:8080/ws/book",ne={"Content-Type":"text/xml"};function te(e){var n=e.open,t=e.handleClose,s=e.reload,o=Object(r.useState)(""),c=Object(j.a)(o,2),l=c[0],i=c[1],u=Object(r.useState)(""),p=Object(j.a)(u,2),b=p[0],d=p[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),v=O[0],x=O[1],m=function(){var e=Object(F.a)(D.a.mark((function e(){var n,t,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l&&""!==b&&""!==v){e.next=2;break}return e.abrupt("return");case 2:return'\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ynov="http://nantes.ynov.com/soap/author">\n      <soapenv:Header />\n      <soapenv:Body>\n        \n        TODO\n\n      </soapenv:Body>\n    </soapenv:Envelope>',e.next=5,T()({url:_,headers:ne,xml:'\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ynov="http://nantes.ynov.com/soap/author">\n      <soapenv:Header />\n      <soapenv:Body>\n        \n        TODO\n\n      </soapenv:Body>\n    </soapenv:Envelope>'});case 5:n=e.sent,t=n.response,a=t.body,r=(new H.a).parseFromString(a),console.log(r),s();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(Y.a,{open:n,onClose:t,"aria-labelledby":"form-dialog-title",children:[Object(a.jsx)(K.a,{id:"form-dialog-title",children:"Ajouter un nouvel auteur"}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(V.a,{children:"Pour ajouter un auteur, veuillez saisir les champs demand\xe9s"}),Object(a.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"lastname",label:"Nom",fullWidth:!0,onChange:function(e){return i(e.target.value)},required:!0}),Object(a.jsx)(X.a,{margin:"dense",id:"firstname",label:"Pr\xe9nom",fullWidth:!0,onChange:function(e){return d(e.target.value)},required:!0}),Object(a.jsx)(X.a,{margin:"dense",id:"birth",label:"Date de naissance",type:"number",fullWidth:!0,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(a.jsxs)(Z.a,{children:[Object(a.jsx)($.a,{onClick:t,color:"primary",children:"Annuler"}),Object(a.jsx)($.a,{variant:"outlined",onClick:m,color:"primary",children:"Ajouter"})]})]})}function ae(){var e=Object(r.useState)(!0),n=Object(j.a)(e,2),t=n[0],s=n[1],o=Object(r.useState)([]),c=Object(j.a)(o,2),l=(c[0],c[1],Object(r.useState)(!1)),i=Object(j.a)(l,2),u=i[0],p=i[1],b=Object(r.useState)(!1),d=Object(j.a)(b,2),h=d[0],O=d[1];Object(r.useEffect)((function(){v()}),[]);var v=function(){var e=Object(F.a)(D.a.mark((function e(){var n,t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return'\n    <soapenv:Envelope\n      xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n      xmlns:ynov="http://nantes.ynov.com/soap/author">\n\n      TODO\n    \n    </soapenv:Envelope>\n    ',e.prev=1,e.next=4,T()({url:_,headers:ne,xml:'\n    <soapenv:Envelope\n      xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n      xmlns:ynov="http://nantes.ynov.com/soap/author">\n\n      TODO\n    \n    </soapenv:Envelope>\n    '});case 4:n=e.sent,t=n.response,a=t.body,(new H.a).parseFromString(a),s(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),s(!1),O(!0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{children:"Liste des auteurs"}),t?Object(a.jsx)(W.a,{}):Object(a.jsxs)(q.a,{size:"small",children:[Object(a.jsx)(I.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(P.a,{})]}),Object(a.jsx)(z.a,{display:"flex",alignItems:"center",justifyContent:"center",style:{height:"100%"},children:Object(a.jsx)(J.a,{color:"primary","aria-label":"add",onClick:function(){return p(!0)},children:Object(a.jsx)(G.a,{})})}),u&&Object(a.jsx)(te,{open:u,handleClose:function(){return p(!1)},reload:function(){p(!1),v()}}),Object(a.jsx)(U.a,{open:h,autoHideDuration:5e3,onClose:function(){return O(!1)},children:Object(a.jsx)(M.a,{onClose:function(){return O(!1)},severity:"error",children:"Une erreur r\xe9seau est survenue"})})]})}function re(e){var n=e.open,t=e.handleClose,s=e.reload,o=Object(r.useState)(""),c=Object(j.a)(o,2),l=c[0],i=c[1],u=Object(r.useState)(""),p=Object(j.a)(u,2),b=p[0],d=p[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),v=O[0],x=O[1],m=Object(r.useState)(""),f=Object(j.a)(m,2),y=f[0],g=f[1],k=function(){var e=Object(F.a)(D.a.mark((function e(){var n,t,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l&&""!==b&&""!==v&&""!==y){e.next=2;break}return e.abrupt("return");case 2:return'\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ynov="http://nantes.ynov.com/soap/book">\n\t    <soapenv:Header />\n\t    <soapenv:Body>\n        \n        TODO\n\n\t    </soapenv:Body>\n    </soapenv:Envelope>',e.next=5,T()({url:ee,headers:ne,xml:'\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ynov="http://nantes.ynov.com/soap/book">\n\t    <soapenv:Header />\n\t    <soapenv:Body>\n        \n        TODO\n\n\t    </soapenv:Body>\n    </soapenv:Envelope>'});case 5:n=e.sent,t=n.response,a=t.body,r=(new H.a).parseFromString(a),console.log(r),s();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(Y.a,{open:n,onClose:t,"aria-labelledby":"form-dialog-title",children:[Object(a.jsx)(K.a,{id:"form-dialog-title",children:"Ajouter un nouveau livre"}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(V.a,{children:"Pour ajouter un livre, veuillez saisir les champs demand\xe9s"}),Object(a.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"title",label:"Titre",fullWidth:!0,onChange:function(e){return i(e.target.value)},required:!0}),Object(a.jsx)(X.a,{margin:"dense",id:"isbn",label:"ISBN",fullWidth:!0,onChange:function(e){return d(e.target.value)},required:!0}),Object(a.jsx)(X.a,{margin:"dense",id:"year",label:"Date de publication",type:"number",fullWidth:!0,onChange:function(e){return x(e.target.value)},required:!0}),Object(a.jsx)(X.a,{margin:"dense",id:"authorId",label:"Author ID",type:"number",fullWidth:!0,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(a.jsxs)(Z.a,{children:[Object(a.jsx)($.a,{onClick:t,color:"primary",children:"Annuler"}),Object(a.jsx)($.a,{variant:"outlined",onClick:k,color:"primary",children:"Ajouter"})]})]})}function se(){var e=Object(r.useState)(!0),n=Object(j.a)(e,2),t=n[0],s=n[1],o=Object(r.useState)([]),c=Object(j.a)(o,2),l=(c[0],c[1],Object(r.useState)(!1)),i=Object(j.a)(l,2),u=i[0],p=i[1],b=Object(r.useState)(!1),d=Object(j.a)(b,2),h=d[0],O=d[1];Object(r.useEffect)((function(){v()}),[]);var v=function(){var e=Object(F.a)(D.a.mark((function e(){var n,t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return'<soapenv:Envelope\n    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n    xmlns:ynov="http://nantes.ynov.com/soap/book">\n    <soapenv:Header />\n    <soapenv:Body>\n      \n      TODO\n\n    </soapenv:Body>\n  </soapenv:Envelope>',e.prev=1,e.next=4,T()({url:ee,headers:ne,xml:'<soapenv:Envelope\n    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n    xmlns:ynov="http://nantes.ynov.com/soap/book">\n    <soapenv:Header />\n    <soapenv:Body>\n      \n      TODO\n\n    </soapenv:Body>\n  </soapenv:Envelope>'});case 4:n=e.sent,t=n.response,a=t.body,(new H.a).parseFromString(a),s(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),s(!1),O(!0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{children:"Liste des livres"}),t?Object(a.jsx)(W.a,{}):Object(a.jsxs)(q.a,{size:"small",children:[Object(a.jsx)(I.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(P.a,{})]}),Object(a.jsx)(z.a,{display:"flex",alignItems:"center",justifyContent:"center",style:{height:"100%"},children:Object(a.jsx)(J.a,{color:"primary","aria-label":"add",onClick:function(){return p(!0)},children:Object(a.jsx)(G.a,{})})}),u&&Object(a.jsx)(re,{open:u,handleClose:function(){return p(!1)},reload:function(){p(!1),v()}}),Object(a.jsx)(U.a,{open:h,autoHideDuration:5e3,onClose:function(){return O(!1)},children:Object(a.jsx)(M.a,{onClose:function(){return O(!1)},severity:"error",children:"Une erreur r\xe9seau est survenue"})})]})}var oe=240,ce=Object(h.a)((function(e){return{root:{display:"flex"},drawer:Object(p.a)({},e.breakpoints.up("sm"),{width:oe,flexShrink:0}),appBar:Object(p.a)({marginLeft:oe},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(oe,"px)")}),menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:oe},content:{flexGrow:1,padding:e.spacing(3)}}})),le=function(){var e=ce(),n="";switch(Object(b.f)().pathname){default:case"/":n="Page d'accueil";break;case"/auteurs":n="Auteurs";break;case"/livres":n="Livres"}return Object(a.jsx)(v.a,{position:"absolute",className:Object(d.a)(e.appBar,e.appBarShift),children:Object(a.jsx)(C.a,{className:e.toolbar,children:Object(a.jsx)(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:n})})})},ie=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"S\xe9lectionner une page"}),Object(a.jsx)("img",{src:"logo512.png",alt:"Logo Ynov"})]})};function ue(){var e=ce(),n=Object(r.useState)(!0),t=Object(j.a)(n,2),s=t[0],o=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(O.a,{}),Object(a.jsx)(le,{}),Object(a.jsx)("nav",{className:e.drawer,"aria-label":"mailbox folders",children:Object(a.jsx)(m.a,{variant:"persistent",open:s,onClose:function(){return o(!1)},classes:{paper:e.drawerPaper},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:e.toolbar}),Object(a.jsx)(x.a,{}),Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(y.a,{component:l.b,to:"/auteurs",children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(S.a,{})}),Object(a.jsx)(k.a,{primary:"Auteurs"})]}),Object(a.jsxs)(y.a,{component:l.b,to:"/livres",children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(k.a,{primary:"Livres"})]})]})]})})}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.toolbar}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(ie,{})}}),Object(a.jsx)(b.a,{path:"/auteurs",render:function(){return Object(a.jsx)(ae,{})}}),Object(a.jsx)(b.a,{path:"/livres",render:function(){return Object(a.jsx)(se,{})}})]})]})]})})}var je=Object(i.a)({palette:{primary:{main:"#42ab9e"}}});c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(u.a,{theme:je,children:Object(a.jsx)(ue,{})})})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.eb5cb1d3.chunk.js.map