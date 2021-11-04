import cssClasses from './Footer.module.css';
import BriefDescription from './BriefDescription';
import FooterLinks from './FooterLinks';

export default function Footer() {
    return (
        <footer className={cssClasses.footer}>
            <div className={cssClasses.container}>
                <BriefDescription />
                <FooterLinks />
            </div>
        </footer>
    )
}
