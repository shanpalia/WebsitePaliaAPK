/* =============================================
   PaliaAPK HUB - ui.js
   Handles general UI interactions:
   mobile menu toggle, modals, dropdowns, scroll effects.

   Phase 1 - Part 2 scope: Header + Category Navigation.
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeaderShadow();
    initSearchClear();
    initUserDropdown();
    initMobileMenu();
    initNotificationBadge();
    initCategoryNav();
});

/**
 * Adds a deeper shadow to the sticky header once the page has
 * scrolled away from the top, giving it a sense of elevation.
 */
function initStickyHeaderShadow() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const updateShadow = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 4);
    };

    updateShadow();
    window.addEventListener('scroll', updateShadow, { passive: true });
}

/**
 * Wires up every search form on the page (desktop + mobile) so the
 * clear ("x") button appears only when the field has text, and
 * clicking it empties the field and refocuses it.
 * No backend logic — UI behaviour only.
 */
function initSearchClear() {
    const searchForms = document.querySelectorAll('.search-form');

    searchForms.forEach((form) => {
        const input = form.querySelector('.search-input');
        const clearBtn = form.querySelector('.search-clear');
        if (!input || !clearBtn) return;

        const syncClearVisibility = () => {
            form.classList.toggle('has-value', input.value.trim().length > 0);
        };

        input.addEventListener('input', syncClearVisibility);

        clearBtn.addEventListener('click', () => {
            input.value = '';
            syncClearVisibility();
            input.focus();
        });

        syncClearVisibility();
    });
}

/**
 * Handles opening/closing the user avatar dropdown, including
 * outside-click and Escape-key dismissal for accessibility.
 */
function initUserDropdown() {
    const userMenu = document.querySelector('.user-menu');
    const trigger = document.getElementById('user-menu-btn');
    if (!userMenu || !trigger) return;

    const closeMenu = () => {
        userMenu.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
        userMenu.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
    };

    trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        userMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (event) => {
        if (!userMenu.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}

/**
 * Toggles the mobile slide-down panel (search + account links) and
 * morphs the hamburger icon into a close icon.
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const panel = document.getElementById('mobile-panel');
    if (!toggleBtn || !panel) return;

    const closePanel = () => {
        panel.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
    };

    const openPanel = () => {
        panel.classList.add('is-open');
        toggleBtn.classList.add('is-active');
        toggleBtn.setAttribute('aria-expanded', 'true');
    };

    toggleBtn.addEventListener('click', () => {
        panel.classList.contains('is-open') ? closePanel() : openPanel();
    });

    // Close the panel automatically after choosing a link inside it.
    panel.addEventListener('click', (event) => {
        if (event.target.closest('a')) closePanel();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closePanel();
    });
}

/**
 * Marks the notification badge as read (visually cleared) when the
 * bell icon is pressed. Purely presentational — no backend yet.
 */
function initNotificationBadge() {
    const bellBtn = document.getElementById('notification-btn');
    const badge = document.getElementById('notification-badge');
    if (!bellBtn || !badge) return;

    bellBtn.addEventListener('click', () => {
        badge.classList.add('is-hidden');
    });
}

/**
 * Category pill navigation: sets the active pill on click, scrolls
 * it into view, and adds desktop mouse drag-to-scroll support on
 * top of the native touch swipe scrolling.
 */
function initCategoryNav() {
    const list = document.getElementById('category-list');
    if (!list) return;

    const pills = list.querySelectorAll('.category-pill');

    // --- Active state handling ---
    pills.forEach((pill) => {
        pill.addEventListener('click', (event) => {
            event.preventDefault();
            pills.forEach((p) => p.classList.remove('active'));
            pill.classList.add('active');
            pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });

    // --- Desktop drag-to-scroll (touch devices already scroll natively) ---
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    list.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'touch') return; // native touch scrolling handles this
        isDragging = true;
        startX = event.clientX;
        startScrollLeft = list.scrollLeft;
        list.classList.add('is-dragging');
    });

    list.addEventListener('pointermove', (event) => {
        if (!isDragging) return;
        const delta = event.clientX - startX;
        list.scrollLeft = startScrollLeft - delta;
    });

    const stopDragging = () => {
        isDragging = false;
        list.classList.remove('is-dragging');
    };

    list.addEventListener('pointerup', stopDragging);
    list.addEventListener('pointerleave', stopDragging);
}
