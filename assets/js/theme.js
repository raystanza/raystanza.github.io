const themeLabels = {
  system: "System",
  light: "Light",
  dark: "Dark",
  nebula: "Nebula",
  win95: "Win95",
  system7: "System 7",
  vintage: "Vintage",
  pine: "Pine",
};

const validThemePreferences = new Set(Object.keys(themeLabels));
const storageKey = "raystanza-theme";
const root = document.documentElement;
const themeDropdown = document.querySelector("[data-theme-dropdown]");
const themeOptions = Array.from(document.querySelectorAll("[data-theme-option]"));
const currentThemeNodes = document.querySelectorAll("[data-theme-current]");
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function normalizeThemePreference(preference) {
  return validThemePreferences.has(preference) ? preference : "light";
}

function resolveThemePreference(preference) {
  if (preference === "system") {
    return systemThemeQuery.matches ? "dark" : "light";
  }

  return preference;
}

function getStoredThemePreference() {
  try {
    return normalizeThemePreference(
      localStorage.getItem(storageKey) || root.dataset.themePreference || "light",
    );
  } catch (error) {
    return normalizeThemePreference(root.dataset.themePreference || "light");
  }
}

function persistThemePreference(preference) {
  try {
    localStorage.setItem(storageKey, preference);
  } catch (error) {
    return;
  }
}

function updateThemeUi(preference) {
  const label = themeLabels[preference] || themeLabels.light;

  currentThemeNodes.forEach((node) => {
    node.textContent = label;
  });

  themeOptions.forEach((option) => {
    const isActive = option.dataset.themeOption === preference;

    option.dataset.active = isActive ? "true" : "false";
    option.setAttribute("aria-pressed", String(isActive));
  });
}

function applyThemePreference(preference, { persist = true } = {}) {
  const normalizedPreference = normalizeThemePreference(preference);
  const resolvedTheme = resolveThemePreference(normalizedPreference);

  root.dataset.themePreference = normalizedPreference;
  root.dataset.theme = resolvedTheme;

  if (persist) {
    persistThemePreference(normalizedPreference);
  }

  updateThemeUi(normalizedPreference);
}

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyThemePreference(option.dataset.themeOption);
    themeDropdown?.removeAttribute("open");
  });
});

document.addEventListener("click", (event) => {
  if (themeDropdown?.open && !themeDropdown.contains(event.target)) {
    themeDropdown.removeAttribute("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && themeDropdown?.open) {
    themeDropdown.removeAttribute("open");
  }
});

applyThemePreference(getStoredThemePreference(), { persist: false });

const handleSystemThemeChange = () => {
  if (getStoredThemePreference() === "system") {
    applyThemePreference("system", { persist: false });
  }
};

if (typeof systemThemeQuery.addEventListener === "function") {
  systemThemeQuery.addEventListener("change", handleSystemThemeChange);
} else if (typeof systemThemeQuery.addListener === "function") {
  systemThemeQuery.addListener(handleSystemThemeChange);
}
