import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return (
        <div className='Skils'>
            <FontAwesomeIcon className='code-icon' icon={faCode} />
            <h4 className='Header'>Frontend Developer</h4>
            <p className='languages'>Languages I speak:</p>
            <p className='skils' >HTML, CSS,JavaScript </p>
            <p className='Dev-Tools'>Dev Tools:</p>
            <p className='skils' >React Js</p>
            <p className='skils' >typescript</p>
            <p className='skils' >Sass</p>
            <p className='skils' >Bootstrap</p>
            <p className='skils' >Jest</p>
            <p className='skils' >Redux</p>
            <p className='skils' >Git&GitHub</p>

        </div>
    )
}
