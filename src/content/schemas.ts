import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "heading": z.string(),
        "subtitle": z.string(),
        "cta": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "icon": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    })
  }
};
export type Schemas = typeof schemas;