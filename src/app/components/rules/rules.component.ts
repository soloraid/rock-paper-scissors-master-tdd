import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {ItemType} from '../../models/item.type';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {
    rules: { [key: string]: { icon: ItemType; beats: ItemType } } = {
        paper: {icon: 'paper', beats: 'rock'},
        rock: {icon: 'rock', beats: 'scissors'},
        scissors: {icon: 'scissors', beats: 'paper'},
    };

    constructor(private dialogRef: MatDialogRef<RulesComponent>,
                @Inject(MAT_DIALOG_DATA) public data: { fullScreen: boolean }) {
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
