window.addEventListener('load', function () {
  var script = document.createElement('script');
  script.src = 'https://viewcount-backend.onrender.com/analytics.js';
  script.async = true;
  script.onload = function () { if (window.Analytics) window.Analytics.init('e60728194983b367ac63625c76a21711'); };
  document.head.appendChild(script);
});
