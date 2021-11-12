<?php
/**
 * Plugin name: XWP Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function xwp_blocks_init() {

	wp_register_script(
		'xwp-blocks-team-member-script',
		plugins_url( 'dist/editor.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-block-editor', 'wp-components' )
	);

	wp_register_script(
		'xwp-blocks-script',
		plugins_url( 'dist/script.js', __FILE__ ),
	);

	wp_register_style(
		'xwp-blocks-team-member-style',
		plugins_url( 'dist/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);

	wp_register_style(
		'xwp-blocks-style',
		plugins_url( 'dist/style.css', __FILE__ ),
	);

	register_block_type(
		'xwp-blocks/team-member',
		array(
			'editor_script' => 'xwp-blocks-team-member-script',
			'script' => 'xwp-blocks-team-member-style',
			'style' => 'xwp-blocks-style',
			'editor_style' => 'xwp-blocks-team-member-style',
		)
	);
}
add_action( 'init', 'xwp_blocks_init' );
