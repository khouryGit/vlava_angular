import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent {
 @Input() name: string = '';
 @Input() role: string = '';
 @Input() image_url: string = '';
}
