import Image from "next/image";
import Header from "@/components/header"	

import {
	TypographyH1,
	TypographyBigText,
} from "@/components/typography"

export default function Home() {
  return (
    <div className = "w-full">
			<TypographyH1 className="mt-[30vh]">
				Hi, I'm Caillin
			</TypographyH1>
			<TypographyBigText>
				I'm a final-year Computer-Science undergrad student from Melbourne, Australia.
				I'm passionate about C++, especially low-level projects where I can really dig into and tinker with things for performance. <br/><br/> 
				In my spare time I enjoy working on toy projects, cycling and learning second languages!<br/><br/>
				Feel free to look around and see what i've been working on. If you're interested in working with me don't hesitate to reach out - I'm currently looking for internships, grad roles and to contribute to FOSS.
			</TypographyBigText>
    </div>
  );
}

