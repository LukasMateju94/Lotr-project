# Update

## 1. bod

CharacterQuotes.js - try-catch přepsán do get-then-catch-finally

## 3. bod

Footer.js - jako komponenta odstraněna a přesunuto do SharedLayout.js

## 4. bod

Home.js - const getRandomText vyřešen bez useEffectu

## 5. bod

Vytvořeny samostatné složky pro .jsx komponenty a jejich .css soubory

#

# Úvod

Vytvořil jsem projekt na filmovou trilogii Pána prstenů.

## První strana

První strana je přehled filmů s krátkým popisem a dalšími informacemi, tvořeno na základě předlohy v zadání projektu.

## Druhá strana

Druhá strana je zaměřena na citaci hlášek postav. API jsem zvolil tohle: https://the-one-api.dev/ (API s klíčem), časem jsem zjistil, že pracovat s klíčem je trochu složitější a musel jsem si to nastudovat a zabralo to nějaký čas. Problém je hlavně zabezpečení klíče a i samotný .env soubor není nejlepší řešení a ideální by to bylo v kombinaci s backendem, ale to je mimo mou úroveň.
Proto jsem v projektu tedy vytvořil soubor '.env' (na úrovni vedle souborů package.json atd.) a vepsal jsem ho do .gitignore.

# Spuštění projektu

Před spuštěním projektu bude tedy potřeba založit .env soubor a vepsat do něj 'REACT_APP_LOTR_API_KEY=token' => token zašlu na discord, aby nebyl veřejný. (doufám, že to bude fungovat)

## Další

Přidána je i error stránka.
