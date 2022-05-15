import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStroageService: DataStorageService) {}

  onSaveData() {
    this.dataStroageService.storeRecipes();
  }

  onFetchdata() {
    this.dataStroageService.fetchRecipes().subscribe();
  }
}
