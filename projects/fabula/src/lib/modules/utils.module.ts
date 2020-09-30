import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { AlignDirective } from '../directives/align.directive';
import { BlockDirective } from '../directives/block.directive';
import { ColumnDirective } from '../directives/column.directive';
import { FlexDirective } from '../directives/flex.directive';
import { FlowDirective } from '../directives/flow.directive';
import { GrowDirective } from '../directives/grow.directive';
import { MarginDirective } from '../directives/margin.directive';
import { PaddingDirective } from '../directives/padding.directive';
import { RowDirective } from '../directives/row.directive';
import { SizeDirective } from '../directives/size.directive';

@NgModule({
    declarations: [
        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective,
        SizeDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective,
        SizeDirective
    ]
})
export class UtilsModule {}
