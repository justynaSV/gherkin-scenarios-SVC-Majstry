# Zadanie QA: SVCLOUD-5064

@potwierdzenie-wizyty
Feature: Rejestr zmian dotyczących potwierdzenia napraw
  Jako Doradca Serwisowy / Pracownik Recepcji chcę ręcznie zmieniać status potwierdzenia wizyty,
  aby Kierownik Warsztatu mógł skutecznie zarządzać anulowanymi naprawami i planować moce przerobowe warsztatu.

  Background:
    Given doradca serwisowy jest zalogowany
    And naprawa serwisowa istnieje z ustawionym statusem potwierdzenia wizyty "Niepotwierdzona"

  # AC1: manualna zmiana statusu generuje nowy wpis w Rejestrze Zmian
  @smoke @regression
  Scenario Outline: Ręczna zmiana statusu potwierdzenia wizyty tworzy nowy wpis w Rejestrze Zmian
    When doradca serwisowy zmienia status potwierdzenia wizyty na "<nowy_status>" w oknie potwierdzenia wizyty
    Then w Rejestrze Zmian naprawy pojawia się nowy wpis
    And wpis w Rejestrze Zmian wskazuje docelowy status potwierdzenia "<nowy_status>"

    Examples:
      | nowy_status    |
      | Potwierdzona   |
      | Zmiana terminu |
      | Odwołana       |

  # AC2: wpis w Rejestrze Zmian zawiera pełne dane operacji
  @regression
  Scenario: Wpis w Rejestrze Zmian zawiera datę, godzinę oraz dane użytkownika wykonującego zmianę
    When doradca serwisowy zmienia status potwierdzenia wizyty na "Odwołana" w oknie potwierdzenia wizyty
    Then nowy wpis w Rejestrze Zmian zawiera dokładną datę i godzinę operacji
    And nowy wpis w Rejestrze Zmian zawiera imię i nazwisko zalogowanego użytkownika
    And nowy wpis w Rejestrze Zmian zawiera docelową nazwę statusu potwierdzenia "Odwołana"

  # Business process flow p.1: okno zmiany statusu prezentuje dokładnie 3 dostępne operacje
  @regression @ui
  Scenario: Przycisk aktualnego statusu potwierdzenia jest ukryty w oknie zmiany statusu
    When doradca serwisowy otwiera okno potwierdzenia wizyty
    Then tytuł okna prezentuje aktualny status potwierdzenia "Niepotwierdzona"
    And okno prezentuje dokładnie trzy przyciski zmiany statusu
    And przycisk odpowiadający aktualnemu statusowi "Niepotwierdzona" nie jest widoczny

  # Business process flow p.2-3: rozróżnienie wizualne statusów na tablicy zarządzania naprawami
  @regression @ui
  Scenario Outline: Status potwierdzenia jest prezentowany z odrębną ikoną i tooltipem na tablicy zarządzania naprawami
    Given naprawa ma ustawiony status potwierdzenia wizyty "<status>"
    When doradca serwisowy przegląda tablicę zarządzania naprawami
    Then naprawa wyświetla ikonę odpowiadającą statusowi "<status>"
    And tooltip ikony wyświetla nazwę statusu "<status>"

    Examples:
      | status          |
      | Niepotwierdzona |
      | Potwierdzona    |
      | Zmiana terminu  |
      | Odwołana        |

  # Business process flow p.4: przeplanowanie naprawy zmienia status na Niepotwierdzona
  @regression
  Scenario: Przeplanowanie naprawy za pomocą kreatora zmienia status potwierdzenia na Niepotwierdzona
    Given naprawa serwisowa ma ustawiony status potwierdzenia wizyty "Potwierdzona"
    When doradca serwisowy przeplanowuje naprawę za pomocą kreatora
    Then status potwierdzenia wizyty zmienia się na "Niepotwierdzona"
    And w Rejestrze Zmian naprawy pojawia się nowy wpis wskazujący docelowy status potwierdzenia "Niepotwierdzona"

  # AC1: kolejne zmiany statusu tworzą oddzielne, chronologiczne wpisy
  @regression
  Scenario: Kolejne zmiany statusu potwierdzenia tworzą oddzielne wpisy w Rejestrze Zmian
    When doradca serwisowy zmienia status potwierdzenia wizyty na "Potwierdzona" w oknie potwierdzenia wizyty
    And doradca serwisowy zmienia status potwierdzenia wizyty na "Zmiana terminu" w oknie potwierdzenia wizyty
    Then w Rejestrze Zmian naprawy widoczne są dwa oddzielne wpisy
    And pierwszy wpis wskazuje docelowy status potwierdzenia "Potwierdzona"
    And drugi wpis wskazuje docelowy status potwierdzenia "Zmiana terminu"
