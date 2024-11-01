=== Simple Multiple Choice Quiz ===
Contributors: jethin
Tags: quiz, blocks
Requires at least: 6.0
Tested up to: 6.6.1
Stable tag: 1.0
Requires PHP: 8.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A simple, interactive, block-based multiple choice quiz component.

== Description ==

Create simple, interactive, block-based multiple choice quizzes. Example quiz: [Plastics 101](https://news.climate.columbia.edu/2024/04/11/quiz-plastics-101/).

= Post Set Up =

1. Add the required "quiz" tag to a post. Create the "quiz" tag if it doesn't exist.
1. Save the post.
1. Refresh the post edit page to load the SMC Quiz block template and block styles.

= Create a Quiz =

1. Insert a new "SMC Quiz" block into your post. The "SMC Quiz" block provides a basic quiz template.

Each quiz question is a child group block within the "SMC Quiz" root block. Each question group block must contain at least two blocks:

1. A heading (h2-h4) that contains the question text.
1. A list block with list items for each multiple choice answer. The "Correct" block style must be selected for the correct list item answer. There can only be a single correct answer for each question.

= Optional Quiz Blocks =

Each question block can also contain an answer block. The answer block contains additional information that is shown after the question has been answered. The answer block can be a simple paragraph or a group block.

Similarly, the "SMC Quiz" root block can contain a post-quiz block as it's last block. The post-quiz block displays additional information that is shown once the quiz is completed. Like answer blocks, the post-quiz block can be a simple paragraph or a group block. Important: The "Post SMC Quiz" block style must be selected for the post-quiz block.

= Populate and Preview =

Duplicate and edit existing question groups to populate your quiz, or add new question groups. Preview your post to view and test quiz functionality.

= Default Quiz Behavior =

After each question is answered, a "Correct!" or "Incorrect! The correct answer is..." text will be displayed. This text will be prepended to the question's answer block if it exists.

A final score will be shown at the bottom of the quiz once it is completed. The final score text is:

"You answered X of X questions correctly for a score of XX%. [SCORE EXCLAMATION!]"

The score text will be prepended to the post-quiz block if it exists.

A "quiz" event will attempt to be sent to the website's Google Analytics account once the quiz is completed. This quiz event includes a single "score" parameter.

= Notes =

Only a single quiz can appear in a post.

Simple Multiple Choice Quiz is intended for entertainment purposes only, and answers can be viewed with minimal effort. Do not use the SMC Quiz component in test settings meant to evaluate students.

= Support =

Limited support is available for this plugin. When possible, plugin users are encouraged to provide basic support for other users.

= Source =

The uncompressed source code (JavaScript and CSS) can be found in the plugin's ./src directory.

== Screenshots ==

1. A quiz preview in modified Twenty Twenty-Three theme.
2. The List View showing a basic quiz structure while editing a post. The quiz root block is highlighted.
3. The Settings Panel for a group block showing the SMC Quiz block styles. The root "SMC Quiz" style is selected.

== Frequently Asked Questions ==

== Changelog ==

= 1.0 =
* Initial launch.

== Upgrade Notice ==
