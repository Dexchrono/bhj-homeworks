const tabContainers = document.querySelectorAll(".tabs");

tabContainers.forEach((container) => {
  const tabs = container.querySelectorAll(".tab");
  const tabsContent = container.querySelectorAll(".tab__content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("tab_active")) {
        return;
      }

      tabs.forEach((t) => {
        t.classList.remove("tab_active");
      });

      tab.classList.add("tab_active");

      tabsContent.forEach((tabContent, contentIndex) => {
        tabContent.classList.toggle("tab__content_active", contentIndex === index);
      });
    });
  });
});
