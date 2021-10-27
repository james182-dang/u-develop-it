const express = require('express');
const router = express.Router();

// Candidate routes
router.use(require('./candidateRoutes'));

// Party routes
router.use(require('./partyRoutes'));

module.exports = router;