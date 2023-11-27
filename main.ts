namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const Text = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (My_player.vy == 0) {
        My_player.vy = -155
    }
})
function makelevel () {
    for (let value of sprites.allOfKind(SpriteKind.Coin)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Boss)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        sprites.destroy(value)
    }
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(My_player, tiles.getTileLocation(0, 18))
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level40`)
        tiles.placeOnTile(My_player, tiles.getTileLocation(0, 14))
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnTile(My_player, tiles.getTileLocation(0, 16))
    } else if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level23`)
        tiles.placeOnTile(My_player, tiles.getTileLocation(0, 14))
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Cooin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Cooin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Cooin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        monster = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....ff..............
            .....f..............
            ..ffffff............
            ..ffffff............
            ..ffffff............
            .....fffffffff......
            .....fffffff........
            ....f..f..fff.......
            ....f..f..f.f.......
            ...ff.ff.ff.f.......
            `, SpriteKind.Enemy)
        tiles.placeOnTile(monster, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        monster.vx = -20
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        monster = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f e e e e e e f . . . . 
            . . . f e f e e e e f e f . . . 
            . . f e e e e f f e e e e f . . 
            . . f f f f f f f f f f f f . . 
            . . . . f f f . . f f f . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(monster, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        monster.vx = -20
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    level += 1
    checkpoint = 0
    makelevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (sprite.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let checkpoint = 0
let monster: Sprite = null
let Cooin: Sprite = null
let level = 0
let My_player: Sprite = null
scene.setBackgroundColor(1)
My_player = sprites.create(img`
    ................
    ................
    ................
    ................
    ....dddd........
    ...efddfe.......
    ...edeede.......
    ....edde........
    .....dd.........
    ..ddd11ddd......
    ..d.d11d.d......
    ..d.1111.d......
    ..d.1111.d......
    ....8888........
    ....88.8........
    ....8..8........
    ....8..8........
    ....f..f........
    ....f..f........
    ....ff.ff.......
    `, SpriteKind.Player)
info.setLife(2)
controller.moveSprite(My_player, 100, 0)
My_player.ay = 350
scene.cameraFollowSprite(My_player)
level = 1
makelevel()
game.onUpdateInterval(3000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.vx = 0 - value.vx
    }
})
