const assert = require('node:assert/strict');
const { Given, When, Then, world } = require('@cucumber/cucumber');

// No feature files were found in features/rodzaje-prac yet.
// Add your Gherkin scenarios there, then run:
//   npm run create:module -- rodzaje-prac
// again to generate step stubs that match the real step text.

Given('administrator systemu jest zalogowany', async () => {
  // TODO: implement this step (from feature step: "administrator systemu jest zalogowany")
  return 'pending';
});

Given('administrator znajduje się w menu {string} konfiguracji planera serwisu', async (value) => {
  // TODO: implement this step (from feature step: "administrator znajduje się w menu "Rodzaje prac" konfiguracji planera serwisu")
  return 'pending';
});

Given('administrator otwiera formularz dodawania nowego rodzaju prac', async () => {
  // TODO: implement this step (from feature step: "administrator otwiera formularz dodawania nowego rodzaju prac")
  return 'pending';
});

When('administrator ustawia priorytet na wartość {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator ustawia priorytet na wartość "Na końcu"")
  return 'pending';
});

When('administrator zapisuje formularz', async () => {
  // TODO: implement this step (from feature step: "administrator zapisuje formularz")
  return 'pending';
});

Then('rodzaj prac zostaje zapisany', async () => {
  // TODO: implement this step (from feature step: "rodzaj prac zostaje zapisany")
  return 'pending';
});

Then('nowy rodzaj prac pojawia się na liście na końcu kolejności priorytetów', async () => {
  // TODO: implement this step (from feature step: "nowy rodzaj prac pojawia się na liście na końcu kolejności priorytetów")
  return 'pending';
});

Then('pole {string} jest domyślnie niezaznaczone', async (value) => {
  // TODO: implement this step (from feature step: "pole "Planuj zasoby w kreatorze doradców" jest domyślnie niezaznaczone")
  return 'pending';
});

Then('przycisk {string} jest domyślnie włączony', async (value) => {
  // TODO: implement this step (from feature step: "przycisk "Ustaw priorytet kolejności planowania rodzajów prac" jest domyślnie włączony")
  return 'pending';
});

Then('pole {string} jest wymagane do zapisania formularza', async (value) => {
  // TODO: implement this step (from feature step: "pole "Priorytet" jest wymagane do zapisania formularza")
  return 'pending';
});

When('administrator pozostawia pole {string} puste', async (value) => {
  // TODO: implement this step (from feature step: "administrator pozostawia pole "Priorytet" puste")
  return 'pending';
});

When('administrator próbuje zapisać formularz', async () => {
  // TODO: implement this step (from feature step: "administrator próbuje zapisać formularz")
  return 'pending';
});

Then('system blokuje zapis formularza', async () => {
  // TODO: implement this step (from feature step: "system blokuje zapis formularza")
  return 'pending';
});

Then('system wyświetla komunikat o błędzie walidacji', async () => {
  // TODO: implement this step (from feature step: "system wyświetla komunikat o błędzie walidacji")
  return 'pending';
});

When('administrator wybiera wartość priorytetu {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator wybiera wartość priorytetu "<priorytet>"")
  return 'pending';
});

Then('pole {string} jest {string}', async (value1, value2) => {
  // TODO: implement this step (from feature step: "pole "Rodzaj prac" jest "<stan>"")
  return 'pending';
});

Given('administrator otwiera formularz edycji istniejącego rodzaju prac', async () => {
  // TODO: implement this step (from feature step: "administrator otwiera formularz edycji istniejącego rodzaju prac")
  return 'pending';
});

Then('przycisk {string} jest domyślnie wyłączony', async (value) => {
  // TODO: implement this step (from feature step: "przycisk "Ustaw priorytet kolejności planowania rodzajów prac" jest domyślnie wyłączony")
  return 'pending';
});

Then('pola {string} oraz {string} są zwinięte i niewidoczne', async (value1, value2) => {
  // TODO: implement this step (from feature step: "pola "Priorytet" oraz "Rodzaj prac" są zwinięte i niewidoczne")
  return 'pending';
});

When('administrator włącza przycisk {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator włącza przycisk "Ustaw priorytet kolejności planowania rodzajów prac"")
  return 'pending';
});

