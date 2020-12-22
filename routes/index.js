const routerx = require('express-promise-router');

const apiRouterArticulo  = require('./api/articulo');
const apiRouterUsuario   = require('./api/usuario')
const apiRouterCategoria = require('./api/categoria')
const apiRouterCliente = require('./api/cliente')

const router = routerx();

router.use('/articulo', apiRouterArticulo);
router.use('/categoria', apiRouterCategoria);
router.use('/usuario', apiRouterUsuario);
router.use('/cliente', apiRouterCliente);

module.exports = router;