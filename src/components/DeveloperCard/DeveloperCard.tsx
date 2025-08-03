import './DeveloperCard.css'

/*interface IDeveloperCardProps {

}*/

export default function DeveloperCard(/*props: IDeveloperCardProps*/) {
    return (
        <div className='developer-card'>
            {/* Header Section */}
            <div className='card-header'>
                <div className='profile-image-container'>
                    <img 
                        src="/picture/dev.jpg" 
                        alt="Developer Profile" 
                        className='profile-image'
                    />
                    <div className='status-indicator'></div>
                </div>
                <div className='profile-info'>
                    <h2 className='developer-name'>Aviv Elany</h2>
                    <h3 className='developer-title'>Full Stack Developer</h3>
                    <p className='developer-tagline'>
                        יוצר חוויות דיגיטליות חדשניות<br />
                        מתשאל קרבי עם חיבה לשפה הערבית<br />
                        בעיקר .. מזהה את הצורך בשטח.
                    </p>
                    <div className='availability-status'>
                        <span className='status-dot'></span>
                        זמין לפרויקטים חדשים
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className='quick-stats'>
                <div className='stat-item'>
                    <span className='stat-number'>2+</span>
                    <span className='stat-label'>שנות ניסיון</span>
                </div>
                <div className='stat-item'>
                    <span className='stat-number'>20+</span>
                    <span className='stat-label'>פרויקטים</span>
                </div>
                <div className='stat-item'>
                    <span className='stat-number'>☕∞</span>
                    <span className='stat-label'>קפה</span>
                </div>
            </div>

            {/* Skills Tags */}
            <div className='skills-tags'>
                <span className='skill-tag'>JavaScript</span>
                <span className='skill-tag'>TypeScript</span>
                <span className='skill-tag'>React.JS</span>
                <span className='skill-tag'>CSS3</span>
                <span className='skill-tag'>Express</span>
                <span className='skill-tag'>Node.JS</span>
                <span className='skill-tag'>UI/UX</span>
                <span className='skill-tag'>MongoDB</span>
            </div>

            {/* Current Project */}
            <div className='current-project'>
                <h4>🚀 הפרויקט הנוכחי</h4>
                <p>אפליקציית למידת ערבית אינטראקטיבית עם React + TypeScript</p>
            </div>

            {/* Contact Links */}
            <div className='contact-links'>
                <a href="https://linkedin.com/in/avivelany" className='contact-btn linkedin' target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                </a>
                <a href="https://github.com/AvivElany" className='contact-btn github' target="_blank" rel="noopener noreferrer">
                    🔗 GitHub
                </a>
                <a href="https://portfolio-avivelanys.vercel.app/" className='contact-btn portfolio' target="_blank" rel="noopener noreferrer">
                    🌟 Portfolio
                </a>
            </div>
        </div>
    )
}