Then('pola {string} oraz {string} stają się widoczne', async (value1, value2) => {
  // TODO: implement this step (from feature step: "pola "Priorytet" oraz "Rodzaj prac" stają się widoczne")
  return 'pending';
});

Then('pola {string} oraz {string} są domyślnie puste', async (value1, value2) => {
  // TODO: implement this step (from feature step: "pola "Priorytet" oraz "Rodzaj prac" są domyślnie puste")
  return 'pending';
});

Given('administrator otwiera formularz edycji rodzaju prac, który ma już zapisaną wartość priorytetu', async () => {
  // TODO: implement this step (from feature step: "administrator otwiera formularz edycji rodzaju prac, który ma już zapisaną wartość priorytetu")
  return 'pending';
});

When('administrator zapisuje formularz bez zmiany pola {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator zapisuje formularz bez zmiany pola "Priorytet"")
  return 'pending';
});

Then('system zapisuje zmiany bez wymagania uzupełnienia pola {string}', async (value) => {
  // TODO: implement this step (from feature step: "system zapisuje zmiany bez wymagania uzupełnienia pola "Priorytet"")
  return 'pending';
});

Given('administrator otwiera formularz edycji rodzaju prac, którego wartość priorytetu w bazie jest pusta', async () => {
  // TODO: implement this step (from feature step: "administrator otwiera formularz edycji rodzaju prac, którego wartość priorytetu w bazie jest pusta")
  return 'pending';
});

When('administrator próbuje zapisać formularz bez uzupełnienia pola {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator próbuje zapisać formularz bez uzupełnienia pola "Priorytet"")
  return 'pending';
});

Given('na liście istnieje rodzaj prac {string} z ustalonym priorytetem', async (value) => {
  // TODO: implement this step (from feature step: "na liście istnieje rodzaj prac "Diagnostyka" z ustalonym priorytetem")
  return 'pending';
});

When('administrator dodaje nowy rodzaj prac z priorytetem {string} wskazującym rodzaj prac {string}', async (value1, value2) => {
  // TODO: implement this step (from feature step: "administrator dodaje nowy rodzaj prac z priorytetem "W tym samym czasie co" wskazującym rodzaj prac "Diagnostyka"")
  return 'pending';
});

Then('nowy rodzaj prac otrzymuje taką samą wartość kolejności jak rodzaj prac {string}', async (value) => {
  // TODO: implement this step (from feature step: "nowy rodzaj prac otrzymuje taką samą wartość kolejności jak rodzaj prac "Diagnostyka"")
  return 'pending';
});

Then('pozostałe rodzaje prac zachowują swoją względną kolejność', async () => {
  // TODO: implement this step (from feature step: "pozostałe rodzaje prac zachowują swoją względną kolejność")
  return 'pending';
});

Given('na liście istnieją co najmniej dwa rodzaje prac o identycznej wartości priorytetu', async () => {
  // TODO: implement this step (from feature step: "na liście istnieją co najmniej dwa rodzaje prac o identycznej wartości priorytetu")
  return 'pending';
});

When('administrator dodaje inny rodzaj prac zmieniając jego pozycję w kolejności priorytetów', async () => {
  // TODO: implement this step (from feature step: "administrator dodaje inny rodzaj prac zmieniając jego pozycję w kolejności priorytetów")
  return 'pending';
});

Then('rodzaje prac, które miały identyczną wartość priorytetu przed zmianą, nadal mają identyczne wartości priorytetu po przeliczeniu', async () => {
  // TODO: implement this step (from feature step: "rodzaje prac, które miały identyczną wartość priorytetu przed zmianą, nadal mają identyczne wartości priorytetu po przeliczeniu")
  return 'pending';
});

Given('istnieją warsztaty z indywidualną konfiguracją rodzajów prac', async () => {
  // TODO: implement this step (from feature step: "istnieją warsztaty z indywidualną konfiguracją rodzajów prac")
  return 'pending';
});

When('administrator dodaje nowy rodzaj prac z określonym priorytetem', async () => {
  // TODO: implement this step (from feature step: "administrator dodaje nowy rodzaj prac z określonym priorytetem")
  return 'pending';
});

