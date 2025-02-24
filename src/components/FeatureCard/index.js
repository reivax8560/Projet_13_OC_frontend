import './featureCard.css'

export default function FeatureCard({ icon, title, text }) {

    return (
        <div className="featureCard">
            <img src={icon} alt="icon" className='featureIcon' />
            <h3 className='featureTitle'>{title}</h3>
            <p className='featureText'>{text}</p>
        </div>
    )
}
