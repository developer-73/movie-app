(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/loader.26ef8bb4.gif"},31:function(e,t,a){e.exports=a.p+"static/media/logo2.e58a3e3d.jpg"},34:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),c=a.n(s),o=(a(39),a(11)),l=a(12),i=a(14),p=a(15),u=a(18),h=a(6);function d(e){return{type:"GET_PERSON_START",data:e}}function m(e){return e.films,{type:"GET_PERSON_SUCCESS",payload:e}}a(46);var f=a(8),E=a.n(f),v=a(32),g=a(28),b=a(16),y=a(9),O=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={characters:[],selectedCharacter:"",dropdownOpen:!1},e.toggle=function(){e.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},e.renderDropdownItems=function(){return e.state.characters.map((function(e){return r.a.createElement("option",{key:e.url,value:e.name},e.name)}))},e.handleChange=function(t){var a=e.state.characters.find((function(e){return e.name===t.target.value}));e.setState({selectedCharacter:a}),e.props.handleChange(a)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchAllCharacters()}},{key:"transformHttpToHttps",value:function(e){return e.map((function(e){return Object(b.a)({},e,{url:e.url.replace("http","https")})}))}},{key:"fetchAllCharacters",value:function(){var e=Object(g.a)(E.a.mark((function e(){var t,a,n,r,s,c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],a=[],n=1;n<=9;n++)t.push(fetch("https://swapi.dev/api/people/?page=".concat(n)));r=0;case 4:if(!(r<t.length)){e.next=15;break}return e.next=7,t[r];case 7:return c=e.sent,e.next=10,c.json();case 10:o=e.sent,(s=a).push.apply(s,Object(v.a)(o.results));case 12:r++,e.next=4;break;case 15:return a=this.transformHttpToHttps(a),this.setState({characters:a}),e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.b,null,r.a.createElement(y.c,{type:"select",name:"select",onChange:this.handleChange,defaultValue:"Choose a character"},r.a.createElement("option",{value:"Choose a character",disabled:!0},"Choose a Character..."),this.renderDropdownItems()))}}]),a}(r.a.Component),w=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getYear=function(e){return(e=e.split("-")).shift()},e.getDayOfWeek=function(e){var t=new Date(e).getDay();return isNaN(t)?null:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=["I","II","III","IV","V","VI","VII"][this.props.film.episode_id-1];return r.a.createElement("div",{key:this.props.film.title,className:"movie-row"},!0===this.props.last?r.a.createElement(y.d,{className:"movie-row-content"},r.a.createElement(y.a,{md:6},r.a.createElement("h3",null,"Episode ",e,": ",this.props.film.title)),r.a.createElement(y.a,{md:6},r.a.createElement("h3",null,"Year: ",this.getYear(this.props.film.release_date)))):r.a.createElement(y.d,{className:"movie-row-content"},r.a.createElement(y.a,{md:12},r.a.createElement("h3",null,"Episode ",e,": ",this.props.film.title))))}}]),a}(r.a.Component),S=a(30),j=a.n(S),_=a(31),C=a.n(_),T=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={person:"",currentFilm:{},loading:!1,row:!0},e.handleChange=function(t){e.setState({person:t.name}),e.props.getPerson(t),e.showLoader()},e.sortFilms=function(e){return e=e.sort((function(e,t){return e.release_date<t.release_date?-1:e.release_date>t.release_date?1:0}))},e.renderFilms=function(t){return t.length?e.sortFilms(t).map((function(t){return r.a.createElement(w,{film:t,row:e.state.row,key:t.episode_id})})):r.a.createElement("span",{style:{margin:"20px auto"}},"No films listed")},e.showLoader=function(){e.setState({loading:!0}),setTimeout((function(){return e.setState({loading:!1})}),1e3)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:C.a,alt:"Movie Poster",width:"150px"}),r.a.createElement("div",{className:"App-header-center"},r.a.createElement(O,{handleChange:this.handleChange}))),this.props.loading||this.state.loading?r.a.createElement("div",{className:"movies"},r.a.createElement("img",{src:j.a,width:"300px",alt:"loading",className:"loader"})):null,this.state.person&&!this.state.loading&&r.a.createElement("h3",{className:"subheader-caption"},"Films that ",this.state.person," appears in:"),!1===this.props.loading&&this.props.films&&!!this.props.films.length&&r.a.createElement("div",{className:"movies"},this.renderFilms(this.props.films)),this.state.person&&!this.state.loading&&r.a.createElement("h3",{className:"subheader-caption"}," Last appearence of ",this.state.person," :"),!1===this.props.loading&&this.props.films&&!!this.props.films.length&&r.a.createElement("div",{className:"movies"},r.a.createElement(w,{film:this.props.films[this.props.films.length-1],row:this.state.row,last:!0})),!1===this.props.loading&&!1===this.state.loading&&this.props.films&&0===this.props.films.length&&"No films available",!this.props.person&&!this.props.loading&&r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"welcome-inner"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("h2",null,"Choose a Character"),r.a.createElement("h2",null,"Using the Menu Above"))))}}]),a}(r.a.Component),x=Object(u.b)((function(e){return{loading:e.characterReducer.loading,person:e.characterReducer.person,films:e.characterReducer.films}}),(function(e){return Object(h.b)({getPerson:d},e)}))(T),N=(a(48),Object(h.c)({characterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,person:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PERSON_START":return Object(b.a)({},e,{loading:!0});case"GET_PERSON_SUCCESS":return Object(b.a)({},e,{person:t.payload});case"GET_FILMS_SUCCESS":return Object(b.a)({},e,{loading:!1,films:t.payload});default:return e}}})),k=a(33),I=a(10),R=E.a.mark(G),A=E.a.mark(L),F=E.a.mark(M);function G(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e.data.url).then((function(e){return e.json()}));case 3:return t=a.sent,a.next=6,L({type:"GET_FILMS_START",payload:t});case 6:return a.next=8,Object(I.a)(m(t));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(I.a)({type:"GET_PERSON_FAILURE",payload:a.t0});case 14:case"end":return a.stop()}}),R,null,[[0,10]])}function L(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=[],e.payload.films&&e.payload.films.map((function(e){return e=e.replace("http","https"),fetch(e).then((function(e){return e.json().then((function(e){return t.push(e)}))}))})),a.next=5,Object(I.a)({type:"GET_FILMS_SUCCESS",payload:t});case 5:a.next=11;break;case 7:return a.prev=7,a.t0=a.catch(0),a.next=11,Object(I.a)({type:"GET_FILMS_FAILURE",payload:a.t0});case 11:case"end":return a.stop()}}),A,null,[[0,7]])}function M(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.b)("GET_PERSON_START",G);case 2:return e.next=4,Object(I.b)("GET_FILMS_START",L);case 4:case"end":return e.stop()}}),F)}var P=Object(k.a)(),U=Object(h.e)(N,Object(h.a)(P));P.run(M),c.a.render(r.a.createElement(u.a,{store:U},r.a.createElement(x,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.36a057ce.chunk.js.map