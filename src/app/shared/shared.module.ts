import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterButtonComponent } from './components/letter-button/letter-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
    declarations: [LetterButtonComponent, BackButtonComponent],
    imports: [CommonModule],
    exports: [LetterButtonComponent, BackButtonComponent],
})
export class SharedModule {}
