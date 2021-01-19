const { serializeComponent } = require('./utils');

module.exports = {
  // React fragment
  [null]: {
    serialize: serializeComponent,
  },
  Button: {
    serialize: serializeComponent,
  },
  ButtonLink: {
    serialize: serializeComponent,
  },
  Callout: {
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  Collapser: {
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  CollapserGroup: {
    serialize: serializeComponent,
  },
  ExternalLink: {
    serialize: serializeComponent,
  },
  Link: {
    serialize: serializeComponent,
  },
  Icon: {
    serialize: serializeComponent,
  },
  Table: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'table',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  LandingPageTile: {
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  LandingPageTileGrid: {
    serialize: serializeComponent,
  },
  InlineCode: {
    serialize: (h, node) =>
      serializeComponent(h, node, { tagName: 'code', wrapChildren: false }),
  },
  Video: {
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  thead: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'thead',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tbody: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tbody',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tr: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tr',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  th: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'th',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  td: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'td',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
};
