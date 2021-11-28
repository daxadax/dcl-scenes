// import libraries
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'

// set global vars
let selectedClip = null

// define track list
const soundClips: { description: string; src: string; name: string }[] = [
  {
    description: "Find the others",
    src: "audio/find_the_others.mp3",
    name: "Find the others"
  },
  {
    description: "The meat and the time",
    src: "audio/the_meat_and_the_time.mp3",
    name: "The meat and the time"
  },
  {
    description: "Reclaim your mind",
    src: "audio/reclaim_your_mind.mp3",
    name: "Reclaim your mind"
  },
  {
    description: "Nature loves courage",
    src: "audio/nature_loves_courage.mp3",
    name: "Nature loves courage"
  }
]

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const locationMatrix = new Transform({
  position: new Vector3(9.5, 0.710779070854187, 5.5),
  rotation: new Quaternion(-2.361580584745956e-15, -0.42631685733795166, 5.082092968677898e-8, 0.9045739769935608),
  scale: new Vector3(2.090116500854492, 2.0901145935058594, 2.090116500854492)
})

export let introduction: Dialog[] = [
  {
    text: 'Hey there, I\'m Terence McKenna.',
  },
  {
    text: 'You can select a topic on the terminal next to me to hear a sound clip from one of my lectures.',
    isEndOfDialog: true
  }
]

// TODO: add reddit link to end of terence dialog
// informationTerminal.addComponent(
//    new OnPointerDown(() => {
//      openExternalURL("https://www.reddit.com/r/terencemckenna/comments/mc5y3z/find_the_others_in_decentraland/")
//    })
//  )


let terrenceNpc = new NPC(locationMatrix, 'models/mckenna.glb',
  () => { terrenceNpc.talk(introduction) },
  {
    onlyClickTrigger: true
  }
)

const transform24 = new Transform({
  position: new Vector3(7.625242233276367, 0, 3.8290839195251465),
  rotation: new Quaternion(2.2311382520226225e-16, 0.2902846932411194, -3.4604628496026635e-8, 0.9569404125213623),
  scale: new Vector3(1.0099999904632568, 1, 1)
})

// set default sound clip
selectClip(0)

// TODO: sound is coming from BEHIND mckenna, it should come from his mouth
// going out..

export let terminalInteraction: Dialog[] = [
  {
    text: 'Welcome to the McKenna library. Please select an option to hear Terence speak about it.',
    isQuestion: true,
    buttons: [
      {
        label: 'Play selection',
        goToDialog: 1,
        triggeredActions: () => playSelectedClip()
      },
      { label: 'Next topic', goToDialog: selectedClip + 2 }
    ]
  },
  {
    // play current selection
    text: 'Playing selected clip',
    isEndOfDialog: true
  }
]

soundClips.forEach(function(clip, index) {
  var dialogOption = {
    text: clip.description,
    isQuestion: true,
    buttons: [
      {
        label: 'Select',
        goToDialog: 1,
        triggeredActions: () => {
          selectClip(index);
          playSelectedClip();
        }
      },
      { label: 'Next topic', goToDialog: determineDialogOption(index) }
    ]
  }

  terminalInteraction.push(dialogOption)
})

function selectClip(clip) {
  selectedClip = clip
}

function playSelectedClip() {
  var audioClip = new AudioClip(soundClips[selectedClip].src)
  var audioSource = new AudioSource(audioClip)

  // add default audio source
  terrenceNpc.addComponentOrReplace(audioSource)

  // play clip
  audioSource.playOnce()
}

function determineDialogOption(index) {
  if( soundClips[index] == soundClips[soundClips.length - 1] ) {
    return 2;
  } else {
    return index + 3;
  }
}

let terminalNpc = new NPC(transform24, 'models/Terminal_01/Terminal_01.glb',
  () => { terminalNpc.talk(terminalInteraction) },
  {
    onlyClickTrigger: true
  }
)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape2 = new GLTFShape("models/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(10.57972240447998, 0, 4.840790748596191),
  rotation: new Quaternion(-2.960919541234591e-14, 0.979516863822937, -1.1676750943934167e-7, -0.20136234164237976),
  scale: new Vector3(2.219846248626709, 2.219841957092285, 2.219846248626709)
})
greenSycamoreTree.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
greenSycamoreTree.addComponentOrReplace(gltfShape3)

