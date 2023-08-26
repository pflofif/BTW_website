
export default function ShadowBorder({ children }: { children: React.ReactNode }) {
    return (
        <div className="shadow-[0_0_40px_rgba(236,73,_247,_0.7)]">
            {children}
        </div>
    );
}