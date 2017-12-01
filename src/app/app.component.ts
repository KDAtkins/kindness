import {Component, OnInit} from "@angular/core";
import {SessionService} from "./services/session.service";
import {Status} from "./classes/status";

@Component({
    selector: "kindhub-app",
    templateUrl: "./templates/kindhub-app.html"
})
export class AppComponent{



    status : Status = null;

    constructor(protected sessionService : SessionService) {
        this.sessionService.setSession()
            .subscribe(status => this.status = status);
    }
}