var express = require("express");
var mongoose = require("mongoose");
var conn = require('./conexion.js')
conn.configure(function()){
	db.User.insert({FirstName:"alan",LastName:"villegas",
	Email:"eralan23@gmail.com",Pass:"asdad",ActivateCode:"kjhgfvbjk",
	Active:"false",CurrentProject:"applight",HistoryProject:"applight",
	ProfileDescription:"worker and aplied",UserType:"student",
	student :{Grade:"6",Skills:"utzac",Country:"mexico",
	State:"zacatecas"},Reviews:{Reviewa:"dude",rate:"1"}})
	
};