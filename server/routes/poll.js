const router = require('express').Router();
const handle = require('../handler');
const auth = require('../middleware/auth');

router.route('/').get(handle.showPoll); // get everything
router.route('/').post(auth,handle.createPoll); // add a new poll
router.get()

module.exports = router