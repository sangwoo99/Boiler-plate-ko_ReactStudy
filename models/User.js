const mongoose = require('mongoose');

//스키마: 원하는 칼럼의 타입,기타 설정등을 한다.
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

//스키마를 만들고 모델로 감싸준다.
const User = mongoose.model('User', userSchema);

module.exports = { User }

