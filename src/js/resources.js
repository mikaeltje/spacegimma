import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/spaceship.png'
import scrollingBackgroundImage from '../images/bg.png'
import laserImage from '../images/laser.png';
import rockImage from "../images/rock.png";
import beginImage from "../images/Begin.png";

import titleImage from '../images/loadingscreen.jpg';


const Resources = {
    Player: new ImageSource(playerImage),
    Background: new ImageSource(scrollingBackgroundImage),

    Rock: new ImageSource(rockImage),
    Laser: new ImageSource(laserImage),
    Begin: new ImageSource(beginImage),

    Title: new ImageSource(titleImage),

}


const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)


export { Resources, ResourceLoader }