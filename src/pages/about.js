import { content } from "../index.js";
 
export function menuPage() {
    content.innerHTML = ``;
    const menuList = document.createElement("ol");
    menuList.classList.add("lists");
    menuList.innerHTML = `
        <li class="list-items" >Barbecue</li>
        <li class="list-items" >Rice Salad</li>
        <li class="list-items" >Sharwarma</li>
        <li class="list-items" >Yoghurts</li>
        `;
    content.appendChild(menuList);
}