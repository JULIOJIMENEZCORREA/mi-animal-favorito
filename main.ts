basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
