import inquirer, { QuestionCollection } from 'inquirer';
inquirer.registerPrompt(
  'autocomplete',
  require('inquirer-autocomplete-prompt')
);

export function promptAutocomplete({
  message,
  src,
}: {
  message: string;
  src: any[];
}): Promise<string> {
  return inquirer
    .prompt([
      {
        type: 'autocomplete',
        name: 'selected',
        message,
        source: function (answers: any, input: any) {
          input = input || '';
          return Promise.resolve(src).then((result) =>
            result
              .map((a) => '' + a)
              .filter((a) => a.toLowerCase().indexOf(input) !== -1)
          );
        },
      },
    ])
    .then((answers) => answers.selected);
}

type ConfirmOption = {
  message: string;
  defaultValue?: boolean;
};

export function promptConfirm({
  message,
  defaultValue = true,
}: ConfirmOption): Promise<boolean> {
  return inquirer
    .prompt<{ confirmKey: boolean }>([
      {
        type: 'confirm',
        name: 'confirmKey',
        message,
        default: defaultValue,
      },
    ])
    .then((answers) => {
      if (answers.confirmKey) {
        return true;
      } else {
        return false;
      }
    });
}

export async function promptInput(message: string): Promise<string> {
  const answer = await inquirer.prompt({
    message,
    type: 'input',
    name: 'name',
  });
  return answer.name;
}
