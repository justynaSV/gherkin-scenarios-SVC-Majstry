const assert = require('node:assert/strict');
const { Given, When, Then, world } = require('@cucumber/cucumber');

Given('doradca serwisowy jest zalogowany', async () => {
  // TODO: implement this step (from feature step: "doradca serwisowy jest zalogowany")
  return 'pending';
});

Given('naprawa serwisowa istnieje z ustawionym statusem potwierdzenia wizyty {string}', async (value) => {
  // TODO: implement this step (from feature step: "naprawa serwisowa istnieje z ustawionym statusem potwierdzenia wizyty "Niepotwierdzona"")
  return 'pending';
});

When('doradca serwisowy zmienia status potwierdzenia wizyty na {string} w oknie potwierdzenia wizyty', async (value) => {
  // TODO: implement this step (from feature step: "doradca serwisowy zmienia status potwierdzenia wizyty na "<nowy_status>" w oknie potwierdzenia wizyty")
  return 'pending';
});

Then('w Rejestrze Zmian naprawy pojawia się nowy wpis', async () => {
  // TODO: implement this step (from feature step: "w Rejestrze Zmian naprawy pojawia się nowy wpis")
  return 'pending';
});

Then('wpis w Rejestrze Zmian wskazuje docelowy status potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "wpis w Rejestrze Zmian wskazuje docelowy status potwierdzenia "<nowy_status>"")
  return 'pending';
});

Then('nowy wpis w Rejestrze Zmian zawiera dokładną datę i godzinę operacji', async () => {
  // TODO: implement this step (from feature step: "nowy wpis w Rejestrze Zmian zawiera dokładną datę i godzinę operacji")
  return 'pending';
});

Then('nowy wpis w Rejestrze Zmian zawiera imię i nazwisko zalogowanego użytkownika', async () => {
  // TODO: implement this step (from feature step: "nowy wpis w Rejestrze Zmian zawiera imię i nazwisko zalogowanego użytkownika")
  return 'pending';
});

Then('nowy wpis w Rejestrze Zmian zawiera docelową nazwę statusu potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "nowy wpis w Rejestrze Zmian zawiera docelową nazwę statusu potwierdzenia "Odwołana"")
  return 'pending';
});

When('doradca serwisowy otwiera okno potwierdzenia wizyty', async () => {
  // TODO: implement this step (from feature step: "doradca serwisowy otwiera okno potwierdzenia wizyty")
  return 'pending';
});

Then('tytuł okna prezentuje aktualny status potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "tytuł okna prezentuje aktualny status potwierdzenia "Niepotwierdzona"")
  return 'pending';
});

Then('okno prezentuje dokładnie trzy przyciski zmiany statusu', async () => {
  // TODO: implement this step (from feature step: "okno prezentuje dokładnie trzy przyciski zmiany statusu")
  return 'pending';
});

Then('przycisk odpowiadający aktualnemu statusowi {string} nie jest widoczny', async (value) => {
  // TODO: implement this step (from feature step: "przycisk odpowiadający aktualnemu statusowi "Niepotwierdzona" nie jest widoczny")
  return 'pending';
});

Given('naprawa ma ustawiony status potwierdzenia wizyty {string}', async (value) => {
  // TODO: implement this step (from feature step: "naprawa ma ustawiony status potwierdzenia wizyty "<status>"")
  return 'pending';
});

When('doradca serwisowy przegląda tablicę zarządzania naprawami', async () => {
  // TODO: implement this step (from feature step: "doradca serwisowy przegląda tablicę zarządzania naprawami")
  return 'pending';
});

Then('naprawa wyświetla ikonę odpowiadającą statusowi {string}', async (value) => {
  // TODO: implement this step (from feature step: "naprawa wyświetla ikonę odpowiadającą statusowi "<status>"")
  return 'pending';
});

Then('tooltip ikony wyświetla nazwę statusu {string}', async (value) => {
  // TODO: implement this step (from feature step: "tooltip ikony wyświetla nazwę statusu "<status>"")
  return 'pending';
});

Given('naprawa serwisowa ma ustawiony status potwierdzenia wizyty {string}', async (value) => {
  // TODO: implement this step (from feature step: "naprawa serwisowa ma ustawiony status potwierdzenia wizyty "Potwierdzona"")
  return 'pending';
});

When('doradca serwisowy przeplanowuje naprawę za pomocą kreatora', async () => {
  // TODO: implement this step (from feature step: "doradca serwisowy przeplanowuje naprawę za pomocą kreatora")
  return 'pending';
});

Then('status potwierdzenia wizyty zmienia się na {string}', async (value) => {
  // TODO: implement this step (from feature step: "status potwierdzenia wizyty zmienia się na "Niepotwierdzona"")
  return 'pending';
});

Then('w Rejestrze Zmian naprawy pojawia się nowy wpis wskazujący docelowy status potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "w Rejestrze Zmian naprawy pojawia się nowy wpis wskazujący docelowy status potwierdzenia "Niepotwierdzona"")
  return 'pending';
});

Then('w Rejestrze Zmian naprawy widoczne są dwa oddzielne wpisy', async () => {
  // TODO: implement this step (from feature step: "w Rejestrze Zmian naprawy widoczne są dwa oddzielne wpisy")
  return 'pending';
});

Then('pierwszy wpis wskazuje docelowy status potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "pierwszy wpis wskazuje docelowy status potwierdzenia "Potwierdzona"")
  return 'pending';
});

Then('drugi wpis wskazuje docelowy status potwierdzenia {string}', async (value) => {
  // TODO: implement this step (from feature step: "drugi wpis wskazuje docelowy status potwierdzenia "Zmiana terminu"")
  return 'pending';
});
