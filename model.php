<?php

class Model {

    var $servername = "localhost";
    var $username = "root";
    var $password = "";
    var $dbname = "fastrevise";
    var $conn;

    function connectDB() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $this->conn->query('set character_set_client=utf8');
        $this->conn->query('set character_set_connection=utf8');
        $this->conn->query('set character_set_results=utf8');
        $this->conn->query('set character_set_server=utf8');
    }

    function getAllQuestions($tag) {
        $sql = "SELECT question.content, question.id FROM question 
                JOIN record on question.id = record.id_question 
                JOIN tag on record.id_tag = tag.id and tag.name = \"" . $tag . "\"";
        $result = $this->conn->query($sql);
        return $result;
    }

    function getAllTags() {
        $output = array();
        $sql = "SELECT name FROM tag";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                array_push($output, $row["name"]);
            }
        }
        return $output;
    }

    function getAnswer($id_question) {
        $sql = "SELECT answer FROM question where id=" . $id_question;
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            return $result->fetch_assoc()['answer'];
        } else
            return "";
    }

    function close() {
        $this->conn->close();
    }
}

?>
