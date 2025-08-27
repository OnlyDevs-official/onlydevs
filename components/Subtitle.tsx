import React from "react";

interface SubtitleProps {
    text?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({
    text = "OnlyDevs isn't just another stagnant community. We're building the most versatile platform for designers & developers, strengthening the bond between these industries. But we need your help."
}) => {
    return (
        <section className="w-full flex justify-center mt-8 mb-12">
            <p className="text-lg md:text-xl text-white font-medium text-center max-w-2xl leading-relaxed">
                {text.split("need your help").map((part, index, arr) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < arr.length - 1 && (
                            <span className="font-bold text-blue-600">need <span className="orbikular-medium">your</span> help</span>
                        )}
                    </React.Fragment>
                ))}
            </p>

            <div className="flex justify-center">
                <Link
                    href="https://discord.gg/QUaEBhBB8A"
                    target="_blank"
                >
                    <button className="bg-[#006eff] border-none rounded-full flex items-center justify-center 
                px-6 py-3 cursor-pointer transition-all duration-300 
                min-w-[120px] h-[50px] hover:shadow-[0_0_20px_#006eff]">
                        Join Now
                    </button>
                </Link>

                <Link
                    href="https://www.instagram.com/onlydev.s"
                    target="_blank"
                >
                    <button className="border border-white rounded-full flex items-center justify-center px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-opacity-10 min-w-[120px] h-[50px]">
                        Discover
                    </button>
                </Link>

            </div>

        </section>
    );
};

export default Subtitle;
