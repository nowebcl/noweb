import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/"], // Prevenir indexación de rutas técnicas o administrativas
        },
        sitemap: "https://www.noweb.cl/sitemap.xml",
    };
}
