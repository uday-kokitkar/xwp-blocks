import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { RangeControl, PanelBody } from '@wordpress/components';

const ALLOWED_BLOCKS = ['xwp-blocks/team-member'];

const MEMBER_TEMPLATE = [['xwp-blocks/team-member', {}]];

registerBlockType('xwp-blocks/team', {
	title: __('XWP Team', 'xwp-blocks'),
	description: __('About XWP team', 'xwp-blocks'),
	icon: 'admin-users',
	keywords: [__('XWP', 'xwp-blocks'), __('team', 'xwp-blocks')],
	category: 'layout',
	transforms: {
		from: [],
		to: [],
	},
	attributes: {
		columns: {
			type: 'integer',
			source: 'attribute',
			default: 2,
		},
	},
	edit: ({ className, attributes, setAttributes }) => {
		const { columns } = attributes;
		return (
			<div className={`${className} has-${columns}-columns`}>
				<InspectorControls key="setting">
					<PanelBody>
						<RangeControl
							label="Columns"
							value={columns}
							onChange={(newColumns) =>
								setAttributes({ columns: newColumns })
							}
							min={1}
							max={4}
							step={1}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={MEMBER_TEMPLATE}
					orientation="horizontal"
				/>
			</div>
		);
	},
	save: () => {
		return null;
	},
});
