# IKT Projekt 1. - Süteményreceptek

## Választott recept: Churros

  Spanyol különlegesség, melyet sokan szeretnek, személy szerint ezen emberek közé tartozom, ezért esett erre a választásom.

## Elkészítési terv:
  Alapja egy [`SvelteKit`](https://kit.svelte.dev/) alkalmazás az egyszerű szerkezetek és az újrahasználható komponensek végett. Dizájnja a [`TailwindCSS`](https://tailwindcss.com/) framework-el készül, amely lehetővé teszi az egyszerű formázást és megakadályozza a nem használt osztálykijelölők betöltését, ezzel egy még gyorsabb élményt biztosítva a felhasználónak. A receptekhez tartozó weblapok egy JSON fájl alapján "generálódnak", ami akár egy adatbázis használata esetén is működőképes oldalt eredményez, röviden: skálázható. A projekt [`Netlify`](https://netlify.com/) segítségével van hosztolva ([`Link`](https://neu-iktprojekt-receptek-2023.netlify.app/)), mivel a GitHub-al összehangolva automatikusan a legújabb verzióra frissül a linken keresztül elérhető weboldal, ami ily módon mások számára is elérhető az interneten egy egyszerű webcím által. Számomra fontos szempont az is, hogy a weboldalt akadálymentesen lehessen használni, ezen okból kifolyólag arra törekedtem, hogy az oldalak közötti navigáció minél egyszerűbb legyen (Példa: "Vissza" gomb minden recept oldalán).

# Útmutató receptek írásához:
## Az oldalon lévő elemek típusai lehetnek a következők:
- [`text`]: Szövegek / Címek
  - [`-sm-*`]: Kis szöveg (átlagos bekezdés)
  - [`-md-*`]: Kis cím / Közepes szöveg
  - [`-lg-*`]: Közepes cím
  - [`-xl-*`]: Nagy cím
  - [`-xxl-*`]: Főcím
  - [`*`]: Extra formázási lehetőségek:
    - [`b`]: Félkövér
    - [`it`]: Dőlt
    - [`itb`]: Félkövér és dőlt
- [`link`]: Hivatkozás:
  - [`content: [x]`]: Hivatkozás egy másik receptre ([`x`]: Másik recept azonosítója (id))
  - [`content: ["Szöveg", "Hivatkozás"]`]: Hivatkozás egy külső oldalra
