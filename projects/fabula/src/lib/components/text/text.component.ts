import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/styles/components/text/text';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'fab-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() aux;
  @Input() color: string;
  @Input() props: any;
  @Input() size: string;
  @Input() weight: string;
  @Input() wrap = true;

  @ViewChild('component') component: ElementRef;

  block;
  bold;
  flex;
  host;
  inline;
  italic;
  medium;
  semibold;
  strong;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    // Get attributes
    this.block = this.host.hasAttribute('block');
    this.bold = this.host.hasAttribute('bold');
    this.flex = this.host.hasAttribute('flex');
    this.inline = this.host.hasAttribute('inline');
    this.italic = this.host.hasAttribute('italic');
    this.medium = this.host.hasAttribute('medium');
    this.semibold = this.host.hasAttribute('semibold');
    this.strong = this.host.hasAttribute('strong');

    if (!this.weight && (this.bold || this.strong)) {
      this.weight = '700';
    }

    if (!this.weight && this.semibold) {
      this.weight = '600';
    }

    if (!this.weight && this.medium) {
      this.weight = '500';
    }

    // Set props
    props = {
      aux: this.host.hasAttribute('aux') || this.aux,
      block: this.block,
      bold: this.bold,
      color: this.color,
      flex: this.flex,
      inline: this.inline,
      italic: this.italic,
      size: this.size,
      weight: this.weight,
      wrap: this.wrap,
      ...this.props
    };

    styles = css(TextStyles({ framework: 'angular', props }));

    // Attach classes to host
    this.host.classList.add(styles);
  }

}
