<?php

include_once './model.php';

$tag = $_GET['tag'];
$model = new Model;
$model->connectDB();
$result = $model->getAllQuestions($tag);

$oddRow = 0;
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $oddRow++;
        if ($oddRow % 2 == 0)
            echo '<p class="one-question">' . $row['content'] . hideGenerate($row['id']) . '</p>';
        else
            echo '<p class="one-question row-style-1">' . $row['content'] . hideGenerate($row['id']) . '</p>';
    }
}
$model->close();

function hideGenerate($data) {
    return "<span hidden>" . $data . "</span>";
}

?>