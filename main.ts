let distanta = 0
basic.showIcon(IconNames.TShirt)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
basic.forever(function () {
    distanta = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (distanta > 5 && distanta < 10) {
        cuteBot.motors(0, 0)
    } else if (distanta <= 5) {
        cuteBot.motors(-30, -30)
    } else {
        cuteBot.motors(-30, -30)
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(75, 25)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25, 75)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    }
})
