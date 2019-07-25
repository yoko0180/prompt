const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

module.exports = ({message, src}) => {

  return inquirer.prompt([{
    type: 'autocomplete',
    name: 'selected',
    message,
    source: function (answers, input) {
      input = input || '';
      return Promise.resolve(src)
      .then( 
        result => result.map(a => '' + a).filter( a => a.toLowerCase().indexOf(input) !== -1 ) 
        )
    }
    
  }])
  .then( answers => answers.selected)

}