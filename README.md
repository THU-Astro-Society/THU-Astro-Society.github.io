# Tsinghua Astronomy Society

# 清华大学学生天文协会

# 本地安装

先运行`pnpm install`，然后运行`pnpm dev`，效果可以在[http://localhost:3000](http://localhost:3000)查看。

要引入什么新package使用`pnpm add XXX`。

# 简单说明

环境变量设置在.env文件。

app里面是所有网页，文件夹路径就是网页路径。如app/表示的是/，app/posts表示的是/posts。每个文件夹显示的网页是`page.tsx`。里面有一个export default function返回这个网页。

posts里面是所有活动记录，用markdown写，markdown的前面必须有如下的信息，用来显示：

```
---
title: 标题
date: 日期
---
```

lib里面是一些工具函数。

style里面是一些css文件。




## Learn More

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
