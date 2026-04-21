import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function PlatzUndDu() {
    return (
        <div
            className={`${GeistSans.className} max-w-4xl mx-auto px-4`}
            style={{
                marginTop: 0,
                paddingTop: 30,
                background: "transparent",
                textAlign: "left"
            }}
        >
            <div className="flex items-center justify-between mb-8 gap-4" style={{ textAlign: "left", width: "100%" }}>
                <Title className="text-left">Der Platz und Du könnten bald so sein 🤞🏻.</Title>
            </div>
            <div className="text-3xl leading-tight" style={{ textAlign: "left" }}>
                <section aria-labelledby="mitgliedsbeitraege">
                    <table style={{ textAlign: "left", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Beitrag</th>
                                <th>Preis €</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hauptmitglied</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Lebensgefährte/Ehepartner</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>Familycard<sup>*</sup></td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td>Student/Lehrling bis 27 Jahre</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>Kinder/Jugend</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td>Unterstützendes Mitglied</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Zweitmitglied<sup>**</sup></td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>VIP<sup>***</sup></td>
                                <td>400</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className="note" style={{ textAlign: "left" }}>
                        <strong>* Familycard:</strong> Beinhaltet 2 Erwachsene und alle Kinder bis zur Vollendung des 18. Lebensjahres.
                        <br />
                        <strong>** Zweitmitglied:</strong> Gültig für Personen mit einer Hauptmitgliedschaft in einem anderen Verein und ohne Hauptwohnsitz in Kremsmünster.
                        <br />
                        <strong>*** VIP:</strong> Mitgliedschaft für Firmen.
                    </p>
                    <br />
                    <p className="note" style={{ textAlign: "left" }}>
                        Der Vereinsbeitritt ist direkt über <a href="https://formular.vereinsplaner.com/0db494c8-b20f-49b9-8175-fec6043bd6fc" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">dieses Formular</a> möglich.
                    </p>
                    <br />
                    <p className="note" style={{ textAlign: "left" }}>
                        Für alle Infos rund um An- und Abmeldung beim Tennisverein bitte eine Mail an <a href="mailto:team@kremsmuenster.tennis" className="underline underline-offset-4">team@kremsmuenster.tennis</a>.
                    </p>
                </section>

                <br />
                <section aria-labelledby="gaststunden">
                    <table style={{ textAlign: "left", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Leistung</th>
                                <th>Preis €</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gaststunde</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className="muted" style={{ textAlign: "left" }}>
                        Kinder und Jugendliche (bis zum 18. Lebensjahr) erhalten 50&nbsp;% Ermäßigung auf die Gaststunden.
                    </p>
                </section>
            </div>
        </div>
    );
}