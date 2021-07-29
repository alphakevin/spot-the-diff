# Spot the Difference Game

This is a demonstration for using [css-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) to help people detecting difference of two similar pictures.

Color difference is easily as subtraction of each two pixels, if the pixel are same with less difference, the result is black or dark colors, otherwise the color pops up to the whole image diff result.

```
P1 = [r1,g1,b1]
P2 = [r2,g2,b2]
Pdiff = [r2-r1,g2-g1,b2-b1]
```

The left and right pictures are not perfectly pixel aligned, so there may be some offset to cause extra noises.

A further idea is to draw pictures on canvas and detect the difference area and output as a list of rectangles, so it will automatically play the game.

The pictures comes from https://www.rd.com/list/spot-the-difference/ and copyright by the original creator.
