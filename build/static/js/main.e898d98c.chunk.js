(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.21a837eb.png"},48:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(38),o=n.n(i),l=n(10),c=n(11),u=n(13),s=n(12),p=n(14),m=n(20),d=n(18),f=n(7),g=n.n(f),v=n(17),h=n(2),b=n(1),E=n(16);function x(){var e=Object(h.a)(["\n  margin-top:25px;\n  display:grid;\n  grid-template-columns:repeat(auto-fill, 125px);\n  grid-gap:25px;\n"]);return x=function(){return e},e}function y(){var e=Object(h.a)(["\n  font-size: 16px;\n  font-weight:600;\n"]);return y=function(){return e},e}function _(){var e=Object(h.a)(["\n  :not(:last-child) {\n  margin-bottom:50px;\n  }\n"]);return _=function(){return e},e}var j=b.default.div(_()),O=b.default.span(y()),k=b.default.div(x()),w=function(e){var t=e.title,n=e.children;return r.a.createElement(j,null,r.a.createElement(O,null,t),r.a.createElement(k,null,n))};function S(){var e=Object(h.a)(["\n  height: 100vh;\n  width:100vw;\n  display:flex;\n  justify-content:center;\n  font-size:40px;\n  // margin-top:200px;\n  "]);return S=function(){return e},e}var T=b.default.div(S()),R=function(){return r.a.createElement(T,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"Loading..."))};function M(){var e=Object(h.a)(["\n  color: ","\n  "]);return M=function(){return e},e}function z(){var e=Object(h.a)(["\n  width:100vw;\n  display:flex;\n  justify-content:center;\n  "]);return z=function(){return e},e}var U=b.default.div(z()),C=b.default.span(M(),(function(e){return e.color})),N=function(e){var t=e.text,n=e.color;return r.a.createElement(U,null,r.a.createElement(C,{color:n},t))},I=n(46);function P(){var e=Object(h.a)(["\n    font-size:10px;\n    color:rgba(255, 255, 255, 0.5);\n"]);return P=function(){return e},e}function F(){var e=Object(h.a)(["\n  display:block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function A(){var e=Object(h.a)(["\n  margin-bottom:5px;\n  position:relative;\n  &:hover {\n    "," {\n      opacity:0.3;\n    }\n    "," {\n      opacity:1;\n  }\n  "]);return A=function(){return e},e}function B(){var e=Object(h.a)(["\n  bottom: 5px;\n  right: 5px;\n  position:absolute;\n  opacity:0;\n  "]);return B=function(){return e},e}function D(){var e=Object(h.a)(["\n  background-image: url(",");\n  height:180px;\n  background-size:cover;\n  border-radius:4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n  "]);return D=function(){return e},e}function V(){var e=Object(h.a)(["\n  font-size:12px;\n"]);return V=function(){return e},e}var L=b.default.div(V()),q=b.default.div(D(),(function(e){return e.bgUrl})),J=b.default.span(B()),G=b.default.div(A(),q,J),H=b.default.span(F()),K=b.default.span(P()),Q=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,c=e.isMovie,u=void 0!==c&&c;return r.a.createElement(m.b,{to:u?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300/".concat(a):n(29)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},r.a.createElement(I.a,null)),o,"/10")),r.a.createElement(H,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(K,null,l)))};function W(){var e=Object(h.a)(["\n  padding:20px\n    "]);return W=function(){return e},e}var X=b.default.div(W()),Y=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Movies | Nomflix")),o?r.a.createElement(R,null):r.a.createElement(X,null,t&&t.length>0&&r.a.createElement(w,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,rating:e.vote_average,imageUrl:e.poster_path,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(w,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,rating:e.vote_average,imageUrl:e.poster_path,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(w,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,rating:e.vote_average,imageUrl:e.poster_path,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),i&&r.a.createElement(N,{color:"#e74c3c",text:i})))},Z=n(9),$=n.n(Z),ee="https://api.themoviedb.org/3",te="44ebf9cf927b173d893cd89ea3db2e1e",ne=function(){return $.a.get("".concat(ee,"/movie/now_playing?api_key=").concat(te))},ae=function(){return $.a.get("".concat(ee,"/movie/upcoming?api_key=").concat(te))},re=function(){return $.a.get("".concat(ee,"/movie/popular?api_key=").concat(te))},ie=function(e){return $.a.get("".concat(ee,"/movie/").concat(e,"?api_key=").concat(te),{params:{append_to_response:"videos"}})},oe=function(e){return $.a.get("".concat(ee,"/search/movie?api_key=").concat(te),{params:{query:encodeURIComponent(e)}})},le=function(){return $.a.get("".concat(ee,"/tv/top_rated?api_key=").concat(te))},ce=function(){return $.a.get("".concat(ee,"/tv/popular?api_key=").concat(te))},ue=function(){return $.a.get("".concat(ee,"/tv/airing_today?api_key=").concat(te))},se=function(e){return $.a.get("".concat(ee,"/tv/").concat(e,"?api_key=").concat(te),{params:{append_to_response:"videos"}})},pe=function(e){return $.a.get("".concat(ee,"/search/tv?api_key=").concat(te),{params:{query:encodeURIComponent(e)}})},me=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return a=e.sent,r=a.data.results,e.next=11,re();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function de(){var e=Object(h.a)(["\n  padding:20px\n\n  "]);return de=function(){return e},e}var fe=b.default.div(de()),ge=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"TV Shows | Nomflix")),o?r.a.createElement(R,null):r.a.createElement(fe,null,t&&t.length>0&&r.a.createElement(w,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(w,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)})})),"    "),a&&a.length>0&&r.a.createElement(w,{title:"Airing Today"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)})})),"    "),i&&r.a.createElement(N,{color:"#e74c3c",text:i})))},ve=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le();case 3:return t=e.sent,n=t.data.results,e.next=7,ce();case 7:return a=e.sent,r=a.data.results,e.next=11,ue();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(ge,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),t}(r.a.Component);function he(){var e=Object(h.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    "]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid \n    ",";\n    transition: border-bottom 0.5s ease-in-out;\n"]);return be=function(){return e},e}function Ee(){var e=Object(h.a)(["\n    display:flex;\n    "]);return Ee=function(){return e},e}function xe(){var e=Object(h.a)(["\ncolor: white;\nposition:fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 50px;\ndisplay:flex;\nalign-items:center;\npadding:0px 10px;\nbackground-color:rgba(20,20,20,0.7);\nz-index: 10;\nbox-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return xe=function(){return e},e}var ye=b.default.header(xe()),_e=b.default.ul(Ee()),je=b.default.li(be(),(function(e){return e.current?"#3498db":"transparent"})),Oe=Object(b.default)(m.b)(he()),ke=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement(ye,null,r.a.createElement(_e,null,r.a.createElement(je,{current:"/"===t},r.a.createElement(Oe,{to:"/"},"Movies")),r.a.createElement(je,{current:"/tv"===t},r.a.createElement(Oe,{to:"/tv"},"TV")),r.a.createElement(je,{current:"/search"===t},r.a.createElement(Oe,{to:"/search"},"Search"))))}));function we(){var e=Object(h.a)(["\n  all:unset; \n  font-size:28px;\n  width:100%;\n  "]);return we=function(){return e},e}function Se(){var e=Object(h.a)(["\n  margin-bottom: 50px;\n  width:100%;\n  "]);return Se=function(){return e},e}function Te(){var e=Object(h.a)(["\n  padding:0px 20px\n  "]);return Te=function(){return e},e}var Re=b.default.div(Te()),Me=b.default.form(Se()),ze=b.default.input(we()),Ue=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading,l=e.handleSubmit,c=e.updateTerm;return r.a.createElement(Re,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(Me,{onSubmit:l},r.a.createElement(ze,{placeholder:"Search Movies od TV Shows....",value:a,onChange:c})),o?r.a.createElement(R,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(w,{title:"Movie Results"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,rating:e.vote_average,imageUrl:e.poster_path,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(w,{title:"TV Show Results"},n.map((function(e){return r.a.createElement("span",{key:e.id},e.name)})))),i&&r.a.createElement(N,{color:"#e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(N,{color:"#7f8c8d",text:"Nothing found"}))},Ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(g.a.mark((function e(){var t,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,oe(t);case 5:return a=e.sent,r=a.data.results,e.next=9,pe(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading;return r.a.createElement(Ue,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function Ne(){var e=Object(h.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height:1.5;\n  width:50%;\n  "]);return Ne=function(){return e},e}function Ie(){var e=Object(h.a)(["\n  margin:0 10px"]);return Ie=function(){return e},e}function Pe(){var e=Object(h.a)([""]);return Pe=function(){return e},e}function Fe(){var e=Object(h.a)(["\n  margin:20px 0;\n  "]);return Fe=function(){return e},e}function Ae(){var e=Object(h.a)(["\n  font-size:32px;\n  margin-bottom:10px;\n\n  "]);return Ae=function(){return e},e}function Be(){var e=Object(h.a)(["\n  width:70%;\n  margin-left:10px;\n"]);return Be=function(){return e},e}function De(){var e=Object(h.a)(["\n  width:30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius:5px;\n\n  "]);return De=function(){return e},e}function Ve(){var e=Object(h.a)(["\n  display:flex;\n  width: 100%;\n  position:relative;\n  z-index:1;\n  height:100%;\n"]);return Ve=function(){return e},e}function Le(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity:0.5;\n  z-index:0\n  "]);return Le=function(){return e},e}function qe(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return qe=function(){return e},e}var Je=b.default.div(qe()),Ge=b.default.div(Le(),(function(e){return e.bgImage})),He=b.default.div(Ve()),Ke=b.default.div(De(),(function(e){return e.bgImage})),Qe=b.default.div(Be()),We=b.default.h3(Ae()),Xe=b.default.div(Fe()),Ye=b.default.span(Pe()),Ze=b.default.span(Ie()),$e=b.default.p(Ne()),et=function(e){var t=e.result,a=e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(R,null)):a?r.a.createElement(N,null):r.a.createElement(Je,null,r.a.createElement(E.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | Nomflix")),r.a.createElement(Ge,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(He,null,r.a.createElement(Ke,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),r.a.createElement(Qe,null,r.a.createElement(We,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Xe,null,r.a.createElement(Ye,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Ze,null," / "),r.a.createElement(Ye,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Ze,null," / "),r.a.createElement(Ye,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,", ")})))),r.a.createElement($e,null,t.overview))))},tt=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(u.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o,l,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,t.location.pathname,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,ie(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,se(i);case 16:c=e.sent,o=c.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(et,{result:t,error:n,loading:a})}}]),t}(r.a.Component),nt=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:me}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:ve}),r.a.createElement(d.b,{path:"/search",component:Ce}),r.a.createElement(d.b,{path:"/movie/:id",component:tt}),r.a.createElement(d.b,{path:"/show/:id",component:tt}),r.a.createElement(d.a,{from:"*",to:"/"}))))},at=n(45),rt=n.n(at);function it(){var e=Object(h.a)(["\n",";\na{\n    text-decoration:none;\n    color:inherit;\n}\n*{\n    box-sizing:border-box;\n}\nbody{\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:12px;\n    background-color:rgba(20,20,20,1);\n    color:white;\n    padding-top:50px;\n}\n"]);return it=function(){return e},e}var ot=Object(b.createGlobalStyle)(it(),rt.a),lt=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(ot,null))}}]),t}(a.Component);o.a.render(r.a.createElement(lt,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e898d98c.chunk.js.map