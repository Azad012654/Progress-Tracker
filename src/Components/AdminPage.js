import React from 'react'
import { useState } from 'react';
import './AdminPage.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Header from './Header';

const AdminPage = () => {

    const [condition, setCondition] = useState(true)
    const [selectedCard, setSelectedCard] = useState(null);
    

    const toggleCard = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    };

    const arr = [
        {
            'name' : "Azad",
            'project_name' : "Resume Builder",
            'project_description':'Create Free Plain Resume',
            'progress' : 80,
            'date' : "13-10-2023"
        },
        {
            'name' : "Charan",
            'project_name' : "Task Manager",
            'project_description':'Managing task',
            'progress' : 75,
            'date' : "16-10-2023"
        },
        {
            'name' : "Nesruddin",
            'project_name' : "Shopping Cart",
            'project_description':'Online Shopping',
            'progress' : 100,
            'date' : "20-10-2023"
        }
    ]

    return (
        <div className='main-container-admin'>
            <Header />
            <div className='card-holder'>
                {/* dropdown */}
                <div className='dropdown'>
                    <select className="dropdown-btn" id="cars">
                        <option value="developers">Developers</option>
                        <option value="board">Board</option>
                        <option value="interns">Interns</option>
                        <option value="Analysts">Analysts</option>
                    </select> <p>Project Tracking</p>
                </div>
                {arr.map((row, index) => (
                    <div className='cards'>
                    <div className='status-bar'>
                        <div className='username'>{row.name}</div>
                        <div className='completion-status'>
                            {condition ? <div className='status-container'><div className='status-msg'>Completed</div> <div className='percentage'>{row.progress}%</div></div> : <div>Not Completed</div>}
                        </div>
                    </div>
                    <div className='progressbar'>
                        <button className='view-progress-btn' onClick={() => toggleCard(index)}>View Progress</button>
                        {
                            selectedCard === index && 
                            <div className='progress-info'>
                                <div className='fields'>
                                    <div>
                                        <p>Project Name </p>
                                    </div>
                                    <div>
                                        <p>Project Description </p>
                                    </div>
                                    <div>
                                        <p>Progress </p>
                                    </div>
                                    <div>
                                        <p>Date Started </p>
                                    </div>
                                </div>
                                <div className='values'>
                                    <div>
                                        <p>:{row.project_name}</p>
                                    </div>
                                    <div>
                                        <p>: {row.project_description}</p>
                                    </div>
                                    <div>
                                        <p>: {row.progress}%</p>
                                    </div>
                                    <div>
                                        <p>: {row.date}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
        ))}
                
            </div>
        </div>
    )
}

export default AdminPage