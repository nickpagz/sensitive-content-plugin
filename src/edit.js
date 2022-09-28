import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { TextareaControl, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { warningText, revealLink, textColor } = attributes;

	const onChangeWarning = ( newWarning ) => {
		setAttributes( { warningText: newWarning } );
	};
	const onChangeRevealLink = ( newRevealLink ) => {
		setAttributes( { revealLink: newRevealLink } );
	};
	const onChangeTextColor = ( newTextColor ) => {
		setAttributes( { textColor: newTextColor } );
	};

	const ALLOWED_BLOCKS = [ 'core/image' ];
	const TEMPLATE = [ [ 'core/image', { className: 'blurred' } ] ];

	return (
		<div { ...useBlockProps() }>
			<>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings', 'sensitive-content' ) }
						disableCustomColors={ false }
						colorSettings={ [
							{
								value: textColor,
								onChange: onChangeTextColor,
								label: __( 'Text Color', 'sensitive-content' ),
							},
						] }
					></PanelColorSettings>
					<PanelBody
						title={ __( 'Message Settings', 'sensitive-content' ) }
					>
						<TextareaControl
							label={ __( 'Warning text', 'sensitive-content' ) }
							value={ warningText }
							onChange={ onChangeWarning }
						/>
						<TextControl
							label={ __(
								'Reveal link text',
								'sensitive-content'
							) }
							value={ revealLink }
							onChange={ onChangeRevealLink }
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ true }
				/>
				<div className="text__cont" style={ { color: textColor } }>
					<p>{ warningText }</p>
					<p className="show-image">{ attributes.revealLink }</p>
				</div>
			</>
		</div>
	);
}
