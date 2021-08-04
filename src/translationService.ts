export default class TranslationService {
  private readonly consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
  ];
  private readonly vowels = [
    'a', 'e', 'i', 'o', 'u', 'y'
  ];

  private changeLetter(letter: string) {
    if(this.consonants.find(s => s === letter)) return 'b';
    if(this.vowels.find(s => s === letter)) return 'i';
    return letter;
  }

  translate(str: string) {
    return str.split('')
      .map(s => this.changeLetter(s.toLowerCase()))
      .reduce((acc, val) => acc + val);
  }
}