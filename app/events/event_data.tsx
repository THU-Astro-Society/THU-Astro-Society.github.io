import { Event } from './types';

export const events: Event[] = [
  {
    id: "1",
    title: "科博x天协路边天文",
    date: "2024-10-27",
    time: "19:30-22:00",
    location: "清华大学紫荆操场",
    description: "本次活动将观测木星、土星等行星。请携带保暖衣物，活动将视天气情况确定是否举行。",
    tags: ["路边天文"],
    registrationLink: "https://example.com/register",
    capacity: 0,
    registeredCount: 0
  },
  {
    id: "2",
    title: "双子座流星雨",
    date: "2024-12-14",
    time: "19:30-22:00",
    location: "清华大学紫荆操场",
    description: "本次活动将观测双子座流星雨。请携带保暖衣物，活动将视天气情况确定是否举行。",
    tags: ["外出观测"],
    registrationLink: "https://example.com/register",
    capacity: 50,
    registeredCount: 0
  },
  // 在这里添加更多活动...
];
