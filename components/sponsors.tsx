import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Title from "./title";

const sponsorTiers: {
  tier: "Titanium" | "Platinum" | "Gold" | "Silber" | "Bronze";
  sponsors: { name: string; logo?: string; link?: string }[];
}[] = [
  {
    tier: "Titanium",
    sponsors: [
      { name: "Sparkasse Oberösterreich Bank AG", logo: "/sponsors/sparkasse.png", link: "https://www.sparkasse.at/" },
      { name: "Helleis Sport GmbH", logo: "/sponsors/helleis.jpg", link: "https://www.kremsmuenster.at/Sport_2000_HELLEIS" },
      { name: "Mandlmayr Fahrschule", logo: "/sponsors/mandlmayr.png", link: "https://www.mandlmayr.at/" },
      { name: "Müller Installationen GmbH", link: "https://www.mueller-installationen.com/", logo: "/sponsors/mueller.png" },
      { name: "Schunk Intec GmbH", logo: "/sponsors/schunk.png", link: "https://schunk.com/at/de" },
      { name: "OPTIK Seischegg GmbH", link: "https://www.seischegg.com/", logo: "/sponsors/optik-seischegg.png" },
      { name: "Jansch Metallbau", logo: "/sponsors/jansch.jpg", link: "https://www.jansch.at/" },
      { name: "Oberndorfer Steinbau", logo: "/sponsors/oberndorfer.jpg", link: "https://www.oberndorfer-steinbau.at/" },
      { name: "WOLF Sport Wolf & Ehren", logo: "/sponsors/wolfsports.png", link: "https://www.wolfsports.at/" },
      { name: "Xundheit - Therapie und Prophylaxe e.U.", link: "https://www.xund-heit.at/", logo: "/sponsors/xundheit.svg" },
      { name: "Funk Fuchs GmbH", link: "https://www.funkfuchs.at/", logo: "/sponsors/funkfuchs.jpg" },
      { name: "Hotel Wahlmüller", link: "https://www.hotel-wahlmueller.at/", logo: "/sponsors/wahlmueller.webp" },
      { name: "BB PV und Solar Montagen GmbH", link: "https://www.pv-beiskammer.at/", logo: "/sponsors/bb_pv.jpg" },
      { name: "EASY-BOX GMBH", logo: "/sponsors/easy-box.svg", link: "https://easy-box.at/?lang=de" },
      { name: "Profiputz I. GmbH", link: "https://www.profiputz.eu/", logo: "/sponsors/profiputz.jpg" },
      { name: "Postl Gastro GmbH", link: "https://www.mcdaniels.rocks/" },
      { name: "MCW Optics - Michael Wögerer", link: "https://www.mcw-optics.at/", logo: "/sponsors/mcw-optics.png" },
      { name: "Zielke Marco - Oberösterreichische Versicherung", logo: "/sponsors/oöv.jpg", link: "https://www.ooev.at/" },
    ],
  },
  {
    tier: "Platinum",
    sponsors: [
      { name: "Bäckerei Eglseer e.U.", link: "https://www.baeckerei-eglseer.at/", logo: "/sponsors/eglseer.png" },
      { name: "Ing Glas", link: "https://www.inglas.at/" },
      { name: "IS Polsterungen Schreiber", logo: "/sponsors/is_polsterungen.jpeg", link: "https://www.kremsmuenster.online/wirtschaft/is-polsterungen-35" },
      { name: "Gartenservice Simon Agrill", logo: "/sponsors/simon_agrill.png", link: "https://www.gartenservice-agrill.at/" },
      { name: "Dujlo Photography", link: "https://dujlo.photography/", logo: "/sponsors/dujlo.png" },
      { name: "Allianz Agentur Lechenauer", link: "https://www.allianz.at/de_AT/beratung/lechenauer.html#/", logo: "/sponsors/allianz.png" },
      { name: "Baumstoff GmbH", logo: "/sponsors/baumstoff.jpg", link: "https://www.baumstoff.at/" },
      { name: "AST Austrian Security Team", link: "https://www.austrian-security.at/", logo: "/sponsors/ast.png" },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      { name: "Hohenthanner Emil Ges.m.b.H.", link: "https://www.hohenthanner.at/" },
      { name: "Hotel Gasthof König GmbH", link: "https://www.gasthof-koenig.at/", logo: "/sponsors/koenig.jpg" },
      { name: "Gruber Michael - Steinmetzmeister", link: "https://www.gruber-stein.at/", logo: "/sponsors/gruber.png" },
      { name: "Lechenauer Maschinen- u. Gerätebau", logo: "/sponsors/lechenauer.jpg", link: "https://www.lechenauer.at/" },
      { name: "Walter Gruber Bauelemente Ges.m.b.H", link: "https://www.wgfenster.at/kontakt", logo: "/sponsors/wgfenster.png" },
      { name: "Thomas Blaha - Schuhmode Peterseil", logo: "/sponsors/schuhmode-peterseil.jpg", link: "https://www.schuhmode-peterseil.at/" },
      { name: "Porsche Inter Auto GmbH & Co KG", link: "https://www.porscheinterauto.at/", logo: "/sponsors/pia.png" },
      { name: "Schlair Karl Bäckerei-Konditorei", logo: "/sponsors/schlair.png", link: "https://www.schlair.at/" },
      { name: "Söllradls NaturKostLaden", logo: "/sponsors/naturkostladen.png", link: "https://www.bio-soellradl.at/" },
      { name: "Mst. Daniel Zach", logo: "/sponsors/dach-zach.png", link: "https://www.dach-zach.at/" },
      { name: "1A Landhotel Schicklberg GmbH & Co.KG", link: "https://www.schicklberg.at/", logo: "/sponsors/schicklberg.png" },
      { name: "Raiffeisenbank Region Kirchdorf", link: "https://www.raiffeisen.at/ooe/region-kirchdorf/de.html", logo: "/sponsors/raiffeisen.svg" },
      { name: "RAG Austria AG", link: "https://www.rag-austria.at/", logo: "/sponsors/rag.png" },
      { name: "Söllradl Textil GmbH", logo: "/sponsors/textilshop.svg", link: "https://www.textilshop.at/" },
      { name: "Ing. R. Stienitzka e.U.", logo: "/sponsors/stienitzka.jpg", link: "https://www.rst-elektrotechnik.co.at/" },
      { name: "Schopper Bau GmbH", link: "https://www.schopper-bau.at/", logo: "/sponsors/schopper.webp" },
      { name: "Auto Frey GmbH", logo: "/sponsors/autofrey.jpg", link: "https://www.autofrey.at/" },
      { name: "Gasthaus Hüttmayr", link: "https://www.gh-huethmayr.at/", logo: "/sponsors/huethmayr.png" },
      { name: "GITZMAIRISCHE VERSICHERUNG", logo: "/sponsors/gitzmairische_versicherung.png", link: "https://www.gitzmairische.at/" },
      { name: "BWS Sanierung GmbH", logo: "/sponsors/bws.png", link: "https://www.bws.co.at/" },
      { name: "Aurora GmbH", logo: "/sponsors/aurora.png", link: "https://www.auroragmbh.at/" },
      { name: "Agromed Austria GmbH", logo: "/sponsors/agromed.png", link: "https://www.agromed.at/" },
      { name: "LUDWIG LEUCHTEN J.u.M.", logo: "/sponsors/ludwig_leuchten.jpg", link: "https://www.ludwig-leuchten.at/" },
    ],
  },
  {
    tier: "Silber",
    sponsors: [
      { name: "Anita Wolf e.U. - La Toscana", logo: "/sponsors/latoscana.jpg", link: "https://www.latoscana.at/" },
      { name: "Fritz Lachmayr GmbH", logo: "/sponsors/lachmayr.png", link: "https://www.kuehlanlagenbau.at/" },
      { name: "MÖHA Handels Ges.mbH", link: "https://www.moeha.at/", logo: "/sponsors/moeha.png" },
      { name: "Alexander Schöllhuber GmbH", link: "https://www.a-schoellhuber.at/", logo: "/sponsors/schoellhuber.webp" },
      { name: "Elektro Kremsmair GmbH", logo: "/sponsors/elektro-kremsmair.png", link: "https://kremsmair.com/" },
      { name: "Reifenland Kremsmünster GmbH", logo: "/sponsors/reifenland.jpg", link: "https://reifenland-krm.at/" },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      { name: "Eggendorfer Roland Maler", link: "mailto:roland.eggendorfer@aon.at" },
      { name: "Scheuchenstuhl Tischlerei", logo: "/sponsors/scheuchenstuhl.jpg", link: "https://www.scheuchenstuhl.at/" },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className={`${GeistSans.className} mx-auto max-w-3xl bg-transparent px-4`} style={{ marginTop: 0, paddingTop: 30 }}>
      <div className="mb-8 flex items-center justify-between gap-4">
        <Title>Sponsoren.</Title>
      </div>

      <div className="space-y-10">
        {sponsorTiers.map(({ tier, sponsors }) => (
          <section key={tier} className="text-center">
            <h2 className="font-black break-words" style={{ fontSize: "4rem", letterSpacing: "-0.06em", lineHeight: 1.05, margin: 0 }}>{tier}</h2>
            {sponsors.length === 0 ? (
              <p className="mt-4 text-2xl font-bold uppercase tracking-wide text-muted-foreground">To Be Announced!</p>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-16 sm:grid-cols-2 lg:grid-cols-3">
                {sponsors.map((sponsor) => {
                  const sponsorContent = (
                    <>
                      {sponsor.logo ? (
                        <div className="relative h-48 w-full max-w-72">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 40vw"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{sponsor.name}</p>
                      )}
                      <p className="sr-only">{sponsor.name}</p>
                    </>
                  );

                  return sponsor.link ? (
                    <a
                      key={sponsor.name}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center py-2 transition-opacity hover:opacity-80"
                    >
                      {sponsorContent}
                    </a>
                  ) : (
                    <article key={sponsor.name} className="flex flex-col items-center justify-center py-2">
                      {sponsorContent}
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        ))}

        <section className="text-center">
          <p className="text-3xl leading-tight">
            Wenn Sie uns sponsern möchten, kontaktieren Sie bitte: <a href="mailto:kassier@kremsmuenster.tennis" className="underline underline-offset-4">kassier@kremsmuenster.tennis</a>
          </p>
        </section>
      </div>
    </div>
  );
}
