import { useCountUp } from '../hooks/index.js'
import { Package, Layers, Globe, Truck } from './Icons.jsx'

const STATS = [
  { icon: Package, target: 1500, suffix: '+', label: 'Export-ready toy SKUs' },
  { icon: Layers, target: 16, suffix: '+', label: 'Product categories' },
  { icon: Globe, target: 25, suffix: '+', label: 'Countries served' },
  { icon: Truck, target: 18, suffix: '+', label: 'Avg. exports per month' },
]

function StatCard({ stat }) {
  const [ref, value] = useCountUp(stat.target, { duration: 1800 })
  const Icon = stat.icon
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-card__icon">
        <Icon size={22} />
      </div>
      <div className="stat-card__value">
        {value.toLocaleString('en-US')}
        {stat.suffix}
      </div>
      <div className="stat-card__label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div id="stats" className="stats">
      <div className="stats__grid">
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  )
}