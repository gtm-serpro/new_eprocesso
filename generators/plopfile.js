export default function (plop) {
  plop.setGenerator("component", {
    description: "lógica de criação de componente",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do componente?"
      }
    ],

    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/test.tsx.hbs"
      }
    ]
  });
}
