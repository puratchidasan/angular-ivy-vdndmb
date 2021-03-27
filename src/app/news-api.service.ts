import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  api_key = "407c5a93ab394a52997d929f18fa413d";

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      "https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
        this.api_key
    );
  }

  getArticlesByID(source: String) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.api_key
    );
  }
}
