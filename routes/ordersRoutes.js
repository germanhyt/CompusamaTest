const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app) => {

    /*
    * GET ROUTES
    */
   app.get('/api/GestionarPedido/v1/orders/findByStatus/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByStatus);
   app.get('/api/GestionarPedido/v1/orders/findByClientAndStatus/:id_client/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByClientAndStatus);
   app.get('/api/GestionarPedido/v1/orders/findByDeliveryAndStatus/:id_delivery/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByDeliveryAndStatus);

    /*
    * POST ROUTES
    */
   app.post('/api/RealizarPedido/v1/orders/create', passport.authenticate('jwt', {session: false}), OrdersController.create);

   /*
    * PUT ROUTES
    */

   app.put('/api/GestionarPedido/v1/orders/updateToDispatched', passport.authenticate('jwt', {session: false}), OrdersController.updateToDispatched);
   app.put('/api/GestionarPedido/v1/orders/updateToOnTheWay', passport.authenticate('jwt', {session: false}), OrdersController.updateToOnTheWay);
   app.put('/api/GestionarPedido/v1/orders/updateToDelivered', passport.authenticate('jwt', {session: false}), OrdersController.updateToDelivered);
   app.put('/api/GestionarPedido/v1/orders/updateLatLng', passport.authenticate('jwt', {session: false}), OrdersController.updateLatLng);
}