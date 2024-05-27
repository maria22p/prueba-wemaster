const useCase = require('../../app/getTop10.useCase')
const repository = require('../repositories/getTop10.repository')
module.exports = async (req, res, next) => {
  try {
    const response = await useCase(repository)
    res.json(response)
  } catch (error) {
    next(error)
  }
}