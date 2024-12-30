"use client"

import {Box, Title} from "@mantine/core";
import classes from "./layout.module.css";
import {useAuthRedirect} from "@/services/auth";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
	useAuthRedirect()

  return (
    <Box className={classes.wrapper}>
      <Title order={1} fw="bolder">
        Nomor Surat
      </Title>
      {/*<Text c="dimmed" size="sm" mt={5}>*/}
      {/*  Don&apos;t have an account?{" "}*/}
      {/*  <Anchor size="sm" href="/register">*/}
      {/*    Sign Up*/}
      {/*  </Anchor>*/}
      {/*</Text>*/}
      <Box w={400}>{children}</Box>
    </Box>
  );
}
