import ProfileView from "@/components/profile/ProfileView";

export const metadata = {
  title: "Profile Page - Personal Blog Page",
  description: "Profile Page - Personal Blog Page",
};

export default async function Page({params}) {
  const { user } = await params
  return <ProfileView userId={user} />;
}
