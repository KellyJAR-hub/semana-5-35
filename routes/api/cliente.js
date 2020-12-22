const routerx = require('express-promise-router');

const ClienteController = require('../../controllers/ClienteController');

const router = routerx();

router.post('/add', ClienteController.add);
router.get('/list', ClienteController.list);

module.exports = router;