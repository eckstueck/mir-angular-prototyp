import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DndModule } from 'ng2-dnd';

import { AppComponent }  from './app.component';
import { MetaComponent }  from './meta/meta.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { NavigationComponent }  from './header/navigation/navigation.component';
import { BadgesComponent }  from './meta/badges/badges.component';
import { BreadcrumbComponent }  from './meta/breadcrumb/breadcrumb.component';
import { BrowsingComponent }  from './meta/browsing/browsing.component';
import { DataComponent }  from './meta/data/data.component';
import { TitleComponent }  from './meta/data/title/title.component';
import { SidebarComponent }  from './meta/sidebar/sidebar.component';
import { ActionsComponent }  from './meta/actions/actions.component';
import { CitationComponent }  from './meta/sidebar/citation/citation.component';
import { RightsComponent }  from './meta/sidebar/rights/rights.component';
import { ExportComponent }  from './meta/sidebar/export/export.component';
import { DetailComponent }  from './meta/data/detail/detail.component';
import { RestService } from './rest.service';
import { CommunicationService } from './communication.service';
import { LanguagePipe } from './language.pipe';
import { DatePipe } from './date.pipe';
import { GenrePipe } from './genre.pipe';
import { StatePipe } from './state.pipe';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './search/filter/filter.component';
import { ListComponent } from './search/list/list.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'mir/:docId', component: MetaComponent },
  { path: 'mir', component: StartComponent },
  { path: '', component: StartComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports:      [
    BrowserModule.withServerTransition({appId: 'mir-angular-prototyp'}),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    DndModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    MetaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BadgesComponent,
    BreadcrumbComponent,
    BrowsingComponent,
    DataComponent,
    TitleComponent,
    SidebarComponent,
    ActionsComponent,
    CitationComponent,
    RightsComponent,
    ExportComponent,
    DetailComponent,
    LanguagePipe,
    DatePipe,
    GenrePipe,
    StatePipe,
    SearchComponent,
    FilterComponent,
    ListComponent,
    StartComponent
],
  providers: [RestService, CommunicationService, { provide: 'ORIGIN_URL', useValue: 'http://localhost:3000/'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
