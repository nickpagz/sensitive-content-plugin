import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	//console.log( attributes );
	//const { warningText } = attributes;
	//console.log( warningText );
	return (
		<div { ...useBlockProps.save( { className: 'image-holder' } ) }>
			<InnerBlocks.Content />
			<p>{ attributes.warningText }</p>
		</div>
	);
}
