import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { metadata } from "~/utils/metadata";
import { encodeToHex } from "~/utils/encode";
export const useDomain = routeLoader$((requestEvent) => {
  return requestEvent.request.url
   
});
export default component$(() => {
  return (
    <>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <p class="text-center text-2xl font-bold">we are still processing the image please try again later</p>
    </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const domain = resolveValue(useDomain);
  return metadata({title:"farcaster",description:"panda",ogImage:`${domain.replace("http","https")}og/${encodeToHex(domain) + ".png"}`,twitterSite:"@koisose_",ogImageType:"image/png"});
};
