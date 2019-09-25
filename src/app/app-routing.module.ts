import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'run', loadChildren: './run/run.module#RunPageModule' },
  { path: 'grafico', loadChildren: './grafico/grafico.module#GraficoPageModule' },
  {
    path: 'back',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tabs/tabs.module').then(m => m.TabsPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
