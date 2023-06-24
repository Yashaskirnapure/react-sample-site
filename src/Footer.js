import SignUp from './FooterPages/SignUp';
import './footer.css'

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <SignUp />
    </footer>
  )
}

export default Footer