import { defineField, defineType } from "sanity";
const string = (name: string, title: string) =>
  defineField({ name, title, type: "string" });
const image = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });
const objects = (name: string, title: string, fields: any[]) =>
  defineField({ name, title, type: "array", of: [{ type: "object", fields }] });
const icon = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: ["cloud", "sun", "leaf", "waves", "cart", "truck", "water", "bolt"],
  },
});
const text = (name: string, title: string) =>
  defineField({ name, title, type: "text", rows: 3 });
export const landingPage = defineType({
  name: "landingPage",
  title: "Landing page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    string("announcement", "Announcement"),
    string("ctaLabel", "Button label"),
    defineField({
      name: "heroImages",
      title: "Hero images (left, center, right)",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.length(3),
    }),
    defineField({
      name: "heroBenefits",
      title: "Hero benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    string("benefitsTitle", "Benefits heading"),
    objects("benefits", "Benefits", [
      string("title", "Title"),
      text("text", "Description"),
      icon,
    ]),
    defineField({
      name: "gallery",
      title: "Collection gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Outfit name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    string("storyTitle", "Story heading"),
    image("storyImage", "Story collage"),
    defineField({
      name: "story",
      title: "Story paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),

    objects("steps", "Comfort steps", [
      string("title", "Title"),
      text("text", "Description"),
      icon,
    ]),
    objects("reviews", "Reviews", [
      string("name", "Customer name"),
      text("text", "Review"),
    ]),
    objects("faqs", "Frequently asked questions", [
      string("question", "Question"),
      text("answer", "Answer"),
    ]),
    objects("impact", "Environmental impact", [
      string("value", "Value"),
      string("label", "Label"),
      icon,
    ]),
    string("finalTitle", "Closing heading"),
    string("finalText", "Closing description"),
    image("finalImage", "Closing collage"),
  ],
  preview: { select: { title: "title", media: "storyImage" } },
});
