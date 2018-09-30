module.exports = (sequelize, Sequelize) => {
	
	var User = sequelize.define('user', {
		
		username: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		email: {
			type: Sequelize.STRING,
			notEmpty: true,
			validate: {
				isEmail: true
			}
		},
		hashed_password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		bio: {
			type: Sequelize.TEXT
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		},
		reset_password_token: {
			type: Sequelize.STRING,
		},
		reset_password_expires: {
			type: Sequelize.STRING,
		}
	});
	
	return User;
}