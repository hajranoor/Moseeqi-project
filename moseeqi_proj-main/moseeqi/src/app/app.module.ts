import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent} from './side-panel/side-panel.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPanelsComponent } from './main-panels/main-panels.component';

import { UploadSongComponent } from './upload-song/upload-song.component';
import { SubscriptionComponent } from './subscription/subscription.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SongListComponent } from './song-list/song-list.component';
import { MaterialModule } from './material.module';
import { AddplaylistComponent } from './addplaylist/addplaylist.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MusicBigWindowComponent } from './music-big-window/music-big-window.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminSidepanelComponent } from './admin-sidepanel/admin-sidepanel.component';
import { AdminAllSongsComponent } from './admin-all-songs/admin-all-songs.component';
import { ListenerPanelComponent } from './listener-panel/listener-panel.component';
import { ProfileeComponent } from './profilee/profilee.component';
import { AdminArtistdeleteComponent } from './admin-artistdelete/admin-artistdelete.component';
import { AdminListenerdeleteComponent } from './admin-listenerdelete/admin-listenerdelete.component';
import { ActivityStatusComponent } from './activity-status/activity-status.component';
import {ViewartistsComponent} from './viewartists/viewartists.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component'



@NgModule({
  declarations: [
    SidePanelComponent,
    SignInComponent,
    SignUpComponent,
    AppComponent,
    UploadSongComponent,
    MainPanelsComponent,
    HomeComponent,
    ProfileComponent,
    SubscriptionComponent,
    AddplaylistComponent,
    SongListComponent,
    EditProfileComponent,
    PlaylistComponent,
    MusicBigWindowComponent,
    UserAccountComponent,
    AdminSidepanelComponent,
    AdminAllSongsComponent,
    ListenerPanelComponent,
    ProfileeComponent,
    AdminArtistdeleteComponent,
    AdminListenerdeleteComponent,
    ActivityStatusComponent,
    ViewartistsComponent,
    ArtistsongsComponent

    // routingComponents
    ],
  imports: [

    BrowserModule,HttpClientModule, FormsModule,
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