Then('nowy rodzaj prac zostaje zapisany z odpowiednim priorytetem również w konfiguracjach tych warsztatów', async () => {
  // TODO: implement this step (from feature step: "nowy rodzaj prac zostaje zapisany z odpowiednim priorytetem również w konfiguracjach tych warsztatów")
  return 'pending';
});

Given('administrator przegląda listę rodzajów prac', async () => {
  // TODO: implement this step (from feature step: "administrator przegląda listę rodzajów prac")
  return 'pending';
});

Then('kolumna {string} jest widoczna bezpośrednio po kolumnie {string}', async (value1, value2) => {
  // TODO: implement this step (from feature step: "kolumna "Priorytet" jest widoczna bezpośrednio po kolumnie "Nazwa"")
  return 'pending';
});

Then('kolumna {string} jest widoczna zaraz po kolumnie {string}', async (value1, value2) => {
  // TODO: implement this step (from feature step: "kolumna "Planuj zasoby" jest widoczna zaraz po kolumnie "Priorytet"")
  return 'pending';
});

Then('lista jest domyślnie posortowana rosnąco według kolumny {string}', async (value) => {
  // TODO: implement this step (from feature step: "lista jest domyślnie posortowana rosnąco według kolumny "Priorytet"")
  return 'pending';
});

When('administrator sortuje listę według kolumny {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator sortuje listę według kolumny "Priorytet"")
  return 'pending';
});

Then('rodzaje prac są uporządkowane zgodnie z wybranym kierunkiem sortowania', async () => {
  // TODO: implement this step (from feature step: "rodzaje prac są uporządkowane zgodnie z wybranym kierunkiem sortowania")
  return 'pending';
});

When('administrator filtruje listę po wartości liczbowej w kolumnie {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator filtruje listę po wartości liczbowej w kolumnie "Priorytet"")
  return 'pending';
});

Then('na liście widoczne są wyłącznie rodzaje prac spełniające podane kryterium filtra', async () => {
  // TODO: implement this step (from feature step: "na liście widoczne są wyłącznie rodzaje prac spełniające podane kryterium filtra")
  return 'pending';
});

Given('administrator otwiera formularz edycji systemowego rodzaju prac', async () => {
  // TODO: implement this step (from feature step: "administrator otwiera formularz edycji systemowego rodzaju prac")
  return 'pending';
});

Then('pola {string}, {string} oraz {string} są zablokowane do edycji', async (value1, value2, value3) => {
  // TODO: implement this step (from feature step: "pola "Nazwa", "Kompetencja" oraz "Typ stanowiska" są zablokowane do edycji")
  return 'pending';
});

Then('sekcja zmiany priorytetu jest aktywna i możliwa do edycji', async () => {
  // TODO: implement this step (from feature step: "sekcja zmiany priorytetu jest aktywna i możliwa do edycji")
  return 'pending';
});

Then('dla wierszy oznaczonych jako systemowe przycisk {string} nie jest dostępny', async (value) => {
  // TODO: implement this step (from feature step: "dla wierszy oznaczonych jako systemowe przycisk "Usuń" nie jest dostępny")
  return 'pending';
});

Then('ikona {string} jest dostępna dla systemowych rodzajów prac', async (value) => {
  // TODO: implement this step (from feature step: "ikona "Edytuj" jest dostępna dla systemowych rodzajów prac")
  return 'pending';
});

When('administrator zaznacza pole {string}', async (value) => {
  // TODO: implement this step (from feature step: "administrator zaznacza pole "Planuj zasoby w kreatorze doradców"")
  return 'pending';
});

Then('wartość pola zostaje zapisana', async () => {
  // TODO: implement this step (from feature step: "wartość pola zostaje zapisana")
  return 'pending';
});

Then('w kolumnie {string} na liście widoczna jest zaznaczona ikona dla tego rodzaju prac', async (value) => {
  // TODO: implement this step (from feature step: "w kolumnie "Planuj zasoby" na liście widoczna jest zaznaczona ikona dla tego rodzaju prac")
  return 'pending';
});

Then('te rodzaje prac nadal mają identyczne wartości priorytetu po przeliczeniu kolejności', async () => {
  // TODO: implement this step (from feature step: "te rodzaje prac nadal mają identyczne wartości priorytetu po przeliczeniu kolejności")
  return 'pending';
});
