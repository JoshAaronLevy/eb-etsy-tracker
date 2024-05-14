import { Component, OnInit } from "@angular/core";
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
  constructor() {}

  ngOnInit() {}

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
