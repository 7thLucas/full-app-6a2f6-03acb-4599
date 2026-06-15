/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};

export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent",
        },
      ],
    },
    // ── Hero Section ──────────────────────────────────────────────────────
    {
      fieldName: "heroTagline",
      type: "string",
      required: true,
      label: "Hero Tagline",
      maxLength: 80,
    },
    {
      fieldName: "heroSubheadline",
      type: "string",
      required: false,
      label: "Hero Sub-headline",
      maxLength: 180,
    },
    {
      fieldName: "heroCTALabel",
      type: "string",
      required: true,
      label: "Hero CTA Button Label",
      maxLength: 40,
    },
    {
      fieldName: "heroImage",
      type: "file",
      required: false,
      label: "Hero Background Image",
    },
    // ── Products Section ──────────────────────────────────────────────────
    {
      fieldName: "productsSectionTitle",
      type: "string",
      required: true,
      label: "Products Section Title",
      maxLength: 60,
    },
    {
      fieldName: "productsSectionSubtitle",
      type: "string",
      required: false,
      label: "Products Section Subtitle",
      maxLength: 150,
    },
    {
      fieldName: "products",
      type: "array",
      label: "Coffee Products",
      item: {
        type: "object",
        fields: [
          { fieldName: "name", type: "string", required: true, label: "Product Name" },
          { fieldName: "description", type: "string", required: false, label: "Description" },
          { fieldName: "price", type: "string", required: false, label: "Price" },
          { fieldName: "imageUrl", type: "url", required: false, label: "Product Image URL" },
          { fieldName: "badge", type: "string", required: false, label: "Badge (e.g. Best Seller)" },
        ],
      },
    },
    // ── Contact Section ────────────────────────────────────────────────────
    {
      fieldName: "contactSectionTitle",
      type: "string",
      required: true,
      label: "Contact Section Title",
      maxLength: 60,
    },
    {
      fieldName: "contactSectionSubtitle",
      type: "string",
      required: false,
      label: "Contact Section Subtitle",
      maxLength: 180,
    },
    {
      fieldName: "whatsappNumber",
      type: "string",
      required: true,
      label: "WhatsApp Number (with country code, no +)",
      maxLength: 20,
    },
    {
      fieldName: "whatsappMessage",
      type: "string",
      required: false,
      label: "Default WhatsApp Message",
      maxLength: 200,
    },
    {
      fieldName: "contactCTALabel",
      type: "string",
      required: true,
      label: "Contact CTA Button Label",
      maxLength: 40,
    },
    {
      fieldName: "instagramHandle",
      type: "string",
      required: false,
      label: "Instagram Handle (without @)",
      maxLength: 60,
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Footer Text",
      maxLength: 120,
    },
    // ── Colors (page-level) ────────────────────────────────────────────────
    {
      fieldName: "pageBackground",
      type: "color",
      required: false,
      label: "Page Background Color",
    },
    {
      fieldName: "textColor",
      type: "color",
      required: false,
      label: "Body Text Color",
    },
  ],
};
