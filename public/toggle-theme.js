const primaryColorScheme = "light"; // "light" | "dark"

function getPreferTheme() {
  // return theme value in local storage if it is set
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();
let isInitialized = false;

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
  document.querySelector("#theme-btn-mobile")?.setAttribute("aria-label", themeValue);
}

// set early so no page flashes / CSS is made aware
reflectPreference();

function init() {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // Avoid adding multiple event listeners
  if (isInitialized) return;
  isInitialized = true;

  // Use event delegation on document to handle both buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#theme-btn, #theme-btn-mobile");
    if (!btn) return;
    
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
}

window.onload = () => {
  init();
};

// Astro View Transitions: re-apply theme after page transition
document.addEventListener("astro:page-load", () => {
  // Re-read theme from localStorage in case it changed
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    themeValue = savedTheme;
  }
  reflectPreference();
  init();
});

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({matches: isDark}) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
