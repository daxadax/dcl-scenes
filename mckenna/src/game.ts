// import libraries
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import { soundClips } from 'src/tracklist'

// set global vars
let selectedClip = null

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

const terencePosition = new Transform({
  position: new Vector3(9.5, 0.710779070854187, 5.5),
  rotation: new Quaternion(-2.361580584745956e-15, -0.42631685733795166, 5.082092968677898e-8, 0.9045739769935608),
  scale: new Vector3(2.090116500854492, 2.0901145935058594, 2.090116500854492)
})

let terrenceNpc = new NPC(terencePosition, 'models/mckenna.glb',
  () => { terrenceNpc.talk(introduction) },
  {
    onlyClickTrigger: true
  }
)

// set default sound clip
selectClip(0)

export let terminalInteraction: Dialog[] = [
  {
    text: 'Welcome to the McKenna library. Please select an option to hear Terence speak about it.',
    isQuestion: true,
    buttons: [
      { label: 'Next', goToDialog: selectedClip + 2 }
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
    text: clip.description + "\nduration: " + clip.duration,
    isQuestion: true,
    buttons: [
      { label: 'Next', goToDialog: determineDialogOption(index) },
      {
        label: 'Select',
        goToDialog: 1,
        triggeredActions: () => {
          selectClip(index);
          playSelectedClip();
        }
      }
    ]
  }

  terminalInteraction.push(dialogOption)
})

function selectClip(clip) {
  selectedClip = clip
}

const speaker = new Entity('speaker')
engine.addEntity(speaker)
speaker.addComponent(
  new Transform({ position: new Vector3(8, 1, 8) })
)

function playSelectedClip() {
  var audioClip = new AudioClip(soundClips[selectedClip].src)
  var audioSource = new AudioSource(audioClip)

  // add default audio source
  speaker.addComponentOrReplace(audioSource)

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

const terminalPosition = new Transform({
  position: new Vector3(7.625242233276367, 0, 3.8290839195251465),
  rotation: new Quaternion(2.2311382520226225e-16, 0.2902846932411194, -3.4604628496026635e-8, 0.9569404125213623),
  scale: new Vector3(1.0099999904632568, 1, 1)
})

let terminalNpc = new NPC(terminalPosition, 'models/Terminal_01/Terminal_01.glb',
  () => { terminalNpc.talk(terminalInteraction) },
  {
    onlyClickTrigger: true
  }
)
