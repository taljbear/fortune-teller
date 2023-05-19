let random_number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Ask me anything!")
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    random_number = randint(1, 3)
    if (random_number == 1) {
        basic.showString("Yes")
    } else if (random_number == 2) {
        basic.showString("Perhaps")
    } else if (random_number == 3) {
        basic.showString("No!")
    }
})
