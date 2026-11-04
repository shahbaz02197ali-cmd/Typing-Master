import type { MetadataRoute } from "next";
import { lessons } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = ["/", "/test", "/learn", "/practice", "/about"];

  return [
    ...publicRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
      changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...lessons.map((lesson) => ({
      url: new URL(`/learn/${lesson.id}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
