import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-auth-modal",
  templateUrl: "auth-modal.component.html"
})
export class AuthModalComponent implements OnInit {
  dismissible = true;
  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };
  authorized = false;

  constructor(
    private modalService: BsModalService
  ) { }

  getAuth() {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    if (login === "admin" && password === "admin") {
      this.authorized = true;
    } else {
      this.authorized = false;
    }
  }

  openFormModal(modalForm: TemplateRef<any>) {
    this.formModal = this.modalService.show(modalForm, this.form);
  }

  ngOnInit() { }
}
