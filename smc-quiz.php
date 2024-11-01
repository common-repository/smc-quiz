<?php
/**
 * Plugin Name:       Simple Multiple Choice Quiz
 * Description:       A simple, interactive, block-based multiple choice quiz component.
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Version:           1.0
 * Author:            jethin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       smc-quiz
 */


function smcq_block_styles() {
    if( has_tag('quiz') ){

        $dependencies = array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' );

        wp_register_script( 'smcq-block-variations', plugins_url() . '/smc-quiz/block-variations.js', $dependencies, '1' );
        wp_enqueue_script('smcq-block-variations');

        wp_register_script( 'smcq-block-styles', plugins_url() . '/smc-quiz/block-styles.js', $dependencies, '1' );
        wp_enqueue_script('smcq-block-styles');

        /* wp_register_script( 'smcq-block-filters', plugins_url() . '/smc-quiz/block-filters.js', $dependencies, '1' );
        wp_enqueue_script('smcq-block-filters'); */

        wp_enqueue_style( 'smc-quiz', plugins_url() . '/smc-quiz/style-editor.css', array(), '1', 'screen' );

    }
}
add_action( 'enqueue_block_editor_assets', 'smcq_block_styles' );

function smcq_quiz_script() {
    if( has_tag('quiz') ){

        wp_register_script( 'smc-quiz', plugins_url() . '/smc-quiz/script.min.js', array(), '1', array('strategy'  => 'defer') );
        wp_enqueue_script('smc-quiz');

        /* DEVELOPMENT */
        /* wp_register_style( 'smc-quiz', plugins_url() . '/smc-quiz/src/style.css', array(), '1' );
        wp_enqueue_style( 'smc-quiz' );
        wp_register_script( 'smc-quiz', plugins_url() . '/smc-quiz/src/script.js', array(), '1', array('strategy'  => 'defer') );
        wp_enqueue_script('smc-quiz'); */

    }
}
add_action( 'wp_enqueue_scripts', 'smcq_quiz_script');

// added to fix bug that isActive is not triggered on group block variation
function smcq_group_replace_class($block_content){
    if( is_single() && str_contains($block_content, 'is-style-smc-quiz') ){
        // '/class="wp-block-group is-style-smc-quiz[^"]*/' // more specific pattern
        $block_content = preg_replace('/class="[^"]*/', 'class="wp-block-group is-style-smc-quiz is-layout-flow wp-block-group-is-layout-flow', $block_content, 1);
    }
    return $block_content;
}
// add_filter( 'render_block_core/group', 'smcq_group_replace_class', 10, 1 );

