/* Role: Black November promotional countdown timer. Source: home.html line 15140 (body). */

(function(){
	function pad(n){return n<10?'0'+n:n;}
	function tick(){
		var els=document.querySelectorAll('.pske-bn-countdown');
		for(var i=0;i<els.length;i++){
			var el=els[i], end=new Date(el.getAttribute('data-end')).getTime(), d=end-Date.now(), t;
			if(isNaN(end)){continue;}
			if(d<=0){t=el.getAttribute('data-done')||'';}
			else{
				var days=Math.floor(d/864e5), h=Math.floor(d%864e5/36e5), m=Math.floor(d%36e5/6e4);
				t=(el.getAttribute('data-prefix')||'')+(el.getAttribute('data-short')
					? (days>0?days+'d '+pad(h)+'h':pad(h)+'h '+pad(m)+'m')
					: (days>0?days+'d ':'')+pad(h)+'h '+pad(m)+'m');
			}
			if(el.textContent!==t){el.textContent=t;}
		}
	}
	tick(); setInterval(tick,30000);
	if(window.MutationObserver){
		var timer;
		new MutationObserver(function(){clearTimeout(timer);timer=setTimeout(tick,250);})
			.observe(document.body,{childList:true,subtree:true});
	}
})();
