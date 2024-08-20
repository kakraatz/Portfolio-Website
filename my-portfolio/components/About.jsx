import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import WordChanger from "@/components/WordChanger";

const wordList = ['developer', 'programmer', 'thinker', 'designer', 'artist'];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref} className="container items-center my-40 mx-auto xl:mx-60 p-4 overflow-hidden">
            <div className="flex flex-col mb-20 gap-y-8 items-start">
                <motion.h1
                    className="text-3xl md:text-5xl pl-8 md:pl-0 font-bold"
                    initial={{ opacity: 0, y: 400 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                >
                    About Me
                </motion.h1>
                <div className="flex items-center space-x-6 md:space-x-8">
                    <motion.div
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    >
                        <button className="relative flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground hover:outline-green-500 outline-offset-4 ml-10 group">
                            <Link href={'https://www.github.com/kakraatz'} target="_blank" rel="noreferrer"
                                  className="flex items-center justify-center w-full h-full">
                                <GitHubIcon/>
                            </Link>
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                    >
                        <button className="flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground hover:outline-green-500 outline-offset-4 group">
                            <Link href={'https://www.linkedin.com/in/kevin-kraatz/'} target="_blank" rel="noreferrer"
                                  className="flex items-center justify-center w-full h-full">
                                <LinkedInIcon/>
                            </Link>
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                    >
                        <button className="flex items-center justify-center w-6 h-6 outline outline-2 outline-foreground hover:outline-green-500 outline-offset-4 group">
                            <Link href={'/Kevin_Kraatz_Resume.pdf'} target="_blank" rel="noreferrer"
                                  className="flex items-center justify-center w-full h-full">
                                <DescriptionIcon/>
                            </Link>
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className="container mt-40 mx-auto p-4">
                <div className="relative flex flex-col md:flex-row gap-10 w-100 items-center justify-center">
                    <motion.div
                        className="w-full md:w-1/2 h-auto"
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                    >
                        <p className="text-base md:text-lg lg:text-xl">Hi, my name is Kevin.<br/><br/>I&apos;m a
                            creative <WordChanger wordList={wordList}/> from Texas who loves to bring unique ideas to life.
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 h-auto flex items-center justify-center"
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    >
                        <Image loading="lazy" src='/me_.png' alt='Kevin Kraatz' width={1000} height={1000}
                               className="max-w-full h-auto xl:w-2/3 xl:h-2/3"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}