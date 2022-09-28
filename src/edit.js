import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { TextareaControl, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { warningText } = attributes;

	const onChangeWarning = ( newWarning ) => {
		setAttributes( { warningText: newWarning } );
	};

	const ALLOWED_BLOCKS = [ 'core/image' ];
	const TEMPLATE = [ [ 'core/image', { className: 'blurred' } ] ];

	return (
		<div { ...useBlockProps() }>
			<>
				<InspectorControls>
					<PanelBody
						title={ __(
							'Sensitive Content Settings',
							'sensitive-content'
						) }
					>
						<TextareaControl
							label={ __( 'Warning text', 'sensitive-content' ) }
							value={ warningText }
							onChange={ onChangeWarning }
							help={ __(
								'Warning message to appear over image.',
								'sensitive-content'
							) }
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ true }
				/>
				<p>{ warningText }</p>
			</>
		</div>
	);
}
