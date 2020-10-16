//코드 빌드 순서
//1. = 을 중심으로 오른쪽에서 왼쪽으로 대입
//2. () 함수들의 모음
//3. 함수 호출은 .으로 표시
//4. , 는 "그리고"라고 해

const express = require("express")
const app = express()

const PORT = 5000;

app.listen(PORT, console.log('server connected'));