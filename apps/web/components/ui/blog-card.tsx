interface BlogCardProps {
  title: string
  date: string
  description: string
}

export function BlogCard({ title, date, description }: BlogCardProps) {
  return (
    <div className="group w-full space-y-3 p-4 text-white hover:cursor-pointer">
      {/* Mobile: Stack layout */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="font-serif text-xl text-neutral-100 transition-all duration-500 ease-out group-hover:text-[#5B9BD5]">
          {title}
        </div>
        <div className="font-mono text-xs uppercase text-neutral-400 group-hover:text-[#5B9BD5]">
          {date}
        </div>
      </div>

      {/* Desktop: Inline layout with dashed line */}
      <div className="relative hidden md:flex items-end justify-center gap-1">
        <div className="whitespace-nowrap font-serif text-2xl text-neutral-100 transition-all duration-500 ease-out group-hover:text-[#5B9BD5]">
          {title}
        </div>
        <span className="mb-[6px] w-full border-b-[0.5px] border-dashed border-neutral-600 group-hover:border-[#5B9BD5]"></span>
        <div className="whitespace-nowrap font-mono text-base uppercase text-neutral-400 group-hover:text-[#5B9BD5]">
          {date}
        </div>
      </div>

      {/* Description */}
      <div className="text-neutral-400 group-hover:text-[#5B9BD5] text-base md:text-lg">
        {description}
      </div>
    </div>
  )
}
