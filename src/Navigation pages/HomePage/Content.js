import Card from "./ContentPages.js/Card";
import './content.css';

const Content = () => {
    const content = [
        {
            id : 1,
            title: 'Our Mission',
            body: 'At ABC Solutions, our mission is to transform businesses through technology. We are committed to delivering high-quality, reliable, and scalable solutions that drive digital transformation, streamline operations, and enhance productivity. We aim to be a trusted partner for our clients, providing them with the tools and expertise they need to thrive in a rapidly evolving business environment.'
        },
        {
            id : 2,
            title: 'Why Choose Us?',
            body: "Expertise: Our team of highly skilled professionals has extensive experience in their respective domains, ensuring top-notch solutions and services. Customized Approach We understand that every business is unique. That's why we tailor our solutions to match your specific requirements, goals, and budget Commitment to Quality We are committed to delivering excellence in everything we do. Our focus on quality ensures that our solutions are reliable, robust, and future-proof. Customer Satisfaction We value our clients and prioritize their satisfaction. We strive to build long-lasting partnerships based on trust, transparency, and exceptional service."
        }
    ];
  return (
    <div className="Content">
        {
            content.length ? content.map((item) => (
                <Card key={item.id} title={item.title} body={item.body} />
            )): <p style={{color:'red'}}>Nothing to Show</p>
        }
    </div>
  )
}

export default Content