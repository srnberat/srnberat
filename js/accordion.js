document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll("[data-ui-tablist]");

    accordions.forEach(accordion => {
        const tabs = accordion.querySelectorAll("[data-ui-tablist-tab]");
        const panels = accordion.querySelectorAll("[data-ui-tablist-tabpanel]");
        
        tabs.forEach(tab => tab.setAttribute("aria-expanded", "false"));
        panels.forEach(panel => panel.style.maxHeight = "0");

        accordion.addEventListener("click", (event) => {
            if (event.target.matches("[data-ui-tablist-tab]")) {
                const isOpen = event.target.getAttribute("aria-expanded") === "true";
                tabs.forEach(tab => tab.setAttribute("aria-expanded", "false"));
                panels.forEach(panel => panel.style.maxHeight = "0");

                if (!isOpen) {
                    event.target.setAttribute("aria-expanded", "true");
                    const panel = event.target.nextElementSibling;
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    });
});
