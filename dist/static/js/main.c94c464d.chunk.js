(this["webpackJsonpmushroom-classification"]=this["webpackJsonpmushroom-classification"]||[]).push([[0],{27:function(e,t,n){e.exports=n(66)},32:function(e,t,n){},33:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),p=n(6),r=n.n(p),c=(n(32),n(33),n(17)),s=n(18),l=n(24),u=n(19),i=n(26),d=n(8),m=n(7),f=new Headers;f.append("Authorization","Bearer zRthsELZ9Q2tzPGTJTJ+/3F6c6xyZPSa6cmbdpg2hsYMmgySXjK0w15toAr6L7HX6CrV6Dzx/ypqXRUjRpdpzA=="),f.append("Content-Length","1108"),f.append("Connection","keep-alive"),f.append("Content-Type","application/json"),f.append("Accept","application/json");var b=n(21),w=function(e){var t=Object(m.usePromiseTracker)().promiseInProgress;return o.a.createElement("div",null,t&&o.a.createElement("div",{className:"spinner"},o.a.createElement(b.PacmanLoader,{color:"#D7AC36",size:"25px"})))},E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),p=0;p<a;p++)o[p]=arguments[p];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={capShapeInput:"",capSurfaceInput:"",capColorInput:"",capBruisesInput:"",odorInput:"",inputText1:"Cap shape",inputText2:"Cap surface",inputText3:"Cap color",inputText4:"Bruises",inputText5:"Odor"},n.updateInput1=function(e,t){n.setState({capShapeInput:e,inputText1:t})},n.updateInput2=function(e,t){n.setState({capSurfaceInput:e,inputText2:t})},n.updateInput3=function(e,t){n.setState({capColorInput:e,inputText3:t})},n.updateInput4=function(e,t){n.setState({capBruisesInput:e,inputText4:t})},n.updateInput5=function(e,t){n.setState({odorInput:e,inputText5:t})},n.SubmitRequest=function(){n.props.sendData(n.state.capShapeInput,n.state.capSurfaceInput,n.state.capColorInput,n.state.capBruisesInput,n.state.odorInput)},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"btn-lg btn-secondary dropdown-toggle btn-block",type:"button",id:"dropdownMenuButton1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputText1),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("b","Bell")}},"Bell"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("c","Conical")}},"Conical"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("x","Convex")}},"Convex"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("f","Flat")}},"Flat"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("k","Knobbed")}},"Knobbed"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput1("s","Sunken")}},"Sunken"))),o.a.createElement("div",{className:"dropdown topbuffer"},o.a.createElement("button",{className:"btn-lg btn-secondary dropdown-toggle btn-block",type:"button",id:"dropdownMenuButton2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputText2),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput2("f","Fibrous")}},"Fibrous"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput2("g","Grooves")}},"Grooves"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput2("y","Scaly")}},"Scaly"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput2("s","SMooth")}},"SMooth"))),o.a.createElement("div",{className:"dropdown topbuffer"},o.a.createElement("button",{className:"btn-lg btn-secondary dropdown-toggle btn-block",type:"button",id:"dropdownMenuButton3","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputText3),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("n","Brown")}},"Brown"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("b","Buff")}},"Buff"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("c","Cinnamon")}},"Cinnamon"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("g","Gray")}},"Gray"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("r","Green")}},"Green"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("p","Pink")}},"Pink"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("u","Purple")}},"Purple"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("e","Red")}},"Red"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("w","White")}},"White"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput3("y","Yellow")}},"Yellow"))),o.a.createElement("div",{className:"dropdown topbuffer"},o.a.createElement("button",{className:"btn-lg btn-secondary dropdown-toggle btn-block",type:"button",id:"dropdownMenuButton4","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputText4),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput4("t","Bruises")}},"Bruises"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput4("f","No bruises")}},"No bruises"))),o.a.createElement("div",{className:"dropdown topbuffer"},o.a.createElement("button",{className:"btn-lg btn-secondary dropdown-toggle btn-block",type:"button",id:"dropdownMenuButton5","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputText5),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("a","Almond")}},"Almond"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("l","Anise")}},"Anise"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("c","Creosote")}},"Creosote"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("y","Fishy")}},"Fishy"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("f","Foul")}},"Foul"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("m","Musty")}},"Musty"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("p","Pungent")}},"Pungent"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("s","Spicy")}},"Spicy"),o.a.createElement("p",{className:"dropdown-item",onClick:function(){e.updateInput5("n","None")}},"None"))),o.a.createElement("div",{className:"topbuffer"},o.a.createElement("button",{className:"btn-lg btn-success",onClick:this.SubmitRequest},"Submit"))),o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"Results:"),this.props.response.ColumnNames&&this.props.response.ColumnNames.length>0&&o.a.createElement("div",null,o.a.createElement("p",null,this.props.response.ColumnNames[0],": ",this.props.response.Values[0][0]),o.a.createElement("p",null,this.props.response.ColumnNames[1],": ",this.props.response.Values[0][1]),o.a.createElement("p",null,this.props.response.ColumnNames[2],": ","e"===this.props.response.Values[0][2]?"Edible":"Poisonous")),o.a.createElement(w,null))))}}]),t}(a.Component),h=Object(d.b)((function(e){return{response:e.response}}),(function(e){return{sendData:function(t,n,a,o,p){return e(function(e,t,n,a,o){var p=JSON.stringify({Inputs:{input1:{ColumnNames:["class","cap-shape","cap-surface","cap-color","bruises","odor","gill-attachment","gill-spacing","gill-size","gill-color","stalk-shape","stalk-root","stalk-surface-above-ring","stalk-surface-below-ring","stalk-color-above-ring","stalk-color-below-ring","veil-type","veil-color","ring-number","ring-type","spore-print-color","population","habitat"],Values:[["","".concat(e),"".concat(t),"".concat(n),"".concat(a),"".concat(o),"","","","","","","","","","","","","","","","",""]]}},GlobalParameters:{}}),r={method:"POST",headers:f,body:p,redirect:"follow"};return function(e,t){Object(m.trackPromise)(fetch("https://cors-anywhere.herokuapp.com/https://ussouthcentral.services.azureml.net/workspaces/4d31dfc7580248b6bf894724bf914b41/services/762baf005e81497dbcd774b1c397e735/execute?api-version=2.0&details=true",r).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_RESULTS",response:t})})).catch((function(t){return e({type:"FETCH_RESPONSE_ERROR",error:t})})))}}(t,n,a,o,p))}}}))(E);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(h,null)))},C=n(5),k=n(23),g=n(25),I={response:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESULTS":return console.log("Fetched response",t.response.Results.output1.value),Object(g.a)({},e,{response:t.response.Results.output1.value});case"FETCH_RESPONSE_ERROR":return console.log("Fetch response error",t.err),e;default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=Object(C.c)(v,Object(C.a)(k.a));r.a.render(o.a.createElement(d.a,{store:y},o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c94c464d.chunk.js.map