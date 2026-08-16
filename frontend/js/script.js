document.addEventListener("DOMContentLoaded", () => {

    /*
       SET CURRENT YEAR*/

    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* 
       PAGE NAVIGATION */

    const navLinks = document.querySelectorAll(
        ".nav-links a[data-section]"
    );

    const footerLinks = document.querySelectorAll(
        ".footer a[data-section]"
    );

    const sections = document.querySelectorAll(
        ".page-section"
    );


    /* 
       SHOW SECTION*/

    function showSection(sectionId) {

        // Hide every section
        sections.forEach(section => {
            section.classList.remove("active-section");
        });


        // Find requested section
        const targetSection = document.getElementById(sectionId);


        // Show requested section
        if (targetSection) {
            targetSection.classList.add("active-section");
        }


        // Update navbar active state
        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.dataset.section === sectionId) {
                link.classList.add("active");
            }

        });


        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /*
       NAVBAR CLICK*/

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const sectionId = link.dataset.section;

            if (sectionId) {
                showSection(sectionId);
            }

        });

    });


    /* 
       FOOTER CLICK*/

    footerLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const sectionId = link.dataset.section;

            if (sectionId) {
                showSection(sectionId);
            }

        });

    });


    /* 
       LOGO → DASHBOARD*/

    const logoLinks = document.querySelectorAll(
        ".logo"
    );

    logoLinks.forEach(logo => {

        logo.addEventListener("click", event => {

            event.preventDefault();

            showSection("dashboard");

        });

    });


    /*
       DEFAULT PAGE*/

    showSection("dashboard");

});
document.addEventListener("DOMContentLoaded", () => {
    const navCta = document.getElementById("navCta");
    const username = localStorage.getItem("username");

    if (username && navCta) {
        navCta.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-weight: 600; color: #fff;">👤 ${username}</span>
                <button id="logoutBtn" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;">Log Out</button>
            </div>
        `;

        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("username");
            window.location.reload();
        });
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});