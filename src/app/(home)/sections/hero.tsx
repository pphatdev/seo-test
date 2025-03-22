import React from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@components/ui/background-beams-with-collision";
import { Cover } from "@components/ui/cover";
import { FlipWords } from "@components/flip-words";
import { GridPattern } from "@components/ui/grid-pattern";
import { TextAnimate } from "@components/text-animation";
import { appDescriptions, appName, appPositions } from "@lib/data";
import { NavMenu } from "@components/dock-menu";
import { ThemeToggle } from "@components/ui/theme-switch";
import { MagneticArea } from "@components/ui/magnetic-button";


export default function Hero() {
    return (
        <main className="w-full mx-auto min-h-full h-full relative">
            <h1 className="sr-only">{appName}</h1>
            <p className="sr-only">{appDescriptions ?? ""}</p>
            <BackgroundBeamsWithCollision className="flex items-center pointer-events-none justify-center w-full h-screen md:h-screen"/>
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] bg-green-50, w-full h-svh"}
                />
                <section className="flex z-20 flex-col md:flex-row h-full items-center justify-start gap-4" aria-label="Introduction">
                    <div className="p-5 max-w-3xl">
                        <div className="text-4xl text-center md:text-left md:text-6xl font-bold">
                            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-sky-500 via-teal-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                    <span className="mr-2">Hello I'm</span>
                                </div>
                                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-sky-500 via-teal-500 to-green-500 py-4">
                                    <span className="mr-2">Hello I'm</span>
                                </div>
                            </div>
                            <Cover>{appName}</Cover>
                        </div>
                        <div className="text-2xl text-center h-fit md:text-left font-semibold">
                            <FlipWords words={appPositions} />
                        </div>
                        <TextAnimate animation="slideLeft" by="word" className="whitespace-pre-wrap min-h-96 mt-5">
                            {appDescriptions ?? ""}
                        </TextAnimate>
                        <nav className="flex flex-col justify-center sm:flex-row items-center gap-4 mt-6">
                            <MagneticArea>
                                <ThemeToggle/>
                            </MagneticArea>
                        </nav>
                        <NavMenu/>
                    </div>
                    <div className="order-first md:order-last">
                        <MagneticArea >
                            <Image
                                src="/assets/avatars/hero.webp"
                                width={512}
                                height={512}
                                alt="LEAT Sophat - Senior Front-end Developer"
                                className="w-44 sm:w-80 h-44 sm:h-80 object-cover select-none"
                                priority
                                loading="eager"
                            />
                        </MagneticArea>
                    </div>
                </section>
        </main>
    );
}
