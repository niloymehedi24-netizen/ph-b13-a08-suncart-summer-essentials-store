"use client";

import { Droplets, Sun, GlassWater, Shirt } from "lucide-react";

import { useSpring, animated } from "@react-spring/web";

const SummerCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description:
        "Drink plenty of water throughout the day to stay refreshed and avoid dehydration during hot summer days.",
      icon: <GlassWater size={40} />,
    },
    {
      id: 2,
      title: "Use Sunscreen",
      description:
        "Apply SPF 30+ sunscreen before going outside to protect your skin from harmful UV rays.",
      icon: <Sun size={40} />,
    },
    {
      id: 3,
      title: "Wear Breathable Clothes",
      description:
        "Choose lightweight cotton outfits to stay cool and comfortable during warm weather.",
      icon: <Shirt size={40} />,
    },
    {
      id: 4,
      title: "Keep Skin Fresh",
      description:
        "Use face mist or aloe vera gel to soothe and hydrate your skin throughout the day.",
      icon: <Droplets size={40} />,
    },
  ];

  return (
    <section className="py-16 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800">
            Summer Care Tips ☀️
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Stay healthy, cool, and protected this summer with these essential
            care tips.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <AnimatedCard key={tip.id} tip={tip} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCard = ({ tip, delay }) => {
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    delay,
    config: {
      tension: 180,
      friction: 18,
    },
  });

  return (
    <animated.div style={animation}>
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-orange-100 h-full">
        <div className="bg-linear-to-r from-orange-400 to-pink-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
          {tip.icon}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>

        <p className="text-gray-500 leading-relaxed">{tip.description}</p>
      </div>
    </animated.div>
  );
};

export default SummerCareTips;
