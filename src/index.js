import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'nickp/sensitive-content', {
	edit: Edit,
	save,
} );
