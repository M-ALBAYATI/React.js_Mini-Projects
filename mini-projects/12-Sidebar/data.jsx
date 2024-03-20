import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/m%C3%BCbarek-albayati/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/M-ALBAYATI',
    icon: <FaGithub />,
  },
  {
    id: 5,
    url: 'https://www.behance.net/',
    icon: <FaBehance />,
  },
]
