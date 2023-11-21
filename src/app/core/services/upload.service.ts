import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryValue } from "../enums";
import { CLOUD_NAME } from "../constant/common.constant";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = `${environment.urlUpload}`;

  constructor(private http:HttpClient) { }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('publicKey', environment.publicKey);
    formData.append('signature', 'private_ZcCQHDVJYMaSm54K/sJoBT+YQhM=');
    formData.append('expire', '1669118687' );
    formData.append('fileName', file?.name);
    formData.append('token', '73144db5-4a80-4507-aca5-4ae7bbbd47fb');
    // formData.append('upload_preset', CloudinaryValue.UploadPreset);
    // formData.append('api_key', CloudinaryValue.ApiKey);
    return this.http.post(this.apiUrl, formData);
  }

  initCloudinary(config?:Object){
    return new Cloudinary({cloud: {cloudName: CLOUD_NAME}})
  }
}
