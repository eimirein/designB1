	// [i] Function templates are designed by @eimirein [i]
	
	function time() {
		var get_time = new Date()
		var hour = get_time.getHours()
		var min = get_time.getMinutes()
		var sec = get_time.getSeconds()
		if (hour.toString().length==1) {hour = '0'+hour}
		if (min.toString().length==1) {min = '0'+min}
		if (sec.toString().length==1) {sec = '0'+sec}
		return hour+":"+min+':'+sec
	}
	// Erase all internal data of an element
	function wipe(id) {
		if ( document.getElementById(id) ) {
			document.getElementById(id).innerHTML = ''
		} else { print('['+time()+'] wipe :: Element with id <'+id+'> does not exist') }
	}
	// Remove one or multiple elements
	function rm(...ids) {
		ids.forEach(function(id) {
			if ( document.getElementById(id) ) {
				document.getElementById(id).remove()
			} else { print('['+time()+'] rm :: Element with id <'+id+'> does not exist') }
		})
	}
	// Make one or multiple elements/write data within a specific root body
	function mk(root_id, html_or_array) {
		root = document.getElementById(root_id)
		if ( root ) {
			if ( typeof html_or_array === 'object' ) {
				for (var index in html_or_array) {
					root.innerHTML = root.innerHTML + html_or_array[index]
				}
			} else { root.innerHTML = root.innerHTML + html_or_array }
		} else { print('['+time()+'] mk :: Root element with id <'+root_id+'> does not exist') }
	}
	// Set/change a global CSS variable
	function pattern(CSSVar, val) { document.documentElement.style.setProperty(CSSVar, val) }
	// Animate an element, optionally add a second animation and set an interval
	function a8(id, animation, a8opt, int_opt) {
		var a8em = document.getElementById(id)
		if ( a8em ) {
			if ( !a8opt && !int_opt ) { a8em.style.animation = animation }
			else {
				setInterval( function() { a8em.style.animation = animation }, int_opt )
				setInterval( function() { a8em.style.animation = a8opt }, int_opt*2 )
			}
		} else { print('['+time()+'] a8 :: Element with id <'+id+'> does not exist') }
	}
	
	// Themes(?)
	document.getElementById('themeDark').onmouseover = function() {
		pattern('--backgroundColor', '#000')
		pattern('--accentColor', '#fff')
		pattern('--textColor', '#fff')
	}
	document.getElementById('themeBright').onmouseover = function() {
		pattern('--backgroundColor', '#fff')
		pattern('--accentColor', '#000')
		pattern('--textColor', '#000')
	}
	// Active animations
	document.getElementById('body').onload = function() {
		setTimeout(function(){ pattern('--textColor', '#000') }, 1000)
		a8('themeDark', 'shrink linear 0.2s forwards')
		a8('themeBright', 'shrink linear 0.2s forwards')
		a8('msgBox1', 'expand linear 0.8s forwards')
		a8('msgBox2', 'showUp ease-in 0.8s forwards')
		a8('msgBox3', 'showUp ease-in 1s forwards')
		a8('msgBox4', 'expand ease-in 1s forwards')
		a8('titleOrAuthor', 'slideOutR ease-in 0.2s forwards')
	}
	document.getElementById('core').onmouseover = function() {
		a8('themeDark', 'expand linear 0.2s forwards')
		a8('themeBright', 'expand linear 0.2s forwards')
		a8('titleOrAuthor', 'slideInR ease-in 0.3s forwards')
	}
	document.getElementById('core').onmouseout = function() {
		a8('themeDark', 'shrink linear 0.2s forwards')
		a8('themeBright', 'shrink linear 0.2s forwards')
		a8('titleOrAuthor', 'slideOutR ease-in 0.3s forwards')
	}
	
	// Decorative: Showcase/debug functions
	document.getElementById('sc_em3').onclick = function() {
		wipe('titleOrAuthor'); wipe('userIntro');
		mk('titleOrAuthor', document.getElementById('sc_em1').value);
		mk('userIntro', document.getElementById('sc_em2').value)
	}
	document.getElementById('sc_em6').onclick = function() {
		mk('galleryA', `<a class='msgGalleryEntry'
			style="background-image: url(`+ document.getElementById('sc_em4').value +`)"
			href=`+ document.getElementById('sc_em5').value +`></a>`)
		mk('galleryB', `<a class='msgGalleryEntry'
			style="background-image: url(`+ document.getElementById('sc_em4').value +`)"
			href=`+ document.getElementById('sc_em5').value +`></a>`)
	}
	document.getElementById('sc_em7').onclick = function() {
		mk('ranking1', `<div class='msgRankingEntry rankingA'
			style="background-image: url(`+ document.getElementById('sc_em4').value +`)"></div>`)
		mk('ranking2', `<div class='msgRankingEntry rankingB'
			style="background-image: url(`+ document.getElementById('sc_em4').value +`)"></div>`)
		mk('ranking3', `<div class='msgRankingEntry rankingC'
			style="background-image: url(`+ document.getElementById('sc_em4').value +`)"></div>`)
	}

	// Decorative animations
	a8('body', 'themeB linear 3s forwards', 'themeW linear 3s forwards', 10000)
	