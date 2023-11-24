import { HttpHeaders } from "@angular/common/http";
import { HeadersKey } from "../enums";

export const CLOUD_NAME = 'dobuq8yjd';
export const API_KEY = '724869847322133';
export const SECRET_KEY = '';
export const API_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dobuq8yjd';
export const UPLOAD_PRESET = 'a6skugqd';
export const DATA_KEY = 'id';
export const PAGE_NUMBER_DEFAULT = 5;
export const HEADERS_NO_TOKEN = new HttpHeaders().set(HeadersKey.NoTokenHeader, 'true');
export const BRANCH_NAME = 'eFinBooks'
