'use client'

import ArticleLayout from "@/app/article_layout";
import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  date: string;
}

// 示例数据
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "示例图片",
    description: "IC1848",
    thumbnailUrl: "https://lfs.zhenhuang.site/images/IC1848-2024-04-16-11-18-46-small.png",
    imageUrl: "https://lfs.zhenhuang.site/images/IC1848-2024-04-16-11-18-46.png",
    date: "2022-12-15"
  },
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <ArticleLayout currentPath="/gallery">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">星空画廊</h1>
        
        {/* 图片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-gray-500 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 大图预览模态框 */}
        {selectedImage && (
          <>
            {/* 背景遮罩 */}
            <div 
              className="fixed top-0 left-0 w-full bg-black bg-opacity-75 z-[98]"
              style={{ 
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
              onClick={() => setSelectedImage(null)}
            />
            
            {/* 图片容器 */}
            <div 
              className="fixed inset-0 z-[98] flex items-center sm:items-start justify-center pt-0 sm:pt-28"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-[90vw] max-h-[90vh] m-auto">
                <button
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative" onClick={e => e.stopPropagation()}>
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-2xl"
                    style={{
                      maxHeight: 'calc(87vh - 5rem)',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                    priority
                  />
                  {/* 移除或注释掉这部分备注信息
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
                    <p className="text-sm">{selectedImage.description}</p>
                    <p className="text-xs mt-1">{selectedImage.date}</p>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 如果没有图片时显示的内容 */}
        {galleryItems.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            暂无图片
          </div>
        )}
      </div>
    </ArticleLayout>
  );
}
