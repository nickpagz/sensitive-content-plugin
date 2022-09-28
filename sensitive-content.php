<?php
/**
 * Plugin Name:       Sensitive Content
 * Description:       Add a mask and content warning over images to hide sensitive content.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nick Pagazani
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sensitive-content
 *
 * @package           nickp
 */


function nickp_sensitive_content_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'nickp_sensitive_content_block_init' );

function sensitive_content_enqueue_scripts() {
	wp_enqueue_script(
		'sensitive-content-frontend-js',
		plugins_url( '/assets/js/frontend.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/frontend.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'sensitive_content_enqueue_scripts' );
