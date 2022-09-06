import { Component, useState, useEffect } from "react";


class MainFunctions extends Component {
    static getRandomNumber(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
}

export default MainFunctions