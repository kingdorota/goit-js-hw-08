//2. Analiza metody JSON.parse():
//Skopiuj podany ciąg JSON: 

const json = '{"name":"Mango","age":3,"isHappy":true}'.
    
//Wykorzystując metodę JSON.parse(), przekonwertuj ten ciąg z powrotem na obiekt JavaScript.

const json = '{"name":"Mango","age":3,"isHappy":true}';

const obj = JSON.parse(json);

console.log(obj);

//Wydrukuj otrzymany obiekt w konsoli, aby potwierdzić, czy proces konwersji był poprawny.

//Zweryfikuj, czy właściwości otrzymanego obiektu odpowiadają oryginalnemu ciągowi JSON.

const json = '{"name":"Mango","age":3,"isHappy":true}';

const obj = JSON.parse(json);

const isSame = JSON.stringify(obj) === json;

console.log("Czy właściwości obiektu są takie same jak oryginalnego ciągu JSON:", isSame);
