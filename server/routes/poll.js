const router = require('express').Router();
const handle = require('../handler');
const auth = require('../middleware/auth');

router.route('/').get(handle.showPoll); // get everything
router.route('/').post(auth,handle.createPoll); // add a new poll

router.get('/user',auth,handle.usersPolls);

router.route('/:id').get(handle.getPoll);
router.route('/:id').post(auth,handle.vote)
router.route('/:id').delete(auth, handle.deletePoll);

module.exports = router