<?php

$route = new AltoRouter;

$route->map('GET', '/about', '', 'about us');

$match = $route->match();


if ($match) {
    echo "About us page";
} else {
    header('404', 'Error: page not found');
    echo "Page not found";
}

var_dump($match);