
document.getElementById('faqWrap').addEventListener('click', function(e) {
  var item = e.target.closest('.faq-item');
  if (!item) return;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
});
