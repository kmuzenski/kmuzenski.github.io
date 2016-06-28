<?php
require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

define("CONSUMER_KEY",    "Pm0OoEbrP00cjJsgGhFtnv8ES");
define("CONSUMER_SECRET", "sD0ffwvWmEeFU6KHvXVlxOazIgICgWwxzWb4hKxPA1WTqL3I7e");
$access_token = "738509656247668736-abFyHNW7zCgrGquLhdavrlBdMYaWGtY";
$access_token_secret = "HUsR4g0m6hqQwSVhv5QNsnV2Y0DufZQhinLqXdUn9OUlR";

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token, $access_token_secret);
$statuses = $connection->get("statuses/home_timeline", ["count" => 25, "exclude_replies" => true]);
print_r($statuses);