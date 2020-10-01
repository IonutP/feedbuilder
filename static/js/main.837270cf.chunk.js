(this.webpackJsonpfeedbuilder=this.webpackJsonpfeedbuilder||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),c=a(3),n=a.n(c),r=(a(14),a(1)),i=a(4),o=a(5),m=a(7),h=a(6),d=a(8),g=function(e){var t=e.handleChange,a=Object(d.a)(e,["handleChange"]);return l.a.createElement("input",Object.assign({className:"form-control form-control-sm",onChange:t},a))},u=function(e){var t=e.children;return l.a.createElement("span",{className:"badge badge-danger"},t)},p=(a(15),a(16),function(e){var t=e.children;return l.a.createElement("div",{className:"error-text"},t)}),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getDepartments=function(){var t=e.state.siteName;t.length&&fetch("https://"+t+".q4web.com/feed/People.svc/GetDepartmentList").then((function(e){return e.json()})).then((function(t){return e.setState({pplSelectDisabled:!1,pplCategories:t.GetDepartmentListResult})})).catch((function(){alert("Domain name does not exist")}))},e.getDownloads=function(){var t=e.state.siteName;t.length&&fetch("https://"+t+".q4web.com/feed/Lookup.svc/GetLookupList?lookupType=ReportType").then((function(e){return e.json()})).then((function(t){return e.setState({dlSelectDisabled:!1,dlCategories:t.GetLookupListResult,assetType:t.GetLookupListResult[0].Value})})).catch((function(){alert("Domain name does not exist")}))},e.getCategories=function(){var t=e.state.siteName;t.length&&fetch("https://"+t+".q4web.com/feed/PressRelease.svc/GetPressReleaseCategoryList").then((function(e){return e.json()})).then((function(t){return e.setState({prSelectDisabled:!1,prCategories:t.GetPressReleaseCategoryListResult})})).catch((function(){alert("Domain name does not exist")}))},e.handleChange=function(t){var a=t.target,s=a.value,l=a.name;e.setState(Object(r.a)({},l,"00000000-0000-0000-000000000000"===s?"":s))},e.handleCheckbox=function(t){var a=t.target,s=a.name,l=a.checked;e.setState(Object(r.a)({},s,l),(function(){e.setState({bodyType:e.state.prShortBody?e.state.prBody?1:3:e.state.prBody?2:0})}))},e.onInputChange=function(t){var a=t.target,s=a.value,l=a.name;e.setState(Object(r.a)({},l,s))},e.onYearChange=function(t){var a,s=t.target,l=s.value,c=s.name;e.setState((a={},Object(r.a)(a,c,l),Object(r.a)(a,"yearValid",!(l.length<4&&"-1"!==l)),a))},e.state={siteName:"",exchange:"",symbol:"",cikNumber:"",year:"",yearValid:!1,nrItems:1,langId:1,tagList:"",categoryId:"",prBody:!1,prShortBody:!1,bodyType:null,callback:"",assetType:"",prSelectDisabled:!0,prCategories:[],dlSelectDisabled:!0,dlCategories:[],departmentId:"",pplSelectDisabled:!0,pplCategories:[]},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Q4 Feed Builder"),l.a.createElement("p",null,"For documentatation see our public api documentation page ",l.a.createElement("a",{href:"http://documentation.q4websystems.com/home",target:"_blank"},"http://documentation.q4websystems.com/home")),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",{htmlFor:"siteName"},l.a.createElement("strong",null,"Site Name")),l.a.createElement("div",{className:"input-group input-group-sm"},l.a.createElement(g,{autoComplete:"off",name:"siteName",type:"text",handleChange:this.handleChange,required:!0,defaultValue:this.state.siteName}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},".q4web.com")))),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"exchange"},l.a.createElement("strong",null,"Exchange")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"exchange",onChange:this.handleChange,defaultValue:this.state.exchange})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"symbol"},l.a.createElement("strong",null,"Symbol")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"symbol",onChange:this.handleChange,defaultValue:this.state.symbol})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"cikNumber"},l.a.createElement("strong",null,"CIK#")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"cikNumber",onChange:this.handleChange,defaultValue:this.state.cikNumber}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"year"},l.a.createElement("strong",null,"Year")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"number",name:"year",onChange:this.onYearChange,defaultValue:this.state.year}),l.a.createElement("div",{className:"info-text"},'Add "-1" to show all years.'),this.state.year.length>0?this.state.yearValid?null:l.a.createElement(p,null,"Must be a valid year."):null),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"nrItems"},l.a.createElement("strong",null,"Max # of Items")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"number",name:"nrItems",onChange:this.handleChange,defaultValue:"1"})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"langId"},l.a.createElement("strong",null,"Language ID")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"langId",defaultValue:"1",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",{htmlFor:"tagList"},l.a.createElement("strong",null,"Tags")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"tagList",onChange:this.handleChange}),l.a.createElement("div",{className:"info-text"},'Tags separated by comma. Ex: "tag1, tag2, tag3"'))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",{htmlFor:"callback"},l.a.createElement("strong",null,"JSONP callback")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"callback",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm-6"})),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h5",null,"Press release only:"),l.a.createElement("label",{htmlFor:"categoryId"},l.a.createElement("strong",null,"PR Category")),l.a.createElement("div",{className:"input-group"},l.a.createElement("select",{name:"categoryId",className:"custom-select",defaultValue:"All",disabled:!!this.state.prSelectDisabled,onChange:this.handleChange},l.a.createElement("option",{value:"00000000-0000-0000-000000000000"},"All"),this.state.prCategories.map((function(e,t){return l.a.createElement("option",{key:t,value:e.WorkflowId},e.CategoryName)}))),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.getCategories},"Get Categories"))),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"prBody",id:"prBody",onChange:this.handleCheckbox}),l.a.createElement("label",{className:"form-check-label",htmlFor:"prBody"},"Include PR body")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"prShortBody",id:"prShortBody",onChange:this.handleCheckbox}),l.a.createElement("label",{className:"form-check-label",htmlFor:"prShortBody"},"Include PR short body"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h5",null,"Download list only:"),l.a.createElement("label",{htmlFor:"assetType"},l.a.createElement("strong",null,"Download Name")),l.a.createElement("div",{className:"input-group"},l.a.createElement("select",{name:"assetType",className:"custom-select",defaultValue:"All",disabled:!!this.state.dlSelectDisabled,onChange:this.handleChange},this.state.dlCategories.map((function(e,t){return l.a.createElement("option",{key:t,value:e.Value},e.Text)}))),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.getDownloads},"Get Download Lists")))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h5",null,"Person only:"),l.a.createElement("label",{htmlFor:"departmentId"},l.a.createElement("strong",null,"Department Name")),l.a.createElement("div",{className:"input-group"},l.a.createElement("select",{name:"departmentId",className:"custom-select",defaultValue:"All",disabled:!!this.state.pplSelectDisabled,onChange:this.handleChange},l.a.createElement("option",{value:"00000000-0000-0000-000000000000"},"All"),this.state.pplCategories.map((function(e,t){return l.a.createElement("option",{key:t,value:e.WorkflowId},e.DepartmentName)}))),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.getDepartments},"Get Departments")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Press Release:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/PressRelease.svc/GetPressReleaseList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.bodyType?"&bodyType="+this.state.bodyType:"").concat(this.state.categoryId?"&categoryId="+this.state.categoryId:"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true&pressReleaseDateFilter=1"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/PressRelease.svc/GetPressReleaseList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.bodyType?"&bodyType="+this.state.bodyType:"").concat(this.state.categoryId?"&categoryId="+this.state.categoryId:"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true&pressReleaseDateFilter=1")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Event:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Event.svc/GetEventList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Event.svc/GetEventList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Presentation:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Presentation.svc/GetPresentationList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Presentation.svc/GetPresentationList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Stock Quote:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetFullStockQuoteList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetFullStockQuoteList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name"),this.state.exchange?null:l.a.createElement(u,null,"Exchange"),this.state.symbol?null:l.a.createElement(u,null,"Symbol")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Stock Quote Historical:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name"),this.state.exchange?null:l.a.createElement(u,null,"Exchange"),this.state.symbol?null:l.a.createElement(u,null,"Symbol")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Financial Report:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/FinancialReport.svc/GetFinancialReportList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/FinancialReport.svc/GetFinancialReportList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"SEC Filing:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.cikNumber&&this.state.year?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/SECFiling.svc/GetEdgarFilingList").concat(this.state.year&&this.state.yearValid?"?year="+this.state.year:"").concat(this.state.cikNumber?"&exchange=CIK&symbol="+this.state.cikNumber:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/SECFiling.svc/GetEdgarFilingList").concat(this.state.year&&this.state.yearValid?"?year="+this.state.year:"").concat(this.state.cikNumber?"&exchange=CIK&symbol="+this.state.cikNumber:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name"),this.state.cikNumber?null:l.a.createElement(u,null,"CIK#"),this.state.year?null:l.a.createElement(u,null,"Year")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Download List:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.assetType.length?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/ContentAsset.svc/GetContentAssetList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.assetType?"&assetType="+this.state.assetType:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/ContentAsset.svc/GetContentAssetList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.assetType?"&assetType="+this.state.assetType:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name"),this.state.assetType?null:l.a.createElement(u,null,"Download List Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"HTML Content:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Html.svc/GetHtmlList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Html.svc/GetHtmlList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Person:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/People.svc/GetPeopleList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.departmentId?"&departmentId="+this.state.departmentId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/People.svc/GetPeopleList").concat(this.state.langId?"?languageId="+this.state.langId:"").concat(this.state.departmentId?"&departmentId="+this.state.departmentId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Dividend:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetDividendList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetDividendList").concat(this.state.exchange?"?exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(u,null,"Site Name"),this.state.exchange?null:l.a.createElement(u,null,"Exchange"),this.state.symbol?null:l.a.createElement(u,null,"Symbol")))))))}}]),a}(l.a.Component);n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.837270cf.chunk.js.map