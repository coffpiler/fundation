import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export type Language = 'en' | 'uk';

interface TranslationData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('uk');
  private translationsSubject = new BehaviorSubject<TranslationData>({});
  
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  public translations$ = this.translationsSubject.asObservable();

  private translations: { [key in Language]?: TranslationData } = {};

  constructor(private http: HttpClient) {
    // Load default language (Ukrainian)
    this.loadTranslations('uk');
  }

  setLanguage(language: Language): void {
    if (this.translations[language]) {
      this.currentLanguageSubject.next(language);
      this.translationsSubject.next(this.translations[language]!);
      localStorage.setItem('selectedLanguage', language);
    } else {
      this.loadTranslations(language).subscribe(() => {
        this.currentLanguageSubject.next(language);
        this.translationsSubject.next(this.translations[language]!);
        localStorage.setItem('selectedLanguage', language);
      });
    }
  }

  getCurrentLanguage(): Language {
    const saved = localStorage.getItem('selectedLanguage') as Language;
    return saved || 'uk';
  }

  private loadTranslations(language: Language): Observable<TranslationData> {
    return this.http.get<TranslationData>(`/assets/i18n/${language}.json`).pipe(
      map(translations => {
        this.translations[language] = translations;
        return translations;
      }),
      catchError(error => {
        console.error(`Failed to load translations for ${language}:`, error);
        return of({});
      })
    );
  }

  translate(key: string): Observable<string> {
    return this.translations$.pipe(
      map(translations => this.getNestedValue(translations, key) || key)
    );
  }

  translateSync(key: string): string {
    const translations = this.translationsSubject.value;
    return this.getNestedValue(translations, key) || key;
  }

  private getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  // Initialize the service with saved language preference
  init(): void {
    const savedLanguage = this.getCurrentLanguage();
    this.setLanguage(savedLanguage);
  }
}
