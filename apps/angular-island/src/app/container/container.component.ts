import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lighthouse-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {}
