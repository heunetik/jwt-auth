let jwt = require('jsonwebtoken');
let config = require('./config');

module.exports = {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;

        let mock = {
            username: 'admin',
            password: 'password'
        }

        if (username && password) {
            if (username === mock.username && password === mock.password) {
                let token = jwt.sign(
                    { username: username },
                    config.secret,
                    { expiresIn: '24h' }
                );

                res.json({
                    username: username,
                    token: token
                });
            } else {
                res.status(403).send({
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.status(400).send({
                message: 'Authentication failed! Please check the request'
            });
        }
    },
    index(req, res) {
        res.json({
            success: true,
            message: 'Home'
        });
    }
}