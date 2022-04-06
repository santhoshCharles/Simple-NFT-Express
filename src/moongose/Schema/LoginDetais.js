const mongose = require("mongoose");
const SchemaName = require("../properties");
const LOGIN_DETAILS_MODEL = SchemaName.LOGIN_DETAILS_MODEL;
const ADMIN_DETAILS_MODEL = SchemaName.ADMIN_DETAILS_MODEL;
const AUTHOR_USER_DETAILS = SchemaName.AUTHOR_USER_DETAILS;
const VISITOR_DETAILS = SchemaName.VISITOR_DETAILS;

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
    updated: { type: Date, default: Date.now }
})

const authorDetailsSchema = mongose.Schema({
    userName: { type: String, required: true, unique: true},
    genres: Array,
    bio: String,
    walletAddress: String
})

const visitorDetailsSchema = mongose.Schema({
    email: { type: String, unique: true },
    walletAddress: String
})

const AdminUserDetailModel = mongose.model(ADMIN_DETAILS_MODEL, adminUserDetailSchema);
const AuthorDetailsModel = AdminUserDetailModel.discriminator(AUTHOR_USER_DETAILS, authorDetailsSchema);
const VisitorDetailsModel = mongose.model(VISITOR_DETAILS, visitorDetailsSchema);

module.exports = {
    LoginDetailsModel: LoginDetailsModel,
    AdminUserDetailModel: AdminUserDetailModel,
    AuthorDetailsModel: AuthorDetailsModel,
    VisitorDetailsModel: VisitorDetailsModel
};