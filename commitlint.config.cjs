const Configuration = {
  defaultIgnores: true,
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  helpUrl: 'https://gov.br/ds/wiki/git-gitlab/guias/commit/',
  ignores: [
    (commit) => {
      return commit === ''
    },
  ],
  prompt: {
    messages: {
      emptyWarning: 'não pode ser em branco',
      lowerLimitWarning: 'abaixo do limite',
      max: 'Máximo de %d chars',
      min: 'Mínimo de %d chars',
      skip: '[opcional]',
      upperLimitWarning: 'acima do limite',
    },
    questions: {
      body: {
        description: 'Fornecer uma descrição mais longa da mudança',
      },
      breaking: {
        description: 'Descreva as breaking changes',
      },
      breakingBody: {
        description:
          'Um commit com BREAKING CHANGE requer uma descrição detalhada (body). Por favor, insira uma descrição mais longa do commit',
      },
      isBreaking: {
        description: 'Existe alguma breaking change?',
      },
      isIssueAffected: {
        description: 'Esse commit afeta qualquer issue aberta?',
      },
      issues: {
        description:
          'Adicione a(s) referência(s) para a(s) issue(s) (e.g. "fix #123", "docs #123".)',
      },
      issuesBody: {
        description:
          'Um commit com que fecha issue(s) requer uma descrição detalhada (body). Por favor, insira uma descrição mais longa do commit',
      },
      scope: {
        description:
          'Qual é o escopo dessa mudança? (e.g. componente ou nome do arquivo)',
      },
      subject: {
        description: 'Escreva uma descrição breve e imperativa da mudança',
      },
      type: {
        description: 'Selecione o tipo da mudança que está enviando:',
        enum: {
          build: {
            description:
              'Mudanças que afetam o sistema de build ou dependências externas (exemplo de escopos: gulp, broccoli, npm)',
            emoji: '🛠',
            title: 'Builds',
          },
          chore: {
            description:
              'Outras alterações que não modificam arquivos SRC ou de teste',
            emoji: '♻️',
            title: 'Tarefas',
          },
          ci: {
            description:
              'Alterações nos nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, Gitlab, BrowserStack, SauceLabs)',
            emoji: '⚙️',
            title: 'Integrações contínuas',
          },
          docs: {
            description: 'Apenas documentação',
            emoji: '📚',
            title: 'Documentação',
          },
          feat: {
            description: 'Uma nova funcionalidade',
            emoji: '✨',
            title: 'Funcionalidade',
          },
          fix: {
            description: 'Correções de bugs',
            emoji: '🐛',
            title: 'Correções de bugs',
          },
          perf: {
            description: 'Uma mudança de código que melhora o desempenho',
            emoji: '🚀',
            title: 'Melhorias de desempenho',
          },
          refactor: {
            description:
              'Uma mudança de código que nem corrige um bug nem adiciona um recurso',
            emoji: '📦',
            title: 'Refatoração de código',
          },
          revert: {
            description: 'Reverte um commit anterior',
            emoji: '🗑',
            title: 'Reverte',
          },
          style: {
            description:
              'Mudanças que não afetam o significado do código (espaços, formatação, semi-vírgulas ausentes, etc)',
            emoji: '💎',
            title: 'Estilos',
          },
          test: {
            description: 'Adiciona ou corrige testes',
            emoji: '🚨',
            title: 'Testes',
          },
          wip: {
            description: 'Trabalho ainda não finalizado',
            emoji: '🚧',
            title: 'WIP',
          },
        },
      },
    },
  },
  rules: {
    'header-max-length': [1, 'always', 72],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'wip',
      ],
    ],
  },
}

module.exports = Configuration
