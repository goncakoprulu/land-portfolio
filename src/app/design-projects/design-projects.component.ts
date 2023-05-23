import { Component } from '@angular/core';
import { DesignProjectsModalComponent } from 'src/app/modals/design-projects-modal/design-projects-modal.component';

@Component({
  selector: 'app-design-projects',
  templateUrl: './design-projects.component.html',
  styleUrls: ['./design-projects.component.scss'],
  entryComponents: [DesignProjectsModalComponent]
})
export class DesignProjectsComponent {
  modalTitle: string;
  modalContent: string;
  showModal: boolean;
  selectedImageSrc: string;

  
  constructor() {
    this.modalTitle = '';
    this.modalContent = '';
    this.showModal = false;
  }

  openModal(title: string, content: string, selectedImageSrc: string) {
    this.modalTitle = title;
    this.modalContent = content;
    this.selectedImageSrc = selectedImageSrc;
    this.showModal = true;
  }
  
  closeModal(event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    this.showModal = false;
    this.modalTitle = '';
    this.modalContent = '';
  }
  
}
