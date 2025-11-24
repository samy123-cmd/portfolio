export default function GrainOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-40 opacity-20 mix-blend-overlay">
            <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>
    );
}
