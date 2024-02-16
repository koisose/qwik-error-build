type ContentString = string;
type ImageMIMEType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
type GeneralProperties = {
  property: "og:title" | "og:type" | "og:description" | "og:image" | "og:image:type" | "og:image:width" | "og:image:height";
  content: ContentString ;
};

type TwitterSpecificProperties = {
  name: "twitter:card" | "twitter:site" | "twitter:creator" | "twitter:title" | "twitter:description";
  content: ContentString;
} | {
  property: "twitter:image";
  content: ContentString;
};

type SearchEngineBots = {
  name: "googlebot" | "bingbot" | "slurp" | "duckduckbot" | "baiduspider" | "yandexbot" | "naver" | "facebookexternalhit" | "twitterbot";
  content: "index, follow";
};
type ButtonNumber = "1" | "2" | "3" | "4";
type FrameField =
  'fc:frame:image'
  | 'fc:frame:post_url'
  | 'fc:frame:input:text'
  | `fc:frame:button:${ButtonNumber}`;
type FarcasterProperties = {
    name: FrameField;
    content: ContentString;
  }| {
    name:  'fc:frame';
    content: "vNext";
  }
  | {
    name:  'fc:frame:image:aspect_ratio';
    content: "1.91:1" | "1:1";
  }| {
    name:  `fc:frame:button:${ButtonNumber}:action`;
    content: "post"|"post_redirect"|"mint" |"link"|ContentString;
  }| {
    name:  `fc:frame:button:${ButtonNumber}:target`;
    content: ContentString;
  };
type AllTypes = GeneralProperties | TwitterSpecificProperties | SearchEngineBots | FarcasterProperties;

type JsonDataType = {
  meta: ReadonlyArray<AllTypes>;
};
  type TwitterSiteContentType = '@koisose_' | '';

type inputMetadata = {title:string,description:string,ogImage:string,twitterSite:TwitterSiteContentType,ogImageType:ImageMIMEType,framePostUrl?:string}
export function metadata({title,description,ogImage,twitterSite,ogImageType,framePostUrl=""}:inputMetadata): JsonDataType {
    
   return {
        meta: [
            {
                name:  'fc:frame',
                content: "vNext"
              },
              {
                name:  'fc:frame:image',
                content: ogImage
              },
              {
                name:  'fc:frame:image:aspect_ratio',
                content: "1.91:1"
              },{
                name:  'fc:frame:post_url',
                content: framePostUrl
              },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:image",
            content: ogImage,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:site",
            content: twitterSite,
          },
          {
            name: "twitter:creator",
            content: twitterSite,
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: description,
          },
          {
            property: "twitter:image",
            content: ogImage,
          },
          {
            property: "og:image:type",
            content: ogImageType,
          },
          {
            property: "og:image:width",
            content: "512",
          },
          {
            property: "og:image:height",
            content: "512",
          },
    
          {
            name: "googlebot",
            content: "index, follow",
          },
          {
            name: "bingbot",
            content: "index, follow",
          },
          {
            name: "slurp",
            content: "index, follow",
          },
          {
            name: "duckduckbot",
            content: "index, follow",
          },
          {
            name: "baiduspider",
            content: "index, follow",
          },
          {
            name: "yandexbot",
            content: "index, follow",
          },
          {
            name: "naver",
            content: "index, follow",
          },
          {
            name: "facebookexternalhit",
            content: "index, follow",
          },
          {
            name: "twitterbot",
            content: "index, follow",
          },
        ],
      };
    }