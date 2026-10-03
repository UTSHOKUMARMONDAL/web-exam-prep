
const dt = document.getElementById("datetime");
if (dt) { 
    const t = () => dt.textContent = new Date().toLocaleString("en", { dateStyle: "medium", timeStyle: "medium" });
 t(); 
 setInterval(t, 1000) }

const f = document.getElementById("contactForm");

if (f) f.addEventListener("submit", e => { e.preventDefault(); 
    alert("Thank you! Your message has been sent."); f.reset() });
