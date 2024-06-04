export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen font-display bg-gradient-to-tl from-zinc-900 via-zinc-200/10 to-zinc-400 ">
			{children}
		</div>
	);
}
