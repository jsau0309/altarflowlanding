"use client"

import { useState } from "react"
import { HandWrittenTitle } from "@/components/ui/hand-written-title"

export function UseCases() {
    const [selectedUseCase, setSelectedUseCase] = useState("crm-hygiene")

    const useCases = {
        "crm-hygiene": {
            title: "CRM Hygiene",
            description:
                "Keep your database clean and actionable with real-time sync, deduplication, and automated field updates. Conversion helps you fix data at the source so your team can move faster.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                </svg>
            ),
        },
        "lead-scoring": {
            title: "Lead Scoring",
            description:
                "Automatically score and prioritize leads based on engagement, demographics, and behavior patterns. Focus your sales team on the most promising opportunities.",
            icon: <span className="font-bold text-lg">#</span>,
        },
        newsletters: {
            title: "Newsletters",
            description:
                "Create and send targeted email campaigns with advanced segmentation and personalization. Track engagement and optimize your messaging for better results.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        enrichment: {
            title: "Enrichment",
            description:
                "Enhance your contact and company data with real-time information from multiple sources. Get complete profiles with social media, company details, and contact information.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-.181h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ),
        },
        transactional: {
            title: "Transactional",
            description:
                "Send automated transactional emails with high deliverability rates. Handle order confirmations, password resets, and notifications with reliable infrastructure.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                </svg>
            ),
        },
    }

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 pb-12 pt-14">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex-shrink-0">
                        <HandWrittenTitle title="Use cases" />
                    </div>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex-shrink-0">
                        Explore more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left side - Use cases list */}
                    <div className="lg:col-span-1">
                        <div className="space-y-0">
                            {Object.entries(useCases).map(([key, useCase], index) => {
                                const isSelected = selectedUseCase === key
                                const isLast = index === Object.entries(useCases).length - 1

                                return (
                                    <div
                                        key={key}
                                        className={`py-8 ${!isLast ? "border-b border-dotted border-gray-300" : ""} hover:bg-gray-50 cursor-pointer transition-colors px-2`}
                                        onClick={() => setSelectedUseCase(key)}
                                    >
                                        <div className={`flex items-start ${isSelected ? "mb-4" : ""}`}>
                                            <div
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1 ${isSelected ? "bg-blue-100 text-blue-600" : "bg-blue-50 text-blue-400"
                                                    }`}
                                            >
                                                {useCase.icon}
                                            </div>
                                            <div className="flex-1 pr-2">
                                                <h3
                                                    className={`text-2xl font-bold font-sans ${isSelected ? "text-blue-600" : "text-blue-400"}`}
                                                >
                                                    {useCase.title}
                                                </h3>
                                                {isSelected && (
                                                    <p className="text-gray-600 leading-relaxed mt-4 pr-4">{useCase.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right side - Art image */}
                    <div className="lg:col-span-2 mt-8">
                        <div
                            className="rounded-2xl p-8 min-h-[600px] max-h-[600px] relative overflow-hidden"
                            style={{
                                backgroundImage: `url('/images/classical-landscape.png')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="relative z-10 bg-white rounded-xl shadow-sm border border-gray-200 h-full p-6 overflow-auto">
                                {selectedUseCase === "crm-hygiene" && (
                                    <>
                                        {/* Mockup interface showing CRM data management */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <svg
                                                        className="w-4 h-4 text-gray-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex space-x-6 text-sm text-gray-600">
                                                    <span className="border-b-2 border-blue-500 text-blue-600 pb-1">Contact</span>
                                                    <span>Company</span>
                                                    <span>View</span>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Start searching..."
                                                className="px-3 py-1 border border-gray-200 rounded text-sm w-48"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Left column - Navigation */}
                                            <div className="space-y-3">
                                                {["Emails", "Templates", "Workflows", "Snippets"].map((item) => (
                                                    <div key={item} className="flex items-center text-sm text-gray-600 py-2">
                                                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                            />
                                                        </svg>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Right column - Data fields */}
                                            <div className="space-y-3">
                                                {[
                                                    { label: "First Name", value: "first_name" },
                                                    { label: "Job Title", value: "job_title" },
                                                    { label: "Last Name", value: "last_name" },
                                                    { label: "Annual Revenue", value: "annual_revenue" },
                                                    { label: "Company Name", value: "company_name" },
                                                    { label: "City", value: "city" },
                                                    { label: "Country", value: "country" },
                                                ].map((field, index) => (
                                                    <div key={index} className="flex items-center justify-between text-xs py-1">
                                                        <div className="flex items-center">
                                                            <div className="w-3 h-3 border border-gray-300 rounded-sm mr-2"></div>
                                                            <span className="text-gray-700">{field.label}</span>
                                                        </div>
                                                        <span className="text-orange-800">{field.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedUseCase === "lead-scoring" && (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="text-center mb-8">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-2xl font-bold text-blue-600">#</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Scoring Dashboard</h3>
                                            <p className="text-gray-600">Prioritize your leads with intelligent scoring</p>
                                        </div>
                                        <div className="w-full max-w-md space-y-3">
                                            {[
                                                { name: "Sarah Johnson", score: 95, company: "TechCorp" },
                                                { name: "Mike Chen", score: 87, company: "StartupXYZ" },
                                                { name: "Lisa Rodriguez", score: 72, company: "BigCorp Inc" },
                                            ].map((lead, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div>
                                                        <div className="font-medium text-gray-900">{lead.name}</div>
                                                        <div className="text-sm text-gray-600">{lead.company}</div>
                                                    </div>
                                                    <div
                                                        className={`px-3 py-1 rounded-full text-sm font-medium ${lead.score >= 90
                                                                ? "bg-green-100 text-green-800"
                                                                : lead.score >= 80
                                                                    ? "bg-yellow-100 text-yellow-800"
                                                                    : "bg-gray-100 text-gray-800"
                                                            }`}
                                                    >
                                                        {lead.score}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedUseCase === "newsletters" && (
                                    <div className="h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-gray-900">Newsletter Campaign</h3>
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Send Campaign</button>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium text-gray-900">Weekly Product Updates</span>
                                                    <span className="text-sm text-green-600">Sent</span>
                                                </div>
                                                <div className="text-sm text-gray-600">Sent to 2,847 subscribers</div>
                                                <div className="flex space-x-4 text-xs text-gray-500">
                                                    <span>Open Rate: 24.3%</span>
                                                    <span>Click Rate: 5.7%</span>
                                                </div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium text-gray-900">Feature Announcement</span>
                                                    <span className="text-sm text-blue-600">Draft</span>
                                                </div>
                                                <div className="text-sm text-gray-600">Ready to send to 3,124 subscribers</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedUseCase === "enrichment" && (
                                    <div className="h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-gray-900">Data Enrichment</h3>
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Enrich Data</button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-3">Before Enrichment</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Name:</span>
                                                        <span>John Smith</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Email:</span>
                                                        <span>john@company.com</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Company:</span>
                                                        <span className="text-gray-400">Unknown</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Title:</span>
                                                        <span className="text-gray-400">Unknown</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-3">After Enrichment</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Name:</span>
                                                        <span>John Smith</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Email:</span>
                                                        <span>john@company.com</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Company:</span>
                                                        <span className="text-green-600">TechCorp Inc</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Title:</span>
                                                        <span className="text-green-600">VP of Engineering</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedUseCase === "transactional" && (
                                    <div className="h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-gray-900">Transactional Emails</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">99.9% Uptime</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { type: "Welcome Email", status: "Delivered", time: "2 min ago" },
                                                { type: "Password Reset", status: "Delivered", time: "5 min ago" },
                                                { type: "Order Confirmation", status: "Delivered", time: "12 min ago" },
                                                { type: "Account Verification", status: "Delivered", time: "18 min ago" },
                                            ].map((email, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                                                >
                                                    <div>
                                                        <div className="font-medium text-gray-900">{email.type}</div>
                                                        <div className="text-sm text-gray-600">{email.time}</div>
                                                    </div>
                                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                                                        {email.status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
