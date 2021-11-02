import cssClasses from './Footer.module.css';
import BriefDescription from './BriefDescription';
import FooterLinks from './FooterLinks';

export default function Footer() {
    return (
        <div className={cssClasses.footer}>
            <BriefDescription />
            <FooterLinks />
        </div>
    )
}
