import { BlurFade } from "@components/ui/blur-fade"
import { images } from "./image"
import Image from 'next/image';

export default function Gallery() {
    return (
        <section className="max-w-4xl mx-auto py-4">
            <div className="columns-2 gap-4 sm:columns-3">
                {images.map((item, idx) => (
                    <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            className="mb-4 size-full rounded-lg object-contain"
                            width={item.width}
                            height={item.height}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}

