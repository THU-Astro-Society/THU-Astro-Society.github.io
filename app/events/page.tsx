'use client'

import ArticleLayout from "@/app/article_layout";
import { useState } from "react";
import { events } from './event_data';
import { Event } from './types';

export default function Page() {
  const [filter, setFilter] = useState<string>("all");
  
  // 按日期排序（从近到远）
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <ArticleLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">近期活动</h1>
        
        {/* 标签筛选器 */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            全部活动
          </button>
          {Array.from(new Set(events.flatMap(event => event.tags))).map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full ${
                filter === tag
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 活动列表 */}
        <div className="space-y-6">
          {sortedEvents
            .filter(event => filter === "all" || event.tags.includes(filter))
            .map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                {/* 活动标签 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 活动标题 */}
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>

                {/* 活动信息 */}
                <div className="space-y-2 text-gray-600 mb-4">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date} {event.time}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                </div>

                {/* 活动描述 */}
                <p className="text-gray-600 mb-4">{event.description}</p>

                {/* 报名信息和按钮 */}
                <div className="flex items-center justify-between">
                  {/* 只在 capacity 存在且大于 0 时显示进度条 */}
                  {typeof event.capacity === 'number' && event.capacity > 0 && (
                    <div className="text-sm text-gray-500">
                      报名人数: {event.registeredCount}/{event.capacity}
                      <div className="w-36 h-2 bg-gray-200 rounded-full mt-1">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${(event.registeredCount! / event.capacity) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* 根据 capacity 显示不同的按钮 */}
                  {event.capacity === 0 ? (
                    <span className="bg-gray-400 text-white px-6 py-2 rounded-full cursor-default">
                      无需报名！
                    </span>
                  ) : event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      立即报名
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* 无活动提示 */}
        {sortedEvents.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            暂无活动
          </div>
        )}
      </div>
    </ArticleLayout>
  );
}
