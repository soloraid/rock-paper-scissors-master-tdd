import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';

describe('GameService', () => {
    let service: GameService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GameService);
    });

    it('should show YOU WIN when first player paper and second player rock', () => {
        expect(service.computeResult('paper', 'rock')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player rock and second player scissors', () => {
        expect(service.computeResult('rock', 'scissors')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player scissors and second player paper', () => {
        expect(service.computeResult('scissors', 'paper')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player paper and second player spock', () => {
        expect(service.computeResult('paper', 'spock')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player scissors and second player lizard', () => {
        expect(service.computeResult('scissors', 'lizard')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player spock and second player rock', () => {
        expect(service.computeResult('spock', 'rock')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player lizard and second player paper', () => {
        expect(service.computeResult('lizard', 'paper')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player lizard and second player spock', () => {
        expect(service.computeResult('lizard', 'spock')).toContain('YOU WIN');
    });

    it('should show YOU WIN when first player spock and second player scissors', () => {
        expect(service.computeResult('spock', 'scissors')).toContain('YOU WIN');
    });

    it('should show YOU LOSE when first player paper and second player scissors', () => {
        expect(service.computeResult('paper', 'scissors')).toContain('YOU LOSE');
    });

    it('should show YOU LOSE when first player rock and second player paper', () => {
        expect(service.computeResult('rock', 'paper')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player scissors and second player rock', () => {
        expect(service.computeResult('scissors', 'rock')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player spock and second player paper', () => {
        expect(service.computeResult('spock', 'paper')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player lizard and second player scissors', () => {
        expect(service.computeResult('lizard', 'scissors')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player rock and second player spock', () => {
        expect(service.computeResult('rock', 'spock')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player paper and second player lizard', () => {
        expect(service.computeResult('paper', 'lizard')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player spock and second player lizard', () => {
        expect(service.computeResult('spock', 'lizard')).toContain('YOU LOSE');
    });

    it('should show YOU WIN when first player scissors and second player spock', () => {
        expect(service.computeResult('scissors', 'spock')).toContain('YOU LOSE');
    });

    it('should show DRAW when first player paper and second player paper', () => {
        expect(service.computeResult('paper', 'paper')).toContain('DRAW');
    });

    it('should show DRAW when first player rock and second player rock', () => {
        expect(service.computeResult('rock', 'rock')).toContain('DRAW');
    });

    it('should show DRAW when first player scissors and second player scissors', () => {
        expect(service.computeResult('scissors', 'scissors')).toContain('DRAW');
    });

    it('should show DRAW when first player lizard and second player lizard', () => {
        expect(service.computeResult('lizard', 'lizard')).toContain('DRAW');
    });

    it('should show DRAW when first player spock and second player spock', () => {
        expect(service.computeResult('spock', 'spock')).toContain('DRAW');
    });

    it('should show increase score', () => {
        expect(service.computeScore('YOU WIN', 12)).toBe(13);
    });

    it('should show zero score', () => {
        expect(service.computeScore('YOU LOSE', 5)).toBe(0);
    });

    it('should show current score', () => {
        expect(service.computeScore('DRAW', 15)).toBe(15);
    });
});
