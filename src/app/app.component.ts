import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganizationsService } from './organizations/organizations-services/organizations.service';
import { IOrganization } from './organizations/organizations-entity/organizations';
import { AppService } from './app.service';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    organizations: IOrganization[];
    organizationId: string;
    constructor(
        private router: Router,
        private organizationService: OrganizationsService,
        private appService: AppService
    ) {
        // appService.shareData = { organizationId: "aa" };
        this.form = new FormGroup(
            {
                organization: new FormControl(null)
            },
            { updateOn: 'change' }
        ); // blur, change, submit

        this.organizationService.getOrganizations().subscribe(data => {
            this.organizations = data;
            this.appService.cast.subscribe(id => this.organizationId = id);
            console.log('this.organizationId', this.organizationId);
            const index: number = this.organizations.findIndex(
                x => x._id === this.organizationId
            );
            this.form.controls.organization.patchValue(this.organizations[index]);
            this.router.navigateByUrl('/users-list');
        });
    }

    public form: FormGroup;
    title = 'angular-client';

    ngOnInit(): void {
        // this.router.navigateByUrl("/users-edit/5dee52d07f7dc47a3a48f41e");
        // this.router.navigateByUrl('/users-list');
        // this.organizationService
        // this.appService.cast.subscribe(organizationId => {
        //     this.organizationService.getOrganizations().subscribe(data => {
        //         this.organizations = data;
        //         const index: number = this.organizations.findIndex(
        //             x => x._id === this.appService.cast.subscribe(organizationId => this.organizationId)
        //         );

        //     });

        timer(300, 2000)
            .subscribe(x => {
                if (x % 3 === 0) {
                    console.log('timer: ' + x);
                    this.router.navigateByUrl('/');
                } else if (x % 3 === 1) {
                    console.log('timer: ' + x);
                    this.router.navigateByUrl('/organizations-list');
                } else {
                    console.log('timer: ' + x);
                    this.router.navigateByUrl('/users-list');
                }
            })

        // this.list();
    }

    // list() {
    //   this.organizationService.getOrganizations().subscribe(data => {
    //     this.organizations = data;
    //     // this.form.controls.orders.patchValue(this.orders[0].id);
    //     this.form.controls.organization.patchValue(this.organizations[2]);
    //   });
    // }

    onChange(event) {
        const organization = this.form.controls.organization.value;
        this.appService.setOrganizationId(organization._id);
        // console.log("event : ", event);
        // let organization = this.form.controls.organization.value;
        // console.log('selected organization--->', organization);
        // // this.appService.shareData.organizationId = organization.organizationId;
        // this.appService.organizationId = organization._id;
    }

    // get organizationId(): string {
    //             return this.appService.organizationId;
    //         }

}
