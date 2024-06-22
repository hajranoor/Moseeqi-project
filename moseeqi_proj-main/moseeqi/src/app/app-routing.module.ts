import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPanelsComponent } from './main-panels/main-panels.component';
import { HomeComponent } from './home/home.component';
import { UploadSongComponent } from './upload-song/upload-song.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SongListComponent } from './song-list/song-list.component';
import { MusicBigWindowComponent } from './music-big-window/music-big-window.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {UserAccountComponent} from './user-account/user-account.component';
import { AddplaylistComponent } from './addplaylist/addplaylist.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import { ProfileeComponent } from './profilee/profilee.component';
import { ListenerPanelComponent } from './listener-panel/listener-panel.component';
import {ViewartistsComponent} from './viewartists/viewartists.component';
import { AdminSidepanelComponent } from './admin-sidepanel/admin-sidepanel.component';
import { AdminAllSongsComponent } from './admin-all-songs/admin-all-songs.component';
import { ActivityStatusComponent } from './activity-status/activity-status.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { AdminArtistdeleteComponent } from './admin-artistdelete/admin-artistdelete.component';
import { AdminListenerdeleteComponent } from './admin-listenerdelete/admin-listenerdelete.component';

const routes: Routes = 
    [
      {
        path:'' , redirectTo:'welcome', pathMatch: 'full'
      },
      {
        path:'welcome', component:SidePanelComponent,
        children:
        [
          {path:'', component:SignInComponent},
          {path:'signUp',component: SignUpComponent},
          {path:'subscribe', component: SubscriptionComponent}
        ]
      },
      {
        path:'Welcome-to-moseeqi', component:MainPanelsComponent,
        children:
        [
          {path:'', component:HomeComponent},
          {path:'upload-song', component:UploadSongComponent},
          {path:'profile',component:ProfileComponent},
          {path:'songs-list',component:SongListComponent},
          {path:'song-playing',component:MusicBigWindowComponent},
          {path:'playlists',component:PlaylistComponent},
          {path:'Account', component:UserAccountComponent},
          {path:'createPlaylist', component:AddplaylistComponent},
          {path:'editProfile',component:EditProfileComponent}
        ]
      },
      {path: 'listeners', component:ListenerPanelComponent,
        children:
        [
          {path:'',component:HomeComponent},
          {path:'playlists',component:PlaylistComponent},
          {path:'profile', component:ProfileComponent},
          {path:'editprofile' , component:EditProfileComponent},
          {path:'Artists', component:ViewartistsComponent},
          {path:'profilee/:msg',component:ProfileeComponent},
          {path:'profilee/:msg/listeners/artistsongs',component:ArtistsongsComponent},
          {path:'profile',component:ProfileeComponent},
          {path:'create-playlist', component:AddplaylistComponent},
          {path:'artistsongs/music-window/:msg' , component:MusicBigWindowComponent},
          {path:'Account', component:UserAccountComponent},
          {path:'editProfile',component:EditProfileComponent}
        ]
      },
      {path: 'admin', component:AdminSidepanelComponent,
        children:
        [
          {path:'',component:HomeComponent},
          {path:'songs', component:AdminAllSongsComponent},
          {path:'activity', component:ActivityStatusComponent},
          {path: 'delete-artist',component:AdminArtistdeleteComponent},
          {path:'delete-listener', component:AdminListenerdeleteComponent}
        ]
      }
    ];


@NgModule({
  imports: [
// Updated upstream
  CommonModule, RouterModule.forRoot(routes),
  //added
  RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
