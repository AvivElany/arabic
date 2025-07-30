import './StatsCard.css'

interface IStatsCardProps {
    title: string;
    value: number;
    icon?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning';
}

export default function StatsCard({ title, value, icon, color = 'primary' }: IStatsCardProps) {
    return (
        <div className={`StatsCard StatsCard--${color}`}>
            <div className="StatsCard__content">
                {icon && <div className="StatsCard__icon">{icon}</div>}
                <div className="StatsCard__text">
                    <h3 className="StatsCard__title">{title}</h3>
                    <p className="StatsCard__value">{value}</p>
                </div>
            </div>
        </div>
    )
}
