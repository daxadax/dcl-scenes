import { Inventory } from './inventory'
import { Character } from './character'

// Sound is a separated from the plant entity so that you can
// still hear it even when the plant is removed from the engine.

const collectPlantSound = new Entity()
const source = new AudioSource(new AudioClip('sounds/collect_plant.mp3'))

collectPlantSound.addComponent(new Transform())
collectPlantSound.addComponent(source)
source.volume = 1

engine.addEntity(collectPlantSound)
collectPlantSound.setParent(Attachable.AVATAR)

export let successRate = 0.3
export let failedHarvestXpModifer = 0.3

export class Plant extends Entity {
  constructor(
    modelName: String,
    transform: Transform,
    inventory: Inventory,
    character: Character
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

          const success = Math.random() > successRate ? true : false
          const xp = 100;

          if ( success ) {
            log('successfully harvested '+ modelName)

            // play sound
            collectPlantSound.getComponent(AudioSource).playOnce()

            // add to inventory
            inventory.addItemOrCreate(1, modelName)

            // grant experience
            character.incrementExperience(xp)
          } else {
            log('failed to harvest '+ modelName)

            character.incrementExperience(xp * failedHarvestXpModifer)
          }
        },
        { button: ActionButton.PRIMARY }
      )
    )
  }
}
