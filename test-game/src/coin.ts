import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'

// Sound is a separated from the coin entity so that you can
// still hear it even when the coin is removed from the engine.

const coinPickupSound = new Entity()
coinPickupSound.addComponent(new Transform())
coinPickupSound.addComponent(
  new AudioSource(new AudioClip('sounds/coin_pickup.mp3'))
)
engine.addEntity(coinPickupSound)
coinPickupSound.setParent(Attachable.AVATAR)

export class Coin extends Entity {
  constructor(
    model: GLTFShape,
    transform: Transform,
    trigger: utils.TriggerBoxShape,
    counter: ui.UICounter
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)

    // Create trigger for coin
    this.addComponent(
      new utils.TriggerComponent(trigger, {
        enableDebug: true,
        onCameraEnter: () => {
          // Camera enter
          this.getComponent(Transform).scale.setAll(0)
          coinPickupSound.getComponent(AudioSource).playOnce()
          counter.increase(Math.floor( Math.random() * 7 ))
        },
        onCameraExit: () => {
          // Camera exit
          engine.removeEntity(this)
        },
      })
    )
  }
}
