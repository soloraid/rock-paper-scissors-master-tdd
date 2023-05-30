import {Injectable} from '@angular/core';
import {ItemType} from '../models/item.type';
import {GameResultType} from '../models/game-result.type';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    private winner = {
        scissors: ['paper', 'lizard'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
        none: [],
    }
    computeResult(firstPlayerItem: ItemType, secondPlayerItem: ItemType): GameResultType {
        if (firstPlayerItem === secondPlayerItem) {
            return 'DRAW';
        }
        if(this.winner[firstPlayerItem].includes(secondPlayerItem)) {
            return 'YOU WIN';
        }
        return 'YOU LOSE';
    }

    computeScore(gameResult: GameResultType, score: number): number {
        if (gameResult === 'YOU WIN') {
            return score + 1;
        }
        if (gameResult === 'DRAW') {
            return score;
        }
        return 0;
    }
}
