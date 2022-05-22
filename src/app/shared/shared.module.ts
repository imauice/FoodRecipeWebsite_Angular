import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeHolder.directive";

@NgModule({
    declarations:[
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceHolderDirective,
    ],
    imports:[
        CommonModule
    ],
    exports:[
        CommonModule,
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceHolderDirective,
    ]
})
export class SharedModule {

}