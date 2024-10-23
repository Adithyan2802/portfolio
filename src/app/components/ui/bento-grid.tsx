import {cn} from "@/lib/utils";
import {GlobeDemo} from "@/app/components/ui/gridglobe";
import IconCloud from "@/app/components/ui/icon-cloud";
import {slugs} from "@/app/constants";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  id,
                                  img,
                                  imgClass,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClass?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:bg-opacity-5 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {id === 2 && <IconCloud iconSlugs={slugs}/>}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="text-2xl font-medium heading-gradient mb-2 mt-2">
                    {title}
                </div>
            </div>
            {id === 7 && <GlobeDemo/>}
        </div>
    );
};
