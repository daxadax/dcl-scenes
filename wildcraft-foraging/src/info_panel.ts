import { Character } from './character'

export class InfoPanel {
  canvas: UICanvas;
  character: Character;
  container: UIContainerRect;
  childPositionY: Number;

  private brand: UIText;
  private xpBar: UIText;

  constructor(canvas: UICanvas, character: Character) {
    this.canvas = canvas;
    this.character = character;

    const containerWidth = 800;

    this.container = new UIContainerRect(this.canvas)
    // container attributes
    this.container.childPositionY = '-30%'

    // container styling
    this.container.color = Color4.Black()
    this.container.width  = containerWidth
    this.container.height = 1000
    this.container.hAlign = 'center'
    this.container.vAlign = 'center'
    this.container.positionY = 0
    this.container.positionX = '45%'

    this.brand = new UIText(this.container)
    this.brand.fontSize = 30
    this.brand.positionY = '35.5%'
    this.brand.positionX = '2.5%'
    this.brand.hAlign = 'left'
    this.brand.value = 'WILDCRAFT'

    this.xpBar = new UIText(this.container)
    this.xpBar.fontSize = 20
    this.xpBar.positionY = '32.5%'
    this.xpBar.positionX = '2.5%'
    this.xpBar.hAlign = 'left'
  }

  show() {
    this.container.visible = true;
    this.xpBar.value = this.character.xp + ' XP';
  }

  hide() {
    this.container.visible = false;
  }

  isVisible() {
    return this.container.visible
  }
}
