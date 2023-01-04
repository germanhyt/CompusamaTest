const ProductsController = require('../controllers/productsController');
const passport = require('passport');

module.exports = (app, upload) => {

    app.get('/api/GestionarInvetario/v1/products/findByCategory/:id_category', passport.authenticate('jwt', {session: false}), ProductsController.findByCategory);


    app.post('/api/GestionarInvetario/v1/products/create', passport.authenticate('jwt', {session: false}), upload.array('image', 3), ProductsController.create);
}