import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {allAppComponents, appRoutingProviders, routing} from "./app.routes";
import {JwtModule} from "@auth0/angular-jwt";
import {Status} from "./classes/status";
import {AuthService} from "./services/auth.service";
import { NguiMapModule} from '@ngui/map';


const moduleDeclarations = [AppComponent];
//configure the parameters fot the JwtModule

const JwtHelper = JwtModule.forRoot({
	config: {
		tokenGetter: () => {

			return localStorage.getItem("jwt-token");
		},
		skipWhenExpired: true,
		whitelistedDomains:
			["localhost:7272", "https://bootcamp-coders.cnm.edu/"],
		headerName: "X-JWT-TOKEN",
		authScheme: ""
	}
});




@NgModule({
	imports: [BrowserModule, HttpClientModule, JwtHelper, ReactiveFormsModule, FormsModule, routing, NguiMapModule.forRoot({
        apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCaVG99iAAu_NmvgtQ5ttRZsFXXmKTdbNE'})],
	declarations: [...moduleDeclarations, ...allAppComponents],
	bootstrap: [AppComponent],
	providers: [appRoutingProviders, AuthService]
})


export class AppModule {
}