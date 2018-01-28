import { Component } from '@angular/core';

@Component({
  selector: 'kh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = 'Knowledge Hub';

  appMenu: any[] = [{
    title: "Documents",
    href: "/",
    icon: "library_books"
  },
  {
    title: "Courses",
    href: "/",
    icon: "school"
  },
  {
    title: "Schedule",
    href: "/",
    icon: "event"
  },
  {
    title: "Notifications",
    href: "/",
    icon: "notifications"
  }]
}
