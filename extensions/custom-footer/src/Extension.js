import {
  Icon,
  InlineLayout,
  InlineStack,
  Link,
  Text,
  View,
} from '@shopify/ui-extensions/checkout';

// [START custom-footer.render]
export default function renderExtension({root, shop}) {
  const {storefrontUrl} = shop;

  // Create the left footer column with links to storefront
  const leftColumn = root.createComponent(
    InlineStack,
    {
      spacing: "extraTight",
      blockAlignment: "center",
      accessibilityRole: "orderedList",
    },
    [
      root.createComponent(
        InlineStack,
        {
          spacing: "extraTight",
          blockAlignment: "center",
          accessibilityRole: "listItem",
        },
        [
          root.createComponent(Link, {to: storefrontUrl}, "Home"),
          root.createComponent(Icon, {
            source: "chevronRight",
            size: "extraSmall",
          }),
        ],
      ),
      root.createComponent(
        InlineStack,
        {
          spacing: "extraTight",
          blockAlignment: "center",
          accessibilityRole: "listItem",
        },
        [
          root.createComponent(
            Link,
            {to: new URL("/collections", storefrontUrl).href},
            "Shop",
          ),
          root.createComponent(Icon, {
            source: "chevronRight",
            size: "extraSmall",
          }),
        ],
      ),
      root.createComponent(
        InlineStack,
        {
          spacing: "extraTight",
          blockAlignment: "center",
          accessibilityRole: "listItem",
        },
        root.createComponent(Text, { appearance: "subdued" }, "Checkout"),
      ),
    ],
  );

  // Create the right footer column with links to pages
  const rightColumn = root.createComponent(
    InlineStack,
    {
      blockAlignment: "center",
      spacing: "tight",
      inlineAlignment: "end",
      accessibilityRole: "orderedList",
    },
    [
      root.createComponent(
        View,
        {accessibilityRole: 'listItem'},
        root.createComponent(
          Link,
          {to: new URL("/sizing", storefrontUrl).href},
          "Sizing",
        ),
      ),
      root.createComponent(
        View,
        {accessibilityRole: 'listItem'},
        root.createComponent(
          Link,
          {to: new URL("/terms", storefrontUrl).href},
          "Terms",
        ),
      ),
      root.createComponent(
        View,
        {accessibilityRole: 'listItem'},
        root.createComponent(
          Link,
          {to: new URL("/privacy", storefrontUrl).href},
          "Privacy",
        ),
      ),
      root.createComponent(
        View,
        {accessibilityRole: 'listItem'},
        root.createComponent(
          Link,
          {to: new URL("/faq", storefrontUrl).href},
          "FAQ",
        ),
      ),
      root.createComponent(
        View,
        {accessibilityRole: 'listItem'},
        root.createComponent(
          Link,
          {to: new URL("/accessibility", storefrontUrl).href},
          "Accessibility",
        ),
      ),
    ],
  );

  // Add the columns to InlineLayout to create the left and right separation
  const footer = root.createComponent(
    InlineLayout,
    {columns: ['auto', 'fill']},
    [leftColumn, rightColumn],
  );

  root.appendChild(footer);
}
// [END custom-footer.render]
