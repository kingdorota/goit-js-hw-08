//1. Analiza pliku JSON:
//a) Znajdź plik user.json, który jest przedstawiony w tekście.

{
    "name": "Josh",
    "weight": 175,
    "age": 30,
    "eyecolor": "brown"
    "isHappy": true,
    "cars": ["Chevy", "Honda"],
    "favoriteBook": {
        "title": "The Last Kingdom",
        "author": "Bernard Cornwell",
        "raiting": 8.38
    }
}


//b) Zidentyfikuj każdą parę klucz-wartość w tym pliku. 
    "name": "Josh"
    "weight": 175
    "age": 30
    "eyecolor": "brown"
    "isHappy": true
    "cars": ["Chevy", "Honda"]
    "favoriteBook": {"title": "The Last Kingdom", "author": "Bernard Cornwell", "rating": 8.38}

//c) Określ typ danych każdej wartości w obiekcie JSON.
        "name": "Josh" - typ danych: string (ciąg znaków)
    "weight": 175 - typ danych: number (liczba)
    "age": 30 - typ danych: number (liczba)
    "eyecolor": "brown" - typ danych: string (ciąg znaków)
    "isHappy": true - typ danych: boolean (wartość logiczna)
    "cars": ["Chevy", "Honda"] - typ danych: array (tablica)
    "favoriteBook": {"title": "The Last Kingdom", "author": "Bernard Cornwell", "rating": 8.38} - typ danych: object (obiekt)

//d) Przedstaw krótkie wyjaśnienie struktury JSON, odnosząc się do przykładowego pliku.
//JSON (JavaScript Object Notation) jest formatem danych, który jest popularnie używany do przechowywania 
//i przesyłania danych. Jest to lekki, czytelny dla ludzi i łatwy do analizy przez komputery format danych. 
//Struktura JSON składa się z par klucz-wartość, gdzie klucz jest ciągiem znaków, a wartość może być stringiem, 
//liczbą, wartością logiczną, tablicą, obiektem lub null.
//Struktura JSON jest elastyczna i umożliwia reprezentację złożonych struktur danych w prosty i zrozumiały sposób. 
//Jest to powszechnie stosowany format w komunikacji między serwerem a klientem w aplikacjach internetowych 
//oraz w przechowywaniu danych w bazach danych NoSQL.