import { Animated } from "react-animated-css";
import resitown from '../Images/resitowndemogif.gif'
import viness from '../Images/vinessdemogif.gif'
import playbase from '../Images/playbasedemogif.gif'
import crecipe from '../Images/crecipedemogif.gif'
import journalwave from '../Images/journalwavedemogif.gif'
import resitownlogo from '../Images/resitownlogo.png'
import vinesslogo from '../Images/vinesslogo.png'
import playbaselogo from '../Images/playbaselogo.png'
import crecipelogo from '../Images/crecipelogo.png'
import journalwavelogo from '../Images/journalwavelogo.png'


const descriptions = {
    resitown: {
        desc: 'ResiTown is a web application that connects volunteers to volunteer opportunities. I adapted it from an open-source Rails application to meet the needs of my employer, and handled deployment to production.',
        live: 'https://resitown.com',
        video: null,
        tech: '  Rails 6 ⋅ PostgresQL ⋅ Devise ⋅ TailwindCSS ⋅ JavaScript'
    },
    viness: {
        desc: 'Viness is a wine pairing application I made as my capstone project at Flatiron. You can get wine recommendations and pairings, recipe pairings, save your favorite wines, and interact through comments.',
        live: 'http://viness.online',
        video: 'https://www.youtube.com/watch?v=E5aX-LlvIx8&feature=youtu.be&ab_channel=AlleneNorton',
        tech: '  Rails API ⋅ PostgresQL ⋅ Google OAuth ⋅ React ⋅ Semantic UI ⋅ Custom CSS'
    },
    playbase: {
        desc: 'Playbase is a project I made for Flatiron with a partner. It allows users to log in with Spotify, search for and save albums, and listen in-app while viewing the album covers in a visually-pleasing environment.',
        live: null,
        video: 'https://www.youtube.com/watch?v=WgKxXew3N4o&feature=youtu.be&ab_channel=AlleneNorton',
        tech: '  Rails API ⋅ PostgresQL ⋅ Spotify OAuth ⋅ React ⋅ Semantic UI ⋅ Custom CSS'
    },
    crecipe: {
        desc: 'Crecipe is an early project I made for Flatiron with a partner. Users can sign in and create their own recipes, see recipes made by all users, add recipes to favorites, and even take a quiz on their food knowledge.',
        live: null,
        video: null,
        tech: '  Rails 6 ⋅ SQLite3 ⋅ MilligramCSS ⋅ jQuery'
    },
    journalwave: {
        desc: 'Journalwave is my first project for Flatiron. It is a Ruby CLI application that allows users to write, edit, and save journal entries, as well as recieve an emotional analysis of their entry powered by the Twinword Emotional Analysis API.',
        live: null,
        video: 'https://www.youtube.com/watch?v=rdkNK7EKqms&ab_channel=AlleneNorton',
        tech: '  Ruby ⋅ SQLite3 ⋅ LOLCAT ⋅ Twinword API'
    },
}


const ShowProject = (props) => {
    function defineGif() {
        if (props.project === 'resitown') {
            return <li><a href={resitown} target="_blank" rel="noreferrer"><button>GIF Demo</button></a></li>
        } else if (props.project === 'viness') {
            return <li><a href={viness} target="_blank" rel="noreferrer"><button>GIF Demo</button></a></li>
        } else if (props.project === 'playbase') {
            return <li><a href={playbase} target="_blank" rel="noreferrer"><button>GIF Demo</button></a></li>
        } else if (props.project === 'crecipe') {
            return <li><a href={crecipe} target="_blank" rel="noreferrer"><button>GIF Demo</button></a></li>
        } else if (props.project === 'journalwave') {
            return <li><a href={journalwave} target="_blank" rel="noreferrer"><button>GIF Demo</button></a></li>
        } else {
            return null
        }
    }
    function defineLogo() {
        if (props.project === 'resitown') {
            return resitownlogo
        } else if (props.project === 'viness') {
            return vinesslogo
        } else if (props.project === 'playbase') {
            return playbaselogo
        } else if (props.project === 'crecipe') {
            return crecipelogo
        } else if (props.project === 'journalwave') {
            return journalwavelogo
        } else {
            return ''
        }
    }
    function renderLink() {
        console.log(descriptions[props.project].live)
        if (descriptions[props.project].live) {
            console.log(descriptions[props.project].live)
            return <li><a href={descriptions[props.project].live} target="_blank" rel="noreferrer"><button>Live Demo</button></a></li>
        }
    }
    function renderVideo() {
        if (descriptions[props.project].video) {
            return <li><a href={descriptions[props.project].video} target="_blank" rel="noreferrer"><button>Video Demo</button></a></li>
        }
    }

    return (
        <div className="show-project">
            {/* <Animated
                animationIn="pulse"
                animationInDuration={2000}
                animationInDelay={8000}
                animationOut="fadeOut"
                isVisible={true}>
                <p>{props.project.toUpperCase()}</p>
            </Animated> */}
            <div className="project-desc">
                <img className="project-logo" src={defineLogo()} alt={props.project + 'logo'} />
                <p>
                    {descriptions[props.project].desc}
                </p>
                <div className="tech">
                    {/* <strong>Tech</strong> */}
                    <div className="tech-desc">
                        {descriptions[props.project].tech}
                    </div>
                </div>
                <div className="links">
                    <ul>
                        {renderLink()}
                        {renderVideo()}
                        {defineGif()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowProject


