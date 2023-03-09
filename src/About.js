import Intro from "./components/Intro";
import aboutimg from './images/aboutimg.jpg';

const About = () =>{

    return(
        <>
            <section className="py-5">
                <Intro 
                label="30 YEARS OF EXPERIENCE"
                h1='Preparing For Your Success Provide Best ' 
                h2 ='IT Solutions.'
                p='Voice and Data Systems are crucial to the success or failure of most businesses. any companies provide laptops, cell phones.'    
                
                imgsrc={aboutimg}
                />
            </section>
        </>
    )
}

export default About;