(this.webpackJsonpbooklibrary=this.webpackJsonpbooklibrary||[]).push([[0],{28:function(e,a,t){e.exports=t(63)},33:function(e,a,t){},52:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),s=t(10),o=(t(33),t(71)),m=t(72),i=t(75),u=t(70),d=t(73),f=t(12),E=(t(34),t(26)),p=t.n(E),b=t(66),v=t(67),h=t(68),g=t(69),N=t(74),y=(t(52),function(e){var a=e.thumbnail,t=e.title,c=e.pageCount,r=e.language,o=e.description,m=e.authors,i=e.publisher,d=e.previewLink,f=e.infoLink,E=Object(n.useState)(!1),p=Object(s.a)(E,2),y=p[0],k=p[1],w=function(){return k(!y)};return l.a.createElement(b.a,{style:{width:"235px"},className:"m-auto "},l.a.createElement(v.a,{top:!0,style:{width:"100%",height:"255"},src:a,alt:t}),l.a.createElement(h.a,null,l.a.createElement(g.a,{className:"card-title"},t),l.a.createElement(u.a,{onClick:w,color:"info",className:"input__style"},"Pi\xf9 info")),l.a.createElement(N.a,{isOpen:y,toggle:w},l.a.createElement("div",{className:"modal-header d-flex justify-content-center"},l.a.createElement("h5",{className:"modal-title text-center",id:"exampleModalLabel"},t),l.a.createElement("button",{"aria-label":"Close",className:"close",type:"button",onClick:w},l.a.createElement("span",{"aria-hidden":!0,className:"close__style"},"X"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"d-flex justify-content-between ml-3"},l.a.createElement("img",{src:a,alt:t,style:{height:"233px"}}),l.a.createElement("div",null,l.a.createElement("p",null,"Authors : ",m),l.a.createElement("p",null,"Publisher : ",i),l.a.createElement("p",null,"Page Count: ",c),l.a.createElement("p",null,"Language : ",r))),l.a.createElement("div",{className:"mt-3"},o)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("div",{className:"left-silde"},l.a.createElement("a",{href:d,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Preview Link")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"right-silde"},l.a.createElement("a",{href:f,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Info Link")))))}),k=(t(62),function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,l.a.createElement("i",{class:"fas fa-beer"})," Bookaneer")),l.a.createElement("div",{className:"col"},l.a.createElement("p",null,l.a.createElement("i",{class:"far fa-copyright"})," 2020 All right reserved")),l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"Crafted with ",l.a.createElement("i",{class:"fas fa-heart"})," e ",l.a.createElement("i",{class:"fas fa-mug-hot"})," for Real Bookaneer")))))});var w=function(){var e=Object(n.useState)(40),a=Object(s.a)(e,1)[0],t=Object(n.useState)(1),c=Object(s.a)(t,1)[0],r=Object(n.useState)(""),E=Object(s.a)(r,2),b=E[0],v=E[1],h=Object(n.useState)(!1),g=Object(s.a)(h,2),N=g[0],w=g[1],x=Object(n.useState)([]),I=Object(s.a)(x,2),j=I[0],O=I[1],L=function(){w(!0),a>40||a<1?f.b.error("max results must be between 1 and 40"):p.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(b,"&maxResults=").concat(a,"&startIndex=").concat(c)).then((function(e){c>=e.data.totalItems||c<1?f.b.error("max reults must be between 1 and ".concat(e.data.totalItems)):e.data.items.length>0&&(O(e.data.items),w(!1))})).catch((function(e){w(!0),console.log(e.response)}))};return l.a.createElement("div",{className:"w-100 h-100 page-container"},l.a.createElement("div",{className:"main-image d-flex justify-content-center align-items-center flex-column"},l.a.createElement("h1",{className:"display-2 text-center text__style mb-3",style:{zIndex:2}},l.a.createElement("i",{class:"fas fa-dragon"}),"DragonBook"),l.a.createElement("div",{style:{width:"60%",zIndex:2}},l.a.createElement(o.a,{size:"sm",className:"mb-3"},l.a.createElement(m.a,{className:"input__style",placeholder:"Cerca libri",value:b,onChange:function(e){return v(e.target.value)}}),l.a.createElement(i.a,{addonType:"append"},l.a.createElement(u.a,{className:"input__style",color:"info",onClick:L},l.a.createElement("i",{className:"fas fa-search"})))))),function(){if(N)return l.a.createElement("div",{className:"d-flex justify-content-center mt-3"},l.a.createElement(d.a,{style:{width:"3rem",height:"3rem"}}));var e=j.map((function(e,a){var t="";return e.volumeInfo.imageLinks&&(t=e.volumeInfo.imageLinks.thumbnail),l.a.createElement("div",{className:"col-lg-4 mb-3",key:e.id},l.a.createElement(y,{thumbnail:t,title:e.volumeInfo.title,pageCount:e.volumeInfo.pageCount,language:e.volumeInfo.language,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink,infoLink:e.volumeInfo.infoLink}))}));return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},e))}(),l.a.createElement(f.a,null),l.a.createElement(k,null))};r.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3d58baa7.chunk.js.map