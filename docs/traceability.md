# Traceability Matrix

Keep this table updated whenever a scenario is added, renamed, moved, or removed.

| Story ID | Acceptance criterion | Feature file | Scenario name | Tags |
| --- | --- | --- | --- | --- |
| `<story-id>` | `<acceptance criterion>` | `features/<feature-file>.feature` | `<Scenario name>` | `@tag` |
| `SVCLOUD-5465` | AC1 - okno dodania rodzaju prac, pole Priorytet | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Dodanie nowego rodzaju prac z priorytetem niewymagającym wskazania rodzaju referencyjnego` | `@smoke @regression @ui` |
| `SVCLOUD-5465` | AC1 - domyślne wartości pól formularza dodawania | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Domyślny stan nowych pól w oknie dodawania rodzaju prac` | `@regression @ui` |
| `SVCLOUD-5465` | AC1 - walidacja wymagalności pola Priorytet | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Próba zapisu nowego rodzaju prac z pustym polem Priorytet` | `@regression @ui` |
| `SVCLOUD-5465` | AC1 - warunkowa wymagalność pola Rodzaj prac | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Wymagalność pola Rodzaj prac w zależności od wybranej wartości priorytetu` | `@regression @ui` |
| `SVCLOUD-5465` | AC2 - domyślny stan przycisku priorytetu w oknie edycji | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Domyślny stan pól priorytetu w oknie edycji istniejącego rodzaju prac` | `@regression @ui` |
| `SVCLOUD-5465` | AC2 - rozwinięcie pól priorytetu po włączeniu przycisku | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Rozwinięcie pól priorytetu w oknie edycji po włączeniu przycisku ustawiania priorytetu` | `@regression @ui` |
| `SVCLOUD-5465` | AC2 - pole Priorytet niewymagane podczas edycji, gdy wartość już istnieje | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Zapis edycji rodzaju prac bez zmiany już ustawionego priorytetu` | `@regression` |
| `SVCLOUD-5465` | AC2 - pole Priorytet wymagane podczas edycji, gdy wartość w bazie jest pusta | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Próba zapisu edycji rodzaju prac z niewypełnionym polem Priorytet, gdy wartość w bazie jest pusta` | `@regression` |
| `SVCLOUD-5465` | AC3 - przeliczanie kolejności w trybie "W tym samym czasie co" | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Przeliczenie kolejności priorytetów przy dodaniu rodzaju prac w trybie "W tym samym czasie co"` | `@regression` |
| `SVCLOUD-5465` | AC3 - zachowanie struktury równoległości priorytetów | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Zachowanie struktury równoległości priorytetów po przeliczeniu kolejności` | `@regression` |
| `SVCLOUD-5465` | AC4 - zapis priorytetu w konfiguracjach per warsztat | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Zapis priorytetu nowego rodzaju prac w indywidualnych konfiguracjach warsztatów` | `@regression` |
| `SVCLOUD-5465` | AC5 - nowe kolumny na liście rodzajów prac | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Widoczność nowych kolumn na liście rodzajów prac` | `@regression @ui` |
| `SVCLOUD-5465` | AC5 - sortowanie po kolumnie Priorytet | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Sortowanie listy rodzajów prac po kolumnie Priorytet` | `@regression @ui` |
| `SVCLOUD-5465` | AC5 - filtrowanie po kolumnie Priorytet | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Filtrowanie listy rodzajów prac po wartości liczbowej kolumny Priorytet` | `@regression @ui` |
| `SVCLOUD-5465` | AC6 - blokada pól przy edycji systemowego rodzaju prac | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Edycja systemowego rodzaju prac blokuje pola inne niż priorytet` | `@regression @ui` |
| `SVCLOUD-5465` | AC6 - brak możliwości usunięcia systemowego rodzaju prac | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Brak przycisku usunięcia dla systemowego rodzaju prac na liście` | `@regression @ui` |
| `SVCLOUD-5465` | AC1 - zapis pola Planuj zasoby w kreatorze doradców | `features/rodzaje-prac/konfiguracja-priorytetow-rodzajow-prac.feature` | `Zapis zaznaczonego pola Planuj zasoby w kreatorze doradców` | `@regression` |
