import { cn } from "@/lib/utils"

export function TypographyH1({
  children,
	className,
	...props
}: React.ComponentProps<"h1">) {
	return (
		<h1 
			className = {cn(
				"text-center text-4xl font-extrabold mt-10 mb-5 w-full",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	)
}

export function TypographyBigText({
  children,
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p
			className = {cn(
				"text-xl text-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</p>
	)
}
