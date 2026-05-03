import { BlogPage } from "@/components/BlogPage";
import WeaponShadersPost, { metadata } from "@/blog/weapon-shader";

export default function Page() {
  return (
    <BlogPage title={metadata.title}>
      <WeaponShadersPost />
    </BlogPage>
  );
}
