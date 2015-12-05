<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php
//
// Include the GeSHi library
//
include_once 'geshi.php';

//
// Define some source to highlight, a language to use
// and the path to the language files
//

$source = '$foo = 45;
for ( $i = 1; $i < $foo; $i++ )
{
  echo "$foo\n";
  --$foo;
}';
$language = 'php';

//
// Create a GeSHi object
//

$geshi = new GeSHi($source, $language);

$geshi->enable_line_numbers(GESHI_FANCY_LINE_NUMBERS);

$geshi->set_line_style('background: #fcfcfc;', 'background: #f0f0f0;');

//
// And echo the result!
//
echo $geshi->parse_code();
?>
 </body>
</html>