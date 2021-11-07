import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lighthouse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
  @Input() message = '';
}
