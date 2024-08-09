import{c as V,s as w,B as $,t as S}from"./index-CofTsvNT.js";import{d as y,b as D,w as T,e as O,p as j,o as x,f as I,g as d,j as z,k as H,l as r,m as p,n as u,q as L,s as M,t as P,u as q,T as A,v as F,x as G,y as J,z as K}from"./vue.esm-bundler-BNq1yJjp.js";const B=Symbol("collapseContext"),Q={class:"er-collapse"},R=V(y({name:"COMP_NAME",__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:n}){const l=e,i=n,o=D(l.modelValue);function a(t){o.value=t,i("update:modelValue",t),i("change",t)}return T(()=>{l.accordion&&o.value.length>1&&S()}),O(()=>l.modelValue,t=>a(t)),j(B,{activeNames:o,handleItemClick:function(t){let s=[...o.value];if(l.accordion)return s=[s[0]===t?"":t],void a(s);const m=s.indexOf(t);m>-1?s.splice(m,1):s.push(t),a(s)}}),(t,s)=>(x(),I("div",Q,[d(t.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-cf97b01a"]]),v=e=>e.style.height="0px",h=e=>e.style.height=`${e.scrollHeight}px`,f=e=>e.style.height="",b=e=>e.style.overflow="hidden",g=e=>e.style.overflow="",U={beforeEnter(e){v(e),b(e)},enter:e=>h(e),afterEnter(e){f(e),g(e)},beforeLeave(e){h(e),b(e)},leave:e=>v(e),afterLeave(e){f(e),g(e)}},W=["id"],X={class:"er-collapse-item__title"},Y={class:"er-collapse-item__wapper"},Z=["id"],ee=V(y({name:"ErCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const n=e,l=z(B,void 0),i=H(()=>{var a;return(a=l==null?void 0:l.activeNames.value)==null?void 0:a.includes(n.name)});function o(){n.disabled||(l==null||l.handleItemClick(n.name))}return(a,t)=>(x(),I("div",{class:u(["er-collapse-item",{"is-disabled":a.disabled}])},[r("div",{class:u(["er-collapse-item__header",{"is-disabled":a.disabled,"is-active":i.value}]),id:`item-header-${a.name}`,onClick:o},[r("span",X,[d(a.$slots,"title",{},()=>[F(G(a.title),1)],!0)]),p($,{icon:"angle-right",class:"header-angle"})],10,W),p(A,M({name:"slide"},P(q(U))),{default:L(()=>[J(r("div",Y,[r("div",{class:"er-collapse-item__content",id:`item-content-${a.name}`},[d(a.$slots,"default",{},void 0,!0)],8,Z)],512),[[K,i.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-3a4d3382"]]),k=w(R),N=w(ee),le={title:"Components/Collapse",component:k,subcomponents:{ErCollapseItem:N},tags:["autodocs"]},c={render:e=>({components:{ErCollapse:k,ErCollapseItem:N},setup(){return{args:e}},template:`
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var _,C,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ErCollapse,
      ErCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ["a"]
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const se=["Default"];export{c as Default,se as __namedExportsOrder,le as default};
