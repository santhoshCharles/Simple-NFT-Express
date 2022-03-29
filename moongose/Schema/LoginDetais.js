const mongose = require("mongoose");

const loginDetailSchema = mongose.Schema({
    email: {type: String, unique: true},
    password: String
})

const LoginDetailsModel = mongose.model("Login", loginDetailSchema);

const adminUserDetailSchema = mongose.Schema({
    firstName: { type: String, required: true},
    lastName: String,
    mobileNumber: { type: Number, required: true },
    type: { type: String, enum: ["admin", "author", "user"]},
    email: { type: String, required: true, unique: true},
})

const AdminUserDetailModel = mongose.model("AdminUserDetail", adminUserDetailSchema);

module.exports = {
    LoginDetailsModel: LoginDetailsModel,
    AdminUserDetailModel: AdminUserDetailModel
};