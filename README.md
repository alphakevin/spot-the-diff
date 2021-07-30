# Spot the Difference Game

This is a demonstration for using CSS [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) to help people detecting difference of two similar pictures.

Color difference is easily as subtraction every two pixels of the two picture, if the pixels are exactly the same or less difference, the result is black or dark colors, otherwise the color pops up to the whole image diff result.

```ruby
P1 = [r1, g1, b1]
P2 = [r2, g2, b2]
P_diff = P2 - P1 = [r2 - r1, g2 - g1, b2 - b1]
```

The left and right pictures are not perfectly pixel aligned, so there may be some offset to cause extra noises.

A further idea is to draw pictures on canvas and use javascript to detect the difference areas, then output a list of circles contains the areas, so it can automatically play the game.

## Copyright Notice

The demo pictures comes from https://www.rd.com/list/spot-the-difference/ and copyright by the original creator.
