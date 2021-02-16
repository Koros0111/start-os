import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { ServerBackupPage } from './server-backup.page'
import { RouterModule, Routes } from '@angular/router'
import { BackupConfirmationComponentModule } from 'src/app/modals/backup-confirmation/backup-confirmation.component.module'
import { PwaBackComponentModule } from 'src/app/components/pwa-back-button/pwa-back.component.module'

const routes: Routes = [
  {
    path: '',
    component: ServerBackupPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    BackupConfirmationComponentModule,
    PwaBackComponentModule,
  ],
  declarations: [
    ServerBackupPage,
  ],
})
export class ServerBackupPageModule { }