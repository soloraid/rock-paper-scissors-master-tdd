import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemType} from '../../models/item.type';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementComponent {
  @Input() icon: ItemType;
  @Input() selectable = true;
  @Output() selectElementEvent = new EventEmitter<ItemType>();

  emitElement(): void {
    if(this.selectable) {
      this.selectElementEvent.emit(this.icon);
    }
  }
}
