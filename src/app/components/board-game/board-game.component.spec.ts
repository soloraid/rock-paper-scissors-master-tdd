import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {IconsComponent} from '../icons/icons.component';

import {BoardGameComponent} from './board-game.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {spyOnClass} from 'jasmine-es6-spies/dist';
import {ElementComponent} from '../element/element.component';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {GameService} from '../../services/game.service';

describe('MainBoardComponent', () => {
    let component: BoardGameComponent;
    let fixture: ComponentFixture<BoardGameComponent>;
    let dialogService: jasmine.SpyObj<MatDialog>;
    let gameService: jasmine.SpyObj<GameService>;
    const element = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        const spyRouter = jasmine.createSpyObj(Router, ['navigate']);
        await TestBed.configureTestingModule({
            declarations: [BoardGameComponent, IconsComponent, ElementComponent],
            imports: [
                MatDialogModule,
                RouterTestingModule,
            ],
            providers: [
                {provide: MatDialog, useFactory: () => spyOnClass(MatDialog)},
                {provide: GameService, useFactory: () => spyOnClass(GameService)},
                {provide: Router, useValue: spyRouter},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BoardGameComponent);
        component = fixture.componentInstance;
        dialogService = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
        gameService = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;
        fixture.detectChanges();
    });

    it('should show score', () => {
        const score = element('[data-test="score"]');
        expect(score).toBeTruthy();
    });

    it('should show pentagon', () => {
        const pentagon = element('[data-test="pentagon"]');
        expect(pentagon).toBeTruthy();
    });

    it('should show rock', () => {
        const rock = element('[data-test="rock"]');
        expect(rock).toBeTruthy();
    });

    it('should show paper', () => {
        const paper = element('[data-test="paper"]');
        expect(paper).toBeTruthy();
    });

    it('should show lizard', () => {
        const lizard = element('[data-test="lizard"]');
        expect(lizard).toBeTruthy();
    });

    it('should show spock', () => {
        const spock = element('[data-test="spock"]');
        expect(spock).toBeTruthy();});

    it('should show scissors', () => {
        const scissors = element('[data-test="scissors"]');
        expect(scissors).toBeTruthy();
    });

    it('should show show rules', () => {
        const rulesBtn = element('[data-test="rules-btn"] button');
        rulesBtn.click();
        expect(dialogService.open).toHaveBeenCalled();
    });

    it('should paper selected after clicking item icon', () => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        fixture.detectChanges();
        expect(component.userSelectedItem).toContain('paper');
    });

    it('should show user selected Item', () => {
        component.computerTurn = true;
        component.userSelectedItem = 'rock';
        fixture.detectChanges();
        const userItem = element('[data-test="user-selected-item"]');
        expect(userItem).toBeTruthy();
    });

    it('should show computer selection after clicking on item icon', () => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        fixture.detectChanges();
        const computerItem = element('[data-test="computer-selected-item"]');
        expect(computerItem).toBeTruthy();
    });

    it('should show blank circle before computer selection', () => {
        component.computerTurn = true;
        component.userSelectedItem = 'rock';
        fixture.detectChanges();
        const blankCircle = element('[data-test="blank-circle"]');
        expect(blankCircle).toBeTruthy();
    });

    it('should show user game result', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        expect(component.gameResult).toContain('YOU WIN');
    }));

    it('should show play again button', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        const playAgain = element('[data-test="play-again"]');
        expect(playAgain).toBeTruthy();
    }));

    it('should show increased score', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        gameService.computeScore.and.returnValue(11);
        component.score = 10;
        fixture.detectChanges();
        tick(1000);
        expect(component.score).toBe(11);
    }));

    it('should show reset score', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU LOSE');
        gameService.computeScore.and.returnValue(0);
        component.score = 10;
        fixture.detectChanges();
        tick(1000);
        expect(component.score).toBe(0);

    }));

    it('should show not changed score', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('DRAW');
        gameService.computeScore.and.returnValue(10);
        component.score = 10;
        fixture.detectChanges();
        tick(1000);
        expect(component.score).toBe(10);
    }));

    it('should show user selection after clicking on play again button', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        const playAgainBtn = element('[data-test="play-again"] button');
        playAgainBtn.click();
        expect(component.computerTurn).toBe(false);
    }));

    it('should reset user selection after clicking on play again button', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        const playAgainBtn = element('[data-test="play-again"] button');
        playAgainBtn.click();
        expect(component.userSelectedItem).toBe('none');
    }));

    it('should reset computer selection after clicking on play again button', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        const playAgainBtn = element('[data-test="play-again"] button');
        playAgainBtn.click();
        expect(component.computerSelectedItem).toBe('none');
    }));

    it('should reset computer selection after clicking on play again button', fakeAsync(() => {
        const appElement = fixture.debugElement.query(By.directive(ElementComponent));
        appElement.triggerEventHandler('selectElementEvent', 'paper');
        gameService.computeResult.and.returnValue('YOU WIN');
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        const playAgainBtn = element('[data-test="play-again"] button');
        playAgainBtn.click();
        expect(component.gameResult).toBe(undefined);
    }));
});
