import { BlogPage } from "@/components/BlogPage";
import PreDepthPassPost, { metadata } from "@/blog/pre-depthpass-transparency";

export default function Page() {
  return (
    <BlogPage title={metadata.title}>
      <PreDepthPassPost />
    </BlogPage>
  );
}
