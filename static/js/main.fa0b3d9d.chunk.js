(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),o=a(5),c=a.n(o),i=a(8),u=a(1),d=a(2),m=a(4),f=a(3),p=(a(15),a(16),a(17),a(18)),h=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",selectorValue:"all"},e.handleChange=function(t){var a=e.props,n=a.todosVisible,r=a.filtered,l=e.state,s=l.selectorValue,o=l.searchValue,c=n.find((function(e){return e.id===+t.target.id}));c.completed=!c.completed,r(s,o)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.todosVisible,n=t.selectUser,l=t.search,s=t.filtered,o=t.shuffle,c=this.state.searchValue;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{type:"text",placeholder:"Search by title",value:c,onChange:function(t){e.setState({searchValue:t.target.value}),l(t.target.value)}}),r.a.createElement("select",{onChange:function(t){e.setState({selectorValue:t.target.value}),s(t.target.value,c)}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")),r.a.createElement("button",{type:"button",onClick:o},"Random it!"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},a.map((function(t){return r.a.createElement("li",{className:p("TodoList__item",{"TodoList__item--unchecked":!t.completed,"TodoList__item--checked":t.completed}),key:t.id},r.a.createElement("label",null,r.a.createElement("input",{id:t.id,type:"checkbox",checked:t.completed,onChange:e.handleChange}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{name:t.userId,className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(e){n(e.target.name)}},"User\xa0#",t.userId))})))))}}]),a}(r.a.Component),v=(a(19),function(e){var t=e.user,a=e.clear;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: \xa0",t.id)),r.a.createElement("h3",{className:"CurrentUser__name"},t.name),r.a.createElement("p",{className:"CurrentUser__email"},t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t.phone),r.a.createElement("button",{type:"button",className:"btn btn-primary CurrentUser__button",onClick:a},"Clear"))});function b(e){return fetch("https://mate-api.herokuapp.com/users/".concat(e)).then((function(e){return e.json()}))}var _=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allTodos:[],todosVisible:[],selectedUserId:0,user:{},errorData:!0,filterInfo:"all"},e.selectUser=function(t){var a=e.state.selectedUserId;t!==a&&b(t).then((function(a){null!==a.data?e.setState({user:a.data,selectedUserId:t,errorData:!0}):e.setState({selectedUserId:0,errorData:!1})}))},e.clear=function(){e.setState({selectedUserId:0,user:{}})},e.search=function(t){var a=e.state.filterInfo,n=e.filtered(a,t).filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));e.setState({todosVisible:n})},e.filtered=function(t,a){var n,r=e.state.allTodos.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return"completed"===t&&(n=r.filter((function(e){return!0===e.completed}))),"active"===t&&(n=r.filter((function(e){return!1===e.completed}))),"all"===t&&(n=r),e.setState({todosVisible:n,filterInfo:t}),n},e.shuffle=function(){for(var t=e.state.todosVisible,a=t.length-1;a>0;a-=1){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}e.setState({todosVisible:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()})).then((function(e){return e.data.filter((function(e){return null!==e.title&&""!==e.title&&null!==e.userId&&null!==e.completed}))})).then((function(e){return t.setState({allTodos:e,todosVisible:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todosVisible,a=e.selectedUserId,n=e.user,l=e.errorData;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(h,{todosVisible:t,selectUser:this.selectUser,search:this.search,filtered:this.filtered,shuffle:this.shuffle})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(v,{user:n,clear:this.clear}):"No user selected",r.a.createElement("p",{hidden:l},"No such user!"))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(_,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fa0b3d9d.chunk.js.map