import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save( { className: 'image-holder' } ) }>
			<InnerBlocks.Content />
			<div
				className="text__cont"
				style={ { color: attributes.textColor } }
			>
				<p>{ attributes.warningText }</p>
				<hr />
				<p className="show-image">{ attributes.revealLink }</p>
			</div>
		</div>
	);
}
