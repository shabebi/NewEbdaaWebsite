import './services.css'

import contentImage from '../assets/service-content.png'
import campaignsImage from '../assets/service-campaigns.png'
import identityImage from '../assets/service-identity.png'
import digitalImage from '../assets/service-digital.png'
import socialImage from '../assets/service-social.png'
import videoImage from '../assets/service-video.png'

const services = [
  {
    className: 'service-card--content',
    title: 'صناعة المحتوى التسويقي',
    description:
      'مع إبداع ميديا نصنع لك محتوى تسويقي يلتقط انتباه العملاء ويثير اهتمامهم. نحن من نصنعها.',
    image: contentImage,
  },
  {
    className: 'service-card--campaigns',
    title: 'إدارة الحملات الإعلانية',
    description:
      'نخطط وننفذ حملات إعلانية فعالة عبر الوسائط المختلفة، مع التركيز على إيصال الرسالة التسويقية بدقة وتحقيق أقصى تأثير ممكن ضمن الأهداف المحددة.',
    image: campaignsImage,
  },
  {
    className: 'service-card--identity',
    title: 'تصميم الهوية البصرية',
    description:
      'نقدم حلولاً متكاملة لتصميم الهوية البصرية، تشمل الشعار، الألوان، والنمط البصري العام، بما يعكس رؤية العلامة التجارية ويعزز حضورها في أذهان الجمهور.',
    image: identityImage,
  },
  {
    className: 'service-card--digital',
    title: 'تصميم الإعلانات الرقمية والمطبوعة',
    description:
      'نُصمم مواد إعلانية عالية الجودة، سواء للاستخدام الرقمي أو المطبوع، تجمع بين الإبداع البصري والوضوح في رسالة الإعلان لضمان تحقيق أفضل تفاعل مع الجمهور المستهدف.',
    image: digitalImage,
  },
  {
    className: 'service-card--social',
    title: 'إدارة حسابات السوشيال ميديا',
    description:
      'ندير حسابات التواصل الاجتماعي ونقدم محتوى إبداعياً يساهم في بناء حضور قوي للعلامة التجارية.',
    image: socialImage,
  },
  {
    className: 'service-card--video',
    title: 'عمل إعلانات الفيديو',
    description:
      'ننتج محتوى فيديو إبداعياً يعكس هوية العلامة التجارية ويقدم رسائل إعلانية مؤثرة.',
    image: videoImage,
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">

        <h2 className="services__title">
          خـدمـاتــنـــا
        </h2>

        <p className="services__subtitle">
          نقدم العديد من خدمات التسويق والاعلان والخدمات التسويقية المختلفة
        </p>

        <div className="services__cards">
          {services.map((service) => (
            <article
              key={service.className}
              className={`service-card ${service.className}`}
            >
              <div className="service-card__text">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <img
                className="service-card__image"
                src={service.image}
                alt={service.title}
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services