<?php
$uid = $_POST['userid'];
$pw = $_POST['password'];

if ($uid == 'abbas' and $pw == 'toor') {
    session_start();
    $_SESSION['sid'] = session_id();
    echo "Logged in successfully";
}
?>