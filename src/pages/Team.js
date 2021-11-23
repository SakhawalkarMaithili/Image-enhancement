import React from 'react';
import './Team.css';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import vaishnaviphoto from '../Assets/vaishnaviphoto.jpg';
import maithiliphoto from '../Assets/maithiliphoto.jpg';
import rutujaphoto from '../Assets/rutujaphoto.jpg';

function Team() {
    return (
        <div className="teambody">
            <h1 style={{textAlign: 'center'}}>Meet the Team</h1>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={rutujaphoto} alt="Rutuja" style={{width: '35%'}} className='photoalignment' />
                        <div class="container" style={{textAlign: 'center'}}>
                            <h2>Rutuja More</h2>
                            <div className="icons">
                                <Link to={{pathname: "https://www.linkedin.com/in/rutuja-more-9574611a8" }} target="_blank"><AiIcons.AiFillLinkedin className="icon" style={{fontSize: '150%'}}/></Link>
                                <Link to={{pathname: "https://github.com/Rutuja2001" }} target="_blank"><AiIcons.AiFillGithub className="icon" style={{fontSize: '150%'}}/> </Link>
                                <Link to={{pathname: "https://www.instagram.com/rutuja2497" }} target="_blank"><AiIcons.AiFillInstagram className="icon" style={{fontSize: '150%'}}/> </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src={vaishnaviphoto} alt="Vaishnavi" style={{width: '35%'}} className='photoalignment' />
                    <div class="container" style={{textAlign: 'center'}}>
                        <h2>Vaishnavi Pawar</h2>
                        <div className="icons">
                            <Link to={{pathname: "https://www.linkedin.com/in/vaishnavi-pawar-90b51618b" }} target="_blank"><AiIcons.AiFillLinkedin className="icon" style={{fontSize: '150%'}}/></Link>
                            <Link to={{pathname: "https://github.com/phxxebe" }} target="_blank"><AiIcons.AiFillGithub className="icon" style={{fontSize: '150%'}}/> </Link>
                            <Link to={{pathname: "https://www.instagram.com/phxxebe" }} target="_blank"><AiIcons.AiFillInstagram className="icon" style={{fontSize: '150%'}}/> </Link>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src={maithiliphoto} alt="Maithili" style={{width: '35%'}} className='photoalignment' />
                    <div class="container" style={{textAlign: 'center'}}>
                        <h2>Maithili Sakhawalker</h2>
                        <div className="icons">
                            <Link to={{pathname: "https://www.linkedin.com/in/maithili-sakhawalkar-4b75831a1" }} target="_blank"><AiIcons.AiFillLinkedin className="icon" style={{fontSize: '150%'}}/></Link>
                            <Link to={{pathname: "https://github.com/SakhawalkarMaithili" }} target="_blank"><AiIcons.AiFillGithub className="icon" style={{fontSize: '150%'}}/> </Link>
                            <Link to={{pathname: "https://www.instagram.com/maithili_s2210" }} target="_blank"><AiIcons.AiFillInstagram className="icon" style={{fontSize: '150%'}}/> </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <h1 style={{textAlign: 'center'}}>Mentors</h1>
            <div class="row">
                <div class="column">
                    <div class="card">
                    <img src={""} alt="Vishwajeetsingh Desurkar" style={{width: '35%'}} className='photoalignment' />
                    <div class="container" style={{textAlign: 'center'}}>
                        <h2 style={{paddingBottom: '10px'}}>Vishwajeetsingh Desurkar</h2>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src={""} alt="Siddharaj Pujari" style={{width: '35%'}} className='photoalignment' />
                    <div class="container" style={{textAlign: 'center'}}>
                        <h2 style={{paddingBottom: '10px'}}>Siddharaj Pujari</h2>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team;
