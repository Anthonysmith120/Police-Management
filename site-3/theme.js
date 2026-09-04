(function(){
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var stored = localStorage.getItem('pm-theme');
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (systemDark ? 'dark' : 'light');

  function applyTheme(t){
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-label', t === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre');
  }
  applyTheme(theme);

  btn.addEventListener('click', function(){
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('pm-theme', theme);
    applyTheme(theme);
  });
})();
