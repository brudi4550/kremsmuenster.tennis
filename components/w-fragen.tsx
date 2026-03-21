import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function WFragen() {
    const accounts = [
        {
            position: "Obmann",
            name: "Benjamin Ing",
            email: "obmann@kremsmuenster.tennis",
        },
        {
            position: "Obmannstellvertreter",
            name: "Gerrit Müllner",
            email: "obmann.stv@kremsmuenster.tennis",
        },
        {
            position: "Jugendwart",
            name: "Peter Schöngruber",
            email: "jugend@kremsmuenster.tennis",
        },
        {
            position: "Sportwart",
            name: "Simon Mitterbauer",
            email: "sportwart@kremsmuenster.tennis",
        },
        {
            position: "Kassier",
            name: "Dietmar Schernhammer",
            email: "kassier@kremsmuenster.tennis",
        },
        {
            position: "Platzwart",
            name: "Gerhard Müllner",
            email: "platzwart@kremsmuenster.tennis",
        },
        {
            position: "Eventmanagement",
            name: "Wilhelmine Ahrens",
            email: "eventmanagment@kremsmuenster.tennis",
        },
        {
            position: "Social Media",
            name: "Fiona Gruber",
            email: "social@kremsmuenster.tennis",
        },
        {
            position: "Schriftführerin",
            name: "Zoe Kim Hem",
            email: "schriftfuehrerin@kremsmuenster.tennis",
        },
        {
            position: "IT",
            name: "Alexander Wolf",
            email: "admin@kremsmuenster.tennis",
        },
    ];

    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Was Wann Wer Wo.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p className="mt-3">
                    <strong>Was?</strong> Vorstand und Impressum.
                </p>
                <p className="mt-3">
                    <strong>Wann?</strong> Jetzt.
                </p>
                <p className="mt-3">
                    <strong>Wer?</strong> 10 engagierte Menschen.
                </p>
                <p className="mt-3">
                    <strong>Wo?</strong> TuS Tennisanlage, Gablonzerstraße 15, 4550 Kremsmünster
                </p>
                <p className="mt-3">
                    <strong>Wie?</strong> <a href="mailto:team@kremsmuenster.tennis" className="underline underline-offset-4">team@kremsmuenster.tennis</a>
                </p>
                <div
                    style={{
                        width: "100%",
                        height: "24px",
                        background: "none",
                        margin: "32px 0",
                        overflow: "hidden",
                    }}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 400 24"
                        width="100%"
                        height="24"
                        preserveAspectRatio="none"
                        style={{ display: "block" }}
                    >
                        <path
                            d="M0 12 Q20 0 40 12 Q60 24 80 12 Q100 0 120 12 Q140 24 160 12 Q180 0 200 12 Q220 24 240 12 Q260 0 280 12 Q300 24 320 12 Q340 0 360 12 Q380 24 400 12"
                            stroke="#ccc"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                {accounts.map((account) => (
                    <div key={account.email} className="mt-3">
                        <div className="mt-3 sm:flex sm:items-baseline sm:gap-4">
                            <strong className="block">{account.position}?</strong>
                            <a href={`mailto:${account.email}`} className="block underline underline-offset-4 sm:ml-auto sm:text-right">
                                {account.name}
                            </a>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        width: "100%",
                        height: "24px",
                        background: "none",
                        margin: "32px 0",
                        overflow: "hidden",
                    }}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 400 24"
                        width="100%"
                        height="24"
                        preserveAspectRatio="none"
                        style={{ display: "block" }}
                    >
                        <path
                            d="M0 12 Q20 0 40 12 Q60 24 80 12 Q100 0 120 12 Q140 24 160 12 Q180 0 200 12 Q220 24 240 12 Q260 0 280 12 Q300 24 320 12 Q340 0 360 12 Q380 24 400 12"
                            stroke="#ccc"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <p className="mt-3">
                    Diese Website verwendet keine Cookies und sammelt keine personenbezogenen Daten.
                </p>
                <div
                    style={{
                        width: "100%",
                        height: "24px",
                        background: "none",
                        margin: "32px 0",
                        overflow: "hidden",
                    }}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 400 24"
                        width="100%"
                        height="24"
                        preserveAspectRatio="none"
                        style={{ display: "block" }}
                    >
                        <path
                            d="M0 12 Q20 0 40 12 Q60 24 80 12 Q100 0 120 12 Q140 24 160 12 Q180 0 200 12 Q220 24 240 12 Q260 0 280 12 Q300 24 320 12 Q340 0 360 12 Q380 24 400 12"
                            stroke="#ccc"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <p className="mt-3">
                    Turn- und Sportverein Kremsmünster
                    <br />
                    ZVR-Nr. 348158960
                    <br />
                    Rathausplatz 6
                    <br />
                    4550 Kremsmünster
                </p>
            </div>
        </div>
    );
}