var e=document.querySelector(".field"),o=document.querySelector(".container"),n=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),c=function(){var o=e.rows.length,c=e.rows[0].cells.length;n.disabled=10===o,t.disabled=2===o,r.disabled=10===c,l.disabled=2===c},s=function(){for(var o=e.insertRow(),n=0;n<e.rows[0].cells.length;n++)o.insertCell();c()},a=function(){e.rows.length>2&&e.deleteRow(-1),c()},i=function(){for(var o=0;o<e.rows.length;o++)e.rows[o].insertCell(-1);c()},d=function(){for(var o=0;o<e.rows.length;o++)e.rows[o].deleteCell(-1);c()};o.addEventListener("click",function(e){var o=e.target.closest("button");o&&(o.classList.contains("append-row")?s():o.classList.contains("remove-row")?a():o.classList.contains("append-column")?i():o.classList.contains("remove-column")&&d())});
//# sourceMappingURL=index.3f564818.js.map
