import { createMovingPlatform } from './movingPlatform'
import { createPathedPlatform } from './pathedPlatform'
import { createStaticPlatform } from './staticPlatform'
import { createTriggeredPlatform } from './triggeredPlatform'
import { createCoin } from './coin'

import * as utils from '@dcl/ecs-scene-utils'

export function generatePlatforms(
  scene: Entity,
  totalPlatforms: number,
  totalSpacesX: number,
  totalSpacesY: number
) {
  let platforms = []

  // set platform variables
  let terminalPlatform = totalPlatforms - 1
  let verticalityIncrease = 2
  let spawnDirection

  // create initial random starting position
  let startingPosition = [randomNumberInBounds(2, totalSpacesX), 1, randomNumberInBounds(2, totalSpacesY)]
  let endingPosition = 0
  let distanceTraveled = 0

  for (let platform = 0; platform < totalPlatforms; platform++) {
    spawnDirection = determineSpawnDirection(startingPosition, totalSpacesX, totalSpacesY, spawnDirection)

    // by default move horizonatally
    if ( (platform === 0 || platform % verticalityIncrease) != 0 ) {
      endingPosition = calculateEndingPosition(startingPosition, spawnDirection)
      distanceTraveled = calculateDistanceTraveled(startingPosition, endingPosition, spawnDirection)
    } else {
      endingPosition = [startingPosition[0], startingPosition[1] + 4, startingPosition[2]]
      distanceTraveled = 4
    }

    log('platform', platform)
    log('start', startingPosition)
    log('spawndirection', spawnDirection)
    log('distanceTraveled', distanceTraveled)
    log('end', endingPosition)

    const entity = createMovingPlatform(
      scene,
      new GLTFShape('models/triggerPlatform.glb'),
      new Vector3(startingPosition[0], startingPosition[1], startingPosition[2]),
      new Vector3(endingPosition[0], endingPosition[1], endingPosition[2]),
      distanceTraveled / 4
    )

    if ( platform === terminalPlatform ) {
      // Trigger shape for coin
      const coinTriggerBox = new utils.TriggerBoxShape(
        new Vector3(1.5, 3, 1.5),
        new Vector3(0, 1, 0)
      )

      createCoin(
        scene,
        new GLTFShape('models/starCoin.glb'),
        new Transform({ position: new Vector3(endingPosition[0], endingPosition[1] + 3, endingPosition[2]) }),
        coinTriggerBox
      )
    }

    startingPosition = buildNextStartingPosition(endingPosition, spawnDirection)

    platforms.push(entity)
  }

  return platforms
}

function randomNumberInBounds(min: number, max: number) {
  var num = Math.floor(Math.random() * max)

  if ( num < min ) {
    return Math.floor(min)
  } else {
    return Math.floor(num)
  }
}

function determineSpawnDirection(
  startingPosition: number[],
  totalSpacesX: number,
  totalSpacesY: number,
  previousDirection: any = null
) {
  let possibilities = []
  let currentX = startingPosition[0]
  let currentY = startingPosition[2]
  let skipXAxis = false
  let skipYAxis = false

  log('currentX, currentY', currentX, currentY)

  // // skip possibilities on current access if previousDirection is at the end of that axis
  // if ( previousDirection != null && previousDirection.direction === 'asc' ) {
  //   if ( currentX > totalSpacesX - 2 ) { skipXAxis = true; log('asc double back on x-axis') }
  //   if ( currentY > totalSpacesX - 2 ) { skipYAxis = true; log('asc double back on y-axis') }
  // }

  // if ( previousDirection != null && previousDirection.direction === 'desc' ) {
  //   if ( currentX > 2 ) { skipXAxis = true; log('desc double back on x-axis') }
  //   if ( currentY > 2 ) { skipYAxis = true; log('desc double back on y-axis') }
  // }

  // x-axis
  if ( !skipXAxis ) {
    if ( currentX >= 4 ) { possibilities.push({ axis: 'x', direction: 'desc'}) }
    if ( (totalSpacesX - currentX) >= 3 ) { possibilities.push({ axis: 'x', direction: 'asc'}) }
  }

  // y-axis
  if ( !skipYAxis ) {
    if ( currentY >= 4 ) { possibilities.push({ axis: 'y', direction: 'desc'}) }
    if ( (totalSpacesY - currentY) >= 3 ) { possibilities.push({ axis: 'y', direction: 'asc'}) }
  }

  // sample possibilities
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}

function calculateEndingPosition(startingPosition: number[], spawnDirection: any) {
  let currentX = startingPosition[0]
  let currentY = startingPosition[2]
  let currentZ = startingPosition[1]
  let xPosition, yPosition

  if ( spawnDirection.direction === 'asc' ) {
    // xPosition = spawnDirection.axis === 'x' ? randomNumberInBounds(currentX, 16) : currentX
    // yPosition = spawnDirection.axis === 'y' ? randomNumberInBounds(currentY, 16) : currentY
    xPosition = spawnDirection.axis === 'x' ? 14 : currentX
    yPosition = spawnDirection.axis === 'y' ? 14 : currentY
  } else {
    // xPosition = spawnDirection.axis === 'x' ? randomNumberInBounds(2, currentX) : currentX
    // yPosition = spawnDirection.axis === 'y' ? randomNumberInBounds(2, currentY) : currentY
    xPosition = spawnDirection.axis === 'x' ? 3 : currentX
    yPosition = spawnDirection.axis === 'y' ? 3 : currentY
  }

  return [xPosition, currentZ, yPosition]
}

function calculateDistanceTraveled(startingPosition: number[], endingPosition: number[], spawnDirection: any) {
  let element = spawnDirection.axis == 'x' ? 0 : 2

  if ( spawnDirection.direction === 'asc' ) {
    return endingPosition[element] - startingPosition[element]
  } else {
    return startingPosition[element] - endingPosition[element]
  }
}

function buildNextStartingPosition(currentPosition: number[], spawnDirection: any) {
  let currentX = currentPosition[0]
  let currentY = currentPosition[2]
  let currentZ = currentPosition[1]
  let xPosition, yPosition

  if ( spawnDirection.direction === 'asc' ) {
    if ( spawnDirection.axis === 'x' ) {
      xPosition = currentX + 1
      yPosition = currentY
    } else {
      xPosition = currentX
      yPosition = currentY + 1
    }
  } else {
    if ( spawnDirection.axis === 'x' ) {
      xPosition = currentX - 1
      yPosition = currentY
    } else {
      xPosition = currentX
      yPosition = currentY - 1
    }
  }

  return [xPosition, currentZ, yPosition]
}
