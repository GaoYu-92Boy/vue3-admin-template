const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Export2Excel-QJmy4_HH.js","assets/index-BnbTlfOu.js","assets/index-DMjPiIAY.css","assets/xlsx-C7_Yxo3L.js"])))=>i.map(i=>d[i]);
import{P as h,Q as N,o as b,c as g,ah as l,a4 as o,V as s,ax as v,aa as n,ae as x,a5 as A,aF as B,ab as C,aG as G,aw as R,ar as W,aH as D,aI as O,as as P,aJ as F,aK as I}from"./index-BnbTlfOu.js";import{E as U,a as j}from"./el-radio-gcXF4hFB.js";const H={class:"export-excel-container"},J={class:"header"},K={class:"form-item"},M={class:"form-item"},Q={class:"form-item"},q={class:"table-wrapper"},Z={__name:"select-excel",setup(z){const a=h({filename:"",autoWidth:!0,bookType:"xlsx",bookTypeOptions:["xlsx","csv","txt"],downloadLoading:!1,tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],multipleSelection:[]}),{filename:m,autoWidth:p,bookType:_,bookTypeOptions:E,downloadLoading:T,tableData:V}=N(a),k=()=>{a.multipleSelection.length?(a.downloadLoading=!0,G(()=>import("./Export2Excel-QJmy4_HH.js"),__vite__mapDeps([0,1,2,3])).then(i=>{const e=["date","name","address"],c=a.multipleSelection.map(d=>{const r=[];for(const f in d)r.push(d[f]);return r});i.export_json_to_excel({header:e,data:c,filename:a.filename,autoWidth:a.autoWidth,bookType:a.bookType}),a.downloadLoading=!1})):R.warning("Please select at least one item")},y=i=>{a.multipleSelection=i};return(i,e)=>{const c=W,d=U,r=j,f=D,w=O,S=P,u=F,L=I;return b(),g("div",H,[l("div",J,[l("div",K,[e[3]||(e[3]=l("div",{class:"item-label"},"FileName：",-1)),o(c,{modelValue:s(m),"onUpdate:modelValue":e[0]||(e[0]=t=>v(m)?m.value=t:null)},null,8,["modelValue"])]),l("div",M,[e[6]||(e[6]=l("div",{class:"item-label"},"Cell Auto-Width：",-1)),o(r,{modelValue:s(p),"onUpdate:modelValue":e[1]||(e[1]=t=>v(p)?p.value=t:null)},{default:n(()=>[o(d,{value:!0,border:""},{default:n(()=>e[4]||(e[4]=[x("true")])),_:1}),o(d,{value:!1,border:""},{default:n(()=>e[5]||(e[5]=[x("false")])),_:1})]),_:1},8,["modelValue"])]),l("div",Q,[e[7]||(e[7]=l("div",{class:"item-label"},"Book Type:：",-1)),o(w,{modelValue:s(_),"onUpdate:modelValue":e[2]||(e[2]=t=>v(_)?_.value=t:null)},{default:n(()=>[(b(!0),g(A,null,B(s(E),t=>(b(),C(f,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),o(S,{onClick:k,loading:s(T),type:"primary"},{default:n(()=>e[8]||(e[8]=[x("Export Excel")])),_:1},8,["loading"])]),l("div",q,[o(L,{onSelectionChange:y,data:s(V),style:{width:"100%"},border:""},{default:n(()=>[o(u,{type:"selection",width:"55"}),o(u,{prop:"date",label:"Date",width:"180"}),o(u,{prop:"name",label:"Name",width:"180"}),o(u,{prop:"address",label:"Address"})]),_:1},8,["data"])])])}}};export{Z as default};
