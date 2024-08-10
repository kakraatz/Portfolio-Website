import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from "next/link";

export default function About() {

    return (
        <div className="container items-center my-40 mx-auto p-4">
            <div className="flex flex-col mb-20 gap-y-8 items-start">
                <h1 className="text-3xl md:text-5xl pl-8 md:pl-0 font-bold">About Me</h1>
                <div className="flex items-center space-x-6 md:space-x-8">
                    <button className="flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground outline-offset-4 ml-10">
                        <Link href={'https://www.github.com/kakraatz'} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full">
                            <GitHubIcon/>
                        </Link>
                    </button>
                    <button className="flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground outline-offset-4">
                        <Link href={'https://www.linkedin.com/in/kevin-kraatz/'} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full">
                            <LinkedInIcon/>
                        </Link>
                    </button>
                    <button className="flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground outline-offset-4">
                        <Link href={'/Kevin_Kraatz_Resume.pdf'} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full">
                            <DescriptionIcon/>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="relative flex flex-col md:flex-row gap-10 w-100 items-center justify-center px-20 xl:px-4">
                <div className="w-full md:w-1/2 h-auto">
                    <p className="text-base md:text-lg lg:text-xl">Hi, my name is Kevin. I&apos;m a creative
                        developer from Texas that loves to bring unique ideas to life.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
                    <Image loading="lazy" src='/me_.png' alt='Kevin Kraatz' width={1000} height={1000}
                           className="max-w-full h-auto xl:w-2/3 xl:h-2/3"/>
                </div>
            </div>
        </div>
    )
}
