import { MdExplore, MdOutlineMenuBook } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa'

export const navigations = [
  {
    id: 'explorer',
    title: 'Explorer',
    icon: <MdExplore size={20} className="mb-0.5 mr-1.5" />,
    path: `${process.env.NEXT_PUBLIC_EXPLORER_URL}`,
    external: true,
  },
  {
    id: 'doc',
    title: 'Doc',
    icon: <MdOutlineMenuBook size={20} className="mb-0.5 mr-1.5" />,
    path: `${process.env.NEXT_PUBLIC_FAQ_URL}`,
    external: true,
  },
  {
    id: 'support',
    title: 'Support',
    icon: <FaDiscord size={20} className="mb-0.5 mr-1.5" />,
    path: `${process.env.NEXT_PUBLIC_DISCORD_URL}`,
    external: true,
  },
]