const axios = require('axios');
module.exports = async () => {
  const {data: { items }} = await axios.get('https://api.github.com/search/repositories', {
    params: {
      q: 'google',
      sort: 'stars',
      order: 'desc',
      per_page: 10
    }
  })
  if (!items) throw new Error('No se encontraron registros')
  const array = items.map(a => {
    return {
      route: a.html_url,
      name: a.name
    }
  })
  console.log('el array', array)
  return array
}