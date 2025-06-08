<?php

/**
 * Charge le style du thème parent (Blockbase)
 */
add_action('wp_enqueue_scripts', function () {
  // Parent
  wp_enqueue_style(
    'blockbase-parent-style',
    get_template_directory_uri() . '/style.css'
  );

  // Fichiers React/Tailwind en prod
  if (is_page_template('page-carte-cadeau-photo.php')) {
    $dir = get_stylesheet_directory();
    $uri = get_stylesheet_directory_uri();

    if (file_exists("$dir/build/carteCadeau.bundle.css")) {
      wp_enqueue_style(
        'ccphoto-css',
        "$uri/build/carteCadeau.bundle.css",
        [],
        filemtime("$dir/build/carteCadeau.bundle.css")
      );
    }

    if (file_exists("$dir/build/carteCadeau.bundle.js")) {
      wp_enqueue_script(
        'ccphoto-js',
        "$uri/build/carteCadeau.bundle.js",
        ['wp-element'],
        filemtime("$dir/build/carteCadeau.bundle.js"),
        true
      );
    }
  }
});
