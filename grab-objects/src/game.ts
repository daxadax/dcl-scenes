import { PlaceableObject } from './placeable_object'
import { Player } from './player'
import { StaticObject } from './static_object'

// Player
const player = new Player()
player.initialize()

// Crate
const crate = new StaticObject(
  new GLTFShape('models/crate.glb'),
  new Transform({
    position: new Vector3(2, 0.35, 8),
  })
)

// RoundTable
const roundTable = new StaticObject(
  new GLTFShape('models/round_table.glb'),
  new Transform({
    position: new Vector3(8, 0, 8),
  })
)

// Cocktail
const cocktail = new PlaceableObject(
  new GLTFShape('models/cocktail.glb'),
  new Transform({
    position: new Vector3(8, 0.79, 8),
  }),
  player
)

const input = Input.instance

input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, (e) => {
  var currentTime = new Date()
  var pickupDelta = currentTime - player.grabbedAt

  if ( !player.emptyHanded() && pickupDelta > 500 ) {
    let transform = player.heldObject.getComponent(Transform)

    if ( noPositionData(e.hit.hitPoint) ) {
      log('no collider found: placing object on the ground')

      // Calculate object's ground position
      let forwardVector: Vector3 = Vector3.Forward().scale(1).rotate(Camera.instance.rotation)
      transform.position = Camera.instance.position.clone().add(forwardVector)
      transform.position.y = 0
    } else {
      log('placing object on object with collider: '+ e.hit.meshName)

      transform.position = e.hit.hitPoint
    }

    transform.lookAt(Camera.instance.position)
    transform.rotation.x = 0
    transform.rotation.z = 0

    player.dropHeldObject()
  }
})

function noPositionData(position: {}) {
  return position.x === 0 && position.y === 0 && position.z === 0
}
