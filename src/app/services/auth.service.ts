import {JwtHelperService} from "@auth0/angular-jwt";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";



@Injectable()

export class AuthService {


	private token : string = localStorage.getItem("jwt-token");



	constructor(private jwtHelperService: JwtHelperService, private http: HttpClient) {}

	//token : string = this.jwtHelperService.tokenGetter();
	public isAuthenticated(): boolean {
		const token = localStorage.getItem('jwt-token');
		// Check whether the token is expired and return
		// true or false
		return !this.jwtHelperService.isTokenExpired(token);
	}


	/* decodeJwt() : any {
		let isLoggedIn : boolean = this.loggedIn();

		if (!isLoggedIn) {
			return false;
		}
		const authObject = this.jwtHelperService.decodeToken(this.token);

		console.log(authObject);

		return authObject;
	} */

}