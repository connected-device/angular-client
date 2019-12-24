import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    // organizationId = "";
    constructor(private appService: AppService) {
        // this.organizationId = appService.shareData.organizationId;
    }

    // get organizationId() {
    //   console.log("this.appSErvice.shareData: ", this.appService.shareData);
    //   return this.appService.shareData.ogranizationId;
    // }

    ngOnInit() { }

    //   get organizationId(): string {
    //     return this.appService.organizationId;
    //   }

    //   get userRole(): string {
    //     return this.appService.userRole;
    //   }
}
