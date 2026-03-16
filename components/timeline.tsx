type TimelineItem = {
    year: string;
    title: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="mt-8">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div
                        key={`${item.year}-${item.title}`}
                        className="grid grid-cols-[24px_1fr] gap-4 pb-6 last:pb-0"
                    >
                        <div className="relative flex justify-center">
                            {!isLast && <div className="absolute top-4 bottom-[-1.5rem] w-0.5 rounded-full bg-foreground/25" />}
                            <div className="relative z-10 mt-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-foreground" />
                        </div>

                        <div>
                            <p className="text-2xl leading-tight sm:text-3xl">
                                <span className="font-bold">{item.year}</span>
                            </p>
                            <p className="text-2xl leading-tight sm:text-3xl">{item.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}