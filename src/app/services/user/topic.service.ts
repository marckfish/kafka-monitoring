import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {

    url = environment.url_topics;
    constructor(private router: Router, private httpClient: HttpClient) {
    }

}
