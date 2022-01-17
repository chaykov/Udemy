text.length // sprawdza ile ma liter
text.toLowerCase() // zmieni na abc
text.toUpperCase() // zmieni na ABC
text.charAt(0); // pokazuje tylko pierwszy index 0
text.charAt(text.length - 1) //
text.indexOf('P') // jeśli litera P istnieje w słowie to pokaze numer index
text.trim() // usuwa akapit, puste miejsca
text.startsWith('peter') // jeśli w text jest słowo 'peter' to będzie true
text.includes('eter',) // 4 litery istnieją w text, np. 'peter' -> '.eter'.
text.slice(0, 2) // od 0 index do 2 index - wycinanie
text.repeat(3) // wyświetli się 3 razy takie same słowo lub tekst

names.concat(lastNames) // łączy dwa array
allNames.reverse() // odwraca kolejność elementów w tablicy
allNames.unshift('susy') // dodaje nowy pierwszy element w tablicy
allNames.shift() // usuwa pierwszy element
allNames.push('susy') // dodaje nowy ostatni element w tablicy
allNames.pop('susy') // usuwa nowy ostatni element w tablicy

// truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined - false

people.forEach() // wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.
ages.map() // tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy.
names.join() // łączy wszystkie elementy tablicy w jeden łańcuch znaków.
people.filter() // tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.
people.find() // zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji testującej.
people.reduce() // wywołuje funkcję względem wartości przyrostowej z każdego wywołania i kolejnego elementu tablicy (od lewej do prawej) w celu sprowadzenia tej tablicy do pojedynczej wartości.

filter() // więcej informacji, z index, bardzo szczegółowo
find() // mniej informacji, bez index, mniej szczegółowo

Math.floor() // zwraca największą liczbę całkowitą mniejszą od lub równą danej.
Math.ceil() // zwraca najmniejszą liczbę całkowitą większą od lub równą danej.
Math.sqrt() // zwraca pierwiastek kwadratowy danej liczby.
Math.PI // stosunek obwodu okręgu do jego średnicy, w przybliżeniu 3.14159.
Math.min // zwraca najmniejszą z podanych liczb.
Math.max // zwraca największą z podanych liczb.
Math.floor(Math.random() * 10) // generuje randomowe liczby od 0 do 9.
Math.ceil(Math.random() * 10) // generuje randomowe liczby od 1 do 10.

document.body.innerHTML = ________;

/* ----------------------------- DOM ------------------------------- */
document.getElementById()
document.getElementsByTagName()
document.getElementsByName()
document.getElementsByClassName()

document.querySelector()
document.querySelectorAll()

first.nextSibling()
first.nextSibling.nextSibling.style.color = 'red';
first.nextElementSibling()
last.previousSibling.previousSibling;

item.firstChild.nodeValue; // pobiera wartość od pierwszego dziecka
item.textContent; // pobiera wartość od pierwszego dziecka == (firstChild.nodeValue)

first.getAttribute('id'); // pobiera wartość ID
first.getAttribute('class'); // pobiera wartość klasy
last.setAttribute('class', 'first') // tworzy nową klasę o nazwie 'first';
last.textContent = 'bla bla' // ustawia nową lub zmienia wartość w content