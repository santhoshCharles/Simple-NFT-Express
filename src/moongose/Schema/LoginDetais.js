const mongose = require("mongoose");
const LOGIN_DETAILS_MODEL = require("../properties").LOGIN_DETAILS_MODEL;
const ADMIN_DETAILS_MODEL = require("../properties").ADMIN_DETAILS_MODEL;

const loginDetailSchema = mongose.Schema({
    email: {type: String, unique: true},
    password: String
})

const LoginDetailsModel = mongose.model(LOGIN_DETAILS_MODEL, loginDetailSchema);

const adminUserDetailSchema = mongose.Schema({
    firstName: { type: String, required: true},
    lastName: String,
    mobileNumber: { type: Number, required: true },
    type: { type: String, enum: ["admin", "author", "user"]},
    email: { type: String, required: true, unique: true},
})

const AdminUserDetailModel = mongose.model(ADMIN_DETAILS_MODEL, adminUserDetailSchema);

module.exports = {
    LoginDetailsModel: LoginDetailsModel,
    AdminUserDetailModel: AdminUserDetailModel
};