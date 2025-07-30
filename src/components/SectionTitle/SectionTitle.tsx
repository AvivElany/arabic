import './SectionTitle.css'

interface ISectionTitleProps {
    title: string;
    subtitle?: string;
    size?: 'small' | 'medium' | 'large';
}

export default function SectionTitle({ title, subtitle, size = 'medium' }: ISectionTitleProps) {
    return (
        <div className={`SectionTitle SectionTitle--${size}`}>
            <h2 className="SectionTitle__title">{title}</h2>
            {subtitle && <p className="SectionTitle__subtitle">{subtitle}</p>}
        </div>
    )
}
