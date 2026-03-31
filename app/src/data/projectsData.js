import lumeWeatherPhoto from '../images/lumeWeather.png';
import camp_connectPhoto from '../images/campConnect.png';
import schoolPhoto from '../images/school.png';
import schoolManagementVideo from '../videos/schoolManagement.mp4';

export const projects_data = [
  {
    id: 1,
    name: "Lume Weather",
    type: "Web Application",
    description: "Real-time weather app with backend integration.",
    techStack: ["React", "Node.js", "Express", "OpenWeather API"],
    image: lumeWeatherPhoto,
    liveLink: "https://lume-weather.onrender.com"
  },
  {
    id: 2,
    name: "CampConnect",
    type: "Web Application",
    description: "A campus information sharing platform that allows students to post, discover, and stay updated on announcements, events, and activities within their school.",
    techStack: ["React"],
    image: camp_connectPhoto,
    liveLink: "https://camp-connect-kc95.onrender.com"
  },
  {
    id: 3,
    name: "Middlesex University Portal (Student Project)",
    type: "Web Application",
    description: "A frontend university portal UI concept developed as part of a school project, showcasing announcements and access to campus resources.",
    disclaimer: "This is a personal student project and is not affiliated with or endorsed by Middlesex University.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: schoolPhoto,
    liveLink: "https://school-wzqm.onrender.com"
  }
];

export const projVideoData = [
    {
        id: 1,
        video: schoolManagementVideo
    }
];