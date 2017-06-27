exports = module.exports = function(app, mongoose) {

/*	var warlockSchema = new mongoose.Schema({
    username: 		{ type: String },
    password: 		{ type: String },
		name: 		{ type: String },
    birthDate: 	{ type: String },
		lastName: 	{ type: String },
		school:  	{ type: String },
		gender:            { type: String, enum: ['Male', 'Female'] },
		health: 	{ type: Number },
		magic: 		{ type: Number },
		strength: 	{ type: Number }
	});

	mongoose.model('warlocks', warlockSchema);*/

	var userSchema = new mongoose.Schema({
    username: 		{ type: String },
    password: 		{ type: String }		
	});

	mongoose.model('user', userSchema);

};

