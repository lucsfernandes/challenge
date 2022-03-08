const connection = require('../database/connection');
const shortid = require('shortid');

module.exports = {
  async create(request, response) {
    const id = shortid.generate()
    const { url } = request.body;
    
    const encoded = 'localhost:3333/' + id
    
    await connection('urls').insert({
      shortid: encoded,
      href: url,
    })
    .then(r => {
      return response.json({
        id: r[0],
        url: encoded
      });
    })
  },

  async shorted(request, response) {
    const { url } = request.body;
    await connection('urls')
    .select('href')
    .where({
      shortid: url,
    })
    .then(r => {
      const href = r[0].href;
      return response.json({
        url: href
      });
    })
    .catch((err) => {
      console.log(err);
      return response.status(404).json({ error: 'Dados não encontrado'});
    })
  }

}