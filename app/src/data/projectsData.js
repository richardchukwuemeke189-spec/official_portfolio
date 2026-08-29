import lumeWeatherPhoto from '../images/lumeWeather.png';
import cafeFlowPhoto from '../images/cafeflow_img.png';
import grandStayPhoto from '../images/grandstay_img.png';
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
    name: "CafeFlow",
    type: "Web Application",
    description: "A responsive cafe website and management dashboard that allows customers to explore the cafe, view the menu, make reservations, and send inquiries, while providing an admin interface for managing reservations and messages.",
    techStack: ["React", "Supabase", "JavaScript", "Bootstrap"],
    image: cafeFlowPhoto,
    liveLink: "https://cafeflow-app.netlify.app"
  },
  {
    id: 3,
    name: "Grand Stay Hotel",
    type: "Web Application",
    description: "A responsive hotel website designed to provide guests with a smooth browsing experience, allowing them to explore hotel rooms, view details, and navigate the hotel's services across different devices.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: grandStayPhoto,
    liveLink: "https://grandstay-hotelapp.netlify.app"
  },
];

export const projVideoData = [
    {
        id: 1,
        video: schoolManagementVideo
    }
];