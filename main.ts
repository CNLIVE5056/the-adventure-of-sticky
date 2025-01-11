namespace SpriteKind {
    export const particle = SpriteKind.create()
    export const item = SpriteKind.create()
    export const water = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile17)) {
        Chest([sprites.create(assets.image`myImage2`, SpriteKind.item)], [myTiles.tile13])
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 0) {
        if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile11)) {
            controller.moveSprite(mySprite, 0, 0)
            Level += 1
            mySprite.sayText("Press A to Steal The Jewel", 100, false)
            tiles.setTileAt(tiles.getTileLocation(7, 8), myTiles.tile18)
            sprites.destroy(mySprite2)
            sprites.destroy(mySprite2)
            sprites.destroy(mySprite2)
            scene.cameraShake(4, 2000)
            pause(500)
            story.printText("YOU CAN'T STEAL MY SHINY!!!", 128, 64)
            pause(1000)
            scene.cameraShake(16, 1000)
            pause(100)
            tiles.setCurrentTilemap(tilemap`level3`)
            controller.moveSprite(mySprite)
            info.setLife(3)
            Level += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    if (Level == 8) {
        Level = 9
        scaling.scaleToPixels(mySprite, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        tiles.setCurrentTilemap(tilemap`level21`)
        tiles.placeOnRandomTile(mySprite, myTiles.tile33)
        sprites.destroy(mySprite5)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile28, function (sprite, location) {
    if (Level == 7) {
        Level = 8
        scaling.scaleToPixels(mySprite, 4, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
function Chest (Images: Sprite[], list: Image[]) {
    mySprite4 = Images._pickRandom()
    tiles.placeOnTile(mySprite4, mySprite.tilemapLocation())
    tiles.setTileAt(mySprite.tilemapLocation(), list._pickRandom())
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.water, function (sprite, otherSprite) {
    for (let indey = 0; indey <= 4; indey++) {
        for (let index = 0; index <= 4; index++) {
            tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().row + (index - 2), mySprite.tilemapLocation().column + (indey - 2)), myTiles.tile22)
        }
    }
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile23)) {
        Chest([sprites.create(assets.image`myImage2`, SpriteKind.item), sprites.create(assets.image`1`, SpriteKind.water)], [myTiles.tile22])
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    if (Level == 9) {
        Level = 10
        scaling.scaleToPixels(mySprite, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        tiles.setCurrentTilemap(tilemap`level13`)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile24, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile24)) {
        Chest([sprites.create(assets.image`1`, SpriteKind.water)], [myTiles.tile22])
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile20, function (sprite, location) {
    if (Level == 4) {
        Level += 1
        tiles.setCurrentTilemap(tilemap`level6`)
    }
})
function diamond_effects (particle_num: number) {
    for (let index = 0; index < particle_num; index++) {
        mySprite3 = sprites.create(assets.image`myImage1`, SpriteKind.particle)
        tiles.placeOnRandomTile(mySprite3, myTiles.tile11)
        mySprite3.setFlag(SpriteFlag.DestroyOnWall, true)
        mySprite3.setVelocity(randint(-6, 6), 6)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let level1 = 0
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let Level = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
pauseUntil(() => mySprite.tileKindAt(TileDirection.Center, myTiles.tile14))
controller.moveSprite(mySprite, 0, 0)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
100,
true
)
pause(500)
tiles.setCurrentTilemap(tilemap`level5`)
pause(100)
tiles.setCurrentTilemap(tilemap`level9`)
pause(100)
tiles.setCurrentTilemap(tilemap`level`)
pause(500)
controller.moveSprite(mySprite)
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
mySprite.setImage(assets.image`myImage`)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite2, myTiles.tile11)
pause(500)
game.onUpdateInterval(400, function () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        50,
        false
        )
    } else if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        50,
        false
        )
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim1`,
        50,
        false
        )
    } else if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        50,
        false
        )
    }
})
forever(function () {
    if (Level == 0) {
        pause(500)
        diamond_effects(1)
    }
})
forever(function () {
    if (!(controller.anyButton.isPressed())) {
        mySprite.setImage(assets.image`myImage`)
    }
})
forever(function () {
    if (Level == 0) {
        if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile11)) {
            mySprite.sayText("Press A to Steal The Jewel", 100, false)
        }
    }
})
forever(function () {
    if (Level == 2) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level12`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 3))
        }
    }
    if (Level == 3) {
        if (mySprite.tilemapLocation().row == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level7`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 0))
        }
    }
    if (Level == 5) {
        if (mySprite.tilemapLocation().row == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level10`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.item)
            sprites.destroyAllSpritesOfKind(SpriteKind.water)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 0))
        }
    }
    if (Level == 6) {
        if (mySprite.tilemapLocation().row == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level11`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.item)
            sprites.destroyAllSpritesOfKind(SpriteKind.water)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 0))
            mySprite6 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
            tiles.placeOnRandomTile(mySprite6, myTiles.tile11)
        }
    }
    if (Level == 7) {
        diamond_effects(1)
    }
    if (Level == 10) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level14`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        }
    }
    if (Level == 11) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        }
    }
    if (Level == 12) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level16`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        }
    }
    if (Level == 13) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level17`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        }
    }
    if (Level == 14) {
        if (mySprite.tilemapLocation().column == 15) {
            Level += 1
            tiles.setCurrentTilemap(tilemap`level18`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
            mySprite7 = sprites.create(assets.image`myImage0`, SpriteKind.Food)
            tiles.placeOnRandomTile(mySprite7, myTiles.tile35)
        }
    }
    if (Level == 15) {
        if (mySprite.tilemapLocation().column == 8) {
            if (mySprite.tilemapLocation().row == 7) {
                Level += 1
                sprites.destroy(mySprite7)
                story.spriteSayText(mySprite, "YAY!!!!")
            }
        }
    }
    if (Level == 16) {
        if (mySprite.tilemapLocation().column == 15) {
            game.gameOver(true)
        }
    }
})
forever(function () {
    if (Level == 5) {
        if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile21)) {
            Level += 1
            game.gameOver(false)
        }
    }
})
forever(function () {
    if (level1 != Level) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        level1 = Level
    }
})
game.onUpdateInterval(10000, function () {
    if (Level == 2) {
        mySprite5 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite5, myTiles.tile13)
        mySprite5.setVelocity(50, 50)
        mySprite5.setBounceOnWall(true)
    }
    if (Level == 3) {
        mySprite5 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite5, myTiles.tile13)
        mySprite5.setVelocity(50, 50)
        mySprite5.setBounceOnWall(true)
    }
    if (Level == 4) {
        mySprite5 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite5, myTiles.tile13)
        mySprite5.setVelocity(50, 50)
        mySprite5.setBounceOnWall(true)
    }
    if (Level == 5) {
        mySprite5 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite5, myTiles.tile21)
        mySprite5.setVelocity(50, 50)
        mySprite5.setBounceOnWall(true)
    }
})
