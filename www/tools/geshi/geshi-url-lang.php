<html>
 <head>
  <title>PHP Test</title>
  <link rel="stylesheet" type="text/css" href="geshi-css/vibrant-ink.css" />
  <style>
    li:
  </style>
 </head>
 <body style="margin:0px;padding:0px;background-color:#000;font-family:monospace;color:#555555;">

<?php
//
// Include the GeSHi library
//
include_once 'geshi.php';

//
// Define some source to highlight, a language to use
// and the path to the language files
//
$url = $_GET['url'];
$language = $_GET['lang'];
$source=file_get_contents($url);

$geshi = new GeSHi($source, $language);
$geshi->set_header_type(GESHI_HEADER_DIV);
$geshi->enable_classes();
$geshi->enable_line_numbers(GESHI_FANCY_LINE_NUMBERS,2);
//$geshi->enable_line_numbers(GESHI_NORMAL_LINE_NUMBERS);

$geshi->set_line_style('color:red;background: #111111;', 'background: #000000;');
$geshi->set_tab_width(2);

//
// And echo the result!
//
echo $geshi->parse_code();
?>
 </body>
</html>