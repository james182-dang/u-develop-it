const express = require('express');
const router = express.Router();

// Candidate routes
router.use(require('./candidateRoutes'));

// Party routes
router.use(require('./partyRoutes'));

// Voter routes
router.use(require('./voterRoutes'));

module.exports = router;