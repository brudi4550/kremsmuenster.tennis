import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function Sponsors() {
    const sponsorTiers = ["Titanium", "Platinum", "Gold", "Silber", "Bronze"];

    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Sponsoren.</Title>
            </div>
            <div className="space-y-10">
                {sponsorTiers.map((tier) => (
                    <section key={tier} className="text-center">
                        <h2 className="text-2xl font-semibold leading-tight">{tier}</h2>
                        <p className="mt-4 text-4xl font-bold uppercase tracking-wide text-muted-foreground">
                            To Be Announced!
                        </p>
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
