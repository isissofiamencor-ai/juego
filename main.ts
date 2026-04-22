let juego_terminado = false
let puntos_1 = 0
let puntos_2 = 0
input.onPinPressed(TouchPin.P0, function () {
    if (juego_terminado == false) {
        puntos_1 += 1
        basic.showIcon(IconNames.Yes)
        if (puntos_1 == 5) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . . . .
                # . # . #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showIcon(IconNames.Yes)
            juego_terminado = true
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (juego_terminado == false) {
        puntos_2 += 1
        basic.showIcon(IconNames.No)
        if (puntos_2 == 5) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . . . .
                # . # . #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showIcon(IconNames.No)
            juego_terminado = true
        }
    }
})
