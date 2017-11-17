# CSS style guide

[TOC]

## Terminology
### Rule declaration
A "rule declaration" is the name given to a selector (or a group of selectors) with an accompanying group of properties.

```css
.listing {
    font-size: 1.8rem;
    line-height: 1.4;
}
```

### Selectors
In a rule declaration, "selectors" are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as element's class, ID, or any of its attributes.

```css
.m-element-class {
    // ...
}

[araia-hidden] {
    // ...
}
```

### Properties
Properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations.

```css
/* selector */ {
    color: #333;
    background-color: #fff;
}
```

## CSS formatting
- Use tabs for indentation
- Dashes over camcelCasing in class names
    - Underscores are okay for BEM
- Do not use ID selectors
- When using multiple selectors in a rule, give each selector its own line
- Put a space before the opening brace `{` in rule declarations
- In properties put a space after the `:` character
- Put closing braces `}` of rule declaration on a new line
- Put blank line between rule declarations

**Bad**

```css
.no, .nope, .not_good {
    // ...
}
#lol-no {
    // ...
}
```

**Good**

```css
.one,
.selector,
.per-line {
    // ...
}
```

### Comments
- Prefer line comments `//` over block comments
- Prefer comments on their own line. Avoid end-of-line comments
- Write detailed comments for code that isn't self-documenting:
    - Compatibility or browser specific hacks


## Naming conventions (BEMIT)
Follow the [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) methodology. This is an extension of the Block-Element-Modifier (BEM) methodology as it adopts patterns from the [Inverted Triangle CSS (ITCSS)](https://twitter.com/itcss_io) architecture.

- [BEM methodology](https://en.bem.info/methodology/)
- CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
- Harry Roberts [Getting your head 'round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

All class names should follow the BEM naming convention with the addition of descriptive namespaces, these namespaces are as follows:

```css
.o- /* objects */
.c- /* components */
.u- /* utility classes */
.t- /* trumps */
.s- /* scope */
```

As shown above, classes prefixed with these namespaces should also sit in the relevant folder. For example .o- styles should be placed in the objects folder.

The only exception here is the scope namespace (.s-), which should be avoided as it involves nesting classes. But if you find the need to use one then it should be placed in the trumps folder.

An example of how a class name might look is as follows:

```css
.o-block__element--modifier {}
```

Files should also be named after the block, so it's easier to find the relevant source code later on. For example `.c-nav` will be found in `components/nav.scss`.

---

### ID selectors
While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.


### JavaScript hooks
Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with the `.js-` namespace.

```css
<button class="c-button c-button--primary js-request-to-book">Request to book</button>
```

### Border
Use `0` instead of none to specify that a style has no border

**Bad**

```css
.foo {
    border: none;
}
```

**Good**

```css
.foo {
    border: 0;
}
```

## Sass

### Syntax
- Use the `.scss` snytax, never the original .sass syntax
- Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

**Property declarations**

List all standard property declarations, anything that isn't an `@include` or a nested selector.

```scss
.button--pri {
    background-color: $pri;
    // ...
}
```

**`@include` declarations**

Grouping `@include`s at the end makes it easier to read the entire selector.

```scss
.button--pri {
    background-color: $pri;
    @include transition(background 0.5s ease);
    // ...
}
```

**Nested selectors**

Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

```scss
.button--pri {
    background-color: $pri;
    @include transition(background 0.5s ease);

    .icon {
        margin-right: 10px;
    }
}
```

### Variables

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Nested selectors

**Avoid nesting selectors more than three levels deep!**

```scss
.page-container {
    .content {
        .profile {
            // STOP!
        }
    }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable


Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

---
*This styleguide is based on the [Airbnb CSS styleguide](https://github.com/airbnb/css)*
