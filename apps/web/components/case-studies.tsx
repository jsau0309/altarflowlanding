"use client"
import { useEffect, useState, useRef } from "react"
import { Heart, TrendingUp } from "lucide-react"
import Image from "next/image"
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/line-charts-9"
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api"
import CountUp from "react-countup"

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    setReduced(mq.matches)
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])
  return reduced
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim()
  const m = value.match(/^([^\d\-+]*?)\s*([-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/)
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 }
  }
  const [, prefix, num, suffix] = m
  const normalized = num.replace(/,/g, "")
  const end = Number.parseFloat(normalized)
  const decimals = normalized.split(".")[1]?.length ?? 0
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  }
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
}: {
  value: string
  label: string
  sub?: string
  duration?: number
}) {
  const reduceMotion = usePrefersReducedMotion()
  const { prefix, end, suffix, decimals } = parseMetricValue(value)

  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p
        className="text-2xl font-medium sm:text-4xl text-popover-foreground font-serif"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <CountUp end={end} decimals={decimals} duration={duration} separator="," enableScrollSpy scrollSpyOnce />
        )}
        {suffix}
      </p>
      <p className="font-medium text-left text-foreground font-mono">{label}</p>
      {sub ? <p className="text-left text-ring font-mono">{sub}</p> : null}
    </div>
  )
}

const donationChartData = [
  { date: "Jan", value: 850 },
  { date: "Feb", value: 1100 },
  { date: "Mar", value: 1680 },
  { date: "Apr", value: 1490 },
  { date: "May", value: 2020 },
  { date: "Jun", value: 2080 },
  { date: "Jul", value: 2180 },
  { date: "Aug", value: 2250 },
  { date: "Sep", value: 2480 },
  { date: "Oct", value: 2290 },
  { date: "Nov", value: 2450 },
  { date: "Dec", value: 2900 },
]

const chartConfig = {
  value: {
    label: "Donations",
    color: "#10b981",
  },
} satisfies ChartConfig

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    payload: {
      date: string
      value: number
    }
  }>
}

const CustomChartTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white border border-black/10 rounded-lg p-3 shadow-lg">
        <div className="text-sm text-black/60 mb-1">{data.date}</div>
        <div className="flex items-center gap-2">
          <div className="text-base font-bold text-black">${(data.value * 10).toLocaleString()}</div>
          <div className="text-[11px] text-emerald-600">+12.7%</div>
        </div>
      </div>
    )
  }
  return null
}

function DonationsChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(0)
  const chartRef = useRef<HTMLDivElement>(null)

  const currentBalance = 24847
  const todaysDonations = 1249
  const pnlPercentage = 8
  const highValue = Math.max(...donationChartData.map((d) => d.value))
  const lowValue = Math.min(...donationChartData.map((d) => d.value))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      setAnimationProgress(progress * 100)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  return (
    <div ref={chartRef} className="w-full sm:w-[90%] mx-auto min-w-0">
      <Card className="w-full bg-white border-0 shadow-xl overflow-hidden">
        <CardContent className="flex flex-col items-stretch gap-4 sm:gap-5 p-3 sm:p-6">
          {/* Header */}
          <div className="mb-2">
            <h4 className="text-base text-black/60 font-medium mb-1">Total Donations</h4>
            <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-3.5">
              <span className="text-4xl font-bold text-black">${currentBalance.toLocaleString()}</span>
              <div className="flex items-center gap-1 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+12.7%</span>
                <span className="text-black/60 font-normal">Last 30 days</span>
              </div>
            </div>
          </div>

          <div className="grow">
            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm mb-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-black/60">Today&apos;s Donations:</span>
                <span className="font-semibold text-black">${todaysDonations.toLocaleString()}</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>(+{pnlPercentage}%)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-black/60 text-xs sm:text-sm">
                <span>
                  High: <span className="text-emerald-600 font-medium">${(highValue * 10).toLocaleString()}</span>
                </span>
                <span>
                  Low: <span className="text-amber-600 font-medium">${(lowValue * 10).toLocaleString()}</span>
                </span>
              </div>
            </div>

            {/* Animated Chart */}
            <ChartContainer
              config={chartConfig}
              className="h-64 w-full [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial"
            >
              <ComposedChart data={donationChartData} margin={{ top: 20, right: 10, left: 5, bottom: 20 }}>
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="#e5e7eb" fillOpacity="0.5" />
                  </pattern>
                  <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
                  </filter>
                  <filter id="lineShadow" x="-100%" y="-100%" width="300%" height="300%">
                    <feDropShadow dx="4" dy="6" stdDeviation="15" floodColor="rgba(16, 185, 129, 0.6)" />
                  </filter>
                  <clipPath id="animatedClip">
                    <rect x="0" y="0" width={`${animationProgress}%`} height="100%" />
                  </clipPath>
                </defs>

                <rect x="0" y="0" width="100%" height="100%" fill="url(#dotGrid)" style={{ pointerEvents: "none" }} />

                <CartesianGrid
                  strokeDasharray="4 8"
                  stroke="#e5e7eb"
                  strokeOpacity={1}
                  horizontal={true}
                  vertical={false}
                />

                <ReferenceLine x="Jun" stroke="#10b981" strokeDasharray="4 4" strokeWidth={1} />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#10b981" }}
                  tickMargin={15}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#10b981" }}
                  tickFormatter={(value) => `$${((value * 10) / 1000).toFixed(0)}k`}
                  tickMargin={15}
                />

                <ChartTooltip
                  content={<CustomChartTooltip />}
                  cursor={{ strokeDasharray: "3 3", stroke: "#9ca3af", strokeOpacity: 0.5 }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  filter="url(#lineShadow)"
                  clipPath="url(#animatedClip)"
                  dot={(props) => {
                    const { cx, cy, payload, index } = props
                    const totalPoints = donationChartData.length
                    const pointProgress = ((index + 1) / totalPoints) * 100
                    const shouldShow = animationProgress >= pointProgress

                    if (payload.date === "Jun" || payload.value > 2800 || payload.value < 1000) {
                      return (
                        <circle
                          key={`dot-${payload.date}`}
                          cx={cx}
                          cy={cy}
                          r={6}
                          fill="#10b981"
                          stroke="white"
                          strokeWidth={2}
                          filter="url(#dotShadow)"
                          style={{
                            opacity: shouldShow ? 1 : 0,
                            transition: "opacity 0.3s ease-out",
                          }}
                        />
                      )
                    }
                    return <g key={`dot-${payload.date}`} />
                  }}
                  activeDot={{
                    r: 6,
                    fill: "#10b981",
                    stroke: "white",
                    strokeWidth: 2,
                    filter: "url(#dotShadow)",
                  }}
                />
              </ComposedChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      headline: "Lead With Clarity, Not Guesswork",
      body: "You can't grow what you can't see. Altarflow gives you instant visibility into every donations, expenses, fund balances so you can make wise decisions and steward resources with confidence.",
      image: null,
      icon: Heart,
      metrics: [],
      showChart: true,
    },
    {
      id: 2,
      title: "Financial Clarity for Ministry",
      quote:
        "We went from dreading monthly reports to generating them in seconds. Altarflow gave us visibility into every fund, every expense, and every opportunity to grow.",
      name: "Sarah Chen",
      role: "Church Administrator, New Life Fellowship",
      image: "/images/water-lilies-painting.jpg",
      icon: TrendingUp,
      metrics: [
        { value: "3x", label: "Faster Reporting", sub: "Month-end close time" },
        { value: "40%", label: "Increased Giving", sub: "Year over year growth" },
        { value: "20hrs", label: "Of Administrative Work", sub: "Per week" },
        { value: "70%", label: "Process Automation", sub: "Manual tasks eliminated" },
        { value: "100%", label: "Ministry Time Back", sub: "For life" },
        { value: "100x", label: "Global Expansion", sub: "Around the globe" },
      ],
      showDatabaseComponent: true,
    },
  ]

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-32 relative"
      style={{ backgroundColor: "#1c1c1c" }}
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16 lg:mb-24 px-2">
          <h1
            id="case-studies-heading"
            className="text-3xl font-semibold text-foreground font-serif sm:text-4xl md:text-5xl text-center text-balance"
          >
            From Chaos to Clarity. From Surviving to Thriving.
          </h1>
          <p className="text-card-foreground font-mono text-sm sm:text-base font-extralight">
            Here&#39;s how Altarflow helps your ministry grow.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1
            const isHeadlineFormat = "headline" in study
            const showChart = "showChart" in study && study.showChart
            const showDatabaseComponent = "showDatabaseComponent" in study && study.showDatabaseComponent

            return (
              <div
                key={study.id}
                className="grid gap-8 lg:grid-cols-2 xl:gap-16 items-center border-b border-white/20 pb-12 lg:pb-16"
              >
                {/* Left: Content */}
                <div
                  className={`flex flex-col gap-6 lg:pr-12 xl:pr-16 text-left ${reversed
                    ? "lg:order-2 lg:border-l border-white/20 lg:pl-12 xl:pl-16 lg:pr-0"
                    : "lg:border-r border-white/20"
                    }`}
                >
                  {isHeadlineFormat ? (
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl lg:text-3xl text-white leading-tight font-normal">{study.headline}</h3>
                      <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-xl font-light font-mono text-left">
                        {study.body}
                      </p>
                    </div>
                  ) : showDatabaseComponent ? (
                    <DatabaseWithRestApi
                      badgeTexts={{
                        first: "Donations",
                        second: "Expenses",
                        third: "Reports",
                        fourth: "Members",
                      }}
                      title="Altarflow Network is working"
                      buttonTexts={{
                        first: "Your Organization",
                        second: "Altarflow",
                      }}
                      circleText="GOD"
                    />
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-8">
                      {study.image && (
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={`${study.title} illustration`}
                          width={300}
                          height={400}
                          className="aspect-[29/35] h-auto w-full max-w-60 rounded-2xl object-cover ring-1 ring-black/10 hover:scale-105 transition-all duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <figure className="flex flex-col justify-between gap-6 text-left">
                        <blockquote className="text-left">
                          <h3 className="text-xl lg:text-2xl font-semibold text-black leading-relaxed text-left mb-3">
                            {study.title}
                          </h3>
                          <p className="text-black/70 text-base lg:text-lg leading-relaxed">
                            &ldquo;{study.quote}&rdquo;
                          </p>
                        </blockquote>
                        <figcaption className="flex items-center gap-4 mt-4 text-left">
                          <div className="flex flex-col gap-1">
                            <span className="text-md font-medium text-black">{study.name}</span>
                            <span className="text-sm text-black/60">{study.role}</span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  )}
                </div>

                {/* Right: Chart, Database Component, or Metrics */}
                <div className={`self-center ${reversed ? "lg:order-1" : ""}`}>
                  {showChart ? (
                    <DonationsChart />
                  ) : showDatabaseComponent ? (
                    <div className="grid grid-cols-2 gap-4 text-left">
                      {study.metrics.map((metric, i) => (
                        <MetricStat
                          key={`${study.id}-${i}`}
                          value={metric.value}
                          label={metric.label}
                          sub={metric.sub}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 text-left">
                      {study.metrics.map((metric, i) => (
                        <MetricStat
                          key={`${study.id}-${i}`}
                          value={metric.value}
                          label={metric.label}
                          sub={metric.sub}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #1c1c1c)",
        }}
      />
    </section>
  )
}
