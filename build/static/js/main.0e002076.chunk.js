(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(17),a(1)),s=a(2),l=a(4),u=a(3),d=a(5),m=(a(9),a(18),a(6)),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goToAuth=function(){window.location.href="https://git-wired-be.herokuapp.com/api/v1/authenticate"},a.loginButton=function(){return r.a.createElement("input",{type:"button",onClick:function(){a.props.user.setGitWiredToken("123"),a.updateState()},className:"header-btn header-login-btn",value:"Login"})},a.logoutButton=function(){return r.a.createElement("input",{type:"button",onClick:function(){a.props.user.logout(),a.updateState()},className:"header-btn header-logout-btn",value:"Logout"})},a.updateState=a.props.changeLoggedInState.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.user.isLoggedIn()?this.logoutButton():this.loginButton())}}]),t}(n.Component),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleDropdown=function(t){t.preventDefault(),e.setState({showDropdown:!e.state.showDropdown})},e.handleTemplateSelection=function(t,a){t.preventDefault(),e.setState({showDropdown:!1}),e.props.selectTemplate(t,a)},e.state={showDropdown:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.loggedIn?r.a.createElement("div",{className:"Header"},r.a.createElement("span",{className:"header-btn-container"},r.a.createElement("button",{className:"header-btn header-home-btn"},"Git Wired"),r.a.createElement("button",{className:"header-btn header-help-btn"},"Help")),r.a.createElement("span",{className:"header-btn-container"},r.a.createElement("div",{className:"header-recent-projects-btn-dropdown-container"},r.a.createElement("button",{className:"header-btn header-recent-projects-btn",onClick:this.toggleDropdown},"Recent Projects"),this.state.showDropdown?r.a.createElement("div",{className:"header-recent-projects-btn-dropdown"},r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"card-page-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"card page template"),r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"blog-page-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"blog page template"),r.a.createElement("button",{className:"header-recent-projects-btn-dropdown-btn",name:"blog-post-template",onClick:function(t){return e.handleTemplateSelection(t,t.target.name)}},"blog post template")):null),r.a.createElement("button",{className:"header-btn header-profile-btn",onClick:this.props.viewProfile},"Profile"),r.a.createElement(p,{user:this.props.user,changeLoggedInState:this.props.changeLoggedInState}))):r.a.createElement("div",{className:"Header"},r.a.createElement("button",{className:"header-btn header-home-btn"},"Git Wired"),r.a.createElement("span",{className:"header-title-container"},r.a.createElement("h1",{className:"header-main-title"},"Welcome!"),r.a.createElement("h3",{className:"header-sub-title"},r.a.createElement("a",null,"Login")," to get started!")),r.a.createElement("span",{className:"header-btn-container"},r.a.createElement(p,{user:this.props.user,changeLoggedInState:this.props.changeLoggedInState})))}}]),t}(n.Component),f=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Welcome"},r.a.createElement("h2",{className:"welcome-content-description-title"},"Description"),r.a.createElement("p",{className:"welcome-content-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("h2",{className:"welcome-content-instructions-title"},"Get Started!"),r.a.createElement("p",{className:"welcome-content-instructions"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}}]),t}(n.Component)),b=function(){function e(){var t=this;Object(o.a)(this,e),this.isLoggedIn=function(){return Boolean(t.getGitWiredToken())},this.getURLToken=function(){var e=window.location.href.split("=");return e.length>=2?e.pop:null},this.login=function(){var e=t.getURLToken();t.setGitWiredToken(e)},this.tokenKey="userToken"}return Object(s.a)(e,[{key:"setGitWiredToken",value:function(e){e&&sessionStorage.setItem(this.tokenKey,e)}},{key:"getGitWiredToken",value:function(){return sessionStorage.getItem(this.tokenKey)}},{key:"logout",value:function(){sessionStorage.removeItem(this.tokenKey)}}]),e}(),g=function(){function e(){var t=this;Object(o.a)(this,e),this.getRecents=function(e){fetch("https://git-wired-be.herokuapp.com/api/v1/wireframes",{method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.user.getGitWiredToken())}).then(function(e){return e.json()}).then(function(t){return e(t)}).catch(function(e){return console.error("Error:",e)})},this.user=new b}return Object(s.a)(e,[{key:"stubRecent",value:function(){return{data:{id:1,attributes:{recent:[{projectTitle:"Wireframe Title 1",repoName:"Repo 1",updatedAt:"Updated At",createdAt:"Created At"},{projectTitle:"Wireframe Title 2",repoName:"Repo 2",updatedAt:"Updated At",createdAt:"Created At"}]}}}}}]),e}(),v=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getTitle",value:function(){return this.props.project.projectTitle}},{key:"renderTitle",value:function(){return r.a.createElement("div",{className:"ProjectTitle"}," ",this.getTitle()," ")}},{key:"getRepo",value:function(){return this.props.project.repoName}},{key:"renderRepo",value:function(){return r.a.createElement("div",{className:"RepoName"}," ",this.getRepo()," ")}},{key:"getUpdated",value:function(){return this.props.project.updatedAt}},{key:"renderUpdated",value:function(){return r.a.createElement("div",{className:"Updated"}," ",this.getUpdated()," ")}},{key:"getCreated",value:function(){return this.props.project.createdAt}},{key:"renderCreated",value:function(){return r.a.createElement("div",{className:"Created"}," ",this.getCreated()," ")}},{key:"render",value:function(){return r.a.createElement("span",{className:"ProjectCard"},this.renderTitle(),this.renderRepo(),this.renderUpdated(),this.renderCreated())}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).parseRecentProjects=function(e){var t=e.data.attributes.recent;a.setState({cards:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new g;this.parseRecentProjects(e.stubRecent())}},{key:"renderProjectCards",value:function(e){return this.state.cards.map(function(e){return r.a.createElement(v,{project:e})})}},{key:"render",value:function(){return null==this.state?null:r.a.createElement("div",{className:"RecentProjects"},this.renderProjectCards())}}]),t}(n.Component),j=(a(21),n.Component,a(7),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CardPageTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"}),r.a.createElement("div",{className:"template-card"})),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component)),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BlogPageTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-page-section"}),r.a.createElement("div",{className:"template-page-section"})),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).addBtnToHeader=function(t){t.preventDefault(),e.setState({headerButtons:e.state.headerButtons+1})},e.renderBtnToHeader=function(){for(var t=[],a=0;e.state.headerButtons>a;a++)t.push(r.a.createElement("button",{key:a,className:"template-header-btn"}));return t},e.state={headerButtons:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BlogPostTemplate"},r.a.createElement("div",{className:"template-header"},r.a.createElement("div",{className:"pseudo-btn-space"}),r.a.createElement("i",{className:"far fa-plus-square",onClick:this.addBtnToHeader}),this.renderBtnToHeader()),r.a.createElement("div",{className:"template-card-container"},r.a.createElement("div",{className:"template-post-main"}),r.a.createElement("div",{className:"template-post-sub-container"},r.a.createElement("div",{className:"template-post-sub"}),r.a.createElement("div",{className:"template-post-sub"}))),r.a.createElement("div",{className:"template-footer"}))}}]),t}(n.Component),C=(a(22),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).renderCurrentTemplate=function(e){switch(e){case"card-page-template":return r.a.createElement(j,null);case"blog-page-template":return r.a.createElement(N,null);case"blog-post-template":return r.a.createElement(O,null);default:return r.a.createElement("h2",null,"Please select a template type from the Recent Projects dropdown menu")}},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TemplateContainer"},this.renderCurrentTemplate(this.props.currentTemplate))}}]),t}(n.Component)),T=(a(23),a(24),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getTitle=function(){return a.props.card.cardTitle},a.renderTitle=function(){return r.a.createElement("div",{className:"CardTitle"},a.getTitle())},a.getDescription=function(){return a.props.card.cardDescription},a.renderDescription=function(){return r.a.createElement("div",{className:"CardDescription"},a.getDescription())},a.getCardURL=function(){return a.props.card.cardURL},a.getNumber=function(){return a.props.card.cardNumber},a.renderNumber=function(){return r.a.createElement("div",{className:"CardNumber"},r.a.createElement("a",{href:a.getCardURL()},"#",a.getNumber()))},a.getStatus=function(){return a.props.card.cardStatus},a.renderStatus=function(){return r.a.createElement("div",{className:"CardStatus"},a.getStatus())},a.getColumn=function(){return a.props.card.cardColumn},a.renderColumn=function(){return r.a.createElement("div",{className:"CardColumn"},a.getColumn())},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"GithubCard"},r.a.createElement("div",{className:"GithubCardMinimum"},r.a.createElement("span",{className:"GithubCardHeaders"},this.renderTitle(),this.renderNumber()),r.a.createElement("span",{className:"GithubCardLabels"},this.renderStatus(),this.renderColumn())),this.renderDescription())}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderGithubCards=function(){return a.props.cards.map(function(e,t){return r.a.createElement(T,{card:e,key:t})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GithubCardsContainer"},r.a.createElement("div",{className:"GithubTitle"},"Github Issues"),r.a.createElement("div",{className:"GithubCards"},this.renderGithubCards()))}}]),t}(n.Component),k=function(){function e(){var t=this;Object(o.a)(this,e),this.getGithub=function(e){var a=t.props.project_id,n="https://git-wired-be.herokuapp.com/api/v1/projects/".concat(a,"/cards");fetch(n,{method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.user.getGitWiredToken())}).then(function(e){return e.json()}).then(function(t){return e(t)}).catch(function(e){return console.error("Error:",e)})},this.getWireframe=function(e){var a=t.props.wireframe_id,n="https://git-wired-be.herokuapp.com/api/v1/wireframes/".concat(a);fetch(n,{method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.user.getGitWiredToken())}).then(function(e){return e.json()}).then(function(t){return e(t)}).catch(function(e){return console.error("Error:",e)})},this.user=new b}return Object(s.a)(e,[{key:"stubGithub",value:function(){return{data:{id:1,attributes:{repo:{name:"Repo Name",url:"https://github.com/JoelSmith123/git_wired_fe"},project:{name:"Project Name",url:"https://github.com/JoelSmith123/git_wired_fe/projects/1"},cards:[{cardTitle:"Card 1",cardDescription:"Description 1",cardURL:"https://github.com/JoelSmith123/git_wired_fe/issues/23",cardNumber:11,cardStatus:"Open",cardColumn:"Column 1"},{cardTitle:"Card 2",cardDescription:"Description 2",cardURL:"https://github.com/JoelSmith123/git_wired_fe/issues/23",cardNumber:12,cardStatus:"Open",cardColumn:"Column 2"}]}}}}},{key:"stubWireframe",value:function(){return{data:{id:1,attributes:{title:"Wireframe Title",updated:"Updated At",created:"Created At",templateData:"{'Something': 1, 'Something': 2}"}}}}}]),e}(),y=(a(25),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).parseWireframeResponse=function(e){var t=e.data.attributes,n=t.title,r=t.updated,c=t.created;a.setState({wireframeTitle:n,wireframeUpdated:r,wireframeCreated:c})},a.parseGithubResponse=function(e){var t=e.data.attributes,n=t.repo,r=t.project,c=t.cards;a.setState({repo:n,project:r,cards:c})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new k;this.parseGithubResponse(e.stubGithub()),this.parseWireframeResponse(e.stubWireframe())}},{key:"render",value:function(){return null==this.state?null:r.a.createElement("div",{className:"WireframeEditView"},r.a.createElement("div",{className:"WireframeHeaderContainer"},r.a.createElement("span",{className:"WireframeTitle"},this.state.wireframeTitle),r.a.createElement("span",{className:"Timestamps"},r.a.createElement("span",{className:"UpdatedTimestamp"},this.state.wireframeUpdated),r.a.createElement("span",{className:"CreatedTimestamp"},this.state.wireframeCreated)),r.a.createElement("span",{className:"GithubLinks"},r.a.createElement("span",{className:"RepoName"},r.a.createElement("a",{href:this.state.repo.url},this.state.repo.name)),r.a.createElement("span",{className:"ProjectName"},r.a.createElement("a",{href:this.state.project.url},this.state.project.name)))),r.a.createElement("div",{className:"WireframeEditContent"},r.a.createElement(C,{currentTemplate:this.props.template}),r.a.createElement(w,{cards:this.state.cards})))}}]),t}(n.Component)),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).selectTemplate=function(t,a){t.preventDefault(),e.setState({template:a})},e.changeLoggedInState=function(t){t&&t.preventDefault(),e.setState({loggedIn:e.props.user.isLoggedIn()})},e.viewProfile=function(t){t.preventDefault(),e.setState({viewProfile:!0,template:""})},e.selectComponentRender=function(){return e.state.loggedIn?r.a.createElement(y,{template:e.state.template}):r.a.createElement(f,null)},e.state={loggedIn:!1,template:"",viewProfile:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){Boolean(this.props.user.getURLToken())&&(this.props.user.login(),this.setState({loggedIn:this.props.user.isLoggedIn()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{loggedIn:this.state.loggedIn,changeLoggedInState:this.changeLoggedInState,selectTemplate:this.selectTemplate,viewProfile:this.viewProfile,user:this.props.user}),this.selectComponentRender(),r.a.createElement("div",{className:"footer"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,{user:new b}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.0e002076.chunk.js.map