const blurredImages = document.querySelectorAll( '.blurred' );
const warningDivs = document.querySelectorAll( '.text__cont' );
const revealLinks = document.querySelectorAll( '.show-image' );

revealLinks.forEach( ( item, i ) => {
	item.addEventListener( 'click', function () {
		blurredImages[ i ].style.filter = 'none';
		warningDivs[ i ].remove();
		if ( blurredImages[ i ].childNodes[ 0 ].nodeName === 'A' ) {
			blurredImages[ i ].childNodes[ 0 ].style.pointerEvents = 'inherit';
		}
	} );
} );

/* warningDivs.forEach( ( item, i ) => {
	item.addEventListener( 'click', function () {
		item.remove();
		blurredImages[ i ].style.filter = 'none';
	} );
} ); */
