import classes from './index.module.css'
import { Text, Title } from "@mantine/core";

interface ITitles {
  title: string;
  ta?: 'inherit' | 'center' | 'end' | 'start';
  desc: string;
  className?: string;
}

function index({ title, desc, ta = 'inherit', className }: ITitles) {
  return (
    <div className={className === undefined ? classes.titlesWrapper : className}>
      <Title order={2} mt={10} ta={ta}>{title}</Title>
      <Text mt={5} ta={ta}>
        {desc}
      </Text>
    </div>
  )
}

export default index