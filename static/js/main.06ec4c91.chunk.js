(this.webpackJsonpfeedbuilder=this.webpackJsonpfeedbuilder||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(0),l=a.n(s),c=a(3),n=a.n(c),i=(a(14),a(1)),r=a(4),m=a(5),o=a(7),h=a(6),g=a(8),d=function(t){var e=t.handleChange,a=Object(g.a)(t,["handleChange"]);return l.a.createElement("input",Object.assign({className:"form-control form-control-sm",onChange:e},a))},p=function(t){var e=t.children;return l.a.createElement("span",{className:"badge badge-danger"},e)},u=(a(15),a(16),function(t){var e=t.children;return l.a.createElement("div",{className:"error-text"},e)}),y=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).handleChange=function(e){var a=e.target,s=a.value,l=a.name;t.setState(Object(i.a)({},l,s))},t.handleCheckbox=function(e){var a=e.target,s=a.name,l=a.checked;t.setState(Object(i.a)({},s,l),(function(){t.setState({bodyType:t.state.prShortBody?t.state.prBody?1:3:t.state.prBody?2:0})}))},t.onInputChange=function(e){var a,s=e.target,l=s.value,c=s.name;t.setState((a={},Object(i.a)(a,c,l),Object(i.a)(a,"apiValid",!(l.length<32)),a))},t.onYearChange=function(e){var a,s=e.target,l=s.value,c=s.name;t.setState((a={},Object(i.a)(a,c,l),Object(i.a)(a,"yearValid",!(l.length<4)),a))},t.state={siteName:"classic",apiKey:"",apiValid:!1,exchange:"",symbol:"",cikNumber:"",year:"",yearValid:!1,nrItems:1,langId:1,tagList:"",categoryId:"",prBody:!1,prShortBody:!1,bodyType:null,callback:""},t}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Q4 Feed Builder"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",{htmlFor:"siteName"},l.a.createElement("strong",null,"Site Name")),l.a.createElement("div",{className:"input-group input-group-sm"},l.a.createElement(d,{autoComplete:"off",name:"siteName",type:"text",handleChange:this.handleChange,required:!0,defaultValue:this.state.siteName}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},".q4web.com")))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",{htmlFor:"apiKey"},l.a.createElement("strong",null,"Q4 API Key")),l.a.createElement(d,{autoComplete:"off",name:"apiKey",type:"text",maxLength:"32",handleChange:this.onInputChange,required:!0,defaultValue:this.state.apiKey}),this.state.apiKey.length>0?this.state.apiValid?null:l.a.createElement(u,null,"API key must be 32 characters long."):null)),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"exchange"},l.a.createElement("strong",null,"Exchange")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"exchange",onChange:this.handleChange,defaultValue:this.state.exchange})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"symbol"},l.a.createElement("strong",null,"Symbol")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"symbol",onChange:this.handleChange,defaultValue:this.state.symbol})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"cikNumber"},l.a.createElement("strong",null,"CIK#")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"cikNumber",onChange:this.handleChange,defaultValue:this.state.cikNumber})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"year"},l.a.createElement("strong",null,"Year")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"number",name:"year",onChange:this.onYearChange,defaultValue:this.state.year}),this.state.year.length>0?this.state.yearValid?null:l.a.createElement(u,null,"Must be a valid year."):null),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"nrItems"},l.a.createElement("strong",null,"Max # of Items")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"number",name:"nrItems",onChange:this.handleChange,defaultValue:"1"})),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",{htmlFor:"langId"},l.a.createElement("strong",null,"Language ID")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"langId",defaultValue:"1",onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("label",{htmlFor:"tagList"},l.a.createElement("strong",null,"Tags")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"tagList",onChange:this.handleChange}),l.a.createElement("div",{className:"info-text"},'Tags separated by comma. Ex: "tag1, tag2, tag3"')),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("label",{htmlFor:"categoryId"},l.a.createElement("strong",null,"PR Category")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"categoryId",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("label",{htmlFor:"callback"},l.a.createElement("strong",null,"JSONP callback")),l.a.createElement("input",{autoComplete:"off",className:"form-control form-control-sm",type:"text",name:"callback",onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h5",null,"Press release only:"),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{type:"checkbox",className:"form-check-input position-static",name:"prBody",id:"prBody",onChange:this.handleCheckbox}),l.a.createElement("label",{className:"form-check-label",htmlFor:"prBody"},"Include PR body")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{type:"checkbox",className:"form-check-input position-static",name:"prShortBody",id:"prShortBody",onChange:this.handleCheckbox}),l.a.createElement("label",{className:"form-check-label",htmlFor:"prShortBody"},"Include PR short body"))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h5",null,"Sorting")))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Press Release:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/PressRelease.svc/GetPressReleaseList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.bodyType?"&bodyType="+this.state.bodyType:"").concat(this.state.categoryId?"&categoryId="+this.state.categoryId:"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true&pressReleaseDateFilter=1"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/PressRelease.svc/GetPressReleaseList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.bodyType?"&bodyType="+this.state.bodyType:"").concat(this.state.categoryId?"&categoryId="+this.state.categoryId:"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true&pressReleaseDateFilter=1")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Event:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Event.svc/GetEventList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Event.svc/GetEventList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Presentation:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Presentation.svc/GetPresentationList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Presentation.svc/GetPresentationList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Stock Quote:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetFullStockQuoteList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetFullStockQuoteList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key"),this.state.exchange?null:l.a.createElement(p,null,"Exchange"),this.state.symbol?null:l.a.createElement(p,null,"Symbol")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Stock Quote Historical:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key"),this.state.exchange?null:l.a.createElement(p,null,"Exchange"),this.state.symbol?null:l.a.createElement(p,null,"Symbol")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Financial Report:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/FinancialReport.svc/GetFinancialReportList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/FinancialReport.svc/GetFinancialReportList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"SEC Filing:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid&&this.state.cikNumber&&this.state.year?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/SECFiling.svc/GetEdgarFilingList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.cikNumber?"&exchange=CIK&symbol="+this.state.cikNumber:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/SECFiling.svc/GetEdgarFilingList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.cikNumber?"&exchange=CIK&symbol="+this.state.cikNumber:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key"),this.state.cikNumber?null:l.a.createElement(p,null,"CIK#"),this.state.year?null:l.a.createElement(p,null,"Year")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Download List:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/ContentAsset.svc/GetContentAssetList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/ContentAsset.svc/GetContentAssetList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.year&&this.state.yearValid?"&year="+this.state.year:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"HTML Content:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/Html.svc/GetHtmlList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/Html.svc/GetHtmlList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Person:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/People.svc/GetPeopleList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true"),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/People.svc/GetPeopleList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.tagList?"&tagList="+this.state.tagList.replace(/ /g,"").replace(/,$/g,"").split(",").join("|"):"").concat(this.state.callback?"&callback="+this.state.callback:"","&includeTags=true")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key")))))),l.a.createElement("div",{className:"row-wrapper card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("strong",null,"Dividend:")),l.a.createElement("div",{className:"col-sm-10"},this.state.siteName&&this.state.apiKey&&this.state.apiValid&&this.state.exchange&&this.state.symbol?l.a.createElement("a",{href:"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetDividendList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.callback?"&callback="+this.state.callback:""),target:"_blank",rel:"noopener noreferrer"},"https://".concat(this.state.siteName,".q4web.com/feed/StockQuote.svc/GetDividendList").concat(this.state.apiKey?"?apiKey="+this.state.apiKey:"").concat(this.state.exchange?"&exchange="+this.state.exchange:"").concat(this.state.symbol?"&symbol="+this.state.symbol:"").concat(this.state.nrItems&&"0"!==this.state.nrItems?"&pageSize="+this.state.nrItems:"").concat(this.state.langId?"&languageId="+this.state.langId:"").concat(this.state.callback?"&callback="+this.state.callback:"")):l.a.createElement("p",null,l.a.createElement("span",{className:"text"},"Requires:"),this.state.siteName?null:l.a.createElement(p,null,"Site Name"),this.state.apiKey&&this.state.apiValid?null:l.a.createElement(p,null,"API Key"),this.state.exchange?null:l.a.createElement(p,null,"Exchange"),this.state.symbol?null:l.a.createElement(p,null,"Symbol")))))))}}]),a}(l.a.Component);n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root"))},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.06ec4c91.chunk.js.map