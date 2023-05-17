import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RulesComponent} from './rules.component';
import {ElementComponent} from '../element/element.component';
import {IconsComponent} from '../icons/icons.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {spyOnClass} from 'jasmine-es6-spies/dist';

describe('RulesComponent', () => {
    let component: RulesComponent;
    let fixture: ComponentFixture<RulesComponent>;
    let dialogRef: jasmine.SpyObj<MatDialogRef<RulesComponent>>;
    let dialogData;
    const element = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RulesComponent, ElementComponent, IconsComponent],
            providers: [
                {provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef)},
                {provide: MAT_DIALOG_DATA, useValue: {}},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RulesComponent);
        component = fixture.componentInstance;
        dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<RulesComponent>>;
        dialogData = TestBed.inject(MAT_DIALOG_DATA);
        fixture.detectChanges();
    });

    it('should show title', () => {
        const titleContainer = element('[data-test="title"]');
        expect(titleContainer).toBeTruthy();
    });

    it('should show rules', () => {
        const rules = element('[data-test="rules"]');
        expect(rules).toBeTruthy();
    });

    it('should show close button', () => {
        const closeButton = element('[data-test="close-btn"]');
        expect(closeButton).toBeTruthy();
    });

    it('should close dialog after clicking the close button', () => {
        const closeButton = element('[data-test="close-btn"]');
        closeButton.click();
        expect(dialogRef.close).toHaveBeenCalled();
    });


});
