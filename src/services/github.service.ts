import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { GithubUser } from '../shared/models/github-user.model';

export default class GithubService {
    baseUrl = 'https://api.github.com';

    getUser(username: string): Observable<AjaxResponse<GithubUser>> {
        return ajax.get(`${this.baseUrl}/users/${username}`);
    }
}
