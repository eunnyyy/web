<?php

    header("Pragma: no-cache");
    //이 두줄의 코드는 웹 브라우저에세 응답 내용을 캐시로 남기지 말라는

    header("Cache-Control: no-cache, must-revalidate");
    //의미를 전달하는 응답헤더

    header("Content-Type: trxt/plain");
    $current = date("Y-m-d H:i:s");
    echo("현재 서버 시간은 ".$current."입니다.");
?>