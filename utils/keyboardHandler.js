export function keyboardHandler(e) {
  if (typeof window === 'undefined') return null;
  //   const dropdownButton = document.querySelector('.dropdown-button');
  const menuButton = document?.querySelector('.menu-button');
  const subNavLinks = document?.querySelectorAll('.nav-link');
  //   const mainNavLinks = document?.querySelectorAll('.main-navigation-link');

  const firstFocusableEl = menuButton;

  const dropdown = subNavLinks;

  const lastFocusableEl = dropdown?.[dropdown.length - 1];
  if (e.keyCode === 9) {
    //Rotate Focus
    if (e.shiftKey && document?.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    } else if (!e.shiftKey && document?.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  }
}
