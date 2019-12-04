import {Inject, Injectable} from '@angular/core';
import {log} from 'util';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    console.log('GithubService constructor');
    console.log(baseUrl);
  }

  public getData(term: string): Observable<any> {
    let params1 = new HttpParams();
    params1 = params1.append('q', term);
    params1 = params1.append('sort', 'stars');
    params1 = params1.append('order', 'desc');

    // const url = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
    return this.http.get<any>(this.baseUrl, { params: params1 });
  }
}
