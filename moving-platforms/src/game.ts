import { createMovingPlatform } from './movingPlatform'
import { createTriggeredPlatform } from './triggeredPlatform'
import { createPathedPlatform } from './pathedPlatform'
import * as utils from '@dcl/ecs-scene-utils'
import { createCoin } from './coin'
import { Scene } from './scene'

// ads
import { createAdBoard } from './ad_board'

const _scene = new Scene()
_scene.getComponent(Transform).rotation.setEuler(0,180,0)
_scene.getComponent(Transform).position.set(16,0,16)

const ground = new Entity('entity')
engine.addEntity(ground)
ground.setParent(_scene)
const gltfShape2 = new GLTFShape("models/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
ground.addComponentOrReplace(gltfShape2)
const groundPosition = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ground.addComponentOrReplace(groundPosition)

// Static platform
const staticPlatform = new Entity()
staticPlatform.addComponent(new GLTFShape('models/staticPlatforms.glb'))
staticPlatform.addComponent(new Transform())
engine.addEntity(staticPlatform)
staticPlatform.setParent(_scene)

// Moving platform
createMovingPlatform(
  _scene,
  new GLTFShape('models/triggerPlatform.glb'),
  new Vector3(2, 1.5, 6.5),
  new Vector3(2, 1.5, 12),
  3
)

createMovingPlatform(
  _scene,
  new GLTFShape('models/triggerPlatform.glb'),
  new Vector3(4, 1.5, 14),
  new Vector3(4, 4, 14),
  2
)

// Triggered platform
const platformTriggerBox = new utils.TriggerBoxShape(
  new Vector3(2, 2, 2),
  new Vector3(0, 1.7, 0)
) // Modified to match platform size

createTriggeredPlatform(
  _scene,
  new GLTFShape('models/triggerPlatform.glb'),
  new Transform({ position: new Vector3(13, 5, 12) }),
  platformTriggerBox
)

// Pathed platform
const path = [
  new Vector3(6.5, 7, 4),
  new Vector3(6.5, 7, 12),
  new Vector3(6.5, 10.5, 12),
  new Vector3(6.5, 10.5, 4),
]
createPathedPlatform(
  _scene,
  new GLTFShape('models/triggerPlatform.glb'),
  path,
  10
)

// Coin
const coinTriggerBox = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
) // Trigger shape for coin

createCoin(
  _scene,
  new GLTFShape('models/starCoin.glb'),
  new Transform({ position: new Vector3(9, 12.75, 8) }),
  coinTriggerBox
)

// create ad boards
createAdBoard(
  _scene,
  new Transform({
    position: new Vector3(10, 2.25, 13),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(10, 4.5, 0)
  })
)

createAdBoard(
  _scene,
  new Transform({
    position: new Vector3(10, 2.25, 15),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(10, 4.5, 0)
  })
)
