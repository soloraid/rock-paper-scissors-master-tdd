import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IconsComponent} from '../icons/icons.component';

import {ElementComponent} from './element.component';
import {ItemType} from '../../models/item.type';

describe('ElementComponent', () => {
    let component: ElementComponent;
    let fixture: ComponentFixture<ElementComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ElementComponent, IconsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ElementComponent);
        component = fixture.componentInstance;
    });

    it('should show element', () => {
        component.icon = 'rock';
        fixture.detectChanges();
        const element = fixture.nativeElement.querySelector('[data-test="element"]');
        expect(element).toBeTruthy();
    });

    it('should select element', () => {
        let item: ItemType;
        component.icon = 'rock';
        fixture.detectChanges();
        component.selectElementEvent.subscribe((event) => {
            item = event;
        })
        const element = fixture.nativeElement.querySelector('[data-test="element"]');
        element.click();
        expect(item).toContain('rock');
    });
});
