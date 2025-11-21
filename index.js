import{a as c,i as d,S as p}from"./assets/vendor-Dj0z4On-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const u="53339801-8b3ce8e2b4688b576eb7bcf24",m="https://pixabay.com/api/";function f(e){return y(m,{key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}function y(e,r){return c.get(e,{params:r}).then(function(s){return s.data.total===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"}),s.data}).catch(function(s){throw s})}const g=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,widthRatio:.77,heightRatio:.92}),l={gallery:document.querySelector("#gallery")};function h(e){const r=e.map(s=>x(s)).join("");l.gallery.innerHTML=r,g.refresh()}function b(){l.gallery.innerHTML=""}function L(){const e=document.querySelector(".loader");if(e)e.style.display="block";else{const r=document.createElement("span");r.classList.add("loader"),l.gallery.insertAdjacentElement("afterend",r)}}function w(){const e=document.querySelector(".loader");e.style.display="none"}function x(e){return`<li class="gallery-item">
    <a class="gallery-card" href="${e.largeImageURL}">
    <img class="gallery-img" width="360" height="200" src="${e.webformatURL}" alt="${e.tags.split(",")[0]}"/>
  </a>
    <ul class="img-descriptions-list">
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Likes</p>
        <p class="img-descriptions-data">${e.likes}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Views</p>
        <p class="img-descriptions-data">${e.views}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Comments</p>
        <p class="img-descriptions-data">${e.comments}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Downloads</p>
        <p class="img-descriptions-data">${e.downloads}</p>
      </li>
    </ul>
  </li>`}const n={form:document.querySelector(".form")};n.form.addEventListener("submit",async e=>{e.preventDefault();const r=n.form.querySelector('input[name="search-text"]'),s=r.value.trim();if(s===""){r.value="";return}b(),L(),f(s).then(a=>{h(a.hits)}).catch(a=>{console.log(a)}).finally(()=>w())});
//# sourceMappingURL=index.js.map
