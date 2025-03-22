"use client";

import React from "react";

import { Dock, DockIcon } from "@components/ui/dock";
import { IconBrandBehance, IconBrandDribbble, IconBrandFigma, IconBrandGithub, IconBrandGitlab, IconBrandGoogle, IconBrandLinkedin } from "@tabler/icons-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavMenu() {
    return (
        <div className="relative">
            <Dock direction="bottom">
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandGithub />
                </DockIcon>
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandGoogle />
                </DockIcon>
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandLinkedin/>
                </DockIcon>
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandBehance/>
                </DockIcon>
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandDribbble/>
                </DockIcon>
                <DockIcon className="from-primary text-white to-primary/50 rounded-xl bg-gradient-to-t inline-flex w-fit px-2 py-2 gap-1 border-border">
                    <IconBrandFigma />
                </DockIcon>
            </Dock>
        </div>
    );
}