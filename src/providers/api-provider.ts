import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
	server: string = "http://localhost/api-app-financeiro/";

	constructor(private http: HttpClient) {

	}


	Api(dados: any, route: string) {

		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		let url = this.server + route;
		return this.http.post(url, JSON.stringify(dados), httpOptions)
			.map(res => res);


	}

}