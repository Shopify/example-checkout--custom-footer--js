import {
  Icon,
  InlineLayout,
  InlineStack,
  Link,
  Text,
} from '@shopify/ui-extensions/checkout';

export default function renderExtension({root, shop}) {
  const {storefrontUrl} = shop;

  // In case this is a re-render, then remove all previous children
  for (const child of root.children) {
    root.removeChild(child);
  }

  // Create the left footer column with links to storefront
  const leftColumn = root.createComponent(
    InlineStack,
    {
      spacing: 'extraTight',
      blockAlignment: 'center',
    },
    [
      root.createComponent(Link, {to: storefrontUrl}, 'Home'),
      root.createComponent(Icon, {source: 'chevronRight', size: 'extraSmall'}),
      root.createComponent(
        Link,
        {to: new URL('/collections', storefrontUrl).href},
        'Shop',
      ),
      root.createComponent(Icon, {source: 'chevronRight', size: 'extraSmall'}),
      root.createComponent(Text, {appearance: 'subdued'}, 'Checkout'),
    ],
  );

  // Create the right footer column with links to pages
  const rightColumn = root.createComponent(
    InlineStack,
    {
      spacing: 'tight',
      inlineAlignment: 'end',
    },
    [
      root.createComponent(
        Link,
        {to: new URL('/sizing', storefrontUrl).href},
        'Sizing',
      ),
      root.createComponent(
        Link,
        {to: new URL('/terms', storefrontUrl).href},
        'Terms',
      ),
      root.createComponent(
        Link,
        {to: new URL('/privacy', storefrontUrl).href},
        'Privacy',
      ),
      root.createComponent(
        Link,
        {to: new URL('/faq', storefrontUrl).href},
        'FAQ',
      ),
      root.createComponent(
        Link,
        {to: new URL('/accessibility', storefrontUrl).href},
        'Accessibility',
      ),
    ],
  );

  const footer = root.createComponent(
    InlineLayout,
    {columns: ['auto', 'fill']},
    [leftColumn, rightColumn],
  );

  root.appendChild(footer);
}
