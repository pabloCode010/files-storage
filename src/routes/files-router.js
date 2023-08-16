const { Router } = require('express');
const router = Router();

router.post("/upload", require("../controllers/upload"));
router.get("/download", require("../controllers/download"));
router.get("/ls", require("../controllers/list-files"));

module.exports = router;