import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RulesComponent} from '../rules/rules.component';
import {ItemType} from '../../models/item.type';
import {GameService} from '../../services/game.service';
import {GameResultType} from '../../models/game-result.type';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
    selector: 'app-board-game',
    templateUrl: './board-game.component.html',
    styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent implements OnInit {
    score = 0;
    userSelectedItem: ItemType;
    computerSelectedItem: ItemType;
    computerTurn = false;
    choices: ItemType[] = ['rock', 'paper', 'scissors'];
    gameResult: GameResultType;
    private configurationDialog: any;
    private dataDialog: { fullScreen: boolean } = {fullScreen: false};

    constructor(private dialogService: MatDialog, private gameService: GameService,
                private breakPointObserver: BreakpointObserver,) {
    }

    ngOnInit(): void {
        this.breakPointObserver.observe(['(max-width: 768px)']).subscribe(state => {
            this.dataDialog.fullScreen = state.matches;
            if (state.matches) {
                this.configurationDialog = {
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    height: '100%',
                    width: '100%',
                    data: {fullScreen: state.matches},
                }
            } else {
                this.configurationDialog = {
                    maxWidth: '400px',
                    maxHeight: '400px',
                    height: '100%',
                    width: '100%',
                    data: {fullScreen: state.matches},
                }
            }
        })
    }

    openRulesDialog(): void {
        this.dialogService.open(RulesComponent, this.configurationDialog);
    }

    selectItem(item: ItemType): void {
        this.userSelectedItem = item;
        this.computerTurn = true;
        setTimeout(() => this.computeResult(), 1000);
    }

    computeResult(): void {
        this.computerSelectedItem = this.choices[Math.floor(Math.random() * 3)];
        this.gameResult = this.gameService.computeResult(this.userSelectedItem, this.computerSelectedItem);
        this.score = this.gameService.computeScore(this.gameResult, this.score);
    }

    resetBoardGame(): void {
        this.computerTurn = false;
        this.userSelectedItem = undefined;
        this.computerSelectedItem = undefined;
        this.gameResult = undefined;
    }
}
