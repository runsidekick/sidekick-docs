import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b24'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '08b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b57'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c81'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '670'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '8f5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4e3'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fe4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '206'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/java',
        component: ComponentCreator('/agents/java', 'bbe'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/java/configuration',
        component: ComponentCreator('/agents/java/configuration', '24c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/java/source-bundling',
        component: ComponentCreator('/agents/java/source-bundling', '301'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/',
        component: ComponentCreator('/agents/node.js/', 'eb8'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/data-redaction',
        component: ComponentCreator('/agents/node.js/data-redaction', '691'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/error-stack-collection',
        component: ComponentCreator('/agents/node.js/error-stack-collection', '7c3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/installation',
        component: ComponentCreator('/agents/node.js/installation', '530'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/installation-1',
        component: ComponentCreator('/agents/node.js/installation-1', '129'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/node.js/troubleshooting',
        component: ComponentCreator('/agents/node.js/troubleshooting', 'f0d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/python/',
        component: ComponentCreator('/agents/python/', '6cb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/python/data-redaction',
        component: ComponentCreator('/agents/python/data-redaction', 'd6d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/python/error-stack-collection',
        component: ComponentCreator('/agents/python/error-stack-collection', 'aaa'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/python/installation',
        component: ComponentCreator('/agents/python/installation', 'e3e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/agents/python/installation-1',
        component: ComponentCreator('/agents/python/installation-1', 'f25'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/contributors-circle/',
        component: ComponentCreator('/contributors-circle/', '3bc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/installation/agents',
        component: ComponentCreator('/installation/agents', 'ed4'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/installation/get-api-key-and-token',
        component: ComponentCreator('/installation/get-api-key-and-token', '67c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/installation/quick-start-to-thundra-sidekick',
        component: ComponentCreator('/installation/quick-start-to-thundra-sidekick', '014'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/installation/signup-with-thundra-sidekick',
        component: ComponentCreator('/installation/signup-with-thundra-sidekick', '6d0'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/cypress-plugin-for-e2e-tests',
        component: ComponentCreator('/integrations/cypress-plugin-for-e2e-tests', '7ec'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/grafana-plugin-for-remote-controlling-sidekick-actions',
        component: ComponentCreator('/integrations/grafana-plugin-for-remote-controlling-sidekick-actions', 'd09'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations',
        component: ComponentCreator('/integrations/integrations', '97f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/coralogix-integration',
        component: ComponentCreator('/integrations/integrations/coralogix-integration', '34b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/elasticsearch-integration',
        component: ComponentCreator('/integrations/integrations/elasticsearch-integration', '5bc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/logz.io-integration',
        component: ComponentCreator('/integrations/integrations/logz.io-integration', '5d5'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/loki-integration',
        component: ComponentCreator('/integrations/integrations/loki-integration', '275'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/new-relic-integration',
        component: ComponentCreator('/integrations/integrations/new-relic-integration', '42f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/slack-integration',
        component: ComponentCreator('/integrations/integrations/slack-integration', '759'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/solarwinds-loggly-integration',
        component: ComponentCreator('/integrations/integrations/solarwinds-loggly-integration', '54f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/sumo-logic-integration',
        component: ComponentCreator('/integrations/integrations/sumo-logic-integration', '261'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/integrations/webhook-integration',
        component: ComponentCreator('/integrations/integrations/webhook-integration', '4e5'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/node.js-client',
        component: ComponentCreator('/integrations/node.js-client', '08c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/open-telemetry-tracing-integration',
        component: ComponentCreator('/integrations/open-telemetry-tracing-integration', 'b35'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/rest-api',
        component: ComponentCreator('/integrations/rest-api', 'c7e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/thundra-apm-tracing-integration',
        component: ComponentCreator('/integrations/thundra-apm-tracing-integration', '324'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/master',
        component: ComponentCreator('/master', 'e87'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/open-source/agent-settings',
        component: ComponentCreator('/open-source/agent-settings', 'c29'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/open-source/client-settings',
        component: ComponentCreator('/open-source/client-settings', '131'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/open-source/quick-start',
        component: ComponentCreator('/open-source/quick-start', 'a78'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/',
        component: ComponentCreator('/plugins/intellij-idea-plugin/', '085'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/common-errors',
        component: ComponentCreator('/plugins/intellij-idea-plugin/common-errors', 'b58'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/getting-started',
        component: ComponentCreator('/plugins/intellij-idea-plugin/getting-started', '585'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/login',
        component: ComponentCreator('/plugins/intellij-idea-plugin/login', '4a7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/self-hosted-settings',
        component: ComponentCreator('/plugins/intellij-idea-plugin/self-hosted-settings', 'dd4'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoint-events/',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoint-events/', '309'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoint-events/tracepoint-event-detail',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoint-events/tracepoint-event-detail', 'f23'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/', 'c00'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/conditional-tracepoints',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/conditional-tracepoints', 'c16'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/distributed-tracing-integration',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/distributed-tracing-integration', '3a2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/edit-tracepoint',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/edit-tracepoint', '28a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/enable-disable-tracepoint',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/enable-disable-tracepoint', '031'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/expiration-settings',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/expiration-settings', '728'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/remove-tracepoint',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/remove-tracepoint', '8be'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/intellij-idea-plugin/tracepoints/set-tracepoint',
        component: ComponentCreator('/plugins/intellij-idea-plugin/tracepoints/set-tracepoint', '9b0'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/pycharm-plugin-python',
        component: ComponentCreator('/plugins/pycharm-plugin-python', '5f2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/', 'e97'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/enable-disable-collaborative-debugging',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/enable-disable-collaborative-debugging', '466'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/import-source-code',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/import-source-code', '25b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/remote-config',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/remote-config', '9a2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/set-tracepoints',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/set-tracepoints', '192'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/take-snapshots-aka-tracepoint-events',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/take-snapshots-aka-tracepoint-events', '26a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/how-to/use-tracemap-for-debugging',
        component: ComponentCreator('/plugins/sidekick-web-ide/how-to/use-tracemap-for-debugging', 'fd8'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/introduction/apps-and-tracepoints-panel',
        component: ComponentCreator('/plugins/sidekick-web-ide/introduction/apps-and-tracepoints-panel', '04c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/introduction/code-panel',
        component: ComponentCreator('/plugins/sidekick-web-ide/introduction/code-panel', 'ef9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/introduction/events-panel',
        component: ComponentCreator('/plugins/sidekick-web-ide/introduction/events-panel', 'e35'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/introduction/source-panel',
        component: ComponentCreator('/plugins/sidekick-web-ide/introduction/source-panel', '86e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/sidekick-web-ide/quick-start-todo-app',
        component: ComponentCreator('/plugins/sidekick-web-ide/quick-start-todo-app', '768'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/', 'b0e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/browsing-tracepoint-events',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/browsing-tracepoint-events', 'd83'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/common-problems',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/common-problems', 'a22'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/login-and-on-boarding',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/login-and-on-boarding', '69e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/select-workspace-and-application',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/select-workspace-and-application', '587'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/self-hosted-settings',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/self-hosted-settings', 'bce'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/set-up-vscode-extension',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/set-up-vscode-extension', '964'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/', 'a95'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/conditional-tracepoints',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/conditional-tracepoints', '921'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/edit-tracepoint',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/edit-tracepoint', '322'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/enable-disable-tracepoint',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/enable-disable-tracepoint', '130'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/expiration-settings',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/expiration-settings', '16d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/remove-tracepoint',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/remove-tracepoint', 'c24'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/set-tracepoint',
        component: ComponentCreator('/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints/set-tracepoint', 'fcb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/plugins/webstorm-plugin-node.js',
        component: ComponentCreator('/plugins/webstorm-plugin-node.js', '9cb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/reference/conditional-tracepoints',
        component: ComponentCreator('/reference/conditional-tracepoints', 'e37'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/reference/faq',
        component: ComponentCreator('/reference/faq', '881'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/reference/logpoint-expressions',
        component: ComponentCreator('/reference/logpoint-expressions', '9f6'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/sidekick-actions/error-stack-collection',
        component: ComponentCreator('/sidekick-actions/error-stack-collection', '115'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/sidekick-actions/logpoint',
        component: ComponentCreator('/sidekick-actions/logpoint', '3f3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/sidekick-actions/reference-events-and-probe-tags',
        component: ComponentCreator('/sidekick-actions/reference-events-and-probe-tags', '345'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/sidekick-actions/tracepoint',
        component: ComponentCreator('/sidekick-actions/tracepoint', '6e5'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases',
        component: ComponentCreator('/use-cases', 'df2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/conditional-stack-and-log-collection',
        component: ComponentCreator('/use-cases/conditional-stack-and-log-collection', '333'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/cut-monitoring-costs-with-dynamic-logging',
        component: ComponentCreator('/use-cases/cut-monitoring-costs-with-dynamic-logging', '463'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/developer-on-boarding',
        component: ComponentCreator('/use-cases/developer-on-boarding', 'd91'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/dynamic-logging',
        component: ComponentCreator('/use-cases/dynamic-logging', '975'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/error-stack-collection-and-stack-based-backend-tests-in-e2e-tests',
        component: ComponentCreator('/use-cases/error-stack-collection-and-stack-based-backend-tests-in-e2e-tests', '235'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/identifying-stack-changes-and-stack-comparison',
        component: ComponentCreator('/use-cases/identifying-stack-changes-and-stack-comparison', 'f1e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/pinpointing-causes-of-errors',
        component: ComponentCreator('/use-cases/pinpointing-causes-of-errors', '4e9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/production-debugging',
        component: ComponentCreator('/use-cases/production-debugging', '56b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/remote-debugging-kubernetes-cluster-pods-and-containers',
        component: ComponentCreator('/use-cases/remote-debugging-kubernetes-cluster-pods-and-containers', '03b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/use-cases/using-trace-data-to-find-root-cause-of-an-error',
        component: ComponentCreator('/use-cases/using-trace-data-to-find-root-cause-of-an-error', '523'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/web-application/introduction',
        component: ComponentCreator('/web-application/introduction', '887'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
