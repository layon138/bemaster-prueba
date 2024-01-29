const { Router } = require('express');
const router = Router();

const { getRepositoryListByGoogle } = require('../controllers/github.controller');



router.get('/repository/list', getRepositoryListByGoogle);


module.exports = router;