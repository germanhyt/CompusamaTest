const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/GestionarUsers/v1/users/getAll', UsersController.getAll);
    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), UsersController.findDeliveryMen);

    // GUARDAR DATOS
    app.post('/api/GestionarUsers/v1/users/create', UsersController.register);
    app.post('/api/GestionarUsers/v1/users/login', UsersController.login);

    // ACTUALIZAR DATOS
    // 401 UNAUTHORIZED

    app.put('/api/GestionarUsers/v1/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.update);
    app.put('/api/GestionarUsers/v1/users/updateWithoutImage', passport.authenticate('jwt', {session: false}), UsersController.updateWithoutImage);
    app.put('/api/GestionarUsers/v1/users/updateNotificationToken', passport.authenticate('jwt', {session: false}), UsersController.updateNotificationToken);
}