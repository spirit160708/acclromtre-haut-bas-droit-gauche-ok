basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -200) {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (input.acceleration(Dimension.X) > 200) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    } else if (input.acceleration(Dimension.Y) > 200) {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (input.acceleration(Dimension.X) > 200) {
            basic.showArrow(ArrowNames.SouthEast)
        } else {
            basic.showArrow(ArrowNames.South)
        }
    } else {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.West)
        } else if (input.acceleration(Dimension.X) > 200) {
            basic.showArrow(ArrowNames.East)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
