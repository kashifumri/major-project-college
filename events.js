const area =document.getElementById("area-feet")
const search_cost=document.getElementById("total-cost")
const btn_cost=document.getElementById("btn-cost")
function search_fun(){

search_cost.innerHTML=area.value/1000*2000+5000
}
btn_cost=addEventListener("click",search_fun);