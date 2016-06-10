<html>
    <head>
        <meta charset="UTF-8">
        <title>Fast Revise</title>
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arvo">
        <link href="index.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    </head>

    <body>
        <?php
        include './model.php';
        $model = new Model;
        $model->connectDB();
        ?>

        <div id="tags-area">
            <?php
            $tags = $model->getAllTags();
            foreach ($tags as $value)
                echo '<p class="one-tag">' . $value . '</p>';
            ?>
        </div>

        <div id="questions-area"> </div>
        <span id="separator"></span>
        <div id = "answer-area"> </div>

        <?php $model->close(); ?>

        <script src="index.js" type="text/javascript"></script>
        <script src="resize.js" type="text/javascript"></script>
    </body>
</html>
