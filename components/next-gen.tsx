import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function NextGen() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>nextSinner. nextAlcaraz. aus 4550.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p>
                    Kinder- und Jugendförderung liegt uns schon seit jeher am Herzen.
                </p>
                <p className="mt-3">
                    Wir bieten ein umfassendes Training für alle Altersgruppen und Spielstärken an, von den ganz Kleinen bis zu den nicht mehr ganz so Kleinen.
                </p>
                <p className="mt-3">
                    <strong>Sommertraining 🌞</strong>
                </p>
                <p className="mt-3">
                    Anfang Mai bis Ende Juni, 13 bis 20 Uhr, Mittwoch und Freitag.
                </p>
                <p className="mt-3">
                    Einteilung nach Spielstärke und Gruppengröße.
                </p>
                <p className="mt-3">
                    Die Anmeldung ist offen bis Ende März.
                </p>
                <p className="mt-3">
                    <strong>Tenniscamp ⛺️</strong>
                </p>
                <p className="mt-3">
                    4. Ferienwoche = Tennis pur.
                </p>
                <p className="mt-3">
                    Montag - Donnerstag, 8 bis 14 Uhr inklusive Mittagessen.
                </p>
                <p className="mt-3">
                    Alle im Alter von 4 bis 18 Jahren sind willkommen.
                </p>
                <p className="mt-3">
                    Die Anmeldung ist möglich ab Mitte März bis Ende Mai.
                </p>
                <p className="mt-3">
                    Die Plätze sind begrenzt, Teilnehmer von Sommer- und Wintertraining haben Vorrang.
                </p>
                <p className="mt-3">
                    <strong>Wintertraining ⛄️</strong>
                </p>
                <p className="mt-3">
                    20 Termine von Oktober bis März.
                </p>
                <p className="mt-3">
                    Mittwoch von 13 bis 18 Uhr.
                </p>
                <p className="mt-3">
                    Freitag von 13 bis 19 Uhr.
                </p>
                <p className="mt-3">
                    Einteilung nach Spielstärke und Gruppengröße.
                </p>
                <p className="mt-3">
                    Das Training findet in der Tennishalle Wahlmüller Halle 3 statt.
                </p>
                <p className="mt-3">
                    Die Anmeldung ist offen bis Anfang September.
                </p>
                <p className="mt-3">
                    <strong>Organisation und Anmeldung 👨🏼‍💻️</strong>
                </p>
                <p className="mt-3">
                    Peter Schöngruber
                </p>
                <p className="mt-3">
                    0677 616 29 005 | <a href="mailto:jugend@kremsmuenster.tennis" className="underline underline-offset-4">jugend@kremsmuenster.tennis</a>
                </p>
                <p className="mt-3">
                    Daniel Kurzmann
                </p>
                <p className="mt-3">
                    0677 62155926
                </p>
                <p className="mt-3">
                    Wir finden für jedes Kind die passende Gruppe und passenden Termin.
                </p>
                <p className="mt-3">
                    Neben dem Training bieten wir zusätzlich weitere Events und Aktivitäten an.
                </p>
                <p className="mt-3">
                    Saisoneröffnung, Eltern- Kindertraining, Matchtraining, Ortsmeisterschaft Jugend, OÖ. Jugendmeisterschaft
                </p>
            </div>
        </div>
    );
}