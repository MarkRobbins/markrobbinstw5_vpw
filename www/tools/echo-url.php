<?php
    header('Content-type: text/plain');
    $url = $_GET['url'];
    echo file_get_contents($url);
?>