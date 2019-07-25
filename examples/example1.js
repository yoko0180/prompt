const prompt = require('../index')
const faker = require('faker')

prompt({
  msg: 'Select a item', 
  src: [...Array(10)].map(() => faker.name.title()) // or somePromise()
})
.then(selected => {
  console.log(selected)
})
