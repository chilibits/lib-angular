import { Component, Input, OnInit, ElementRef, Renderer2, Renderer } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-badge',
  templateUrl: './badge.component.html',
  styles: []
})
export class BadgeComponent implements OnInit {
  className;
  @Input() color: string;
  @Input('corner-style') cornerStyle = 'hard';
  @Input() icon = '';
  @Input('placement-x') placementX = 'right';
  @Input('placement-y') placementY = 'bottom';
  @Input() size = 'md';

  constructor(
    public elRef: ElementRef,
    private themeService: ThemeService,
    ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      color: this.color,
      size: this.size
    };

    this.themeService.attachClasses(el, 'badge', props);
  }

}