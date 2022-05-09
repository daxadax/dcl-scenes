export function createAdBoard(
  scene: Entity,
  transform: Transform,
): Entity {
  const entity = new Entity()
  engine.addEntity(entity)
  entity.setParent(scene)
  entity.addComponent(transform)

  // create board shape
  entity.addComponent(new PlaneShape())

  return entity
}
