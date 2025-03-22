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
import { cn } from "@lib/utils";


export default function Hero() {
    return (
        <main className="w-full mx-auto min-h-full h-full overflow-x-hidden relative">
            <h1 className="sr-only">{appName}</h1>
            <p className="sr-only">{appDescriptions ?? ""}</p>
            <BackgroundBeamsWithCollision className="flex items-center absolute -z-[1] pointer-events-none justify-center w-full h-screen" />
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] absolute w-full "}
                />
            </div>

            <section className="flex max-w-5xl max-h-96 min-h-screen mx-auto sm:justify-between z-20 flex-col md:flex-row sm:h-full items-center gap-4" aria-label="Introduction">
                <div className="px-5 sm:p-5 max-w-3xl">
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
                    <TextAnimate animation="slideLeft" by="word" className="whitespace-pre-wrap mt-5">
                        {appDescriptions ?? ""}
                    </TextAnimate>
                    <nav className="flex flex-col z-50 justify-center sm:flex-row items-center gap-4 mt-6">
                        <MagneticArea>
                            <ThemeToggle />
                        </MagneticArea>
                    </nav>
                    <NavMenu />
                </div>
                <div className={cn("order-first relative mt-10 sm:mt-0 shrink-0 md:order-last")}>
                    {/* <MagneticArea > */}
                        <div className={cn(
                            "absolute -z-[1] w-full h-full blur-3xl  left-1/2 -bottom-1/3 -translate-x-1/2 opacity-20 animate-rainbow",
                            "bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                            "bg-[length:200%]",
                        )}></div>
                        <Image
                            src="/assets/avatars/hero.webp"
                            width={512}
                            height={512}
                            alt="LEAT Sophat - Senior Front-end Developer and UI/UX Designer"
                            className={cn(
                                "w-36 rounded-full sm:rounded-md sm:w-80 h-36 sm:h-80 object-cover select-none"
                            )}
                            priority
                            loading="eager"
                        />
                    {/* </MagneticArea> */}
                </div>
            </section>

        </main >
    );
}
