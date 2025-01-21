// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const services = [
//   {
//     title: 'ייעוץ טכנולוגי',
//     description: 'קבלו ייעוץ ממומחים בתחום הטכנולוגיה לעסק שלכם.',
//   },
//   {
//     title: 'פיתוח אפליקציות',
//     description: 'פיתוח אפליקציות מותאמות אישית לכל הפלטפורמות.',
//   },
//   {
//     title: 'שירותי ענן',
//     description: 'פתרונות ענן מתקדמים לאחסון ולניהול נתונים.',
//   },
//   {
//     title: 'הדרכות טכנולוגיות',
//     description: 'הדרכות מקצועיות לשיפור הכישורים הטכנולוגיים שלכם.',
//   },
// ];

// const ServicesPage = () => {
//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">שירותים שלנו</h1>
//       <Row>
//         {services.map((service, index) => (
//           <Col key={index} md={6} lg={3} className="mb-4">
//             <Card>
//               <Card.Body>
//                 <Card.Title>{service.title}</Card.Title>
//                 <Card.Text>{service.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ServicesPage;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">{t('services.title')}</h1>
      <Row>
        {[
          { key: 'consulting' },
          { key: 'appDevelopment' },
          { key: 'cloudServices' },
          { key: 'training' },
        ].map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <h1>{t(`services.${service.key}.title`)}</h1>
            <p>{t(`services.${service.key}.description`)}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;