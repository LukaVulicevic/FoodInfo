(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=(t(11),t(2)),o=t.n(s),m=t(5),i=t(1),u=function(e){var a=e.item;return r.a.createElement("div",{className:"food-card"},r.a.createElement("h2",{className:"food-card-title"},a.title),r.a.createElement("div",{className:"food-card-body"},r.a.createElement("ul",{className:"food-card-info"},r.a.createElement("li",null,r.a.createElement("i",{className:"far fa-clock"})," ",a.readyInMinutes," min."),r.a.createElement("li",null,r.a.createElement("i",{className:"far fa-user"})," ",a.servings),r.a.createElement("li",null,(a.pricePerServing/100).toFixed(2),"$ / ",r.a.createElement("i",{className:"far fa-user"})),r.a.createElement("li",null,"Gluten free: ",a.glutenFree?"Yes":"No")),r.a.createElement("p",{className:"food-card-summary",dangerouslySetInnerHTML:{__html:a.summary}}),r.a.createElement("ol",{className:"food-card-instructions"},a.analyzedInstructions[0].steps.map((function(e){return r.a.createElement("li",{key:e.number},e.step)})))))},p=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),p=s[0],f=s[1],d=Object(n.useState)([]),h=Object(i.a)(d,2),E=h[0],b=h[1],v=function(){var e=Object(m.a)(o.a.mark((function e(a){var n,c,l,s,m,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n="?apiKey=9921ae6db72542758de24e58d8e63a57","https://api.spoonacular.com/recipes/complexSearch",c=[],e.prev=4,e.next=7,fetch("".concat("https://api.spoonacular.com/recipes/complexSearch").concat(n,"&query=").concat(t));case 7:return l=e.sent,e.next=10,l.json();case 10:s=e.sent,c=s.results.map((function(e){return e.id})).join(","),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return"https://api.spoonacular.com/recipes/informationBulk",e.prev=18,e.next=21,fetch("".concat("https://api.spoonacular.com/recipes/informationBulk").concat(n,"&ids=").concat(c));case 21:return m=e.sent,e.next=24,m.json();case 24:i=e.sent,console.log(i),f(i),b(p.map((function(e){return r.a.createElement(u,{item:e,key:e.id})}))),e.next=34;break;case 30:e.prev=30,e.t1=e.catch(18),b(r.a.createElement("div",{className:"container error-container"},r.a.createElement("h2",{className:"error-msg"},"We are sorry but due to our daily limit we are not able to display any information at the moment. Please come back later."))),console.log(e.t1);case 34:case"end":return e.stop()}}),e,null,[[4,14],[18,30]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container food-flex"},r.a.createElement("form",{className:"search-form",onSubmit:v},r.a.createElement("input",{className:"search-input",name:"query",type:"text",placeholder:"Search food",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button search",type:"submit"},"Search")),r.a.createElement("div",{className:"recipes-list"},E))},f=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container header-container"},r.a.createElement("h1",{className:"title"},"FoodInfo"),r.a.createElement("p",{className:"subtitle"},"All information in one place")))},d=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/LukaVulicevic"},r.a.createElement("i",{className:"fab fa-github fa-3x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/luka-vuli%C4%8Devi%C4%87-b1ba0a1b1/"},r.a.createElement("i",{className:"fab fa-linkedin fa-3x"})),r.a.createElement("p",{className:"photo-info"},"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@goumbik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Lukas Blazek")," - ",r.a.createElement("a",{href:"https://unsplash.com/s/photos/cooking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))))};var h=function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(d,null))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.aaa17b8b.chunk.js.map