# Zadanie QA: SVCLOUD-5465

@rodzaje-prac
Feature: Konfiguracja priorytetów rodzajów prac
  Jako administrator systemu chcę konfigurować priorytety dla poszczególnych rodzajów prac,
  aby sterować kolejnością planowania napraw w zależności od potrzeb konkretnego warsztatu.

  Background:
    Given administrator systemu jest zalogowany
    And administrator znajduje się w menu "Rodzaje prac" konfiguracji planera serwisu

  # AC1: okno dodania rodzaju prac, pole Priorytet
  @smoke @regression @ui
  Scenario: Dodanie nowego rodzaju prac z priorytetem niewymagającym wskazania rodzaju referencyjnego
    Given administrator otwiera formularz dodawania nowego rodzaju prac
    When administrator ustawia priorytet na wartość "Na końcu"
    And administrator zapisuje formularz
    Then rodzaj prac zostaje zapisany
    And nowy rodzaj prac pojawia się na liście na końcu kolejności priorytetów

  # AC1: domyślne wartości pól formularza dodawania
  @regression @ui
  Scenario: Domyślny stan nowych pól w oknie dodawania rodzaju prac
    Given administrator otwiera formularz dodawania nowego rodzaju prac
    Then pole "Planuj zasoby w kreatorze doradców" jest domyślnie niezaznaczone
    And przycisk "Ustaw priorytet kolejności planowania rodzajów prac" jest domyślnie włączony
    And pole "Priorytet" jest wymagane do zapisania formularza

  # AC1: walidacja wymagalności pola Priorytet
  @regression @ui
  Scenario: Próba zapisu nowego rodzaju prac z pustym polem Priorytet
    Given administrator otwiera formularz dodawania nowego rodzaju prac
    When administrator pozostawia pole "Priorytet" puste
    And administrator próbuje zapisać formularz
    Then system blokuje zapis formularza
    And system wyświetla komunikat o błędzie walidacji

  # AC1: warunkowa wymagalność pola Rodzaj prac
  @regression @ui
  Scenario Outline: Wymagalność pola Rodzaj prac w zależności od wybranej wartości priorytetu
    Given administrator otwiera formularz dodawania nowego rodzaju prac
    When administrator wybiera wartość priorytetu "<priorytet>"
    Then pole "Rodzaj prac" jest "<stan>"

    Examples:
      | priorytet              | stan                              |
      | Na początku             | zablokowane do edycji              |
      | Na końcu                | zablokowane do edycji              |
      | Przed                  | wymagane do zapisania formularza   |
      | Po                     | wymagane do zapisania formularza   |
      | W tym samym czasie co  | wymagane do zapisania formularza   |

  # AC2: domyślny stan przycisku priorytetu w oknie edycji
  @regression @ui
  Scenario: Domyślny stan pól priorytetu w oknie edycji istniejącego rodzaju prac
    Given administrator otwiera formularz edycji istniejącego rodzaju prac
    Then przycisk "Ustaw priorytet kolejności planowania rodzajów prac" jest domyślnie wyłączony
    And pola "Priorytet" oraz "Rodzaj prac" są zwinięte i niewidoczne

  # AC2: rozwinięcie pól priorytetu po włączeniu przycisku
  @regression @ui
  Scenario: Rozwinięcie pól priorytetu w oknie edycji po włączeniu przycisku ustawiania priorytetu
    Given administrator otwiera formularz edycji istniejącego rodzaju prac
    When administrator włącza przycisk "Ustaw priorytet kolejności planowania rodzajów prac"
    Then pola "Priorytet" oraz "Rodzaj prac" stają się widoczne
    And pola "Priorytet" oraz "Rodzaj prac" są domyślnie puste

  # AC2: pole Priorytet niewymagane podczas edycji, gdy wartość już istnieje
  @regression
  Scenario: Zapis edycji rodzaju prac bez zmiany już ustawionego priorytetu
    Given administrator otwiera formularz edycji rodzaju prac, który ma już zapisaną wartość priorytetu
    When administrator zapisuje formularz bez zmiany pola "Priorytet"
    Then system zapisuje zmiany bez wymagania uzupełnienia pola "Priorytet"

  # AC2: pole Priorytet wymagane podczas edycji, gdy wartość w bazie jest pusta
  @regression
  Scenario: Próba zapisu edycji rodzaju prac z niewypełnionym polem Priorytet, gdy wartość w bazie jest pusta
    Given administrator otwiera formularz edycji rodzaju prac, którego wartość priorytetu w bazie jest pusta
    When administrator próbuje zapisać formularz bez uzupełnienia pola "Priorytet"
    Then system blokuje zapis formularza
    And system wyświetla komunikat o błędzie walidacji

  # AC3: przeliczanie kolejności w trybie "W tym samym czasie co"
  @regression
  Scenario: Przeliczenie kolejności priorytetów przy dodaniu rodzaju prac w trybie "W tym samym czasie co"
    Given na liście istnieje rodzaj prac "Diagnostyka" z ustalonym priorytetem
    When administrator dodaje nowy rodzaj prac z priorytetem "W tym samym czasie co" wskazującym rodzaj prac "Diagnostyka"
    Then nowy rodzaj prac otrzymuje taką samą wartość kolejności jak rodzaj prac "Diagnostyka"
    And pozostałe rodzaje prac zachowują swoją względną kolejność

  # AC3: zachowanie struktury równoległości priorytetów
  @regression
  Scenario: Zachowanie struktury równoległości priorytetów po przeliczeniu kolejności
    Given na liście istnieją co najmniej dwa rodzaje prac o identycznej wartości priorytetu
    When administrator dodaje inny rodzaj prac zmieniając jego pozycję w kolejności priorytetów
    Then te rodzaje prac nadal mają identyczne wartości priorytetu po przeliczeniu kolejności

  # AC4: zapis priorytetu w konfiguracjach per warsztat
  @regression
  Scenario: Zapis priorytetu nowego rodzaju prac w indywidualnych konfiguracjach warsztatów
    Given istnieją warsztaty z indywidualną konfiguracją rodzajów prac
    When administrator dodaje nowy rodzaj prac z określonym priorytetem
    Then nowy rodzaj prac zostaje zapisany z odpowiednim priorytetem również w konfiguracjach tych warsztatów

  # AC5: nowe kolumny na liście rodzajów prac
  @regression @ui
  Scenario: Widoczność nowych kolumn na liście rodzajów prac
    Given administrator przegląda listę rodzajów prac
    Then kolumna "Priorytet" jest widoczna bezpośrednio po kolumnie "Nazwa"
    And kolumna "Planuj zasoby" jest widoczna zaraz po kolumnie "Priorytet"
    And lista jest domyślnie posortowana rosnąco według kolumny "Priorytet"

  # AC5: sortowanie po kolumnie Priorytet
  @regression @ui
  Scenario: Sortowanie listy rodzajów prac po kolumnie Priorytet
    Given administrator przegląda listę rodzajów prac
    When administrator sortuje listę według kolumny "Priorytet"
    Then rodzaje prac są uporządkowane zgodnie z wybranym kierunkiem sortowania

  # AC5: filtrowanie po kolumnie Priorytet
  @regression @ui
  Scenario: Filtrowanie listy rodzajów prac po wartości liczbowej kolumny Priorytet
    Given administrator przegląda listę rodzajów prac
    When administrator filtruje listę po wartości liczbowej w kolumnie "Priorytet"
    Then na liście widoczne są wyłącznie rodzaje prac spełniające podane kryterium filtra

  # AC6: blokada pól przy edycji systemowego rodzaju prac
  @regression @ui
  Scenario: Edycja systemowego rodzaju prac blokuje pola inne niż priorytet
    Given administrator otwiera formularz edycji systemowego rodzaju prac
    Then pola "Nazwa", "Kompetencja" oraz "Typ stanowiska" są zablokowane do edycji
    And sekcja zmiany priorytetu jest aktywna i możliwa do edycji

  # AC6: brak możliwości usunięcia systemowego rodzaju prac
  @regression @ui
  Scenario: Brak przycisku usunięcia dla systemowego rodzaju prac na liście
    Given administrator przegląda listę rodzajów prac
    Then dla wierszy oznaczonych jako systemowe przycisk "Usuń" nie jest dostępny
    And ikona "Edytuj" jest dostępna dla systemowych rodzajów prac

  # AC1: zapis pola Planuj zasoby w kreatorze doradców
  @regression
  Scenario: Zapis zaznaczonego pola Planuj zasoby w kreatorze doradców
    Given administrator otwiera formularz dodawania nowego rodzaju prac
    When administrator zaznacza pole "Planuj zasoby w kreatorze doradców"
    And administrator zapisuje formularz
    Then wartość pola zostaje zapisana
    And w kolumnie "Planuj zasoby" na liście widoczna jest zaznaczona ikona dla tego rodzaju prac
