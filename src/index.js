import './style.css';
import { homePage } from "./pages/home.js";
import { menuPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";

export const content = document.querySelector(".content");
const homeBtn = document.querySelector(".home-btn");
const contactBtn = document.querySelector(".contact-btn"); 
const aboutBtn = document.querySelector(".about-btn");              

homePage();
homeBtn.addEventListener("click", homePage);
aboutBtn.addEventListener("click", menuPage);
contactBtn.addEventListener("click", contactPage);