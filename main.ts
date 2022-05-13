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
