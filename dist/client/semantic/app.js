!function(){if(!window.$fsx){var e=window.$fsx={};e.f={},e.m={},e.r=function(t){var a=e.m[t];if(a)return a.m.exports;var n,r=e.f[t];return r?((a=e.m[t]={}).exports={},a.m={exports:a.exports},r.call(a.exports,a.m,a.exports),null===(n=a.m.exports)||-1===["function","object","array"].indexOf(typeof n)||n.hasOwnProperty("default")||(Object.isFrozen(n)?n.default=n:Object.defineProperty(n,"default",{value:n,writable:!0,enumerable:!1})),a.m.exports):void 0}}}(),function(e){e.f[888]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(556),u=e.r(563),l=e.r(578);e.r(633);var d=e.r(889),i=e.r(900);e.r(902),r.default.render(n.default.createElement(u.Provider,{store:i.default},n.default.createElement(l.HashRouter,null,n.default.createElement(d.default,null))),document.getElementById("app"))},e.f[889]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(578),u=e.r(559),l=e.r(890);a.default=u.hot(t)(function(){return n.default.createElement("div",null,n.default.createElement("h1",null,"FuseBox Boilerplate"),n.default.createElement(l.default,null),n.default.createElement("div",{className:"page-content"},n.default.createElement(r.Switch,null,l.routes.map(function(e){return n.default.createElement(r.Route,{key:e.path,path:e.path,component:e.component})}),n.default.createElement(r.Redirect,{from:"/",exact:!0,to:l.routes.length&&l.routes[0].path}))))})},e.f[890]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(634),u=e.r(578),l=e.r(891),d=e.r(895);a.routes=[{path:"/list",name:"List",component:l.ConnectedList},{path:"/package",name:"Package",component:d.ConnectedPackage}],a.Nav=function(){return n.default.createElement(r.Menu,{pointing:!0,secondary:!0,className:"navigation"},a.routes.map(function(e){return n.default.createElement(r.Menu.Item,{key:e.path,to:e.path,name:e.name,as:u.NavLink})}))},a.default=a.Nav},e.f[891]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(563),l=e.r(603),d=e.r(634),i=e.r(892),c=e.r(893),o=e.r(894),s=function(e){var t=e.items,a=void 0===t?[]:t,r=e.addItem,u=e.removeItem,l=e.toggleIsActive;return n.default.createElement(n.default.Fragment,null,n.default.createElement(c.default,{addItem:r}),n.default.createElement(d.Divider,{horizontal:!0},a.length," Items"),n.default.createElement(d.Table,{compact:!0,celled:!0,definition:!0},n.default.createElement(d.Table.Header,null,n.default.createElement(d.Table.Row,null,n.default.createElement(d.Table.HeaderCell,null),n.default.createElement(d.Table.HeaderCell,null,"Id"),n.default.createElement(d.Table.HeaderCell,null,"Name"),n.default.createElement(d.Table.HeaderCell,null,"Created"),n.default.createElement(d.Table.HeaderCell,null,"Active"))),n.default.createElement(d.Table.Body,null,a.map(function(e){return n.default.createElement(i.default,{key:e.id,item:e,removeItem:function(){return u(e.id)},toggleIsActive:function(){return l(e.id)}})}))))};s.propTypes={items:r.default.array.isRequired,addItem:r.default.func.isRequired,removeItem:r.default.func.isRequired,toggleIsActive:r.default.func.isRequired};a.ConnectedList=u.connect(function(e){return{items:o.default.getItems(e)}},o.default.actions)(l.fromImmutable(s)),a.default=s},e.f[892]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(634),l=e.r(185),d=function(e){var t=e.item,a=e.removeItem,r=e.toggleIsActive;return n.default.createElement(u.Table.Row,null,n.default.createElement(u.Table.Cell,{width:1},n.default.createElement(u.Button,{circular:!0,fluid:!0,icon:"trash",size:"mini",onClick:a,disabled:t.isActive})),n.default.createElement(u.Table.Cell,{width:1},t.id),n.default.createElement(u.Table.Cell,null,t.name),n.default.createElement(u.Table.Cell,null,"created ",l.default(new Date-t.date,{round:!0})," ago"),n.default.createElement(u.Table.Cell,{width:1},n.default.createElement(u.Checkbox,{toggle:!0,checked:t.isActive,onClick:r})))};d.propTypes={item:r.default.object.isRequired,removeItem:r.default.func.isRequired,toggleIsActive:r.default.func.isRequired},a.default=d},e.f[893]=function(t,a){a.__esModule=!0;var n=e.r(884),r=e.r(604),u=e.r(553),l=e.r(634),d=function(e){function t(t){var a=e.call(this,t)||this;return a.state={value:"foo"},a.update=a.update.bind(a),a.addItem=a.addItem.bind(a),a}return n.__extends(t,e),t.prototype.update=function(e){this.setState({value:e.target.value})},t.prototype.addItem=function(){var e=this.state.value||"new item";this.props.addItem(e),this.setState({value:""})},t.prototype.render=function(){return r.default.createElement(l.Form,{onSubmit:this.addItem},r.default.createElement(l.Input,{fluid:!0,placeholder:"New Item",action:{labelPosition:"right",icon:"plus",content:"Add Item"},actionPosition:"left",onChange:this.update,value:this.state.value}))},t}(r.default.Component);d.propTypes={addItem:u.default.func.isRequired},a.default=d},e.f[894]=function(t,a){a.__esModule=!0;var n=e.r(186),r=e.r(607),u=e.r(631);a.namespace="list";var l=function(e){return e.get("items")},d=function(e){return e.get("items").size},i=function(e,t){return e.slice(0,Math.floor(t/2))},c=u.createSelector([l],function(e){return e.sort(function(e,t){var a=t.get("name"),n=e.get("name");return a<n?-1:a>n?1:0}).reverse()}),o=u.createSelector([l,d],i),s=u.createSelector([c,d],i);a.selectors={getItems:l,getNumItems:d,getItemsSorted:c,getHalfItemsUnsorted:o,getHalfItemsSorted:s};var f=new n.Record({id:void 0,name:"new item",date:new Date,isActive:!1});a.initialState=n.fromJS({items:[{id:1,name:"foo",date:new Date,isActive:!0},{id:2,name:"bar",date:new Date,isActive:!0},{id:3,name:"baz",date:new Date,isActive:!0},{id:4,name:"cat",date:new Date,isActive:!1},{id:5,name:"miffles",date:new Date,isActive:!1},{id:6,name:"vlad",date:new Date,isActive:!0},{id:7,name:"baxter",date:new Date,isActive:!0}]}),a.actionReducers=[{addItem:function(e){return void 0===e&&(e="new item"),{type:"list/ADD_ITEM",name:e}},reducer:function(e,t){var a=e.get("items").maxBy(function(e){return e.get("id")}).get("id")+1;return e.update("items",function(e){return e.push(new f({id:a,name:t.name,date:new Date}))})}},{toggleIsActive:function(e){return{type:"list/TOGGLE_ITEM_IS_ACTIVE",id:e}},reducer:function(e,t){return e.update("items",function(e){return e.map(function(e){return e.get("id")===t.id?e.update("isActive",function(e){return!e}):e})})}},{removeItem:function(e){return{type:"list/REMOVE_ITEM",id:e}},reducer:function(e,t){return e.update("items",function(e){return e.filter(function(e){return e.get("id")!==t.id})})}}],a.default=r.automap({namespace:a.namespace,actionReducers:a.actionReducers,initialState:a.initialState,selectors:a.selectors,foo:"bar"})},e.f[895]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(634),l=e.r(563),d=e.r(603),i=e.r(896),c=e.r(898),o=e.r(899),s=function(e){var t=e.pkg,a=e.deps,r=e.devDeps,l=e.timesLoaded,d=e.loadPackageInfo;return n.default.createElement("div",{className:"package-loader"},n.default.createElement(u.Button,{fluid:!0,disabled:t.isLoading,onClick:d,loading:t.isLoading},a.length?"Reload Package (loaded "+l+" times)":"Load Package"),a.length>0&&n.default.createElement(i.default,{deps:a,devDeps:r}),t.error&&n.default.createElement(c.default,{message:t.error}))};s.propTypes={pkg:r.default.object.isRequired,deps:r.default.array,devDeps:r.default.array,timesLoaded:r.default.number.isRequired,loadPackageInfo:r.default.func.isRequired},s.defaultProps={deps:[],devDeps:[]};a.ConnectedPackage=l.connect(function(e){return{pkg:o.default.getPackage(e),deps:o.default.getDependenciesAsArray(e),devDeps:o.default.getDevDependenciesAsArray(e),timesLoaded:o.default.getTimesLoaded(e)}},{loadPackageInfo:o.default.actions.loadPackageInfo})(d.fromImmutable(s)),a.default=s},e.f[896]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(634),l=e.r(897),d=function(e){var t=e.deps,a=e.devDeps;return n.default.createElement(u.Message,{positive:!0},n.default.createElement(u.Grid,{columns:2,divided:!0},n.default.createElement(u.Grid.Row,null,n.default.createElement(u.Grid.Column,null,n.default.createElement(l.default,{name:"Dependencies",libs:t})),n.default.createElement(u.Grid.Column,null,n.default.createElement(l.default,{name:"Dev. Dependencies",libs:a})))))};d.propTypes={deps:r.default.array,devDeps:r.default.array},d.defaultProps={deps:[],devDeps:[]},a.default=d},e.f[897]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(634),l=function(e){var t=e.name,a=e.libs,r=void 0===a?[]:a;return n.default.createElement("div",null,n.default.createElement(u.Statistic,{horizontal:!0,color:"green",label:t,value:r.length}),n.default.createElement(u.List,null,r.map(function(e){return n.default.createElement(u.List.Item,{key:e.name},n.default.createElement("b",null,e.name),": ",e.version)})))};l.propTypes={name:r.default.string.isRequired,libs:r.default.array},l.defaultProps={libs:[]},a.default=l},e.f[898]=function(t,a){a.__esModule=!0;var n=e.r(604),r=e.r(553),u=e.r(634),l=function(e){var t=e.message,a=e.children;return n.default.createElement(u.Message,{negative:!0},n.default.createElement(u.Message.Header,null,"We‘ve encountered an error."),n.default.createElement("p",null,t||a))};l.propTypes={message:r.default.string,children:r.default.element},l.defaultProps={message:void 0,children:void 0},a.default=l},e.f[899]=function(t,a){a.__esModule=!0;var n=e.r(884),r=e.r(186),u=e.r(607),l=e.r(631),d=e.r(38),i=e.r(614);a.namespace="api";var c=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0},o=function(e){return e&&Object.entries(e.toJS()).map(function(e){return{name:e[0],version:e[1]}}).sort(c)},s=function(e){return e.getIn(["package","data","dependencies"])},f=function(e){return e.getIn(["package","data","devDependencies"])},m={getPackage:function(e){return e.getIn(["package"])},getTimesLoaded:function(e){return e.get("timesLoaded")},getDependencies:s,getDevDependencies:f,getDependenciesAsArray:l.createSelector([s],o),getDevDependenciesAsArray:l.createSelector([f],o)},p=r.Record({isLoading:!1,success:void 0,error:void 0,data:void 0});function g(){var e,t;return n.__generator(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,i.call(function(){return d.default.get("/package.json").then(function(e){return r.fromJS(e.data)})})];case 1:return e=a.sent(),[4,i.put({type:"api/LOAD_PACKAGE_INFO_SUCCESS",data:e})];case 2:return a.sent(),[3,5];case 3:return t=a.sent(),console.log("fetchPackageInfo",t),[4,i.put({type:"api/LOAD_PACKAGE_INFO_ERROR",error:t.message})];case 4:return a.sent(),[3,5];case 5:return[2]}})}a.initialState=r.fromJS({package:new p,timesLoaded:0});var v={watcherSaga:function(){return n.__generator(this,function(e){switch(e.label){case 0:return[4,i.takeLatest("api/LOAD_PACKAGE_INFO",g)];case 1:return e.sent(),[2]}})},fetchPackageInfo:g};a.actionReducers=[{loadPackageInfo:function(){return{type:"api/LOAD_PACKAGE_INFO"}},reducer:function(e){return e.set("package",new p({isLoading:!0,data:e.getIn(["package","data"])}))}},{loadPackageInfoSuccess:function(e){return{type:"api/LOAD_PACKAGE_INFO_SUCCESS",data:e}},reducer:function(e,t){return e.set("package",new p({isLoading:!1,success:!0,data:t.data})).update("timesLoaded",function(e){return e+1})}},{loadPackageInfoError:function(e){return{type:"api/LOAD_PACKAGE_INFO_ERROR",error:e}},reducer:function(e,t){return e.set("package",new p({error:t.error,success:!1}))}}],a.default=u.automap({sagas:v,namespace:a.namespace,actionReducers:a.actionReducers,initialState:a.initialState,selectors:m})},e.f[900]=function(t,a){a.__esModule=!0;var n=e.r(608),r=e.r(630),u=e.r(625),l=e.r(179),d=e.r(607),i=e.r(899),c=e.r(894),o=e.r(901),s=d.merge([i.default,c.default,o.default]),f=l.default(),m=u.default(),p=n.combineReducers(s),g=r.createStore(p,r.compose(r.applyMiddleware(m),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));f.listen(function(e){var t=""+e.pathname+e.search+e.hash;g.dispatch(o.default.actions.change(t))});var v=""+location.pathname+location.search+location.hash;g.dispatch(o.default.actions.change(v)),m.run(i.default.sagas.watcherSaga),a.default=g},e.f[901]=function(t,a){a.__esModule=!0;var n=e.r(607);a.namespace="route",a.initialState="/",a.actionReducers=[{change:function(e){return{type:"route/CHANGE",path:e}},reducer:function(e,t){return t.path}}],a.default=n.automap({namespace:a.namespace,actionReducers:a.actionReducers,initialState:a.initialState})},e.r(888)}($fsx);