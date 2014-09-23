var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://alanvillegas:guitarra23@ds063919.mongolab.com:63919/db');
var UserSchema = mongoose.Schema({
	IdUser: {type: String, unique:true},
	FirstName:String,
	LastName:String,
	Email:String,
	Pass:String,
	ActivateCode:String,
	Active:Boolean,
	CurrentProject:String,
	HistoryProject:String,
	ProfileDescription:String,
	UserType:String,
});
		var StudentSchema = mongoose.Schema({
			Grade:String,
			Skills:String,
			Country:String,
			State:String});
		var ReviewsSchema=mongoose.Schema({
			Reviewa:String,
			rate:String});
