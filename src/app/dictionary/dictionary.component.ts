import { Component, OnInit } from '@angular/core';
import { WordSearchService } from '../word-search.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  constructor(private searchService: WordSearchService) {}

  searchResults: any = [];

  ngOnInit(): void {}

  searchWord(word: string) {
    this.searchService.getSearchResult(word).subscribe((result) => {
      this.searchResults = result;
      console.log(this.searchResults);
    });
  }
}
