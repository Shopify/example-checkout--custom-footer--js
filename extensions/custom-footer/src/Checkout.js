import {extension} from '@shopify/ui-extensions/checkout';

import renderExtension from './Extension.js';

// [START custom-footer.ext-point]
export default extension(
  'purchase.checkout.footer.render-after',
  (root, {shop}) => {
    renderExtension({root, shop});
  }
);
// [END custom-footer.ext-point]
