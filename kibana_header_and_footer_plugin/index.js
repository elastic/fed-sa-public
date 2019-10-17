import { resolve } from 'path';
import { existsSync } from 'fs';


import { i18n } from '@kbn/i18n';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'header_and_footer',
    uiExports: {
      app: {
        title: 'Header And Footer',
        description: 'Adds persistent header and footer with custom content to Kibana',
        main: 'plugins/header_and_footer/app',
      },
      styleSheetPaths: [resolve(__dirname, 'public/app.scss'), resolve(__dirname, 'public/app.css')].find(p => existsSync(p)),
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
        const xpackMainPlugin = server.plugins.xpack_main;
        if (xpackMainPlugin) {
          const featureId = 'header_and_footer';

          xpackMainPlugin.registerFeature({
            id: featureId,
            name: i18n.translate('headerAndFooter.featureRegistry.featureName', {
              defaultMessage: 'header-and-footer',
            }),
            navLinkId: featureId,
            icon: 'questionInCircle',
            app: [featureId, 'kibana'],
            catalogue: [],
            privileges: {
              all: {
                api: [],
                savedObject: {
                  all: [],
                  read: [],
                },
                ui: ['show'],
              },
              read: {
                api: [],
                savedObject: {
                  all: [],
                  read: [],
                },
                ui: ['show'],
              },
            },
          });
        }

    }
  });
}
