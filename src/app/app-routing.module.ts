import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
  },
  { path: 'message/:id',
   loadChildren: './pages/message/message.module#MessagePageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
