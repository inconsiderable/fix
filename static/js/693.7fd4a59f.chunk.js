/*! For license information please see 693.7fd4a59f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfix=self.webpackChunkfix||[]).push([[693],{5693:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],s=!0;const r=e?e.shadowRoot:document,i=e||document.body,c=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},d=()=>{s=!1,c([])},a=e=>{s=n.includes(e.key),s||c([])},u=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));c(t)}},v=()=>{r.activeElement===i&&c([])};r.addEventListener("keydown",a),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",d,{passive:!0}),r.addEventListener("mousedown",d);return{destroy:()=>{r.removeEventListener("keydown",a),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)},setFocus:c}}}}]);