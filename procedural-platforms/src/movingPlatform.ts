import * as utils from '@dcl/ecs-scene-utils'

export function createMovingPlatform(
  scene: Entity,
  model: GLTFShape,
  startPos: Vector3,
  endPos: Vector3,
  time: number
): Entity {
  const entity = new Entity()
  engine.addEntity(entity)
  entity.setParent(scene)
  entity.addComponent(model)
  entity.addComponent(new Transform())

  //entity.addComponent(new PlaneShape())
  // entity.getComponent(Transform).rotation.set(180,0,0,180)
  // entity.getComponent(Transform).scale.set(1.5,1.5,1.5)

  //const randomVal = Math.random() * 30
  // entity.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(randomVal, randomVal, randomVal)))

  // Move the platform back and forth between start and end positions
  entity.addComponent(
    new utils.ToggleComponent(
      utils.ToggleState.Off,
      (value: utils.ToggleState) => {
        if (value === utils.ToggleState.On) {
          entity.addComponentOrReplace(
            new utils.MoveTransformComponent(startPos, endPos, time, () => {
              entity.getComponent(utils.ToggleComponent).toggle()
            })
          )
        } else {
          entity.addComponentOrReplace(
            new utils.MoveTransformComponent(endPos, startPos, time, () => {
              entity.getComponent(utils.ToggleComponent).toggle()
            })
          )
        }
      }
    )
  )
  entity.getComponent(utils.ToggleComponent).toggle()
  return entity
}
