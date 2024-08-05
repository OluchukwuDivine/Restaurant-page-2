import { content } from "../index.js"; 

export function homePage() {  
    content.innerHTML = ``;
    const homeTab = document.createElement("div");
    homeTab.classList.add("hometab");
    content.appendChild(homeTab);
    
    const homeTabTitle = document.createElement("p");
    homeTabTitle.classList.add("home-title");
    homeTabTitle.textContent = "EliteMeals restaurant and lounge is here to offer you the best services in town";
    homeTab.appendChild(homeTabTitle);
}

