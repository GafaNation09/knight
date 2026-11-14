
  (function(){
    var el = document.getElementById('p18hDate');
    if (!el) return;
    var formatted = new Intl.DateTimeFormat('en-GB', { timeZone:'Africa/Nairobi', day:'numeric', month:'short', year:'numeric' }).format(new Date());
    el.textContent = formatted;
  })();
