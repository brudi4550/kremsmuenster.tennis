import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function Planmaesig() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Planmäßig.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p className="mt-3">
                    Nachdem Simon kein Lorem Ipsum Platzhalter Text kennt: das hier ist platzhaltertext, benni sag ma bitte was i da hingeben soll
                </p>
            </div>
        </div>
    );
}