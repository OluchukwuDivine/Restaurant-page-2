import { content } from "../index.js";

export function contactPage() {
    content.innerHTML = ``;
    
    const contactTab = document.createElement("div");
    const contactTabList = document.createElement("ul");
    contactTab.appendChild(contactTabList);
    contactTabList.innerHTML = `
        <li class="contact-lists" >Phone Number: +321 999 888 777</li>
        <li class="contact-lists" >Email: jerry01tom01@gmail.com</li>
        <li class="contact-lists" >Address: Somewhere you can have fun</li>
        <li class="contact-lists" >Socials: X(Formerly Twitter)</li>
    `;
    content.appendChild(contactTab);
}
