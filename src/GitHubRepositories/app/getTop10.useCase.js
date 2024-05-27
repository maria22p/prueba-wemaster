module.exports = async (repository) => {
  const data = await repository()
  return data
}