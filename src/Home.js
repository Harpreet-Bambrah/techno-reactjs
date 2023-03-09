import introman from './images/introman.png';
import './Home.css'
import Intro from './components/Intro';
import { Outlet } from 'react-router-dom';

const Home = () =>{

    return(
        <>
        <section id="section-1" className='py-5'>
            <Intro 
            label='WELCOME TO TECHNO' 
            h1='IT' 
            h2='Solution Company' 
            h3='& Digital Agency' 
            p='We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.'
            imgsrc={introman} />
        </section>
        <Outlet/>
        </>
    )
}

export default Home;