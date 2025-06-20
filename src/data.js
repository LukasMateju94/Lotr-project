import image1 from './img/lotr1.jpg';
import image2 from './img/lotr2.jpg';
import image3 from './img/lotr3.jpg';
import image4 from './img/peter-jackson.jpg';

const movies = [
    {
        id: 1,
        image: image1,
        title: {
            short: 'Společenstvo Prstenu',
            long: 'Pán prstenů: Společenstvo Prstenu',
            tab: 'LOTR 1'
        },
        year: 'Rok: 2001',
        length: '172 min (prodloužená verze 208 min)',
        description: {
            short: 'Frodo dostane mocný prsten a musí ho zničit. Vydává se na cestu s osmi společníky.',
            long: 'Ve Středozemi se objeví Jeden prsten – artefakt s temnou mocí, který vytvořil Pán zla Sauron. Hobit Frodo Pytlík ho získá a zjistí, že jediný způsob, jak zachránit svět, je prsten zničit v ohni Hory osudu v Mordoru. Gandalf svolá zástupce všech ras a vznikne Společenstvo devíti členů – lidé, elf, trpaslík, čaroděj a čtyři hobiti. Na cestě čelí mnoha překážkám: zradě, ztrátám i prvnímu střetu s nepřátelskými silami. Společenstvo se nakonec rozpadá a Frodo se Samem pokračují sami, sledováni nebezpečným stvořením jménem Glum.'
        }
    },
    {
        id: 2,
        image: image2,
        title: {
            short: 'Dvě věže',
            long: 'Pán prstenů: Dvě věže',
            tab: 'LOTR 2'
        },
        year: 'Rok: 2002',
        length: '172 min (prodloužená verze 223 min)',
        description: {
            short: 'Společenstvo se rozdělí a každý bojuje po svém. Frodo dál míří k Hoře osudu.',
            long: 'Frodo a Sam se snaží dostat do Mordoru s pomocí Gluma, který zná tajné cesty, ale je rozpolcený mezi službou pánu Prstenu a přátelstvím. Mezitím Aragorn, Legolas a Gimli sledují stopu unesených hobitů a dostávají se do Rohanu, kde lidé čelí útoku Sarumanovy armády. Gandalf, nyní jako Gandalf Bílý, se vrací a sjednocuje obránce. Vrchol filmu je epická bitva o Helmův žleb, kde hrstka obránců vzdoruje desetitisícům nepřátel. Přestože temnota sílí, naděje přetrvává a připravuje půdu pro závěrečný boj.'
        }
    },
    {
        id: 3,
        image: image3,
        title: {
            short: 'Návrat krále',
            long: 'Pán prstenů: Návrat krále',
            tab: 'LOTR 3'
        },
        year: 'Rok: 2003',
        length: '201 min (prodloužená verze 263 min)',
        description: {
            short: 'Armády bojují proti Sauronovi, aby Frodo mohl dokončit úkol. Prsten je nakonec zničen.',
            long: 'Frodo a Sam pokračují s Glumem k Hoře osudu, ale Glum plánuje zradu a Frodo slábne pod tíhou Prstenu. Gondor je ohrožen a musí čelit obrovské armádě Mordoru v bitvě o Minas Tirith. Aragorn přijímá svůj královský původ a vede poslední zoufalý útok proti Sauronovi, aby odvedl jeho pozornost. Frodo nakonec dorazí k Hoře, ale podléhá moci Prstenu – osud světa nakonec rozhodne Glum. Po vítězství se Frodo a přátelé vracejí domů, ale svět už není stejný – a pro některé cesta pokračuje dál za moře.'
        }
    },
    {
        id: 4,
        image: image4,
        title: {
            short: 'Peter Jackson',
            long: 'Peter Robert Jackson',
            tab: 'Autor'
        },
        description: {
            short: 'Režisér slavné trilogie Pán prstenů. Proslavil se vizuálně epickým stylem a vášní pro detail.',
            long: 'Sir Peter Robert Jackson, narozený v roce 1961 na Novém Zélandu, začínal jako režisér nízkorozpočtových hororů a fantasy filmů. Byl dlouholetým fanouškem Tolkienova světa a v 90. letech získal práva na trilogii Pán prstenů. Studio New Line Cinema mu umožnilo revoluční krok – natočit všechny tři filmy najednou. Natáčení probíhalo více než rok na Novém Zélandu, za použití nových trikových technologií, realistických kulis a vynikajícího castingu. Jackson filmovou sérii nejen režíroval, ale podílel se i na scénáři a střihu. Trilogie získala 17 Oscarů, včetně nejlepšího filmu a režie, a Jackson se stal ikonou moderního fantasy filmu.'
        }
    },
]

export default movies