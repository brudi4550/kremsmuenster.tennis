import { GeistSans } from "geist/font/sans";
import Title from "./title";
import Image from "next/image";
import Timeline from "./timeline";

export default function Clubhaus() {
    const timelineItems = [
        { year: "1977", title: "Gründung Tennisverein" },
        { year: "1977-1984", title: "Tennisplätze angemietet bei Stadlhuber und Schloss Kremsegg" },
        { year: "1984", title: "Bau und Eröffnung Plätze 1-4" },
        { year: "1985-1986", title: "Bau Clubhaus" },
        { year: "1987", title: "Clubhaus Eröffnung" },
        { year: "1992", title: "Bau Plätze 5 + 6" },
    ];

    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Clubhaus.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p>
                    Zweite Heimat. Wohnzimmer. Ein waschechter{" "}
                    <a
                        href="https://wikipedia.org/en/Third_Place"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                    >
                        Third Place
                    </a>
                    .
                </p>

            </div>
            <div>
                <Image
                    className="mt-3"
                    src="/clubhaus1.jpg"
                    alt="Clubhaus"
                    width={800}
                    height={600}
                    priority
                    style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
                <Timeline items={timelineItems} />
                <Image
                    className="mt-8"
                    src="/clubhaus2.jpg"
                    alt="Clubhaus"
                    width={800}
                    height={600}
                    priority
                    style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
            </div>
        </div>
    );
}