import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDateCountdown } from "../models/date-countdown.model";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DateCountdownService {
	constructor (private http: HttpClient){}

	fetchAll(): Observable<IDateCountdown[]> {
		return this.http.get<{ status: boolean, data: IDateCountdown[]}>(`http://localhost:8080/date-countdowns`)
		.pipe(map((response: { data: IDateCountdown[]}) => {
			return response.data
		}))
	}
}
