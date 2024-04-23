//3. Obsługa błędów:

//Przeprowadź próbę parsowania nieprawidłowego ciągu JSON.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

//Parsowanie nieprawidłowego ciągu JSON spowoduje zgłoszenie błędu składniowego,
//ponieważ metoda JSON.parse() oczekuje poprawnego ciągu JSON do przetworzenia.
//Obiekt dog zdefiniowany w kodzie JavaScript, nie jest w formacie JSON ze względu
//na brak cudzysłowów w nazwach właściwości i funkcji, co jest niezgodne z wymaganiami składniowymi JSON.

//Zastosuj konstrukcję try...catch do obsługi ewentualnego błędu.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

try {
  const obj = JSON.parse(dog);
  console.log(obj);
} catch (error) {
  console.error("Błąd parsowania JSON:", error.message);
}

//Wydrukuj szczegóły błędu, włączając w to rodzaj błędu (name) oraz wiadomość (message).

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

try {
  const obj = JSON.parse(dog);
  console.log(obj);
} catch (error) {
  console.error("Rodzaj błędu:", error.name);
  console.error("Wiadomość błędu:", error.message);
}
