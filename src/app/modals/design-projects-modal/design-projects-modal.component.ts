import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-design-projects-modal',
  templateUrl: './design-projects-modal.component.html',
  styleUrls: ['./design-projects-modal.component.scss']
})
export class DesignProjectsModalComponent {

  @Input() modalTitle: string;
  @Input() modalContent: string;
  @Input() showModal: boolean;
  @Input() selectedImageSrc: any;

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
