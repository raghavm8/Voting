const router = require('express').Router(); 
const handle = require('../handler');

router.post('./login');
router.post('./register',handler.register);

module.exports=router;