import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../Utils & Objects/sketch.js'
import '../CSS/Maze.css'
const Maze = (props) => {
    return (
        <div className="row justify-content-center align-items-center">
            <div className=".col-xl-1" id="canvas">
                <P5Wrapper alg={props.alg} codedMaze={props.codedMaze} sketch={sketch} size={props.dim} cols={props.cols} mazeStart={props.mazeStart} />
            </div>
        </div>
    )
}

export default Maze