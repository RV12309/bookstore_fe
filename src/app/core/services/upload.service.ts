import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryValue } from "../enums";
import { CLOUD_NAME } from "../constant/common.constant";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = `https://api.cloudinary.com/v1_1/${CloudinaryValue.CloudName}/image/upload`;

  constructor(private http:HttpClient) { }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CloudinaryValue.UploadPreset); // Optional, you can change this as needed
    formData.append('api_key', CloudinaryValue.ApiKey)
    return this.http.post(this.apiUrl, formData);
  }

  initCloudinary(config?:Object){
    return new Cloudinary({cloud: {cloudName: CLOUD_NAME}})
  }
}
