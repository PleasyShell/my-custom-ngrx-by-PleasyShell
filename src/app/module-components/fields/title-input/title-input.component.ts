import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TTitleInput } from './type';

@Component({
    selector: 'title-input',
    templateUrl: './title-input.component.html'
})

export class TitleInputComponent {


    @Input() inputTitleData!: TTitleInput;
    @Output() valueChange = new EventEmitter<string>();


    protected onKeyUp(event: KeyboardEvent) {

        const input = event.target as HTMLInputElement;
        
        this.valueChange.emit(input.value);
    };

};
