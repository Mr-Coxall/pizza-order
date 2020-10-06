// Created by: Mr. Coxall
// Created on: Oct 2020
// 
// This program accepts a pizza order and then calculates the cost
game.splash("Pizza Order")
let LABOUT_COST = 0.75
let RENT = 1
let PRICE_PER_INCH_DIAMETER = 0.5
let HST = 1.13
let diameter = game.askForNumber("Enter the diameter of the pizza (inch):")
let total = HST * (LABOUT_COST + (RENT + PRICE_PER_INCH_DIAMETER * diameter))
total = Math.round(100 * total) / 100
game.splash("The cost for a " + diameter + "cm pizza is $" + convertToText(total) + " (HST included).")
let mySprite = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Player)
