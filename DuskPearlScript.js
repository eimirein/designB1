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
	// Track a mouse X/Y position relative to element's boundBox or radius >> [id.mx/id.my/id.mr]
	// document.getElementById(___).addEventListener("mousemove", track, false)
	function track(event) {
		var boundBox = event.target.getBoundingClientRect();
		var x1 = event.clientX - boundBox.left;
		var x2 = event.clientX - boundBox.right;
		var y1 = event.clientY - boundBox.top;
		var y2 = event.clientY - boundBox.bottom;
		let min = 0, max = 100
		var id = event.target.id
		document.getElementById(id).mx =
			Math.max( min, Math.min( max, Math.round( max * Math.abs(x1 / boundBox.width) ) ) )
		document.getElementById(id).my =
			Math.max( min, Math.min( max, Math.round( max * Math.abs(y2 / boundBox.height) ) ) )
		document.getElementById(id).mr =
			Math.max( // Knowing no math? Let's draw diagonals!
				Math.max( min, Math.min( max, Math.round( max * Math.abs(x1 / boundBox.width) )-50 )*2 ),
				Math.max( min, Math.min( max, Math.round( max * Math.abs(x2 / boundBox.width) )-50 )*2 ),
				Math.max( min, Math.min( max, Math.round( max * Math.abs(y1 / boundBox.height) )-50 )*2 ),
				Math.max( min, Math.min( max, Math.round( max * Math.abs(y2 / boundBox.height) )-50 )*2 ),
				Math.max( min, Math.min( max, Math.round( max * Math.abs( (x1-y1)*1.41 / boundBox.width) ) ) ),
				Math.max( min, Math.min( max, Math.round( max * Math.abs( (x1+y2)*1.41 / boundBox.width) ) ) )
			)
	}
	
	// Themes(?)
	document.getElementById('themeDark').onmouseover = function() {
		pattern('--accentColor', '#000')
		pattern('--textColor', '#fff')
	}
	document.getElementById('themeBright').onmouseover = function() {
		pattern('--accentColor', '#fff')
		pattern('--textColor', '#000')
	}
	
	// Active style switches (may include optional components)
	document.getElementById('core').onmouseover = function() {
		document.getElementById('themeDark').style.visibility = 'visible'
		document.getElementById('themeBright').style.visibility = 'visible'
		document.getElementById('brightnessCtrl').style.visibility = 'visible'
	}
	document.getElementById('core').onmouseout = function() {
		document.getElementById('themeDark').style.visibility = 'hidden'
		document.getElementById('themeBright').style.visibility = 'hidden'
		document.getElementById('brightnessCtrl').style.visibility = 'hidden'
	}
	
	// Functions for optional components
	document.getElementById('brightnessCtrl').addEventListener("mousemove", track, false)
	document.getElementById('brightnessCtrl').onclick = function() {
		document.getElementById('aboutMe').style.background =
			'#000000'+(10+Math.round(document.getElementById('brightnessCtrl').mr*0.89))
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
	