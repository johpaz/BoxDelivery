export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section >
			<div >
				{children}
			</div>
		</section>
	);
}
