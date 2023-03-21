/**
 * 1568=higher G
 */
function _4_secetion1 () {
    beat = music.beat(BeatFraction.Half) / 1
    for (let index = 0; index < 2; index++) {
        music.playTone(220, beat)
        music.playTone(277, beat)
        music.playTone(330, beat)
    }
    music.playTone(220, beat)
    music.playTone(277, beat)
    music.playTone(370, beat)
    for (let index = 0; index < 2; index++) {
        music.playTone(247, beat)
        music.playTone(294, beat)
        music.playTone(370, beat)
    }
    music.playTone(247, beat)
    music.playTone(330, beat)
    music.playTone(415, beat)
    for (let index = 0; index < 2; index++) {
        music.playTone(277, beat)
        music.playTone(330, beat)
        music.playTone(415, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(440, beat)
        music.playTone(415, beat)
        music.playTone(370, beat)
    }
    music.playTone(440, beat)
    music.playTone(277, beat)
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 4; index++) {
        music.playTone(330, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(220, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(277, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(330, beat)
        }
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(370, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(294, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(247, beat)
        }
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(277, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(415, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(330, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(277, beat)
        }
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(415, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(370, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(415, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(440, beat)
        }
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(415, beat)
    }
}
function secetion6 () {
    beat = music.beat(BeatFraction.Quarter)
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(233, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    beat = music.beat(BeatFraction.Eighth)
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(392, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(466, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(523, beat)
    }
}
function secetion2 () {
    beat = music.beat(BeatFraction.Whole)
    music.playTone(196, beat)
    music.playTone(175, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(196, beat)
    music.playTone(233, beat)
    music.playTone(196, beat)
    music.playTone(175, beat)
    for (let index = 0; index < 2; index++) {
        beat = music.beat(BeatFraction.Whole)
        music.playTone(233, beat)
        beat = music.beat(BeatFraction.Half)
        music.playTone(196, beat)
    }
    beat = music.beat(BeatFraction.Whole)
    music.playTone(233, beat)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(262, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(220, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(165, beat)
    music.playTone(196, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(220, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(262, beat)
    music.playTone(220, beat)
    music.playTone(220, beat)
    music.playTone(220, beat)
    music.playTone(165, beat)
    music.playTone(196, beat)
    music.playTone(220, beat)
    music.playTone(196, beat)
    music.playTone(165, beat)
    music.playTone(196, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(175, beat)
    for (let index = 0; index < 2; index++) {
        beat = music.beat(BeatFraction.Half)
        music.playTone(220, beat)
        beat = music.beat(BeatFraction.Whole)
        music.playTone(175, beat)
    }
    beat = music.beat(BeatFraction.Half)
    for (let index = 0; index < 2; index++) {
        music.playTone(220, beat)
        music.playTone(196, beat)
        music.playTone(175, beat)
        music.playTone(196, beat)
    }
}
function secetion7 () {
    beat = music.beat(BeatFraction.Sixteenth)
    for (let index = 0; index < 32; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 32; index++) {
        music.playTone(233, beat)
    }
    beat = music.beat(BeatFraction.Eighth)
    music.playTone(196, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Quarter) / 3
    music.playTone(294, beat)
    music.playTone(311, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(311, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(311, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(294, beat)
    music.playTone(330, beat)
    music.playTone(392, beat)
    music.playTone(415, beat)
    music.playTone(330, beat)
    music.playTone(392, beat)
    music.playTone(415, beat)
    music.playTone(466, beat)
    for (let index = 0; index < 32; index++) {
        music.playTone(698, beat)
    }
}
function secetion3 () {
    beat = music.beat(BeatFraction.Quarter)
    for (let index = 0; index < 4; index++) {
        music.playTone(440, beat)
        music.playTone(294, beat)
        music.playTone(349, beat)
        music.playTone(392, beat)
    }
    beat = music.beat(BeatFraction.Eighth)
    for (let index = 0; index < 4; index++) {
        music.playTone(220, beat)
        music.playTone(220, beat)
        music.playTone(233, beat)
        music.playTone(233, beat)
        music.playTone(262, beat)
        music.playTone(262, beat)
        music.playTone(294, beat)
        music.playTone(294, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(220, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(233, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(262, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(294, beat)
        }
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(131, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(523, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(784, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(1568, beat)
    }
}
function secetion12 () {
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 8; index++) {
            music.playTone(220, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(233, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(247, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(262, beat)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 8; index++) {
            music.playTone(277, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(294, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(311, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(330, beat)
        }
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(392, beat)
    }
}
function _3_secetion1 () {
    beat = music.beat(BeatFraction.Half) / 5
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
        music.playTone(311, beat)
        music.playTone(392, beat)
        music.playTone(523, beat)
        music.playTone(622, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(220, beat)
        music.playTone(262, beat)
        music.playTone(330, beat)
        music.playTone(440, beat)
        music.playTone(523, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 32; index++) {
        music.playTone(262, beat)
        music.playTone(311, beat)
        music.playTone(349, beat)
        music.playTone(415, beat)
    }
    for (let index = 0; index < 32; index++) {
        music.playTone(233, beat)
        music.playTone(294, beat)
        music.playTone(349, beat)
        music.playTone(392, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 64; index++) {
        music.playTone(311, beat)
        music.playTone(392, beat)
        music.playTone(466, beat)
        music.playTone(523, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(233, beat)
        music.playTone(277, beat)
        music.playTone(349, beat)
        music.playTone(523, beat)
    }
    for (let index = 0; index < 64; index++) {
        music.playTone(294, beat)
        music.playTone(349, beat)
        music.playTone(415, beat)
        music.playTone(587, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 5
    for (let index = 0; index < 64; index++) {
        music.playTone(311, beat)
        music.playTone(370, beat)
        music.playTone(440, beat)
        music.playTone(523, beat)
        music.playTone(622, beat)
    }
}
input.onButtonPressed(Button.A, function () {
    if (expunged == 12) {
        expunged1()
    } else {
        expunged3()
    }
})
function secetion5 () {
    beat = music.beat(BeatFraction.Whole)
    music.playTone(196, beat)
    music.playTone(175, beat)
    music.playTone(233, beat)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(196, beat)
    music.playTone(147, beat)
    music.playTone(175, beat)
    music.playTone(147, beat)
    music.playTone(233, beat)
    music.playTone(147, beat)
    music.playTone(294, beat)
    music.playTone(147, beat)
    beat = music.beat(BeatFraction.Quarter)
    music.playTone(294, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(311, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(392, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(196, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(196, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(196, beat)
    music.playTone(147, beat)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(233, beat)
    music.playTone(294, beat)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(349, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(175, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(220, beat)
    music.playTone(294, beat)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(349, beat)
    music.playTone(262, beat)
    music.playTone(220, beat)
    music.playTone(175, beat)
}
input.onGesture(Gesture.Shake, function () {
    _4_secetion3()
})
function expunged4 () {
    for (let index = 0; index < 2; index++) {
        _4_secetion1()
    }
    for (let index = 0; index < 2; index++) {
        _4_secetion2()
    }
    for (let index = 0; index < 4; index++) {
        _4_secetion3()
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            _4_secetion1()
        }
        for (let index = 0; index < 2; index++) {
            _4_secetion2()
        }
    }
}
function _4_secetion3 () {
    beat = music.beat(BeatFraction.Half) / 1
    music.playTone(247, beat)
    music.playTone(277, beat)
    music.playTone(294, beat)
    music.playTone(330, beat)
    music.playTone(277, beat)
    music.playTone(294, beat)
    music.playTone(330, beat)
    music.playTone(370, beat)
    beat = music.beat(BeatFraction.Quarter) / 1
    music.playTone(247, beat)
    music.playTone(277, beat)
    music.playTone(294, beat)
    music.playTone(330, beat)
    music.playTone(277, beat)
    music.playTone(294, beat)
    music.playTone(330, beat)
    music.playTone(370, beat)
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 2; index++) {
        music.playTone(247, beat)
        music.playTone(277, beat)
        music.playTone(294, beat)
        music.playTone(330, beat)
        music.playTone(277, beat)
        music.playTone(294, beat)
        music.playTone(330, beat)
        music.playTone(370, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 4; index++) {
        music.playTone(247, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(277, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(330, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(277, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(330, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(247, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(277, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(294, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(330, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(277, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(294, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(330, beat)
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(370, beat)
        }
    }
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 32 * 8; index++) {
        music.playTone(392, beat)
    }
    for (let index = 0; index < 32 * 8; index++) {
        music.playTone(784, beat)
    }
}
function secetion11 () {
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(262, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(233, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(196, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(233, beat)
        }
    }
    for (let index = 0; index < 32; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(262, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(233, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(196, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(233, beat)
        }
    }
    for (let index = 0; index < 32; index++) {
        music.playTone(349, beat)
    }
}
function secetion1 () {
    beat = music.beat(BeatFraction.Quarter)
    music.playTone(294, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(392, beat)
    music.playTone(440, beat)
    music.playTone(392, beat)
    music.playTone(349, beat)
    music.playTone(294, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(440, beat)
    music.playTone(466, beat)
    music.playTone(440, beat)
    music.playTone(392, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(294, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(440, beat)
    music.playTone(466, beat)
    music.playTone(587, beat)
    music.playTone(698, beat)
    music.playTone(587, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(440, beat)
    beat = music.beat(BeatFraction.Sixteenth)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 8; index++) {
            music.playTone(523, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(392, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(523, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(784, beat)
        }
    }
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 16; index++) {
            music.playTone(1568, beat)
        }
        for (let index = 0; index < 16; index++) {
            music.playTone(784, beat)
        }
    }
}
function secetion10 () {
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 8; index++) {
            music.playTone(494, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(554, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(494, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(440, beat)
        }
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(659, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(554, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(494, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(440, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(440, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(494, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(440, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 32
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 8; index++) {
            music.playTone(494, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(466, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(415, beat)
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(440, beat)
        }
    }
    beat = music.beat(BeatFraction.Sixteenth) / 32
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(330, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(392, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(415, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(440, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(466, beat)
    }
}
function _3_secetion3 () {
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(1568, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(784, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(392, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Quarter) / 1
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(349, beat)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (expunged == 34) {
        expunged = 12
    } else {
        expunged = 34
    }
})
input.onButtonPressed(Button.B, function () {
    if (expunged == 12) {
        expunged2()
    } else {
        expunged4()
    }
})
function _2_secetion2 () {
    beat = music.beat(BeatFraction.Whole)
    music.playTone(277, beat)
    music.playTone(349, beat)
    music.playTone(277, beat)
    beat = music.beat(BeatFraction.Double)
    music.playTone(415, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(349, beat)
    music.playTone(311, beat)
    music.playTone(277, beat)
    music.playTone(233, beat)
    music.playTone(277, beat)
    music.playTone(311, beat)
    beat = music.beat(BeatFraction.Double)
    music.playTone(277, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(277, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(175, beat)
    music.playTone(208, beat)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Double)
    music.playTone(311, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(262, beat)
    music.playTone(311, beat)
    music.playTone(262, beat)
    music.playTone(311, beat)
    music.playTone(349, beat)
    music.playTone(311, beat)
    beat = music.beat(BeatFraction.Double)
    music.playTone(415, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(415, beat)
    music.playTone(349, beat)
    music.playTone(311, beat)
}
function secetion8 () {
    for (let index = 0; index < 2; index++) {
        beat = music.beat(BeatFraction.Sixteenth)
        for (let index = 0; index < 8; index++) {
            music.playTone(262, beat)
        }
        beat = music.beat(BeatFraction.Sixteenth) / 2
        for (let index = 0; index < 16; index++) {
            music.playTone(262, beat)
        }
        beat = music.beat(BeatFraction.Sixteenth) / 4
        for (let index = 0; index < 32; index++) {
            music.playTone(262, beat)
        }
        beat = music.beat(BeatFraction.Sixteenth) / 2
        for (let index = 0; index < 16; index++) {
            music.playTone(262, beat)
        }
    }
    beat = music.beat(BeatFraction.Eighth) / 3
    for (let index = 0; index < 2; index++) {
        music.playTone(311, beat)
        music.playTone(330, beat)
        music.playTone(349, beat)
        music.playTone(370, beat)
        music.playTone(392, beat)
        music.playTone(415, beat)
        music.playTone(440, beat)
        music.playTone(466, beat)
        music.playTone(494, beat)
        music.playTone(294, beat)
        music.playTone(311, beat)
        music.playTone(330, beat)
        music.playTone(349, beat)
        music.playTone(370, beat)
        music.playTone(392, beat)
        music.playTone(415, beat)
        music.playTone(440, beat)
        music.playTone(466, beat)
        music.playTone(277, beat)
        music.playTone(294, beat)
        music.playTone(311, beat)
        music.playTone(330, beat)
        music.playTone(349, beat)
        music.playTone(370, beat)
        music.playTone(392, beat)
        music.playTone(415, beat)
        music.playTone(440, beat)
        music.playTone(262, beat)
        music.playTone(277, beat)
        music.playTone(294, beat)
        music.playTone(311, beat)
        music.playTone(330, beat)
        music.playTone(349, beat)
        music.playTone(370, beat)
        music.playTone(392, beat)
        music.playTone(415, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 7
    for (let index = 0; index < 14; index++) {
        music.playTone(392, beat)
        music.playTone(370, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth)
    for (let index = 0; index < 8; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
        music.playTone(208, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(208, beat)
        music.playTone(220, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(220, beat)
        music.playTone(233, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(233, beat)
        music.playTone(247, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(247, beat)
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
        music.playTone(277, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(277, beat)
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
        music.playTone(311, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(311, beat)
        music.playTone(330, beat)
    }
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(330, beat)
            music.playTone(349, beat)
        }
        for (let index = 0; index < 4; index++) {
            music.playTone(349, beat)
            music.playTone(370, beat)
        }
    }
}
function expunged1 () {
    for (let index = 0; index < 4; index++) {
        secetion1()
    }
    for (let index = 0; index < 16; index++) {
        music.rest(music.beat(BeatFraction.Breve))
    }
    for (let index = 0; index < 2; index++) {
        secetion2()
    }
    for (let index = 0; index < 4; index++) {
        secetion3()
    }
    for (let index = 0; index < 2; index++) {
        secetion4()
    }
    for (let index = 0; index < 2; index++) {
        secetion5()
    }
    for (let index = 0; index < 2; index++) {
        secetion6()
    }
    for (let index = 0; index < 2; index++) {
        secetion7()
    }
    for (let index = 0; index < 2; index++) {
        secetion8()
    }
    for (let index = 0; index < 2; index++) {
        secetion9()
    }
    for (let index = 0; index < 2; index++) {
        secetion10()
    }
    for (let index = 0; index < 2; index++) {
        secetion11()
    }
    for (let index = 0; index < 2; index++) {
        secetion12()
    }
}
function _2_secetion1 () {
    beat = music.beat(BeatFraction.Half)
    music.playTone(554, beat)
    music.playTone(698, beat)
    music.playTone(554, beat)
    music.playTone(415, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(349, beat)
    beat = music.beat(BeatFraction.Quarter)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(415, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(415, beat)
    music.playTone(466, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    music.playTone(311, beat)
    music.playTone(262, beat)
    music.playTone(311, beat)
    music.playTone(554, beat)
    music.playTone(622, beat)
    music.playTone(466, beat)
    music.playTone(554, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(554, beat)
    music.playTone(698, beat)
    music.playTone(554, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(415, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(523, beat)
    music.playTone(415, beat)
    music.playTone(554, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(415, beat)
    music.playTone(554, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(349, beat)
    music.playTone(415, beat)
    music.playTone(349, beat)
    music.playTone(277, beat)
    music.playTone(311, beat)
    music.playTone(349, beat)
    music.playTone(311, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    music.playTone(208, beat)
    music.playTone(233, beat)
    music.playTone(262, beat)
    music.playTone(277, beat)
    music.playTone(262, beat)
    beat = music.beat(BeatFraction.Quarter)
    music.playTone(277, beat)
    music.playTone(311, beat)
    music.playTone(349, beat)
    music.playTone(415, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(622, beat)
    music.playTone(554, beat)
    music.playTone(698, beat)
    music.playTone(622, beat)
    music.playTone(554, beat)
    music.playTone(622, beat)
    music.playTone(523, beat)
    music.playTone(622, beat)
    music.playTone(698, beat)
    music.playTone(622, beat)
    music.playTone(523, beat)
    music.playTone(622, beat)
    music.playTone(554, beat)
    music.playTone(622, beat)
    music.playTone(523, beat)
    music.playTone(622, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
    music.playTone(523, beat)
    music.playTone(466, beat)
}
function _4_secetion2 () {
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(330, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(220, beat)
        music.playTone(370, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(330, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(370, beat)
        music.playTone(185, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(370, beat)
        music.playTone(220, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(247, beat)
        music.playTone(208, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(370, beat)
        music.playTone(185, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(220, beat)
        music.playTone(247, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(415, beat)
        music.playTone(208, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(277, beat)
        music.playTone(311, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
        music.playTone(440, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(330, beat)
        music.playTone(440, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(415, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(370, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(330, beat)
    }
}
function expunged2 () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            _2_secetion1()
        }
        for (let index = 0; index < 2; index++) {
            _2_secetion2()
        }
    }
}
function _3_secetion2 () {
    beat = music.beat(BeatFraction.Quarter) / 1
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Eighth) / 1
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 1
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(349, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(220, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(196, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(262, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(523, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(784, beat)
    }
    for (let index = 0; index < 16 * 8; index++) {
        music.playTone(1568, beat)
    }
}
function secetion4 () {
    beat = music.beat(BeatFraction.Half)
    music.playTone(196, beat)
    music.playTone(175, beat)
    music.playTone(196, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(233, beat)
    music.playTone(196, beat)
    music.playTone(175, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(294, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(294, beat)
    music.playTone(262, beat)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(294, beat)
    for (let index = 0; index < 2; index++) {
        beat = music.beat(BeatFraction.Half)
        music.playTone(262, beat)
        beat = music.beat(BeatFraction.Whole)
        music.playTone(294, beat)
    }
    for (let index = 0; index < 2; index++) {
        beat = music.beat(BeatFraction.Half)
        music.playTone(349, beat)
        music.playTone(294, beat)
        music.playTone(262, beat)
    }
    beat = music.beat(BeatFraction.Whole)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(220, beat)
    music.playTone(196, beat)
    music.playTone(165, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(220, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(220, beat)
    music.playTone(262, beat)
    music.playTone(220, beat)
    music.playTone(233, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(196, beat)
    music.playTone(165, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(165, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(196, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(175, beat)
    music.playTone(147, beat)
    music.playTone(175, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(196, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(196, beat)
    music.playTone(175, beat)
    music.playTone(147, beat)
    music.playTone(156, beat)
    music.playTone(147, beat)
    music.playTone(131, beat)
    beat = music.beat(BeatFraction.Whole)
    music.playTone(147, beat)
    beat = music.beat(BeatFraction.Half)
    music.playTone(147, beat)
    music.playTone(131, beat)
    music.playTone(147, beat)
}
function secetion9 () {
    beat = music.beat(BeatFraction.Quarter)
    for (let index = 0; index < 2; index++) {
        music.playTone(523, beat)
        music.playTone(392, beat)
    }
    music.playTone(466, beat)
    music.playTone(392, beat)
    music.playTone(349, beat)
    music.playTone(392, beat)
    beat = music.beat(BeatFraction.Eighth)
    for (let index = 0; index < 4; index++) {
        music.playTone(466, beat)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(466, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 2
    for (let index = 0; index < 8; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(294, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(330, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(349, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(311, beat)
    }
    for (let index = 0; index < 8; index++) {
        music.playTone(523, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 4
    for (let index = 0; index < 32; index++) {
        music.playTone(466, beat)
    }
    for (let index = 0; index < 32; index++) {
        music.playTone(523, beat)
    }
    beat = music.beat(BeatFraction.Sixteenth) / 8
    for (let index = 0; index < 64; index++) {
        music.playTone(622, beat)
    }
}
function expunged3 () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            _3_secetion1()
        }
        for (let index = 0; index < 2; index++) {
            _3_secetion2()
        }
        for (let index = 0; index < 2; index++) {
            _3_secetion3()
        }
    }
}
let beat = 0
let expunged = 0
expunged = 12
basic.forever(function () {
    music.setTempo(250)
    music.setTempo(250)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
