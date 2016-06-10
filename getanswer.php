<?php

include_once './model.php';

$id_question = $_GET['id_question'];

$model = new Model;
$model->connectDB();
$answer = $model->getAnswer($id_question);

echo "<p class=\"answer\">" . $answer . "</p>";
$model->close();
?>