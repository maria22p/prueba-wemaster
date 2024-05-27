const router = require('express').Router()
const gitHubRepositories = require('../src/GitHubRepositories/infrastructure/routes')
router.use('/git-hub', gitHubRepositories)
module.exports = router;