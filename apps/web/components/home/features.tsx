export function Features() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16">
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-blue-700 font-medium text-sm">Our first in class features</span>
                    </div>
                </div>

                {/* Container wrapper to match the features container width */}
                <div className="flex justify-center">
                    <div style={{ width: "1089px" }} className="max-w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-start text-left">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight text-balance">
                                    Tools that keep you organised, on track, and ready to achieve more.
                                </h2>
                            </div>
                            <div className="md:pt-4 flex flex-col items-end text-right">
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    From customisable workspaces to effortless team collaboration, Nestly is designed to simplify your
                                    day and help you focus on what matters most.
                                </p>
                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                    Explore our features
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Container - similar to dashboard container */}
            <div className="relative mt-16 flex justify-center">
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
                    style={{
                        aspectRatio: "16/10",
                        height: "685px",
                        width: "1089px",
                        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Overlay for better content visibility */}
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative z-10 w-full max-w-6xl mx-auto p-8">
                        <div className="w-[103%] mx-auto">
                            {/* Placeholder for calendar interface - will be replaced with provided image */}
                            <div className="w-full h-auto rounded-2xl shadow-2xl border border-white/20 bg-white p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Calendar</h3>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 gap-4 text-center">
                                    {["14", "15", "16", "17", "18"].map((day) => (
                                        <div key={day} className="p-4 border border-gray-100 rounded-lg">
                                            <div className="font-semibold text-lg mb-2">{day}</div>
                                            <div className="space-y-2">
                                                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Weekly team sync</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Three Feature Cards */}
            <div className="mt-24 flex justify-center">
                <div style={{ width: "1089px" }} className="max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* Card 1 - Plan your week */}
                        <div className="flex flex-col">
                            <div
                                className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                                style={{
                                    aspectRatio: "4/3",
                                    height: "300px",
                                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 w-full p-6">
                                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            <div className="text-center p-2 border border-gray-100 rounded">
                                                <div className="font-semibold">14</div>
                                            </div>
                                            <div className="text-center p-2 border border-gray-100 rounded">
                                                <div className="font-semibold">15</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center">
                                                Weekly team sync
                                                <div className="flex ml-2">
                                                    <div className="w-4 h-4 bg-gray-300 rounded-full -mr-1"></div>
                                                    <div className="w-4 h-4 bg-gray-400 rounded-full -mr-1"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center">
                                                Weekly team sync
                                                <div className="flex ml-2">
                                                    <div className="w-4 h-4 bg-gray-300 rounded-full -mr-1"></div>
                                                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3">Plan your week with clarity.</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Drag tasks into your calendar and block time for deep work — no bouncing between apps.
                                </p>
                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 - Setup templates */}
                        <div className="flex flex-col">
                            <div
                                className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                                style={{
                                    aspectRatio: "4/3",
                                    height: "300px",
                                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 w-full p-6">
                                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                                            </div>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3">Setup templates once, reuse forever.</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Start with clean, proven templates for meetings, projects, and weekly planning.
                                </p>
                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 - Collaborate */}
                        <div className="flex flex-col">
                            <div
                                className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                                style={{
                                    aspectRatio: "4/3",
                                    height: "300px",
                                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 w-full p-6">
                                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                                        <div className="mb-3">
                                            <div className="text-xs text-gray-500 mb-1">Work Team • product document</div>
                                            <div className="flex items-center mb-2">
                                                <div className="w-6 h-6 bg-blue-100 rounded mr-2 flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                                </div>
                                                <span className="text-sm font-medium">Collaboration product design</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs inline-block">Complete</div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                We need to finalize the collaboration features and ensure they work seamlessly across all
                                                devices and platforms.
                                            </p>
                                            <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs inline-block">
                                                High Priority
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3">Collaborate without interruptions.</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {"Share updates, tag teammates, and move work forward — even when you're not online."}
                                </p>
                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
