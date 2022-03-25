import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListItemComponent } from './list-item.component'
import { ListItemService } from './list-item.service'
@NgModule({
    declarations: [ListItemModule.rootComponent],
    imports: [CommonModule],
    exports: [ListItemModule.rootComponent],
    entryComponents: [ListItemModule.rootComponent],
    providers: [ListItemService]

})
export class ListItemModule {
    static rootComponent = ListItemComponent
}