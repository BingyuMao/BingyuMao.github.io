// Theme Toggle Functionality
(function() {
  'use strict';

  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Detect if this is a page reload (F5) or back/forward navigation
  const navigationType = performance.getEntriesByType('navigation')[0]?.type;
  const isReload = navigationType === 'reload' || navigationType === 'back_forward';

  // Initialize theme
  if (isReload) {
    // Reset to system preference on reload
    const systemTheme = darkModeMediaQuery.matches ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', systemTheme);
    sessionStorage.removeItem('theme');
    sessionStorage.removeItem('theme-toggle-position');
  } else {
    // Load from session storage (persists during page navigation)
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
      htmlElement.setAttribute('data-theme', savedTheme);
    } else {
      const systemTheme = darkModeMediaQuery.matches ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', systemTheme);
      sessionStorage.setItem('theme', systemTheme);
    }

    // Restore button position
    const savedPosition = JSON.parse(sessionStorage.getItem('theme-toggle-position') || '{}');
    if (savedPosition.bottom && savedPosition.right) {
      themeToggle.style.bottom = savedPosition.bottom;
      themeToggle.style.right = savedPosition.right;
    }
  }

  // Toggle theme function
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    sessionStorage.setItem('theme', newTheme);
  }

  // Draggable functionality
  let isDragging = false;
  let startX, startY, initialX, initialY;

  function onMouseDown(e) {
    // Prevent text selection
    e.preventDefault();

    isDragging = false;
    const rect = themeToggle.getBoundingClientRect();

    // Store initial positions
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    initialX = rect.left;
    initialY = rect.top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    document.addEventListener('touchend', onMouseUp);
  }

  function onMouseMove(e) {
    e.preventDefault();

    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    // Mark as dragging if moved more than 5px
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      isDragging = true;
      themeToggle.classList.add('dragging');
    }

    if (isDragging) {
      const newLeft = initialX + deltaX;
      const newTop = initialY + deltaY;

      // Calculate position from bottom-right
      const newBottom = window.innerHeight - newTop - themeToggle.offsetHeight;
      const newRight = window.innerWidth - newLeft - themeToggle.offsetWidth;

      // Apply constraints to keep button on screen
      const constrainedBottom = Math.max(10, Math.min(window.innerHeight - 54, newBottom));
      const constrainedRight = Math.max(10, Math.min(window.innerWidth - 54, newRight));

      themeToggle.style.bottom = constrainedBottom + 'px';
      themeToggle.style.right = constrainedRight + 'px';
    }
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
    document.removeEventListener('touchend', onMouseUp);

    themeToggle.classList.remove('dragging');

    // Save button position if dragged
    if (isDragging) {
      const position = {
        bottom: themeToggle.style.bottom,
        right: themeToggle.style.right
      };
      sessionStorage.setItem('theme-toggle-position', JSON.stringify(position));
    } else {
      // If not dragging, it was a click
      toggleTheme();
    }

    isDragging = false;
  }

  // Add event listeners to toggle button
  if (themeToggle) {
    themeToggle.addEventListener('mousedown', onMouseDown);
    themeToggle.addEventListener('touchstart', onMouseDown, { passive: false });
  }

  // Listen for system theme preference changes
  darkModeMediaQuery.addEventListener('change', function(e) {
    const newTheme = e.matches ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    sessionStorage.setItem('theme', newTheme);
  });
})();
