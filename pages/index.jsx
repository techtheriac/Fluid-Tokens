/** @jsxImportSource theme-ui */
import Flex from "@/components/primitives/Flex";


const SmallButton = ({text}) => {
  return (
    <button sx={{
      variant: 'buttons.small'
    }}>{ text || "Insert Prop" }</button>
  )
}

export default function Home() {
  return <div>
    <p sx={{
    variant: 'texts.hero'
    }}>Hello Assholes</p>;
    <Flex gap={'x2l'} direction={'row'}>
     <SmallButton  text="Jesus" />
    </Flex>
  </div>
}
