import { Inventory } from './inventory'
import { Character } from './character'

// sound setup
// Sound is a separated from the plant entity so that you can
// still hear it even when the plant is removed from the engine.

const collectPlantSound = new Entity()
const source = new AudioSource(new AudioClip('sounds/collect_plant.mp3'))

collectPlantSound.addComponent(new Transform())
collectPlantSound.addComponent(source)
source.volume = 1

engine.addEntity(collectPlantSound)
collectPlantSound.setParent(Attachable.AVATAR)

// class setup

export class Plant extends Entity {
  constructor(
    modelName: string,
    transform: Transform,
    harvestCallback: (modelName: String) => void
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape('models/'+ modelName +'.glb')),
    this.addComponent(transform)

    this.addComponent(
      new OnPointerDown(
        (e) => {
          this.getComponent(Transform).scale.setAll(0)
          engine.removeEntity(this)

          // perform callback to harvest plant
          // server is responsible for everything once this is called
          // including assigning items and granting xp
          harvestCallback(modelName).then(function(response: String) {
            if ( response == 'success' ) {
              collectPlantSound.getComponent(AudioSource).playOnce()
            }
          });
        },
        // TODO: use display name rather than camelcase name
        { button: ActionButton.PRIMARY, hoverText: 'Harvest '+ modelName }
      )
    )
  }
}
