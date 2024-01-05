# Background

The main idea behind the flex layout is to give the container the ability to alter its' items width/height (and order) to best fill the available space (mostly to accommodate all kinds of display devices and screen sizes).

The flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based).

Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.
# Basics and terminology

![[00-basic-terminology.svg]]
# Flexbox properties

## Properties for the Parent (flex container)

![[01-container.svg]]
### display

This defines a flex container; inline or block depending on the given value.It enables a flex context for all its direct children.

![[Screenshot from 2023-10-07 11-29-41.png]]

### flex-direction
![[flex-direction.svg]]
This establishes the main-axis. Flexbox is (aside from optional wrapping) a single-direction layout concept.

![[Screenshot from 2023-10-07 11-31-35.png]]

Has reverse options.
### flex-wrap
![[flex-wrap.svg]]
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

![[Screenshot from 2023-10-07 11-34-56.png]]

-`nowrap` (default): all flex items will be on one line
-`wrap`: flex items will wrap onto mulitple lines, from top to bottom
-`wrap-reverse`: flex items will wrap onto multiple lines from bottom to top

### flex-flow

This is a shorthand for the `flex-direction` and `flex-wrap` properties. The default valu is `row nowrap`.

![[Screenshot from 2023-10-07 11-39-48.png]]

### justify-content
![[justify-content.svg]]
This defines alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or ar flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

![[Screenshot from 2023-10-07 11-42-25.png]]

![[Screenshot from 2023-10-07 11-43-28.png]]

![[Screenshot from 2023-10-07 11-43-43.png]]

-`flex-start` (default): items are packed toward the start of the flex-direction.
-`start`: items are packed toward the start of the `writing-mode` direction
-`left`: items are packed toward the left edge of the container, unless that doesn't make sense with the `flex-direction`, then it behaves like `start`.
-`space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
-`space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, sincec all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies
-`space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal

There are also two additional keywords you can pair with these values: `safe` and `unsafe`. Using `safe` ensures that however you do this type of positioning, you can't push an element such that it renders off-screen in such a way that the content can't be scrolled to ("data loss")
### align-items

![[align-items.svg]]
### align-content

![[align-content.svg]]
This aligns a flex container's lines when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

This property only takes effect on multi-line flexible containers, where `flex-wrap` is set to either `wrap` or `wrap-reverse`). A siongle-line flexible container (i.e. where `flex-wrap` is set to its default value, `no-wrap`) will not reflect align-content.

### gap, row-gap, column-gap

![[gap-1.svg]]
The gap property explicitly controls the space between flex items. It applies that spacing *only between items* not on the outer edges.

![[Screenshot from 2023-10-08 07-33-08.png]]

The gap property explicitly controls the space between flex items. It applies that spacing *only between items* not on the outer edges.

If there is something like `justify-content: space-between;`, then the gap will only take effect if that space would end up smaller.

It is not exclusively for flexbox, `gap` works in grid and mutli-column layout as well.

## Properties for the Children (flex items)

### order

![[order.svg]]
By default, flex items are laid out in source order. However, the order property controls the order in which they appear in the flex container.

![[Screenshot from 2023-10-08 07-38-47.png]]

Items with the same order revert to source order.

### flex-grow
![[flex-grow.svg]]
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. 

If one of the children has a value double the rest, that child would take up twice as much of the space as any of the others (or it will try, at least).

![[Screenshot from 2023-10-08 07-43-09.png]]

### flex-shrink


![[Screenshot from 2023-10-08 07-45-21.png]]

### flex-basis

This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The `auto` keyword means "look at my width or height property".

![[Screenshot from 2023-10-08 07-52-07.png]]

This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The `auto` keyword means "look at my width or height property".

See this graphic:

![[Screenshot from 2023-10-08 07-55-26.png]]

### flex

**It is recommended that you use this shorthand property** rather than set the individual properties; the shorthand sets the other values usually to what you want.

### align-self

![[align-self.svg]]
This allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.

Please see the `align-items` explanation to understand the available values.

![[Screenshot from 2023-10-08 08-01-44.png]]

Note that `float`, `clear`, and `vertical-align` have no effect on a flex item.

## Examples

Perfect centering:

![[Screenshot from 2023-10-08 08-11-09.png]]

Nice distribution of items:

![[Screenshot from 2023-10-08 08-22-07.png]]

![[Screenshot from 2023-10-08 08-22-27.png]]

