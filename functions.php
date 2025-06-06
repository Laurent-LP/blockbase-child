<?php
/**
 * Charge le style du thème parent (Blockbase)
 */
add_action('wp_enqueue_scripts', function() {
    // On charge le style du parent en priorité
    wp_enqueue_style(
        'blockbase-parent-style',
        get_template_directory_uri() . '/style.css'
    );
});