const gypsyMushroom = new Entity('gypsyMushroom')
engine.addEntity(gypsyMushroom)
gypsyMushroom.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(11.542625427246094, 1.9371509552001953e-7, 6.060201644897461),
  rotation: new Quaternion(-0.6386075615882874, 0.013621432706713676, -0.7692370414733887, 0.016407670453190804),
  scale: new Vector3(-7.3613996505737305, -7.361404895782471, -7.361396312713623)
})
gypsyMushroom.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/Mushroom_02/Mushroom_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
gypsyMushroom.addComponentOrReplace(gltfShape4)

const gypsyMushroom2 = new Entity('gypsyMushroom2')
engine.addEntity(gypsyMushroom2)
gypsyMushroom2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(9.50840950012207, 0, 2.579975128173828),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom2.addComponentOrReplace(transform6)
gypsyMushroom2.addComponentOrReplace(gltfShape4)

const gypsyMushroom3 = new Entity('gypsyMushroom3')
engine.addEntity(gypsyMushroom3)
gypsyMushroom3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(9.748647689819336, 0, 2.964991807937622),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom3.addComponentOrReplace(transform7)
gypsyMushroom3.addComponentOrReplace(gltfShape4)

const gypsyMushroom4 = new Entity('gypsyMushroom4')
engine.addEntity(gypsyMushroom4)
gypsyMushroom4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(10.164863586425781, 0, 2.8427834510803223),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(2.309746026992798, 2.3097453117370605, 2.309746026992798)
})
gypsyMushroom4.addComponentOrReplace(transform8)
gypsyMushroom4.addComponentOrReplace(gltfShape4)

const gypsyMushroom5 = new Entity('gypsyMushroom5')
engine.addEntity(gypsyMushroom5)
gypsyMushroom5.setParent(_scene)
gypsyMushroom5.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(9.928110122680664, 0, 2.5461127758026123),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom5.addComponentOrReplace(transform9)

const gypsyMushroom6 = new Entity('gypsyMushroom6')
engine.addEntity(gypsyMushroom6)
gypsyMushroom6.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(11.279815673828125, 2.2351741790771484e-7, 6.716655731201172),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom6.addComponentOrReplace(transform10)
gypsyMushroom6.addComponentOrReplace(gltfShape4)

const gypsyMushroom7 = new Entity('gypsyMushroom7')
engine.addEntity(gypsyMushroom7)
gypsyMushroom7.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12.265064239501953, 2.086162567138672e-7, 5.2069244384765625),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom7.addComponentOrReplace(transform11)
gypsyMushroom7.addComponentOrReplace(gltfShape4)

const gypsyMushroom8 = new Entity('gypsyMushroom8')
engine.addEntity(gypsyMushroom8)
gypsyMushroom8.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(10.886170387268066, 1.043081283569336e-7, 5.797392845153809),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom8.addComponentOrReplace(transform12)
gypsyMushroom8.addComponentOrReplace(gltfShape4)

const gypsyMushroom9 = new Entity('gypsyMushroom9')
engine.addEntity(gypsyMushroom9)
gypsyMushroom9.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(10.820184707641602, 1.9371509552001953e-7, 6.913477897644043),
  rotation: new Quaternion(-4.945319806227467e-16, -0.5506151914596558, 6.563844578977296e-8, 0.8347592353820801),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gypsyMushroom9.addComponentOrReplace(transform13)
gypsyMushroom9.addComponentOrReplace(gltfShape4)

const maidenhairFern = new Entity('maidenhairFern')
engine.addEntity(maidenhairFern)
maidenhairFern.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11.01814079284668, 0, 3.56522274017334),
  rotation: new Quaternion(-1.441986348306879e-14, 0.9796076416969299, -1.1677831679435258e-7, -0.20092017948627472),
  scale: new Vector3(1.7906603813171387, 1.7906581163406372, 1.7906603813171387)
})
maidenhairFern.addComponentOrReplace(transform14)
const gltfShape5 = new GLTFShape("models/Plant_07/Plant_07.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
maidenhairFern.addComponentOrReplace(gltfShape5)

const mediumForestLog = new Entity('mediumForestLog')
engine.addEntity(mediumForestLog)
mediumForestLog.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(11.058452606201172, 0, 3.0865461826324463),
  rotation: new Quaternion(2.2348271863870334e-15, -0.9316110610961914, 1.1105667852007173e-7, 0.36345696449279785),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
mediumForestLog.addComponentOrReplace(transform15)
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
