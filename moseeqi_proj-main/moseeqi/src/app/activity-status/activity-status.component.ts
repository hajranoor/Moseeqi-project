import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent {
  data = [
    { name: 'Mahnoor', cat: 'Listener', as: 'Deactivated' },
    { name: 'Michael',cat : 'Smith', as: 'Active' },
    { name: 'Michael', cat: 'Jordan', as: 'Active' },
    { name: 'Tanya', cat: 'Blake', as: 'Deactivated' }
];
}
