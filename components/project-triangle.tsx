"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface TriangleState {
  fast: boolean;
  cheap: boolean;
  good: boolean;
}

export function ProjectTriangle() {
  const [selected, setSelected] = useState<TriangleState>({
    fast: true,
    cheap: true,
    good: false,
  });

  const [hoveredCorner, setHoveredCorner] = useState<string | null>(null);

  const toggleConstraint = (constraint: keyof TriangleState) => {
    const newState = { ...selected, [constraint]: !selected[constraint] };
    const selectedCount = Object.values(newState).filter(Boolean).length;

    if (selectedCount > 2) {
      // Find all currently selected constraints (excluding the one just clicked)
      const selectedKeys = (Object.keys(newState) as (keyof TriangleState)[]).filter(
        (key) => key !== constraint && newState[key]
      );
      
      // Randomly pick one to deselect
      const randomIndex = Math.floor(Math.random() * selectedKeys.length);
      const keyToDeselect = selectedKeys[randomIndex];
      newState[keyToDeselect] = false;
    }

    setSelected(newState);
  };

  const tradeoff = useMemo(() => {
    const { fast, cheap, good } = selected;
    if (fast && cheap && !good) {
      return {
        title: "CHEAP & QUICK = LOW QUALITY!",
        description:
          "You'll get it fast and cheap, but don't expect perfection! Bugs, shortcuts, and technical debt await...",
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-500",
        emoji: "POW!",
      };
    }
    if (fast && good && !cheap) {
      return {
        title: "FAST & GOOD = EXPENSIVE!",
        description:
          "Premium quality at lightning speed? That'll cost ya! Get ready to open that wallet wide...",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500",
        emoji: "KA-CHING!",
      };
    }
    if (cheap && good && !fast) {
      return {
        title: "CHEAP & GOOD = SLOW!",
        description:
          "Quality work on a budget is possible... if you've got time to spare. Patience is a virtue!",
        color: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-500",
        emoji: "TICK TOCK!",
      };
    }
    return {
      title: "PICK TWO!",
      description:
        "Click on the corners to choose your constraints and discover the trade-off!",
      color: "from-slate-400 to-slate-500",
      bgColor: "bg-slate-400",
      emoji: "CHOOSE!",
    };
  }, [selected]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Comic-style speech bubble result */}
      <div className="relative">
        <div
          className={cn(
            "relative px-6 py-4 rounded-2xl bg-gradient-to-br text-white font-bold text-center min-w-[280px] max-w-sm",
            "border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
            "transform transition-all duration-300",
            tradeoff.color
          )}
        >
          <div className="absolute -top-3 -right-3 bg-yellow-300 text-black px-3 py-1 rounded-full border-3 border-black text-sm font-black rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {tradeoff.emoji}
          </div>
          <h3 className="text-lg md:text-xl font-black tracking-tight drop-shadow-sm">
            {tradeoff.title}
          </h3>
          <p className="text-sm mt-2 font-medium opacity-95">
            {tradeoff.description}
          </p>
        </div>
        {/* Speech bubble tail */}
        <div
          className={cn(
            "absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0",
            "border-l-[16px] border-l-transparent",
            "border-r-[16px] border-r-transparent",
            "border-t-[20px]",
            tradeoff.bgColor === "bg-purple-500" && "border-t-purple-500",
            tradeoff.bgColor === "bg-pink-500" && "border-t-pink-500",
            tradeoff.bgColor === "bg-amber-500" && "border-t-amber-500",
            tradeoff.bgColor === "bg-slate-400" && "border-t-slate-400"
          )}
        />
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0
          border-l-[18px] border-l-transparent
          border-r-[18px] border-r-transparent
          border-t-[22px] border-t-black -z-10"
        />
      </div>

      {/* Interactive Triangle SVG - Comic Style */}
      <div className="relative w-full max-w-lg aspect-[1.15] mt-6">
        <svg viewBox="0 0 400 350" className="w-full h-full relative z-10">
          <defs>
            {/* Comic halftone patterns */}
            <pattern
              id="dots-purple"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.2" fill="rgba(139,92,246,0.3)" />
            </pattern>
            <pattern
              id="dots-pink"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.2" fill="rgba(236,72,153,0.3)" />
            </pattern>
            <pattern
              id="dots-orange"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.2" fill="rgba(251,146,60,0.3)" />
            </pattern>

            {/* Text background filters for readability */}
            <filter id="text-bg" x="-10%" y="-10%" width="120%" height="120%">
              <feFlood floodColor="white" floodOpacity="0.9" />
              <feComposite in="SourceGraphic" operator="over" />
            </filter>
          </defs>

          {/* Main triangle shadow */}
          <polygon points="204,24 384,334 24,334" fill="black" />

          {/* Main triangle white background */}
          <polygon
            points="200,20 380,330 20,330"
            fill="white"
            stroke="black"
            strokeWidth="5"
          />

          {/* Center sections - trade-off areas with comic style */}
          {/* Top-left section (Cheap & Quick) */}
          <polygon
            points="200,100 115,245 200,195"
            className="transition-all duration-300"
            fill={selected.fast && selected.cheap ? "#C4B5FD" : "#F1F5F9"}
            stroke="black"
            strokeWidth="3"
          />
          {selected.fast && selected.cheap && (
            <polygon
              points="200,100 115,245 200,195"
              fill="url(#dots-purple)"
            />
          )}

          {/* Top-right section (Fast & Good) */}
          <polygon
            points="200,100 200,195 285,245"
            className="transition-all duration-300"
            fill={selected.fast && selected.good ? "#FBCFE8" : "#F1F5F9"}
            stroke="black"
            strokeWidth="3"
          />
          {selected.fast && selected.good && (
            <polygon
              points="200,100 200,195 285,245"
              fill="url(#dots-pink)"
            />
          )}

          {/* Bottom section (Cheap & Good) */}
          <polygon
            points="115,245 200,195 285,245 200,310"
            className="transition-all duration-300"
            fill={selected.cheap && selected.good ? "#FDE68A" : "#F1F5F9"}
            stroke="black"
            strokeWidth="3"
          />
          {selected.cheap && selected.good && (
            <polygon
              points="115,245 200,195 285,245 200,310"
              fill="url(#dots-orange)"
            />
          )}

          {/* Top corner - FAST (Done Quickly) */}
          <g
            className="cursor-pointer"
            onClick={() => toggleConstraint("fast")}
            onMouseEnter={() => setHoveredCorner("fast")}
            onMouseLeave={() => setHoveredCorner(null)}
          >
            <polygon
              points="200,15 150,115 250,115"
              fill={selected.fast ? "#38BDF8" : "#CBD5E1"}
              stroke="black"
              strokeWidth="4"
              className="transition-all duration-200"
              style={{
                transform: hoveredCorner === "fast" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "200px 70px",
              }}
            />
            {/* Action lines for selected state */}
            {selected.fast && (
              <>
                <line x1="200" y1="5" x2="200" y2="-5" stroke="black" strokeWidth="3" />
                <line x1="170" y1="25" x2="160" y2="15" stroke="black" strokeWidth="2" />
                <line x1="230" y1="25" x2="240" y2="15" stroke="black" strokeWidth="2" />
              </>
            )}
            {/* Comic-style label banner */}
            <rect
              x="155"
              y="48"
              width="90"
              height="45"
              rx="4"
              fill={selected.fast ? "#0EA5E9" : "#94A3B8"}
              stroke="black"
              strokeWidth="2.5"
            />
            <rect
              x="158"
              y="51"
              width="84"
              height="39"
              rx="2"
              fill={selected.fast ? "#38BDF8" : "#CBD5E1"}
            />
            <text
              x="200"
              y="68"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.fast ? "#0C4A6E" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              DONE
            </text>
            <text
              x="200"
              y="84"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.fast ? "#0C4A6E" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              QUICKLY
            </text>
          </g>

          {/* Bottom-left corner - CHEAP */}
          <g
            className="cursor-pointer"
            onClick={() => toggleConstraint("cheap")}
            onMouseEnter={() => setHoveredCorner("cheap")}
            onMouseLeave={() => setHoveredCorner(null)}
          >
            <polygon
              points="20,330 105,250 105,330"
              fill={selected.cheap ? "#4ADE80" : "#CBD5E1"}
              stroke="black"
              strokeWidth="4"
              className="transition-all duration-200"
              style={{
                transform: hoveredCorner === "cheap" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "65px 290px",
              }}
            />
            {selected.cheap && (
              <>
                <line x1="30" y1="340" x2="20" y2="350" stroke="black" strokeWidth="2" />
                <line x1="10" y1="320" x2="0" y2="320" stroke="black" strokeWidth="2" />
              </>
            )}
            {/* Comic-style label banner */}
            <rect
              x="25"
              y="275"
              width="70"
              height="45"
              rx="4"
              fill={selected.cheap ? "#22C55E" : "#94A3B8"}
              stroke="black"
              strokeWidth="2.5"
            />
            <rect
              x="28"
              y="278"
              width="64"
              height="39"
              rx="2"
              fill={selected.cheap ? "#4ADE80" : "#CBD5E1"}
            />
            <text
              x="60"
              y="296"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.cheap ? "#14532D" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              LOW
            </text>
            <text
              x="60"
              y="312"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.cheap ? "#14532D" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              COST
            </text>
          </g>

          {/* Bottom-right corner - GOOD */}
          <g
            className="cursor-pointer"
            onClick={() => toggleConstraint("good")}
            onMouseEnter={() => setHoveredCorner("good")}
            onMouseLeave={() => setHoveredCorner(null)}
          >
            <polygon
              points="380,330 295,330 295,250"
              fill={selected.good ? "#FB923C" : "#CBD5E1"}
              stroke="black"
              strokeWidth="4"
              className="transition-all duration-200"
              style={{
                transform: hoveredCorner === "good" ? "scale(1.05)" : "scale(1)",
                transformOrigin: "335px 290px",
              }}
            />
            {selected.good && (
              <>
                <line x1="370" y1="340" x2="380" y2="350" stroke="black" strokeWidth="2" />
                <line x1="390" y1="320" x2="400" y2="320" stroke="black" strokeWidth="2" />
              </>
            )}
            {/* Comic-style label banner */}
            <rect
              x="305"
              y="275"
              width="70"
              height="45"
              rx="4"
              fill={selected.good ? "#F97316" : "#94A3B8"}
              stroke="black"
              strokeWidth="2.5"
            />
            <rect
              x="308"
              y="278"
              width="64"
              height="39"
              rx="2"
              fill={selected.good ? "#FB923C" : "#CBD5E1"}
            />
            <text
              x="340"
              y="296"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.good ? "#7C2D12" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              HIGH
            </text>
            <text
              x="340"
              y="312"
              textAnchor="middle"
              fontSize="13"
              fontWeight="900"
              fill={selected.good ? "#7C2D12" : "#475569"}
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.5px" }}
            >
              QUALITY
            </text>
          </g>

          {/* Inner trade-off labels as speech bubbles */}
          {/* Top-left speech bubble (Cheap & Quick = Low Quality) */}
          <g>
            {/* Bubble shadow */}
            <path
              d="M122,148 L182,148 Q188,148 188,154 L188,194 Q188,200 182,200 L162,200 L155,212 L153,200 L122,200 Q116,200 116,194 L116,154 Q116,148 122,148 Z"
              fill="black"
              transform="translate(2, 2)"
            />
            {/* Bubble body with tail pointing toward center */}
            <path
              d="M122,148 L182,148 Q188,148 188,154 L188,194 Q188,200 182,200 L162,200 L155,212 L153,200 L122,200 Q116,200 116,194 L116,154 Q116,148 122,148 Z"
              fill="white"
              stroke="black"
              strokeWidth="2.5"
            />
            <text
              x="152"
              y="193"
              textAnchor="middle"
              fontSize="9"
              fontWeight="900"
              fill="#7C3AED"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              LOW QUALITY
            </text>
          </g>

          {/* Top-right speech bubble (Fast & Good = Expensive) */}
          <g>
            {/* Bubble shadow */}
            <path
              d="M218,148 L278,148 Q284,148 284,154 L284,194 Q284,200 278,200 L248,200 L245,212 L238,200 L218,200 Q212,200 212,194 L212,154 Q212,148 218,148 Z"
              fill="black"
              transform="translate(2, 2)"
            />
            {/* Bubble body with tail pointing toward center */}
            <path
              d="M218,148 L278,148 Q284,148 284,154 L284,194 Q284,200 278,200 L248,200 L245,212 L238,200 L218,200 Q212,200 212,194 L212,154 Q212,148 218,148 Z"
              fill="white"
              stroke="black"
              strokeWidth="2.5"
            />
            <text
              x="248"
              y="193"
              textAnchor="middle"
              fontSize="9"
              fontWeight="900"
              fill="#DB2777"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              EXPENSIVE
            </text>
          </g>

          {/* Bottom speech bubble (Cheap & Good = Low Priority) */}
          <g>
            {/* Bubble shadow */}
            <path
              d="M148,248 L252,248 Q258,248 258,254 L258,288 Q258,294 252,294 L208,294 L200,280 L192,294 L148,294 Q142,294 142,288 L142,254 Q142,248 148,248 Z"
              fill="black"
              transform="translate(2, 2)"
            />
            {/* Bubble body with tail pointing up toward center */}
            <path
              d="M148,248 L252,248 Q258,248 258,254 L258,288 Q258,294 252,294 L208,294 L200,280 L192,294 L148,294 Q142,294 142,288 L142,254 Q142,248 148,248 Z"
              fill="white"
              stroke="black"
              strokeWidth="2.5"
            />
            <text
              x="200"
              y="287"
              textAnchor="middle"
              fontSize="9"
              fontWeight="900"
              fill="#D97706"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              LOW PRIORITY
            </text>
          </g>
        </svg>
      </div>

      {/* Comic-style selection buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <button
          onClick={() => toggleConstraint("fast")}
          type="button"
          className={cn(
            "px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wide transition-all duration-200",
            "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
            "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
            selected.fast
              ? "bg-sky-400 text-sky-950"
              : "bg-slate-200 text-slate-600"
          )}
        >
          Fast
        </button>
        <button
          onClick={() => toggleConstraint("cheap")}
          type="button"
          className={cn(
            "px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wide transition-all duration-200",
            "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
            "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
            selected.cheap
              ? "bg-green-400 text-green-950"
              : "bg-slate-200 text-slate-600"
          )}
        >
          Cheap
        </button>
        <button
          onClick={() => toggleConstraint("good")}
          type="button"
          className={cn(
            "px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wide transition-all duration-200",
            "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
            "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
            selected.good
              ? "bg-orange-400 text-orange-950"
              : "bg-slate-200 text-slate-600"
          )}
        >
          Good
        </button>
      </div>

      {/* Current selection - Comic badge style */}
      <div className="flex items-center gap-2 text-sm font-bold">
        <span className="text-slate-600">YOU PICKED:</span>
        <div className="flex gap-2">
          {selected.fast && (
            <span className="px-3 py-1 bg-sky-400 text-sky-950 rounded border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Fast
            </span>
          )}
          {selected.cheap && (
            <span className="px-3 py-1 bg-green-400 text-green-950 rounded border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Cheap
            </span>
          )}
          {selected.good && (
            <span className="px-3 py-1 bg-orange-400 text-orange-950 rounded border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Good
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
