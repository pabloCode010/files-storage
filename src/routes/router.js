const { Router } = require('express');
const router = Router();

router.get("/is-alive", (req, res) => res.send(true));

module.exports = router;