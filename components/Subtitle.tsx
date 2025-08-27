import React from "react";

interface SubtitleProps {
  text?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({
  text = "OnlyDevs isn't just another stagnant community. We're building the most versatile platform for designers & developers, strengthening the bond between these industries. But we need your help."
}) => {
  return (
    <section className="w-full flex justify-center mt-8 mb-12">
      <p className="text-lg md:text-xl text-gray-900 font-medium text-center max-w-2xl leading-relaxed">
        {text.split("need your help").map((part, index, arr) => (
          <React.Fragment key={index}>
            {part}
            {index < arr.length - 1 && (
              <span className="font-bold text-blue-600">need your help</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};

export default Subtitle;
