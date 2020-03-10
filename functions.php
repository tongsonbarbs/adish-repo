function register_stylesheets() {


		wp_enqueue_style( 'style', get_stylesheet_uri());
		wp_enqueue_style( 'header', get_stylesheet_directory_uri() . 'css/header.css' );
		wp_enqueue_style( 'footer', get_stylesheet_directory_uri() . 'css/footer.css' );
		wp_enqueue_style( 'solutions', get_stylesheet_directory_uri() . 'css/solutions.css' );
		wp_enqueue_style( 'stylemobile', get_stylesheet_directory_uri() . 'css/style-mobile.css' );
		wp_enqueue_style( 'bsmin', get_stylesheet_directory_uri() . 'css/bootstrap.min.css' );
		wp_enqueue_style( 'bs', get_stylesheet_directory_uri() . 'css/bootstrap.css' );
		wp_enqueue_style( 'animaos', get_stylesheet_directory_uri() . 'animation/aos.css' );
		wp_enqueue_style( 'animmin', get_stylesheet_directory_uri() . 'animation/animate.min.css' );

	}
	add_action( 'wp_enqueue_scripts', 'register_stylesheets' );