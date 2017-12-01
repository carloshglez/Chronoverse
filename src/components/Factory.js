import Ship from './Ship';
import Asteroid from './Asteroid';
import PowerUp from './PowerUp';
import Enemy from './Enemy';
import { PW } from '../util/powerUpHelper';
import { ENEMY_TYPE, randomNumBetweenExcluding, randomNumBetween, getRandomItem } from '../util/helpers';

export default class Factory {
    constructor(args) {
        this.screenWidth = args.screenWidth
        this.screenHeight = args.screenHeight
        this.ship = null

        this.createObject = args.createObject
        this.gameOver = args.gameOver
        this.useShield = args.useShield
        this.addScore = args.addScore
        this.setAsteroidCount = args.setAsteroidCount
        this.setEnemyCount = args.setEnemyCount
        this.setPowerUpCount = args.setPowerUpCount
    }

    generateShip() {
        let ship = new Ship({
            position: {
                x: this.screenWidth / 2,
                y: this.screenHeight / 2
            },
            create: this.createObject,
            onDie: this.gameOver,
            useShield: this.useShield
        })
        this.createObject(ship, 'ship')
        this.ship = ship
    }

    generateAsteroids(howMany) {
        for (let i = 0; i < howMany; i++) {
            let asteroid = new Asteroid({
                size: randomNumBetween(10, 60),
                position: {
                    x: randomNumBetweenExcluding(0, this.screenWidth, this.ship.position.x - 60, this.ship.position.x + 60),
                    y: randomNumBetweenExcluding(0, this.screenHeight, this.ship.position.y - 60, this.ship.position.y + 60)
                },
                create: this.createObject,
                addScore: this.addScore
            });
            this.createObject(asteroid, 'asteroids');
        }
        this.setAsteroidCount(howMany);
    }

    generateEnemy(howMany) {
        for (let i = 0; i < howMany; i++) {
            let enemy = new Enemy({
                position: {
                    x: randomNumBetweenExcluding(0, this.screenWidth, this.ship.position.x - 60, this.ship.position.x + 60),
                    y: randomNumBetweenExcluding(0, this.screenHeight, this.ship.position.y - 60, this.ship.position.y + 60)
                },
                ship: this.ship,
                type: getRandomItem(ENEMY_TYPE),
                addScore: this.addScore,
                create: this.createObject
            });
            this.createObject(enemy, 'enemies');
        }
        this.setEnemyCount(howMany * 1000);
    }

    generatePowerUp(howMany) {
        for (let i = 0; i < howMany; i++) {
            let powerUp = new PowerUp({
                position: {
                    x: randomNumBetweenExcluding(0, this.screenWidth, this.ship.position.x - 60, this.ship.position.x + 60),
                    y: randomNumBetweenExcluding(0, this.screenHeight, this.ship.position.y - 60, this.ship.position.y + 60)
                },
                create: this.createObject,
                powerUp: getRandomItem(PW)
            });
            this.createObject(powerUp, 'powerUps');
        }
        this.setPowerUpCount(howMany);
    }
}
