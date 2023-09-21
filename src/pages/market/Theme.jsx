import Layout from "../../components/Layout";
import Card from "../../components/Card";

export default function Theme() {
  const name = "Themes";
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
