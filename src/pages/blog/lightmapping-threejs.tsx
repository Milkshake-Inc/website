import { BlogPage } from "@/components/BlogPage";
import LightmappingPost, { metadata } from "@/blog/lightmapping-threejs";

export default function Page() {
  return (
    <BlogPage title={metadata.title}>
      <LightmappingPost />
    </BlogPage>
  );
}
