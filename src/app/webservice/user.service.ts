import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: any;
  newHeaders: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('jwt_token');
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    this.newHeaders = {
      'Accept': 'application/json'
    }
   }

   saveUser (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-resume', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listResume (page,keyword): Observable<any> {
    return this.http.post('http://localhost:8000/api/list-resume', {
      page:page, 
      keyword: keyword
    }, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  deleteInfo (userId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-info', { userId:userId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  editInfo (data): Observable<any>{
    return this.http.post('http://localhost:8000/api/edit-info', data , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  Data (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }


  saveAbout (data):  Observable<any>{
    return this.http.post('http://localhost:8000/api/save-about',data, { headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8'
    } })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listAbout (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-about',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editAboutInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-about-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getAboutData (detailId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-edit-info',{detailId: detailId} , { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  saveBusiness (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-business', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listBusiness (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-business',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  saveJob (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-job', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listJob (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-job',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editJobInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-job-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  jobGetData (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-job-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  deleteJob (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-job-info', { detailId:detailId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  saveVehicle (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-vehicle', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getListVehicle (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-vehicle',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editVehicleInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-vehicle-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  vehicleGetData (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-vehicle-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  deleteVehicle (vehicleId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-vehicle-info', { vehicleId:vehicleId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadPdf(userId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-pdf', {userId: userId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadVehiclePdf(vehicleId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-vehicle-pdf', {vehicleId: vehicleId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadJobPdf(jobId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-job-pdf', {jobId: jobId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  login(Data): Observable<any>{
    return this.http.post('http://localhost:8000/api/login', Data, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

}
