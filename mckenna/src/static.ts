const _scene = new Entity('_scene')
engine.addEntity(_scene)
const basePosition = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(basePosition)

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

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const treePosition = new Transform({
  position: new Vector3(10.57972240447998, 0, 4.840790748596191),
  rotation: new Quaternion(-2.960919541234591e-14, 0.979516863822937, -1.1676750943934167e-7, -0.20136234164237976),
  scale: new Vector3(2.219846248626709, 2.219841957092285, 2.219846248626709)
})
greenSycamoreTree.addComponentOrReplace(treePosition)
const gltfShape3 = new GLTFShape("models/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
greenSycamoreTree.addComponentOrReplace(gltfShape3)

const gypsyMushroom1 = new Entity('gypsyMushroom')
engine.addEntity(gypsyMushroom1)
gypsyMushroom1.setParent(_scene)
const mushroomPosition1 = new Transform({
  position: new Vector3(11.542625427246094, 1.9371509552001953e-7, 6.060201644897461),
  rotation: new Quaternion(-0.6386075615882874, 0.013621432706713676, -0.7692370414733887, 0.016407670453190804),
  scale: new Vector3(-7.3613996505737305, -7.361404895782471, -7.361396312713623)
})
gypsyMushroom1.addComponentOrReplace(mushroomPosition1)
const gltfShape4 = new GLTFShape("models/Mushroom_02/Mushroom_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
gypsyMushroom1.addComponentOrReplace(gltfShape4)

const gypsyMushroom2 = new Entity('gypsyMushroom2')
engine.addEntity(gypsyMushroom2)
gypsyMushroom2.setParent(_scene)
const mushroomPosition2 = new Transform({
  position: new Vector3(9.50840950012207, 0, 2.579975128173828),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom2.addComponentOrReplace(mushroomPosition2)
gypsyMushroom2.addComponentOrReplace(gltfShape4)

const gypsyMushroom3 = new Entity('gypsyMushroom3')
engine.addEntity(gypsyMushroom3)
gypsyMushroom3.setParent(_scene)
const mushroomPosition3 = new Transform({
  position: new Vector3(9.748647689819336, 0, 2.964991807937622),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom3.addComponentOrReplace(mushroomPosition3)
gypsyMushroom3.addComponentOrReplace(gltfShape4)

const gypsyMushroom4 = new Entity('gypsyMushroom4')
engine.addEntity(gypsyMushroom4)
gypsyMushroom4.setParent(_scene)
const mushroomPosition4 = new Transform({
  position: new Vector3(10.164863586425781, 0, 2.8427834510803223),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(2.309746026992798, 2.3097453117370605, 2.309746026992798)
})
gypsyMushroom4.addComponentOrReplace(mushroomPosition4)
gypsyMushroom4.addComponentOrReplace(gltfShape4)

const gypsyMushroom5 = new Entity('gypsyMushroom5')
engine.addEntity(gypsyMushroom5)
gypsyMushroom5.setParent(_scene)
gypsyMushroom5.addComponentOrReplace(gltfShape4)
const mushroomPosition5 = new Transform({
  position: new Vector3(9.928110122680664, 0, 2.5461127758026123),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom5.addComponentOrReplace(mushroomPosition5)

const gypsyMushroom6 = new Entity('gypsyMushroom6')
engine.addEntity(gypsyMushroom6)
gypsyMushroom6.setParent(_scene)
const mushroomPosition6 = new Transform({
  position: new Vector3(11.279815673828125, 2.2351741790771484e-7, 6.716655731201172),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom6.addComponentOrReplace(mushroomPosition6)
gypsyMushroom6.addComponentOrReplace(gltfShape4)

const gypsyMushroom7 = new Entity('gypsyMushroom7')
engine.addEntity(gypsyMushroom7)
gypsyMushroom7.setParent(_scene)
const mushroomPosition7 = new Transform({
  position: new Vector3(12.265064239501953, 2.086162567138672e-7, 5.2069244384765625),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom7.addComponentOrReplace(mushroomPosition7)
gypsyMushroom7.addComponentOrReplace(gltfShape4)

const gypsyMushroom8 = new Entity('gypsyMushroom8')
engine.addEntity(gypsyMushroom8)
gypsyMushroom8.setParent(_scene)
const mushroomPosition8 = new Transform({
  position: new Vector3(10.886170387268066, 1.043081283569336e-7, 5.797392845153809),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom8.addComponentOrReplace(mushroomPosition8)
gypsyMushroom8.addComponentOrReplace(gltfShape4)

const gypsyMushroom9 = new Entity('gypsyMushroom9')
engine.addEntity(gypsyMushroom9)
gypsyMushroom9.setParent(_scene)
const mushroomPosition9 = new Transform({
  position: new Vector3(10.820184707641602, 1.9371509552001953e-7, 6.913477897644043),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom9.addComponentOrReplace(mushroomPosition9)
gypsyMushroom9.addComponentOrReplace(gltfShape4)

const maidenhairFern = new Entity('maidenhairFern')
engine.addEntity(maidenhairFern)
maidenhairFern.setParent(_scene)
const fernPosition = new Transform({
  position: new Vector3(11.01814079284668, 0, 3.56522274017334),
  rotation: new Quaternion(-1.441986348306879e-14, 0.9796076416969299, -1.1677831679435258e-7, -0.20092017948627472),
  scale: new Vector3(1.7906603813171387, 1.7906581163406372, 1.7906603813171387)
})
maidenhairFern.addComponentOrReplace(fernPosition)
const gltfShape5 = new GLTFShape("models/Plant_07/Plant_07.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
maidenhairFern.addComponentOrReplace(gltfShape5)

const mediumForestLog = new Entity('mediumForestLog')
engine.addEntity(mediumForestLog)
mediumForestLog.setParent(_scene)
const logPosition = new Transform({
  position: new Vector3(11.058452606201172, 0, 3.0865461826324463),
  rotation: new Quaternion(2.2348271863870334e-15, -0.9316110610961914, 1.1105667852007173e-7, 0.36345696449279785),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
mediumForestLog.addComponentOrReplace(logPosition)
const gltfShape6 = new GLTFShape("models/Log_02/Log_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
mediumForestLog.addComponentOrReplace(gltfShape6)

const shrub2 = new Entity('shrub2')
engine.addEntity(shrub2)
shrub2.setParent(_scene)
const gltfShape7 = new GLTFShape("models/Bush_01/Bush_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
shrub2.addComponentOrReplace(gltfShape7)
const transform16 = new Transform({
  position: new Vector3(12.199077606201172, 2.980232238769531e-7, 6.323009490966797),
  rotation: new Quaternion(-4.853749509519528e-15, 0.10393434762954712, -1.238993263541488e-8, 0.9945842027664185),
  scale: new Vector3(1, 1, 1)
})
shrub2.addComponentOrReplace(transform16)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(14.00991439819336, 0, 2.0560364723205566),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree.addComponentOrReplace(transform17)
const gltfShape8 = new GLTFShape("models/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape8)

const greenSycamoreTree2 = new Entity('greenSycamoreTree2')
engine.addEntity(greenSycamoreTree2)
greenSycamoreTree2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(14, 0, 6.5),
  rotation: new Quaternion(5.472513853752373e-15, -0.8969240784645081, 1.0692168217474318e-7, -0.4421846568584442),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
greenSycamoreTree2.addComponentOrReplace(transform18)
greenSycamoreTree2.addComponentOrReplace(gltfShape3)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(14.317204475402832, 0, 4.990710735321045),
  rotation: new Quaternion(-1.1889546311933254e-15, -0.1670709103345871, 1.9916397420161047e-8, 0.985944926738739),
  scale: new Vector3(1.3895233869552612, 1.3895235061645508, 1.3895233869552612)
})
evergreenShrub.addComponentOrReplace(transform19)
const gltfShape9 = new GLTFShape("models/Bush_03/Bush_03.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
evergreenShrub.addComponentOrReplace(gltfShape9)

const largeForestLog = new Entity('largeForestLog')
engine.addEntity(largeForestLog)
largeForestLog.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(11.483575820922852, 0, 1.9008851051330566),
  rotation: new Quaternion(-0.17921969294548035, 0.5908081531524658, -0.22835394740104675, 0.752781867980957),
  scale: new Vector3(1.7901999950408936, 1.7901999950408936, 1.7901995182037354)
})
largeForestLog.addComponentOrReplace(transform20)
const gltfShape10 = new GLTFShape("models/Log_03/Log_03.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
largeForestLog.addComponentOrReplace(gltfShape10)

const greenSycamoreTree3 = new Entity('greenSycamoreTree3')
engine.addEntity(greenSycamoreTree3)
greenSycamoreTree3.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenSycamoreTree3.addComponentOrReplace(transform21)
greenSycamoreTree3.addComponentOrReplace(gltfShape3)

const gypsyMushroom10 = new Entity('gypsyMushroom10')
engine.addEntity(gypsyMushroom10)
gypsyMushroom10.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(9.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom10.addComponentOrReplace(transform22)
gypsyMushroom10.addComponentOrReplace(gltfShape4)

const bookshelfBench = new Entity('bookshelfBench')
engine.addEntity(bookshelfBench)
bookshelfBench.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(9, 0, 5.5),
  rotation: new Quaternion(-6.65064594497863e-16, -0.4713967442512512, 5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1.3829421997070312, 1.3829421997070312, 1.3829421997070312)
})
bookshelfBench.addComponentOrReplace(transform23)
const gltfShape11 = new GLTFShape("models/Shelf_03/Shelf_03.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bookshelfBench.addComponentOrReplace(gltfShape11)
