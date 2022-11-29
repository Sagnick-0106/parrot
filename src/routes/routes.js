const { Router } = require('express');

const router = Router();

router.get('/ping', (_, res) => res.send('pong'));

module.exports = router;

