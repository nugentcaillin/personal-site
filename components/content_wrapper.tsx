
export default function ContentWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<div className = "grow-1 flex w-full max-w-7xl bg-background">
			{children}
		</div>
	)
}
