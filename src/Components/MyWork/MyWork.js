import React from 'react'
import Projects from './Projects/Projects'

export default function () {
    return (
        <div className='MyWork'>
            <h2 className='My-Recent-Work'>My Recent Work</h2>
            <p className='Desription'>Here are a few past projects I've worked on</p>
            <p className='hint'>For More About any Project Hit the Source Code Button  </p>

            <Projects />
        </div>
    )
}
