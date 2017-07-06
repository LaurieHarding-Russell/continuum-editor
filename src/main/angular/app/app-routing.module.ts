import { EventsListComponent } from './components/events-list/events-list.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { StoryComponent } from './components/story/story.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters-list',
        component: CharactersListComponent
      },
      {
        path: 'events-list',
        component: EventsListComponent
      },
      {
        path: 'location-list',
        component: LocationsListComponent
      },
      { 
        path: 'story', 
        component: StoryComponent
      },
      { 
        path: '**', 
        redirectTo: 'story'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  sideBarToggle

  
}
