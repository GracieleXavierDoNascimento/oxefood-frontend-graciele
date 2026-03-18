"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "semantic-ui-react";

export default function MenuSistema() {
  const pathname = usePathname();

  return (
    <Menu
      inverted
      fixed="top"
      style={{ margin: 0, borderRadius: 0, zIndex: 1000 }}
    >
      <Menu.Item as={Link} href="/" active={pathname === "/"}>
        Home
      </Menu.Item>

      <Menu.Item as={Link} href="/cliente" active={pathname === "/cliente"}>
        Cliente
      </Menu.Item>

      <Menu.Item as={Link} href="/produto" active={pathname === "/produto"}>
        Produto
      </Menu.Item>

      <Menu.Item as={Link} href="/entregador" active={pathname === "/entregador"}>
        Entregador
      </Menu.Item>
    </Menu>
  );
}