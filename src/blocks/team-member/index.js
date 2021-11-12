import './style.editor.scss';
import edit from './edit';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const attributes = {
	name: {
		type: 'string',
		source: 'html',
		selector: 'h3',
	},
	role: {
		type: 'string',
		source: 'html',
		selector: 'p',
	},
	info: {
		type: 'string',
		source: 'html',
		selector: 'p',
	},
};

registerBlockType('xwp-blocks/team-member', {
	title: __('XWP Team Member', 'xwp-blocks'),
	description: __('About XWP team member', 'xwp-blocks'),
	icon: 'admin-users',
	keywords: [__('XWP'), __('team'), __('member')],
	category: 'layout',
	parent: ['xwp-blocks/team'],
	transforms: {
		from: [],
		to: [],
	},
	attributes,
	edit,
	save: () => {
		return null;
	},
});
