export class Product {
  id: string;
  title: string;
  publicationDate: string;
  languageCode: string;

  constructor(product) {
    this.id = product.id;
    this.title = product.Title.TitleText;
    this.publicationDate = product.PublicationDate || '';
    this.languageCode = product.Language.LanguageCode || '';
  }
}
