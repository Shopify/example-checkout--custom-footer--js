import {extension} from '@shopify/ui-extensions/checkout';

import renderExtension from './Extension.js';

export default extension(
  'purchase.checkout.footer.render-after',
  (root, {shop}) => {
    renderExtension({root, shop});
  }
);
