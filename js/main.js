/* main.js — mobile menu toggle + active-link highlighting */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");

    /* Hamburger open/close */
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("open");
        toggle.classList.toggle("open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      /* Close the menu after tapping a link (mobile) */
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });

      /* Close when tapping outside the header */
      document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* Mark the current page's nav link as active
       (falls back to the data-page attribute on <body>) */
    var current =
      document.body.getAttribute("data-page") ||
      (location.pathname.split("/").pop() || "index.html").replace(".html", "");
    if (current === "" ) current = "index";

    nav && nav.querySelectorAll("a[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  });
})();
