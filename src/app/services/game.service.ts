import {Injectable} from '@angular/core';
import {ItemType} from '../models/item.type';
import {GameResultType} from '../models/game-result.type';

@Injectable({
    providedIn: 'root',
})
export class GameService {

    computeResult(firstPlayerItem: ItemType, secondPlayerItem: ItemType): GameResultType {
        if (firstPlayerItem === secondPlayerItem) {
            return 'DRAW';
        }
        switch (firstPlayerItem) {
            case 'paper':
                if (secondPlayerItem === 'rock') {
                    return 'YOU WIN';
                }
                break;
            case 'rock':
                if (secondPlayerItem === 'scissors') {
                    return 'YOU WIN';
                }
                break;
            case 'scissors':
                if (secondPlayerItem === 'paper') {
                    return 'YOU WIN';
                }
                break;

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
