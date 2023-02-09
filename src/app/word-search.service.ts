import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordSearchService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  getSearchResult(word: string) {
    return this.http.get<any>(this.apiUrl + word);
  }
}
