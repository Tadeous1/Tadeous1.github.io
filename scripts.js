document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills ul li");
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
