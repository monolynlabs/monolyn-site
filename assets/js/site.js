/* Monolyn Labs — small, local JS (no trackers)
   - Mobile nav toggle only
*/

(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) nav.classList.add("is-open");
    else nav.classList.remove("is-open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  // Close on outside click (mobile)
  document.addEventListener("click", function (e) {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;

    var target = e.target;
    if (toggle.contains(target) || nav.contains(target)) return;
    setOpen(false);
  });

  // Close after navigating (mobile)
  nav.addEventListener("click", function (e) {
    var el = e.target;
    if (el && el.tagName === "A") setOpen(false);
  });

  // Close on escape
  document.addEventListener("keydown", function (e) {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;
    if (e.key === "Escape") setOpen(false);
  });
})();
