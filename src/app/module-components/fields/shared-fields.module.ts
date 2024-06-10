import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleInputComponent } from './title-input/title-input.component';


@NgModule({
    declarations: [
        TitleInputComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TitleInputComponent
    ]
})

export class SharedFieldsModule { }
