import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

export default function Header() {
	return (
		<NavigationMenu className="w-full max-w-full p-1 shadow-xs justify-self-start max-h-max bg-background">
			<NavigationMenuList className="flex flex-row gap-1">
				<NavigationMenuItem>
					<NavigationMenuLink
						render={<Link href="/" />}
					>
						Home
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						render={<Link href="/coming-soon" />}
					>
						Resume
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						render={<Link href="/coming-soon" />}
					>
						Blog
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						render={<Link href="/coming-soon" />}
					>
						Projects
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
