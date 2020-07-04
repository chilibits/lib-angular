import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

@Component({
  selector: 'fab-button',
  styleUrls: ['button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() border = false;
  @Input() circle: boolean;
  @Input() clear: boolean;
  @Input() color: string;
  @Input() compact: boolean;
  @Input() disabled: boolean;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() glow = false;
  @Input() gradient: boolean;
  @Input() invert: boolean;
  @Input() loading: string;
  @Input() label: string;
  @Input() outline: boolean;
  @Input() props: any;
  @Input() rounded: boolean;
  @Input() size: string;
  @Input() wide: boolean;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngAfterViewInit() {}

  ngOnInit() {
    const props = {
      border: this.border,
      circle: this.circle,
      clear: this.clear,
      color: this.color,
      compact: this.compact,
      expand: this.expand,
      faded: this.faded,
      glow: this.glow,
      gradient: this.gradient,
      invert: this.invert,
      loading: this.loading,
      outline: this.outline,
      rounded: this.rounded,
      size: this.size,
      wide: this.wide,
      ...this.props
    };

    const styles = css(ButtonStyles({ framework: 'angular', props }));

    this.host = this.elRef.nativeElement;
    this.host.classList.add(styles);
  }

}
