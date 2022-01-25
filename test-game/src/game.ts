// utilities
import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { getUserData } from "@decentraland/Identity"

// local resources
import { Coin } from './coin'
import { Plant } from './plants'
import { Inventory } from './inventory'
import { Character } from './character'

export async function setUserData(character: Character) {
  character.userData = await getUserData()
}
// initialize character
const character = new Character()
setUserData(character)

// initialize canvas
const canvas = new UICanvas()

// initialize inventory
const inventory = new Inventory(canvas)
inventory.hide()

// initialize plant
new Plant(
  'pink_fern',
  new Transform({ position: new Vector3(8, 0, 8) }),
  inventory,
  character
)

new Plant(
  'pink_fern',
  new Transform({ position: new Vector3(10, 0, 10) }),
  inventory,
  character
)

// initialize input events
const input = Input.instance

input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (e) => {
  if ( inventory.isVisible() ) {
    inventory.hide()
  } else {
    inventory.show()
  }
})

// Adding base scene models
// const base = new Entity()
// base.addComponent(new GLTFShape('models/baseLight.glb'))
// engine.addEntity(base)

// const canvas = new UICanvas()
// const inventory = new UIContainerRect(canvas)
// inventory.width = "70%"
// inventory.height = "70%"
// inventory.color = Color4.Black()
// inventory.opacity = 0.95

// // Contains the positions for each coin
// const coinPositions = [
//   new Vector3(2.2, 1.5, 2.2),
//   new Vector3(5.2, 1.5, 2.2),
//   new Vector3(8, 1.5, 2.2),
//   new Vector3(10.8, 1.5, 2.2),
//   new Vector3(13.8, 1.5, 2.2),
//   new Vector3(13.8, 1.5, 5),
//   new Vector3(13.8, 1.5, 8),
//   new Vector3(10.8, 1.5, 8),
//   new Vector3(8, 1.5, 8),
//   new Vector3(5.2, 1.5, 8),
//   new Vector3(2.2, 1.5, 8),
//   new Vector3(2.2, 1.5, 10.9),
//   new Vector3(2.2, 1.5, 13.8),
//   new Vector3(5.2, 1.5, 13.8),
//   new Vector3(8, 1.5, 13.8),
//   new Vector3(10.8, 1.5, 13.8),
//   new Vector3(13.8, 1.5, 13.8),
// ]
//
// // add ui elements
// let coinIcon  = new ui.SmallIcon('images/treasure.png', -75, 0)
// let coinCount = new ui.UICounter(0, 10, -10, Color4.White(), 32, true)
//
// // Setup the coins
// for (let coinPosition of coinPositions) {
//   const coin = new Coin(
//     new GLTFShape('models/coin.glb'),
//     new Transform({ position: coinPosition }),
//     new utils.TriggerBoxShape(
//       new Vector3(0.2, 0.2, 0.2),
//       new Vector3(0, 1, 0)
//     ),
//     coinCount
//   )
// }
