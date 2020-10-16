//코드 빌드 순서
//1. = 을 중심으로 오른쪽에서 왼쪽으로 대입
//2. () 함수들의 모음
//3. 함수 호출은 .으로 표시
//4. , 는 "그리고"라고 해


//request => 클릭, 마우스의 행동, 도메인
//response => 서버에서 무엇을 내 보낼지 정


const express = require("express")
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')

//middleware 설정
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//routing 설정
app.use('/product', productRoute);
app.use('/order', orderRoute)

// app.use((req, res) => {
//     res.json( {
//         message: "rest api server start"
//     })
// })



const PORT = 5000;

app.listen(PORT, console.log('server connected'));