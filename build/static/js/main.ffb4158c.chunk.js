(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(15),a(1)),l=a(2),i=a(4),d=a(3),m=a(5),u=(a(16),a(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).toggleDropdown=function(t){t.preventDefault(),e.setState({showDropdown:!e.state.showDropdown})},e.handleTemplateSelection=function(t,a){t.preventDefault(),e.setState({showDropdown:!1}),e.props.selectTemplate(t,a)},e.state={showDropdown:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.loggedIn?r.a.createElement("div",{className:"Header"},r.a.createElement("span",{className:"header-btn-container"},r.a.createElement("button",{className:"header-btn header-home-btn"},"Git Wired"),r.a.createElement("button",{className:"header-btn header-help-btn"},"Help")),r.a.createElement("span",{className:"header-btn-container"},r.a.createElement("div",{className:"header-recent-projects-btn-dropdown-container"},r.a.createElement("button",{className:"header-btn header-recent-projects-btn",onClick:this.toggleDropdown},"Recent Projects"),this.state.showDropdown?r.a.createElement("div",{className:"header-recent-projects-btn-dropdown"},r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"card-page-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"card page template"),r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"blog-page-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"blog page template"),r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"blog-post-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"blog post template")):null),r.a.createElement("button",{className:"header-btn header-profile-btn"},"Profile"),r.a.createElement("button",{className:"header-btn header-logout-btn",onClick:this.props.changeLoggedInState},"Logout"))):r.a.createElement("div",{className:"Header"},r.a.createElement("button",{className:"header-btn header-home-btn"},"Git Wired"),r.a.createElement("span",{className:"header-title-container"},r.a.createElement("h1",{className:"header-main-title"},"Welcome!"),r.a.createElement("h3",{className:"header-sub-title"},r.a.createElement("a",null,"Login")," to get started!")),r.a.createElement("span",{className:"header-btn-container"},r.a.createElement("button",{className:"header-btn header-login-btn",onClick:this.props.changeLoggedInState},"login"),r.a.createElement("button",{className:"header-btn header-register-btn"},"register")))}}]),t}(n.Component)),p=(a(6),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CardPageTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"})),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component)),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BlogPageTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-page-section"}),r.a.createElement("div",{className:"template-page-section"})),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BlogPostTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-post-main"}),r.a.createElement("div",{className:"template-post-sub-container"},r.a.createElement("div",{className:"template-post-sub"}),r.a.createElement("div",{className:"template-post-sub"}))),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component),g=(a(18),n.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getTitle",value:function(){return this.props.project.projectTitle}},{key:"renderTitle",value:function(){return r.a.createElement("div",{className:"ProjectTitle"}," ",this.getTitle()," ")}},{key:"getRepo",value:function(){return this.props.project.repoName}},{key:"renderRepo",value:function(){return r.a.createElement("div",{className:"RepoName"}," ",this.getRepo()," ")}},{key:"getUpdated",value:function(){return this.props.project.updatedAt}},{key:"renderUpdated",value:function(){return r.a.createElement("div",{className:"Updated"}," ",this.getUpdated()," ")}},{key:"getCreated",value:function(){return this.props.project.createdAt}},{key:"renderCreated",value:function(){return r.a.createElement("div",{className:"Created"}," ",this.getCreated()," ")}},{key:"render",value:function(){return r.a.createElement("span",{class:"ProjectCard"},this.renderTitle(),this.renderRepo(),this.renderUpdated(),this.renderCreated())}}]),t}(n.Component)),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).selectTemplate=function(t,a){t.preventDefault(),e.setState({template:a})},e.changeLoggedInState=function(t){t.preventDefault(),e.setState({loggedIn:!e.state.loggedIn})},e.state={loggedIn:!1,template:"",stubCard:{projectTitle:"Title1",repoName:"RepoName1",createdAt:"Created1",updatedAt:"Updated1"}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.loggedIn?"App App-loggedIn":"App App-loggedOut"},r.a.createElement(u,{loggedIn:this.state.loggedIn,changeLoggedInState:this.changeLoggedInState,selectTemplate:this.selectTemplate}),this.state.loggedIn?r.a.createElement(g,{project:this.state.stubCard}):r.a.createElement("div",{className:"welcome-content"},r.a.createElement("h2",{className:"welcome-content-description-title"},"Description"),r.a.createElement("p",{className:"welcome-content-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("h2",{className:"welcome-content-instructions-title"},"Get Started!"),r.a.createElement("p",{className:"welcome-content-instructions"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"footer"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.ffb4158c.chunk.js.map