import { IWoodTitle } from "@interfaces/index";
import { Divider, Group, Title } from "@mantine/core";

function WoodTitle({ title, variant }: IWoodTitle) {
  return (
    <>
      <Divider variant={variant} size="md" />    
      <Group justify='center' w="100%">
        <Title mt={30} mb={30} order={2} >
          {title}
        </Title>
      </Group>
      <Divider variant={variant} mb={15} size="md" />
    </>
  )
}

export default WoodTitle