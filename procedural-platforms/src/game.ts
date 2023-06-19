import * as utils from '@dcl/ecs-scene-utils'
import { Scene } from './scene'

import { generatePlatforms } from './platform_generator'

// adshares
import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import AdsharesBanner, { Props } from '../node_modules/@adshares/decentraland/src/item'

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

// TODO: automatic way to generate this
const totalPlatforms = 9
const totalSpacesX = 16
const totalSpacesY = 16

generatePlatforms(_scene, totalPlatforms, totalSpacesX, totalSpacesY)

// Moving platform

// // Triggered platform
// const platformTriggerBox = new utils.TriggerBoxShape(
//   new Vector3(2, 2, 2),
//   new Vector3(0, 1.7, 0)
// ) // Modified to match platform size
//
// createTriggeredPlatform(
//   _scene,
//   new GLTFShape('models/triggerPlatform.glb'),
//   new Transform({ position: new Vector3(14, 4, 12) }),
//   platformTriggerBox
// )

// // Pathed platform
// const path = [
//   new Vector3(6.5, 7, 4),
//   new Vector3(6.5, 7, 12),
//   new Vector3(6.5, 10.5, 12),
//   new Vector3(6.5, 10.5, 4),
// ]
// createPathedPlatform(
//   _scene,
//   new GLTFShape('models/triggerPlatform.glb'),
//   path,
//   10
// )


//adshares banners
// const banner = new AdsharesBanner()
// const spawner = new Spawner<Props>(banner)
//
// const first = spawner.spawn(
//   'banner',
//   new Transform({
//     position: new Vector3(8, 0, 0),
//     rotation: Quaternion.Euler(0, 180, 0),
//     scale: new Vector3(9, 6.75, 1)
//   }),
//   {
//     "adserver": "https://app.web3ads.net",
//     "exclude": "{\"quality\": [\"low\"], \"category\": [\"adult\"]}",
//     "keywords": "decentraland,metaverse",
//     "payout_address": "0xF339790A30101a854Fdc63d2b0378797BC8f99F3",
//     "payout_network": "bsc",
//     "zone_name": "default"
//   }
// )
//
// spawner.spawn(
//   'banner',
//   new Transform({
//     position: new Vector3(16, 8, 8),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(9, 6.75, 1)
//   }),
//   {
//     "adserver": "https://app.web3ads.net",
//     "exclude": "{\"quality\": [\"low\"], \"category\": [\"adult\"]}",
//     "keywords": "decentraland,metaverse",
//     "payout_address": "0xF339790A30101a854Fdc63d2b0378797BC8f99F3",
//     "payout_network": "bsc",
//     "zone_name": "default"
//   }
// )
//
// spawner.spawn(
//   'banner',
//   new Transform({
//     position: new Vector3(8, 0, 16),
//     rotation: Quaternion.Euler(0, 0, 0),
//     scale: new Vector3(9, 6.75, 1)
//   }),
//   {
//     "adserver": "https://app.web3ads.net",
//     "exclude": "{\"quality\": [\"low\"], \"category\": [\"adult\"]}",
//     "keywords": "decentraland,metaverse",
//     "payout_address": "0xF339790A30101a854Fdc63d2b0378797BC8f99F3",
//     "payout_network": "bsc",
//     "zone_name": "default"
//   }
// )
