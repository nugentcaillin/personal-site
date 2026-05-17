import Image from "next/image";
import Header from "@/components/header"	

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
	buttonVariants,
} from "@/components/ui/button"

import {
	HardHat
} from "lucide-react"

export default function Home() {
  return (
    <div className = "grow-1 flex justify-center items-center">
			<Item className = "w-max">
				<Empty>
					<EmptyHeader>
						<EmptyMedia variant="icon" className="rounded-md w-max h-max p-3">
							<HardHat className="size-8"/>
						</EmptyMedia>
						<EmptyTitle>Under construction..</EmptyTitle>
						<EmptyDescription>
							This page hasn't been finished yet<br/>
							Come back soon!
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<a 
							href = "/"
							className={buttonVariants({ variant: "default", size: "lg" })}
						>
							Return to Home
						</a>
					</EmptyContent>
				</Empty>
			</Item>
    </div>
  );
}

