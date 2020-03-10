<?php
function register_stylesheets_theme() {

	wp_enqueue_style( 'style', get_stylesheet_uri());
	wp_enqueue_style( 'header', get_stylesheet_directory_uri() . '/css/header.css' );
	wp_enqueue_style( 'footer', get_stylesheet_directory_uri() . '/css/footer.css' );
	wp_enqueue_style( 'solutions', get_stylesheet_directory_uri() . '/css/solutions.css' );
	wp_enqueue_style( 'stylemobile', get_stylesheet_directory_uri() . '/css/style-mobile.css' );
	wp_enqueue_style( 'bsmin', get_stylesheet_directory_uri() . '/css/bootstrap.min.css' );
	wp_enqueue_style( 'bs', get_stylesheet_directory_uri() . '/css/bootstrap.css' );
	wp_enqueue_style( 'animaos', get_stylesheet_directory_uri() . '/animation/aos.css' );
	wp_enqueue_style( 'animmin', get_stylesheet_directory_uri() . '/animation/animate.min.css' );

}
add_action( 'wp_enqueue_scripts', 'register_stylesheets_theme' );

function register_scripts_theme() {

	wp_enqueue_script( 'bsjs', get_template_directory_uri() . '/js/bootstrap.js' );
	wp_enqueue_script( 'jqjs', get_template_directory_uri() . '/js/jquery.min.js' );
	wp_enqueue_script( 'bsminjs', get_template_directory_uri() . '/js/bootstrap.min.js' );
	wp_enqueue_script( 'animaosjs', get_template_directory_uri() . '/animation/aos.js' );
	wp_enqueue_script( 'localjs', get_template_directory_uri() . '/script.js' );
}
add_action( 'wp_enqueue_scripts', 'register_scripts_theme' );
