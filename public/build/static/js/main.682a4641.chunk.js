(this["webpackJsonpkeep-clone"]=this["webpackJsonpkeep-clone"]||[]).push([[0],{28:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(21),a=c.n(s),r=(c(28),c(14)),j=c(3),o=c(17),b=c.n(o),l=c(22),d=c(9),u=c(10),O=c(11),h=c(8),A=c(2),x=[{icon:Object(A.jsx)(u.e,{})},{icon:Object(A.jsx)(u.b,{})},{icon:Object(A.jsx)(u.f,{})}],p=[{id:0,icon:Object(A.jsx)(O.b,{}),label:"Notes",subTitle:"Note you add appear here",path:"/"},{id:1,icon:Object(A.jsx)(O.a,{}),label:"Reminders",subTitle:"Note with upcoming reminders appear here",path:"/reminder"},{id:2,icon:Object(A.jsx)(O.c,{}),label:"Edit Labels",subTitle:"No labels yet",path:"/labels"},{id:3,icon:Object(A.jsx)(h.a,{}),label:"Archive",subTitle:"Your archived notes appear here",path:"/archive"},{id:4,icon:Object(A.jsx)(h.f,{}),label:"Trash",subTitle:"No notes in trash",path:"/trash"}],f=(O.d,h.b,u.d,u.a,h.d,h.a,h.c,h.g,h.e,i.a.createContext()),m=function(e){var t=e.children,c=Object(n.useState)(!0),i=Object(d.a)(c,2),s=i[0],a=i[1],r=Object(n.useState)(!1),j=Object(d.a)(r,2),o=j[0],u=j[1],O=Object(n.useState)("60px"),h=Object(d.a)(O,2),x=h[0],m=h[1],v=Object(n.useState)(!1),N=Object(d.a)(v,2),S=N[0],g=N[1],I=Object(n.useState)(0),E=Object(d.a)(I,2),Q=E[0],k=E[1],B=Object(n.useState)(!0),C=Object(d.a)(B,2),y=C[0],w=C[1],D=Object(n.useState)([]),R=Object(d.a)(D,2),J=R[0],U=R[1],Y=Object(n.useState)(0),H=Object(d.a)(Y,2),T=H[0],W=H[1],F=function(){var e=Object(l.a)(b.a.mark((function e(){var t,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,fetch("/api");case 4:return t=e.sent,e.next=7,t.json();case 7:(c=e.sent)?(w(!1),n=c.map((function(e){return{_id:e._id,title:e.title,detail:e.detail}})),U(n)):U([]),a(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),a(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){F()}),[]);var L={width:x,transition:"width 100ms ease-in-out"};return Object(n.useEffect)((function(){0===J.length?w(!0):w(!1)}),[y,J.length]),Object(n.useEffect)((function(){m(o?"275px":"60px")}),[o]),Object(A.jsx)(f.Provider,{value:{setIsNoteOpen:g,setIsSidebarOpen:u,setActiveId:k,setIsListEmpty:w,set_id:W,isListEmpty:y,isNoteOpen:S,isSidebarOpen:o,activeId:Q,sidebarStyles:L,SidebarData:p,loading:s,notesList:J,id:T},children:t})},v=function(){return Object(n.useContext)(f)},N=(c(31),function(){var e=v(),t=e.setIsNoteOpen,c=e.isNoteOpen,n=e.notesList,i=e.set_id;return n.map((function(e,s){var a=e.title,r=e.detail;return Object(A.jsxs)("div",{className:"container",id:s,onClick:function(e){!function(e,t){e.preventDefault(),i(n[t]._id)}(e,s),t(!c)},children:[Object(A.jsx)("div",{className:"container"}),Object(A.jsxs)("div",{className:"note-container",children:[Object(A.jsx)("div",{className:"note-title",children:Object(A.jsx)("h4",{children:a})}),Object(A.jsx)("div",{className:"note-detail",children:Object(A.jsx)("p",{children:r})})]})]},s)}))}),S=(c(32),function(){return Object(A.jsxs)("form",{children:[Object(A.jsx)("div",{className:"icon-container",children:Object(A.jsx)(O.e,{className:"search-icon"})}),Object(A.jsx)("input",{type:"text",placeholder:"Search"})]})}),g=function(){return x.map((function(e,t){var c=e.icon;return Object(A.jsx)("div",{className:"dark-icon",children:c},t)}))},I=function(){var e=v(),t=e.IsSidebarOpen,c=e.setIsSidebarOpen;return Object(A.jsx)("main",{children:Object(A.jsxs)("nav",{children:[Object(A.jsx)("div",{className:"menu-icon",onClick:function(){return c(!t)},children:Object(A.jsx)(u.c,{})}),Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=",alt:"logo"}),Object(A.jsx)("h2",{children:"Keep"}),Object(A.jsx)(S,{className:"search-form"}),Object(A.jsx)("div",{className:"dark-icon-container",children:Object(A.jsx)(g,{})})]})})},E=(c(33),function(){var e=v(),t=e.setIsSidebarOpen,c=e.activeId,n=e.setActiveId,i=e.sidebarStyles,s=e.SidebarData;return Object(A.jsx)("div",{className:"main-container",style:i,onMouseEnter:function(){return t(!0)},onMouseLeave:function(){return t(!1)},children:Object(A.jsx)(r.a,{children:Object(A.jsx)("ul",{className:"side-container",children:s.map((function(e,t){var i=e.icon,s=e.path,a=e.id,j=e.label;return Object(A.jsx)("li",{className:"side-item ".concat(a===c&&"active"),onClick:function(){return n(a)},children:Object(A.jsxs)(r.b,{to:s,className:"side-item",children:[i," ",Object(A.jsx)("h4",{children:j})]})},t)}))})})})}),Q=function(){var e=v(),t=e.SidebarData[e.activeId],c=t.icon,n=t.subTitle;return Object(A.jsxs)("div",{className:"page-icon-container",children:[c,Object(A.jsx)("h2",{className:"empty-subtitle",children:n})]})},k=(c(39),function(){var e=v().isListEmpty;return Object(A.jsxs)("main",{children:[Object(A.jsx)(I,{}),Object(A.jsx)(E,{}),Object(A.jsx)("div",{className:"page-container",children:e?Object(A.jsx)(Q,{}):Object(A.jsx)(N,{})})]})});c(40);var B=function(){return Object(A.jsx)("main",{children:Object(A.jsx)(r.a,{children:Object(A.jsx)(j.c,{children:Object(A.jsx)(j.a,{path:"/",exact:!0,children:Object(A.jsx)(k,{})})})})})};a.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(m,{children:Object(A.jsx)(B,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.682a4641.chunk.js.map