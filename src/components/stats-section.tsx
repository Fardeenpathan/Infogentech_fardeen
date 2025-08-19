import { Badge } from '@/components/ui/badge'

interface StatItemProps {
  number: string
  label: string
  color: 'purple' | 'blue' | 'green' | 'orange'
}

function StatItem({ number, label, color }: StatItemProps) {
  const colorClasses = {
    purple: 'text-purple-400',
    blue: 'text-blue-400', 
    green: 'text-green-400',
    orange: 'text-orange-400'
  }

  return (
    <div className="text-center">
      <div className={`text-5xl lg:text-6xl font-bold mb-3 ${colorClasses[color]}`}>
        {number}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    { number: "250+", label: "Projects Delivered", color: 'purple' as const },
    { number: "7+", label: "Years of Experience", color: 'blue' as const },
    { number: "25+", label: "Professional Team", color: 'green' as const },
    { number: "80%", label: "Active Client", color: 'orange' as const }
  ]

  return (
    <div className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Awards badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Badge variant="outline" className="bg-purple-950/50 border-purple-500 text-purple-300 px-6 py-2 text-sm">
            <span className="mr-2">🏆</span>
            Top US Agency 2025
          </Badge>
          <Badge variant="outline" className="bg-purple-950/50 border-purple-500 text-purple-300 px-6 py-2 text-sm">
            <span className="mr-2">📅</span>
            2023 Best Agency
          </Badge>
        </div>

        {/* Main content area */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fact And Numbers
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our dedication to delivering exceptional results
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        {/* Company logos section - placeholder for the circular logos */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
