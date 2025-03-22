"use client";

import React from "react";

import { Dock, DockIcon } from "@components/ui/dock";
import { IconBrandCodecov, IconBrandFacebook, IconBrandFigma, IconBrandGithub, IconBrandTailwind } from "@tabler/icons-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockMenu() {
    return (
        <div className="relative">
            <Dock direction="middle">
                <DockIcon>
                    <IconBrandGithub />
                </DockIcon>
                <DockIcon>
                    <IconBrandFigma />
                </DockIcon>
                <DockIcon>
                    <IconBrandTailwind />
                </DockIcon>
            </Dock>
        </div>
    );
}