export default function ProfilePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <div className="">ProfilePage : {slug}</div>;
}
