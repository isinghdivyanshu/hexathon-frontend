import Layout from "../../components/Layout";
import Card from "../../components/Card";

export default function IllustrationStyle() {
  const name = "Illustration Styles";
  return (
    <Layout title={"Marketplace"}>
      <h1 className="text-xl my-6 font-DelaGothicOne text-heading">{name}</h1>
      <div className="flex gap-8 overflow-x-scroll no-scrollbar">
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
        <Card name={name} />
      </div>
    </Layout>
  );
}
