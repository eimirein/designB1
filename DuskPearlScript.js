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
	
	// Themes(?)
	document.getElementById('themeDark').onmouseover = function() {
		pattern('--accentColor', '#000')
		pattern('--textColor', '#fff')
	}
	document.getElementById('themeBright').onmouseover = function() {
		pattern('--accentColor', '#fff')
		pattern('--textColor', '#000')
	}
	
	// Active style switches
	document.getElementById('core').onmouseover = function() {
		document.getElementById('themeDark').style.visibility = 'visible'
		document.getElementById('themeBright').style.visibility = 'visible'
	}
	document.getElementById('core').onmouseout = function() {
		document.getElementById('themeDark').style.visibility = 'hidden'
		document.getElementById('themeBright').style.visibility = 'hidden'
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
	