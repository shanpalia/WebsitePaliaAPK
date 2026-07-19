/* =============================================
   PaliaAPK HUB - theme.js
   Handles light/dark theme toggling
   and persistence of user theme preference.
   ============================================= */

const THEME_STORAGE_KEY = 'palia-theme';

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

/**
 * Reads the theme already applied to <html> (set by the inline
 * anti-flicker snippet in index.html's <head>) and wires up the
 * toggle button to flip and persist it.
 */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    // Keep the button's a11y state in sync with the current theme.
    syncToggleState(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'light'
            : 'dark';

        applyTheme(nextTheme);
        syncToggleState(toggleBtn);
    });
}

/**
 * Applies a theme to the document and saves it so it persists
 * across page loads and site pages.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        // localStorage may be unavailable (e.g. private browsing) — fail silently.
    }
}

/**
 * Reflects the active theme on the toggle button's aria-pressed
 * attribute for screen readers.
 * @param {HTMLElement} toggleBtn
 */
function syncToggleState(toggleBtn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggleBtn.setAttribute('aria-pressed', String(isDark));
}
