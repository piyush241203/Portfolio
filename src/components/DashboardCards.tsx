import {
    Rocket,
    Code2,
    BrainCircuit,
} from "lucide-react";

export default function DashboardCardsSmall() {
    return (
        <div className="relative w-[280px] h-[223px] bg-[#bd1c1c00] overflow-hidden font-archivo">

            {/* Dotted Paths */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 280 223"
                fill="none"
            >
                {/* <g transform="translate(-18,2)">
                    <path
                        d="M163 45 C197 7 233 21 231 77"
                        stroke="#ffb197"
                        strokeWidth="1"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                    />
                </g>

                <g transform="translate(10,-10)">
                    <path
                        d="M96 95 C46 151 108 194 159 179"
                        stroke="#ffd0bf"
                        strokeWidth="1"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                    />
                </g> */}

                <g transform="translate(-16,-5)">
                <path
                    d="M130 40 A80 80 0 0 1 245 85"
                    stroke="#ffb197"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Bottom Arc */}
                <path
                    d="M95 95 A95 95 0 0 0 185 185"
                    stroke="#ffd0bf"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                    fill="none"
                />
                </g>

            </svg>


            {/* AI Card */}
            <div
                className="
        absolute
        left-[10px]
        top-[9px]
        w-[134px]
        h-[90px]
        bg-[#ffffff]
        rounded-[10px]
        shadow-[0_5px_5px_rgba(0,0,0,0.11)]
      "
            >
                <div className="pt-[10px] pl-[10px]">
                    <h3 className="text-[8px] font-semibold tracking-wide text-[#2b2b2b]">
                        AI SOLUTIONS
                    </h3>

                    <div className="mt-[6px] flex items-start">
                        <span className="text-[23px] leading-none font-medium">
                            98
                        </span>

                        <span className="text-[11px] mt-[2px]">%</span>
                    </div>

                    <p className="text-[8px] text-[#4d4d4d] mt-[1px]">
                        Accuracy
                    </p>
                </div>

                <svg
                    className="absolute left-[8px] bottom-[8px]"
                    width="115"
                    height="32"
                    viewBox="0 0 320 90"
                >
                    <path
                        d="
            M5 70
            C30 30, 60 85, 90 50
            C120 20, 145 80, 185 30
            C220 0, 245 75, 320 20
          "
                        fill="none"
                        stroke="#ff9d7a"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Brain Icon */}
            <div
                className="
        absolute
        left-[102px]
        top-[4px]
        w-[20px]
        h-[20px]
        rounded-full
        bg-black
        flex
        items-center
        justify-center
        shadow-[0_3px_3px_rgba(0,0,0,0.4)]
      "
            >
                <BrainCircuit
                    size={9}
                    color="white"
                    strokeWidth={2}
                />
            </div>

            {/* Full Stack Card */}
            <div
                className="
        absolute
        left-[27px]
        top-[115px]
        w-[106px]
        h-[99px]
        bg-white
        rounded-[10px]
        shadow-[0_5px_5px_rgba(0,0,0,0.09)]
      "
            >
                <div className="p-[12px]">
                    <h3 className="text-[8px] font-semibold">
                        FULL STACK
                    </h3>

                    <h3 className="text-[8px] font-semibold">
                        DEVELOPER
                    </h3>

                    <div className="flex items-center mt-[6px] gap-[6px]">
                        <Code2
                            size={15}
                            strokeWidth={1.5}
                        />

                        <div className="w-[50px]">
                            <div className="w-[13px] h-[2px] rounded-full bg-[#ff9d7a]" />

                            <div className="mt-[4px] h-[2px] bg-[#ececec] rounded-full relative">
                                <div className="absolute inset-y-0 left-0 w-[33px] rounded-full bg-[#ff9d7a]" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-[8px] flex items-end gap-[3px]">
                        <div className="text-[19px] leading-none font-semibold">
                            50+
                        </div>

                        <div className="text-[7px] text-[#5c5c5c]">
                            Projects
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Card */}
            <div
                className="
        absolute
        left-[168px]
        top-[79px]
        w-[93px]
        h-[116px]
        bg-white
        rounded-[10px]
        shadow-[0_5px_5px_rgba(0,0,0,0.09)]
      "
            >
                <div className="p-[11px]">
                    <h3 className="text-[8px] font-semibold text-[#666]">
                        PERFORMANCE
                    </h3>

                    <div className="mt-[6px] flex items-start">
                        <span className="text-[20px] leading-none font-medium">
                            95
                        </span>

                        <span className="text-[10px] mt-[1px]">%</span>
                    </div>

                    <p className="text-[7px] text-[#444]">
                        Client <br /> Satisfaction
                    </p>

                    <div className="absolute bottom-[10px] left-[14px] flex items-end gap-[3px]">
                        {[22, 30, 14, 34, 20, 54, 31, 54].map(
                            (h, i) => (
                                <div
                                    key={i}
                                    className="w-[6px] rounded-t-[2px] bg-[#ff9d7a]"
                                    style={{ height: `${h}px` }}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Rocket Icon */}
            <div
                className="
        absolute
        right-[10px]
        top-[75px]
        w-[20px]
        h-[20px]
        rounded-full
        bg-black
        flex
        items-center
        justify-center
        shadow-[0_3px_3px_rgba(0,0,0,0.4)]
      "
            >
                <Rocket
                    size={9}
                    color="white"
                    strokeWidth={2}
                />
            </div>

        </div>
    );
}