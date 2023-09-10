const { Router } = require('express');
const router = Router();

router.post("/upload", require("../controllers/actions/upload"));
router.get("/download", require("../controllers/actions/download"));
router.get("/ls", require("../controllers/actions/list-files"));

module.exports = router;