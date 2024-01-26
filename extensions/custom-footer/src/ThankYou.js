import {extension} from '@shopify/ui-extensions/checkout';

import renderExtension from './Extension.js';

export default extension(
  'purchase.thank-you.footer.render-after',
  (root, {shop}) => {
    renderExtension({root, shop});
  }
);
