import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function WFragen() {
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
                    <strong>Wer?</strong> 7 engagierte Menschen.
                </p>
                <p className="mt-3">
                    <strong>Wo?</strong> TuS Tennisanlage, Gablonzerstraße 15, 4550 Kremsmünster
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
                    <strong>Obmann?</strong> Benjamin Ing
                </p>
                <p className="mt-3">
                    <strong>Obmannstellvertreter?</strong> Gerrit Müllner
                </p>
                <p className="mt-3">
                    <strong>Kassier?</strong> Wolfgang Schnabl
                </p>
                <p className="mt-3">
                    <strong>Jugendwart?</strong> Peter Schöngruber
                </p>
                <p className="mt-3">
                    <strong>Schriftführerin?</strong> Zoe Kim Hem
                </p>
                <p className="mt-3">
                    <strong>Social Media?</strong> Fiona Gruber
                </p>
                <p className="mt-3">
                    <strong>IT?</strong> Alexander Wolf
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
                    Diese Website verwendet keine Cookies und sammelt keine personenbezogenen Daten.
                </p>
            </div>
        </div>
    );
}