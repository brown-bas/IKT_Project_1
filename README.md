# IKT Projekt 1. - Süteményreceptek

## Választott recept: Churros

  Spanyol különlegesség, melyet sokan szeretnek, személy szerint ezen emberek közé tartozom, ezért esett erre a választásom.

## Elkészítési terv:
  Alapja egy [`SvelteKit`](https://kit.svelte.dev/) alkalmazás az egyszerű szerkezetek és az újrahasználható komponensek végett. Dizájnja a [`TailwindCSS`](https://tailwindcss.com/) framework-el készül, amely lehetővé teszi az egyszerű formázást és megakadályozza a nem használt osztálykijelölők betöltését, ezzel egy még gyorsabb élményt biztosítva a felhasználónak. A receptekhez tartozó weblapok egy JSON fájl alapján "generálódnak", ami akár egy adatbázis használata esetén is működőképes oldalt eredményez, röviden: skálázható. A projekt [`Netlify`](https://netlify.com/) segítségével van hosztolva ([`Link`](https://neu-iktprojekt-receptek-2023.netlify.app/)), mivel a GitHub-al összehangolva automatikusan a legújabb verzióra frissül a linken keresztül elérhető weboldal, ami ily módon mások számára is elérhető az interneten egy egyszerű webcím által. Számomra fontos szempont az is, hogy a weboldalt akadálymentesen lehessen használni, ezen okból kifolyólag arra törekedtem, hogy az oldalak közötti navigáció minél egyszerűbb legyen (Példa: "Vissza" gomb minden recept oldalán).

# Útmutató receptek írásához:
## A JSON fájlban a következő attribútumokat kell (vagy opcionális) megadni:
- `id: integer`: Azonosító, amellyel el lehet érni a receptet az oldalon
- `title: string`: A recept "címe"
- `hidden: boolean` (opcionális): A recept láthatósága a "Receptek" oldalon
- `cover: string` (opcionális): Az indexképhez vezető útvonal (külső és belső link is lehet egyaránt), ha ez nincs megadva, akkor a recepten belül található kép lesz az indexkép, illetve ha a recepten belül sem található képhez vezető link, akkor az egyszerű zöld ("brand") színű háttérrel (a header háttérszíne) az oldal logója lesz az indexkép
- `content: array`: Az oldal elemeit (`*object`) tartalmazó lista
### Az oldalon lévő elemek így néznek ki: `{"type": string, "content": string/array}`:
Elemek típusai (`type: *`) lehetnek a következők:
- `*`:
  - `"text"`: Szövegek / Címek
    - `-sm-*`: Kis szöveg (átlagos bekezdés)
    - `-md-*`: Kis cím / Közepes szöveg
    - `-lg-*`: Közepes cím
    - `-xl-*`: Nagy cím
    - `-xxl-*`: Főcím
    - `*`: Extra formázási lehetőségek:
      - `b`: Félkövér
      - `it`: Dőlt
      - `itb`: Félkövér és dőlt
    - `content: "Szöveg"`
  - `"link"`: Hivatkozás:
    - `content: int`:
      - Hivatkozás egy másik receptre, ilyenkor a recept címe lesz a hivatkozás szövegi tartalma, illetve ha a recept nem létezik vagy törölve lett, akkor dőlt kis szöveggé válik a hivatkozás és a szövege a következő lesz: `"A recept nem létezik vagy törölve lett."` (`x`: Másik recept azonosítója (id))
    - `content: [string, string]`: Hivatkozás egy külső oldalra
    - *`content: [string, int]`: Hivatkozás egy receptre személyre szabható szöveggel
  - `"numbered"`, `"bullet"`: Számozott és számozatlan lista:
    - `content: [*string]`: Akármennyi `string`-et tartalmazhat
  - `"img"`: Kép:
    - `content: string`:
      - Ha `string` egy külső link, akkor a kép alá kerül egy forrásmegjelölés, ha nem, akkor a kép alatt nem lesz forrásmegjelölés
