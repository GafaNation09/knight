
(function(){
  var input = document.getElementById('s26FaqSearch');
  var noResults = document.getElementById('s26FaqNoResults');
  if(!input) return;

  input.addEventListener('input', function(){
    var term = this.value.trim().toLowerCase();
    var items = document.querySelectorAll('.s26-faq-wrap [data-q]');
    var cats = document.querySelectorAll('.s26-faq-wrap [data-cat]');
    var anyVisible = false;

    items.forEach(function(item){
      var summarySpan = item.querySelector('summary span');
      var answer = item.querySelector('.s26-faq-inner');
      var original = summarySpan.getAttribute('data-original') || summarySpan.textContent;
      summarySpan.setAttribute('data-original', original);
      var text = (original + ' ' + answer.textContent).toLowerCase();
      var match = term === '' || text.indexOf(term) !== -1;
      item.hidden = !match;
      if(match) anyVisible = true;

      if(term && match){
        var safe = original.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'ig');
        summarySpan.innerHTML = safe.replace(re, '<mark>$1</mark>');
        item.open = true;
      } else {
        summarySpan.textContent = original;
        if(term === '') item.open = false;
      }
    });

    cats.forEach(function(cat){
      var next = cat.nextElementSibling;
      var hasVisible = false;
      while(next && !next.hasAttribute('data-cat')){
        if(next.hasAttribute('data-q') && !next.hidden){ hasVisible = true; }
        next = next.nextElementSibling;
      }
      cat.hidden = !hasVisible;
    });

    noResults.hidden = anyVisible;
  });
})();
