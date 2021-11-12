// import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n/';

const edit = (props) => {
	const { className, attributes, setAttributes, isSelected } = props;
	const { name, role, info } = attributes;

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeRole = (newRole) => {
		setAttributes({ role: newRole });
	};

	const onChangeInfo = (newInfo) => {
		setAttributes({ info: newInfo });
	};

	return (
		<div className={className}>
			<RichText
				className={`${className}__name`}
				tagName="h3"
				value={name}
				onChange={onChangeName}
				placeholder={__('Member Name', 'xwp-blocks')}
				formattingControls={[]}
			/>
			<RichText
				className={`${className}__role`}
				tagName="p"
				value={role}
				onChange={onChangeRole}
				placeholder={__('Member Role', 'xwp-blocks')}
				formattingControls={[]}
			/>
			{isSelected && (
				<RichText
					className={`${className}__info`}
					tagName="p"
					value={info}
					onChange={onChangeInfo}
					placeholder={__('Member Info', 'xwp-blocks')}
					formattingControls={[]}
				/>
			)}
		</div>
	);
};

export default edit;
