import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { MediaComponent } from './media/media.component';
import { CareersComponent } from './careers/careers.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'overview', component: OverviewComponent, data: { animation: 'OverviewPage' } },
  { path: 'team', component: TeamComponent, data: { animation: 'TeamPage' } },
  { path: 'media', component: MediaComponent, data: { animation: 'MediaPage' } },
  { path: 'careers', component: CareersComponent, data: { animation: 'CareersPage' } },
  { path: 'features', component: FeaturesComponent, data: { animation: 'FeaturesPage' } },
  { path: 'pricing', component: PricingComponent, data: { animation: 'PricingPage' } },
  { path: 'faqs', component: FaqsComponent, data: { animation: 'FaqsPage' } },
  { path: 'contacts', component: ContactsComponent, data: { animation: 'ContactsPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
