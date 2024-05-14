import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["./tables.component.scss"]
})
export class TablesComponent implements OnInit {
  defaultOrders: any[] = [
    {
      orderNum: "101",
      customerName: "Zoe Levy",
      date: "2024-04-21",
      deliveryAddress: "5062 East Cherry Creek S Dr. Denver, CO 80246",
      status: "Delivered",
      trackingNum: "9400109206094292858976",
      total: 36.81
    },
    {
      orderNum: "102",
      customerName: "Josh Levy",
      date: "2024-04-27",
      deliveryAddress: "5062 East Cherry Creek S Dr. Denver, CO 80246",
      status: "In Transit",
      trackingNum: "9400109206094292858976",
      total: 97.44
    }
  ];
  orders: any[] = [];
  dismissible = true;
  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };
  authorized: boolean;

  constructor() { }

  async ngOnInit() {
    await this.getAuth();
  }

  async getAuth() {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    if (login === "admin" && password === "admin") {
      this.authorized = true;
    } else {
      this.authorized = false;
      await this.openLoginModal();
    }
  }

  async openLoginModal() {
    await swal.fire({
      title: "Sign In",
      html: `
        <form role="form">
          <div class="form-group mb-3" [ngClass]="{ focused: focus === true }">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
              </div>
              <input class="form-control" placeholder="Email" type="email" (focus)="focus = true"
                (blur)="focus = false" />
            </div>
          </div>
          <div class="form-group" [ngClass]="{ focused: focus1 === true }">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
              </div>
              <input class="form-control" placeholder="Password" type="password" (focus)="focus1 = true"
                (blur)="focus1 = false" />
            </div>
          </div>
        </form>
      `,
      focusConfirm: false,
      confirmButtonText: 'Sign In',
      preConfirm: () => {
        let inputVal = document.getElementById("swal-input1")["value"];
        console.log("inputVal: ", inputVal);
        return inputVal;
      }
    });
  }

  async openAddTrackingModal() {
    await swal.fire({
      title: "Enter USPS Tracking #",
      html: `
        <input id="swal-input1" placeholder="Tracking #" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        let inputVal = document.getElementById("swal-input1")["value"];
        console.log("inputVal: ", inputVal);
        return inputVal;
      }
    });
  }
}
