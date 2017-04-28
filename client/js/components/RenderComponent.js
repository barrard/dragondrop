RenderComponent = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}

//add icon to the User Created Element ID
	function addIconToUCEL(ucel_, classNames){
		var ucel = dgid(ucel_)
		//icon is really a class list array
		//so we will lopp this array and jus
		classNames = classNames.split(' ')
		//push some styles and shit to make this icon bigger better cooler
		classNames.push('BBC')//BBC = bigger better coolor
		console.log(classNames)
		console.log(ucel)
		var icon = document.createElement('i')
		classNames.forEach(function(className){
			icon.classList.add(className)

		})
		MakeDraggable.draggon(icon)
		ucel.append(icon)

	}

var arr=['fa-500px','fa-address-book','fa-address-book-o','fa-address-card','fa-address-card-o','fa-adjust','fa-adn','fa-align-center','fa-align-justify','fa-align-left','fa-align-right','fa-amazon','fa-ambulance','fa-american-sign-language-interpreting','fa-anchor','fa-android','fa-angellist','fa-angle-double-down','fa-angle-double-left','fa-angle-double-right','fa-angle-double-up','fa-angle-down','fa-angle-left','fa-angle-right','fa-angle-up','fa-apple','fa-archive','fa-area-chart','fa-arrow-circle-down','fa-arrow-circle-left','fa-arrow-circle-o-down','fa-arrow-circle-o-left','fa-arrow-circle-o-right','fa-arrow-circle-o-up','fa-arrow-circle-right','fa-arrow-circle-up','fa-arrow-down','fa-arrow-left','fa-arrow-right','fa-arrow-up','fa-arrows','fa-arrows-alt','fa-arrows-h','fa-arrows-v','fa-asl-interpreting','fa-assistive-listening-systems','fa-asterisk','fa-at','fa-audio-description','fa-automobile','fa-backward','fa-balance-scale','fa-ban','fa-bandcamp','fa-bank']
var arr2 = ['fa-bar-chart','fa-bar-chart-o','fa-barcode','fa-bars','fa-bath','fa-bathtub','fa-battery','fa-battery-0','fa-battery-1','fa-battery-2','fa-battery-3','fa-battery-4','fa-battery-empty','fa-battery-full','fa-battery-half','fa-battery-quarter','fa-battery-three-quarters','fa-bed','fa-beer','fa-behance','fa-behance-square','fa-bell','fa-bell-o','fa-bell-slash','fa-bell-slash-o','fa-bicycle','fa-binoculars','fa-birthday-cake','fa-bitbucket','fa-bitbucket-square','fa-bitcoin','fa-black-tie','fa-blind','fa-bluetooth','fa-bluetooth-b','fa-bold','fa-bolt','fa-bomb','fa-book','fa-bookmark','fa-bookmark-o','fa-braille','fa-briefcase','fa-btc','fa-bug','fa-building','fa-building-o','fa-bullhorn','fa-bullseye','fa-bus','fa-buysellads','fa-cab','fa-calculator','fa-calendar','fa-calendar-check-o','fa-calendar-minus-o','fa-calendar-o','fa-calendar-plus-o','fa-calendar-times-o','fa-camera','fa-camera-retro','fa-car','fa-caret-down','fa-caret-left','fa-caret-right','fa-caret-square-o-down','fa-caret-square-o-left','fa-caret-square-o-right','fa-caret-square-o-up','fa-caret-up','fa-cart-arrow-down','fa-cart-plus','fa-cc','fa-cc-amex','fa-cc-diners-club','fa-cc-discover','fa-cc-jcb','fa-cc-mastercard','fa-cc-paypal']
var arr3 =['fa-cc-stripe','fa-cc-visa','fa-certificate','fa-chain','fa-chain-broken','fa-check','fa-check-circle','fa-check-circle-o','fa-check-square','fa-check-square-o','fa-chevron-circle-down','fa-chevron-circle-left','fa-chevron-circle-right','fa-chevron-circle-up','fa-chevron-down','fa-chevron-left','fa-chevron-right','fa-chevron-up','fa-child','fa-chrome','fa-circle','fa-circle-o','fa-circle-o-notch','fa-circle-thin','fa-clipboard','fa-clock-o','fa-clone','fa-close','fa-clfa-cloud-downlfa-cloud-uplfa-fa-cfa-code-ffa-codefa-codiefa-coffa-fa-cfa-colufa-commfa-commenfa-commentfa-commentinfa-commefa-commentfa-compfa-comprfa-connectdevefa-confa-cfa-copyrifa-creative-commfa-credit-cfa-credit-card-fa-cfa-crosshafa-cfa-cfa-cufa-fa-cutlfa-dashbofa-dashcfa-databfa-dfa-deafnfa-dedfa-delicifa-deskfa-deviantfa-diamfa-dfa-dolfa-dot-circlfa-download','fa-dribbble','fa-drivers-license','fa-drivers-license-o','fa-dropbox','fa-drupal']
var arr4=['fa-edge','fa-edit','fa-eercast','fa-ejfa-ellipsifa-ellipsifa-empfa-envelfa-envelopfa-envelope-ofa-envelope-opefa-envelope-squfa-envfa-erafa-efa-eur','fa-euro','fa-exchange','fa-exclamation','fa-exclamation-circle','fa-exclamation-triangle','fa-expand','fa-expeditedssl','fa-external-link','fa-external-link-square','fa-eye','fa-eye-slash','fa-eyedropper','fa-fa','fa-facebook','fa-facebook-f','fa-facebook-official','fa-facebook-square','fa-fast-backward','fa-fast-forward','fa-fax','fa-feed','fa-female','fa-fighter-jet','fa-file','fa-file-archive-o','fa-file-audio-o','fa-file-code-o','fa-file-excel-o','fa-file-image-o','fa-file-movie-o','fa-file-o','fa-file-pdf-o','fa-file-photo-o','fa-file-picture-o','fa-file-powerpoint-o','fa-file-sound-o','fa-file-text','fa-file-text-o','fa-file-video-o','fa-file-word-o','fa-file-zip-o','fa-files-o','fa-film','fa-filter','fa-fire','fa-fire-extinguisher','fa-firefox','fa-first-order','fa-flag','fa-flag-checkered','fa-flag-o','fa-flash','fa-flask','fa-flickr','fa-floppy-o','fa-folder','fa-folder-o','fa-folder-open','fa-folder-open-o','fa-font','fa-font-awesome','fa-fonticons','fa-fort-awesome','fa-forumbee','fa-forward','fa-foursquare','fa-free-code-camp','fa-frown-o','fa-futbol-o','fa-gamepad','fa-gavel','fa-gbp','fa-ge','fa-gear','fa-gears','fa-genderless','fa-get-pocket','fa-gg','fa-gg-circle','fa-gift','fa-git','fa-git-square','fa-github','fa-github-alt','fa-github-square','fa-gitlab','fa-gittip','fa-glass','fa-glide','fa-glide-g','fa-globe','fa-google','fa-google-plus','fa-google-plus-circle','fa-google-plus-official','fa-google-plus-square','fa-google-wallet','fa-graduation-cap','fa-gratipay','fa-grav','fa-group','fa-h-square','fa-hacker-news','fa-hand-grab-o','fa-hand-lizard-o','fa-hand-o-down','fa-hand-o-left','fa-hand-o-right','fa-hand-o-up','fa-hand-paper-o','fa-hand-peace-o','fa-hand-pointer-o','fa-hand-rock-o','fa-hand-scissors-o','fa-hand-spock-o','fa-hand-stop-o','fa-handshake-o','fa-hard-of-hearing','fa-hashtag','fa-hdd-o','fa-header','fa-headphones','fa-heart','fa-heart-o','fa-heartbeat','fa-history','fa-home','fa-hospital-o','fa-hotel','fa-hourglass','fa-hourglass-1','fa-hourglass-2','fa-hourglass-3','fa-hourglass-end','fa-hourglass-half','fa-hourglass-o','fa-hourglass-start','fa-houzz','fa-html5','fa-i-cursor','fa-id-badge','fa-id-card','fa-id-card-o','fa-ils','fa-image','fa-imdb','fa-inbox','fa-indent','fa-industry','fa-info','fa-info-circle','fa-inr','fa-instagram','fa-institution','fa-internet-explorer','fa-intersex','fa-ioxhost','fa-italic','fa-joomla','fa-jpy','fa-jsfiddle','fa-key','fa-keyboard-o','fa-krw','fa-language','fa-laptop','fa-lastfm','fa-lastfm-square','fa-leaf','fa-leanpub','fa-legal','fa-lemon-o','fa-level-down','fa-level-up','fa-life-bouy','fa-life-buoy','fa-life-ring','fa-life-saver','fa-lightbulb-o','fa-line-chart','fa-link','fa-linkedin','fa-linkedin-square','fa-linode','fa-linux','fa-list','fa-list-alt','fa-list-ol','fa-list-ul','fa-location-arrow','fa-lock','fa-long-arrow-down','fa-long-arrow-left','fa-long-arrow-right','fa-long-arrow-up','fa-low-vision','fa-magic','fa-magnet','fa-mail-forward','fa-mail-reply','fa-mail-reply-all','fa-male','fa-map','fa-map-marker','fa-map-o','fa-map-pin','fa-map-signs','fa-mars','fa-mars-double','fa-mars-stroke','fa-mars-stroke-h','fa-mars-stroke-v','fa-maxcdn','fa-meanpath','fa-medium','fa-medkit','fa-meetup','fa-meh-o','fa-mercury','fa-microchip','fa-microphone','fa-microphone-slash','fa-minus','fa-minus-circle','fa-minus-square','fa-minus-square-o','fa-mixcloud','fa-mobile','fa-mobile-phone','fa-modx','fa-money','fa-moon-o','fa-mortar-board','fa-motorcycle','fa-mouse-pointer','fa-music','fa-navicon','fa-neuter','fa-newspaper-o','fa-object-group','fa-object-ungroup','fa-odnoklassniki','fa-odnoklassniki-square','fa-opencart','fa-openid','fa-opera','fa-optin-monster','fa-outdent','fa-pagelines','fa-paint-brush','fa-paper-plane','fa-paper-plane-o','fa-paperclip','fa-paragraph','fa-paste','fa-pause','fa-pause-circle','fa-pause-circle-o','fa-paw','fa-paypal','fa-pencil','fa-pencil-square','fa-pencil-square-o','fa-percent','fa-phone','fa-phone-square','fa-photo','fa-picture-o','fa-pie-chart','fa-pied-piper','fa-pied-piper-alt','fa-pied-piper-pp','fa-pinterest','fa-pinterest-p','fa-pinterest-square','fa-plane','fa-play','fa-play-circle','fa-play-circle-o','fa-plug','fa-plus','fa-plus-circle']
var arr5=['fa-plus-square','fa-plus-square-o','fa-podcast','fa-power-off','fa-print','fa-product-hunt','fa-puzzle-piece','fa-qq','fa-qrcode','fa-question','fa-question-circle','fa-question-circle-o','fa-quora','fa-quote-left','fa-quote-right','fa-ra','fa-random','fa-ravelry','fa-rebel','fa-recycle','fa-reddit','fa-reddit-alien','fa-reddit-square','fa-refresh','fa-registered','fa-remove','fa-renren','fa-reorder','fa-repeat','fa-reply','fa-reply-all','fa-resistance','fa-retweet','fa-rmb','fa-road','fa-rocket','fa-rotate-left','fa-rotate-right','fa-rouble','fa-rss','fa-rss-square','fa-rub','fa-ruble','fa-rupee','fa-s15','fa-safari','fa-save','fa-scissors','fa-scribd','fa-search','fa-search-minus','fa-search-plus','fa-sellsy','fa-send','fa-send-o','fa-server','fa-share','fa-share-alt','fa-share-alt-square','fa-share-square','fa-share-square-o','fa-shekel','fa-sheqel','fa-shield','fa-ship','fa-shirtsinbulk','fa-shopping-bag','fa-shopping-basket','fa-shopping-cart','fa-shower','fa-sign-in','fa-sign-language','fa-sign-out','fa-signal','fa-signing','fa-simplybuilt','fa-sitemap','fa-skyatlas','fa-skype','fa-slack','fa-sliders','fa-slideshare','fa-smile-o','fa-snapchat','fa-snapchat-ghost','fa-snapchat-square','fa-snowflake-o','fa-soccer-ball-o','fa-sort','fa-sort-alpha-asc','fa-sort-alpha-desc','fa-sort-amount-asc','fa-sort-amount-desc','fa-sort-asc','fa-sort-desc','fa-sort-down','fa-sort-numeric-asc','fa-sort-numeric-desc','fa-sort-up','fa-soundcloud','fa-space-shuttle','fa-spinner','fa-spoon','fa-spotify','fa-square','fa-square-o','fa-stack-exchange','fa-stack-overflow','fa-star','fa-star-half','fa-star-half-empty','fa-star-half-full','fa-star-half-o','fa-star-o','fa-steam','fa-steam-square','fa-step-backward','fa-step-forward','fa-stethoscope','fa-sticky-note','fa-sticky-note-o','fa-stop','fa-stop-circle','fa-stop-circle-o','fa-street-view','fa-strikethrough','fa-stumbleupon','fa-stumbleupon-circle','fa-subscript','fa-subway','fa-suitcase','fa-sun-o','fa-superpowers','fa-superscript','fa-support','fa-table','fa-tablet','fa-tachometer','fa-tag','fa-tags','fa-tasks','fa-taxi','fa-telegram','fa-television','fa-tencent-weibo','fa-terminal','fa-text-height','fa-text-width','fa-th','fa-th-large','fa-th-list','fa-themeisle','fa-thermometer','fa-thermometer-0','fa-thermometer-1','fa-thermometer-2','fa-thermometer-3','fa-thermometer-4','fa-thermometer-empty','fa-thermometer-full','fa-thermometer-half','fa-thermometer-quarter','fa-thermometer-three-quarters','fa-thumb-tack','fa-thumbs-down','fa-thumbs-o-down','fa-thumbs-o-up','fa-thumbs-up','fa-ticket','fa-times','fa-times-circle','fa-times-circle-o','fa-times-rectangle','fa-times-rectangle-o','fa-tint','fa-toggle-down','fa-toggle-left','fa-toggle-off','fa-toggle-on','fa-toggle-right','fa-toggle-up','fa-trademark','fa-train','fa-transgender','fa-transgender-alt','fa-trash','fa-trash-o','fa-tree','fa-trello','fa-tripadvisor','fa-trophy','fa-truck','fa-try','fa-tty','fa-tumblr','fa-tumblr-square','fa-turkish-lira','fa-tv','fa-twitch','fa-twitter','fa-twitter-square','fa-umbrella','fa-underline','fa-undo','fa-universal-access','fa-university','fa-unlink','fa-unlock','fa-unlock-alt','fa-unsorted','fa-upload','fa-usb','fa-usd','fa-user','fa-user-circle','fa-user-circle-o','fa-user-md','fa-user-o','fa-user-plus','fa-user-secret','fa-user-times','fa-users','fa-vcard','fa-vcard-o','fa-venus','fa-venus-double','fa-venus-mars','fa-viacoin','fa-viadeo','fa-viadeo-square','fa-video-camera','fa-vimeo','fa-vimeo-square','fa-vine','fa-vk','fa-volume-control-phone','fa-volume-down','fa-volume-off','fa-volume-up','fa-warning','fa-wechat','fa-weibo','fa-weixin','fa-whatsapp','fa-wheelchair','fa-wheelchair-alt','fa-wifi','fa-wikipedia-w','fa-window-close','fa-window-close-o','fa-window-maximize','fa-window-minimize','fa-window-restore','fa-windows','fa-won','fa-wordpress','fa-wpbeginner','fa-wpexplorer','fa-wpforms','fa-wrench','fa-xing','fa-xing-square','fa-y-combinator','fa-y-combinator-square','fa-yahoo','fa-yc','fa-yc-square','fa-yelp','fa-yen','fa-yoast','fa-youtube','fa-youtube-play','fa-youtube-square']
var MasterIconList = arr.concat(arr2.concat(arr3.concat(arr4.concat(arr5))))
console.log(MasterIconList)
function shapesContainer(el){


	console.log(el.id)
	console.log('create elements shapes container')
	var shapesContainer = document.createElement('div')
	var innerShapesContainer = document.createElement('div')
		innerShapesContainer.classList.add('innerShapesContainer')
		shapesContainer.classList.add('shapesContainer')
		shapesContainer.setAttribute('data-link', el.id)
		shapesContainer.append(innerShapesContainer)
		dgcn('mainContent')[0].append(shapesContainer)
		

		MasterIconList.forEach(function(shape){
			var newShape = document.createElement('i')
			var shapeContainer = document.createElement('div')
			shapeContainer.classList.add('shapeContainer')
			newShape.addEventListener('click', function addShapeToTargetDiv(e){
				console.log(this.getAttribute('class'))
				var iconClass = this.getAttribute('class')
				//getShapesContainerDiv because it has the 'data-link'
				function getToShapesContainerDiv(el){
					if(el.parentNode.getAttribute('data-link')){
						// console.log('got data ling parent')
						// console.log(el.parentNode.getAttribute('data-link'))
						// el.parentNode.getAttribute('data-link')
						return el.parentNode.getAttribute('data-link')
					}else{
						return getToShapesContainerDiv(el.parentNode)

					}
				}
				//ucel_ is the id of a user created element
				var ucel_ = getToShapesContainerDiv(this.parentNode)
				//thatsit neds a new name, its jsut the data link back to the usercreateelement to add an icon
				addIconToUCEL(ucel_, iconClass)
				// console.log(this.parentNode.parentNode.parentNode.getAttribute('data-link'))
			},true)


			newShape.classList.add('fa',shape)

				shapeContainer.append(newShape)
				innerShapesContainer.append(shapeContainer)

		})





		// var shapesArray = ['star','triangle','yin-yang','square','circle', 'octagon', 'heart', 'infinity']

		// shapesArray.forEach(function(shape){
		// 	console.log(shape)
		// 	var shapeContainer = document.createElement('div')
		// 	shapeContainer.setAttribute('data-shape', shape)
		// 	shapeContainer.addEventListener('click', function addShapeToTargetDiv(e){
		// 		console.log(this.getAttribute('data-shape'))
		// 		console.log(this.parentNode.getAttribute('data-link'))
		// 	},true)
		// 	shapeContainer.classList.add('shapeContainer')
		// 	var newShape = document.createElement('div')
		// 	newShape.classList.add('newShape_'+shape)
		// 	shapeContainer.append(newShape)
		// 	shapesContainer.append(shapeContainer)
		// })
		
}




		return {
			shapesContainer:shapesContainer
		}
	
})()

