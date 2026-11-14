
  (function(){
    var el = document.getElementById('p18pDate');
    if (!el) return;
    el.textContent = new Intl.DateTimeFormat('en-GB', { timeZone:'Africa/Nairobi', day:'numeric', month:'short', year:'numeric' }).format(new Date());
  })();
