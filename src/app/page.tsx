import Image from "next/image";

import Hero from "@/components/shared/Hero/Hero";
import Container from "@/components/shared/Container/Container";
import Info from "@/components/shared/Info/Info";
import MillionsOfPeople from "@/components/shared/MillionsOfPeople/MillionsOfPeople";
import Form from "@/components/shared/Form/Form";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Info />
      <MillionsOfPeople />
      <Form />
    </Container>
  );
}
